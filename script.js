// function duplicate(){
// 	window.open("https://br3adjam.github.io");
// }

//window.onbeforeunload = function(){duplicate};

let newWindow,newWindow2,newWindow3,newWindow4,newWindow5,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,aa,ab,ac,ad,ae,af,ag,ah,ai;

function openAndMonitor() {
        newWindow = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        newWindow2 = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        newWindow3 = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        newWindow4 = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        newWindow5 = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        q = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        w = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        e = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        r = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        t = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        y = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        u = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        i = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        o = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        p = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        a = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // s = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // d = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // f = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // g = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // h = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // j = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // k = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // l = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // x = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // z = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // c = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // v = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // b = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // n = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // m = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // aa = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // ab = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // ac = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // ad = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // ae = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // af = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // ag = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // ah = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        // ai = window.open("br3adjam.github.io",'_blank', 'fullscreen=yes,scrollbars=auto');
        
        const timer = setInterval(() => {
            if (newWindow2.closed) {
                clearInterval(timer);
                openAndMonitor();
            }
        }, 0);
}

var i=0;
//function onButtonClick() {
//  i++;
//  let titleText = document.getElementById("title"); 
//  titleText.textContent = i; 
//  let testText = document.getElementById("test"); 
//  testText.textContent = i;
//  let test2Text = document.getElementById("test2"); 
//  test2Text.textContent = i;
//    openAndMonitor();
//}
document.getElementById("clickity").addEventListener("click", function() {
  function enterFullscreen() {
  const elem = document.documentElement; // Or any specific element like document.getElementById("myVideo")

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
  }
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
