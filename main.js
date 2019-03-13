var fgImage=null;
var bgImage=null;
var canvasuno=document.getElementById("uno");
var canvasdos=document.getElementById("dos");
var canvastres=document.getElementById("tres");

function loadForegroundImage(){
  var imgbotonuno=document.getElementById("fgfile");
  fgImage=new SimpleImage(imgbotonuno);
  fgImage.drawTo(canvasuno)
  }

function loadBackgroundImage(){
  var imgbotondos=document.getElementById("bgfile");
  bgImage=new SimpleImage(imgbotondos);
  bgImage.drawTo(canvasdos)
  }

function doGreenScreen(){
 if (fgImage==null ||! fgImage.complete()) {
   alert("Foreground not Loaded")
   return;
  }else if (bgImage==null ||! bgImage.complete()) {
    alert("Background not Loaded")
    return;
  }
  //clearcanvas();
  
  var output=new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
  

  for (var pixel of fgImage.values()){
    
    
    if (pixel.getGreen()>pixel.getRed()+pixel.getBlue()){
        
        var x=pixel.getX();
        var y=pixel.getY();
        var bgpixel=bgImage.getPixel(x,y);
        
        output.setPixel(x,y,bgpixel);
        
        
    }else{
    output.setPixel(pixel.getX(),pixel.getY(), pixel);
}
}
  
  output.drawTo(canvastres)

  }
  


function clearCanvas() {
  var a =canvasuno.getContext("2d");
  var b =canvasdos.getContext("2d");
  var c =canvastres.getContext("2d");
  a.clearRect(0,0,canvasuno.width,canvasuno.height);
  b.clearRect(0,0, canvasdos.width,canvasdos.height);
  c.clearRect(0,0, canvastres.width,canvastres.height);
            }