function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modalLoaded);

    
}

function draw(){
    image(video,0,0,500,500)
}

function preload(){
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}

