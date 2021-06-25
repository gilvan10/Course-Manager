import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit { 
    
    /*courseId: number = 0;

    //(Outro tipo de injestão de dependência com a classe ActivatedRoute) é feita no construtor o id está sendo capturado por aqui, pela rota que está ativa activatedRoute
    constructor(private activatedRoute: ActivatedRoute) {}
    
    ngOnInit(): void {
           //Está dando erro. O objeto é possivelmente 'nulo' 
           //this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
           //https://backefront.com.br/como-obter-parametro-url-angular/  conseguir atrvés deste site resolver o problema citado acima
           this.activatedRoute.params.subscribe(params => this.courseId = params['id']);
        
    } */

    //Segunda parte que não deu para acompanhar
    course: Course;
    courseId: number;

    constructor(private activatedRoute: ActivatedRoute, private courseService : CourseService) {
        this.course = new Course();
        this.courseId = 0;
    }

    ngOnInit(): Course {

        //return this.course = courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
        this.activatedRoute.params.subscribe(params => this.courseId = params['id']);
        return this.course = this.courseService.retrieveById(this.courseId);
    }

    save(): void {
        this.courseService.save(this.course);
    }

}