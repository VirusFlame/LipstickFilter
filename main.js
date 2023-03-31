lipsX=0; lipsY=0;


function preload()
{
lip_stick=loadImage("https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/24487/1513701963-clipart-md.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
image(video, 0, 0, 300, 300);
image(lip_stick,lipsX-17,lipsY+20,35,25);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
lipsX=results[0].pose.nose.x;
lipsY=results[0].pose.nose.y;
        console.log("lips x= " +results[0].pose.nose.x);
        console.log("lips y= " +results[0].pose.nose.y);
    }
}