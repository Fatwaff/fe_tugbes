import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { TabelProyek, Tabelmahasiswa, Tabeldosen } from "../temp/table.js";
import { DetailProyek } from "../temp/detail.js";

export function isiDetailProyek(value) {
  let content = DetailProyek.replace("#TIPEPROYEK#", value.tipe_proyek)
    .replace("#NAMA#", value.biodata_mahasiswa.nama)
    .replace("#NPM#", value.biodata_mahasiswa.npm)
    .replace("#KELAS#", value.biodata_mahasiswa.kelas)
    .replace("#NAMAPARTNER#", value.partner_mahasiswa.nama)
    .replace("#NPMPARTNER#", value.partner_mahasiswa.npm)
    .replace("#KELASPARTNER#", value.partner_mahasiswa.kelas)
    .replace("#NAMADOSPEM#", value.dosen_pembimbing.nama)
    .replace("#NAMADOSUJI#", value.dosen_penguji.nama)
    .replace("#JUDUL#", value.judul)
    .replace("#TANGGALSIDANG#", value.tanggal_sidang)
    .replace("#RUANGSIDANG#", value.ruang_sidang)
    .replace("#IDEDIT#", value._id)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("detailproyek", content);
}
export function isiTabelProyek(results) {
  results.reverse().forEach(isiRowProyek);
  const length = results.length;
  let tp1 = 0;
  let tp2 = 0;
  let tp3 = 0;
  for (let i = 0; i < length; i++) {
    if (results[i].tipe_proyek == "Proyek 1") {
      tp1 += 1;
    }
  }
  for (let i = 0; i < length; i++) {
    if (results[i].tipe_proyek == "Proyek 2") {
      tp2 += 1;
    }
  }
  for (let i = 0; i < length; i++) {
    if (results[i].tipe_proyek == "Proyek 3") {
      tp3 += 1;
    }
  }
  addInner("textproyek1", "Total data : " + tp1);
  addInner("textproyek2", "Total data : " + tp2);
  addInner("textproyek3", "Total data : " + tp3);
}
export function isiTabelMahasiswa(results) {
  results.reverse().forEach(isiRowMahasiswa);
  addInner("textmahasiswa", "Total data : " + results.length);
}
export function isiTabelDosen(results) {
  results.reverse().forEach(isiRowDosen);
  addInner("textdosen", "Total data : " + results.length);
}

function isiRowProyek(value) {
  if (value.tipe_proyek == "Proyek 1") {
    let content = TabelProyek.replace("#NAMA#", value.biodata_mahasiswa.nama)
      .replace("#NPM#", value.biodata_mahasiswa.npm)
      .replace("#KELAS#", value.biodata_mahasiswa.kelas)
      .replace("#NAMAPARTNER#", value.partner_mahasiswa.nama)
      .replace("#NPMPARTNER#", value.partner_mahasiswa.npm)
      .replace("#KELASPARTNER#", value.partner_mahasiswa.kelas)
      .replace("#TANGGALSIDANG#", value.tanggal_sidang)
      .replace("#RUANGSIDANG#", value.ruang_sidang)
      .replace("#IDDETAIL#", value._id)
      .replace("#IDEDIT#", value._id)
      .replace("#IDHAPUS#", value._id)
      .replace("#WARNA#", getRandomColor())
      .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabelproyek1", content);
  } else if (value.tipe_proyek == "Proyek 2") {
    let content = TabelProyek.replace("#NAMA#", value.biodata_mahasiswa.nama)
      .replace("#NPM#", value.biodata_mahasiswa.npm)
      .replace("#KELAS#", value.biodata_mahasiswa.kelas)
      .replace("#NAMAPARTNER#", value.partner_mahasiswa.nama)
      .replace("#NPMPARTNER#", value.partner_mahasiswa.npm)
      .replace("#KELASPARTNER#", value.partner_mahasiswa.kelas)
      .replace("#TANGGALSIDANG#", value.tanggal_sidang)
      .replace("#RUANGSIDANG#", value.ruang_sidang)
      .replace("#IDDETAIL#", value._id)
      .replace("#IDEDIT#", value._id)
      .replace("#IDHAPUS#", value._id)
      .replace("#WARNA#", getRandomColor())
      .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabelproyek2", content);
  } else if (value.tipe_proyek == "Proyek 3") {
    let content = TabelProyek.replace("#NAMA#", value.biodata_mahasiswa.nama)
      .replace("#NPM#", value.biodata_mahasiswa.npm)
      .replace("#KELAS#", value.biodata_mahasiswa.kelas)
      .replace("#NAMAPARTNER#", value.partner_mahasiswa.nama)
      .replace("#NPMPARTNER#", value.partner_mahasiswa.npm)
      .replace("#KELASPARTNER#", value.partner_mahasiswa.kelas)
      .replace("#TANGGALSIDANG#", value.tanggal_sidang)
      .replace("#RUANGSIDANG#", value.ruang_sidang)
      .replace("#IDDETAIL#", value._id)
      .replace("#IDEDIT#", value._id)
      .replace("#IDHAPUS#", value._id)
      .replace("#WARNA#", getRandomColor())
      .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabelproyek3", content);
  }
}

function isiRowMahasiswa(value) {
  let content = Tabelmahasiswa.replace("#NAMA#", value.nama)
    .replace("#NPM#", value.npm)
    .replace("#KELAS#", value.kelas)
    .replace("#JURUSAN#", value.jurusan.nama)
    .replace("#PRODI#", value.prodi.nama)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelMahasiswa", content);
}

function isiRowDosen(value) {
  let content = Tabeldosen.replace("#NAMA#", value.nama)
    .replace("#NID#", value.nid)
    .replace("#PRODI#", value.prodi.nama)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelDosen", content);
}
