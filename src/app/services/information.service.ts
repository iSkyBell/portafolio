import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformationService {

  info:any = {};
  cargada:boolean = false;

  constructor( public http:Http) {
    this.http.get("assets/data/data.page.json")
             .subscribe( data => {
               this.cargada = true;
               console.log(data.json());
               this.info = data.json();
             });
  }

}
