som1 = " ";
som2 = " ";

pulsoEsquerdoX = 0;
pulsoEsquerdoY = 0;

pulsoDireitoX = 0;
pulsoDireitoY = 0;


function preload(){
    som1 = loadSound("music.mp3");
    som2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, confirmarResultado);
    poseNet.on('pose', pegarPoses);
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function confirmarResultado(){
    console.log("Modelo Carregadp = )");
}
function pegarPoses(resultado){
    if(resultado.length > 0){
        punhoDireitoX = resultado[0].pose.rightWrist.x;
        punhoDireitoY = resultado[0].pose.rightWrist.y;

        punhoEsquerdoX = resultado[0].pose.leftWrist.x;
        punhoEsquerdoY = resultado[0].pose.leftWrist.y;    
    }
}