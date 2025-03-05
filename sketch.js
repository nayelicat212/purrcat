let catImg;
let heartImg;
let purr;
let meow;
let showHearts = false;
let heartY1, heartY2, heartY3;

function preload() {
  catImg = loadImage("https://raw.githubusercontent.com/nayelicat212/cute_cat/refs/heads/main/final_cat.png"); 
  heartImg = loadImage("https://raw.githubusercontent.com/nayelicat212/cute_cat/refs/heads/main/floating_heart.png");

  meow = createAudio('https://raw.githubusercontent.com/nayelicat212/cute_cat/refs/heads/main/cat-meow-297927.mp3');
  purr = createAudio('https://raw.githubusercontent.com/nayelicat212/cute_cat/refs/heads/main/purr.mp3');
}

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
}

function draw() {
  background('#D5FFFF'); 
  
  image(catImg, width / 2, height / 2, 500, 500);

  
  

  if (showHearts) {
    // this will place the heart images and size them 
    image(heartImg, width / 2 - 40, heartY1, 40, 40); // left heart
    image(heartImg, width / 2, heartY2, 50, 50); // middle heart
    image(heartImg, width / 2 + 40, heartY3, 40, 40); // right heart

    // this makes them move at different speeds 
    heartY1 -= 2;
    heartY2 -= 2.5;
    heartY3 -= 2.2;

    // subracting 150 moves the hearts up
    if (heartY2 < height / 2 - 150) {
      showHearts = false;
    }
  }
}

function keyPressed() {
  meow.play();
}

function mousePressed() {
  if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
      mouseY > height / 2 - 100 && mouseY < height / 2 + 100) {
    purr.play();
    showText = true;
    showHearts = true;

    // y positions for the hearts 
    heartY1 = height / 2 - 50;
    heartY2 = height / 2 - 50;
    heartY3 = height / 2 - 50;
  }
}
