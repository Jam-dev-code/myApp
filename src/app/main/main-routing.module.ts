import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
import { HomePage } from '../home/home.page';
import { MenuPage } from '../menu/menu.page';
import { ContactsPage } from '../contacts/contacts.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        component: HomePage
      },
      {
        path: 'menu',
        component: MenuPage
      },
      {
        path: 'contacts',
        component: ContactsPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
