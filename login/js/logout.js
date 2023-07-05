function logout() {
  Swal.fire({
    title: "Are you sure?",
    text: "You session will disappear!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Logout",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("jwtToken");
      window.location.href = "../login/index.html";
    }
  });
}
