function deleteDataMahasiswa(IDHAPUSmhs) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      var proyekmahasiswaId = IDHAPUSmhs;
      var target_url = "https://aufa-ulbi.herokuapp.com/proyekmahasiswa/" + proyekmahasiswaId;

      var requestOptions = {
        method: "DELETE",
        redirect: "follow",
      };

      fetch(target_url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
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
          Swal.fire("Deleted!", result.message, "success").then(() => {
            location.reload();
          });
        })
        .catch((error) => console.log("Error:", error));
    }
  });
}
