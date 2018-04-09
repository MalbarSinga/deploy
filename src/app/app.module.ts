import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Product} from "./Product";

//COMPONENTS
import { MyApp } from './app.component';
import{MarketHeaderComponent} from "../components/market-header/market-header";
//LISTE DES PAGES
import { HomePage } from '../pages/home/home';
import {ProductManagementPage} from "../pages/product-management/product-management";
import {StockManagementPage} from "../pages/stock-management/stock-management";
import { ProducteProvider } from '../providers/producte/producte';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
      MarketHeaderComponent,
          StockManagementPage,
      ProductManagementPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      StockManagementPage,
      ProductManagementPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProducteProvider,
    ProducteProvider
  ]
})
export class AppModule {}
