let newWindow2,a,b,c;
let i = 0;

function openAndMonitor() {
    newWindow2 = window.open("https://br3adjam.github.io", '_blank', 'fullscreen=yes,scrollbars=auto');
    
    const timer = setInterval(() => {
        if (newWindow2.closed) {
            clearInterval(timer);
            openAndMonitor(); //reopen if closed
        }
    }, 0);// :3
}

function go() {
    //trigger fullscreen
    function enterFullscreen() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) elem.requestFullscreen();
        else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
        else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    }

   enterFullscreen();

    i++;
    const titleText = document.getElementById("title");
    titleText.textContent = "yip" + "e".repeat(i);  

    const test2Text = document.getElementById("test2");
    test2Text.textContent = i;

    openAndMonitor();
}

window.onload = function(){
    document.getElementById("clickity").addEventListener("click", go);
};
function onButtonClick(){
    // go();
}
