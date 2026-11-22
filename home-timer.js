(function(){var $=function(i){return document.getElementById(i)};
var mins=25,left=1500,run=null,endAt=0,T0=document.title;
var AC,sm=document.querySelector(".focus small"),smT=sm.textContent;function unlock(){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.resume)AC.resume()}catch(e){}}
function beep(){try{unlock();var o=AC.createOscillator(),g=AC.createGain();o.connect(g);g.connect(AC.destination);o.frequency.value=880;g.gain.value=.2;o.start();setTimeout(function(){o.stop()},900)}catch(e){}try{navigator.vibrate&&navigator.vibrate([200,100,200])}catch(e){}}
function paint(){var m=Math.floor(left/60),s=left%60,t=(m<10?"0":"")+m+":"+(s<10?"0":"")+s;$("tm").textContent=t;document.title=run?t+" | Focus - Sarthak Library":T0}
function stop(){clearInterval(run);run=null;$("st").textContent="Start";paint()}
paint();
document.querySelectorAll(".modes button").forEach(function(b){b.onclick=function(){stop();mins=+this.dataset.m;left=mins*60;paint();document.querySelectorAll(".modes button").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")})}});
$("st").onclick=function(){if(run){stop();return}if(left<=0)left=mins*60;unlock();sm.textContent=smT;endAt=Date.now()+left*1000;this.textContent="Pause";run=setInterval(function(){left=Math.max(0,Math.round((endAt-Date.now())/1000));paint();if(left<=0){stop();beep();sm.textContent="Session complete. Take a short break."}},500);paint()};
$("rs").onclick=function(){stop();left=mins*60;paint()};
})();