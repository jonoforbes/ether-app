import { XAssetsService } from "./services/xassets.service";
import { Injectable } from "@angular/core";
import { XAsset } from "./entities/XAsset";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddXAsset, RemoveXAsset, UpdateXAsset } from "../statemanagement/actions/data/xasset";

@Injectable()
export class XAssetsSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    xAssets$ = this.store.select(state => state.data.xAssets);

    constructor(private store: Store<ApplicationState>, 
                private xAssetsService: XAssetsService) {
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    addXAsset(xAsset: XAsset): void {
        this.xAssetsService.add(xAsset)
        .take(1)
        .subscribe((xAsset: XAsset) => {
            this.store.dispatch(new AddXAsset(xAsset));
        }, () => this.handleError());
    }

    updateXAsset(id: string, xAsset: XAsset): void {
        let action = new UpdateXAsset(id, xAsset);
        this.store.dispatch(action);
        this.xAssetsService.update(id, xAsset)
        .take(1)
        .subscribe(() => {   
        }, () => this.handleError(action));
    }

    fetchXAsset(id: string): Observable<XAsset> {
        console.log('existing asset', id);
        // 
        return this.xAssetsService.fetchXAsset(id)
        .take(1)
        .share();
    }

    fetchXAssetsByAccount(id: string): Observable<Array<XAsset>> {
        return this.xAssets$
        .take(2)
        .map((xAssets: any) => {
            return xAssets.filter((xAsset: XAsset) => {
                return xAsset.accountId == id;
            });
        });
    }

    fetchXAssetsByContact(id: string): Observable<Array<XAsset>> {
        return this.xAssets$
        .take(2)
        .map((xAssets: any) => {
            return xAssets.filter((xAsset: XAsset) => {
                return xAsset.contactId == id;
            });
        });
    }

    removeXAsset(xAsset: XAsset): void {
        let action = new RemoveXAsset(xAsset._id);
        this.store.dispatch(action);
        this.xAssetsService.remove(xAsset)
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