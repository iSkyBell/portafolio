import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class ProductsService {

  productos:any[]          = [];
  productosFiltrados:any[] = [];
  cargando                 = true;

  constructor( private http: Http ) {
    this.cargarProductos();
   }

   public cargarProductos(){

    let promesa = new Promise( ( resolve, reject ) =>{
      this.http.get('https://portafolio-c24e4.firebaseio.com/productos_idx.json')
            .subscribe( data => {
              this.productos  = data.json();
              this.cargando   = false;
              resolve();
            });
    });
    return promesa;

   }

   public cargarProducto(cod:string){
     return this.http.get(`https://portafolio-c24e4.firebaseio.com/productos/${cod}.json`);
   }

   public buscarProducto( termino:string ){
     console.log( this.productos.length );
    if( this.productos.length == 0){
      this.cargarProductos().then( () => {
       // termino la carga
       this.filtrarProductos( termino );
     });
    } else {
      this.filtrarProductos( termino );
    }
   }

   private filtrarProductos( termino:string ){
     this.productosFiltrados = [];
     termino = termino.toLowerCase();
     this.productos.forEach( prod=>{
       if( prod.categoria.indexOf( termino ) >= 0 || prod.titulo.toLowerCase().indexOf( termino ) >=0 ){
         this.productosFiltrados.push( prod );
       }
     });
   }

}
