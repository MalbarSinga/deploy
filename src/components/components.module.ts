import { NgModule } from '@angular/core';
import { MarketHeaderComponent } from './market-header/market-header';
import {IonicModule} from "ionic-angular";

@NgModule({
	declarations: [MarketHeaderComponent],
	imports: [IonicModule],
	exports: [MarketHeaderComponent]
})
export class ComponentsModule {}
