const panles = document.querySelectorAll(".panle");
panles.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
  });
});
function removeActive() {
  panel.forEach((panel) => {
    panel.classList.remove("active");
  });
}
