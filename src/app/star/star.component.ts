import { Component, Input, OnChanges } from "@angular/core";


@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
    
})

export class StarComponent implements OnChanges{
    //o input faz com a tag appstar tenha um atributo chamado rating no component (isso mostra no course-list.component.html)
    @Input()
    rating: number = 0;

    starWidth: number = 0;


    ngOnChanges(): void {
        //Esse valor this.rating * 94 / 5 é um calculo para saber se a tag vai serr exibida ou não de acordo a any-asower
        this.starWidth = this.rating * 74 / 5;
    }

}