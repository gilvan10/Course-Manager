import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform { 
    //Montando o replace(Substituição) Os parametros são: primeiro a string, segundo o caractere que vai ser substituido, terceiro o caractere que vai ficar no lugar do substituido 
    transform(value: string, char: string, valuetoReplace: string){
        return value.replace(char,valuetoReplace);
    }

} 