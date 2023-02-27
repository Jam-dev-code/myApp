import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Items5PageRoutingModule } from './items5-routing.module';

import { Items5Page } from './items5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Items5PageRoutingModule
  ],
  declarations: [Items5Page]
})
export class Items5PageModule {}
