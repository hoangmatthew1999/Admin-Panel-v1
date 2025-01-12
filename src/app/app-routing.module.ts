import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NotificationComponent } from './notification/notification.component';
import { ContactComponent } from './contact/contact.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: '/login'},
  {path: 'login',component:LoginComponent},
  {path: 'welcome',component:WelcomeComponent},
  {path: 'notification',component:NotificationComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'archive',component:ArchiveComponent},


  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  //{ path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
