var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from "@angular/core";
import { CommonSandbox } from "../../common.sandbox";
export let NavbarComponent = class NavbarComponent {
    constructor(sandbox) {
        this.sandbox = sandbox;
        this.isCollapsed$ = this.sandbox.activitiesBarIsCollapsed$;
        this.isBusy$ = this.sandbox.isBusy$;
        this.activeModule$ = this.sandbox.activeModule$;
        this.homeMenuImage = '../../../assets/icons/home_icon@2x.png';
        this.salesMenuImage = '../../assets/icons/sales_icon@2x.png';
        this.opportunitiesMenuImage = '../../assets/icons/opportunities_icon@2x.png';
        this.accountsMenuImage = '../../assets/icons/accounts_icon@2x.png';
        this.marketsMenuImage = '../../assets/icons/markets_icon@2x.png';
        this.messagesMenuImage = '../../assets/icons/messages_icon@2x.png';
        this.contactsMenuImage = '../../assets/icons/contacts_icon@2x.png';
        this.calendarMenuImage = '../../assets/icons/calendar_icon@2x.png';
        this.tasksMenuImage = '../../assets/icons/tasks_icon@2x.png';
        this.notesMenuImage = '../../assets/icons/notes_icon@2x.png';
        this.logout = new EventEmitter();
    }
    logoutClicked() {
        this.logout.emit(null);
    }
    activateRoute(moduleName) {
        this.sandbox.activateModule(moduleName);
    }
    setActivitiesBarMode(mode) {
        this.sandbox.setActivitiesBarMode(mode);
    }
    messagesToggle() {
        this.sandbox.activitiesBarMode$.take(1).subscribe((mode) => {
            if (mode == '') {
                this.toggle();
                this.setActivitiesBarMode('messages');
                return;
            }
            ;
            if (mode == 'messages') {
                this.toggle();
                this.setActivitiesBarMode('');
                return;
            }
            else {
                this.setActivitiesBarMode('messages');
                return;
            }
        });
    }
    notificationsToggle() {
        this.sandbox.activitiesBarMode$.take(1).subscribe((mode) => {
            console.log('mode', mode);
            if (mode == '') {
                this.toggle();
                this.setActivitiesBarMode('notifications');
                return;
            }
            if (mode == 'notifications') {
                this.toggle();
                this.setActivitiesBarMode('');
                return;
            }
            else {
                this.setActivitiesBarMode('notifications');
                return;
            }
        });
    }
    toggle() {
        this.sandbox.toggleActivitiesBar();
    }
    toggleLeft() {
        this.sandbox.toggleMasterBar();
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NavbarComponent.prototype, "account", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NavbarComponent.prototype, "logout", void 0);
NavbarComponent = __decorate([
    Component({
        selector: "navbar",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <md-toolbar class="app-toolbar" color="primary">
   <div fxLayout="row" fxFill>
     <div fxFlex="100px" fxLayoutAlign="start">
       <button class="top-left-buttons" md-icon-button (click)="toggleLeft()">
      <md-icon>view_quilt</md-icon>
    </button>
    
    
      </div> 
     <div fxFlex="200px" fxLayoutAlign="end">
   
     
    <!--<button md-icon-button (click)="openLeftNav()">
      <md-icon svgIcon="ether" color="warn" style="margin-top: -2px;"></md-icon>
    </button>-->
    


    <button class="profileMenu" md-button [mdMenuTriggerFor]="menu">
      <div fxLayout="row">
        <div fxLayout="column">
          <h1>{{account?.firstName}} {{account?.lastName}}</h1>
          <h2>TEMPLAR EIS</h2>
        </div>
        <div fxLayout="column" class="initialsBox">
        <h1>{{account?.firstName | slice:0:1}}{{account?.lastName | slice:0:1}}</h1>
        </div>
      
      </div>
      </button>
<md-menu x-position="before" #menu="mdMenu">
  
  <button md-menu-item (click)="logoutClicked()"><h1>Logout</h1></button>
</md-menu>
    </div>
    <div fxFlex fxLayoutAlign="start">
      <button class="mainMenu" md-button [mdMenuTriggerFor]="menu2">
      <div fxLayout="row">
        <h3><md-icon>apps</md-icon></h3>
        <div fxLayout="column">
          <h1>{{activeModule$|async}}</h1>
        </div>
      
      
      </div>
      </button>
      <md-menu class="mainMenuContainer" x-position="after" #menu2="mdMenu">
        <div fxLayout="row">
              <button md-menu-item (click)="activateRoute('Home'); false" mode="button">
                <div fxLayout="column">
                <img [src]='homeMenuImage'>
                <h1>Home</h1>
                </div>
                </button>
             <button md-menu-item (click)="activateRoute('Sales'); false" mode="button">
                <div fxLayout="column">
                <img [src]='salesMenuImage'>
                <h1>Sales</h1>
                </div>
                </button>
                <button md-menu-item (click)="activateRoute('Documents'); false" mode="button" [routerLink]="['/documents', {outlets: {'m': ['list'], 'd': ['add']}}]">
                <div fxLayout="column">
                <img [src]='opportunitiesMenuImage'>
                <h1>Documents</h1>
                </div>
                </button>
                 <button md-menu-item (click)="activateRoute('Accounts'); false" mode="button" [routerLink]="['/accounts', {outlets: {'m': ['list'], 'd': ['overview']}}]">
                <div fxLayout="column">
                <img [src]='accountsMenuImage'>
                <h1>Accounts</h1>
                </div>
                </button>
                <button md-menu-item (click)="activateRoute('Markets'); false" mode="button">
                <div fxLayout="column">
                <img [src]='marketsMenuImage'>
                <h1>Markets</h1>
                </div>
                </button>
        </div>
        <div fxLayout="row">
              <button md-menu-item (click)="activateRoute('Messages'); false" mode="button" [routerLink]="['/messages', {outlets: {'m': ['list'], 'd': ['add']}}]">
                <div fxLayout="column">
                <img [src]='messagesMenuImage'>
                <h1>Messages</h1>
                </div>
                </button>
             <button md-menu-item (click)="activateRoute('Contacts'); false" mode="button" [routerLink]="['/contacts', {outlets: {'m': ['list'], 'd': ['add']}}]">
                <div fxLayout="column">
                <img [src]='contactsMenuImage'>
                <h1>Contacts</h1>
                </div>
                </button>
                <button md-menu-item (click)="activateRoute('Calendar'); false" mode="button">
                <div fxLayout="column">
                <img [src]='calendarMenuImage'>
                <h1>Calendar</h1>
                </div>
                </button>
                <button md-menu-item (click)="activateRoute('Tasks'); false" mode="button" [routerLink]="['/tasks', {outlets: {'m': ['list'], 'd': ['today']}}]">
                <div fxLayout="column">
                <img [src]='tasksMenuImage'>
                <h1>Tasks</h1>
                </div>
                </button>
                <button md-menu-item (click)="activateRoute('Notes'); false" mode="button" [routerLink]="['/notes', {outlets: {'m': ['list'], 'd': ['add']}}]">
                <div fxLayout="column">
                <img src='../../../assets/icons/notes_icon@2x.png'>
                <h1>Notes</h1>
                </div>
                </button>
        </div>
</md-menu>

    </div>

    <div fxFlex fxLayoutAlign="end">
    



    <md-spinner class="top-spinner" mode="indeterminate" value="50" *ngIf="isBusy$|async"></md-spinner>
    <button class="top-buttons" md-icon-button (click)="messagesToggle()" mdTooltip="Messages">
      <md-icon>forum</md-icon>
    </button>
    <button class="top-buttons" md-icon-button (click)="notificationsToggle()" mdTooltip="Activities">
      <md-icon>notifications</md-icon>
    </button>







    </div>
</div>
</md-toolbar>

    `
    }), 
    __metadata('design:paramtypes', [CommonSandbox])
], NavbarComponent);
//# sourceMappingURL=navbar.component.js.map