import { Component, ChangeDetectionStrategy, HostListener, ViewChild } from "@angular/core";
import { MdSidenav } from "@angular/material";
import { ClientAccount } from "../../entities/ClientAccount";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { ClientAccountsSandbox } from "../../client-accounts.sandbox"; 

@Component({
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
})
export class ClientAccountsPageContainer {
    @ViewChild('sidenav') sidenav: MdSidenav;
    isCollapsed$ = this.sb.isCollapsed$;
    navMode: string = "side";


    constructor(private sb: ClientAccountsSandbox) {

    }

    @HostListener('window:resize', ['$event'])
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

}