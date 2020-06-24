"use strict" /* использование последней  версии  js  */;

class Account {
  constructor(loginEmail) {
    this.loginEmail = loginEmail;
  }

  getInfo() {
    console.log(this.loginEmail);
  }
}

console.log(typeof Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
