import "./style.css";

const card = document.querySelector(".card") as HTMLDivElement;
const toggle = document.querySelector(".toggle") as HTMLDivElement;

toggle.addEventListener("click", () => {
  card.classList.toggle("active");
});
