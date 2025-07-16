let newWindow2,a,b,c;
let i = 0;
let countdown=10;
//animated favicon: https://www.faviconvideo.com/ 

setTimeout(() => {
  let favicon_video_image_counter = 0;
  let favicon_video_icon_tag = document.querySelector("link[rel='icon']");
  let favicon_video_images = [
"https://favicongenerator.s3.amazonaws.com/2ccf413f60baa.png","https://favicongenerator.s3.amazonaws.com/cc4e7ba0f7851.png","https://favicongenerator.s3.amazonaws.com/47ffe14efd574.png","https://favicongenerator.s3.amazonaws.com/798583e468b98.png","https://favicongenerator.s3.amazonaws.com/4d47d8e67b4ad.png","https://favicongenerator.s3.amazonaws.com/d8a29fd8c1bd5.png","https://favicongenerator.s3.amazonaws.com/347fdb4335ad7.png","https://favicongenerator.s3.amazonaws.com/22457f9d309ac.png","https://favicongenerator.s3.amazonaws.com/9c486914e58db.png","https://favicongenerator.s3.amazonaws.com/2a3be5286d59.png","https://favicongenerator.s3.amazonaws.com/b122c20ea22a.png","https://favicongenerator.s3.amazonaws.com/fe1aaaca07809.png","https://favicongenerator.s3.amazonaws.com/163156b21233a.png","https://favicongenerator.s3.amazonaws.com/700fe13048d2b.png","https://favicongenerator.s3.amazonaws.com/505d686cc7d9d.png","https://favicongenerator.s3.amazonaws.com/f60c69acbde19.png","https://favicongenerator.s3.amazonaws.com/ec61769460488.png","https://favicongenerator.s3.amazonaws.com/863c2538a26e1.png","https://favicongenerator.s3.amazonaws.com/b188d9b7ab7e2.png","https://favicongenerator.s3.amazonaws.com/3f8caa10709ad.png","https://favicongenerator.s3.amazonaws.com/00dfb91db71b6.png","https://favicongenerator.s3.amazonaws.com/1d0a1244b23dc.png","https://favicongenerator.s3.amazonaws.com/dad3d98e0cf87.png","https://favicongenerator.s3.amazonaws.com/21bff5ccccbbb.png","https://favicongenerator.s3.amazonaws.com/3a4eb18245c0f.png","https://favicongenerator.s3.amazonaws.com/19234c05a40b7.png","https://favicongenerator.s3.amazonaws.com/f2942da3f3832.png","https://favicongenerator.s3.amazonaws.com/2afb458298a38.png","https://favicongenerator.s3.amazonaws.com/2f34fbeeb7ffe.png","https://favicongenerator.s3.amazonaws.com/e43eadc3e2228.png","https://favicongenerator.s3.amazonaws.com/af7d2cc8ee3eb.png","https://favicongenerator.s3.amazonaws.com/ea56ef422a978.png","https://favicongenerator.s3.amazonaws.com/daaaa13f02803.png","https://favicongenerator.s3.amazonaws.com/602844a1a8252.png"];
  async function favicon_video_to_data_url(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      let reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }

  let favicon_video_loaded_images = [];

  favicon_video_images.map((url, idx) => {
    favicon_video_to_data_url(url, function (dataUrl) {
      favicon_video_loaded_images[idx] = dataUrl;
    });
  });

  setInterval(function () {
    if(favicon_video_loaded_images[favicon_video_image_counter]) {
      favicon_video_icon_tag.href = favicon_video_loaded_images[
        favicon_video_image_counter
      ].replace("application/octet-stream", "image/png");
    }
    if (
      favicon_video_image_counter ==
      favicon_video_loaded_images.length - 1
    )
      favicon_video_image_counter = 0;
    else favicon_video_image_counter++;
  }, 100);
}, 2000);


function createAudio(src) {
  //USE RAW AUDIO FILE LINK
    console.log("audio created!");
    let x = document.createElement("audio");
    x.src = src;
    x.style.display = "none";
    x.autoplay = true;
    x.controls = true;
    document.body.appendChild(x);
    x.load();
    x.play().catch(error => {
        console.log("Autoplay prevented:", error);
    });
}

function fakeAlert(msg) {
  console.log("fake alert created! "+msg);
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
  console.log("danger button clicked!");
  const t = setInterval(() => {
          openAndMonitor(); //reopen if closed
      }, 15);// ;-;
}

function go() {
  console.log("button clicked!");
    createAudio("audio/bonk.mp3");
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
    if(i<10){
      console.log("i<10,"+i);
    const titleText = document.getElementById("title");
    titleText.textContent = "yip" + "e".repeat(i);  
    }
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
    if(i==11){
        fakeAlert("that's it now 3:<");
    }
    if(i>11){
      fakeAlert(countdown);
      countdown--;
      if(countdown<-4){
        // window.close(); WONT WORK AHHHHH
        window.open("https://br3adjam.github.io/jumpscare", "_blank");
        // setTimeout(() => {
          window.location.replace("https://artofproblemsolving.com/community/c1595181");
        // }, 0);
      }
    }


    const test2Text = document.getElementById("test2");
    test2Text.textContent = i;

    // openAndMonitor();
}

window.onload = function(){
  console.log("clickEventListeners created!");
    document.getElementById("clickity").addEventListener("click", go);
    document.getElementById("dangerButton").addEventListener("click", danger);
};
function onButtonClick(){
    // go();
}

function selfDestruct(){
    createAudio("audio/vineBoom.mp3");
  console.log("ded");
    const flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100vw";
    flash.style.height = "100vh";
    flash.style.backgroundColor = "white";
    flash.style.zIndex = "9999";
    flash.style.opacity = "1";
    flash.style.transition = "opacity 3.0s ease";
    document.body.appendChild(flash);
    setTimeout(() => {
        createAudio("audio/tinnitus11.mp3");
        flash.style.opacity = "0";
        setTimeout(() => flash.remove(), 1500);
        document.body.style.animation = "shake1 0.2s infinite";
          setTimeout(() => {
            document.body.style.animation = "shake2 0.3s infinite";
            setTimeout(() => {
              document.body.style.animation = "shake3 0.3s infinite";
                  setTimeout(() => {
                    document.body.style.animation = "none";
                }, 5000);
          }, 1000);
        }, 2500);

    }, 1000);
  //thx to https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript for the date code which i stole
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
  document.title = "rip page some day in late 2024-"+today;
    const testText = document.getElementById("test");
    testText.textContent = "*boooooom* ⋆·˚ ༘ *⚠️💣💥 o no";
    const test2Text = document.getElementById("test2");
    test2Text.textContent="i hate you 3:<";

  
}
