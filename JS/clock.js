function setup(){
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw(){
  background(0);
  translate(200, 200);
  rotate(-90);

  let hora = hour();
  let minuto = minute();
  let segundo = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(segundo, 0, 60, 0, 360);
  stroke('rgba(0, 255, 0, 0.3)');
  ellipse(0,0,260,260);

  stroke(150, 100, 255);
  let minuteAngle = map(minuto, 0, 60, 0, 360);
  stroke('rgba(255, 255, 255, 0.3)');
  ellipse(0,0,280,280);

  stroke(150, 255, 100);
  let hourAngle = map(hora % 12, 0, 12, 0, 360);
  stroke('rgba(255, 0, 0, 0.3)');
  ellipse(0,0,300,300);

  push();
  rotate(secondAngle);
  stroke('green');
  arc(0, 0, 260, 260, -2, 2);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke('white');
  arc(0, 0, 280, 280, -2, 2);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke('red');
  arc(0, 0, 300, 300, -2, 2);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0,0);
}
