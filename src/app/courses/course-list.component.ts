import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
   //Esta chamando esse componente direto pela rota agora
   //selector: 'app-course-list',
   templateUrl: './course-list.component.html',
   styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {
   //Antes só tinha esse com o array de cursos que está ngOnInit().
   //courses: Course[] = [];

   filteredCourses: Course[] = [];

   //Essa variável só vai existir aqui neste componente (por causa do anderline)
   _filterBy: string = "";

   //Essa variável só vai existir aqui neste componente (por causa do anderline)
   _courses: Course[] = [];

   constructor(private courseService: CourseService) { }

   ngOnInit(): void {
      //Utilizando o serviço
      this._courses = this.courseService.retrieveAll();
      this.filteredCourses = this._courses;
      //Antes era enviado daqui mesmo os cursos.
      /*this.courses = [
         {
            id: 1,
            name: "Angular Forms",
            imageUrl: '/assets/images/forms.png',
            price: 99.99,
            code: "XPS-8796",
            duration: 120,
            rating: 3,
            releaseDate: "November, 2, 2019",
            description: ""
         },
         {
            id: 2,
            name: "Angular http",
            imageUrl: '/assets/images/http.png',
            price: 49.99,
            code: "lml-1993",
            duration: 80,
            rating: 2,
            releaseDate: "November, 4, 2019",
            description: ""
         }
      ];*/
   }
   
   //TRABALHANDO COM TWO DATA BINDING
   set filter(value: string) { 
      this._filterBy = value;
      this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
   }

   get filter() { 
      return this._filterBy;
  }
}