class Veiculo {
    placa: string
    modelo:string
    marca:string
    
    constructor(placa:string, modelo:string, marca:string) {
        this.placa = placa
        this.modelo = modelo
        this.marca = marca
    }

    show():void {
        console.log(`Placa: ${this.placa}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Marca: ${this.marca}`);   
    }
}

export {Veiculo}