// Задание 1
// Класс `Animal` и его наследник `Dog`
// 1. Создайте класс `Animal`, который содержит свойства `name` (имя животного) и `species` (вид животного).
// 2. Добавьте метод `sound()`, который выводит в консоль `"The animal makes a sound"`.
// 3. Затем создайте класс-наследник `Dog`, который добавляет новое свойство `breed` (порода собаки) и переопределяет метод `sound()`, чтобы он выводил `"The dog barks"`.

console.log("Задание 1");

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound(): void {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name, "dog");
    this.breed = breed;
  }

  override sound(): void {
    console.log(`The dog ${this.name} barks`);
  }
}

const myCat = new Animal("Sonya", "cat");
myCat.sound();

const myDog = new Dog("Decks", "German Shepherd");
myDog.sound();

// Задание 2
// Статическое свойство для учета всех книг
// 1. Создайте класс `Library`, который имеет статическое свойство `totalBooks` (общее количество книг).
// 2. При каждом добавлении книги это свойство должно увеличиваться.
// 3. В классе также должен быть метод `addBook()`, который увеличивает счетчик книг.
// 4. Создайте несколько объектов класса и проверьте, как изменяется общее количество книг.

console.log("Задание 2");

class Library {
  static totalBooks: number = 0;

  addBook(): void {
    Library.totalBooks++;
  }

  static getTotalBooks(): number {
    return Library.totalBooks;
  }
}

const library1 = new Library();
const library2 = new Library();

library1.addBook();
library1.addBook();
library1.addBook();
library2.addBook();

console.log(Library.getTotalBooks());

// Задание 3
// Переопределение конструктора в классе `Vehicle`
// 1. Создайте класс `Vehicle`, который содержит свойства `make` (марка) и `model` (модель).
// 2. Добавьте конструктор, который инициализирует эти свойства.
// 3. Затем создайте класс-наследник `Motorcycle`, который добавляет новое свойство `type` (тип мотоцикла) и переопределяет конструктор для инициализации всех трех свойств.
// 4. Убедитесь, что данные правильно инициализируются при создании объекта.

console.log("Задание 3");

class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string){
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;

  constructor (make: string, model: string, type: string){
    super(make, model);
    this.type = type;
  }
}

const motorcycle = new Motorcycle("BMW", "R 18", "Classic");

console.log(motorcycle);