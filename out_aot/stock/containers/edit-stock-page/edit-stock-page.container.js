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
import { ActivatedRoute, Router } from "@angular/router";
import { StockSandbox } from "../../stock.sandbox";
export let EditStockPageContainer = class EditStockPageContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.id = this.route.snapshot.params["id"];
        this.editWine$ = this.sb.isAuthenticated$
            .filter(isAuthenticated => isAuthenticated)
            .flatMap(() => {
            return this.sb.fetchWine(this.id);
        }).publishReplay().refCount();
    }
    onSave(wine) {
        this.sb.updateWine(this.id, wine);
        this.router.navigate(["/stock"]);
    }
};
EditStockPageContainer = __decorate([
    Component({
        selector: "edit-stock-page",
        template: `
    <default-page>
        <main>
            <div class="row">
                <div class="col-sm-12">
                    <h1><i class="fa fa-pencil"></i>&nbsp;Edit wine</h1>
                </div>
             </div>
             <div class="row" *ngIf="(editWine$|async)">
                <detail-wine-form [wine]="editWine$|async" (onSave)="onSave($event)"></detail-wine-form>
            </div>
        </main>
    </default-page>
     `
    }), 
    __metadata('design:paramtypes', [StockSandbox, ActivatedRoute, Router])
], EditStockPageContainer);
//# sourceMappingURL=edit-stock-page.container.js.map