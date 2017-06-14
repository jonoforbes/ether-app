import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { CommonLogicModule } from "../common/index";

import { ProductsSandbox } from "./products.sandbox";
import { ProductsService } from "./services/products.service";

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
        ProductsSandbox,
        ProductsService
    ]
})
export class ProductsModule {  }