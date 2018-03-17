import { Component } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor( public _info: InformationService, public router:Router ) { }

  buscarProducto( termino:string ){
    this.router.navigate(['search',termino]);
  }

}
