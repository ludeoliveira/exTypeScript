interface IProduto {
    id: number
    descricao: string
    preco: number
    show(): void
}

interface ICalculos {
    calcularAcrescimo(taxa: number): number
    calcularDesconto(taxa: number): number
}

class Produto implements IProduto, ICalculos {
    id: number
    descricao: string
    preco: number
    constructor(id:number, descricao:string, preco:number) {
        this.id = id 
        this.descricao = descricao
        this.preco = preco 
    }

    show(): void {
        console.log(`Id: ${this.id}`);
        console.log(`Descricao: ${this.descricao}`);
        console.log(`Preco: ${this.preco}`);  
    }

    calcularAcrescimo(taxa: number): number {
        return this.preco * (taxa/100)
    }

    calcularDesconto(taxa: number): number {
        return this.preco * (taxa/100)
    }
}