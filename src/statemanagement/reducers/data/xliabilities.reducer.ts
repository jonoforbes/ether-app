import { Action } from "@ngrx/store";
import * as xLiability from "../../actions/data/xliability";
import { XLiability } from "../../../xliabilities/entities/XLiability";

export function xLiabilitiesReducer(
        state: Array<XLiability> = [],
        action: xLiability.Actions): Array<XLiability> {
    switch (action.type) {
        case xLiability.ActionTypes.XLIABILITIES_ADD:
            return [...state, action.payload.xLiability];
        case xLiability.ActionTypes.XLIABILITIES_SET_ALL:
            return [...action.payload.xLiabilities];
        case xLiability.ActionTypes.XLIABILITIES_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case xLiability.ActionTypes.XLIABILITIES_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.xLiability) : item);
            }
            else {
                return [...state, action.payload.xLiability];
            };
        default:
            return state;
    }
};