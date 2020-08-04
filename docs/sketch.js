let w;
let h;

let springSound;
let musicBox;
let cnv;
let Y;
let u;
let comparisonY;
let volume = 0;

let Ytop;
let img = [];
let catimg = [];
let alpha = 0;
let alpha2 = 255;
let alpha3 = 0;
let size;

let fluffX = [];
let fluffY = [];
let fluffSpeed = [];

let f = [];
let fluff;
let fluffplus = [];

let speedOfCat = 0;
let catNumber = 0;

let a = 0;

let light;
let fluffs = [];

let title;
let titleSize = 1;

let topSize = 0;

function preload() {
  title = loadImage('image/title.png');
  springSound = loadSound('mp3/spring.mp3');
  musicBox = loadSound('mp3/musicbox.mp3');

  for (var i = 0; i <62; i++){
      img[i] = loadImage('image/orgel/img' + [i] + '-min.jpg');
  }
  for (var i = 0; i < 20; i++) {
    catimg[i] = loadImage('image/cat2/'+[i+1] +'-min.png');
  }
  light = loadImage('image/shadow.png');
  fluff = loadImage('image/white2.png');
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
  noStroke();

  //開始時は1200の位置へ
  window.scrollTo(0,1200);

  //fluffのサイズ指定
  for(var i=0; i<100; i++) {
    fluffX[i] = random(0, window.width);
    fluffY[i] = random(-21000,0);
    f[i] = random(12, 20);
  }
  for(var i=100; i<120; i++) {
    fluffX[i] = random(0, window.width);
    fluffY[i] = random(-21000, -100);
    f[i] = random(1, 5);
  }
  for(var i=120; i<220; i++) {
    fluffX[i] = random(0, window.width);
    fluffY[i] = random(-21000,-100);
    f[i] = random(20, 80);
  }
  for(var i=220; i<240; i++) {
    fluffX[i] = random(0, window.width);
    fluffY[i] = random(-21000, -100);
    fluffSpeed[i] = random(1,4);
    f[i] = random(0.5, 1);
  }
}
function draw() {
  clear();
  let scrollY = window.scrollY;
  Y = floor(scrollY)- 1950;

  w = window.innerWidth;
  h = window.innerHeight;

  //場面の切り替え
  if (scrollY >=1800) {
    scrollMain();
  }else if(scrollY >=800){
    drawtop();
  }else{
    drawTitle();
  }
}

function drawTitle() {
  if(scrollY>340) {
    topSize = (scrollY-340)*5;
  }
  if(topSize >= w){
    topSize = w;
  }
  background(255);
  image(title, w/2-w/20, h/2,titleSize,titleSize/4);
  titleSize = scrollY*40;
  if(titleSize <= 800) {
    titleSize =800;
  }
  fill(255,255, 255,alpha3);
  rect(0,0,w,h);

  if(scrollY>=500) {
    alpha3 = (scrollY-500);
    if(alpha3>=255){
      alpha3 = 255;
    }
  }
}

function drawtop() {
  background(255);
  document.body.style.backgroundColor = "white";
  Ytop = floor(scrollY-1200);

  image(img[0], w/2, h/2- w*0.1, size, size/1.8);

  for( var i = 0; i <62; i++) {
    if(Ytop >= i*10) {
     image(img[i], w/2, h/2- w*0.1, size, size/1.8);
    }
  }

  //白から出ていく
  if(scrollY>=800) {
    alpha3 = 255 - (scrollY-800);
    if(alpha3<=0){
      alpha3 = 0;
    }
  }
  fill(255,255, 255,alpha3);
  rect(0,0,w,h);

  //画面白くしていく
  if ( Ytop >= 270 ){
    alpha = Ytop - 270;
  } else {
      alpha = 0;
  }
  //オルゴール大きくしていく
  if (Ytop >= 340 ) {
    size = w + (Ytop - 340)*5;
  } else {
    size = w;
  }
  fill(255, 255, 255, alpha);
  rect(0, 0, window.innerWidth, window.innerHeight);

  //オルゴールは鳴らさない
  musicBox.stop();
}



function scrollMain() {
  comapare();
  playMusicSound();
  setvisual();

  //一面,白からスタート
  fill(255, 255, 255, alpha2);
  rect(0, 0, window.innerWidth, window.innerHeight);
  alpha2 = 255- (scrollY-1800)*2;
  if(alpha2 <=0) {
    alpha2 = 0;
  }
}

function setvisual() {
  document.body.style.backgroundColor = "rgb(102, 71, 42)";
  if (scrollY >1199){ 
    drawBackFluff();
    image(light, w/2, h/2+h/6, w/2, w/3);

    speedOfCat += a;
    catNumber = floor(speedOfCat % 20);
    image(catimg[catNumber], w/2, h/2, w/4, w/4);
    drawFrontFluff();
  }
}

function drawBackFluff() {
  for(var i=0; i<100; i++){
    fluffplus[i] = fluffY[i] + Y*20/f[i];
    image(fluff, fluffX[i], fluffplus[i], w/f[i], w/f[i]);
  }
  for(var i=120; i<220; i++){
    fluffplus[i] = fluffY[i] + Y*20/f[i];
    image(fluff, fluffX[i], fluffplus[i], w/f[i], w/f[i]);
  }
}

function drawFrontFluff() {
  for(var i=100; i<=120; i++){
    fluffplus[i] = fluffY[i] + Y*20/f[i];
    image(fluff, fluffX[i], fluffplus[i], w/f[i], w/f[i]);
  }
  for(var i=220; i<=225; i++){
    fluffplus[i] = fluffY[i] + Y*20/f[i];
    image(fluff, fluffX[i], fluffplus[i], w/f[i], w/f[i]);
  }
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
  if (Y <= comparisonY && Y > 1) {
    u = u-0.5;
    a+=0.001;
    if(a>=0.2) {
      a=0.2;
    }
    if(u <= 0) {
      u = 0;
    }
    window.scrollTo(0,u+1950);
    volume += 0.005;
    if (volume >= 1) {
      volume = 1;
    }
    springSound.stop();
  } else if (Y > comparisonY || scrollY < 1950){
    u = Y;
    a-=0.005;
    if(a<=0){
      a=0;
    }
    volume -= 0.03;
    if (volume <= 0) {
      volume = 0;
    }
    if(springSound.isPlaying() == false && Y!=1){
      springSound.play();
    }
  } else if (Y <= 1) {
    springSound.stop();
    u = Y;
    volume -= 0.005;
    a-=0.001;
    if(a<=0){
      a=0;
    }
    if (volume <= 0) {
      volume = 0;
    }
  }
}

//ゼンマイの音
//<http://;.net/sound/search/%E3%82%BC%E3%83%B3%E3%83%9E%E3%82%A4/>

//音の設定
//<https://himco.jp/2020/01/04/3%EF%BC%9A%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89%E3%81%AE%E5%86%8D%E7%94%9F-p5-sound-js-%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89/>

