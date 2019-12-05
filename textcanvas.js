var textcanvas = document.getElementById('textcanvas');
var ct = textcanvas.getContext('2d');
var w2 = window.innerWidth;
var h2 = 0.9*window.innerHeight;
textcanvas.width = w2;
textcanvas.height = h2;

ct.font = "3vw Comic Sans MS";
ct.fillStyle = "#A901DB";
ct.textAlign = "center";
ct.fillText("Hello, I'm Md. Moshiur Rhaman,", w2/2, h2/2);
ct.fillText("a student & software developer from Bangladesh.", w2/2, h2/2+h2*0.08);
ct.fillText("Please take a look around!", w2/2, h2/2+h2*0.16);
