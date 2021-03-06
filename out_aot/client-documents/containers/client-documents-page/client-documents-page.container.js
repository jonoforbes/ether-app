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
import { ClientDocumentsSandbox } from "../../client-documents.sandbox";
export let ClientDocumentsPageContainer = class ClientDocumentsPageContainer {
    constructor(sb) {
        this.sb = sb;
        this.isCollapsed$ = this.sb.isCollapsed$;
    }
};
ClientDocumentsPageContainer = __decorate([
    Component({
        selector: "client-documents-page",
        template: `
        <div>
            <md-sidenav-container class="example-sidenav-fab-container">
                
                <md-sidenav #sidenav mode="side" [opened]="!(isCollapsed$| async)" align="start" class="left-sidenav">
                
                    <router-outlet name="m"></router-outlet>

                </md-sidenav>
                
                <router-outlet name="d" ></router-outlet>
            
            </md-sidenav-container>
        </div>
    `
    }), 
    __metadata('design:paramtypes', [ClientDocumentsSandbox])
], ClientDocumentsPageContainer);
//# sourceMappingURL=client-documents-page.container.js.map