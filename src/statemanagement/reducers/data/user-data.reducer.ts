import {Action} from "@ngrx/store";
import * as userData from "../../actions/data/user-data";
import {UserData} from "../../../team/entities/UserData";

export function userDataReducer(state: Array<UserData> = [],
                             action: userData.Actions): Array<UserData> {
    switch (action.type) {
        case userData.ActionTypes.USER_DATA_ADD:
            return [...state, action.payload.userData];
        case userData.ActionTypes.USER_DATA_SET_ALL:
            return [...action.payload.userData];
        case userData.ActionTypes.USER_DATA_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case userData.ActionTypes.USER_DATA_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                console.log("user data already in array");
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.userData) : item);
            }
            else {
                console.log("user data replaced in array");
                // return state;
                return [...state, action.payload.userData];
            };
        default:
            return state;
    }
};