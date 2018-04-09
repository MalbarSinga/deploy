import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


//PAGE CREATION ARTICLE

import {ProductManagementPage} from "../product-management/product-management";


//classe product
import {Product} from "../../app/Product";

/**
 * Generated class for the StockManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-stock-management',
    templateUrl: 'stock-management.html',
})
export class StockManagementPage {
    title: string = "Gestion de Stock";
    ProductManagementPage: ProductManagementPage;

//FONCTION QUI PERMET DE NAVIGUER VERS LA PAGE CREATION ARTICLE
    public ChargerPage() {
        this.navCtrl.push(ProductManagementPage);
    }

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad StockManagementPage');


    }

}
