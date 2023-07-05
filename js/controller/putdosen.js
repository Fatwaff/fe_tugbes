import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUTdosen, AmbilResponse } from "../config/url_put.js";
import { alert } from "../../login/js/alertMessage.js";

function pushDataDosen() {
  if (getValue("nid") === "" && getValue("nama") === "") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Data harus dilengkapi");
    return;
  }
  if (getValue("nid") === "") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Nid dosen harus diisi");
    return;
  }
  if (getValue("nama") === "") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Nama dosen harus diisi");
    return; // Stop further execution if the form is not valid
  }
  let data = {
    nid: getValue("nid"),
    nama: getValue("nama"),
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
      putData(urlPUTdosen, data, AmbilResponse);
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}

onClick("buttondosen", pushDataDosen);
