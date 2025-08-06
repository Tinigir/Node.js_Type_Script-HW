// Задание 1
// Модули для работы со строками
// 1. Создайте файл `stringUtils.ts`, в котором определите функции:
//     `capitalize`, которая делает первую букву строки заглавной.
//     `reverseString`, которая переворачивает строку задом наперед.
// 2. В файле `main.ts` импортируйте эти функции и протестируйте их на примерах строк.

export const capitalize = (str: string): string => {
	if (!str) return "";
	return str[0].toUpperCase() + str.slice(1);
  };
  
  export const reverseString = (str: string): string => {
	  return str.split("").reverse().join("");
  };