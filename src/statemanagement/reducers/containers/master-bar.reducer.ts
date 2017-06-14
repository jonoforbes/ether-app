import { MasterBarContainerState } from "../../state/ContainersState";
import * as masterBar from "../../actions/containers/master-bar";

let initialState: MasterBarContainerState = {
    isCollapsed: false
};

export function masterBarReducer(
    state: MasterBarContainerState = initialState,
    action: masterBar.Actions): MasterBarContainerState {
        switch (action.type) {
            case masterBar.ActionTypes.TOGGLE_MASTER_BAR:
                return {
                    isCollapsed: !state.isCollapsed
                };
            default:
                return state;
        }
};
