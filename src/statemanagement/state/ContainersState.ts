export interface ContainersState {
    application: ApplicationContainerState;
    collapsableSidebar: CollapsableSidebarContainerState;
    activitiesBar: ActivitiesBarContainerState;
    masterBar: MasterBarContainerState;
    activeModule: ActiveModuleContainerState;
}

export interface ApplicationContainerState {
    isBusy: boolean;
}

export interface CollapsableSidebarContainerState {
    isCollapsed: boolean;
}

export interface ActivitiesBarContainerState {
    isCollapsed: boolean;
    mode: String;
    commentId: String;
    commentSection: String;
}

export interface MasterBarContainerState {
    isCollapsed: boolean;
}

export interface ActiveModuleContainerState {
    moduleName: String;
}