const buttonGithub = document.getElementById("login-github");
buttonGithub.addEventListener("click", () => {
  console.log("tamochelo");
  window.location.href = "/api/session/github";
});
