const fortunes = [
  "V brzké době potkáš někoho, kdo ti přinese úsměv a nový nápad.",
  "Nalezneš sílu v klidu vody a tvůj sen se začíná pomalu plnit.",
  "Tvé přátelství se rozroste jako korálový útes a přinese radost.",
  "Zlatá rybka ti radí: naslouchej svému srdci a otevř se novým cestám.",
  "Jaro přinese novou příležitost, která ti otevře dveře k lepším dnům.",
  "Udrž své myšlenky čisté jako mořská voda a úspěch se ti přiblíží.",
  "Odvaha ti pomůže překonat vlny nejistoty a najít nové dobrodružství."
];

const fortuneButton = document.getElementById("fortuneButton");
const spinButton = document.getElementById("spinButton");
const nopeButton = document.getElementById("nopeButton");
const result = document.getElementById("result");
const message = result.querySelector(".message");
const fish = document.querySelector(".main-fish");
const extraFish = document.querySelector(".extra-fish");

function createConfetti() {
  const colors = ['#ffdd66', '#fff6b3', '#4b86db', '#1f488f', '#FFD700', '#FFA500'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
    confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s linear forwards`;
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 4000);
  }
}

fortuneButton.addEventListener("click", () => {
  const choice = fortunes[Math.floor(Math.random() * fortunes.length)];
  message.textContent = choice;
});

spinButton.addEventListener("click", () => {
  fish.classList.remove("spin");
  void fish.offsetWidth;
  fish.classList.add("spin");
  createConfetti();
});

nopeButton.addEventListener("click", () => {
  extraFish.classList.add("visible");
  message.textContent = "Blbý, to je tvoje budoucnost.";
  setTimeout(() => {
    extraFish.classList.remove("visible");
  }, 3000);
});
