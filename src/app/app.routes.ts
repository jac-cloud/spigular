import { Routes } from '@angular/router';
import { UsergeneratorComponent } from './usergenerator/usergenerator.component';
import { UserlistComponent } from './userlist/userlist.component';

export const routes: Routes = [
    {
        path: 'generate',
        component: UsergeneratorComponent
    },
    {
        path: 'list',
        component: UserlistComponent
    }
];
