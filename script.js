const options = {
  head: [
    "Wolf",
  "Lion",
  "Tiger",
  "Bear",
  "Goat",
  "Bull",
  "Deer",
  "Boar",
  "Gorilla",
  "Shark",
  "Snake",
  "Crocodile",
  "Eagle",
  "Crow",
  "Owl",
  "Dragon",
  "Demon",
  "Angel",
  "Skeleton",
  "Ghost",
  "Orc",
  "Troll",
  "Minotaur",
  "Vampire",
  "Robot",
  "Crystal",
  "Mushroom",
  "Tree",
  ],
  body: [
  "Gladiator",
  "Knight",
  "Barbarian",
  "Samurai",
  "Ninja",
  "Assassin",
  "Hunter",
  "Archer",
  "Paladin",
  "Warlock",
  "Mage",
  "Monk",
  "Shaman",
  "Executioner",
  "Warlord",
  "Champion",
  "Guardian",
  "Juggernaut",
  "Berserker",
  "Pirate",
  "General",
  "Behemoth",
  "Titan",
  "Colossus",
  "Mutant",
  "Ancient Construct",
  "Living Armor",
  "Void Creature",
  "Nomad",
  "Outcast"
  ],
  weapon: [
 "Sword",
  "Greatsword",
  "Katana",
  "Spear",
  "Halberd",
  "Trident",
  "Axe",
  "Twin Axes",
  "Hammer",
  "Mace",
  "Scythe",
  "Dagger",
  "Twin Daggers",
  "Bow",
  "Crossbow",
  "Chain Blade",
  "Whip",
  "Gauntlets",
  "Shield",
  "Staff",
  "Orb",
  "Spellbook",
  "Living Plants",
  "Crystals",
  "Bones",
  "Shadow Blades",
  "Lightning Lance",
  "Flaming Axe",
  "Frozen Blade",
  "Void Relic"
  ],
  power: [
  "Fire",
  "Ice",
  "Lightning",
  "Water",
  "Wind",
  "Earth",
  "Nature",
  "Carnivorous Plants",
  "Poison",
  "Acid",
  "Blood",
  "Shadows",
  "Light",
  "Soul Magic",
  "Necromancy",
  "Time",
  "Gravity",
  "Void",
  "Chaos",
  "Dreams",
  "Nightmares",
  "Storms",
  "Crystal Magic",
  "Sand",
  "Metal",
  "Moon Magic",
  "Solar Energy",
  "Mutations",
  "Spirit Magic",
  "Frost"
  ]
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
  result.textContent = "Girando...";

  rotation += 1440 + Math.floor(Math.random() * 720);
  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    centerText.textContent = randomOption;
    result.textContent = `${category.toUpperCase()}: ${randomOption}`;
    spinning = false;
  }, 3000);
}