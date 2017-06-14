import * as application from "../../actions/containers/application";
let initialState = {
    isBusy: false
};
export function applicationReducer(state = initialState, action) {
    switch (action.type) {
        case application.ActionTypes.ENABLE_BUSY_FLAG:
            return {
                isBusy: true
            };
        case application.ActionTypes.DISABLE_BUSY_FLAG:
            return {
                isBusy: false
            };
        default:
            return state;
    }
}
;
//# sourceMappingURL=application.reducer.js.map