class Pessoas {
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

class PessoaFisica extends Pessoas {
    cpf: string = ''
    constructor(id:number, nome:string, cpf: string) {
        super(id,nome)
        this.cpf = cpf
    }

}

class PessoaJuridica extends Pessoas {
    cnpj: string = ''
    constructor(id:number, nome:string, cnpj: string) {
        super(id, nome)
        this.cnpj = cnpj
    }
}

let pf = new PessoaFisica(1, 'maria', '123')
let pj = new PessoaJuridica(1,'loja tal', '1234567')
console.log(pf)
console.log(pj)