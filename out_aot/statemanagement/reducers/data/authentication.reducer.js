import * as authentication from "../../actions/data/autentication";
let initialState = {
    isAuthenticated: false,
    jwtToken: "",
    account: null
};
export function authenticationReducer(state = initialState, action) {
    switch (action.type) {
        case authentication.ActionTypes.SET_AUTHENTICATION:
            let authenticationResult = action.payload.authenticationResult;
            return {
                isAuthenticated: true,
                jwtToken: authenticationResult.token,
                account: {
                    firstName: authenticationResult.firstName,
                    lastName: authenticationResult.lastName,
                    login: authenticationResult.login,
                    boxUserId: authenticationResult.boxUserId,
                    boxAccessToken: authenticationResult.boxAccessToken,
                    userId: authenticationResult.userId
                }
            };
        case authentication.ActionTypes.CLEAR_AUTHENTICATION:
            return {
                isAuthenticated: false,
                jwtToken: null,
                account: null
            };
        default:
            return state;
    }
}
;
//# sourceMappingURL=authentication.reducer.js.map