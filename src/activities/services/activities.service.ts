import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { Activity } from "../entities/Activity";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ActivitiesService {
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

    load(): Observable<Array<Activity>> {
        return this.http.get(`${API_URL}/activities`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    remove(activity: Activity): Observable<Response> {
        return this.http.delete(`${API_URL}/activities/${activity._id}`, this.authorizedHttpOptions());
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}