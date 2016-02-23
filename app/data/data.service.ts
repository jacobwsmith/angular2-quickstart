import { Injectable } from 'angular2/core';

@Injectable()
export class DataService {
    
    private data:String;
    
    constructor(){
        setTimeout(() => {
            this.data = 'Data service here!';
        }, 1000)
    }
}