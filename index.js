let container = document.querySelector(".container");
let squares = 560 - 60;

// let heading = document.querySelector("h1");
// heading.textContent = "hover!";
// heading.classList.add("heading");
// document.body.appendChild(heading);

for (let i = 0; i < squares; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);

  square.addEventListener("mouseover", () => {
    let hash = "#";
    let decimalValue = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      hash += (
        "0" +
        Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
      ).slice(-2);

      square.style.backgroundColor = hash;
      square.style.boxShadow = `0 0 2px ${hash}, 0 0 10px ${hash}`;
    }
    console.log(hash);
  });
  square.addEventListener("mouseleave", () => {
    square.style.backgroundColor = "#4f4f4f";
    square.style.boxShadow = "none";
  });
}
