import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
            path:'',
            redirectTo:'home',
            pathMatch:'full'
    },
    {
        path:'home',
        component:MainComponent
    },
    {
        path:'contactUs',
        component:ContactComponent
    }
];
