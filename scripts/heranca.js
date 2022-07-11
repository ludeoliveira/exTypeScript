"use strict";
class Pessoas {
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
class PessoaFisica extends Pessoas {
    constructor(id, nome, cpf) {
        super(id, nome);
        this.cpf = '';
        this.cpf = cpf;
    }
}
class PessoaJuridica extends Pessoas {
    constructor(id, nome, cnpj) {
        super(id, nome);
        this.cnpj = '';
        this.cnpj = cnpj;
    }
}
let pf = new PessoaFisica(1, 'maria', '123');
let pj = new PessoaJuridica(1, 'loja tal', '1234567');
console.log(pf);
console.log(pj);
//# sourceMappingURL=heranca.js.map