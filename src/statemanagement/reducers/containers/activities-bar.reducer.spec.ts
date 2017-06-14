import { ActivitiesBarContainerState } from "../../state/ContainersState";
import { activitiesBarReducer } from "./activities-bar.reducer";
import { ToggleActivitiesBar } from "../../actions/containers/activities-bar";
import { Dispatcher } from "@ngrx/store";
let deepfreeze = require("deep-freeze");

describe("reducer: containers > activitiesBarReducer", () => {
    describe("case CONTAINER_ACTIVITIES_BAR_TOGGLE", () => {
        it("should return a new state with a different isCollapsed value", () => {
            let initialState: ActivitiesBarContainerState = {
                isCollapsed: false
            };
            deepfreeze(initialState);
            let changedState: ActivitiesBarContainerState = 
                activitiesBarReducer(initialState, new ToggleActivitiesBar());
            expect(changedState).not.toBe(initialState);
            expect(changedState.isCollapsed).toBe(true);
            initialState = {
                isCollapsed: true
            };
            changedState = activitiesBarReducer(initialState, new ToggleActivitiesBar());
            expect(changedState.isCollapsed).toBe(false);
        });
    });
    describe("case default", () => {
        it("should return the exact same reference as before", () => {
            let initialState: ActivitiesBarContainerState = {
                isCollapsed: false
            };
            deepfreeze(initialState);
            let changedState: ActivitiesBarContainerState = activitiesBarReducer(initialState, {type:null}) as any;
            expect(changedState).toBe(initialState);
        });
    });
    describe("case @ngrx/store/init", () => {
        it("should return the default value for the state param", () => {
            let changedState: ActivitiesBarContainerState = activitiesBarReducer(undefined, {type: Dispatcher.INIT} as any);
            expect(changedState.isCollapsed).toBeFalsy();
        });
    });
});