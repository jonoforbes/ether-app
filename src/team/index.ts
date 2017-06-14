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


import { TeamMasterListComponent } from "./components/master-list/master-list.component";

import { MaterialModule} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";


@NgModule({
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
        TeamMasterListComponent,
        AssignmentButtonLabelComponent



    ],
    exports: [ 
        TeamPageContainer,
        TeamMasterContainer,
        TeamDetailContainer,
        AssignmentSelectorComponent,
        TeamMasterListComponent,
        AssignmentButtonLabelComponent

    ],
    providers: [ 
        UserDataService, 
        TeamSandbox
    ]
})
export class TeamModule {

}
