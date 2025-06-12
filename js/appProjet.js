const images = [
  "../images/projets/home.png",
  "../images/projets/rules.png",
  "../images/projets/leaderboard.png",
  "../images/projets/VSplayer.png",
  "../images/projets/playing.png",
  "../images/projets/end.png"
];

let currentIndex = 0;

const imageElement = document.getElementById("carousel-image");
const counterElement = document.getElementById("carousel-counter");

function updateCarousel() {
  imageElement.src = images[currentIndex];
  counterElement.textContent = `Image ${currentIndex + 1} sur ${images.length}`;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

// Initialiser au chargement
updateCarousel();