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

fortuneButton.addEventListener("click", () => {
  const choice = fortunes[Math.floor(Math.random() * fortunes.length)];
  message.textContent = choice;
});

spinButton.addEventListener("click", () => {
  fish.classList.remove("spin");
  void fish.offsetWidth;
  fish.classList.add("spin");
});

nopeButton.addEventListener("click", () => {
  extraFish.classList.add("visible");
  message.textContent = "Blbý, to je tvoje budoucnost.";
  setTimeout(() => {
    extraFish.classList.remove("visible");
  }, 3000);
});
