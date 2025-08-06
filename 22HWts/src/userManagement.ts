// Задание 3
// Вложенные пространства имен для управления пользователями
// 1. Создайте файл `userManagement.ts`, в котором определите пространство имен `UserManagement`.
// 2. Внутри него создайте вложенное пространство имен `Admin`. Внутри `Admin` создайте класс `AdminUser`, который будет иметь свойства для имени, email и прав доступа (например, `isSuperAdmin`).
// 3. Также создайте методы для изменения прав доступа.
// 4. Используйте этот класс в файле `main.ts` для создания администратора и изменения его прав.

export namespace UserManagement {
	export namespace Admin {
	  export class AdminUser {
		private name: string;
		private email: string;
		private isSuperAdmin: boolean = false;
  
		constructor(name: string, email: string) {
		  this.name = name;
		  this.email = email;
		}
  
		addSuperAdmin(): boolean {
		  return (this.isSuperAdmin = true);
		}
		toggleSuperAdmin(): boolean {
		  return (this.isSuperAdmin = !this.isSuperAdmin);
		}
		getInfo(): void {
		  console.log(
			`Info: ${this.name}, ${this.email}, role SuperAdmin: ${this.isSuperAdmin}`
		  );
		}
	  }
	}
  }