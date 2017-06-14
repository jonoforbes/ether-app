import * as activeModule from "../../actions/containers/active-module";
let initialState = {
    moduleName: 'Home'
};
export function activeModuleReducer(state = initialState, action) {
    switch (action.type) {
        case activeModule.ActionTypes.ACTIVATE_ROUTE:
            return {
                moduleName: action.payload.moduleName
            };
        default:
            return state;
    }
}
;
//# sourceMappingURL=active-module.reducer.js.map