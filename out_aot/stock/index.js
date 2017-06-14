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
import { StockService } from "./services/stock.service";
import { WineComService } from "./services/wineCom.service";
import { AddStockPageContainer } from "./containers/add-stock-page/add-stock-page.container";
import { WineSearchContainer } from "./containers/wine-search/wine-search.container";
import { StockPageContainer } from "./containers/stock-page/stock-page.container";
import { EditStockPageContainer } from "./containers/edit-stock-page/edit-stock-page.container";
import { DetailWineFormComponent } from "./components/detail-wine-form/detail-wine-form.component";
import { FavoriteWinesComponent } from "./components/favorite-wines/favorite-wines.component";
import { WineResultComponent } from "./components/wine-result/wine-result.component";
import { WineResultsComponent } from "./components/wine-results/wine-results.component";
import { CommonLogicModule } from "../common/index";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { StockSandbox } from "./stock.sandbox";
export let StockModule = class StockModule {
};
StockModule = __decorate([
    NgModule({
        imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule, HttpModule, CommonLogicModule],
        declarations: [AddStockPageContainer, EditStockPageContainer, StockPageContainer, WineSearchContainer, DetailWineFormComponent,
            FavoriteWinesComponent, WineResultComponent, WineResultsComponent],
        exports: [AddStockPageContainer, EditStockPageContainer, StockPageContainer],
        providers: [StockService, WineComService, StockSandbox]
    }), 
    __metadata('design:paramtypes', [])
], StockModule);
//# sourceMappingURL=index.js.map