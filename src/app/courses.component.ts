import {Component} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template:
    `{{text | summary: 10 }}`
})
export class CoursesComponent {
    text = `Lorem Ipsum is simply dummy text of the printing and typeset...`;
}
