/* Background-safe timer helper (window.BGT). Used by timer.js and home-timer.js.
   - ticks come from a Web Worker, so they are not throttled in background tabs
   - a silent, inaudible tone keeps the audio context (and the tab) alive while a timer runs
   - a browser notification is shown when time is up and the tab is hidden */
(function(){
var W=null,cb=null,AC=null,ka=null,fb=null;
function ctx(){try{if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();if(AC.state==="suspended"&&AC.resume)AC.resume()}catch(e){}return AC}
function keepOn(){try{var c=ctx();if(!c||ka)return;var o=c.createOscillator(),g=c.createGain();g.gain.value=0.0001;o.frequency.value=20;o.connect(g);g.connect(c.destination);o.start();ka={o:o,g:g}}catch(e){}}
function keepOff(){try{if(ka){ka.o.stop();ka.o.disconnect();ka.g.disconnect()}}catch(e){}ka=null}
function ask(){try{if("Notification" in window&&Notification.permission==="default")Notification.requestPermission()}catch(e){}}
function useFallback(){if(fb)return;if(W){try{W.terminate()}catch(e){}W=null}fb=setInterval(function(){if(cb)cb()},250)}
function arm(fn){disarm();cb=fn;keepOn();ask();
  try{W=new Worker("/timer-worker.js");W.onmessage=function(){if(cb)cb()};W.onerror=useFallback;W.postMessage("start")}catch(e){W=null;useFallback()}
  return 1}
function disarm(){cb=null;if(W){try{W.postMessage("stop");W.terminate()}catch(e){}W=null}if(fb){clearInterval(fb);fb=null}keepOff()}
function notify(t,b){try{if("Notification" in window&&Notification.permission==="granted"&&document.visibilityState!=="visible"){var n=new Notification(t,{body:b,tag:"sl-timer",renotify:true});n.onclick=function(){window.focus();n.close()}}}catch(e){}}
document.addEventListener("visibilitychange",function(){if(cb)cb()});
window.BGT={arm:arm,disarm:disarm,notify:notify,ctx:ctx};
})();
