
(() => {
  const tabs=document.querySelectorAll("[data-tab]"), panels=document.querySelectorAll("[data-panel]"), switches=document.querySelectorAll("[data-switch]");
  const setMode=m=>{tabs.forEach(t=>t.classList.toggle("active",t.dataset.tab===m));panels.forEach(p=>p.classList.toggle("active",p.dataset.panel===m));};
  tabs.forEach(t=>t.addEventListener("click",()=>setMode(t.dataset.tab)));
  switches.forEach(b=>b.addEventListener("click",()=>setMode(b.dataset.switch)));
  document.querySelectorAll("[data-toggle-password]").forEach(btn=>btn.addEventListener("click",()=>{const i=document.getElementById(btn.dataset.togglePassword);i.type=i.type==="password"?"text":"password";}));
  function done(user){localStorage.setItem("voyagent-demo-authenticated","true");if(user)localStorage.setItem("voyagent-demo-user",JSON.stringify(user));location.href="planner.html";}
  document.getElementById("login-panel").addEventListener("submit",e=>{e.preventDefault();done({email:document.getElementById("login-email").value.trim()});});
  document.getElementById("register-panel").addEventListener("submit",e=>{e.preventDefault();done({name:document.getElementById("register-name").value.trim(),email:document.getElementById("register-email").value.trim()});});
  document.getElementById("google-login").addEventListener("click",()=>done({name:"Google User"}));
  document.getElementById("google-register").addEventListener("click",()=>done({name:"Google User"}));
})();
