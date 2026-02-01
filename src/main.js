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
  email: "mozek@alfabeta.org"  ,
  phone: "123456789",

  get displayName() {
    return `${this.name} (${this.username})`;
  }
};

console.log(
  author.displayName  
  // Honza Kotrbek (svalovec11)
);

const usersList = document.querySelector(".users");

if (usersList) {
  const li = document.createElement("li");
  li.textContent = author.displayName;
  usersList.appendChild(li);
}

function doMath(times = 100,...rest) {
  return rest.reduce( (times, sum, val) => sum + val, 0) * times; 

}


console.log(doMath( undefined,2,3));


(async () => {

  let response =  await fetch('https://jsonplaceholder.typicode.com/users');
  let users = new Users(await response.json());
  
  users.printAll();
})();


// Method - this is a function stored in an object
var rich = {
  name: "Rich Richerson",
  disease: "richitis",
  cry: function() {
    console.log("Waaah, my wallet is so heavy!");
  }
}

rich.cry();


// Fuction, this = global object (window in browsers)
// strick mode = undefined

function globalCry() {
  console.log();
}

globalCry();


// constructor, this = rich

var Fraud = function(name, disease) {
  this.name = name;
  this.disease = disease;
}

var rich = new Fraud ("Rich Richerson", "richitis");
console.log(rich.name);

//call, apply 
var redLeatterMedia = [ "Mike" , "Jay", "Rich" ];

function kill() {
  console.log(this);  
}

kill();
kill.call(redLeatterMedia) // this = redLeatterMedia

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


  setInterval(  () => {
    this.health--;
    console.log(this.health);
  },1000 );
// arrow function je lepší používat při meně složitých funkcích - přehlednost

  }
  var rich = new FraudHealth();

