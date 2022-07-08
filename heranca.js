var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoas = /** @class */ (function () {
    function Pessoas(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    Pessoas.prototype.ola = function () {
        console.log("Ola ".concat(this.nome));
    };
    Pessoas.prototype.display = function () {
        console.log("Id: ".concat(this.id));
        console.log("Nome: ".concat(this.nome, " \n"));
    };
    return Pessoas;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(id, nome, cpf) {
        var _this = _super.call(this, id, nome) || this;
        _this.cpf = '';
        _this.cpf = cpf;
        return _this;
    }
    return PessoaFisica;
}(Pessoas));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(id, nome, cnpj) {
        var _this = _super.call(this, id, nome) || this;
        _this.cnpj = '';
        _this.cnpj = cnpj;
        return _this;
    }
    return PessoaJuridica;
}(Pessoas));
var pf = new PessoaFisica(1, 'maria', '123');
var pj = new PessoaJuridica(1, 'loja tal', '1234567');
console.log(pf);
console.log(pj);
