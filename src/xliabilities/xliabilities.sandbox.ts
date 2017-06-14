import { XLiabilitiesService } from "./services/xliabilities.service";
import { Injectable } from "@angular/core";
import { XLiability } from "./entities/XLiability";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddXLiability, RemoveXLiability, UpdateXLiability } from "../statemanagement/actions/data/xliability";

@Injectable()
export class XLiabilitiesSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    xLiabilities$ = this.store.select(state => state.data.xLiabilities);

    constructor(private store: Store<ApplicationState>, 
                private xLiabilitiesService: XLiabilitiesService) {
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    addXLiability(xLiability: XLiability): void {
        this.xLiabilitiesService.add(xLiability)
        .take(1)
        .subscribe((xLiability: XLiability) => {
            this.store.dispatch(new AddXLiability(xLiability));
        }, () => this.handleError());
    }

    updateXLiability(id: string, xLiability: XLiability): void {
        let action = new UpdateXLiability(id, xLiability);
        this.store.dispatch(action);
        this.xLiabilitiesService.update(id, xLiability)
        .take(1)
        .subscribe(() => {   
        }, () => this.handleError(action));
    }

    fetchXLiability(id: string): Observable<XLiability> {
        console.log('existing liability', id);
        // 
        return this.xLiabilitiesService.fetchXLiability(id)
        .take(1)
        .share();
    }

    fetchXLiabilitiesByAccount(id: string): Observable<Array<XLiability>> {
        return this.xLiabilities$
        .take(2)
        .map((xLiabilities: any) => {
            return xLiabilities.filter((xLiability: XLiability) => {
                return xLiability.accountId == id;
            });
        });
    }

    fetchXLiabilitiesByContact(id: string): Observable<Array<XLiability>> {
        return this.xLiabilities$
        .take(2)
        .map((xLiabilities: any) => {
            return xLiabilities.filter((xLiability: XLiability) => {
                return xLiability.contactId == id;
            });
        });
    }

    removeXLiability(xLiability: XLiability): void {
        let action = new RemoveXLiability(xLiability._id);
        this.store.dispatch(action);
        this.xLiabilitiesService.remove(xLiability)
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