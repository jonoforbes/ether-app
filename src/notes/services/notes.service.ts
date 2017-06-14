import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { Note } from "../entities/Note";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class NotesService {
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

    add(note: Note): Observable<Note> {
        return this.http.post(`${API_URL}/notes`, note, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    update(id: string, note: Note): Observable<Response> {
        return this.http.put(`${API_URL}/notes/${id}`, note, this.authorizedHttpOptions());
    }

    remove(note: Note): Observable<Response> {
        return this.http.delete(`${API_URL}/notes/${note._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<Note>> {
        return this.http.get(`${API_URL}/notes`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    fetchNote(id: string): Observable<Note> {
        console.log('breakpoint');
        return this.http.get(`${API_URL}/notes/${id}`, this.authorizedHttpOptions())
            .map((res: Response) => res.json());
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}