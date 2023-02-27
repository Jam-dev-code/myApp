import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { BottomTabComponent } from './bottom-tab/bottom-tab.component';

@NgModule({
  declarations: [
    BottomTabComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BottomTabComponent
  ]
})
export class ComponentsModule { }
