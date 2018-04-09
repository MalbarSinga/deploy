import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {StockManagementPage} from './stock-management';
import {MarketHeaderComponent} from "../../components/market-header/market-header";
import {Product} from "../../app/Product";

@NgModule({
    declarations: [
        StockManagementPage,
        MarketHeaderComponent,
        Product
    ],
    imports: [
        IonicPageModule.forChild(StockManagementPage),
        Product
    ],
})
export class StockManagementPageModule {
}
