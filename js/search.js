function searchFunction() {
  var input, filter, tablep1, tablep2, tablep3, tablemhs, tabledsn, tr1, tr2, tr3, trmhs, trdsn, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  tablep1 = document.getElementById("iniTabelproyek1");
  tr1 = tablep1.getElementsByTagName("tr");
  let p1 = 0;
  for (i = 0; i < tr1.length; i++) {
    td = tr1[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr1[i].style.display = "";
        p1 += 1;
      } else {
        tr1[i].style.display = "none";
      }
    }
  }
  document.getElementById("textproyek1").innerText = "Total data : " + p1;
  tablep2 = document.getElementById("iniTabelproyek2");
  tr2 = tablep2.getElementsByTagName("tr");
  let p2 = 0;
  for (i = 0; i < tr2.length; i++) {
    td = tr2[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr2[i].style.display = "";
        p2 += 1;
      } else {
        tr2[i].style.display = "none";
      }
    }
  }
  document.getElementById("textproyek2").innerText = "Total data : " + p2;
  tablep3 = document.getElementById("iniTabelproyek3");
  tr3 = tablep3.getElementsByTagName("tr");
  let p3 = 0;
  for (i = 0; i < tr3.length; i++) {
    td = tr3[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr3[i].style.display = "";
        p3 += 1;
      } else {
        tr3[i].style.display = "none";
      }
    }
  }
  document.getElementById("textproyek3").innerText = "Total data : " + p3;
  tablemhs = document.getElementById("iniTabelMahasiswa");
  trmhs = tablemhs.getElementsByTagName("tr");
  let mhs = 0;
  for (i = 0; i < trmhs.length; i++) {
    td = trmhs[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        trmhs[i].style.display = "";
        mhs += 1;
      } else {
        trmhs[i].style.display = "none";
      }
    }
  }
  document.getElementById("textmahasiswa").innerText = "Total data : " + mhs;
  tabledsn = document.getElementById("iniTabelDosen");
  trdsn = tabledsn.getElementsByTagName("tr");
  let dsn = 0;
  for (i = 0; i < trdsn.length; i++) {
    td = trdsn[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        trdsn[i].style.display = "";
        dsn += 1;
      } else {
        trdsn[i].style.display = "none";
      }
    }
  }
  document.getElementById("textdosen").innerText = "Total data : " + dsn;
}
