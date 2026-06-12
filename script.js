const champions = [
"Annie","Olaf","Galio","Twisted Fate","Xin Zhao","Urgot","LeBlanc","Vladimir",
"Fiddlesticks","Kayle","Master Yi","Alistar","Ryze","Sion","Sivir","Soraka",
"Teemo","Tristana","Warwick","Nunu & Willump","Miss Fortune","Ashe","Tryndamere",
"Jax","Morgana","Zilean","Singed","Evelynn","Twitch","Karthus","Cho Gath",
"Amumu","Rammus","Anivia","Shaco","Dr. Mundo","Sona","Kassadin","Irelia",
"Janna","Gangplank","Corki","Karma","Taric","Veigar","Trundle","Swain",
"Caitlyn","Blitzcrank","Malphite","Katarina","Nocturne","Maokai","Renekton",
"Jarvan IV","Elise","Orianna","Vayne","Lee Sin","Brand","Rumble","Cassiopeia",
"Skarner","Heimerdinger","Nasus","Nidalee","Udyr","Poppy","Gragas","Pantheon",
"Mordekaiser","Ezreal","Shen","Kennen","Garen","Akali","Malzahar","Talon",
"Riven","Kog Maw","Shyvana","Lux","Xerath","Ahri","Graves","Fizz","Volibear",
"Rengar","Varus","Nautilus","Viktor","Sejuani","Fiora","Ziggs","Lulu","Draven",
"Hecarim","Kha Zix","Darius","Jayce","Lissandra","Diana","Quinn","Syndra",
"Aurelion Sol","Kayn","Yasuo","Vel Koz","Taliyah","Braum","Jhin","Kindred",
"Jinx","Tahm Kench","Senna","Lucian","Zed","Kled","Ekko","Vi","Azir","Yuumi",
"Thresh","Illaoi","Rek Sai","Kalista","Bard","Rakan","Xayah","Ornn","Zoe",
"Kai Sa","Pyke","Neeko","Sylas","Qiyana","Aphelios","Sett","Lillia","Yone",
"Samira","Rell","Viego","Gwen","Akshan","Vex","Zeri","Renata Glasc","Bel Veth",
"Nilah","K Sante","Milio","Naafiri","Briar","Hwei","Smolder","Aurora","Ambessa"
];

const options = {
  body: champions,
  head: champions,
  eyes: champions,
  nose: champions,
  weapon: champions,
  extra: champions,
  theme: champions
};

let rotation = 0;
let spinning = false;

function spin() {
  
  if (spinning) return;

  spinning = true;

  const category = document.getElementById("category").value;
  const list = options[category];
  const randomOption = list[Math.floor(Math.random() * list.length)];

  const wheel = document.getElementById("wheel");
  const centerText = document.getElementById("centerText");
  const result = document.getElementById("result");

  centerText.textContent = "...";
  result.textContent = "Spinning...";

  rotation += 1440 + Math.floor(Math.random() * 720);
  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    centerText.textContent = randomOption;
    result.textContent = `${category.toUpperCase()}: ${randomOption}`;

    const resultBox = document.getElementById(`${category}Result`);
    if (resultBox) {
      resultBox.textContent = randomOption;
    }

    spinning = false;
  }, 3000);
}
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("spinBtn");

  button.addEventListener("click", () => {
    spin();
  });
  const bgImages = document.querySelectorAll(".bg-img");
let currentBg = 0;

setInterval(() => {
  if (bgImages.length === 0) return;

  bgImages[currentBg].classList.remove("active");

  currentBg = (currentBg + 1) % bgImages.length;

  bgImages[currentBg].classList.add("active");
}, 7000);

});
const bgImages = document.querySelectorAll(".bg-img");
let currentBg = 0;

setInterval(() => {
  if (bgImages.length === 0) return;

  bgImages[currentBg].classList.remove("active");

  currentBg = (currentBg + 1) % bgImages.length;

  bgImages[currentBg].classList.add("active");
}, 7000);
