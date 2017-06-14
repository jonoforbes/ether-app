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
import { CommonLogicModule } from "../common/index";
import { TeamSandbox } from "./team.sandbox";
import { UserDataService } from "./services/user-data.service";
import { TeamPageContainer } from "./containers/team-page/team-page.container";
import { TeamMasterContainer } from "./containers/team-master/team-master.container";
import { TeamDetailContainer } from "./containers/team-detail/team-detail.container";
import { AssignmentSelectorComponent } from "./components/assignment-selector/assignment-selector.component";
import { AssignmentButtonLabelComponent } from "./components/assignment-button-label/assignment-button-label.component";
import { MasterListComponent } from "./components/master-list/master-list.component";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";
export let TeamModule = class TeamModule {
};
TeamModule = __decorate([
    NgModule({
        imports: [
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
            TeamPageContainer,
            TeamMasterContainer,
            TeamDetailContainer,
            AssignmentSelectorComponent,
            MasterListComponent,
            AssignmentButtonLabelComponent
        ],
        exports: [
            TeamPageContainer,
            TeamMasterContainer,
            TeamDetailContainer,
            AssignmentSelectorComponent,
            MasterListComponent,
            AssignmentButtonLabelComponent
        ],
        providers: [
            UserDataService,
            TeamSandbox
        ]
    }), 
    __metadata('design:paramtypes', [])
], TeamModule);
//# sourceMappingURL=index.js.map