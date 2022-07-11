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
var Veiculo = /** @class */ (function () {
    function Veiculo(placa, modelo, marca) {
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
    }
    Veiculo.prototype.show = function () {
        console.log("Placa: ".concat(this.placa));
        console.log("Modelo: ".concat(this.modelo));
        console.log("Marca: ".concat(this.marca));
    };
    return Veiculo;
}());
var Automovel = /** @class */ (function (_super) {
    __extends(Automovel, _super);
    function Automovel(placa, modelo, marca, numeroPortas) {
        var _this = _super.call(this, placa, modelo, marca) || this;
        _this.numeroPortas = numeroPortas;
        return _this;
    }
    Automovel.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("N\u00FAmero de portas: ".concat(this.numeroPortas));
    };
    return Automovel;
}(Veiculo));
var a1 = new Automovel('def-3456', "golf", "Wolkswagen", 4);
a1.show();
// class passeio herdando de automovel
var Passeio = /** @class */ (function (_super) {
    __extends(Passeio, _super);
    function Passeio(placa, modelo, marca, numeroPortas, tipo) {
        var _this = _super.call(this, placa, modelo, marca, numeroPortas) || this;
        _this.tipo = tipo;
        return _this;
    }
    Passeio.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("Tipo: ".concat(this.tipo));
    };
    return Passeio;
}(Automovel));
var pa1 = new Passeio('FGH_2324', 'Ka', 'ford', 4, 'sedan');
pa1.show();
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(placa, modelo, marca, cilindradas) {
        var _this = _super.call(this, placa, modelo, marca) || this;
        _this.cilindradas = cilindradas;
        return _this;
    }
    Moto.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("Cilindradas: ".concat(this.cilindradas));
    };
    return Moto;
}(Veiculo));
// let m1:Moto = new Moto('def-3456', "broz", "honda", 190 )
// m1.show()
