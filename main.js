som1 = " ";
som2 = " ";

statusM = " ";

pulsoEsquerdoX = 0;
pulsoEsquerdoY = 0;
pontuacaoE = 0;

pulsoDireitoX = 0;
pulsoDireitoY = 0;
pontuacaoD = 0;


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

    if(pontuacaoE > 0.2){
        fill("#000000");
        stroke(255, 255, 255);
        circle(pulsoEsquerdoX,pulsoEsquerdoY, 20);

        isPlaying().som1.isPlaying()
    }

    if(pontuacaoD > 0.2){
        fill("#000000");
        stroke(255, 255, 255);
        circle(pulsoDireitoX,pulsoDieitoY, 20);

        isPlaying().som2.isPlaying()

        som1.stop();
    }

    if(som2 == false){
        isPlaying().som1.isPlaying()
    }
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
        pontuacaoE = resultado[0].pose.keypoints[9].score;
    }
}