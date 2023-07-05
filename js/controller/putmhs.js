import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUTmahasiswa, AmbilResponse } from "../config/url_put.js";
import { alert } from "../../login/js/alertMessage.js";

function pushDataMahasiswa() {
  if (getValue("npm") === "" && getValue("nama") === "" && getValue("kelas") === "") {
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
      nama: "D4 Teknik Informatika",
    },
  };
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`,
  }).then((result) => {
    if (result.isConfirmed) {
      // Swal.fire("Saved!", "", "success");
      putData(urlPUTmahasiswa, data, AmbilResponse);
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}

onClick("buttonmahasiswa", pushDataMahasiswa);
