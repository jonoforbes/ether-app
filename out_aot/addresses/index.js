var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
export let AddressesModule = class AddressesModule {
};
AddressesModule = __decorate([
    NgModule({
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
    }), 
    __metadata('design:paramtypes', [])
], AddressesModule);
//# sourceMappingURL=index.js.map