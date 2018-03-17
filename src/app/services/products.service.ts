import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class ProductsService {

  productos:any[] = [];
  cargando        = true;
  constructor( private http: Http ) {
    this.cargarProductos();
   }

   public cargarProductos(){
    if( this.productos.length == 0){
      this.http.get('https://portafolio-c24e4.firebaseio.com/productos_idx.json')
             .subscribe( data => {
               this.productos  = data.json();
               this.cargando   = false;
             });
    }
   }

   public cargarProducto(cod:string){
     return this.http.get(`https://portafolio-c24e4.firebaseio.com/productos/${cod}.json`);
   }

}
