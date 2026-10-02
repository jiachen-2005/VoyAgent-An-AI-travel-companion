
(() => {
  const tabs=document.querySelectorAll("[data-tab]"), panels=document.querySelectorAll("[data-panel]"), switches=document.querySelectorAll("[data-switch]");
  const setMode=m=>{tabs.forEach(t=>t.classList.toggle("active",t.dataset.tab===m));panels.forEach(p=>p.classList.toggle("active",p.dataset.panel===m));};
  tabs.forEach(t=>t.addEventListener("click",()=>setMode(t.dataset.tab)));
  switches.forEach(b=>b.addEventListener("click",()=>setMode(b.dataset.switch)));
  document.querySelectorAll("[data-toggle-password]").forEach(btn=>btn.addEventListener("click",()=>{const i=document.getElementById(btn.dataset.togglePassword);i.type=i.type==="password"?"text":"password";}));
  function done(user){localStorage.setItem("voyagent-demo-authenticated","true");if(user)localStorage.setItem("voyagent-demo-user",JSON.stringify(user));location.href="planner.html";}
  document.getElementById("login-panel").addEventListener("submit",e=>{e.preventDefault();done({email:document.getElementById("login-email").value.trim()});});
  document.getElementById("register-panel").addEventListener("submit", e => {
  e.preventDefault();

  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("register-confirm-password").value;

  // Check whether both passwords are the same
  const passwordError = document.getElementById("password-error");
  const confirmPasswordInput = document.getElementById(
    "register-confirm-password"
  );

  if (password !== confirmPassword) {
  passwordError.textContent = "⚠ Passwords do not match.";
  confirmPasswordInput.classList.add("input-error");

  document
    .getElementById("password-modal")
    .classList.add("active");

  return;
}

  passwordError.textContent = "";
  confirmPasswordInput.classList.remove("input-error");

  // Save the registered user
  const user = {
    name: document.getElementById("register-name").value.trim(),
    email: document.getElementById("register-email").value.trim()
  };

  localStorage.setItem("voyagent-demo-authenticated", "true");
  localStorage.setItem("voyagent-demo-user", JSON.stringify(user));

  // Show success popup
  document
    .getElementById("success-modal")
    .classList.add("active");
});
  document.getElementById("google-login").addEventListener("click",()=>done({name:"Google User"}));
  document.getElementById("google-register").addEventListener("click",()=>done({name:"Google User"}));


  document
  .getElementById("password-modal-ok")
  .addEventListener("click", () => {
    document
      .getElementById("password-modal")
      .classList.remove("active");

    document
      .getElementById("register-confirm-password")
      .focus();
  });

  document
  .getElementById("success-modal-continue")
  .addEventListener("click", () => {
    location.href = "planner.html";
  });
})();
