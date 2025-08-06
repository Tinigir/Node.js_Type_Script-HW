// Задание 2
// Пространства имен для финансовых операций
// 1. Создайте файл `finance.ts`, в котором определите пространство имен `Finance`.
// 2. Внутри него создайте классы:
// `LoanCalculator`, который рассчитывает ежемесячные платежи по кредиту по формуле аннуитета.
// `TaxCalculator`, который рассчитывает налог на доход.
// 3. Используйте эти классы в файле `main.ts` для расчета платежей по кредиту и налога на примерных данных.

export namespace Finance {
	export class LoanCalculator {
	  // величина периодической выплаты A = K * S ;
	  // S — величина кредита
	  // K = (i * (1 + i)^n) / ((1 + i)^n - 1);
	  // где i — процентная ставка за один период (годовая ставка, деленная на 12 и на 100),
	  // n — количество периодов на протяжении всего действия аннуитета (общее количество месяцев кредитования)
  
	  private loanAmount: number;
	  private interestRate: number;
	  private months: number;
  
	  constructor(loanAmount: number, interestRate: number, months: number) {
		this.loanAmount = loanAmount;
		this.interestRate = interestRate;
		this.months = months;
	  }
	  getMonthlyPayment(): number {
		const monthRate = this.interestRate / 12 / 100;
		return Math.floor(
		  (this.loanAmount * (monthRate * Math.pow(1 + monthRate, this.months))) /
			(Math.pow(1 + monthRate, this.months) - 1)
		);
	  }
	}
  
	export class TaxCalculator {
	  static getTheTaxAmount(income: number, rate: number): number {
		return income * (rate / 100);
	  }
	}
  }