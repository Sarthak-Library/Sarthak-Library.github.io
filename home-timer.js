(function(){var $=function(i){return document.getElementById(i)};
var mins=25,left=1500,run=null,endAt=0,T0=document.title;
var AC,sm=document.querySelector(".focus small"),smT=sm.textContent;function unlock(){try{AC=AC||(window.BGT?BGT.ctx():new(window.AudioContext||window.webkitAudioContext)());if(AC.resume)AC.resume()}catch(e){}}
var OUT;function chime(){/* bell-style alarm, about 4 seconds, loud but clipped by a limiter */
unlock();var t0=AC.currentTime+.05;if(!OUT){var cp=AC.createDynamicsCompressor();cp.threshold.value=-8;cp.ratio.value=12;var mg=AC.createGain();mg.gain.value=1.1;cp.connect(mg);mg.connect(AC.destination);OUT=cp}
function bell(t,f,len,v){[[1,1],[2.01,.5],[3.02,.28],[4.17,.14]].forEach(function(p){var o=AC.createOscillator(),g=AC.createGain();o.type="sine";o.frequency.value=f*p[0];g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v*p[1],t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+len);o.connect(g);g.connect(OUT);o.start(t);o.stop(t+len+.05)})}
for(var r=0;r<3;r++){var b=t0+r*1.35;[784,988,1175,1568].forEach(function(f,i){bell(b+i*.17,f,i==3?1.1:.5,.55)})}}
function beep(){try{chime()}catch(e){}try{navigator.vibrate&&navigator.vibrate([300,120,300,120,300,120,300,120,300])}catch(e){}}
function paint(){var m=Math.floor(left/60),s=left%60,t=(m<10?"0":"")+m+":"+(s<10?"0":"")+s;$("tm").textContent=t;document.title=run?t+" | Focus - Sarthak Library":T0}
function stop(){if(window.BGT)BGT.disarm();clearInterval(run);run=null;$("st").textContent="Start";paint()}
paint();
document.querySelectorAll(".modes button").forEach(function(b){b.onclick=function(){stop();mins=+this.dataset.m;left=mins*60;paint();document.querySelectorAll(".modes button").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")})}});
$("st").onclick=function(){if(run){stop();return}if(left<=0)left=mins*60;unlock();sm.textContent=smT;endAt=Date.now()+left*1000;this.textContent="Pause";var tk=function(){left=Math.max(0,Math.round((endAt-Date.now())/1000));paint();if(left<=0){stop();beep();if(window.BGT)BGT.notify("Focus session complete","Sarthak Library timer");sm.textContent="Session complete. Take a short break."}};run=window.BGT?BGT.arm(tk):setInterval(tk,500);paint()};
$("rs").onclick=function(){stop();left=mins*60;paint()};
})();