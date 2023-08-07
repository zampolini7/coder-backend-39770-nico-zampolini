document.getElementById("login").addEventListener("click", (event) => {
  event.preventDefault();
  let data = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };
  fetch(`/api/cookies/signed/set/${data.email}`)
    .then((res) => res.json())
    .then((res) => alert(res.message)) //en lugar de imprimir en consola: mostrar mensaje de alerta
    .catch((err) => console.log(err));

  fetch(`/api/session/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  fetch(`/api/session/current`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => alert(res.message))
    .catch((err) => console.log(err));
});
