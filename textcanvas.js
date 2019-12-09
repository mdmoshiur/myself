var textcanvas = document.getElementById('textcanvas');
var ct = textcanvas.getContext('2d');
var w2 = window.innerWidth;
var h2 = 0.8*window.innerHeight;
textcanvas.width = w2;
textcanvas.height = h2;

//text styles
ct.font = '3vw "Comic Sans MS"';
ct.fillStyle = "#000000";
ct.textAlign = "center";
var textHeight = parseInt(ct.font)*1.15; //find line height

//for drawing image
var imgSize = 160;
var imgRadius = imgSize/2.0;

//for text position
var x = w2/2.0;
var y = h2/2.0 + imgRadius;

//for image y
var imgX = x - imgRadius;
var imgY = y - imgSize - textHeight-2;
//take image source
var img = new Image();
img.src = "image.jpg";
img.onload = function() {
  //var img = document.getElementById("profile");
  // Save the context so we can undo the clipping region at a later time
  //ct.save();

  // Define the clipping region as an 360 degrees arc at point x and y
  //ct.beginPath();
  ct.arc(imgX + imgRadius, imgY + imgRadius, imgRadius, 0, 2 * Math.PI, false);

  // Clip!
  ct.clip();

  // Draw the image at imageX, imageY.
  ct.drawImage(img, imgX, imgY, imgSize, imgSize);
  // Restore context to undo the clipping
  //ct.restore();
}

//draw lines
ct.fillText("Hello, I'm Md. Moshiur Rhaman,", x, y);
ct.fillText("a student & software developer from Bangladesh.", x, y + textHeight);
ct.fillText("Please take a look around!", x, y + 2.0*textHeight);
