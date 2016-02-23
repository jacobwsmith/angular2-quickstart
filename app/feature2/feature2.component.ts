import {Component} from 'angular2/core';
import {DataService} from './../data/data.service';

@Component({
    selector: 'feature2',
    template: `
        <p class="feature2">{{bar}}</p>
        <p>{{_dataService.data}}</p>
        <input type="text" [(ngModel)]="_dataService.data">
    `,
    styleUrls: ['app/feature2/feature2.component.css'],
})
export class feature2Component {
    private bar = 'Feature 2 is here!!!';
    constructor(private _dataService: DataService) {}
}