let springSound;
let musicBox;
let cnv;
let Y;
let u;
let comparisonY;
let volume = 0;

let Ytop;
let img = [];
let alpha = 0;
let size;

function preload() {
  springSound = loadSound('spring.mp3');
  musicBox = loadSound('musicbox.mp3');

  for (var i = 0; i <62; i++){
      img[i] = loadImage('./image/img' + [i] + '.jpg');
  }
}

function touchStarted() {
  getAudioContext().resume();
}

function setup() {
  cnv = createCanvas(window.innerWidth, window.innerHeight);

  imageMode(CENTER);
  image(img[0], window.innerWidth/2, window.innerHeight/2 - window.innerWidth*0.1, window.innerWidth, window.innerWidth/1.8);
  loop();
  setTimeout(setComparison,30);
}


function draw() {
  let scrollY = window.scrollY;
  Y = floor(scrollY)- 600;
  background(255);

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
    // size = w + (Ytop - 230)*5;
  } else {
      alpha = 0;
      //size = w;
  }

  if (Ytop >=300 ) {
    size = w + (Ytop - 300)*5;
  } else {
    size = w;
  }
  fill(255, 255, 255, alpha);
  rect(0, 0, window.innerWidth, window.innerHeight);

  fill(0);
  textSize(50);
  text(Y, 100, 100);

  if (scrollY >=600) {
    scrollMain();
  }
}

function scrollMain() {
  comapare();
  playMusicSound();
}

function playMusicSound() {
  if (volume > 0) {
    musicBox.amp(volume);
    if(musicBox.isPlaying() == false){
      
      musicBox.play();
    }
  } else if(volume <= 0){
    musicBox.pause();
  }
}

function setComparison() {
  comparisonY = Y;
  setTimeout(setComparison,30);
}

function comapare() {
  // volume++;
  //print(volume);
  if (Y <= comparisonY && Y > 0) {
    u = u-1;
    if(u <= 0) {
      u = 600;
    }
    //print(u);
    window.scrollTo(0,u+600);
    volume += 0.005;
    if (volume >= 1) {
      volume = 1;
    }
    springSound.stop();
  } else if (Y > comparisonY){
    u = Y;
    volume -= 0.01;
    if (volume <= 0) {
      volume = 0;
    }
    if(springSound.isPlaying() == false && Y!=0){
      springSound.play();
    }
  } else if (Y <= 0) {
    springSound.stop();
    u = Y;
    volume -= 0.005;
    if (volume <= 0) {
      volume = 0;
    }
  }
}

//ゼンマイの音
//<http://;.net/sound/search/%E3%82%BC%E3%83%B3%E3%83%9E%E3%82%A4/>

//音の設定
//<https://himco.jp/2020/01/04/3%EF%BC%9A%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89%E3%81%AE%E5%86%8D%E7%94%9F-p5-sound-js-%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89/>
