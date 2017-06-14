var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, HostListener, ViewChild } from "@angular/core";
import { MdSidenav } from "@angular/material";
import { ClientAccountsSandbox } from "../../client-accounts.sandbox";
export let ClientAccountsPageContainer = class ClientAccountsPageContainer {
    constructor(sb) {
        this.sb = sb;
        this.isCollapsed$ = this.sb.isCollapsed$;
        this.navMode = "side";
    }
    onResize(event) {
        if (event.target.innerWidth < 1100) {
            this.navMode = 'over';
            this.sidenav.close();
        }
        if (event.target.innerWidth > 1100) {
            this.navMode = 'side';
            this.sidenav.open();
        }
    }
};
__decorate([
    ViewChild('sidenav'), 
    __metadata('design:type', MdSidenav)
], ClientAccountsPageContainer.prototype, "sidenav", void 0);
__decorate([
    HostListener('window:resize', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], ClientAccountsPageContainer.prototype, "onResize", null);
ClientAccountsPageContainer = __decorate([
    Component({
        selector: "client-accounts-page",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        
        <div>
            <md-sidenav-container class="example-sidenav-fab-container">
                
                <md-sidenav #sidenav mode="{{navMode}}" [opened]="!(isCollapsed$| async)" align="start" class="left-sidenav">
                    <router-outlet name="m"></router-outlet>
                </md-sidenav>
                
                
                <router-outlet name="d" ></router-outlet>
            
            </md-sidenav-container>
            </div>


        
    
    `
    }), 
    __metadata('design:paramtypes', [ClientAccountsSandbox])
], ClientAccountsPageContainer);
//# sourceMappingURL=client-accounts-page.container.js.map