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
console.log(cachorro);
let gato = new Animal();
gato.raca = 'siamesa';
gato.especie = 'felino';
gato.barulho('miau!');
console.log(gato);
//# sourceMappingURL=classes.js.map