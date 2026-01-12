function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;

  //   this.login = function () {
  //     console.log("user logged in: ", this.name);
  //   };
  //   this.logout = function () {
  //     console.log("user logged out: ", this.name);
  //   };
}
//! constructor function

// let user1 = new User("abc", 23, "abc@gmail.com");
// console.log(user1);

// let user2 = new User("def", 32, "def@gmail.com");
// console.log(user2);

// user1.login();
// user2.login();

let string = new String("abc");
console.log(string);

let arr = new Array(3);
console.log(arr);

//! [[Prototype]] --> this a hidden property, in this we can assign a reference of different object
//! it can store only two values either null or an object

// console.log(new User());

User.prototype.login = function () {
  console.log("user logged in", this.name);
};
User.prototype.logout = function () {
  console.log("user logged out", this.name);
};

let user1 = new User("user1", 34, "user1@gmail.com");
user1.login();
user1.logout();

let user2 = new User("user2", 34, "user1@gmail.com");
user2.login();
user2.logout();

console.log(User.prototype);
