import 'package:flutter/material.dart'
    show AppBar, BuildContext, Scaffold, State, StatefulWidget, Text, Widget;
import 'package:google_maps_flutter/google_maps_flutter.dart';

class MapPage extends StatefulWidget {
  final LatLng currentPosition;

  const MapPage({super.key, required this.currentPosition});

  @override
  _MapPageState createState() => _MapPageState();
}

class _MapPageState extends State<MapPage> {
  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          title: const Text('Google Maps'),
        ),
        body: GoogleMap(
          initialCameraPosition: CameraPosition(
            target: widget.currentPosition,
            zoom: 15,
          ),
          onMapCreated: (GoogleMapController controller) {},
          myLocationEnabled: true,
        ),
      );
}
