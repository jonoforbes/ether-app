import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { CommonLogicModule } from "../common/index";

import { SalesSandbox } from "./sales.sandbox";
import { SalesService } from "./services/sales.service";

@NgModule({
    imports:      [ 
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        HttpModule,
        CommonLogicModule,
     ],
    declarations: [],
    exports:    [],
    providers: [
        SalesSandbox,
        SalesService
    ]
})
export class SalesModule {  }