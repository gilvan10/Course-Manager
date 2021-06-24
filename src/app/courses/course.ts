export class Course {
   
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    code: string;
    duration: number;
    rating: number;
    releaseDate: string;
    description: string;

    //Precisei criar o construtor, por que sem o construtor estava dando erro.
    constructor( ){
        this.id = 0;
        this.name = "Teste";
        this.imageUrl = "Teste";
        this.price = 0;
        this.code = "Teste";
        this.duration = 0;
        this.rating = 0;
        this.releaseDate = "";
        this.description = "";
    }
}