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
import { NotesSandbox } from "./notes.sandbox";
import { NotesService } from "./services/notes.service";
import { NotesPageContainer } from "./containers/notes-page/notes-page.container";
import { NotesMasterContainer } from "./containers/notes-master/notes-master.container";
import { NotesDetailContainer } from "./containers/notes-detail/notes-detail.container";
import { AddNoteContainer } from "./containers/add-note/add-note.container";
import { NotesEditorGroupContainer } from "./containers/notes-editor-group/notes-editor-group.container";
import { DetailHeaderComponent } from "./components/detail-header/detail-header.component";
import { DetailEditorComponent } from "./components/detail-editor/detail-editor.component";
import { MasterListComponent } from "./components/master-list/master-list.component";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import "froala-editor/js/froala_editor.pkgd.min.js";
export let NotesModule = class NotesModule {
};
NotesModule = __decorate([
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
            FroalaEditorModule.forRoot(),
            FroalaViewModule.forRoot()
        ],
        declarations: [
            NotesPageContainer,
            NotesMasterContainer,
            NotesDetailContainer,
            AddNoteContainer,
            NotesEditorGroupContainer,
            DetailHeaderComponent,
            DetailEditorComponent,
            MasterListComponent
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
    }), 
    __metadata('design:paramtypes', [])
], NotesModule);
//# sourceMappingURL=index.js.map