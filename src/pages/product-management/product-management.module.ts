import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductManagementPage } from './product-management';
import {ProducteProvider} from "../../providers/producte/producte";
import{Product} from "../../app/Product";
import {Pro} from "@ionic/pro";
import {NgForm} from "@angular/forms";

@NgModule({
  declarations: [
    ProductManagementPage,ProducteProvider,Product
  ],
  imports: [
    IonicPageModule.forChild(ProductManagementPage),ProducteProvider,Product
  ],
})
export class ProductManagementPageModule {}
