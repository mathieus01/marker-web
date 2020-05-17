const Swal = require("sweetalert2");

export const confirmation = (title, text, cb) => {
  Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Sim",
    cancelButtonColor: "#d33",
    cancelButtonText: "Não",
  }).then((result) => {
    if (result.value) {
      alert("teste");
    }
  });
};
