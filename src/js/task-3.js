"use strict" /* использование последней  версии  js  */;

class Storage {
  constructor(items) {
    this.items = items;
  }

  addItem(items) {
    this.items.push(items);
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      return this.items.splice(index, 1);
    }
  }
  getItems() {
    return this.items;
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
