import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  producto:any = undefined;
  cod:string   = undefined;

  constructor(private route:ActivatedRoute, public _product:ProductsService) {
    route.params.subscribe(parametros =>{
      this._product.cargarProducto(parametros['id'])
                    .subscribe(data=>{
                      this.producto = data.json();
                      this.cod = parametros['id'];
                  });
    });
   }

}
