let newWindow2,a,b,c;
let i = 0;

function fakeAlert(msg) {
  document.getElementById("alertText").textContent = msg;
  document.getElementById("fakeAlert").style.display = "block";
}


function openAndMonitor() {
    newWindow2 = window.open("https://br3adjam.github.io", '_blank');
    
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
    if(i>2){
        fakeAlert("you clicked too much");
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
