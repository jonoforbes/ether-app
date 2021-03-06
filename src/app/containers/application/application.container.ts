import {Title} from "@angular/platform-browser";
import {Component, OnInit, OnDestroy, ChangeDetectionStrategy, HostListener, ViewChild } from "@angular/core";
import {AppSandbox} from "../../app.sandbox";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {AllActivitiesContainer} from "../../../activities/containers/all-activities/all-activities.container";

@Component({
    selector: "application",
    providers: [Title],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <navbar [account]="account$|async" (logout)="logout()" *ngIf="isAuthenticated$|async"></navbar>
        <md-sidenav-container (backdropClick)="onBackdropClick()" class="app-container">
  
  <div>

    <router-outlet></router-outlet>

  </div>

  <md-sidenav #rightsidenav mode="{{navMode}}" align="end" [opened]="isCollapsed$|async" class="right-sidenav">

    <h3 *ngIf="(activitiesBarMode$ | async) == 'messages'" style="font-size: 40px; color: #838383">messages</h3>

    <comments-bar *ngIf="(activitiesBarMode$ | async) == 'comments'"></comments-bar>  
    <all-activities *ngIf="(activitiesBarMode$ | async) == 'notifications'"></all-activities>  



  </md-sidenav>

</md-sidenav-container>

  `
})
export class ApplicationContainer implements OnInit, OnDestroy {
    @ViewChild('rightsidenav')  rightsidenav: any;
    navMode: string = "over";

    @HostListener('window:beforeunload', ['$event'])
    beforeUnloadHandler(event) {
        this.logout();
    }

    @HostListener('window:resize', ['$event'])
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

    isCollapsed$ = this.sb.isCollapsed$;
    activitiesBarMode$ = this.sb.activitiesBarMode$;
    account$ = this.sb.account$;
    isBusy$ = this.sb.isBusy$;
    isAuthenticated$ = this.sb.isAuthenticated$;

    private subscriptions: Array<Subscription> = [];

    constructor(private title: Title, 
                public sb: AppSandbox, 
                private router: Router) {
        this.title.setTitle("Ether CRM");
    }

    ngOnInit(): void {
        // if (window.innerWidth < 1450) {
        //     this.navMode = 'over';
        //     this.rightsidenav.close();
        // }
        // if (window.innerWidth > 1450) {
        //     this.navMode = 'side';
        //     console.log('1450');
        // }
        console.log('width', window.innerWidth);
        this.sb.checkInitialAuthentication();
        this.subscriptions.push(this.sb.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
            if (isAuthenticated) {
                this.sb.loadData();
                this.sb.connectRealTime();
                if (window.innerWidth > 1450) {
                    this.navMode = 'side';
                    this.rightsidenav.open();
                    this.sb.setActivitiesBarMode('notifications');
                    console.log('width', window.innerWidth);
                }
            }
        }));
    }

    logout(): void {
        this.router.navigate(["/stock"]);
        this.sb.logout();
        this.router.navigate(["/authentication"]);
        this.rightsidenav.close();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    onBackdropClick(): void {
        this.sb.toggleActivitiesBar();
    }

    setActivitiesBarMode(mode: string): void {
      this.sb.setActivitiesBarMode(mode);
    }


    // ngDoCheck(rightsidenav: any): void {
    //     if (!this.isCollapsed$) {
    //         rightsidenav.open();
    //         this.sb.toggleSidebar();
    //     }   else {
    //         rightsidenav.close();
    //         this.sb.toggleSidebar();
    //     }
    // }

}