import { ActiveModuleContainerState } from "../../state/ContainersState";
import * as activeModule from "../../actions/containers/active-module";

let initialState: ActiveModuleContainerState = {
    moduleName: 'Home'
};

export function activeModuleReducer (
    state: ActiveModuleContainerState = initialState,
    action: activeModule.Actions): ActiveModuleContainerState {
        switch (action.type) {
            case activeModule.ActionTypes.ACTIVATE_ROUTE:
                return {
                    moduleName: action.payload.moduleName
                };
            default:
                return state;
        }
};
