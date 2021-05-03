const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg;
var hour;

function preload() {
    // create getBackgroundImg() here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    
    //change the data in JSON format
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;

    // write code slice the datetime
    hour = datetime.slice(11,13);
    console.log(hour);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }
    else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }
    else if(hour>=08 && hour<=10){
        bg = "sunrise4.png";
    }
    else if(hour>=10 && hour<=12){
        bg = "sunrise5.png";
    }
    else if(hour>=12 && hour<=14){
        bg = "sunrise6.png";
    }
    else if(hour>=14 && hour<=16){
        bg = "sunrise7.png";
    }
    else if(hour>=16 && hour<=18){
        bg = "sunrise8.png";
    }
    else if(hour>=18 && hour<=20){
        bg = "sunrise9.png";
    }
    else if(hour>=23 && hour==0){
        bg = "sunset10.png";
    }
    else if(hour==0 && hour<=03){
        bg = "sunset11.png";
    }
    else {
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

function draw(){
    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    // write code to display time in correct format here
    fill("black");
    textSize(15);

    if(hour>=00 && hour<12){
        text("Time : " + hour.toString() + "AM",200,100);
    }
    else{
        text("Time : " + hour.toString() + "PM",200,100);  
    }
    
    Engine.update(engine);

}