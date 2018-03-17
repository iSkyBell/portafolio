import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  termino:string = undefined;

  constructor( public _product:ProductsService, private route:ActivatedRoute) {
    this.route.params.subscribe(parametro=>{
      this.termino = parametro['termino'];
      this._product.buscarProducto( this.termino );
    });
    
   }

}
