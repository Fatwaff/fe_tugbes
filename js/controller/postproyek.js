import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { AmbilResponse, urlPOSTproyek } from "../config/url_post.js";
import { alert } from "../../login/js/alertMessage.js";

async function getDataMahasiswa(mahasiswaId) {
  // Fetch mahasiswa data based on the ID (replace with your API endpoint)
  const response = await fetch(`https://aufa-ulbi.herokuapp.com/proyekmahasiswa/${mahasiswaId}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch mahasiswa data.");
  }
}

async function getDataPartner(partnerId) {
  // Fetch mahasiswa data based on the ID (replace with your API endpoint)
  const response = await fetch("https://aufa-ulbi.herokuapp.com/proyekmahasiswa/" + partnerId);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch mahasiswa data.");
  }
}

async function getDataDosen(dosenId) {
  // Fetch dosen data based on the ID (replace with your API endpoint)
  const response = await fetch("https://aufa-ulbi.herokuapp.com/proyekdosen/" + dosenId);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch dosen data.");
  }
}

function pushDataProyek() {
  let tipe_proyek = getValue("tipe_proyek");
  let mahasiswaId = getValue("mhs1");
  let partnerId = getValue("mhs2");
  let dospemId = getValue("dospem");
  let judul = getValue("judulproyek");
  // Perform form validation
  if (tipe_proyek === "Pilih Proyek" && mahasiswaId === "Pilih Mahasiswa" && partnerId === "Pilih Mahasiswa" && dospemId === "Pilih Dosen" && judul === "") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Data harus dilengkapi");
    return;
  }
  if (tipe_proyek === "" || tipe_proyek === "Pilih Proyek") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Tipe Proyek harus diisi");
    return;
  }
  if (mahasiswaId === "" || mahasiswaId === "Pilih Mahasiswa") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Mahasiswa harus diisi");
    return; // Stop further execution if the form is not valid
  }
  if (partnerId === "" || partnerId === "Pilih Mahasiswa") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Partner harus diisi");
    return; // Stop further execution if the form is not valid
  }
  if (dospemId === "" || dospemId === "Pilih Dosen") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Dosem Pembimbing harus diisi");
    return; // Stop further execution if the form is not valid
  }
  if (judul === "") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Judul harus diisi");
    return; // Stop further execution if the form is not valid
  }
  // Ambil data mahasiswa, partner dan dosen secara bersamaan
  Promise.all([getDataMahasiswa(mahasiswaId), getDataPartner(partnerId), getDataDosen(dospemId)]).then(([mahasiswaData, partnerData, dospemData]) => {
    // Ekstrak nilai-nilai yang diperlukan dari data yang diambil
    let data = {
      tipe_proyek: tipe_proyek,
      biodata_mahasiswa: {
        _id: mahasiswaId,
        npm: mahasiswaData.npm,
        nama: mahasiswaData.nama,
        kelas: mahasiswaData.kelas,
        jurusan: {
          nama: mahasiswaData.jurusan.nama,
        },
        prodi: {
          nama: mahasiswaData.prodi.nama,
        },
      },
      partner_mahasiswa: {
        _id: partnerId,
        npm: partnerData.npm,
        nama: partnerData.nama,
        kelas: partnerData.kelas,
        jurusan: {
          nama: partnerData.jurusan.nama,
        },
        prodi: {
          nama: partnerData.prodi.nama,
        },
      },
      dosen_pembimbing: {
        _id: dospemId,
        nama: dospemData.nama,
        prodi: {
          nama: "D4 Teknik Informatika",
        },
      },
      dosen_penguji: {
        nama: "-",
        prodi: {
          nama: "D4 Teknik Informatika",
        },
      },
      judul: judul,
      tanggal_sidang: "-",
      ruang_sidang: "-",
    };
    postData(urlPOSTproyek, data, AmbilResponse);
  });
}

onClick("buttonproyek", pushDataProyek);

// document.onkeydown = function (e) {
//   if (e.key === "Enter") {
//     pushDataProyek();
//   }
// };
