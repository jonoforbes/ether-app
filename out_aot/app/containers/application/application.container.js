var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Title } from "@angular/platform-browser";
import { Component, ChangeDetectionStrategy, HostListener, ViewChild } from "@angular/core";
import { AppSandbox } from "../../app.sandbox";
import { Router } from "@angular/router";
export let ApplicationContainer = class ApplicationContainer {
    constructor(title, sb, router) {
        this.title = title;
        this.sb = sb;
        this.router = router;
        this.navMode = "over";
        this.isCollapsed$ = this.sb.isCollapsed$;
        this.activitiesBarMode$ = this.sb.activitiesBarMode$;
        this.account$ = this.sb.account$;
        this.isBusy$ = this.sb.isBusy$;
        this.isAuthenticated$ = this.sb.isAuthenticated$;
        this.subscriptions = [];
        this.title.setTitle("Ether CRM");
    }
    beforeUnloadHandler(event) {
        this.logout();
    }
    onResize(event) {
        if (event.target.innerWidth < 1450) {
            this.navMode = 'over';
            this.rightsidenav.close();
        }
        if (event.target.innerWidth > 1450) {
            this.navMode = 'side';
            this.rightsidenav.open();
        }
    }
    ngOnInit() {
        this.sb.checkInitialAuthentication();
        this.subscriptions.push(this.sb.isAuthenticated$.subscribe((isAuthenticated) => {
            if (isAuthenticated) {
                this.sb.loadData();
                this.sb.connectRealTime();
            }
        }));
    }
    logout() {
        this.router.navigate(["/stock"]);
        this.sb.logout();
        this.router.navigate(["/authentication"]);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
};
__decorate([
    ViewChild('rightsidenav'), 
    __metadata('design:type', Object)
], ApplicationContainer.prototype, "rightsidenav", void 0);
__decorate([
    HostListener('window:beforeunload', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], ApplicationContainer.prototype, "beforeUnloadHandler", null);
__decorate([
    HostListener('window:resize', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], ApplicationContainer.prototype, "onResize", null);
ApplicationContainer = __decorate([
    Component({
        selector: "application",
        providers: [Title],
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <navbar [account]="account$|async" (logout)="logout()" *ngIf="isAuthenticated$|async"></navbar>
        <md-sidenav-container class="app-container">
  
  <div>

    <router-outlet></router-outlet>

  </div>

  <md-sidenav #rightsidenav mode="{{navMode}}" align="end" [opened]="isCollapsed$|async" class="right-sidenav">

    <h3 *ngIf="(activitiesBarMode$ | async) == 'messages'" style="font-size: 40px; color: #838383">messages</h3>
    <all-activities *ngIf="(activitiesBarMode$ | async) == 'notifications'">notifications</all-activities>
      
      



  </md-sidenav>

</md-sidenav-container>

  `
    }), 
    __metadata('design:paramtypes', [Title, AppSandbox, Router])
], ApplicationContainer);
//# sourceMappingURL=application.container.js.map