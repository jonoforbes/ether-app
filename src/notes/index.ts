



import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { CommonLogicModule } from "../common/index";

import { NotesSandbox } from "./notes.sandbox";
import { NotesService } from "./services/notes.service";
import { NotesPageContainer } from "./containers/notes-page/notes-page.container";
import { NotesMasterContainer } from "./containers/notes-master/notes-master.container";
import { NotesDetailContainer } from "./containers/notes-detail/notes-detail.container";
import { AddNoteContainer } from "./containers/add-note/add-note.container";
import { NotesEditorGroupContainer } from "./containers/notes-editor-group/notes-editor-group.container";

import { NotesDetailHeaderComponent } from "./components/detail-header/detail-header.component";
import { NotesDetailEditorComponent } from "./components/detail-editor/detail-editor.component";
import { NotesMasterListComponent } from "./components/master-list/master-list.component";

import { MaterialModule} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import "froala-editor/js/froala_editor.pkgd.min.js";


@NgModule({
    imports: [ 
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        HttpModule,
        CommonLogicModule,
        MaterialModule,
        FlexLayoutModule,
        FroalaEditorModule.forRoot(), 
        FroalaViewModule.forRoot()
    ],
    declarations: [ 
        NotesPageContainer, 
        NotesMasterContainer, 
        NotesDetailContainer,
        AddNoteContainer,
        NotesEditorGroupContainer,

        NotesDetailHeaderComponent,
        NotesDetailEditorComponent,
        NotesMasterListComponent

    ],
    exports: [ 
        NotesPageContainer, 
        NotesMasterContainer, 
        NotesDetailContainer,
        AddNoteContainer,
        NotesEditorGroupContainer,

        DetailHeaderComponent,
        DetailEditorComponent,
        MasterListComponent
    ],
    providers: [ 
        NotesService, 
        NotesSandbox
    ]
})
export class NotesModule {

}
