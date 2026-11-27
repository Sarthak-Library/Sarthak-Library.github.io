(function(){
var FORM="https://docs.google.com/forms/d/e/1FAIpQLSfMWdSF65AY7P9y2wJwvNgvtTruaQQekIJatcvc5TYqv0mjwg/viewform",U="https://bypixbchtdyimshlnbkn.supabase.co",K="sb_publishable_jURYK2fzBX1ZJnt5n8bLXw_f1TkxO8h";
var $=function(i){return document.getElementById(i)},mem="",pw="",act=false,
PL={"1":"Shift 1 (8:00 AM – 2:00 PM)","2":"Shift 2 (2:00 PM – 8:00 PM)","full":"Full day (8:00 AM – 8:00 PM)"};
var PLS={"1":"Shift 1 · Morning","2":"Shift 2 · Evening","full":"Full Day"};
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
var PASS_IMGS=(function(){var lg=new Image(),bn=new Image();var rd=Promise.all([new Promise(function(r){lg.onload=r;lg.onerror=r;lg.src="/logo.png"}),new Promise(function(r){bn.onload=r;bn.onerror=r;bn.src="/banner-1600.webp"})]);return{lg:lg,bn:bn,rd:rd}})();
function downloadCanvas(cv,name){var a=document.createElement("a");a.href=cv.toDataURL("image/png");a.download=name;a.click()}
function drawPass(cv,d){return PASS_IMGS.rd.then(function(){
var W=1050,H=650,ctx=cv.getContext("2d");cv.width=W;cv.height=H;ctx.save();ctx.beginPath();var rr=24;
ctx.moveTo(rr,0);ctx.arcTo(W,0,W,H,rr);ctx.arcTo(W,H,0,H,rr);ctx.arcTo(0,H,0,0,rr);ctx.arcTo(0,0,W,0,rr);ctx.closePath();ctx.clip();
ctx.fillStyle="#0d1626";ctx.fillRect(0,0,W,H);
if(PASS_IMGS.bn.naturalWidth){var iw=PASS_IMGS.bn.naturalWidth,ih=PASS_IMGS.bn.naturalHeight,ir=iw/ih,cr=W/H,sw,sh,sx,sy;
if(ir>cr){sh=ih;sw=ih*cr;sx=(iw-sw)/2;sy=0}else{sw=iw;sh=iw/cr;sx=0;sy=(ih-sh)/2}
ctx.globalAlpha=.16;ctx.drawImage(PASS_IMGS.bn,sx,sy,sw,sh,0,0,W,H);ctx.globalAlpha=1}
var g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"rgba(13,22,38,.55)");g.addColorStop(.45,"rgba(13,22,38,.88)");g.addColorStop(1,"rgba(13,22,38,.97)");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
ctx.strokeStyle="#c5a46d";ctx.lineWidth=3;ctx.strokeRect(11,11,W-22,H-22);ctx.strokeStyle="rgba(197,164,109,.5)";ctx.lineWidth=1;ctx.strokeRect(19,19,W-38,H-38);
if(PASS_IMGS.lg.naturalWidth){ctx.save();ctx.beginPath();ctx.arc(98,102,52,0,Math.PI*2);ctx.clip();ctx.drawImage(PASS_IMGS.lg,46,50,104,104);ctx.restore();ctx.strokeStyle="#c5a46d";ctx.lineWidth=2;ctx.beginPath();ctx.arc(98,102,52,0,Math.PI*2);ctx.stroke()}
ctx.fillStyle="#f4ead9";ctx.font="700 33px Georgia, serif";ctx.fillText("SARTHAK LIBRARY",168,92);
ctx.fillStyle="#c5a46d";ctx.font="600 16px Georgia, serif";ctx.fillText("& SELF STUDY ZONE",170,118);
ctx.textAlign="right";ctx.fillStyle="#c5a46d";ctx.font="700 15px Arial, sans-serif";ctx.fillText("STUDENT PASS",W-46,70);
ctx.font="12px Arial, sans-serif";ctx.fillStyle="rgba(244,234,217,.65)";ctx.fillText("Pass No. "+(d.member_id||"-"),W-46,92);ctx.textAlign="left";
ctx.strokeStyle="rgba(197,164,109,.4)";ctx.beginPath();ctx.moveTo(46,152);ctx.lineTo(W-46,152);ctx.stroke();
ctx.fillStyle="#fff";ctx.font="700 38px Arial, sans-serif";var nm=d.name||"-";if(ctx.measureText(nm).width>W-94)ctx.font="700 30px Arial, sans-serif";ctx.fillText(nm,47,210);
ctx.fillStyle="rgba(244,234,217,.7)";ctx.font="14px Arial, sans-serif";ctx.fillText("MEMBER ID   "+(d.member_id||"-"),47,236);
function field(x,y,label,val,color){ctx.fillStyle="rgba(244,234,217,.5)";ctx.font="11px Arial, sans-serif";ctx.fillText(label,x,y);ctx.fillStyle=color||"#fff";ctx.font="700 22px Arial, sans-serif";ctx.fillText(val,x,y+27)}
field(47,300,"PLAN / SHIFT",d.planLabel||"-");field(400,300,"SEAT NO.",d.seat?("#"+d.seat):"Not assigned yet");field(700,300,"STATUS",d.statusLabel||"Active",d.statusColor);
field(47,382,"START DATE",d.startFmt||"-");field(400,382,"VALID UNTIL",d.endFmt||"-");
ctx.strokeStyle="rgba(197,164,109,.4)";ctx.beginPath();ctx.moveTo(46,H-118);ctx.lineTo(W-46,H-118);ctx.stroke();
ctx.fillStyle="rgba(244,234,217,.75)";ctx.font="13px Arial, sans-serif";ctx.fillText("Near Loharon Wala Chauraha, Shahjahanpur, UP",47,H-84);ctx.fillText("WhatsApp / Call: +91 94508 60232",47,H-62);
ctx.fillStyle="rgba(244,234,217,.5)";ctx.font="italic 12px Arial, sans-serif";ctx.fillText("This pass certifies a reserved seat at Sarthak Library for the period shown above.",47,H-36);
ctx.textAlign="right";ctx.fillStyle="#f4ead9";ctx.font="italic 27px Georgia, serif";ctx.fillText("Sarthak Library",W-47,H-62);
ctx.strokeStyle="rgba(244,234,217,.45)";ctx.beginPath();ctx.moveTo(W-236,H-50);ctx.lineTo(W-47,H-50);ctx.stroke();
ctx.font="11px Arial, sans-serif";ctx.fillStyle="rgba(244,234,217,.55)";ctx.fillText("Authorized Signatory",W-47,H-32);ctx.textAlign="left";ctx.restore()})}

function rpc(n,b){return fetch(U+"/rest/v1/rpc/"+n,{method:"POST",headers:{apikey:K,"Content-Type":"application/json"},body:JSON.stringify(b)}).then(function(r){if(!r.ok)throw new Error("net");return r.json()})}
function say(t){$("p-sx").textContent=t||""}
function route(){var on=location.hash==="#student";$("app").hidden=!on;$("site").hidden=on;if(on){if($("p-L").hidden&&!mem)$("p-L").hidden=false;paintLogin();window.scrollTo(0,0)}}
function paintLogin(){$("p-le").textContent="Student portal";$("p-lt").textContent=act?"Activate your account":"Welcome back";
$("p-lp").textContent=act?"Ask the library desk for your 8-digit activation code, then choose a password.":"See your seat, fees and receipts, and keep your details updated.";
$("p-lh").textContent=act?"First-time activation":"Student login";$("p-sL").hidden=false;
$("p-spw").firstChild.nodeValue=act?"Choose a password (8+ characters)":"Password";
var ic=$("p-icw");if(!ic){ic=document.createElement("label");ic.id="p-icw";ic.innerHTML='Activation code<input id="p-ic" inputmode="numeric" autocomplete="one-time-code" maxlength="8">';$("p-sm").parentNode.after(ic)}ic.hidden=!act;
var a=$("p-lsw");a.textContent=act?"Already activated? Log in":"First time here? Activate your account";a.href="#student";a.onclick=function(e){e.preventDefault();act=!act;say("");paintLogin()}}
function fdate(x){try{return new Date(x).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}catch(e){return""}}
function AAD(d){return'<h3>Aadhaar (PDF)</h3><div class="c"><p id="p-as">'+(d.aadhaar_uploaded_at?"Uploaded on <strong>"+esc(fdate(d.aadhaar_uploaded_at))+"</strong>. You can upload again to replace it.":"Not uploaded yet.")+'</p>'+
'<label>Aadhaar copy as PDF (max 2 MB)<input id="p-af" type="file" accept="application/pdf,.pdf"></label>'+
'<fieldset class="dcl"><legend>Declaration (required)</legend><label style="display:flex;gap:8px;align-items:flex-start"><input id="p-ac" type="checkbox" required onchange="document.getElementById(\'p-ab\').disabled=!this.checked" style="width:auto;margin-top:4px"><span>I declare that this Aadhaar copy is being submitted <strong>with the full consent of the Aadhaar holder</strong>. I allow Sarthak Library to store it privately and use it only to verify identity for this membership. It will not be shared with anyone else, and I can ask the library to delete it at any time.</span></label></fieldset>'+
'<button id="p-ab" class="p full" disabled onclick="LP.up()">Upload Aadhaar PDF</button><small id="p-au" role="status" aria-live="polite"></small></div>'}
function endOf(d){if(!d.start_date)return null;var s=new Date(d.start_date+"T00:00:00Z"),day=s.getUTCDate();s.setUTCDate(1);s.setUTCMonth(s.getUTCMonth()+(+d.months||1));s.setUTCDate(Math.min(day,new Date(Date.UTC(s.getUTCFullYear(),s.getUTCMonth()+1,0)).getUTCDate()));return s}
var CS=null;
function notifKey(){return"lbSNotif:"+(CS&&CS.member_id)}
function studentNotifOn(){try{return!!CS&&localStorage.getItem(notifKey())==="1"}catch(e){return false}}
function paintBell(){var b=document.getElementById("p-bell");if(!b)return;b.textContent=studentNotifOn()&&"Notification"in window&&Notification.permission==="granted"?"🔔 Reminders on for this device":"🔕 Turn on reminders for this device"}
function toggleBell(){if(!CS)return;if(studentNotifOn()){try{localStorage.setItem(notifKey(),"0")}catch(e){}paintBell();return}
if(!("Notification"in window)){alert("Notifications are not supported in this browser.");return}
Notification.requestPermission().then(function(p){if(p==="granted"){try{localStorage.setItem(notifKey(),"1")}catch(e){}alert("Reminders are on for this device. Each time you open this portal here, you will get an alert if your fee is due or your plan is ending soon, once a day.")}else alert("Notifications were blocked. You can allow them again from your browser's site settings.");paintBell()})}
function notifyFee(d,msg){if(!msg||!studentNotifOn()||!("Notification"in window)||Notification.permission!=="granted")return;var k="lbSNotifDay:"+d.member_id,last;try{last=localStorage.getItem(k)}catch(e){}var ds=(new Date()).toISOString().slice(0,10);if(last===ds)return;
try{var n=new Notification("Sarthak Library — fee reminder",{body:msg,tag:"sl-student-fee",renotify:true});n.onclick=function(){window.focus();n.close()}}catch(e){}
try{localStorage.setItem(k,ds)}catch(e){}}
function remBox(d,due){var e=endOf(d),n=null,t=new Date(),td=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),m=[];
if(e){n=Math.ceil((e-td)/864e5);if(n<0)m.push("Your plan <strong>ended on "+fdate(e)+"</strong>.");else if(n<=7)m.push("Your plan <strong>ends on "+fdate(e)+"</strong> ("+(n==0?"today":n+" day"+(n>1?"s":"")+" left")+").")}
if(due>0)m.push("Pending fee: <strong>₹"+due+"</strong>.");if(!m.length)return"";
var plain=m.join(" ").replace(/<\/?strong>/g,"");notifyFee(d,plain);
var w="https://wa.me/919450860232?text="+encodeURIComponent("Hello Sarthak Library, I am "+d.name+" (Member ID "+d.member_id+"). I want to pay my fees / renew my plan.");
return'<div class="c rm" role="alert"><strong>Fee reminder</strong><br>'+m.join(" ")+' Please pay at the library desk or message us to renew and keep your seat.<br><a class="btn sm" style="margin-top:10px" href="'+w+'" target="_blank" rel="noopener">Message the library on WhatsApp</a><br><button class="btn sm ghost" id="p-bell" style="margin-top:8px" onclick="toggleBell()"></button></div>'}
function view(d){
CS=d;
var paid=(d.payments||[]).reduce(function(s,p){return s+(Number(p.amount)||0)},0),due=Math.max(0,(Number(d.total)||0)+(Number(d.extra)||0)-paid);
$("p-L").hidden=true;var S=$("p-S");S.hidden=false;
S.innerHTML='<div class="ah"><a class="lgo" href="#top"><img src="/logo-96.webp" alt="" width="40" height="40" loading="lazy" decoding="async">Sarthak Library</a><button class="btn sm ghost" onclick="LP.out()">Logout</button></div>'+
'<h2>Hello, '+esc(d.name)+'</h2><p>Member ID <strong>'+esc(d.member_id)+'</strong></p>'+remBox(d,due)+
'<h3>Your student pass</h3><div class="c" style="padding:14px"><canvas id="p-cv" style="width:100%;height:auto;display:block;border-radius:14px"></canvas><button class="btn sm" style="margin-top:12px" onclick="LP.dlPass()">Download my pass (PNG)</button></div>'+
'<div class="s"><div><small>Seat</small><br><strong>'+esc(d.seat||"-")+'</strong></div><div><small>Fee paid</small><br><strong>₹'+paid+'</strong></div><div><small>Due</small><br><strong class="'+(due?"due":"")+'">₹'+due+'</strong></div></div>'+
'<div class="c"><strong>Plan:</strong> '+esc(PL[d.plan_key]||d.plan_key)+' · '+esc(d.months)+' month(s)<br><strong>Start date:</strong> '+esc(d.start_date||"-")+'<br><strong>Plan ends:</strong> '+(endOf(d)?esc(fdate(endOf(d))):"-")+'<br><strong>Total fee:</strong> ₹'+esc(d.total||0)+'</div>'+
'<h3>Payments</h3><div class="c">'+((d.payments||[]).length?d.payments.map(function(p){return esc(p.paid_on)+' — ₹'+esc(p.amount)}).join("<br>"):"No payments recorded yet.")+'</div>'+
'<h3>Your details</h3><div class="c">Your registration details (father\'s name, address, alternate mobile, PIN) are collected through the library\'s registration form. '+(FORM?'<a href="'+FORM+'" target="_blank" rel="noopener">Fill or update the registration form</a>':"")+'</div>'+AAD(d);
var pe=endOf(d),today=new Date(),td0=new Date(Date.UTC(today.getFullYear(),today.getMonth(),today.getDate())),expired=pe&&pe<td0;
drawPass($("p-cv"),{name:d.name,member_id:d.member_id,planLabel:PLS[d.plan_key]||d.plan_key,seat:d.seat,startFmt:d.start_date?fdate(d.start_date):"-",endFmt:pe?fdate(pe):"-",statusLabel:expired?"Expired":"Active",statusColor:expired?"#ff8a80":"#7ee2b8"});paintBell()}
window.LP={
sGo:function(){var m=$("p-sm").value.trim(),p=$("p-sp").value;if(!m||!p){say("Please enter your Member ID and password.");return}
say("Please wait…");var go=function(){return rpc("student_get",{p_member:m,p_pass:p}).then(function(d){if(!d){say("Member ID or password is wrong, or the account is locked for 15 minutes after 5 wrong tries.");return}mem=m;pw=p;say("");view(d)})};
if(!act)return go().catch(function(){say("Could not connect. Please check your internet and try again.")});
var c=$("p-ic").value.trim();rpc("student_activate",{p_member:m,p_code:c,p_pass:p}).then(function(r){if(r==="ok"){act=false;return go()}
say(r==="weak"?"Password must be 8 to 72 characters.":r==="locked"?"Too many wrong tries. Please wait 15 minutes.":"Member ID or activation code is wrong, or this account is already active.")}).catch(function(){say("Could not connect. Please check your internet and try again.")})},
up:function(){var o=$("p-au"),f=$("p-af").files[0];
if(!f){o.textContent="Please choose your Aadhaar PDF first.";return}
if(!/\.pdf$/i.test(f.name)||(f.type&&f.type!=="application/pdf")){o.textContent="Only a PDF file is accepted.";return}
if(f.size>2097152){o.textContent="The file is larger than 2 MB. Please compress it and try again.";return}
if(!$("p-ac").checked){o.textContent="Please tick the declaration box. Without it your Aadhaar cannot be uploaded.";return}
var fd=new FormData();fd.append("member",mem);fd.append("password",pw);fd.append("consent","yes");fd.append("file",f);o.textContent="Uploading…";
fetch(U+"/functions/v1/aadhaar-upload",{method:"POST",headers:{apikey:K},body:fd}).then(function(r){return r.json().catch(function(){return{}}).then(function(j){return{s:r.status,j:j}})}).then(function(x){
if(x.s===200&&x.j.ok){o.textContent="Uploaded ✓";$("p-af").value="";$("p-ac").checked=false;$("p-ab").disabled=true;$("p-as").innerHTML="Uploaded on <strong>"+esc(fdate(x.j.uploaded_at))+"</strong>. You can upload again to replace it.";return}
var e=x.j&&x.j.error;o.textContent=e==="login"?"Your login could not be verified. Please log in again.":e==="too_large"?"The file is larger than 2 MB.":e==="not_pdf"?"This does not look like a valid PDF.":e==="unsafe_pdf"?"This PDF contains active content and was rejected. Please upload a plain scan or the PDF downloaded from UIDAI.":"Could not upload right now. Please try again."}).catch(function(){o.textContent="Could not upload. Check your internet."})},
dlPass:function(){downloadCanvas($("p-cv"),(mem||"pass")+".png")},
out:function(){mem=pw="";CS=null;$("p-S").hidden=true;$("p-S").innerHTML="";$("p-sp").value="";$("p-L").hidden=false;location.hash="#top"}
};
$("p-sL").addEventListener("keydown",function(e){if(e.key==="Enter"){e.preventDefault();LP.sGo()}});
window.addEventListener("hashchange",route);route();
})();
