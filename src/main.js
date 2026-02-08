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


// teplate string ale spíš je to SMART STRING, protože nám umožňuje vytvářet multi-line stringy a interpolovat proměnné a výrazy do stringu, což nám pomáhá zlepšit čitelnost kódu a usnadnit práci s řetězci

let title = 'hot piss';
  
`<article>
    <h1>${title}</h1>
</article>`
  
let artist = 'Kolowrat',
    song = 'Ja a slečna Ts';
  
`Pieseň od ${artist} sa volá ${song} a 2 + 2 je ${ 2+2 }`.toUpperCase();

// ```` - alt+96 - backticks nám umožňují vytvářet multi-line stringy a interpolovat proměnné a výrazy do stringu, což nám pomáhá zlepšit čitelnost kódu a usnadnit práci s řetězc 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring

// NEW Array methods

let arr = [1, 2, 3, 4, 5];

arr.includes(3); // true
arr.includes(6); // false

// includes nám umožňuje zjistit, zda pole obsahuje určitou hodnotu, což nám pomáhá předejít chybám a zlepšit čitelnost kódu  




// Metody pole - find, findIndex, map, filter, Array.from, Array.of, fill, flat, flatMap, some, every, reduce, reduceRight, sort, reverse, join, split, slice, splice, concat, push, pop, shift, unshift, indexOf, lastIndexOf, forEach

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods 

//find nám umožňuje najít první prvek v poli, který splňuje určitou podmínku, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//findIndex nám umožňuje najít index prvního prvku v poli, který splňuje určitou podmínku, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//map nám umožňuje vytvořit nové pole, které obsahuje výsledky volání funkce pro každý prvek v původním poli, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//filter nám umožňuje vytvořit nové pole, které obsahuje pouze prvky z původního pole, které splňují určitou podmínku, což nám pomáhá předejít chybám a zlepšit čitelnost kódu  

  //Array.from nám umožňuje vytvořit nové pole z iterovatelného objektu nebo pole-like objektu, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//Array.of nám umožňuje vytvořit nové pole z jednotlivých argumentů, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//fill nám umožňuje naplnit všechny prvky pole určitou hodnotou, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//flat nám umožňuje zploštit pole do určité hloubky, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//flatMap nám umožňuje nejprve mapovat každý prvek na nový prvek a poté zploštit výsledné pole o jednu úroveň, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//some nám umožňuje zjistit, zda alespoň jeden prvek v poli splňuje určitou podmínku, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//every nám umožňuje zjistit, zda všechny prvky v poli splňují určitou podmínku, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//reduce nám umožňuje redukovat pole na jedinou hodnotu pomocí funkce, která se aplikuje na každý prvek pole, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//reduceRight nám umožňuje redukovat pole na jedinou hodnotu pomocí funkce, která se aplikuje na každý prvek pole zprava, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//sort nám umožňuje seřadit prvky pole podle určitého kritéria, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//reverse nám umožňuje obrátit pořadí prvků v poli, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//join nám umožňuje spojit všechny prvky pole do jednoho stringu s určitým oddělovačem, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//split nám umožňuje rozdělit string na pole podle určitého oddělovače, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//slice nám umožňuje vytvořit nové pole obsahující část původního pole, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//splice nám umožňuje změnit obsah pole odstraněním nebo přidáním prvků, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//concat nám umožňuje spojit dvě nebo více polí do jednoho nového pole, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//push nám umožňuje přidat jeden nebo více prvků na konec pole, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//pop nám umožňuje odstranit poslední prvek z pole a vrátit ho, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//shift nám umožňuje odstranit první prvek z pole a vrátit ho, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//unshift nám umožňuje přidat jeden nebo více prvků na začátek pole, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//indexOf nám umožňuje zjistit index prvního výskytu určité hodnoty v poli, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//lastIndexOf nám umožňuje zjistit index posledního výskytu určité hodnoty v poli, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

//forEach nám umožňuje provést funkci pro každý prvek pole, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

// Iteratory nám umožňují procházet kolekce dat, jako jsou pole, objekty nebo řetězce, pomocí speciálního protokolu, který definuje způsob, jakým se data iterují, což nám pomáhá předejít chybám a zlepšit čitelnost kódu

// Generátory nám umožňují vytvářet iterátory pomocí funkce, která může být pozastavena a znovu spuštěna, což nám pomáhá předejít chybám a zlepšit čitelnost kódu



 const users = [ "Mike", "Strajk", "Cajk", "franta", "Petr", "Honza", "Karel", "Motyka", "Vojta", "Jirka", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David", "Jan", "Tomáš", "Jakub", "David", "Jan", "Tomáš", "Jakub", "David", "Jan", "Tomáš", "Jakub", "David", "Jan", "Tomáš", "Jakub", "David", "Jan", "Tomáš", "Jakub", "David", "Jan", "Tomáš", "Jakub", "David", "Jan", "Tomáš", "Jakub", "David", "Jan", "Tomáš", "Jakub", "David" ]; 

 users.includes("Mike"); // true

 users.find( name => name.length > 5 ); // "Strajk"
 
 users.findIndex( name => name.length > 5 ); // 1

users.map( name => name.toUpperCase() ); // ["MIKE", "STRAJK", "CAJK", "FRANTA", "PETR", "HONZA", "KAREL", "MOTYKA", "VOJTA", "JIRKA", "PAVEL", "MARTIN", "ADAM", "ELIŠKA", "TEREZA", "LUCIE", "JAN", "TOMÁŠ", "JAKUB", "DAVID", ...]

users.filter( name => name.length > 5 ); // ["Strajk", "Franta", "Petr", "Honza", "Karel", "Motyka", "Vojta", "Jirka", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David", ...] 

users.reduce( (acc, name) => acc + name.length, 0 ); // 1200

users.forEach( name => console.log(name) ); // vypíše všechny jména do konzole

users.Array.from( users, name => name.toUpperCase() ); // ["MIKE", "STRAJK", "CAJK", "FRANTA", "PETR", "HONZA", "KAREL", "MOTYKA", "VOJTA", "JIRKA", "PAVEL", "MARTIN", "ADAM", "ELIŠKA", "TEREZA", "LUCIE", "JAN", "TOMÁŠ", "JAKUB", "DAVID", ...]

users.Array.of( "Mike", "Strajk", "Cajk", "franta", "Petr", "Honza", "Karel", "Motyka", "Vojta", "Jirka", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David" ); // ["Mike", "Strajk", "Cajk", "franta", "Petr", "Honza", "Karel", "Motyka", "Vojta", "Jirka", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David"]

users.fill( "Unknown" ); // ["Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", ...]

users.flat(); // ["Mike", "Strajk", "Cajk", "franta", "Petr", "Honza", "Karel", "Motyka", "Vojta", "Jirka", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David"]

users.flatMap( name => name.split("") ); // ["M", "i", "k", "e", "S", "t", "r", "a", "j", "k", "C", "a", "j", "k", "f", "r", "a", "n", "t", "a", ...]

users.some( name => name.length > 5 ); // true

users.every( name => name.length > 5 ); // false

users.sort(); // ["Adam", "Eliška", "Franta", "Honza", "Jakub", "Jirka", "Karel", "Lucie", "Martin", "Mike", "Motyka", "Pavel", "Petr", "Strajk", "Tereza", "Tomáš", "Vojta", "Jan", ...]

users.reverse(); // ["Jan", "Vojta", "Tomáš", "Tereza", "Strajk", "Petr", "Pavel", "Motyka", "Mike", "Martin", "Lucie", "Karel", "Jirka", "Jakub", "Honza", "Franta", "Eliška", "Adam"]

users.join( ", " ); // "Mike, Strajk, Cajk, franta, Petr, Honza, Karel, Motyka, Vojta, Jirka, Pavel, Martin, Adam, Eliška, Tereza, Lucie, Jan, Tomáš, Jakub, David"

users.split( ", " ); // ["Mike", "Strajk", "Cajk", "franta", "Petr", "Honza", "Karel", "Motyka", "Vojta", "Jirka", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David"]

users.slice( 0, 5 ); // ["Mike", "Strajk", "Cajk", "franta", "Petr"]      


users.push( "New User" ); // ["Mike", "Strajk", "Cajk", "franta", "Petr", "Honza", "Karel", "Motyka", "Vojta", "Jirka", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David", "New User"]

users.pop(); // ["Mike", "Strajk", "Cajk", "franta", "Petr", "Honza", "Karel", "Motyka", "Vojta", "Jirka", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David"]

users.shift(); // ["Strajk", "Cajk", "franta", "Petr", "Honza", "Karel", "Motyka", "Vojta", "Jirka", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David"]

users.unshift( "Mike" ); // ["Mike", "Strajk", "Cajk", "franta", "Petr", "Honza", "Karel", "Motyka", "Vojta", "Jirka", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David"]

users.indexOf( "Petr" ); // 4

users.lastIndexOf( "Jan" ); // 16

users.forEach( name => console.log(name) ); // vypíše všechny jména do konzole




Array.from( users, name => name.toUpperCase() ); // ["MIKE", "STRAJK", "CAJK", "FRANTA", "PETR", "HONZA", "KAREL", "MOTYKA", "VOJTA", "JIRKA", "PAVEL", "MARTIN", "ADAM", "ELIŠKA", "TEREZA", "LUCIE", "JAN", "TOMÁŠ", "JAKUB", "DAVID"]

Array.of( "Mike", "Strajk", "Cajk", "franta", "Petr", "Honza", "Karel", "Motyka", "Vojta", "Jirka", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David" ); // ["Mike", "Strajk", "Cajk", "franta", "Petr", "Honza", "Karel", "Motyka", "Vojta", "Jirka", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David"]

users.fill( "Unknown" ); // ["Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", ...]

users.flat(); // ["Mike", "Strajk", "Cajk", "franta", "Petr", "Honza", "Karel", "Motyka", "Vojta", "Jirka", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David"]

users.flatMap( name => name.split("") ); // ["M", "i", "k", "e", "S", "t", "r", "a", "j", "k", "C", "a", "j", "k", "f", "r", "a", "n", "t", "a", ...]

users.some( name => name.length > 5 ); // true

users.every( name => name.length > 5 ); // false

users.sort(); // ["Adam", "Eliška", "Franta", "Honza", "Jakub", "Jirka", "Karel", "Lucie", "Martin", "Mike", "Motyka", "Pavel", "Petr", "Strajk", "Tereza", "Tomáš", "Vojta", "Jan", ...]

users.reverse(); // ["Jan", "Vojta", "Tomáš", "Tereza", "Strajk", "Petr", "Pavel", "Motyka", "Mike", "Martin", "Lucie", "Karel", "Jirka", "Jakub", "Honza", "Franta", "Eliška", "Adam"]

users.copyWithin( 0, 5, 10 ); // ["Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David", "Pavel", "Martin", "Adam", "Eliška", "Tereza", "Lucie", "Jan", "Tomáš", "Jakub", "David"]



const users2 = [
  { name: "Franta", administrator: true },
  { name: "Honza", administrator: false },
  { name: "Petr" },
]
users.some( user => "administrator" in user ); // true
users.every( user => "administrator" in user ); // false

users2.values(); // ["Franta", "Honza", "Petr"]
users2.keys(); // [0, 1, 2]
users2.entries(); // [[0, { name: "Franta", administrator: true }], [1, { name: "Honza", administrator: false }], [2, { name: "Petr" }]]

