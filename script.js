body.onbeforeunload = function(){duplicate};

function duplicate(){
	window.open("https://br3adjam.github.io");
}

int i=0;
function onButtonClick() {
  i++;
  const titleText = document.getElementById("title"); 
  titleText.textContent = i; 
  const testText = document.getElementById("test"); 
  testText.textContent = i;
  const test2Text = document.getElementById("test2"); 
  test2Text.textContent = i;
}
document.getElementById("clickity").addEventListener("click", function() {
  i++;
  const titleText = document.getElementById("title"); 
  titleText.textContent = i; 
  const testText = document.getElementById("test"); 
  testText.textContent = i;
  const test2Text = document.getElementById("test2"); 
  test2Text.textContent = i;
}

  const titleText = document.getElementById("title"); 
  titleText.textContent = "the title has changed"; 
 document.getElementById("title")="title please change"; 
