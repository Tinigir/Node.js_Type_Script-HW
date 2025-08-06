// Задание 1
// Объединение и пересечение типов
// 1. Создайте два типа: `Admin` и `User`.
// 2. Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк), а тип `User` должен включать поля `name` (строка) и `email` (строка).
// 3. Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.

console.log("Задание 1");

type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const admin: AdminUser = {
  name: "Natali",
  email: "nata@gmail.com",
  permissions: ["/dashboard", "/categories", "/products", "/admins"],
};

console.log(admin);

// Задание 2
// Вложенные объекты и опциональные поля
// 1. Создайте объект `Car` с полями `make` (строка), `model` (строка), и вложенным объектом `engine`, который имеет поля `type` (строка) и `horsepower` (число).
// 2. Добавьте опциональное поле `year` (число) для года выпуска машины.
// 3. Напишите функцию, которая выводит информацию о машине.

console.log("Задание 2");

type Engine = {
  type: string;
  horsepower: number;
};

interface Car {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
}

const getInfoFromCar = (car: Car): void => {
  let info: string = `Car info: \n ${car.make}, model: ${car.model} \n engine: \n type: ${car.engine.type}, horsepower: ${car.engine.horsepower}`;

  if (car.year) {
    info += `\n year: ${car.year}`;
  }

  console.log(info);
};

const myCar1: Car = {
  make: "Nissan",
  model: "Murano",
  engine: {
    type: "3.5-liter V6",
    horsepower: 260,
  },
  year: 2016,
};
const myCar2: Car = {
  make: "Renault",
  model: "Megane",
  engine: {
    type: "Diesel",
    horsepower: 110,
  },
};

getInfoFromCar(myCar1);
getInfoFromCar(myCar2);

// Задание 3
// Интерфейс для функции с объектом
// 1. Создайте интерфейс для функции `calculateDiscount`, которая принимает объект `Product` с полями `name` (строка) и `price` (число), а также параметр `discount` (число).
// 2. Функция должна возвращать новую цену продукта с учетом скидки.

console.log("Задание 3");

interface Product {
  name: string;
  price: number;
}

interface CalculateDiscount {
  (product: Product, discount: number): number;
}

const calculateDiscount: CalculateDiscount = (
  product: Product,
  discount: number
) => {
  return product.price - (product.price * discount) / 100;
};

const product1: Product = {
  name: "Laptop",
  price: 1200,
};

console.log(calculateDiscount(product1, 15));

// Задание 4
// Массив объектов и функции
// 1. Создайте интерфейс `Employee`, который включает поля `name` (строка) и `salary` (число).
// 2. Создайте массив объектов `Employee`, затем напишите функцию, которая принимает этот массив и возвращает массив зарплат всех сотрудников.

console.log("Задание 4");

interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  {
    name: "Anna",
    salary: 3200,
  },
  {
    name: "Natali",
    salary: 3800,
  },
];

const getSalaryEmployees = (employees: Employee[]): number[] => {
  return employees.map((employee: Employee): number => employee.salary);
};

console.log(getSalaryEmployees(employees));

// Задание 5
// Наследование интерфейсов и работа с объектами
// 1. Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка).
// 2. Создайте интерфейс `Student`, который наследует `Person` и добавляет поле `grade` (число).
// 3. Создайте объект `student` этого типа и напишите функцию, которая выводит полное имя студента и его оценку.

console.log("Задание 5");

interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  firstName: "Nataliia",
  lastName: "Oliinyk",
  grade: 1.0,
};

const displayStudent = (student: Student): void => {
  return console.log(
    `Student: ${student.firstName} ${student.lastName}, grade: ${student.grade}`
  );
};

displayStudent(student);

// Задание 6
// Интерфейс для функции с несколькими параметрами
// 1. Создайте интерфейс для функции `concatStrings`, которая принимает два параметра: `str1` и `str2` (оба строки) и возвращает их объединение.
// 2. Реализуйте эту функцию и протестируйте её.

console.log("Задание 6");

interface ConcatStrings {
  (str1: string, str2: string): string;
}

const concatStrings: ConcatStrings = (str1, str2) => {
  return str1 + " " + str2;
};

console.log(concatStrings("Nata", "Oliinyk"));