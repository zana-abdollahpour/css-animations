import "./style.css";

const text = document.querySelector(".text") as HTMLHeadingElement;
const spans = text.innerText
  .split("")
  .map(
    (char, i) =>
      `<span style="transition-delay: ${i * 50}ms;filter: hue-rotate(${
        i * 30
      }deg)">${char}</span>`
  )
  .join("");

text.innerHTML = spans;
