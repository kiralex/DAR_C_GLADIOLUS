import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ServicesPage } from '../pages/services/services';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProPage } from '../pages/pro/pro';
import { ProfilePage } from '../pages/profile/profile';
import { PartenariatPage } from '../pages/partenariat/partenariat';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ServicesPage,
    LoginPage,
    RegisterPage,
    ProPage,
    ProfilePage,
    PartenariatPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ServicesPage,
    LoginPage,
    RegisterPage,
    ProPage,
    ProfilePage,
    PartenariatPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
