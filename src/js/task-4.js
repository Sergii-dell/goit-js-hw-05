"use strict" /* использование последней  версии  js  */;

class StringBuilder {
  constructor(str) {
    this.str = str;
  }
  append(str) {
    this.str += str; //  добавляет символ в конец строки
  }
  prepend(str) {
    this.x = str; //  добавляет символ  в  начало  строки
    this.x += this.str;
    this.str = this.x;
  }
  pad(str) {
    this.x = str;
    this.x += this.str;
    this.str = this.x;
    this.str += str; //   добавляет  символ  в  начало  и  в  конец  строки
  }

  get value() {
    return this.str;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
