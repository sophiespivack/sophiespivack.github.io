function setup() {
  createCanvas(800,600);
}
function draw() {
  background(199, 177, 249);
if (mouseX > 100){ 
  background(220, 144, 237);
  ellipse(150, height/2,40,40);
}
if (mouseX > 200) {
  background(142, 249, 185);
}
stroke(174, 218, 252); 
line(100, 0, 100, height);

line (200, 0, 200, height);

//removes rough pixelated edges
smooth();
//creates thickness for lines
   strokeWeight(2);
//setting i as the interger variable. limiting i value to 40, adds it every 20 until loop ends
   for (var i = 20; i < 400; i += 20) {
//line one x1 coordinate is at i and ends at 0 which is the y1 coordinate. then i plus i/2 is x2 coordinate and it ends at 80 which is the y2 coordinate
     line(i, 0, i + i/2, 80);
//this forms the second line or kink loop. the x1 coordinate is at i plus i/2 ending at 80, 80 being the y1 coordinate. then the x2 coordinate is i times 1.2 ending at 120 where 120 is the y2 coordinate
     line(i + i/2, 80, i*1.2, 120);
   }
}