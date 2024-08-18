import "./style.css";

const toggle = document.querySelector(".toggle") as HTMLDialogElement;

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
});
