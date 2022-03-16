"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formatter = void 0;
class Formatter {
    static toBrlCurrency(value) {
        return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    }
    static toLocaleDate(dateString) {
        dateString = dateString.replace(/-/g, '');
        const year = +dateString.slice(0, 4);
        const month = +dateString.slice(4, 6);
        const day = +dateString.slice(6, 8);
        return new Date(year, month - 1, day).toLocaleDateString();
    }
    static toCpfCnpjMask(value) {
        if (!value) {
            return '';
        }
        //CPF
        if (value.length === 11) {
            var cpfCnpj = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
        }
        //CNPJ
        else {
            cpfCnpj = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
        }
        return cpfCnpj;
    }
}
exports.Formatter = Formatter;
//# sourceMappingURL=formatter.js.map