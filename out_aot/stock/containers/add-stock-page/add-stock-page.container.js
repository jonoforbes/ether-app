var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StockSandbox } from "../../stock.sandbox";
export let AddStockPageContainer = class AddStockPageContainer {
    constructor(sb, router) {
        this.sb = sb;
        this.router = router;
    }
    onSave(wine) {
        this.sb.addWine(wine);
        this.router.navigate(["/stock"]);
    }
};
AddStockPageContainer = __decorate([
    Component({
        selector: "add-stock-page",
        template: `
       <default-page>
            <main>
                <div class="row">
                    <div class="col-sm-12">
                        <h1><i class="fa fa-plus-circle"></i>&nbsp;Add wine</h1>
                    </div>
                </div>
                <div class="row">
                    <detail-wine-form (onSave)="onSave($event)"></detail-wine-form>
                </div>
            </main>
        </default-page>
  `
    }), 
    __metadata('design:paramtypes', [StockSandbox, Router])
], AddStockPageContainer);
//# sourceMappingURL=add-stock-page.container.js.map