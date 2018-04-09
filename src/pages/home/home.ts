import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AlertController} from "ionic-angular";
import {StockManagementPage} from "../stock-management/stock-management";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    StockManagementPage = StockManagementPage;
    title : string = "ALKOLATOUTHER";

    //MON NGMODEL DU FORMULAIRE HOMEPAGE
    private NumberCheck: string;

    // FONCTION POUR VERIFIER SI LE INPUT A BIEN 5 CHIFFRES
    private CheckNumber() {

        if (this.NumberCheck.length == 5) {
            this.navCtrl.push(StockManagementPage)

        }
        //EN CAS DECHEC CA DEVRAIT LANCER UNE FONCTION ALERT CONTROLLER
        else if (this.NumberCheck === undefined) {
            alert('Pas bon');

        }

    }

    constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

    }

}
