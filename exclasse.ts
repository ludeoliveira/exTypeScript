
class Invoice {
    // client:string
    // private details:string
    // amount:number

    constructor(c: string, d: string, a: number) {
        this.client = c
        this.details = d
        this.amount = a
    }
    format() {
        return `${this.client} owes ${this.amount} for${this.details}`
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 250)
const invTwo= new Invoice('luige', 'work on the mario website', 300)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})




// Criar a classe carro com todos os atributos privados
// - criar os metodos get e set de cada atributo
// - Não permitir informar placa  diferente de 7 digitos
// - o modelo e marca deve ter no minimo 3 carcateres

// class Carro {
//     private id:number = 0
//     private placa:string = ''
//     private modelo:string = ''
//     private marca:string = ''
//     private cor:string = ''

//     constructor(id: number, placa: string, modelo:string, marca:string, cor:string) {
//         this.setId(id)
//         this.setPlaca(placa)
//         this.setModelo(modelo)
//         this.setMarca(marca)
//         this.setCor(cor)
//     }

//     display(): void {
//         console.log(`Id : ${this.id} \n`)
//         console.log(`Placa: ${this.placa} \n`)
//         console.log(`Modelo: ${this.modelo} \n`)
//         console.log(`Marca: ${this.marca} \n`)
//         console.log(`Cor: ${this.cor} \n`)
//     }

//     roncoMotor() {
//         console.log('ROOOOOINNC')
//     }

//     acelerar() {
//         console.log('RANDANDANDAN')
//     }

//     frear() {
//         console.log('GUIGUIGUIIII')
//     }

//     setId(id: number): void {
//         this.id = id
//     }

//     getId(): number {
//         return this.id
//     }

//     setPlaca(placa: string): void {
//         if (placa.length != 7) {
//             console.log('Atenção! A placa deve conter 7 caracteres')
//         } else {
//             this.placa = placa
//         }
//     }

//     getPlaca(): string {
//         return this.placa
//     }

//     setModelo(modelo: string): void {
//         if (modelo.length < 3) {
//             console.log('Atenção! O modelo do carro deve conter no mínimo 3 caracteres')
//         } else {
//             this.modelo = modelo
//         }
//     }

//     getModelo(): string {
//         return this.modelo
//     }

//     setMarca(marca: string): void {
//         if (marca.length < 3) {
//             console.log('Atenção! O marca do carro deve conter no mínimo 3 caracteres')
//         } else {
//             this.marca = marca
//         }
//     }

//     getMarca(): string {
//         return this.marca
//     }


//     setCor(cor: string): void {
//         this.cor = cor
//     }

//     getCor(): string {
//         return this.cor
//     }

// }

// let car1: Carro = new Carro(123, 'JOY2707', 'Kicks', 'Nissan', 'Marrom')
// car1.display()
// car1.acelerar()
// car1.roncoMotor()
// car1.frear()