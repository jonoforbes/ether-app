import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { XAsset } from "../entities/XAsset";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import {Subject } from "rxjs/Subject";

@Injectable()
export class XAssetsService {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    private jwtToken: string;

    constructor(private store: Store<ApplicationState>,
                private http: Http) {
        this.store.select((state: ApplicationState) => state.data.authentication.jwtToken)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((jwtToken: string) => this.jwtToken = jwtToken);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    add(xAsset: XAsset): Observable<XAsset> {
        return this.http.post(`${API_URL}/xassets`, xAsset, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    update(id: string, xAsset: XAsset): Observable<Response> {
        return this.http.put(`${API_URL}/xassets/${id}`, xAsset, this.authorizedHttpOptions());
    }

    remove(xAsset: XAsset): Observable<Response> {
        return this.http.delete(`${API_URL}/xassets/${xAsset._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<XAsset>> {
        return this.http.get(`${API_URL}/xassets`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    fetchXAsset(id: string): Observable<XAsset> {
        return this.http.get(`${API_URL}/xassets/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}