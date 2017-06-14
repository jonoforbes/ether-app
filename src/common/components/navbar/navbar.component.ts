import {Component, Output, EventEmitter, Input, ChangeDetectionStrategy} from "@angular/core";
import {Account} from "../../../authentication/types/Account";
import { CommonSandbox } from "../../common.sandbox";

@Component({
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
   
})
export class NavbarComponent {
    isCollapsed$ = this.sandbox.activitiesBarIsCollapsed$;
    isBusy$ = this.sandbox.isBusy$;
    activeModule$ = this.sandbox.activeModule$;

    constructor(public sandbox: CommonSandbox) {

    }

    homeMenuImage = '../../../assets/icons/home_icon@2x.png';
    salesMenuImage = '../../assets/icons/sales_icon@2x.png';
    opportunitiesMenuImage = '../../assets/icons/opportunities_icon@2x.png';
    accountsMenuImage = '../../assets/icons/accounts_icon@2x.png';
    marketsMenuImage = '../../assets/icons/markets_icon@2x.png';
    messagesMenuImage = '../../assets/icons/messages_icon@2x.png';
    contactsMenuImage = '../../assets/icons/contacts_icon@2x.png';
    calendarMenuImage = '../../assets/icons/calendar_icon@2x.png';
    tasksMenuImage = '../../assets/icons/tasks_icon@2x.png';
    notesMenuImage = '../../assets/icons/notes_icon@2x.png';

    @Input() account: Account;
    @Output() logout = new EventEmitter();

    logoutClicked(): void {
        this.logout.emit(null);
    }

    activateRoute(moduleName: String): void {
        this.sandbox.activateModule(moduleName);
    }

    setActivitiesBarMode(mode: string): void {
      this.sandbox.setActivitiesBarMode(mode);
    }

    messagesToggle(): void {
      this.sandbox.activitiesBarMode$.take(1).subscribe((mode: String) => {
        if (mode == '') {
          this.toggle();
          this.setActivitiesBarMode('messages');
          return;
        };
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

    notificationsToggle(): void {
      this.sandbox.activitiesBarMode$.take(1).subscribe((mode: String) => {
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

    toggle(): void {
        this.sandbox.toggleActivitiesBar();
    }

    toggleLeft(): void {
      this.sandbox.toggleMasterBar();
    }
    
}