"use strict";
class Veiculo {
    constructor(placa, modelo, marca) {
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
    }
    show() {
        console.log(`Placa: ${this.placa}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Marca: ${this.marca}`);
    }
}
class Automovel extends Veiculo {
    constructor(placa, modelo, marca, numeroPortas) {
        super(placa, modelo, marca);
        this.numeroPortas = numeroPortas;
    }
    show() {
        super.show();
        console.log(`Número de portas: ${this.numeroPortas}`);
    }
}
// let a1:Automovel = new Automovel('def-3456', "golf", "Wolkswagen", 4)
// a1.show()
// class passeio herdando de automovel
class Passeio extends Automovel {
    constructor(placa, modelo, marca, numeroPortas, tipo) {
        super(placa, modelo, marca, numeroPortas);
        this.tipo = tipo;
    }
    show() {
        super.show();
        console.log(`Tipo: ${this.tipo}`);
    }
}
let pa1 = new Passeio('FGH_2324', 'Ka', 'ford', 4, 'sedan');
pa1.show();
class Moto extends Veiculo {
    constructor(placa, modelo, marca, cilindradas) {
        super(placa, modelo, marca);
        this.cilindradas = cilindradas;
    }
    show() {
        super.show();
        console.log(`Cilindradas: ${this.cilindradas}`);
    }
}
// let m1:Moto = new Moto('def-3456', "broz", "honda", 190 )
// m1.show()
//# sourceMappingURL=aula4.js.map