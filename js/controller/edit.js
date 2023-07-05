export function isiDataDosen(results) {
  const inputMapping = [
    { id: "nid", path: "nid" },
    { id: "nama", path: "nama" },
    // { id: 'durasi', path: 'biodata.jam_kerja', index: 0, property: 'durasi'  },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
  });
}

export function isiDataMahasiswa(results) {
  const inputMapping = [
    { id: "npm", path: "npm" },
    { id: "namamhs", path: "nama" },
    { id: "kelas", path: "kelas" },
    // { id: 'jurusan', path: '4.Value' },
    // { id: 'prodi', path: '5.Value' },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
  });
}

export function isiDataProyek(results) {
  const inputMapping = [
    { id: "tipeproyek", path: "tipe_proyek" },
    { id: "judulproyek", path: "judul" },
    { id: "mhs1", path: "biodata_mahasiswa._id" },
    { id: "mhs2", path: "partner_mahasiswa._id" },
    { id: "dospem", path: "dosen_pembimbing._id" },
    { id: "dosuji", path: "dosen_penguji._id" },
    { id: "tanggalsidang", path: "tanggal_sidang" },
    { id: "ruangsidang", path: "ruang_sidang" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
  });
}

function getNestedValue(obj, path, index, property) {
  const value = path.split(".").reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  // console.log(`Value at path ${path}:`, value);

  if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
    return value[index][property];
  }

  return value;
}
