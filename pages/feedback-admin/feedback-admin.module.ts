import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackAdminPage } from './feedback-admin';

@NgModule({
  declarations: [
    FeedbackAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedbackAdminPage),
  ],
})
export class FeedbackAdminPageModule {}
