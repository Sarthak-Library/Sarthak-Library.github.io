(function(){var d=document,$=function(i){return d.getElementById(i)},r=d.documentElement;
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){}}
var tg=$("tg");function th(t){r.dataset.theme=t;ls("theme",t);if(tg){tg.setAttribute("aria-label",t=="dark"?"Switch to light mode":"Switch to dark mode");tg.textContent=t=="dark"?"☀":"☾"}}
th(r.dataset.theme||"light");if(tg)tg.onclick=function(){th(r.dataset.theme=="dark"?"light":"dark")};
var mb=$("mb"),dr=$("dr"),ov=$("ov"),dx=$("dx");
function dm(o){if(!dr)return;dr.classList.toggle("open",o);ov.classList.toggle("open",o);dr.setAttribute("aria-hidden",!o);mb.setAttribute("aria-expanded",o);mb.setAttribute("aria-label",o?"Close menu":"Open menu");d.body.classList.toggle("lock",o);if(o)dx.focus();else mb.focus()}
if(mb){mb.onclick=function(){dm(true)};dx.onclick=function(){dm(false)};ov.onclick=function(){dm(false)};dr.addEventListener("click",function(e){if(e.target.closest("a"))dm(false)});
d.addEventListener("keydown",function(e){if(e.key=="Escape"&&dr.classList.contains("open"))dm(false)});
matchMedia("(min-width:821px)").addEventListener("change",function(m){if(m.matches&&dr.classList.contains("open"))dm(false)})}
var lB=$("lgB"),lP=$("lgP");if(lB){lB.onclick=function(e){e.stopPropagation();var o=lP.hidden;lP.hidden=!o;lB.setAttribute("aria-expanded",o)};d.addEventListener("click",function(){lP.hidden=true;lB.setAttribute("aria-expanded","false")})}
var bt=$("bt");addEventListener("scroll",function(){if(bt)bt.classList.toggle("on",scrollY>600)},{passive:true});if(bt)bt.onclick=function(){scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"})};
var y=$("yr");if(y)y.textContent=new Date().getFullYear();
var w=$("wa");if(w)w.href="https://wa.me/919450860232?text="+encodeURIComponent("Hello Sarthak Library, I have a question.");
var oe=d.querySelectorAll("[data-offer]");if(oe.length)try{fetch("https://bypixbchtdyimshlnbkn.supabase.co/rest/v1/rpc/offer_status",{method:"POST",headers:{apikey:"sb_publishable_jURYK2fzBX1ZJnt5n8bLXw_f1TkxO8h","Content-Type":"application/json"},body:"{}"}).then(function(r){return r.ok?r.json():null}).then(function(j){if(!j||typeof j.filled!="number"||typeof j.total!="number")return;var left=Math.max(0,j.total-j.filled),t=left>0?"Opening offer: "+j.filled+" of "+j.total+" seats filled · only "+left+" left":"All "+j.total+" opening-offer seats are filled";oe.forEach(function(e){e.textContent=t})}).catch(function(){})}catch(e){}
})();