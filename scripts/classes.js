"use strict";
class Animal {
    constructor() {
        this.raca = '';
        this.especie = '';
    }
    barulho(som) {
        console.log(`${som}`);
    }
}
let cachorro;
cachorro = new Animal();
cachorro.raca = 'Caramelo Brasileiro';
cachorro.especie = "Canis familiaria";
cachorro.barulho('au! au!');
let gato = new Animal();
gato.raca = 'siamesa';
gato.especie = 'felino';
gato.barulho('miau!');
console.log(cachorro);
console.log(gato);
// constructor
class Pessoa {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    ola() {
        console.log(`Ola ${this.nome}`);
    }
    display() {
        console.log(`Id: ${this.id}`);
        console.log(`Nome: ${this.nome} \n`);
    }
}
let ob1;
ob1 = new Pessoa(1, 'Jose');
ob1.display();
let ob2 = new Pessoa(2, 'Maria');
ob2.display;
//# sourceMappingURL=classes.js.map