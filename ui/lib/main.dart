import 'package:flutter/material.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';

class QRScannerPage extends StatelessWidget {
  Future<void> startQRScanner() async {
    String scanResult = await FlutterBarcodeScanner.scanBarcode(
        "#ff6666", "Cancel", true, ScanMode.QR);
    print("Scan result: $scanResult");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Scan QR Code"),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: startQRScanner,
          child: Text("Start QR Scanner"),
        ),
      ),
    );
  }
}
