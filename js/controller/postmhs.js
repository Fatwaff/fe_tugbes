import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { AmbilResponse, urlPOSTmahasiswa } from "../config/url_post.js";
import { alert } from "../../login/js/alertMessage.js";

function pushDataMahasiswa() {
  if (getValue("npm") === "" && getValue("namamhs") === "" && getValue("kelas") === "") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Data harus dilengkapi");
    return;
  }
  if (getValue("npm") === "") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Npm mahasiswa harus diisi");
    return;
  }
  if (getValue("namamhs") === "") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Nama mahasiswa harus diisi");
    return; // Stop further execution if the form is not valid
  }
  if (getValue("kelas") === "") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Kelas harus diisi");
    return; // Stop further execution if the form is not valid
  }
  let data = {
    npm: getValue("npm"),
    nama: getValue("namamhs"),
    kelas: getValue("kelas"),
    jurusan: {
      nama: "Teknik Informatika",
    },
    prodi: {
      nama: "Sarjana Terapan",
    },
  };
  postData(urlPOSTmahasiswa, data, AmbilResponse);
}

onClick("buttonmahasiswa", pushDataMahasiswa);

// document.onkeydown = function (e) {
//   if (e.key === "Enter") {
//     pushDataMahasiswa();
//   }
// };
