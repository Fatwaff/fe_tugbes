export let urlPOSTproyek = "https://aufa-ulbi.herokuapp.com/proyek";
export let urlPOSTmahasiswa = "https://aufa-ulbi.herokuapp.com/proyekmahasiswa";
export let urlPOSTdosen = "https://aufa-ulbi.herokuapp.com/proyekdosen";

export function AmbilResponse(result) {
  // console.log(result); //menampilkan response API pada console
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
  // window.location.reload(); //reload halaman setelah klik ok pada alert
}
