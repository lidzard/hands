Webcam.set({
width: 300,
height:300,
image_formate: "png",
png_quality:90
});
cam = document.getElementById("webcam");
Webcam.attach(cam);
function TakeSnapShot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML = '<img src="'+data_uri+'">';
    });
}
console.log("ml5 version is " +ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sgqfd1_BY/" ,modelLoaded());
function modelLoaded()
{
console.log("model is loaded");
}