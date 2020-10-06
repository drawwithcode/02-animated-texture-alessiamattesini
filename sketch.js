function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  noFill();
}

function draw() {

  //testo
  push();
  textAlign(CENTER);
  noStroke();
  textSize(30);
  var colore = color('white');
  colore.setAlpha(4000 - millis());
  fill(colore);
  text("Move your mouse to create", 0, 120, width);
  pop();

  background(10, 10); // translucent background

    const colori = ['#FFD639',
               	'#b33c86',
               	'#36f1cd',
                '#acf39d'];
  const colorHex = random(colori);
  stroke(color(colorHex));
  //grid of circles
  for (let x = -100; x <= (width+100); x += 45) {
    for (let y = -100; y <= (height+100); y += 35){
      //moving the grid with the mouse
    let pipox = map(mouseX, 0, width, 0, 100);
    let pippox = x+pipox;
    let pipoy = map(mouseY, 0, height, 0, 100);
    let pippoy = y+pipoy;
  ellipse(pippox, pippoy, 15);}
}
}
