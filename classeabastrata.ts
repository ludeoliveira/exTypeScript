abstract class Person {
    name: string 
    constructor(name:string) {
        this.name = name
    }
    display():void {
        console.log(this.name);
        
    }

    abstract find(nome:string): Person
    abstract pesquisar(nome:string): string
}

// let pessoa1: Person = new Person('Maria'): Person

class Employee extends Person {
    find(nome:string): Person {
        return new Employee(nome)
    }
    pesquisar(nome:string): string {
        return nome
    }
}

let emp1: Employee = new Employee('Maria')
emp1.display()
console.log(emp1.find('josefa'));

let emp2: Employee 
emp2 = emp1.find('jose')

