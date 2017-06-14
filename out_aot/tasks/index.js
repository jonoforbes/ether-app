var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
import { TeamModule } from "../team/index";
import { TasksSandbox } from "./tasks.sandbox";
import { TasksService } from "./services/tasks.service";
import { TasksPageContainer } from "./containers/tasks-page/tasks-page.container";
import { TasksTodayContainer } from "./containers/tasks-today/tasks-today.container";
import { TasksMasterContainer } from "./containers/tasks-master/tasks-master.container";
import { TasksFormGroupContainer } from "./containers/tasks-form-group/tasks-form-group.container";
import { TasksListComponent } from "./components/tasks-list/tasks-list.component";
export let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    NgModule({
        imports: [
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
            TeamModule,
        ],
        declarations: [
            TasksTodayContainer,
            TasksMasterContainer,
            TasksPageContainer,
            TasksFormGroupContainer,
            TasksListComponent
        ],
        exports: [
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
    }), 
    __metadata('design:paramtypes', [])
], TasksModule);
//# sourceMappingURL=index.js.map