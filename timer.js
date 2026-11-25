(function(){var d=document,$=function(i){return d.getElementById(i)},box=$("timer");if(!box)return;
var pom=box.dataset.mode==="pomodoro",mins=+box.dataset.def||25,phase="focus",cycle=0,left=mins*60,run=null,endAt=0,T0=d.title;
var P={focus:25,short:5,long:15};if(pom)left=P.focus*60;
function fmt(s){var h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return(h?h+":":"")+(h&&m<10?"0":"")+m+":"+(x<10?"0":"")+x}
function paint(){$("tm").textContent=fmt(left);if(pom)$("ph").textContent=phase==="focus"?"Focus time · session "+(cycle%4+1)+" of 4":phase==="short"?"Short break":"Long break";d.title=run?fmt(left)+" | "+T0:T0}
var AC;function unlock(){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.resume)AC.resume()}catch(e){}}
var OUT;function chime(){/* bell-style alarm, about 4 seconds, loud but clipped by a limiter */
unlock();var t0=AC.currentTime+.05;if(!OUT){var cp=AC.createDynamicsCompressor();cp.threshold.value=-8;cp.ratio.value=12;var mg=AC.createGain();mg.gain.value=1.1;cp.connect(mg);mg.connect(AC.destination);OUT=cp}
function bell(t,f,len,v){[[1,1],[2.01,.5],[3.02,.28],[4.17,.14]].forEach(function(p){var o=AC.createOscillator(),g=AC.createGain();o.type="sine";o.frequency.value=f*p[0];g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v*p[1],t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+len);o.connect(g);g.connect(OUT);o.start(t);o.stop(t+len+.05)})}
for(var r=0;r<3;r++){var b=t0+r*1.35;[784,988,1175,1568].forEach(function(f,i){bell(b+i*.17,f,i==3?1.1:.5,.55)})}}
function beep(){try{chime()}catch(e){}try{navigator.vibrate&&navigator.vibrate([300,120,300,120,300,120,300,120,300])}catch(e){}}
function stop(){clearInterval(run);run=null;$("go").textContent="Start";paint()}
function setMins(m){stop();mins=m;left=m*60;paint();d.querySelectorAll("[data-m]").forEach(function(b){b.setAttribute("aria-pressed",+b.dataset.m===m?"true":"false")})}
function start(){unlock();if(left<=0)left=mins*60;endAt=Date.now()+left*1000;$("go").textContent="Pause";run=setInterval(tick,250);paint()}
function tick(){left=Math.max(0,Math.round((endAt-Date.now())/1000));paint();if(left>0)return;beep();stop();
if(pom){if(phase==="focus"){cycle++;phase=cycle%4===0?"long":"short";left=P[phase]*60}else{phase="focus";left=P.focus*60}paint();setTimeout(start,1200)}else $("ph").textContent="Time is up!"}
$("go").onclick=function(){run?stop():start()};
$("rs").onclick=function(){stop();if(pom){phase="focus";cycle=0;left=P.focus*60}else left=mins*60;paint()};
d.querySelectorAll("[data-m]").forEach(function(b){b.onclick=function(){setMins(+this.dataset.m)}});
var c=$("cu");if(c)c.onsubmit=function(e){e.preventDefault();var v=Math.round(+$("cm").value);if(v>=1&&v<=600)setMins(v)};
var f=$("fs");if(f)f.onclick=function(){var el=box;if(d.fullscreenElement)d.exitFullscreen();else if(el.requestFullscreen)el.requestFullscreen()};
paint()})();
