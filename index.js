// prompt 1

/* function Tributes(listOfTributes) {
  let tributeStrings = [];

  for (let i = 0; i < listOfTributes.length; i++) {
    let tribute = listOfTributes[i];
    tributeStrings.push(`${tribute.name} from District ${tribute.district}`);
  }

  return tributeStrings;
}

// 2 

function Tributes(listOfTributes) {
  let tributeStrings = [];

  listOfTributes.forEach((tribute) => {
    tributeStrings.push(`${tribute.name} from District ${tribute.district}`);
  });

  return tributeStrings;
}

// 3
function Tributes(listOfTributes) {
  let tributeStrings = [];

  listOfTributes.forEach((tribute) => {
    tributeStrings.push(`${tribute.name} from District ${tribute.district}`);
  });

  return tributeStrings;
}

let listOfTributes = [
  {
    name: "Katniss Everdeen",
    district: 12
  },
  {
    name: "Cato",
    district: 2
  }
];

let tributeStrings = declareTributes(listOfTributes);
console.log(tributeStrings); */

//prompt 2

function removeFaultyToys(toyInventory) {
  const safeToys = toyInventory.filter((toy) => !toy.containsChemicals);

  return safeToys;
}

// Example usage:
let toyInventory2023 = [
  {
    name: "Puzzle Game",
    containsChemicals: true,
  },
  {
    name: "Fidget Spinner",
    containsChemicals: true,
  },
  {
    name: "Teddy Bear",
    containsChemicals: false,
  },
];

let safeToys2023 = removeFaultyToys(toyInventory2023);
console.log(safeToys2023);
