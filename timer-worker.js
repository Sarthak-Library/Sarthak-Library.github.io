/* Dedicated worker: keeps a steady tick even when the tab is hidden or the browser is in the background. */
var t=null;
onmessage=function(e){
  if(e.data==="start"){clearInterval(t);t=setInterval(function(){postMessage(1)},250)}
  else{clearInterval(t);t=null}
};
