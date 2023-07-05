import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOSTdosen, AmbilResponse } from "../config/url_post.js";
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
  // nid : parseFloat(getValue("nid")),
  let data = {
    nid: getValue("nid"),
    nama: getValue("nama"),
    prodi: {
      nama: "D4 Teknik Informatika",
    },
  };
  //   Swal.fire({
  //     title: "Do you want to save the changes?",
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: "Save",
  //     denyButtonText: `Don't save`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  // Swal.fire("Saved!", "", "success");
  postData(urlPOSTdosen, data, AmbilResponse);
  //     } else if (result.isDenied) {
  //       Swal.fire("Changes are not saved", "", "info");
  //     }
  //   });
}

onClick("buttondosen", pushDataDosen);

// document.onkeydown = function (e) {
//   if (e.key === "Enter") {
//     pushDataDosen();
//   }
// };
