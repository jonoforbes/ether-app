var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AppointmentsService } from "./services/appointments.service";
import { Injectable } from "@angular/core";
import { VIEW_MODE } from "./constants";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import * as moment from "moment";
import { UNDO_ACTION } from "ngrx-undo";
import { AddAppointment, UpdateAppointment, RemoveAppointment, UpdateAppointmentAccount, UpdateAppointmentContact, UpdateAppointmentInvitees, UpdateAppointmentSale } from "../statemanagement/actions/data/appointment";
export let AppointmentsSandbox = class AppointmentsSandbox {
    constructor(store, appointmentsService) {
        this.store = store;
        this.appointmentsService = appointmentsService;
        this.ngUnsubscribe = new Subject();
        this.appointments$ = this.store.select(state => state.data.appointments);
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
        this.isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
        this.VIEW_MODE = VIEW_MODE;
        this.viewMode$ = new BehaviorSubject(VIEW_MODE.WEEK);
        this.navigation$ = new BehaviorSubject(0);
        this.searchTerm$ = new BehaviorSubject('');
        this.currentDateM$ = this.viewMode$.flatMap((viewMode) => {
            let dateM = moment();
            return this.navigation$
                .map((action) => {
                switch (viewMode) {
                    case VIEW_MODE.WEEK:
                        return dateM.startOf('week').add(action, "weeks");
                    case VIEW_MODE.DAY:
                        return dateM.startOf('day').add(action, "days");
                }
                return dateM;
            });
        }).publishReplay(1).refCount();
        this.currentDate$ = this.currentDateM$.map(dateM => dateM.toDate());
        this.currentYear$ = this.currentDateM$.map(dateM => dateM.year());
        this.currentMonth$ = this.currentDateM$.map(dateM => dateM.month());
        this.currentWeek$ = this.currentDateM$.map(dateM => dateM.week());
        this.filteredAppointments$ = Observable.combineLatest([this.viewMode$, this.currentDateM$, this.appointments$, this.searchTerm$], (viewMode, currentDateM, appointments, searchTerm) => {
            switch (viewMode) {
                case VIEW_MODE.WEEK:
                    return appointments
                        .filter(item => moment(item.date).format('ww/YYYY') === currentDateM.format('ww/YYYY'))
                        .filter(item => this.filterByTerm(item, searchTerm));
                case VIEW_MODE.DAY:
                    return appointments
                        .filter(item => moment(item.date).format('DD/MM/YYYY') === currentDateM.format('DD/MM/YYYY'))
                        .filter(item => this.filterByTerm(item, searchTerm));
                default:
                    return appointments;
            }
        }).publishReplay(1).refCount();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    onSetViewMode(viewMode) {
        this.viewMode$.next(viewMode);
    }
    onPrevious() {
        this.navigation$.next(-1);
    }
    onNext() {
        this.navigation$.next(1);
        console.log('currentDate$');
        console.log('currentYear$', this.currentYear$.toString());
        console.log('currentMonth$', this.currentMonth$.toString());
        console.log('currentWeek$', this.currentWeek$.toString());
    }
    onSearchChanged(e) {
        this.searchTerm$.next(e);
    }
    addAppointment(appointment) {
        this.appointmentsService.add(appointment)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((appointment) => {
            this.store.dispatch(new AddAppointment(appointment));
        }, () => this.handleError());
    }
    updateAppointment(id, appointment) {
        let action = new UpdateAppointment(id, appointment);
        this.store.dispatch(action);
        this.appointmentsService.update(id, appointment)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchAppointment(id) {
        return this.appointments$.switchMap((appointments) => {
            return appointments.filter((appointment) => {
                return appointment._id == id;
            });
        });
    }
    removeAppointment(appointment) {
        let action = new RemoveAppointment(appointment._id);
        this.store.dispatch(action);
        this.appointmentsService.remove(appointment)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    setAccount(appointment, id) {
        let action = new UpdateAppointmentAccount(appointment._id, id);
        this.store.dispatch(action);
        this.appointmentsService.setAccount(appointment, id)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchAppointmentsByAccount(id) {
        return this.appointments$.map((appointments) => {
            return appointments.filter((appointment) => {
                return appointment.accountId == id;
            });
        });
    }
    setContact(appointment, id) {
        let action = new UpdateAppointmentContact(appointment._id, id);
        this.store.dispatch(action);
        this.appointmentsService.setContact(appointment, id)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchAppointmentsByContact(id) {
        return this.appointments$.map((appointments) => {
            return appointments.filter((appointment) => {
                return appointment.contactId == id;
            });
        });
    }
    setSale(appointment, id) {
        let action = new UpdateAppointmentSale(appointment._id, id);
        this.store.dispatch(action);
        this.appointmentsService.setSale(appointment, id)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchAppointmentsBySale(id) {
        return this.appointments$.map((appointments) => {
            return appointments.filter((appointment) => {
                return appointment.saleId == id;
            });
        });
    }
    setInvitees(appointment, invitees) {
        let action = new UpdateAppointmentInvitees(appointment._id, invitees);
        this.store.dispatch(action);
        this.appointmentsService.setInvitees(appointment, invitees)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    filterByTerm(appointment, term) {
        return appointment.description.toLowerCase().indexOf(term.toLowerCase()) > -1;
    }
    handleError(action) {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({ type: UNDO_ACTION, payload: action });
        }
    }
};
AppointmentsSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, AppointmentsService])
], AppointmentsSandbox);
//# sourceMappingURL=appointments.sandbox.js.map