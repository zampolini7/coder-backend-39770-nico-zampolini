(function fectchData() {
  fetch("http://localhost:8060/api/products")
    .then((res) => res.json())
    .then((data) => console.log(data));
})();
