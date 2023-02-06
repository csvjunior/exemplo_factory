"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servico = void 0;
class Servico {
    constructor() {
        this.codigo = 1234;
        this.nome = "Formatação";
        this.valor = 100.00;
        this.aliquota = 4;
    }
    exibir() {
        console.log(`SERVIÇO: ${this.codigo} | ${this.nome} | R$ ${this.valor} | ${this.aliquota}%`);
    }
}
exports.Servico = Servico;
