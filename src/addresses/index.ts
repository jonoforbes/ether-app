import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { CommonLogicModule } from "../common/index";

import { AddressesSandbox } from "./addresses.sandbox";
import { AddressesService } from "./services/addresses.service";
import { GoogleMapsService } from "./services/googlemaps.service";
import { AddressesWidgetContainer } from "./containers/addresses-widget/addresses-widget.container";
import { AddAddressTabComponent } from "./components/add-address-tab/add-address-tab.component";
import { AddressTabComponent } from "./components/address-tab/address-tab.component";
import { AddressesSearchComponent } from "./components/addresses-search/addresses-search.component"; 


import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";
import { AgmCoreModule } from "@agm/core";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        HttpModule,
        CommonLogicModule,
        MaterialModule,
        FlexLayoutModule,
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqkrkJ74JFbCXlZO0l7xm_1uHlJebs7B4'
    }),
    ],
    declarations: [
        AddressesWidgetContainer,
        AddAddressTabComponent,
        AddressTabComponent,
        AddressesSearchComponent
    ],
    exports: [
        AddressesWidgetContainer,
        AddAddressTabComponent,
        AddressTabComponent,
        AddressesSearchComponent
    ],
    providers: [
        AddressesSandbox,
        AddressesService,
        GoogleMapsService
    ]
})
export class AddressesModule {

}
