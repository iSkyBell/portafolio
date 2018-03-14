import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Path
import { APP_ROUTING } from './app.routes';

// Pages
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';

// Services
import { InformationService } from './services/information.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    InformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
