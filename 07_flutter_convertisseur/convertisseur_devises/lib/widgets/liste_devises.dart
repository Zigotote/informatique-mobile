import 'package:convertisseur_devises/models/devise.dart';
import 'package:flutter/material.dart';

class ListeDevises extends StatelessWidget {
  ListeDevises({this.devise, this.changerDevise});

  final Devise devise;
  final Function changerDevise;

  @override
  Widget build(BuildContext context) {
    return  DropdownButton(
      isExpanded: true,
      value: devise,
      onChanged: changerDevise,
      items: Devise.values.map((e) => DropdownMenuItem<Devise>(child: Text(e.libelle), value: e)).toList()
    );
  }
}