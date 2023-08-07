const form = document.getElementById("newProductForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const thumbnail = document.getElementById("thumbnail").value;
  const code = document.getElementById("code").value;
  const stock = document.getElementById("stock").value;
  const token = getCookie("token");
  try {
    const response = await fetch(
      // `http://localhost:${process.env.PORT}/api/products/`,
      `http://localhost:8060/api/products/`,

      {
        method: "POST",
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJ1c2VyLXByZW1pdW0iLCJpYXQiOjE2OTE0MTUxODAsImV4cCI6MTY5NTAxNTE4MH0.FmeJSScFAqv8r1BpJB_QW-dQOzVHdkjlxLVYAjuL-U4`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        }),
      }
    );
    if (response.ok) {
      alert("product created");
      window.location.href = "/index.html";
    } else {
      const errorData = await response.json();
      alert(`Error: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred");
  }
});

function getCookie(name) {
  const value = document.cookie;
  console.log(value, "value");
  // const parts = value.split("; " + name + "=");
  // console.log(parts, "parts");
  // if (parts.length === 2) return parts.pop().split(";").shift();
}
