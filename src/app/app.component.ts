import { Component } from '@angular/core';
import { InformationService } from './services/information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  constructor( public _http:InformationService) { }

}
