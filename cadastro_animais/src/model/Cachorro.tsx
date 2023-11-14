export class Cachorro {
    public id: number;
    public nome: string;
    public raca: string;
    public data_nascimento: number;

    constructor(obj?: Partial<Cachorro>) {
        if (obj) {
            this.id = obj.id
            this.nome = obj.nome
            this.raca = obj.raca
            this.data_nascimento = obj.data_nascimento
        }
    }

    toString() {
        const fields = Object.values(this).join(', ')
        return `Cachorro [${fields}]`
    }

    toObjeto() {
        const cachorro = {
            id: this.id,
            nome: this.nome,
            raca: this.raca,
            data_nascimento: this.data_nascimento,
        }

        return cachorro
    }
};