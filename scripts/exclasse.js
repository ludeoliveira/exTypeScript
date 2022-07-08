// Criar a classe carro com todos os atributos privados
// - criar os metodos get e set de cada atributo
// - Não permitir informar placa  diferente de 7 digitos
// - o modelo e marca deve ter no minimo 3 carcateres
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes ").concat(this.amount, " for").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luige', 'work on the mario website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// ffefefr
// class Carro {
//     private modelo:string
//     private marca:string
//     private placa:string
//     constructor(cor:string, marca:string) {
//         this.modelo = modelo
//         this.marca = marca
//         this.placa = placa
//     }
//     setModelo(modelo:string):void {
//         if (modelo.length < 3) {
//             console.log('O modelo deve ter mais de 3 caracteres.')
//         }
//         else {
//             this.modelo = modelo
//         }
//     }
//     setModelo(modelo:string):void {
//         if (modelo.length < 3) {
//             console.log('O modelo deve ter mais de 3 caracteres.')
//         }
//         else {
//             this.modelo = modelo
//         }
//     }
// }
