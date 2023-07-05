import { get } from "https://bukulapak.github.io/api/process.js";
import { urlAPIdosen, urlAPImahasiswa } from "./config/url.js";

get(urlAPImahasiswa, getMahasiswa);
get(urlAPIdosen, getDosen);

function getMahasiswa(value) {
  let inijson = value;
  // console.log(inijson)
  // let allmahasiswaArr = inijson.map((row) => {
  //     return row.nama.split(",").map(function (item) {
  //     return item.trim();
  //     });
  // });
  // let uniqueMahasiswa = allmahasiswaArr.flat().filter((item, index, arry) => arry.indexOf(item) === index);
  // let sortingMahasiswa = uniqueMahasiswa.sort(function (first, second) {
  //     return first > second ? 1 : -1;
  // });
  length = inijson.length;
  for (let i = 0; i < length; i++) {
    let mahasiswa1 = document.getElementById("mhs1");
    let mahasiswa2 = document.getElementById("mhs2");
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    option1.value = inijson[i]._id;
    option1.innerText = inijson[i].nama;
    option2.value = inijson[i]._id;
    option2.innerText = inijson[i].nama;
    mahasiswa1.append(option1);
    mahasiswa2.append(option2);
  }
}

function getDosen(value) {
  let inijson = value;
  let alldosenArr = inijson.map((row) => {
    return row.nama.split(",").map(function (item) {
      return item.trim();
    });
  });
  let uniqueDosen = alldosenArr.flat().filter((item, index, arry) => arry.indexOf(item) === index);
  let sortingDosen = uniqueDosen.sort(function (first, second) {
    return first > second ? 1 : -1;
  });
  length = sortingDosen.length;
  for (let i = 0; i < length; i++) {
    let dospem = document.getElementById("dospem");
    let dosuji = document.getElementById("dosuji");
    let optionpem = document.createElement("option");
    let optionuji = document.createElement("option");
    optionpem.value = inijson[i]._id;
    optionpem.innerText = inijson[i].nama;
    optionuji.value = inijson[i]._id;
    optionuji.innerText = inijson[i].nama;
    dospem.append(optionpem);
    dosuji.append(optionuji);
  }
}
