let cnv;
let Ytop;
let img = [];
let alpha = 0;
let size;


function preload() {
  for (var i = 0; i <62; i++){
      img[i] = loadImage('./image/img' + [i] + '.jpg');
  }
}

// function touchStarted() {
//   getAudioContext().resume();
// }

function setup() {
  cnv = createCanvas(window.innerWidth, window.innerHeight);
//   rectMode(CENTER);
  imageMode(CENTER);
  image(img[0], window.innerWidth/2, window.innerHeight/2 - window.innerWidth*0.1, window.innerWidth, window.innerWidth/1.8);
}


function draw() {
  let scrollY = window.scrollY;
  let w = window.innerWidth;
  let h = window.innerHeight;
  Ytop = floor(scrollY);
//   image(img[1], 0, 0);

  for( var i = 0; i <62; i++) {
    if(Ytop >= i*10) {
     image(img[i], w/2, h/2- w*0.1, size, size/1.8);
    }
  }
  print(Ytop);

  if ( Ytop >= 230 ){
    alpha = Ytop - 230;
    size = w + (Ytop - 230)*5;
  } else {
      alpha = 0;
      size = w;
  }
  fill(255, 255, 255, alpha);
  rect(0, 0, window.innerWidth, window.innerHeight);
}
