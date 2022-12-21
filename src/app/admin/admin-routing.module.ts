import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHostComponent } from './components/admin-host/admin-host.component';
import { ManagePhrasesComponent } from './components/manage-phrases/manage-phrases.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHostComponent,
    children: [
      {path: 'phrases', component: ManagePhrasesComponent},
      {path: 'users', component: ManageUsersComponent},
      {path: '', redirectTo: 'phrases', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
