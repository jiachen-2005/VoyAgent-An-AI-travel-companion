
(() => {
  const tabs=document.querySelectorAll("[data-tab]"), panels=document.querySelectorAll("[data-panel]"), switches=document.querySelectorAll("[data-switch]");
  const setMode=m=>{tabs.forEach(t=>t.classList.toggle("active",t.dataset.tab===m));panels.forEach(p=>p.classList.toggle("active",p.dataset.panel===m));};
  tabs.forEach(t=>t.addEventListener("click",()=>setMode(t.dataset.tab)));
  switches.forEach(b=>b.addEventListener("click",()=>setMode(b.dataset.switch)));
  document.querySelectorAll("[data-toggle-password]").forEach(btn=>btn.addEventListener("click",()=>{const i=document.getElementById(btn.dataset.togglePassword);i.type=i.type==="password"?"text":"password";}));
  function done(user){localStorage.setItem("voyagent-demo-authenticated","true");if(user)localStorage.setItem("voyagent-demo-user",JSON.stringify(user));location.href="planner.html";}
  document
    .getElementById("login-panel")
    .addEventListener("submit", e => {
      e.preventDefault();

      const email = document
        .getElementById("login-email")
        .value
        .trim();

      const password = document
        .getElementById("login-password")
        .value;

      const savedAccount = JSON.parse(
        localStorage.getItem("voyagent-demo-account")
      );

      // No account has been registered
      if (!savedAccount) {
        document
          .getElementById("account-modal")
          .classList.add("active");

        return;
      }

      // Wrong email
      if (email !== savedAccount.email) {
        document
          .getElementById("account-modal")
          .classList.add("active");

        return;
      }

      // Wrong password
      if (password !== savedAccount.password) {

      // Show red error below password field
      document.getElementById("login-password-error").textContent =
        "⚠ Incorrect password. Please try again.";

      document
        .getElementById("login-password")
        .classList.add("input-error");

      // Show popup
      document
        .getElementById("login-password-modal")
        .classList.add("active");

      return;
    }
    // Clear previous password error when password is correct
    document.getElementById("login-password-error").textContent = "";

    document
      .getElementById("login-password")
      .classList.remove("input-error");

      // Correct email and password
      localStorage.setItem(
        "voyagent-demo-authenticated",
        "true"
      );

      localStorage.setItem(
        "voyagent-demo-user",
        JSON.stringify({
          name: savedAccount.name,
          email: savedAccount.email
        })
      );

      // Show login success popup
      document
        .getElementById("login-success-modal")
        .classList.add("active");
    });
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

  // Save the registered account
  const user = {
    name: document.getElementById("register-name").value.trim(),
    email: document.getElementById("register-email").value.trim()
  };

  const account = {
    name: user.name,
    email: user.email,
    password: password
  };

  localStorage.setItem(
    "voyagent-demo-account",
    JSON.stringify(account)
  );

  localStorage.setItem(
    "voyagent-demo-authenticated",
    "true"
  );

  localStorage.setItem(
    "voyagent-demo-user",
    JSON.stringify(user)
  );

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

  document
  .getElementById("account-modal-register")
  .addEventListener("click", () => {

    // Close popup
    document
      .getElementById("account-modal")
      .classList.remove("active");

    // Switch to Register
    setMode("register");
  });


  // Incorrect password - Try Again
  document
    .getElementById("login-password-modal-try")
    .addEventListener("click", () => {

      // Close incorrect password popup
      document
        .getElementById("login-password-modal")
        .classList.remove("active");

      // Clear wrong password
      document.getElementById("login-password").value = "";

      // Put cursor back into password field
      document.getElementById("login-password").focus();
    });


  // Successful login - Proceed to Planner
  document
    .getElementById("login-success-continue")
    .addEventListener("click", () => {
      location.href = "planner.html";
  });
})();
