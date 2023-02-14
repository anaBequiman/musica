som1 = " ";
som2 = " ";

statusM1 = " ";
statusM2 = " ";

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

        statusM1 = som1.isPlaying();

        if(statusM1 == false){
            som2.stop();
            som1.play();
            document.getElementById("musica").innerHTML = "Harry Potter";
        }
    }

    else{
        fill("#000000");
        stroke(255, 255, 255);
        circle(pulsoDireitoX,pulsoDireitoY, 20);

        statusM2 = som2.isPlaying();
        
        if(statusM1 == false){
            som1.stop();
            som2.play();
            document.getElementById("musica").innerHTML = "Musica animada";
        }
    }
}
function confirmarResultado(){
    console.log("Modelo Carregadp = )");
}
function pegarPoses(resultado){
    if(resultado.length > 0){
        punhoDireitoX = resultado[0].pose.rightWrist.x;
        punhoDireitoY = resultado[0].pose.rightWrist.y;
        pontuacaoD = resultado[0].pose.keypoints[10].score;

        punhoEsquerdoX = resultado[0].pose.leftWrist.x;
        punhoEsquerdoY = resultado[0].pose.leftWrist.y;    
        pontuacaoE = resultado[0].pose.keypoints[9].score;
    }
}