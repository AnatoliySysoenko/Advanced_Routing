import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhrasesRoutingModule } from './phrases-routing.module';
import { PhrasesHostComponent } from './components/phrases-host/phrases-host.component';
import { PhrasesListComponent } from './components/phrases-list/phrases-list.component';
import { PhraseDetailsComponent } from './components/phrase-details/phrase-details.component';


@NgModule({
  declarations: [
    PhrasesHostComponent,
    PhrasesListComponent,
    PhraseDetailsComponent
  ],
  imports: [
    CommonModule,
    PhrasesRoutingModule
  ]
})
export class PhrasesModule { }
