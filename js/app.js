function likeImage(btn) {
  const span = btn.querySelector("span");
  span.textContent = parseInt(span.textContent) + 1;

}
// ================= LIKES CONFIG =================
const DEFAULT_LIKES = {
  douala: 1000,
  yaounde: 900,
  bafoussam: 598
};

document.querySelectorAll(".like-btn").forEach(btn => {
  const city = btn.dataset.id;
  const countSpan = btn.querySelector(".like-count");

  const countKey = `likes_count_${city}`;
  const likedKey = `likes_liked_${city}`;

  // Initialiser le compteur si absent
  let likes = localStorage.getItem(countKey);
  if (likes === null) {
    likes = DEFAULT_LIKES[city] || 0;
    localStorage.setItem(countKey, likes);
  }

  // Affichage
  countSpan.textContent = likes;

  // Vérifier si déjà liké
  if (localStorage.getItem(likedKey)) {
    btn.disabled = true;
    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
  }

  // Click like
  btn.addEventListener("click", () => {
    if (localStorage.getItem(likedKey)) return;

    likes++;
    localStorage.setItem(countKey, likes);
    localStorage.setItem(likedKey, "true");

    countSpan.textContent = likes;

    btn.classList.add("liked");
    btn.disabled = true;
    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";

    setTimeout(() => btn.classList.remove("liked"), 300);
  });
});
const zoomBox = document.getElementById("imageZoom");
const zoomImg = zoomBox.querySelector("img");

document.querySelectorAll(".scroll-gallery img, .hero-affiche").forEach(img => {
  img.addEventListener("click", () => {
    zoomImg.src = img.src;
    zoomBox.style.display = "flex";
  });
});

zoomBox.addEventListener("click", () => {
  zoomBox.style.display = "none";
});
