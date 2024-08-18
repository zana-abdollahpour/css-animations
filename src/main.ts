import "./style.css";

const text = document.getElementById("text") as HTMLHeadingElement;
const leaf = document.getElementById("leaf") as HTMLImageElement;
const hill1 = document.getElementById("hill1") as HTMLImageElement;
const hill4 = document.getElementById("hill4") as HTMLImageElement;
const hill5 = document.getElementById("hill5") as HTMLImageElement;

window.addEventListener("scroll", () => {
  const { scrollY } = window;
  console.log(scrollY);

  text.style.marginTop = `${scrollY * 2.5}px`;
  leaf.style.top = `${scrollY * -1.5}px`;
  leaf.style.left = `${scrollY * 1.5}px`;
  hill5.style.left = `${scrollY * 1.5}px`;
  hill4.style.left = `${scrollY * -1.5}px`;
  hill1.style.top = `${scrollY * 1}px`;
});
