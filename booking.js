(function(){
var NUM="919450860232",$=function(i){return document.getElementById(i)};
var plans=[["Shift 1","8:00 AM – 2:00 PM",400,500],["Shift 2","2:00 PM – 8:00 PM",400,500],["Full day shift","8:00 AM – 8:00 PM",700,800]],KEYS=["1","2","full"];
var sel=0,dur=1;
function fmt(n){return"₹"+Math.round(n).toLocaleString("en-IN")}
function total(){var d={1:1,3:.9,6:.85}[dur];return plans[sel][2]*dur*d}
function render(){
$("pg").innerHTML=plans.map(function(p,i){return'<div class="pc'+(i==sel?" on":"")+'" data-i="'+i+'"><div class="t"><h3>'+p[0]+"</h3>"+'<span class="bd">Save ₹100 · first 20</span>'+'</div><div class="h">'+p[1]+'</div><div class="pr">'+fmt(p[2])+'<small>/ month</small></div><div class="old">Regular '+fmt(p[3])+'</div><div class="s">'+["Best for morning prep","Best for evening study","Best for a full day of prep"][i]+'</div><button class="btn'+(i==sel?"":" ghost")+'" type="button" aria-pressed="'+(i==sel)+'" aria-label="'+(i==sel?"Selected: ":"Choose ")+p[0]+' plan">'+(i==sel?"Selected ✓":"Choose plan")+'</button></div>'}).join("");
if(!$("pl").options.length)$("pl").innerHTML=plans.map(function(p,i){return"<option value="+i+">"+p[0]+" · "+fmt(p[2])+"</option>"}).join("");$("pl").value=sel;
$("tl").textContent="Total for "+dur+(dur==1?" month":" months");$("tv").textContent=fmt(total());var q=plans[sel],sv=(q[3]||q[2])*dur-total();$("sv").textContent=sv>0?"You save "+fmt(sv)+" compared with regular fees.":"";}
function link(){var t="Hello Sarthak Library, I want to reserve a seat.\nName: "+($("nm").value||"-")+"\nMobile: "+($("mob").value||"-")+"\nPreparing for: "+$("pf").value+"\nPlan: "+plans[sel][0]+"\nDuration: "+dur+" month(s)\nStart date: "+($("sd").value||"-")+"\nFree trial: "+($("tr").checked?"Yes":"No")+"\nEstimated fee: "+fmt(total())+"\nReferrer: "+($("rf").value||"-");$("sw").href="https://wa.me/"+NUM+"?text="+encodeURIComponent(t);var v=$("sd").value;$("psn").textContent=v?v.split("-").reverse().join("-"):"-"}
$("pg").onclick=function(e){var c=e.target.closest(".pc");if(c){sel=+c.dataset.i;render();$("pl").value=sel;if(e.target.closest("button"))$("booking").scrollIntoView()}};
$("pl").onchange=function(){sel=+this.value;render();};
$("du").onchange=function(){dur=+this.value;render();};
["nm","mob","pf","rf","sd","tr"].forEach(function(i){if($(i))$(i).addEventListener("input",link);if($(i))$(i).addEventListener("change",link)});
$("mob").addEventListener("input",function(){this.value=this.value.replace(/\D/g,"")});
$("nm").addEventListener("input",function(){$("pn").textContent=this.value||"Your name"});
/* booking wizard */
var step=0;
var d0=new Date(),iso=new Date(Date.now()-d0.getTimezoneOffset()*6e4).toISOString().slice(0,10);$("sd").min=iso;$("sd").value=iso;
var panes=document.querySelectorAll(".pane"),dots=document.querySelectorAll(".sp span");
function go(n){step=n;panes.forEach(function(x,i){x.classList.toggle("on",i==n)});dots.forEach(function(x,i){x.classList.toggle("on",i<=n)});$("bb").style.visibility=n?"visible":"hidden";$("nx").style.display=n<1?"inline-flex":"none";$("sw").style.display=n===1?"inline-flex":"none";if(n===1){link();$("pn").textContent=$("nm").value||"Your name";$("ps").textContent=plans[sel][0]}if(n>0)document.querySelector(".sp").scrollIntoView({block:"start"})}
$("nx").onclick=function(){go(step+1)};$("bb").onclick=function(){go(step-1)};
/* save the request so it shows up as "pending" in the admin panel (WhatsApp still opens as before) */
var SBU="https://bypixbchtdyimshlnbkn.supabase.co",SBK="sb_publishable_jURYK2fzBX1ZJnt5n8bLXw_f1TkxO8h",lastSent="";
function saveReq(nm,mb){
var body={p_name:nm,p_mobile:mb,p_exam:$("pf").value,p_plan:KEYS[sel],p_months:dur,p_seat:null,p_start:$("sd").value||null,p_trial:!!$("tr").checked,p_ref:($("rf").value||"").trim()||null,p_total:Math.round(total())};
var sig=JSON.stringify(body);if(sig===lastSent)return;/* same request pressed twice: save once */
try{fetch(SBU+"/rest/v1/rpc/submit_booking",{method:"POST",keepalive:true,headers:{apikey:SBK,"Content-Type":"application/json"},body:sig}).then(function(r){if(r.ok)lastSent=sig}).catch(function(){})}catch(x){}
}
$("sw").onclick=function(e){e.preventDefault();var nm=$("nm").value.trim(),mb=$("mob").value,nok=nm.length>=2&&nm.length<=60,mok=/^[6-9]\d{9}$/.test(mb);$("nm").setAttribute("aria-invalid",!nok);$("mob").setAttribute("aria-invalid",!mok);
if(!nok||!mok){$("er").textContent="Please enter your name and a valid 10-digit mobile number.";(!nok?$("nm"):$("mob")).focus();return}
$("er").textContent="Opening WhatsApp. Just press send there and we will confirm your seat.";link();saveReq(nm,mb);var u=$("sw").href,w=window.open(u,"_blank");if(w)w.opener=null;else location.href=u};

go(0);render();
})();