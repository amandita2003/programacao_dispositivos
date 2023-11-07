import * as Speech from 'expo-speech';

export class Cachorro{
    public id: number;
    public nome: string;
    public raca: string;
    public data_nascimento: string;

    constructor(obj?: Partial<Cachorro>) {
        if(obj){
            this.id=obj.id;
            this.nome=obj.nome;
            this.raca=obj.raca;
            this.data_nascimento=obj.data_nascimento;
        }
    }
    
    latir(){
        Speech.speak("au au au au au au au au au"+this.nome,{language:"pt-br"})
    }
    toString(){
        const fields=Object.values(this).join(", ");
        return 'Cachorro[${fields}]';
    }
}