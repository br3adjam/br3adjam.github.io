int i=0;
document.getElementById("clickity").addEventListener("click", function() {
  i++;
  const titleText = document.getElementById("title"); 
  titleText.textContent = i; 
}


