"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dfes = void 0;
class Dfes {
    constructor() {
        this.documents = [];
    }
    add(document) {
        this.documents.push(document);
    }
    getTotalValue(itemProperty) {
        return this.itemList.reduce((partialSum, a) => {
            return partialSum + a[itemProperty];
        }, 0);
    }
    addTotalizerRow() {
        const row = {
            emit: {},
            items: [
                {
                    itemVTotal: this.getTotalValue('itemVTotal'),
                    itemQuantidade: this.getTotalValue('itemQuantidade'),
                    itemVDesc: this.getTotalValue('itemVDesc')
                },
            ],
            ide: {},
            dest: {},
        };
        this.add(row);
    }
    get list() {
        return this.documents;
    }
    get itemList() {
        return this.documents.flatMap((x) => x.items);
    }
}
exports.Dfes = Dfes;
//# sourceMappingURL=dfes.js.map