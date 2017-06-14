import { AppointmentsService } from "./services/appointments.service";
import { Injectable } from "@angular/core";
import { Appointment } from "./entities/Appointment";
import { VIEW_MODE } from "./constants";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import * as moment from "moment";
import Moment = moment.Moment;
import { UNDO_ACTION } from "ngrx-undo";
import { AddAppointment, 
    UpdateAppointment, 
    RemoveAppointment, 
    UpdateAppointmentAccount, 
    UpdateAppointmentContact, 
    UpdateAppointmentInvitees, 
    UpdateAppointmentSale } from "../statemanagement/actions/data/appointment";

@Injectable()
export class AppointmentsSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    appointments$ = this.store.select(state => state.data.appointments);
    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);

    VIEW_MODE = VIEW_MODE;

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    viewMode$ = new BehaviorSubject(VIEW_MODE.WEEK);
    // 0--------(+1)----(+1)----(-1)-------------...
    navigation$ = new BehaviorSubject<number>(0);
    searchTerm$ = new BehaviorSubject('');

    private currentDateM$ = this.viewMode$.flatMap((viewMode: string) => {
        let dateM = moment();
        return this.navigation$
            .map((action: number) => {
                switch (viewMode) {
                    case VIEW_MODE.WEEK:
                        return dateM.startOf('week').add(action, "weeks");
                    case VIEW_MODE.DAY:
                        return dateM.startOf('day').add(action, "days");
                }
                return dateM;
            })
    }).publishReplay(1).refCount();

    currentDate$ = this.currentDateM$.map(dateM => dateM.toDate());
    currentYear$ = this.currentDateM$.map(dateM => dateM.year());
    currentMonth$ = this.currentDateM$.map(dateM => dateM.month());
    currentWeek$ = this.currentDateM$.map(dateM => dateM.week());
    filteredAppointments$ = Observable.combineLatest([this.viewMode$, this.currentDateM$, this.appointments$, this.searchTerm$],
        (viewMode: string, currentDateM: Moment, appointments: Array<Appointment>, searchTerm: string) => {
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
                    return appointments

            }
        }).publishReplay(1).refCount();

    constructor(private store: Store<ApplicationState>,
                private appointmentsService: AppointmentsService) {

    }
    onSetViewMode(viewMode: string): void {
        this.viewMode$.next(viewMode);
    }

    onPrevious(): void {
        this.navigation$.next(-1);
    }

    onNext(): void {
        this.navigation$.next(1);
        console.log('currentDate$', );
        console.log('currentYear$', this.currentYear$.toString());
        console.log('currentMonth$', this.currentMonth$.toString());
        console.log('currentWeek$', this.currentWeek$.toString());
    }

    onSearchChanged(e: string): void {
        this.searchTerm$.next(e);
    }

    addAppointment(appointment: Appointment): void {
        this.appointmentsService.add(appointment)
        .take(1)
        .subscribe((appointment: Appointment) => {
            this.store.dispatch(new AddAppointment(appointment));
        }, () => this.handleError());
    }

    updateAppointment(id: string, appointment: Appointment): void {
        let action = new UpdateAppointment(id, appointment);
        this.store.dispatch(action);
        this.appointmentsService.update(id, appointment)
        .take(1)
        .subscribe(() => {   
        }, () => this.handleError(action));
    }

    fetchAppointment(id: string): Observable<Appointment> {
        return this.appointments$
        .take(1)
        .switchMap((appointments: Appointment[]) => {
            return appointments.filter((appointment: Appointment) => {
                return appointment._id == id;
            });
        });
    }

    removeAppointment(appointment: Appointment): void {
        let action = new RemoveAppointment(appointment._id);
        this.store.dispatch(action);
        this.appointmentsService.remove(appointment)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    setAccount(appointment: Appointment, id: string): void {
        let action = new UpdateAppointmentAccount(appointment._id, id);
        this.store.dispatch(action);
        this.appointmentsService.setAccount(appointment, id)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    fetchAppointmentsByAccount(id: string): Observable<Array<Appointment>> {
        return this.appointments$
        .take(2)
        .map((appointments: any) => {
            return appointments.filter((appointment: Appointment) => {
                return appointment.accountId == id;
            });
        });
    }

    setContact(appointment: Appointment, id: string): void {
        let action = new UpdateAppointmentContact(appointment._id, id);
        this.store.dispatch(action);
        this.appointmentsService.setContact(appointment, id)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    fetchAppointmentsByContact(id: string): Observable<Array<Appointment>> {
        return this.appointments$.map((appointments: any) => {
            return appointments.filter((appointment: Appointment) => {
                return appointment.contactId == id;
            });
        });
    }

    setSale(appointment: Appointment, id: string): void {
        let action = new UpdateAppointmentSale(appointment._id, id);
        this.store.dispatch(action);
        this.appointmentsService.setSale(appointment, id)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    fetchAppointmentsBySale(id: string): Observable<Array<Appointment>> {
        return this.appointments$.map((appointments: any) => {
            return appointments.filter((appointment: Appointment) => {
                return appointment.saleId == id;
            });
        });
    }

    setInvitees(appointment: Appointment, invitees: string[]): void {
        let action = new UpdateAppointmentInvitees(appointment._id, invitees);
        this.store.dispatch(action);
        this.appointmentsService.setInvitees(appointment, invitees)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    private filterByTerm(appointment: Appointment, term: string): boolean {
        return appointment.description.toLowerCase().indexOf(term.toLowerCase()) > -1;
    }

    private handleError(action?: Action): void {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({type: UNDO_ACTION, payload: action});
        }
    }
}    