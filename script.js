// function duplicate(){
// 	window.open("https://br3adjam.github.io");
// }

//window.onbeforeunload = function(){duplicate};

let newWindow,newWindow2,newWindow3,newWindow4,newWindow5;

function openAndMonitor() {
        newWindow = window.open("br3adjam.github.io");
        newWindow2 = window.open("br3adjam.github.io");
        newWindow3 = window.open("br3adjam.github.io");
        newWindow4 = window.open("br3adjam.github.io");
        newWindow5 = window.open("br3adjam.github.io");

    
        const timer = setInterval(() => {
            if (newWindow.closed) {
                clearInterval(timer);
                openAndMonitor();
            }
            if (newWindow2.closed) {
                clearInterval(timer);
                openAndMonitor();
            }
            if (newWindow3.closed) {
                clearInterval(timer);
                openAndMonitor();
            }
            if (newWindow4.closed) {
                clearInterval(timer);
                openAndMonitor();
            }
            if (newWindow5.closed) {
                clearInterval(timer);
                openAndMonitor();
            }
        }, 0);
}

var i=0;
function onButtonClick() {
  i++;
  let titleText = document.getElementById("title"); 
  titleText.textContent = i; 
  let testText = document.getElementById("test"); 
  testText.textContent = i;
  let test2Text = document.getElementById("test2"); 
  test2Text.textContent = i;
    openAndMonitor();
}
document.getElementById("clickity").addEventListener("click", function() {
  i++;
  let titleText = document.getElementById("title"); 
  titleText.textContent = i; 
  let testText = document.getElementById("test"); 
  testText.textContent = i;
  let test2Text = document.getElementById("test2"); 
  test2Text.textContent = i;
    for(let i=0;i<500;i++){
        openAndMonitor();
    }
})

  let titleText = document.getElementById("title"); 
  titleText.textContent = "the title has changed"; 
 document.getElementById("title")="title please change"; 
