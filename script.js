// function duplicate(){
// 	window.open("https://br3adjam.github.io");
// }

//window.onbeforeunload = function(){duplicate};

let newWindow;

function openAndMonitor() {
    newWindow = window.open("br3adjam.github.io");

    const timer = setInterval(() => {
        if (newWindow.closed) {
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
    openAndMonitor();
})

  let titleText = document.getElementById("title"); 
  titleText.textContent = "the title has changed"; 
 document.getElementById("title")="title please change"; 
