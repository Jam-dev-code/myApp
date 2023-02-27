import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Items3PageRoutingModule } from './items3-routing.module';

import { Items3Page } from './items3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Items3PageRoutingModule
  ],
  declarations: [Items3Page]
})
export class Items3PageModule {}
