// Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.

console.log("Задание 1");

const sumEvenNumbers = (array: number[]): number => {
  return array
    .filter((item: number) => item % 2 === 0)
    .reduce((acc: number, elem: number): number => {
      return acc + elem;
    }, 0);
};

const array1: number[] = [1, 2, 3, 4, 5, 6];

console.log(sumEvenNumbers(array1));

// Задание 2
// Определите интерфейс `StringToBooleanFunction` для функции, которая принимает строку и возвращает `boolean` (например, проверяет, является ли строка пустой). Реализуйте такую функцию.

console.log("Задание 2");

interface StringToBooleanFunction {
  (str: string): boolean;
}

const stringToBooleanFunction: StringToBooleanFunction = (str) => {
  return str.length === 0;
};

console.log(stringToBooleanFunction("task"));
console.log(stringToBooleanFunction(""));

// Задание 3
// Создайте тип `CompareStrings` для функции, принимающей две строки и возвращающей `boolean` (например, для проверки равенства строк). Напишите функцию, соответствующую этому типу.

console.log("Задание 3");

type CompareStrings = {
  (str1: string, str2: string): boolean;
};

const compareStrings: CompareStrings = (str1, str2) => {
  return str1 === str2;
};

console.log(compareStrings("Nata", "Nata"));
console.log(compareStrings("nata", "Nata"));
console.log(compareStrings("Nata", "hello"));

// Задание 4
// Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа и возвращает последний элемент этого массива.

console.log("Задание 4");

const getLastElement = <T>(array: T[]): T => {
  return array[array.length - 1];
};

console.log(getLastElement<number>([1, 2, 3, 4, 5]));
console.log(getLastElement<string>(["1", "2", "3"]));
console.log(getLastElement<object>([{ name: "Nata" }, { name: "Anna" }]));

// Задание 5
// Создайте обобщенную функцию `make Triple`, которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.

console.log("Задание 5");

const makeTriple = <T>(val1: T, val2: T, val3: T): T[] => {
  return [val1, val2, val3];
};

console.log(makeTriple<number>(1, 2, 3));
console.log(makeTriple<string>("1", "2", "3"));
console.log(makeTriple<object>({ name: "Nata" }, { name: "Anna" }, { name: "Nick" }));