var database, form, user;
var pplCount=0;

function setup() {
  createCanvas(1000, 900);
  database = firebase.database();
  form = new Form();
  form.display();
  user = new PlayerData();
  user.getCount();
 
}

function draw() {
  background("lightblue");
  text(mouseX , 100, 100);
  text(mouseY, 100, 120);
}