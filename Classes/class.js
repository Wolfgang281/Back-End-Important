class User {
  //   constructor() {
  //     console.log("this is default constructor");
  //   }

  static str = "string";

  constructor(name, age) {
    console.log("this is USER DEFINED constructor");
    this.name = name;
    this.age = age;
  }

  login() {
    console.log(this.name, "logged in");
  }

  logout() {
    console.log(this.name, "logged out");
  }

  addToCart(prodName) {
    console.log(prodName, "added to cart");
  }

  static helloWorld() {
    console.log("hello");
  }
}

console.log(User.str);
User.helloWorld();
let u1 = new User("varun", 45);
console.log(u1);
console.log(u1.str);
// console.log(u1);
// u1.addToCart("headphones");
let u2 = new User("sri", 34);
// u1.login();
// u1.logout();

// u2.login();
// u2.logout();

// console.log(new User());

class Admin extends User {
  constructor(name, age, accessLevel) {
    super(name, age); // this will call the constructor of parent class
    this.accessLevel = accessLevel;
  }
  changeProdName(newName) {
    //
    console.log("name changed to ", newName);
  }
}

let admin = new Admin("sirisha", 34, 3);
console.log(admin);

// admin.login();
// admin.logout();
// admin.addToCart("phone");

// admin.changeProdName("earbuds");

//? if we are not declaring any constructor function, js will automatically add a default constructor function with 0 parameters

//? static(that can be accessed with the help of class name) and non-static(that can be accessed with the instance(object) of the class)

class SuperAdmin extends Admin {}
