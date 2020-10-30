import 'package:flutter/material.dart';

import '../styles.dart';

class SaisieNombre extends StatelessWidget {
  SaisieNombre({this.changerNombre});

  final Function changerNombre;

  @override
  Widget build(BuildContext context) {
    return TextField( 
      style: AppStyle.inputStyle,
      onChanged: changerNombre,
    );
  }
}