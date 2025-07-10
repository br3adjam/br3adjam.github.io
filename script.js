let newWindow2,a,b,c;
let i = 0;

function fakeAlert(msg) {
  document.getElementById("alertText").textContent = msg;
  document.getElementById("fakeAlert").style.display = "block";
}


function openAndMonitor() {
    const width = 400;
    const height = 300;

    const screenW = window.screen.availWidth;
    const screenH = window.screen.availHeight;

    const randomLeft = Math.floor(Math.random() * (screenW - width));
    const randomTop = Math.floor(Math.random() * (screenH - height));

    const features = `width=${width},height=${height},left=${randomLeft},top=${randomTop},toolbar=0,location=0,menubar=0`;

    newWindow2 = window.open("https://br3adjam.github.io", "_blank", features);
    
    const timer = setInterval(() => {
        if (newWindow2.closed) {
            clearInterval(timer);
            openAndMonitor(); //reopen if closed
        }
    }, 0);// :3
}

function danger(){
  const t = setInterval(() => {
          openAndMonitor(); //reopen if closed
      }, 1500);// ;-;
}

function go() {
    //trigger fullscreen
   //  function enterFullscreen() {
   //      const elem = document.documentElement;
   //      if (elem.requestFullscreen) elem.requestFullscreen();
   //      else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
   //      else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
   //      else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
   //  }

   // enterFullscreen();

    i++;
    const titleText = document.getElementById("title");
    titleText.textContent = "yip" + "e".repeat(i);  
    if(i==3){
        fakeAlert("you clicked too much");
    }
    if(i==4){
        fakeAlert("maybe you should stop");
    }
    if(i==5){
        fakeAlert("the silliness is too much");
    }
    if(i==6){
        fakeAlert("omg actually stop");
    }
    if(i==7){
        fakeAlert("please");
    }
    if(i==8){
        fakeAlert("PLEASE");
    }
    if(i==9){
        fakeAlert("AGOHAPODHFUOIUERFN(O*IW9f28qyc0n9 qa2w4h{}(A*sy{ (ah(o h(oqaeHFR 0O8WIHFOHASODFUH P92WO 8R");
    }
    if(i==10){
        fakeAlert("meanie");
        selfDestruct();
    }
    if(i>10){
        fakeAlert("clicking more wont help");
    }

    const test2Text = document.getElementById("test2");
    test2Text.textContent = i;

    // openAndMonitor();
}

window.onload = function(){
    document.getElementById("clickity").addEventListener("click", go);
    document.getElementById("dangerButton").addEventListener("click", danger);
};
function onButtonClick(){
    // go();
}

function selfDestruct(){
    const flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100vw";
    flash.style.height = "100vh";
    flash.style.backgroundColor = "white";
    flash.style.zIndex = "9999";
    flash.style.opacity = "1";
    flash.style.transition = "opacity 0.5s ease";
    document.body.appendChild(flash);
    setTimeout(() => {
        flash.style.opacity = "0";
        setTimeout(() => flash.remove(), 500);
    }, 100);

    document.body.style.animation = "shake 0.5s infinite";
      setTimeout(() => {
        document.body.style.animation = "none";
    }, 2000);
  //thx to https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript for the date code which i stole
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
  document.title = "rip page X/X/2025-"+today;
    const test2 = document.getElementById("test2");
    test2.textContent = "*boooooom* ⋆·˚ ༘ *⚠️💣💥 o no";

  
}
