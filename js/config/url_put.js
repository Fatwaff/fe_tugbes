const urlParams = new URLSearchParams(window.location.search);
const proyekId = urlParams.get("proyekId");
const proyekdosenId = urlParams.get("proyekdosenId");
const proyekmahasiswaId = urlParams.get("proyekmahasiswaId");

export let urlPUTproyek = "https://aufa-ulbi.herokuapp.com/proyek/" + proyekId;
export let urlPUTdosen = "https://aufa-ulbi.herokuapp.com/proyekdosen/" + proyekdosenId;
export let urlPUTmahasiswa = "https://aufa-ulbi.herokuapp.com/proyekmahasiswa/" + proyekmahasiswaId;

export function AmbilResponse(result) {
  //   console.log(result);
  if (result.status != 200) {
    Swal.fire({
      //menampilkan response API pada alert
      icon: "error",
      title: result.message,
    }).then(() => {
      window.location.reload();
    });
    return;
  }
  Swal.fire({
    //menampilkan response API pada alert
    icon: "success",
    title: result.message,
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    window.location.href = "index.html";
  });
}
