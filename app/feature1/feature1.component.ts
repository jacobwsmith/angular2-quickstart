import {Component} from 'angular2/core';
import {DataService} from './../data/data.service';

@Component({
    selector: 'feature1',
    template: `
        <p class="feature1">{{bar}}</p>
        <p>{{_dataService.data}}</p>
        <input type="text" [(ngModel)]="_dataService.data">
    `,
    styleUrls: ['app/feature1/feature1.component.css'],
})
export class feature1Component {
    private bar = 'Feature 1 is here!!!';
    constructor(private _dataService: DataService) {}
}