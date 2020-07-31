let springSound;
let musicBox;
//let song;
let isUserStarted = false;
let a = 0;
let cnv;
let Y;
let u;
let speed = 200;

function preload() {
  springSound = loadSound('spring.mp3');
  musicBox = loadSound('musicbox.mp3');
//  song = loadSound('spring.mp3');
}

function setup() {
  // document.getElementById('main').innerHTML = new Array(1000).fill(0).map((d,i) => `${i+1}行目…………………………`).join('<br />');
  cnv = createCanvas(window.innerWidth, window.innerHeight);
  //createCanvas(640, 480);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);
  //musicBox.play();
  loop();
}


function draw() {
   //setTimeout(backsound,2000);
  //backsound();
  
  let scrollY = window.scrollY;
  Y = floor(scrollY);

  // mySound.play();
  let brightness = 100 - constrain(scrollY / 100, 0, 60);
  //background(200, 20, brightness);
  background(255);
  if(musicBox.isPlaying() != true){
    u = scrollY;
  }
  brightness = 100 - constrain(u / 100, 0, 60);
  fill(200, 20, brightness);
  rect(0, 0, window.innerWidth * 2, window.innerHeight * 2);
  
  noStroke();
  fill((window.scrollY * 0.1) % 360, 50, brightness, 0.5);
  
  for (let i = -5; i <= 5; i++) {
    push();
    translate(width/2 + i * 200, 200);
    const diffX = map(abs(width/2 + i * 200 - mouseX), 0, width, 1.5, 0);
    scale(lerp(1, 1.25, sin(frameCount % 1000 / 1000.0 * TAU)) + diffX);
    rotate(u * 0.005);
    square(0, 0, 100, 100, 25, 25, 25, 25);
    pop();
  }
  
  if(Y%20 == 0 && Y != 0) {
    if(springSound.isPlaying() == false){
      springSound.rate(2);
      springSound.play();
    }
  }
  
  fill(255);
  textSize(50);
  text(Y, 100, 100);
  // rect(200, 200, 40, 40);
  
  // if(scrollY - a ==
  
  if(musicBox.isPlaying() == true){
    u = u-5;
    print(u);
    
    //background(255);
  }
  if(u <= 0) {
    musicBox.stop();
  }
  if(u <= 400) {
    
    musicBox.rate(u/400);
    //speed--;
    
  }
}

function mouseClicked(){
  fill(255);
  rect(200, 200, 40, 40);
  print('a');
  backsound();
  u = Y;
}

function backsound() {
  loop();
  if(musicBox.isPlaying() == false){
    musicBox.rate(1);
    musicBox.play();
    
  }  
  
}

function playSpring() {
  
}



//ゼンマイの音
//<http://;.net/sound/search/%E3%82%BC%E3%83%B3%E3%83%9E%E3%82%A4/>

//音の設定
//<https://himco.jp/2020/01/04/3%EF%BC%9A%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89%E3%81%AE%E5%86%8D%E7%94%9F-p5-sound-js-%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89/>
