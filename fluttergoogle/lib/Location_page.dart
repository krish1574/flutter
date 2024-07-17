import 'package:flutter/material.dart';
import 'package:location/location.dart';
import 'map_page.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class LocationPage extends StatefulWidget {
  @override
  _LocationPageState createState() => _LocationPageState();
}

class _LocationPageState extends State<LocationPage> {
  Location _location = Location();
  LatLng? _currentPosition;

  @override
  void initState() {
    super.initState();
    _fetchLocation();
  }

  Future<void> _fetchLocation() async {
    try {
      LocationData locationData = await _location.getLocation();
      setState(() {
        _currentPosition = LatLng(locationData.latitude!, locationData.longitude!);
      });

      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => MapPage(currentPosition: _currentPosition!),
        ),
      );
    } catch (e) {
      print('Could not get location: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Fetching Location'),
      ),
      body: Center(
        child: _currentPosition == null
            ? CircularProgressIndicator()
            : Text('Location fetched! Redirecting to map...'),
      ),
    );
  }
}
