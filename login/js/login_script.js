import { alert } from "./alertMessage.js";

document.getElementById("tombollogin").addEventListener("click", function () {
  $(".formlogin").fadeOut();
  $(".spinner").delay(500).fadeIn();
  let email = document.getElementById("emaillogin").value;
  let password = document.getElementById("passwordlogin").value;
  PostLogin(email, password);
});

document.onkeydown = function (e) {
  if (e.key === "Enter") {
    $(".formlogin").fadeOut();
    $(".spinner").delay(500).fadeIn();
    let email = document.getElementById("emaillogin").value;
    let password = document.getElementById("passwordlogin").value;
    PostLogin(email, password);
  }
};

function PostLogin(email, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: email,
    password: password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://ws-fatwa.herokuapp.com/login", requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json().then((result) => GetResponsesSuccess(result));
      } else {
        return response.json().then((result) => GetResponsesFailed(result));
      }
    })
    .catch((error) => console.log("error", error));
}

function GetResponsesSuccess(result) {
  saveToken(result.token);
  window.location.href = "../admin/index.html";
}

function GetResponsesFailed(result) {
  document.getElementById("alertlogin").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Login gagal!").replace("#VALUE#", result.message);
  $(".spinner").fadeOut();
  $(".formlogin").delay(800).fadeIn();
}

// Fungsi untuk menyimpan token ke local storage
function saveToken(token) {
  localStorage.setItem("jwtToken", token);
}

if (localStorage.getItem("jwtToken") != null) {
  Swal.fire({
    title: "You are already logged in",
    text: "you need to log out before logging in as different user",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Logout",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("jwtToken");
      window.location.reload();
    } else {
      window.location.href = "../admin/index.html";
    }
  });
}
