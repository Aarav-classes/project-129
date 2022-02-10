rightWristY=0;
leftWristY=0;
difference=0;
song="";
function setup(){
    canvas=createCanvas(400,400);
    canvas.centre();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotPoses);
    rightWristY = results[0].pose.rightWrist.y;
    song=loadSound("music.mp3");
    leftWristY = results[0].pose.leftWrist.y;
    song=loadSound("music.mp3");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristY=results[0].pose.leftWrist.y;
        rightWristY=results[0].pose.rightWrist.y;
        difference=floor(leftWristY - rightWristY)
        console.log("leftWristx= " + leftWristx + " rightWristx= " + rightWristx + " difference= " + difference);
    }
    
}
function modelloaded(){
    console.log("posenet is initialized");
}
function draw(){
    image(video, 0, 0, 400, 400);
    
}
function preload(){
    song=loadSound("music.mp3");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}