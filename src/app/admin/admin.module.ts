import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHostComponent } from './components/admin-host/admin-host.component';
import { ManagePhrasesComponent } from './components/manage-phrases/manage-phrases.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';


@NgModule({
  declarations: [
    AdminHostComponent,
    ManagePhrasesComponent,
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
