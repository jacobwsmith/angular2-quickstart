import {Component} from 'angular2/core';
import {feature1Component} from './feature1/feature1.component';
import {feature2Component} from './feature2/feature2.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <feature1></feature1>
        <feature2></feature2>
    `,
    directives: [feature1Component, feature2Component]
})
export class AppComponent {
    constructor(){
        
    }
}