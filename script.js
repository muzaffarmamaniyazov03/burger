const bagraund = document.querySelector(".bagraund"),
imgs = document.querySelectorAll(".img");


window.addEventListener("scroll", (e) => {
  imgs.forEach((img) => {
    let speed = img.getAttribute("speed");
    img.style.transform = `translate(${(window.pageYOffset * speed) / 5}px,${(window.pageYOffset * speed) / 10}px)`;
  })
})