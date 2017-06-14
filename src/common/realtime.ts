import {BACKEND} from "../configuration";
import {ApplicationState} from "../statemanagement/state/ApplicationState";
import {Store} from "@ngrx/store";
import {Injectable} from "@angular/core";
import * as io from "socket.io-client";
import {info, options} from "toastr";
import { Router } from "@angular/router";

@Injectable()
export class RealTime {
    private socket: SocketIOClient.Socket;

    constructor(private store: Store<ApplicationState>,
                private router: Router) {
    }

    connect(): void {
        this.store.select(state => state.data.authentication.jwtToken).take(1).subscribe((token: string) => {
            this.socket = io(BACKEND, {query: "jwttoken=" + token});
            this.socket.on("UPDATE_REDUX", action => {
                if (action.payload.activity) {

                    if (action.payload.activity.type == "message") {
                        var activityHeader: string = action.payload.activity.header;
                    var activityContent: string = action.payload.activity.content;
                    console.log('header', activityHeader);
                    
                    info(   activityContent, 
                            activityHeader, 
                            { onclick: 
                                function() {
                                    this.messageNavigate(action.payload.activity.userId);
                                }
                            });
                    }
                    
                }
                
                // info("Realtime update coming in!");
                this.store.dispatch(action);
                console.log(action);
            });
        });
    }

    messageNavigate(userId: string): void {
        console.log('user', userId);
        this.router.navigate(['/messages', {outlets: {'m': ['list'], 'd': [userId]}}]);
    }


    disconnect(): void {
        this.socket.close();
    }
}

