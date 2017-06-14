import {Component, OnDestroy} from "@angular/core";
import {Account} from "../../types/Account";
import {Credentials} from "../../types/Credentials";
import {AuthenticationSandbox} from "../../authentication.sandbox";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
@Component({
    selector: "register-hidden",
    template: `
    <div class="container">
        <panel style="background-color: #444" [header]="'You are not authenticated!'">          
            <register (authenticate)="register($event)" [isBusy]="isBusy$|async"></register>
        </panel>
    </div>
      `
})
export class RegisterContainer implements OnDestroy {
    curTab: number = 0;

    subscriptions: Array<Subscription> = [];
    isBusy$ = this.sb.isBusy$;

    constructor(private sb: AuthenticationSandbox, private router: Router) {
    }

    enableTab(tabIndex: number): void {
        this.curTab = tabIndex;
    }

    login(credentials: Credentials): void {
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
