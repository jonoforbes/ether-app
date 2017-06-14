import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptionsArgs, RequestOptions, Http } from "@angular/http";
import { Appointment } from "../entities/Appointment";
import { ApplicationState } from "../../statemanagement/state/ApplicationState";
import { API_URL } from "../../configuration";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class AppointmentsService {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    private jwtToken: string;

    constructor(private store: Store<ApplicationState>,
                private http: Http) {
        this.store.select((state: ApplicationState) => state.data.authentication.jwtToken)
        .take(2)
        .subscribe((jwtToken: string) => this.jwtToken = jwtToken);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    add(appointment: Appointment): Observable<Appointment> {
        return this.http.post(`${API_URL}/appointments`, appointment, this.authorizedHttpOptions())
            .take(1)
            .map((res: Response) => res.json());
    }

    update(id: string, appointment: Appointment): Observable<Response> {
        return this.http.put(`${API_URL}/appointments/${id}`, appointment, this.authorizedHttpOptions());
    }

    remove(appointment: Appointment): Observable<Response> {
        return this.http.delete(`${API_URL}/appointments/${appointment._id}`, this.authorizedHttpOptions());
    }

    load(): Observable<Array<Appointment>> {
        return this.http.get(`${API_URL}/appointments`, this.authorizedHttpOptions())
            .take(1)
            .map((res: Response) => res.json());
    }

    fetchAppointment(id: string): Observable<Appointment> {
        return this.http.get(`${API_URL}/appointments/${id}`, this.authorizedHttpOptions())
            .take(1)
            .map((res: Response) => res.json());
    }

    setAccount(appointment: Appointment, accountId: string): Observable<Response> {
        let newAppointment: Appointment = Object.assign({}, appointment, {accountId: accountId});
        return this.http.put(`${API_URL}/appointments/${appointment._id}`, newAppointment, this.authorizedHttpOptions());
    }

    setContact(appointment: Appointment, contactId: string): Observable<Response> {
        let newAppointment: Appointment = Object.assign({}, appointment, {contactId: contactId});
        return this.http.put(`${API_URL}/appointments/${appointment._id}`, newAppointment, this.authorizedHttpOptions());
    }

    setSale(appointment: Appointment, saleId: string): Observable<Response> {
        let newAppointment: Appointment = Object.assign({}, appointment, {saleId: saleId});
        return this.http.put(`${API_URL}/appointments/${appointment._id}`, newAppointment, this.authorizedHttpOptions());
    }

    setInvitees(appointment: Appointment, invitees: string[]): Observable<Response> {
        let newAppointment: Appointment = Object.assign({}, appointment, {invitees: invitees});
        return this.http.put(`${API_URL}/appointments/${appointment._id}`, newAppointment, this.authorizedHttpOptions());
    }

    private authorizedHttpOptions(): RequestOptionsArgs {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({headers: headers});
    }
}



