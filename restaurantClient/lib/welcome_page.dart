import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:geolocator/geolocator.dart';

class WelcomePage extends StatefulWidget {
  final User user;

  WelcomePage({required this.user});

  @override
  _WelcomePageState createState() => _WelcomePageState();
}

class _WelcomePageState extends State<WelcomePage> {
  String? _location;
  bool _loadingLocation = true;

  @override
  void initState() {
    super.initState();
    _getLocation();
  }

  Future<void> _getLocation() async {
    bool serviceEnabled;
    LocationPermission permission;

    setState(() {
      _loadingLocation = true;
    });

    // Check if location services are enabled
    serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      _showLocationServicesDialog();
      setState(() {
        _location = 'Location services are disabled.';
        _loadingLocation = false;
      });
      return;
    }

    // Check location permissions
    permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        setState(() {
          _location = 'Location permissions are denied';
          _loadingLocation = false;
        });
        return;
      }
    }

    if (permission == LocationPermission.deniedForever) {
      setState(() {
        _location = 'Location permissions are permanently denied.';
        _loadingLocation = false;
      });
      return;
    }

    // Get the current location with a timeout
    try {
      Position position = await Geolocator.getCurrentPosition(
        desiredAccuracy: LocationAccuracy.high,
        timeLimit: Duration(seconds: 10),
      );
      setState(() {
        _location = 'Lat: ${position.latitude}, Long: ${position.longitude}';
      });
    } catch (e) {
      print("Error getting location: $e");
      setState(() {
        _location = 'Failed to get location. Please try again.';
      });
    } finally {
      setState(() {
        _loadingLocation = false;
      });
    }
  }

  void _showLocationServicesDialog() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Location Services Disabled'),
          content: Text(
              'Location services are disabled. Please enable them in your device settings.'),
          actions: <Widget>[
            TextButton(
              child: Text('OK'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Welcome Page'),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'Hi, ${widget.user.displayName}',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 16),
              Text(
                'Welcome to the app!',
                style: TextStyle(fontSize: 18),
              ),
              SizedBox(height: 16),
              _loadingLocation
                  ? CircularProgressIndicator()
                  : Text(
                      'Your location: $_location',
                      style: TextStyle(fontSize: 16, color: Colors.blueGrey),
                    ),
              SizedBox(height: 16),
              ElevatedButton(
                onPressed: _getLocation,
                child: Text('Refresh Location'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
