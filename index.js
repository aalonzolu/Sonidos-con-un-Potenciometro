/*
Autor: Andres Alonzo y Alonzo
Fecha: 7/Feb/2015
*/
var five = require("johnny-five"),
board, potentiometer;

board = new five.Board();

board.on("ready", function() {

  var piezo = new five.Piezo(3);

  potentiometer = new five.Sensor({
    pin: "A2",
    freq: 250
  });
  board.repl.inject({
    pot: potentiometer
  });

  // "data" get the current reading from the potentiometer
  potentiometer.on("data", function() {
    console.log(this.value, this.raw);
    if(this.value >= 700)
    {
      piezo.play({tempo: 150,song: [[ "c4", 1 ],]});
    }
    else if(this.value >= 600)
    {
      piezo.play({tempo: 150,song: [[ "d4", 1 ],]});
    }
    else if(this.value >= 500)
    {
      piezo.play({tempo: 150,song: [[ "e4", 1 ],]});
    }
    else if(this.value >= 400)
    {
      piezo.play({tempo: 150,song: [[ "f4", 1 ],]});
    }
    else if(this.value >= 300)
    {
      piezo.play({tempo: 150,song: [[ "g4", 1 ],]});
    }
    else if(this.value >= 200)
    {
      piezo.play({tempo: 150,song: [[ "a4", 1 ],]});
    }
    else if(this.value >= 50)
    {
      piezo.play({tempo: 150,song: [[ "b4", 1 ],]});
    }


  });
});
