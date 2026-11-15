(function(){var d=document,$=function(i){return d.getElementById(i)},box=$("timer");if(!box)return;
var pom=box.dataset.mode==="pomodoro",mins=+box.dataset.def||25,phase="focus",cycle=0,left=mins*60,run=null,endAt=0,T0=d.title;
var P={focus:25,short:5,long:15};if(pom)left=P.focus*60;
function fmt(s){var h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return(h?h+":":"")+(h&&m<10?"0":"")+m+":"+(x<10?"0":"")+x}
function paint(){$("tm").textContent=fmt(left);if(pom)$("ph").textContent=phase==="focus"?"Focus time · session "+(cycle%4+1)+" of 4":phase==="short"?"Short break":"Long break";d.title=run?fmt(left)+" | "+T0:T0}
function beep(){try{var C=new(window.AudioContext||window.webkitAudioContext)(),o=C.createOscillator(),g=C.createGain();o.connect(g);g.connect(C.destination);o.frequency.value=880;g.gain.value=.25;o.start();setTimeout(function(){o.stop();C.close()},1000)}catch(e){}}
function stop(){clearInterval(run);run=null;$("go").textContent="Start";paint()}
function setMins(m){stop();mins=m;left=m*60;paint();d.querySelectorAll("[data-m]").forEach(function(b){b.setAttribute("aria-pressed",+b.dataset.m===m?"true":"false")})}
function start(){if(left<=0)left=mins*60;endAt=Date.now()+left*1000;$("go").textContent="Pause";run=setInterval(tick,250);paint()}
function tick(){left=Math.max(0,Math.round((endAt-Date.now())/1000));paint();if(left>0)return;beep();stop();
if(pom){if(phase==="focus"){cycle++;phase=cycle%4===0?"long":"short";left=P[phase]*60}else{phase="focus";left=P.focus*60}paint();setTimeout(start,1200)}else $("ph").textContent="Time is up!"}
$("go").onclick=function(){run?stop():start()};
$("rs").onclick=function(){stop();if(pom){phase="focus";cycle=0;left=P.focus*60}else left=mins*60;paint()};
d.querySelectorAll("[data-m]").forEach(function(b){b.onclick=function(){setMins(+this.dataset.m)}});
var c=$("cu");if(c)c.onsubmit=function(e){e.preventDefault();var v=Math.round(+$("cm").value);if(v>=1&&v<=600)setMins(v)};
var f=$("fs");if(f)f.onclick=function(){var el=box;if(d.fullscreenElement)d.exitFullscreen();else if(el.requestFullscreen)el.requestFullscreen()};
paint()})();
