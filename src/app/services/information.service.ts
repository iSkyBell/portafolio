import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformationService {

  info:any      = {};
  equipo:any[]  = [];
  isDataInfoLoad:boolean   = false;
  isDataAboutLoad:boolean  = false;

  constructor( public http:Http) {
    this.loadInfo();
    this.loadAboutUs();
  }
  
  public loadInfo(){
    this.http.get("assets/data/data.page.json")
             .subscribe( data => {
               this.isDataInfoLoad  = true;
               this.info            = data.json();
             });
  }

  public loadAboutUs(){
    this.http.get("https://portafolio-c24e4.firebaseio.com/equipo.json")
             .subscribe( data => {
               this.isDataAboutLoad = true;
               this.equipo          = data.json();
             });
  }

}
