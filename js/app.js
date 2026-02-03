function likeImage(btn) {
  const span = btn.querySelector("span");
  span.textContent = parseInt(span.textContent) + 1;

}
// Likes
document.querySelectorAll(".like-btn").forEach(btn => {
  const id = btn.dataset.id;
  const count = btn.querySelector(".like-count");

  let likes = localStorage.getItem("likes_" + id) || 0;
  count.textContent = likes;

  btn.addEventListener("click", () => {
    likes++;
    localStorage.setItem("likes_" + id, likes);
    count.textContent = likes;
    btn.classList.add("liked");
    setTimeout(() => btn.classList.remove("liked"), 300);
  });
});
const zoomBox = document.createElement("div");
zoomBox.className = "image-zoom";
zoomBox.innerHTML = "<img>";
document.body.appendChild(zoomBox);

document.querySelectorAll(".scroll-gallery img, .hero-affiche").forEach(img => {
  img.addEventListener("click", () => {
    zoomBox.classList.add("active");
    zoomBox.querySelector("img").src = img.src;
  });
});

zoomBox.addEventListener("click", () => {
  zoomBox.classList.remove("active");
});
