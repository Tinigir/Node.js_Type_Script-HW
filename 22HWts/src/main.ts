import { capitalize, reverseString } from "./stringUtils";
import { Finance } from "./finance";
import { UserManagement } from "./userManagement";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils";

//Задание 1
console.log(capitalize("natali"));
console.log(capitalize(""));
console.log(capitalize("hello, word!"));

console.log(reverseString("natali"));
console.log(reverseString(""));
console.log(reverseString("hello"));

//Задание 2
const myLoanPayment = new Finance.LoanCalculator(10000, 10, 60);
console.log(`My monthly loan payment: ${myLoanPayment.getMonthlyPayment()}`);

console.log(
  `My income tax: ${Finance.TaxCalculator.getTheTaxAmount(60000, 12)}`
);

//Задание 3
const admin = new UserManagement.Admin.AdminUser(
  "Nataliia",
  "nataliia@gmail.com"
);
admin.addSuperAdmin();
admin.getInfo();
admin.toggleSuperAdmin();
admin.getInfo();

//Задание 4
console.log("Fibonacci up to 13", generateFibonacci(13));
console.log("Fibonacci up to 25", generateFibonacci(25));
console.log("Fibonacci up to 144", generateFibonacci(144));

console.log("Prime numbers up to 1", generatePrimeNumbers(1));
console.log("Prime numbers up to 12",generatePrimeNumbers(12));
console.log("Prime numbers up to 25",generatePrimeNumbers(25));