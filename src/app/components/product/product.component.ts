import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(parametros =>{
      console.log(parametros['id']);
    });
   }

}
