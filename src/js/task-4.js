"use strict" /* использование последней  версии  js  */;

class StringBuilder {
  constructor(str) {
    this.str = str;
  }
  append(str) {
    this.str = this.str + str; //  добавляет символ в конец строки
  }
  prepend(str) {
    this.str = str + this.str; //  добавляет символ  в  начало  строки
  }
  pad(str) {
    this.str = str + this.str + str; //   добавляет  символ  в  начало  и  в  конец  строки
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
