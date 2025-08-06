// Задание 4
// Модули для работы с числовыми последовательностями
// 1. Создайте файл `sequenceUtils.ts`, в котором определите функции:
// `generateFibonacci`, которая генерирует последовательность Фибоначчи до указанного числа.
// `generatePrimeNumbers`, которая генерирует простые числа до указанного числа.
// 2. В файле `main.ts` импортируйте эти функции и протестируйте их на примерах.

export const generateFibonacci = (limit: number): number[] => {
	const result: number[] = [];
	function helper(a: number, b: number): void {
	  if (a > limit) return;
	  result.push(a);
	  helper(b, a + b);
	}
  
	helper(0, 1);
	return result;
  };
  
  export const generatePrimeNumbers = (limit: number): number[] => {
	const result: number[] = [];
	for (let num = 2; num <= limit; num++) {
	  let isPrimeNumber = true;
  
	  for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
		  isPrimeNumber = false;
		  break;
		}
	  }
  
	  if (isPrimeNumber) {
		result.push(num);
	  }
	}
	return result;
  };