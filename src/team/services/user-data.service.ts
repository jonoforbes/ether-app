import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { UserData } from "../entities/UserData";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class UserDataService {
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

    add(userData: UserData): Observable<UserData> {
        return this.http.post(`${API_URL}/userdata`, userData, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    update(id: string, userData: UserData): Observable<Response> {
        return this.http.put(`${API_URL}/userdata/${id}`, userData, this.authorizedHttpOptions());
    }

    remove(userData: UserData): Observable<Response> {
        return this.http.delete(`${API_URL}/userdata/${userData._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<UserData>> {
        return this.http.get(`${API_URL}/userdata`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    fetchUserData(id: string): Observable<UserData> {
        
        return this.http.get(`${API_URL}/userdata/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
            
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}