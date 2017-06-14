import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialModule} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";

import { CommonLogicModule } from "../common/index";

import { AppointmentsSandbox } from "./appointments.sandbox";
import { AppointmentsService } from "./services/appointments.service";

import { DayViewComponent } from './components/day-view/day-view.component';
import { WeekViewComponent } from './components/week-view/week-view.component';
import { MonthViewComponent } from './components/month-view/month-view.component';
import { DayDetailComponent } from './components/day-detail/day-detail.component';
import { TopbarComponent } from './components/topbar/topbar.component';

import { CalendarPageContainer } from "./containers/calendar-page/calendar-page.container";
import { CalendarMasterContainer } from "./containers/calendar-master/calendar-master.container";
import { CalendarDetailContainer } from "./containers/calendar-detail/calendar-detail.container";



@NgModule({
    imports:      [ 
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        HttpModule,
        CommonLogicModule,
        MaterialModule,
        FlexLayoutModule
     ],
    declarations: [
        CalendarDetailContainer,
        CalendarMasterContainer,
        CalendarPageContainer,
        DayViewComponent,
        WeekViewComponent,
        MonthViewComponent,
        DayDetailComponent,
        TopbarComponent
    ],
    exports:    [
        CalendarDetailContainer,
        CalendarMasterContainer,
        CalendarPageContainer
    ],
    providers: [
        AppointmentsSandbox,
        AppointmentsService
    ]
})
export class AppointmentsModule {  }