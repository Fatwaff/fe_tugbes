import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUTproyek, AmbilResponse } from "../config/url_put.js";
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

async function getDataDosenUji(dosenUjiId) {
  // Fetch dosen data based on the ID (replace with your API endpoint)
  const response = await fetch("https://aufa-ulbi.herokuapp.com/proyekdosen/" + dosenUjiId);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch dosen data.");
  }
}

function pushDataProyek() {
  let tipe_proyek = getValue("tipeproyek");
  let mahasiswaId = getValue("mhs1");
  let partnerId = getValue("mhs2");
  let dospemId = getValue("dospem");
  let dosUjiId = getValue("dosuji");
  let judul = getValue("judulproyek");
  let tanggal_sidang = getValue("tanggalsidang");
  let ruang_sidang = getValue("ruangsidang");
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
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Dosen Pembimbing harus diisi");
    return; // Stop further execution if the form is not valid
  }
  if (dosUjiId === "" || dosUjiId === "Pilih Dosen") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Dosen Penguji harus diisi");
    return; // Stop further execution if the form is not valid
  }
  if (judul === "") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Judul harus diisi");
    return; // Stop further execution if the form is not valid
  }
  if (tanggal_sidang === "") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Tanggal sidang harus diisi");
    return; // Stop further execution if the form is not valid
  }
  if (ruang_sidang === "") {
    document.getElementById("alertmessage").innerHTML = alert.replace("#COLORBG#", "red").replace("#COLORTEXT#", "red").replace("#NAME#", "Insert gagal!").replace("#VALUE#", "Ruang sidang harus diisi");
    return; // Stop further execution if the form is not valid
  }
  // Ambil data mahasiswa, partner dan dosen secara bersamaan
  Promise.all([getDataMahasiswa(mahasiswaId), getDataPartner(partnerId), getDataDosen(dospemId), getDataDosenUji(dosUjiId)]).then(([mahasiswaData, partnerData, dospemData, dosujiData]) => {
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
        _id: dosUjiId,
        nama: dosujiData.nama,
        prodi: {
          nama: "D4 Teknik Informatika",
        },
      },
      judul: judul,
      tanggal_sidang: tanggal_sidang,
      ruang_sidang: ruang_sidang,
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
        putData(urlPUTproyek, data, AmbilResponse);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  });
}

onClick("buttoneditproyek", pushDataProyek);
