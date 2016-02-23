import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {DataService} from './data/data.service';

bootstrap(AppComponent, [DataService]);