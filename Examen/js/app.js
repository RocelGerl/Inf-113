const docentes_btn = document.querySelector("#docentes-btn");
const sign_up_btn = document.querySelector("#admin-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("admin-mode");
});

docentes_btn.addEventListener("click", () => {
  container.classList.remove("admin-mode");
});
