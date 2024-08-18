import "./style.css";

const text = document.querySelector(".text") as HTMLHeadingElement;

const htmlSpans = text.innerHTML
  .split("")
  .map(
    (char, i) =>
      `<span style="animation-duration: ${
        Math.random() * 5
      }s; filter: hue-rotate(${i * 50}deg)">${char}</span>`
  )
  .join("");

text.innerHTML = htmlSpans;
