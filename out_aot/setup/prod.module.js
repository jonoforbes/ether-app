var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { AppModule } from "../app";
import { StoreModule } from "@ngrx/store";
import { rootReducer } from "../statemanagement/rootReducer";
import { StoreUndoModule } from "ngrx-undo";
export let ApplicationWrapperContainer = class ApplicationWrapperContainer {
};
ApplicationWrapperContainer = __decorate([
    Component({
        selector: "application-wrapper",
        template: `   
        <application></application>
`
    }), 
    __metadata('design:paramtypes', [])
], ApplicationWrapperContainer);
export let ProdModule = class ProdModule {
};
ProdModule = __decorate([
    NgModule({
        imports: [StoreModule.provideStore(rootReducer), StoreUndoModule.interceptStore({ bufferSize: 100 }), AppModule],
        declarations: [ApplicationWrapperContainer],
        bootstrap: [ApplicationWrapperContainer],
        schemas: [CUSTOM_ELEMENTS_SCHEMA,]
    }), 
    __metadata('design:paramtypes', [])
], ProdModule);
//# sourceMappingURL=prod.module.js.map