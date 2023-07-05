function Auntetikasi() {
  const token = localStorage.getItem("jwtToken");
  if (token == null) {
    window.location.href = "../login/index.html";
    return;
  }
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    tokenstring: token,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://ws-fatwa.herokuapp.com/auth", requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json().then((result) => LoginBerhasil(result));
      } else {
        window.location.href = "../login/index.html";
      }
    })
    .catch((error) => console.log("error", error));
}

Auntetikasi();

function LoginBerhasil(result) {
  document.getElementById("admin").textContent = "ADMIN";
}
