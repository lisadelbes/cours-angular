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
        loadComponent:()=> import('./composntfriend/composntfriend').then(m=>m.MonInputComponentBis)   
    },
    {
        path:'exo-liste',
        loadComponent:()=> import('./exo-liste/exo-liste').then(m=>m.ExoListe)   
    },
    {
        path:'directives-parent',
        loadComponent:()=> import('./directives-parent/directives-parent').then(m=>m.DirectivesParent)   
    },
    {
        path:'meteo-api',
        loadComponent:()=> import('./meteo-api/meteo-api').then(m=>m.MeteoApi)   
    },
    {
        path:'pokemon-list',
        loadComponent:()=> import('./pokemon-list/pokemon-list').then(m=>m.PokemonList)   
    },

    // mettre la page ERREUR à la fin
    {
        path:'**',
        loadComponent:()=> import('./notfound/notfound').then(m=>m.Notfound)
    }
];