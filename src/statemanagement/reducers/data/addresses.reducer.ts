import { Action } from "@ngrx/store";
import * as address from "../../actions/data/address";
import { Address } from "../../../addresses/entities/Address";

export function addressesReducer(   state: Array<Address> = [],
                                    action: address.Actions): Array<Address> {
    switch (action.type) {
        case address.ActionTypes.ADDRESSES_ADD:
            return [...state, action.payload.address];
        case address.ActionTypes.ADDRESSES_SET_ALL:
            return [...action.payload.addresses];
        case address.ActionTypes.ADDRESSES_REMOVE:
            return state.filter(item => item._id !== action.payload._id);
        case address.ActionTypes.ADDRESSES_UPDATE:
            if (state.filter(item => item._id === action.payload._id).length > 0) {
                return state.map(item => item._id === action.payload._id ? Object.assign({}, action.payload.address) : item);
            }
            else {
                return [...state, action.payload.address];
            }
        default:
            return state;
    }

};