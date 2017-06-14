import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";
import { PopoverModule } from "ngx-popover";
import { DpDatePickerModule } from 'ng2-date-picker';

import { CommonLogicModule } from "../common/index";


import { TasksSandbox } from "./tasks.sandbox";
import { TasksService } from "./services/tasks.service";

import { TasksPageContainer } from "./containers/tasks-page/tasks-page.container";
import { TasksTodayContainer } from "./containers/tasks-today/tasks-today.container";
import { TasksMasterContainer } from "./containers/tasks-master/tasks-master.container";
import { TasksFormGroupContainer } from "./containers/tasks-form-group/tasks-form-group.container";
import { TasksListComponent } from "./components/tasks-list/tasks-list.component";

@NgModule({
    imports:      [ 
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        HttpModule,
        CommonLogicModule,
        MaterialModule,
        FlexLayoutModule,
        PopoverModule,
        DpDatePickerModule,

     ],
    declarations: [
        TasksTodayContainer,
        TasksMasterContainer,
        TasksPageContainer,
        TasksFormGroupContainer,
        TasksListComponent
    ],
    exports:    [
        TasksTodayContainer,
        TasksMasterContainer,
        TasksPageContainer,
        TasksFormGroupContainer,
        TasksListComponent
    ],
    providers: [
        TasksSandbox,
        TasksService
    ]
})
export class TasksModule {  }