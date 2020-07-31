let springSound;
let musicBox;
let cnv;
let Y;
let u;
let speed = 200;
let mbPlayMode = false;

function preload() {
  springSound = loadSound('spring.mp3');
  musicBox = loadSound('musicbox.mp3');
}

function setup() {
  // document.getElementById('main').innerHTML = new Array(1000).fill(0).map((d,i) => `${i+1}行目…………………………`).join('<br />');
  cnv = createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);
  loop();
}


function draw() {
  let scrollY = window.scrollY;
  Y = floor(scrollY);
  background(255);

  fill(0);
  textSize(50);
  text(Y, 100, 100);
  
  if (mbPlayMode == true) {
    t();
  }
  if (mbPlayMode !=true) {
    f();
  }
}

function mouseClicked(){
  if (mbPlayMode == true) {
    mbPlayMode = false;
  }
  else if (mbPlayMode == false) {
    mbPlayMode = true;
  }
  print(mbPlayMode);
}

function t() {
  u = Y;
  springSound.stop();
  musicBox.rate(1);
  if(musicBox.isPlaying() == false){
    musicBox.play();
  }
  u = u-5;
  print(u);
  window.scrollTo(0,u);
  if (u <= 0) {
    musicBox.pause();
    mbPlayMode = false;
  }
}

function f() {
  musicBox.pause();
  if(Y%20 == 0 && Y != 0) {
    if(springSound.isPlaying() == false){
      springSound.rate(2);
      springSound.play();
    }
  }
}



//ゼンマイの音
//<http://;.net/sound/search/%E3%82%BC%E3%83%B3%E3%83%9E%E3%82%A4/>

//音の設定
//<https://himco.jp/2020/01/04/3%EF%BC%9A%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89%E3%81%AE%E5%86%8D%E7%94%9F-p5-sound-js-%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89/>
