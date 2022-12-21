import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhrasesHostComponent } from './components/phrases-host/phrases-host.component';
import { PhrasesListComponent } from './components/phrases-list/phrases-list.component';
import { PhraseDetailsComponent } from './components/phrase-details/phrase-details.component';

const routes: Routes = [
  {
    path: 'phrases',
    component: PhrasesHostComponent,
    children: [
      {
        path: '',
        component: PhrasesListComponent,
        children: [
          {path: ':id', component: PhraseDetailsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule {
}
