// Задание 1
// Обработка цепочки промисов с `async/await`
// 1. Создайте несколько функций, которые возвращают промисы с разным временем выполнения.
// 2. Напишите функцию, которая вызывает эти промисы поочерёдно, используя `await`, и обрабатывает результаты каждой операции.
// 3. Убедитесь, что цепочка промисов выполняется последовательно.

const getPromiseWithDelay = (delay: number): Promise<string> => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		resolve(`Promise successfully, delay time: ${delay}`);
	  }, delay);
	});
  };
  
  const getPromisesConsecutively = async (): Promise<void> => {
	const result1: string = await getPromiseWithDelay(1000);
	console.log(`Task 1 Result 1: ${result1}`);
  
	const result2: string = await getPromiseWithDelay(3000);
	console.log(`Task 1 Result 2: ${result2}`);
  
	const result3: string = await getPromiseWithDelay(2000);
	console.log(`Task 1 Result 3: ${result3}`);
  };
  
  getPromisesConsecutively();
  
  // Задание 2
  // Асинхронная обработка данных из массива
  // 1. Напишите функцию, которая принимает массив строк.
  // 2. Каждая строка будет асинхронно обрабатываться (например, преобразовываться в верхний регистр с задержкой).
  // 3. Используйте `Promise.all` для выполнения всех операций параллельно и вывода всех результатов.
  
  const getPromiseStringConvertToUppercase = (str: string): Promise<string> => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		resolve(str.toUpperCase());
	  }, 1000);
	});
  };
  
  const getPromisesStringInParallel = async (arr: string[]): Promise<void> => {
	const promises: Promise<string>[] = arr.map(
	  getPromiseStringConvertToUppercase
	);
	const result: string[] = await Promise.all<Promise<string>[]>(promises);
	console.log(result);
  };
  
  const myArrayStrings: string[] = ["task2", "promises", "parallel"];
  getPromisesStringInParallel(myArrayStrings);
  
  // Задание 3
  // Обработка ошибки в параллельных промисах
  // 1. Напишите функцию, которая вызывает три промиса параллельно с помощью `Promise.all`.
  // 2. Один из промисов должен намеренно завершиться с ошибкой через `reject`.
  // 3. Обработайте эту ошибку с использованием `try/catch` и выведите соответствующее сообщение.
  
  const promise1: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
	  resolve("Task 3: Promise 1  successfully");
	}, 1000);
  });
  
  const promise2: Promise<string> = new Promise((resolve, reject) => {
	resolve("Task 3: Promise 2  successfully");
  });
  
  const promise3: Promise<string> = new Promise((resolve, reject) => {
	reject("Task 3: Promise 3  rejected");
  });
  
  const getPromisesInParallel = async (
	promise1: Promise<string>,
	promise2: Promise<string>,
	promise3: Promise<string>
  ): Promise<void> => {
	try {
	  const result: string[] = await Promise.all<Promise<string>[]>([
		promise1,
		promise2,
		promise3,
	  ]);
	  console.log("All results:", result);
	} catch (error) {
	  console.log("Caught error:", error);
	}
  };
  
  getPromisesInParallel(promise1, promise2, promise3);
  
  // Задание 4
  // Асинхронная функция с динамическим временем выполнения
  // 1. Напишите асинхронную функцию, которая принимает массив чисел.
  // 2. Для каждого числа создайте промис, который будет завершаться через количество миллисекунд, равное значению числа.
  // 3. Используйте `Promise.all` для ожидания завершения всех промисов и вывода результатов в консоль.
  
  const getPromiseFromNumberWithDelay = async (arr: number[]): Promise<void> => {
	const arrPromises: Promise<string>[] = arr.map<Promise<string>>(
	  (num: number) => getPromiseWithDelay(num)
	);
	const result: string[] = await Promise.all(arrPromises);
	console.log("Task 4", result);
  };
  
  getPromiseFromNumberWithDelay([1000, 2000, 1500, 4000]);