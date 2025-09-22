import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'about',
        loadComponent:()=> import('./about/about').then(m=>m.About)
    },
    {
        path:'textinterpolation',
        loadComponent:()=> import('./textinterpolation/textinterpolation').then(m=>m.TextInterpolation)   
    },
    {
        path:'propertybinding',
        loadComponent:()=> import('./propertybinding/propertybinding').then(m=>m.Propertybinding)   
    },
    {
        path:'composntfriend',
        loadComponent:()=> import('./composntfriend/composntfriend').then(m=>m.MonInputComponent)   
    },
    // a mettre à la fin
    {
        path:'**',
        loadComponent:()=> import('./notfound/notfound').then(m=>m.Notfound)
    }
];