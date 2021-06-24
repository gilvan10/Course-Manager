
import { Injectable } from "@angular/core";
import { Course } from "./course";

//Injeção de dependência, será através do construtor do course-list.component.  Que seja carregado no root da aplicação. E vai ser instaciado uma única vez esse service.
@Injectable({
    providedIn: 'root'  
})

export class CourseService {



    retrieveAll(): Course[] {
        return COURSES;
    } 

    //video 6 trabalhando com formulário e template
    retrieveById(id: number): Course{ 
          //console.log(id);
          let j: number = 0;
          //O find vai fazer uma interação nas linhas do array e assim que ele encontar a linha que atende a a primeira condição retorna a linha(ou objeto)
          //const c = COURSES.map((course) => {if(course.id === id){ return course;}})
          const c = COURSES.find(course => course.id === id);
          console.log(c);
          //for(let i = 0; i <  COURSES.length; i++){ 
             //if(COURSES[i].id === id){
               // j = i;
                //console.log(COURSES[i].id);
            // }
                 
          //}
          return COURSES[j];
         //return COURSES.find((courseIterator :  Course) => courseIterator.id === id);
         //return COURSES.find(COURSES => COURSES.id === id);
         //console.log(id);
         //return COURSES[1];
         //return COURSES.find(COURSES.id === id);
    }

    //save(course: Course) : void {
         //if(course.id) { //findIndex() retorna o indice do objeto procurado
            //const index = COURSES.findIndex((courseIterator :  Course) == courseIterator.id === course.id);
            //COURSES[index] = course;
         //}
    //}

}

var COURSES: Course [] = [

    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }

];