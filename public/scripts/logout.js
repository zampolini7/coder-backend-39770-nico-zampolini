const getBtnLogout = document.getElementById("logout");

getBtnLogout.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("/api/session/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => alert(res.message))
    .catch((err) => console.log(err));
});
