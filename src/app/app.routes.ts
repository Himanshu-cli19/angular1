import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',
        redirectTo:'mod1',
        pathMatch:'full'

    },
    {
        path:'mod1',
        loadChildren: ()=> import('./mod1/mod1.module').then(m=>m.Mod1Module)
    },
    { 
        path:'mod2',
        loadChildren:()=> import('./mod2/mod2.module').then (m=>m.Mod2Module)
    },
    {
        path:'mod3',
        loadChildren: ()=> import('./mod3/mod3.module').then(m=>m.Mod3Module)
    }
];
