import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {DashboardPage} from '../pages/dashboard/dashboard'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RechargeCardPage } from '../pages/recharge-card/recharge-card';
import { FeedbackPage } from '../pages/feedback/feedback';
import { FeedbackAdminPage } from '../pages/feedback-admin/feedback-admin';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { OrderPage } from '../pages/order/order';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    RechargeCardPage,
    FeedbackPage,
    FeedbackAdminPage,
    OrderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    RechargeCardPage,
    FeedbackPage,
    FeedbackAdminPage,
    OrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
