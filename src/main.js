class Users {
  constructor(users) {
    this.users = users;
  }

  printAll() {
    for (let user of this.users) {
      console.log(user);
    }
  }
}

let author = {
  id: 1,
  name: "Tomáš Palačinka",
  username: "svalovec11",
  email: "mozek@alfabeta.org",
  phone: "123456789",

  get displayName() {
    return `${this.name} (${this.username})`;
  },
};

console.log(
  author.displayName,
  // Honza Kotrbek (svalovec11)
);

const usersList = document.querySelector(".users");

if (usersList) {
  const li = document.createElement("li");
  li.textContent = author.displayName;
  usersList.appendChild(li);
}

function doMath(times = 100, ...rest) {
  return rest.reduce((times, sum, val) => sum + val, 0) * times;
}

console.log(doMath(undefined, 2, 3));

(async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = new Users(await response.json());

  users.printAll();
})();

// Method - this is a function stored in an object
var rich = {
  name: "Rich Richerson",
  disease: "richitis",
  cry: function () {
    console.log("Waaah, my wallet is so heavy!");
  },
};

rich.cry();

// Fuction, this = global object (window in browsers)
// strick mode = undefined

function globalCry() {
  console.log();
}

globalCry();

// constructor, this = rich

var Fraud = function (name, disease) {
  this.name = name;
  this.disease = disease;
};

var rich = new Fraud("Rich Richerson", "richitis");
console.log(rich.name);

//call, apply
var redLeatterMedia = ["Mike", "Jay", "Rich"];

function kill() {
  console.log(this);
}

kill();
kill.call(redLeatterMedia); // this = redLeatterMedia

// Arrow function no this

function FraudHealth() {
  this.name = "Rich Richerson";
  this.disease = "richitis";
  this.health = 23;
  //pokud nepoužiju arrow function, this v setInterval bude ukazovat na global object (window)

  // bind(this)  nebo arrow function

  // var self = this;  // old way

  // máme několik možností jak vyřešit this v callbacku
  // 1. arrow function
  // 2. bind(this)
  // 3. self = this

  setInterval(() => {
    this.health--;
    console.log(this.health);
  }, 1000);
  // arrow function je lepší používat při meně složitých funkcích - přehlednost
}
var rich = new FraudHealth();

// let vyhoda vytvaří nové hodnoty

for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
//vypíše se 6x číslo 6 protože var je funkčně scoped

for (let j = 1; j <= 5; j++) {
  setTimeout(function () {
    console.log(j);
  }, j * 1000);

  //vypíše se čísla 1-5 protože let je block scoped
}

// v cyklech je lepší používat let protože nám zajistí správné hodnoty v callbacku

// proč použít const?
// 1. nemůžeme přepsat hodnotu, což nám pomůže předejít chybám
// 2. zlepšuje čitelnost kódu, protože hned vidíme, že se jedná o konstantu
// 3. pomáhá optimalizovat výkon, protože JavaScript engine může lépe optimalizovat kód, který používá konstanty

// z konstantě mužeme měnit  obsah pole nebo objektu, ale nemůžeme přepsat samotnou konstantu

// dobre je použít styleguide pro psani kodu
//
// Getters, Setters
//

let legend = {
  first: "strašo",
  name: "papjla",

  // velke pismeno na zacatku a bez zavorek, aby se to chovalo jako property a ne jako metoda
  get firstName() {
    return this.first.charAt(0).toUpperCase() + this.first.slice(1);
  },
  get lastName() {
    return this.last.charAt(0).toUpperCase() + this.last.slice(1);
  },

  // spoji firstName a lastName do jednoho stringu
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

//Setters
let legend = {
  _first: "janecek",
  _last: "Fritak",
  _oldness: 15,

  get age() {
    return this._oldness;
  },

  // validation - pokud není číslo, vypíše chybu a nenastaví hodnotu
  set age(val) {
    if (!Number.isInteger(val)) {
      return console.error(`that's not a number, dumbass`);
    }

    this._oldness = val;
  },
};

// proč používat gettery a settery?
// 1. umožňují nám kontrolovat přístup k vlastnostem objektu, což nám pomáhá předejít chybám a zlepšit bezpečnost kódu
// 2. umožňují nám definovat logiku pro získávání a nastavování hodnot, což nám pomáhá udržet kód čistý a přehledný
// 3. umožňují nám vytvářet virtuální vlastnosti, které nejsou přímo uloženy v objektu, ale jsou odvozeny z jiných vlastností nebo výpočtů, což nám pomáhá zlepšit flexibilitu a rozšiřitelnost kódu

//Objetk - object literal - objekt s zavorkami, který obsahuje vlastnosti a metody

// pokud je vlastnost je jako promena muzeme zkratit
let playerName = "Honza Kotrbek";

let player = {
  playerName,
  getName() {
    return this.playerName;
  },
};
player.getName(); // Honza Kotrbek
//

//Destrukturalizace - rozbalení objektu do jednotlivých proměnných

let hornyBoy = {
  name: "Taako",
  race: "Elf",
  weapon: "Umbra Staff",
  level: 12,
};

let level = hornyboy.level,
  name = hornyBoy.name,
  race = honryBoy.race;

let { level, name, race } = hornyBoy;

function getData({ name, level }) {
  console.log(name, level);
}

let data;

fetch("https://itunes.apple.com/search?term=kolowrat")
  .then((res) => res.json())
  .then((out) => (data = out));

console.log(data);


// https://maximdenisov.gitbooks.io/you-don-t-know-js/content/es6_&_beyond/syntax.html#destructuring
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


//REST - zbytek, zbytek argumentů, zbytek pole
..rest - zbytek, zbytek argumentů, zbytek pole

function doMath(times = 100, ...rest) {
  return rest.reduce((times, sum, val) => sum + val, 0) * times;
}

console.log(doMath(undefined, 2, 3)); // 500

  // ...rest nám umožňuje získat zbytek argumentů jako pole, což nám pomáhá předejít chybám a zlepšit flexibilitu kódu  


//Spread - rozbalení pole do jednotlivých hodnot
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

let obj1 = { name: "Honza", age: 30 };
let obj2 = { name: "Petr", city: "Prague" };

let obj3 = { ...obj1, ...obj2 }; // { name: "Petr", age: 30, city: "Prague" }

//Spread se používá pro kopírování pole nebo objektu, protože nám umožňuje vytvořit nový objekt nebo pole bez reference na původní objekt nebo pole, což nám pomáhá předejít chybám a zlepšit bezpečnost kódu 





//Defailtní parametry vs default operator


function discount (price, percent) {
  percent = (percent === undefined) ? 10 : percent;
  return price * (1 - percent / 100);
}
// zapiš po staru 

function discount(price, percent = 10) {
  return price * (1 - percent / 100);
}

// defaultní parametry nám umožňují nastavit výchozí hodnotu pro parametr, což nám pomáhá předejít chybám a zlepšit čitelnost kódu