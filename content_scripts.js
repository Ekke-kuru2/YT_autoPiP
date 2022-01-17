window.onload=()=>{
    document.getElementsByTagName("body")[0].addEventListener('click',function(){console.log("click")},false);
    video=document.getElementsByClassName("video-stream")[0];
    console.log("YT auto PiP is loaded.");
    window.addEventListener('focus', function (){
        console.log("focus");
        document.exitPictureInPicture();
        document.getElementsByTagName("body")[0].click();
    }, false);
    window.addEventListener('blur', function(){
        console.log("blur");
        video.requestPictureInPicture();
    }, false);
};