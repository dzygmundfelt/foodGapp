import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliveredPage } from './delivered';

@NgModule({
  declarations: [
    DeliveredPage,
  ],
  imports: [
    IonicPageModule.forChild(DeliveredPage),
  ],
  exports: [ 
      DeliveredPage
  ]
})
export class DeliveredPageModule {}