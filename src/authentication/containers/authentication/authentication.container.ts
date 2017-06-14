import {Component, OnDestroy} from "@angular/core";
import {Account} from "../../types/Account";
import {Credentials} from "../../types/Credentials";
import {AuthenticationSandbox} from "../../authentication.sandbox";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
@Component({
    selector: "authentication",
    template: `
    <div class="container authenticationContainer" style="width: 100vw; height: 100vh">
        <img [src]='logoImage'>
        <div class="login-panel">
            <login *ngIf="curTab === 0" (authenticate)="login($event)" [isBusy]="isBusy$|async"></login>
        </div>
        <md-progress-bar
            fxFlexAlign="center"
          [mode]="mode"
          [value]="value">
      </md-progress-bar>
        <div>
            <p style="text-align: center; bottom: 10px; position: absolute">&copy; 2017 Ether CRM | Terms and Conditions | Having technical issues? Contact Ether Support | Forgot your password? Contact Administrator</p>
        </div>
        
    </div>
      `
})
export class AuthenticationContainer implements OnDestroy {
    curTab: number = 0;
    mode: string = "determinate";
    value="0";

    subscriptions: Array<Subscription> = [];
    isBusy$ = this.sb.isBusy$;

    logoImage = '../../assets/icons/logo2@2x.png';

    constructor(private sb: AuthenticationSandbox, private router: Router) {
    }

    enableTab(tabIndex: number): void {
        this.curTab = tabIndex;
    }

    login(credentials: Credentials): void {
        this.mode = "indeterminate";
        this.subscriptions.push(this.sb.login(credentials).subscribe(() => {
            this.router.navigate(["/"]);
        }));
    }

    register(account: Account): void {
        this.subscriptions.push(this.sb.register(account).subscribe(() => {
            this.router.navigate(["/"]);
        }));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}

          // 
            // <a href="javascript:void(0)" (click)="enableTab(0)" *ngIf="curTab===1">I have an account already</a>
