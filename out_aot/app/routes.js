import { RouterModule } from "@angular/router";
import { AuthenticatedGuard } from "../common/authenticated.guard";
import { AuthenticationContainer } from "../authentication/containers/authentication/authentication.container";
import { RegisterContainer } from "../authentication/containers/register/register.container";
import { ContactsPageContainer } from "../contacts/containers/contacts-page/contacts-page.container";
import { ContactsDetailContainer } from "../contacts/containers/contacts-detail/contacts-detail.container";
import { ContactsMasterContainer } from "../contacts/containers/contacts-master/contacts-master.container";
import { AddContactContainer } from "../contacts/containers/add-contact/add-contact.container";
import { ClientAccountsPageContainer } from "../client-accounts/containers/client-accounts-page/client-accounts-page.container";
import { ClientAccountsDetailContainer } from "../client-accounts/containers/client-accounts-detail/client-accounts-detail.container";
import { ClientAccountsMasterContainer } from "../client-accounts/containers/client-accounts-master/client-accounts-master.container";
import { ClientAccountsOverviewContainer } from "../client-accounts/containers/client-accounts-overview/client-accounts-overview.container";
import { NotesPageContainer } from "../notes/containers/notes-page/notes-page.container";
import { NotesDetailContainer } from "../notes/containers/notes-detail/notes-detail.container";
import { NotesMasterContainer } from "../notes/containers/notes-master/notes-master.container";
import { AddNoteContainer } from "../notes/containers/add-note/add-note.container";
import { MessagesPageContainer } from "../messages/containers/messages-page/messages-page.container";
import { MessagesDetailContainer } from "../messages/containers/messages-detail/messages-detail.container";
import { MessagesMasterContainer } from "../messages/containers/messages-master/messages-master.container";
import { TeamPageContainer } from "../team/containers/team-page/team-page.container";
import { TeamMasterContainer } from "../team/containers/team-master/team-master.container";
import { ClientDocumentsPageContainer } from "../client-documents/containers/client-documents-page/client-documents-page.container";
import { ClientDocumentsMasterContainer } from "../client-documents/containers/client-documents-master/client-documents-master.container";
import { ClientDocumentsDetailContainer } from "../client-documents/containers/client-documents-detail/client-documents-detail.container";
import { TasksPageContainer } from "../tasks/containers/tasks-page/tasks-page.container";
import { TasksTodayContainer } from "../tasks/containers/tasks-today/tasks-today.container";
import { TasksMasterContainer } from "../tasks/containers/tasks-master/tasks-master.container";
import { TasksWeekContainer } from "../tasks/containers/tasks-week/tasks-week.container";
import { TasksNextWeekContainer } from "../tasks/containers/tasks-next-week/tasks-next-week.container";
import { TasksMonthContainer } from "../tasks/containers/tasks-month/tasks-month.container";
import { TasksAllContainer } from "../tasks/containers/tasks-all/tasks-all.container";
import { DefaultPageComponent } from "../common/components/default-page/default-page.component";
export const routes = [
    { path: "", redirectTo: "/accounts", pathMatch: "full", canActivate: [AuthenticatedGuard] },
    { path: "authentication", component: AuthenticationContainer },
    { path: "authenticationregisterhiddencomponenttemp", component: RegisterContainer },
    { path: "contacts", component: ContactsPageContainer, canActivate: [AuthenticatedGuard], children: [
            { path: "list", component: ContactsMasterContainer, outlet: 'm' },
            { path: "add", component: AddContactContainer, outlet: 'd' },
            { path: ":id", component: ContactsDetailContainer, outlet: 'd' },
        ] },
    { path: "accounts", component: ClientAccountsPageContainer, canActivate: [AuthenticatedGuard], children: [
            { path: "list", component: ClientAccountsMasterContainer, outlet: 'm' },
            { path: "overview", component: ClientAccountsOverviewContainer, outlet: 'd' },
            { path: ":id", component: ClientAccountsDetailContainer, outlet: 'd' },
        ] },
    { path: "notes", component: NotesPageContainer, canActivate: [AuthenticatedGuard], children: [
            { path: "list", component: NotesMasterContainer, outlet: 'm' },
            { path: "add", component: AddNoteContainer, outlet: 'd' },
            { path: ":id", component: NotesDetailContainer, outlet: 'd' }
        ] },
    { path: "messages", component: MessagesPageContainer, canActivate: [AuthenticatedGuard], children: [
            { path: "list", component: MessagesMasterContainer, outlet: 'm' },
            { path: "add", component: MessagesDetailContainer, outlet: 'd' },
            { path: ":id", component: MessagesDetailContainer, outlet: 'd' }
        ] },
    { path: "team", component: TeamPageContainer, canActivate: [AuthenticatedGuard], children: [
            { path: "list", component: TeamMasterContainer, outlet: 'm' },
            { path: "add", component: DefaultPageComponent, outlet: 'd' },
            { path: ":id", component: DefaultPageComponent, outlet: 'd' }
        ] },
    { path: "documents", component: ClientDocumentsPageContainer, canActivate: [AuthenticatedGuard], children: [
            { path: "list", component: ClientDocumentsMasterContainer, outlet: 'm' },
            { path: "add", component: ClientDocumentsDetailContainer, outlet: 'd' },
            { path: ":id", component: ClientDocumentsDetailContainer, outlet: 'd' }
        ] },
    { path: "tasks", component: TasksPageContainer, canActivate: [AuthenticatedGuard], children: [
            { path: "list", component: TasksMasterContainer, outlet: 'm' },
            { path: "today", component: TasksTodayContainer, outlet: 'd' },
            { path: "week", component: TasksWeekContainer, outlet: 'd' },
            { path: "nextweek", component: TasksNextWeekContainer, outlet: 'd' },
            { path: "month", component: TasksMonthContainer, outlet: 'd' },
            { path: "assigned", component: TasksTodayContainer, outlet: 'd' },
            { path: "all", component: TasksAllContainer, outlet: 'd' }
        ] }
];
export const routing = RouterModule.forRoot(routes);
//# sourceMappingURL=routes.js.map