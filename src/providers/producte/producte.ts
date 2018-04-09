import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from "../../app/Product";

/*
  Generated class for the ProducteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProducteProvider {

    private Listestock: any[] = [
        {

            id: '2',
            label: 'COca',
            stock: 2,
            threshold: 5
        },
        {
            id: '3',
            label: 'Eau',
            stock: 24,
            threshold: 2
        },
        {
            id: '4',
            label: 'Pain',
            stock: 45,
            threshold: 6
        }
    ];

// FONCTION POUR RECUPERER LA LISTE DU STOCK
    public article: any;

    public GetStock() {
        for (this.article in this.Listestock) {
            console.log(this.article.stock);
            console.log(this.article.label);
            console.log(this.article.id);
            console.log(this.article.threshold);

        }
    }


    constructor(public http: HttpClient,) {
        console.log('Hello ProducteProvider Provider');
        this.GetStock();
    }

}
