import {Component} from '@angular/core';
import {StockManagementPage} from "../../pages/stock-management/stock-management";
import {ProductManagementPage} from "../../pages/product-management/product-management";

/**
 * Generated class for the MarketHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'market-header',
    templateUrl: 'market-header.html'
})
export class MarketHeaderComponent {
    StockManagementPage: StockManagementPage;
    ProductManagementPage: ProductManagementPage;

    title: string;

    constructor() {
        console.log('Hello MarketHeaderComponent Component');
        this.title = '';


    }

}
