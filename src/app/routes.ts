import { Routes } from "@angular/router";

import { AddairlineComponent } from "./components/addairline/addairline.component";
import { BookflightComponent } from "./components/bookflight/bookflight.component";
import { BookinghistoryComponent } from './components/bookinghistory/bookinghistory.component';
import { LoginComponent } from "./components/login/login.component";
import { ManageairlineComponent } from "./components/manageairline/manageairline.component";
import { ReportsComponent } from './components/reports/reports.component';
import { SearchflightComponent } from "./components/searchflight/searchflight.component";
import { SearchflightresultsComponent } from './components/searchflightresults/searchflightresults.component';
import { AuthGuard } from "./gaurds/auth.guard";


export const routes:Routes=[
    {
        path: 'addairline',
        component: AddairlineComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'ar',
        redirectTo: '/addairline',
        pathMatch: 'prefix'
    }, 
    {
        path: 'bookflight',
        component: BookflightComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'searchflight',
        component:SearchflightComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'manageairline',
        component:ManageairlineComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'bookinghistory',
        component: BookinghistoryComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'searchresults',
        component: SearchflightresultsComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'Reports',
        component: ReportsComponent,
        canActivate:[AuthGuard]
    },
    {
        path: '',
    component:LoginComponent
    }
]