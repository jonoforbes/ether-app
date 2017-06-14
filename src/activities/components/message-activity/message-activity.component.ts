import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from "../../entities/Activity";
import { Router } from "@angular/router";

@Component({
  selector: 'message-activity',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
    <div class="messageActivityCard">
  
    <h1>{{activity.header}}</h1>
    <h2>{{activity.createdAt}}</h2>
    <button md-icon-button style="position: absolute; top: 10px; right: 10px" (click)="onRemove()">
        <md-icon style="color: #5a5a5a; font-size: 12px !important;">close</md-icon>
    </button>
    <button class="messageActivityClick" md-button (click)="onNavigate()">
    <p>{{activity.content}}</p>
    </button>
    </div>
</md-card>

  `
})
export class MessageActivityComponent {
  @Input() activity: Activity;
  @Output() remove = new EventEmitter();
  @Output() navigate = new EventEmitter();

  

  constructor(private router: Router) { 

  }

  onRemove(): void {
    this.remove.emit(null);
  }

  onNavigate(): void {
    this.navigate.emit(null);
  }



};