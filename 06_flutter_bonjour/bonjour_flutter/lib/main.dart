import 'package:flutter/material.dart'; 

void main() => runApp(MonApplication());

class MonApplication extends StatelessWidget { 
  @override
  Widget build(BuildContext context) { 
    return MaterialApp(
      home: Scaffold( 
        appBar: AppBar(title: Text('Bonjour App'), backgroundColor: Color(0xb74093),),
        body: Column(
          children: [ 
            Center(
              child: Text ('Bonjour', style: TextStyle(fontSize: 40, color: Colors.purple, fontWeight: FontWeight.bold))
            ),
            Center(
              child: Text ('Je suis Océane', style: TextStyle(fontSize: 40, color: Colors.purple))
            ),
            Image.asset('images/skull.jpg', height: 350,),
            Center(
              child: BoutonContactezMoi()
            )
          ]
        )
      ),
    );
  }
}

class BoutonContactezMoi extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      child: Text('Contactez-moi !'), 
      onPressed: () => showDialog(
        context: context, 
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Contactez-moi'),
            content: Text('Je suis joignable à l\'IMT Atlantique')
          );
        }
      ),
      style: ElevatedButton.styleFrom(primary: Colors.purple),
    );
  }
}