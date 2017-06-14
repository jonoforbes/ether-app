import { XProtectionsService } from "./services/xprotections.service";
import { Injectable } from "@angular/core";
import { XProtection } from "./entities/XProtection";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddXProtection, RemoveXProtection, UpdateXProtection } from "../statemanagement/actions/data/xprotection";

@Injectable()
export class XProtectionsSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    xProtections$ = this.store.select(state => state.data.xProtections);

    constructor(private store: Store<ApplicationState>, 
                private xProtectionsService: XProtectionsService) {
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    addXProtection(xProtection: XProtection): void {
        this.xProtectionsService.add(xProtection)
        .take(1)
        .subscribe((xProtection: XProtection) => {
            this.store.dispatch(new AddXProtection(xProtection));
        }, () => this.handleError());
    }

    updateXProtection(id: string, xProtection: XProtection): void {
        let action = new UpdateXProtection(id, xProtection);
        this.store.dispatch(action);
        this.xProtectionsService.update(id, xProtection)
        .take(1)
        .subscribe(() => {   
        }, () => this.handleError(action));
    }

    fetchXProtection(id: string): Observable<XProtection> {
        console.log('existing protection', id);
        // 
        return this.xProtectionsService.fetchXProtection(id)
        .take(1)
        .share();
    }

    fetchXProtectionsByAccount(id: string): Observable<Array<XProtection>> {
        return this.xProtections$
        .take(2)
        .map((xProtections: any) => {
            return xProtections.filter((xProtection: XProtection) => {
                return xProtection.accountId == id;
            });
        });
    }

    fetchXProtectionsByContact(id: string): Observable<Array<XProtection>> {
        return this.xProtections$
        .take(2)
        .map((xProtections: any) => {
            return xProtections.filter((xProtection: XProtection) => {
                return xProtection.contactId == id;
            });
        });
    }

    removeXProtection(xProtection: XProtection): void {
        let action = new RemoveXProtection(xProtection._id);
        this.store.dispatch(action);
        this.xProtectionsService.remove(xProtection)
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