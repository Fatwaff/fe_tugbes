import { alert } from "./alertMessage.js";

document.getElementById("tombolsignup").addEventListener("click", function () {
  $(".formsignup").fadeOut();
  $(".spinner").delay(500).fadeIn();
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("emailsignup").value;
  let password = document.getElementById("passwordsignup").value;
  let confirmpass = document.getElementById("confirmpass").value;
  PostSignUp(firstname, lastname, email, password, confirmpass);
});

function PostSignUp(firstname, lastname, email, password, confirmpass) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    confirmpass: confirmpass,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://ws-fatwa.herokuapp.com/signup", requestOptions)
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
  document.getElementById("alertlogin").innerHTML = alert.replace("#COLORBG#", "green").replace("#COLORTEXT#", "green").replace("#NAME#", "SignUp berhasil!").replace("#VALUE#", result.message);
  $(".spinner").fadeOut();
  $(".formlogin").delay(800).fadeIn();
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("emailsignup").value = "";
  document.getElementById("passwordsignup").value = "";
  document.getElementById("confirmpass").value = "";
  document.getElementById("alertsignup").innerHTML = "";
}

function GetResponsesFailed(result) {
  document.getElementById("alertsignup").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "SignUp gagal!").replace("#VALUE#", result.message);
  $(".spinner").fadeOut();
  $(".formsignup").delay(800).fadeIn();
}
