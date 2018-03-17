import { Component } from '@angular/core';
import { InformationService } from './services/information.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  constructor( public _http:InformationService, public _products:ProductsService) { }

}
