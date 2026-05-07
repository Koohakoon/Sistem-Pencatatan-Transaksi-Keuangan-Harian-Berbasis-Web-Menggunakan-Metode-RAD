const cursor = document.querySelector(".cursor");
const outline = document.querySelector(".cursor-outline");

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (cursor) {
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  }
});

function animate() {
  outlineX += (mouseX - outlineX) * 0.15;
  outlineY += (mouseY - outlineY) * 0.15;

  if (outline) {
    outline.style.left = outlineX + "px";
    outline.style.top = outlineY + "px";
  }

  requestAnimationFrame(animate);
}

animate();
const hoverTargets = document.querySelectorAll("button, a, .menu");

hoverTargets.forEach(el => {
  el.addEventListener("mouseenter", () => {
    outline.style.transform = "scale(1.8)";
  });

  el.addEventListener("mouseleave", () => {
    outline.style.transform = "scale(1)";
  });
});