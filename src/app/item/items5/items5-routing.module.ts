import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Items5Page } from './items5.page';

const routes: Routes = [
  {
    path: '',
    component: Items5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Items5PageRoutingModule {}
