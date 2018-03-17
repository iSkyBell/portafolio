import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PortafolioComponent, AboutComponent, ProductComponent } from './components/index.pages';

const APP_ROUTES: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true}); 