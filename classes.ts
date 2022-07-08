class Animal {
    raca: string = ''
    especie: string = ''

    barulho(som:string): void {
        console.log(`${som}`)
    }
}

let cachorro: Animal 
cachorro = new Animal()
cachorro.raca = 'Caramelo Brasileiro'
cachorro.especie = "Canis familiaria"
cachorro.barulho('au! au!')

let gato = new Animal()
gato.raca = 'siamesa'
gato.especie = 'felino'
gato.barulho('miau!')

console.log(cachorro)
console.log(gato)

// constructor

class Pessoa {
    id:number
    nome:string
    constructor(id:number, nome:string) {
        this.id = id
        this.nome = nome
    }

    ola():void {
        console.log(`Ola ${this.nome}`)
    }

    display():void {
        console.log(`Id: ${this.id}`);
        console.log(`Nome: ${this.nome} \n`)
        
    }

}

let ob1: Pessoa
ob1 = new Pessoa(1, 'Jose')
ob1.display()

let ob2: Pessoa = new Pessoa(2, 'Maria')
ob2.display