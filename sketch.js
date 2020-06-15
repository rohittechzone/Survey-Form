var canvas;
var gender;
var total = 0;

var database;

var form, player;

function setup(){
  canvas = createCanvas(250,480);
  database = firebase.database();
  person = new Form();
  person.display();
  people = new Peoples();
}


function draw(){
  
  /*if( === 1){
     clear();
   game.play();
  }*/
}
