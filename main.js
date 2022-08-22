var SpeechRecognition= window.webkitSpeechRecognition

var recongaintion = new SpeechRecognition()
function start(){
document.getElementById("mic").src="speak.gif"

 setTimeout(function(){
    document.getElementById("mic").src="mic.png"
 },6000);
    document.getElementById("text_box").innerHTML=""
    recongaintion.start()
}

recongaintion.onresult= function(event){
    console.log(event)
var say= event.results[0][0].transcript
console.log(say)
document.getElementById("text_box").innerHTML= say

if(say=="take my selfie"){
    console.log("Taking selfie in 5 second")
    speek_data= "Taking selfie in 5 second"
    speek()
}

}


function speek(){
    var synth = window.speechSynthesis
    // var speek_data= document.getElementById("text_box").value 
    var utterThis= new SpeechSynthesisUtterance(speek_data) 
    synth.speak(utterThis)

    Webcam.attach(camera)

    setTimeout(function(){
        
take_snap()

    },5000);

   var audio= new Audio("camera-13695.mp3")
   audio.play()
}
Webcam.set({
    width:300,
    height:200,
    image_formet:"jpeg",
    jpeg_quality:90,
   
})
camera=document.getElementById("camera")

function take_snap(){
    Webcam.snap (

    function(data_uri){
        console.log(data_uri)
        image= "<img id='result_image' src=" + data_uri +">"
        document.getElementById("selfie_display").innerHTML= image
        save(data_uri)
    }

    )
}

function save(url){
var link = document.getElementById("link")
link.href= url
link.click()
}