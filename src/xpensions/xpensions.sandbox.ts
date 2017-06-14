import { XPensionsService } from "./services/xpensions.service";
import { Injectable } from "@angular/core";
import { XPension } from "./entities/XPension";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddXPension, RemoveXPension, UpdateXPension } from "../statemanagement/actions/data/xpension";

@Injectable()
export class XPensionsSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    xPensions$ = this.store.select(state => state.data.xPensions);

    constructor(private store: Store<ApplicationState>, 
                private xPensionsService: XPensionsService) {
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    addXPension(xPension: XPension): void {
        this.xPensionsService.add(xPension)
        .take(1)
        .subscribe((xPension: XPension) => {
            this.store.dispatch(new AddXPension(xPension));
        }, () => this.handleError());
    }

    updateXPension(id: string, xPension: XPension): void {
        let action = new UpdateXPension(id, xPension);
        this.store.dispatch(action);
        this.xPensionsService.update(id, xPension)
        .take(1)
        .subscribe(() => {   
        }, () => this.handleError(action));
    }

    fetchXPension(id: string): Observable<XPension> {
        console.log('existing pension', id);
        // 
        return this.xPensionsService.fetchXPension(id)
        .take(1)
        .share();
    }

    fetchXPensionsByAccount(id: string): Observable<Array<XPension>> {
        return this.xPensions$
        .take(2)
        .map((xPensions: any) => {
            return xPensions.filter((xPension: XPension) => {
                return xPension.accountId == id;
            });
        });
    }

    fetchXPensionsByContact(id: string): Observable<Array<XPension>> {
        return this.xPensions$
        .take(2)
        .map((xPensions: any) => {
            return xPensions.filter((xPension: XPension) => {
                return xPension.contactId == id;
            });
        });
    }

    removeXPension(xPension: XPension): void {
        let action = new RemoveXPension(xPension._id);
        this.store.dispatch(action);
        this.xPensionsService.remove(xPension)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError(action));
    }
    
    private handleError(action?: Action): void {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({type: UNDO_ACTION, payload: action});
        }
    }
}