var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Headers, RequestOptions, Http } from "@angular/http";
import { API_URL } from "../../configuration";
import { Subject } from "rxjs/Subject";
export let AppointmentsService = class AppointmentsService {
    constructor(store, http) {
        this.store = store;
        this.http = http;
        this.ngUnsubscribe = new Subject();
        this.store.select((state) => state.data.authentication.jwtToken)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((jwtToken) => this.jwtToken = jwtToken);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    add(appointment) {
        return this.http.post(`${API_URL}/appointments`, appointment, this.authorizedHttpOptions())
            .map((res) => res.json());
    }
    update(id, appointment) {
        return this.http.put(`${API_URL}/appointments/${id}`, appointment, this.authorizedHttpOptions());
    }
    remove(appointment) {
        return this.http.delete(`${API_URL}/appointments/${appointment._id}`, this.authorizedHttpOptions());
    }
    load() {
        return this.http.get(`${API_URL}/appointments`, this.authorizedHttpOptions())
            .map((res) => res.json());
    }
    fetchAppointment(id) {
        return this.http.get(`${API_URL}/appointments/${id}`, this.authorizedHttpOptions())
            .map((res) => res.json());
    }
    setAccount(appointment, accountId) {
        let newAppointment = Object.assign({}, appointment, { accountId: accountId });
        return this.http.put(`${API_URL}/appointments/${appointment._id}`, newAppointment, this.authorizedHttpOptions());
    }
    setContact(appointment, contactId) {
        let newAppointment = Object.assign({}, appointment, { contactId: contactId });
        return this.http.put(`${API_URL}/appointments/${appointment._id}`, newAppointment, this.authorizedHttpOptions());
    }
    setSale(appointment, saleId) {
        let newAppointment = Object.assign({}, appointment, { saleId: saleId });
        return this.http.put(`${API_URL}/appointments/${appointment._id}`, newAppointment, this.authorizedHttpOptions());
    }
    setInvitees(appointment, invitees) {
        let newAppointment = Object.assign({}, appointment, { invitees: invitees });
        return this.http.put(`${API_URL}/appointments/${appointment._id}`, newAppointment, this.authorizedHttpOptions());
    }
    authorizedHttpOptions() {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({ headers: headers });
    }
};
AppointmentsService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, Http])
], AppointmentsService);
//# sourceMappingURL=appointments.service.js.map