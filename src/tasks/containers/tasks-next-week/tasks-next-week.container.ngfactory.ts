/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './tasks-next-week.container';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../tasks.sandbox';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '@angular/router/src/router';
import * as import12 from '../../components/tasks-header/tasks-header.component';
import * as import13 from '../tasks-form-group/tasks-form-group.container';
import * as import14 from '../../components/tasks-list/tasks-list.component';
import * as import15 from '../../components/tasks-header/tasks-header.component.ngfactory';
import * as import16 from '../tasks-form-group/tasks-form-group.container.ngfactory';
import * as import17 from '../../components/tasks-list/tasks-list.component.ngfactory';
import * as import18 from '@angular/common/src/pipes/async_pipe';
import * as import19 from '@angular/forms/src/form_builder';
import * as import20 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_TasksNextWeekContainer {
  /*private*/ _eventHandler:Function;
  context:import0.TasksNextWeekContainer;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.TasksNextWeekContainer(p0,p1,p2);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
const nodeDebugInfos_TasksNextWeekContainer_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.TasksNextWeekContainer],import0.TasksNextWeekContainer,{})];
var renderType_TasksNextWeekContainer_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_TasksNextWeekContainer_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TasksNextWeekContainer>;
  _TasksNextWeekContainer_0_3:Wrapper_TasksNextWeekContainer;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TasksNextWeekContainer_Host0,renderType_TasksNextWeekContainer_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_TasksNextWeekContainer_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'tasks-next-week',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_TasksNextWeekContainer0(this.viewUtils,this,0,this._el_0);
    this._TasksNextWeekContainer_0_3 = new Wrapper_TasksNextWeekContainer(this.injectorGet(import9.TasksSandbox,this.parentIndex),this.injectorGet(import10.ActivatedRoute,this.parentIndex),this.injectorGet(import11.Router,this.parentIndex));
    this.compView_0.create(this._TasksNextWeekContainer_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._TasksNextWeekContainer_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TasksNextWeekContainer) && (0 === requestNodeIndex))) { return this._TasksNextWeekContainer_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._TasksNextWeekContainer_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._TasksNextWeekContainer_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TasksNextWeekContainerNgFactory:import8.ComponentFactory<import0.TasksNextWeekContainer> = new import8.ComponentFactory<import0.TasksNextWeekContainer>('tasks-next-week',View_TasksNextWeekContainer_Host0,import0.TasksNextWeekContainer);
const styles_TasksNextWeekContainer:any[] = ([] as any[]);
const nodeDebugInfos_TasksNextWeekContainer0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import12.TasksHeaderComponent],import12.TasksHeaderComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import13.TasksFormGroupContainer],import13.TasksFormGroupContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import14.TasksListComponent],import14.TasksListComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_TasksNextWeekContainer:import3.RenderComponentType = import4.createRenderComponentType('/Users/jonoforbes/Developer/Ether/ether-app/src/tasks/containers/tasks-next-week/tasks-next-week.container.ts class TasksNextWeekContainer - inline template',0,import5.ViewEncapsulation.None,styles_TasksNextWeekContainer,{});
export class View_TasksNextWeekContainer0 extends import1.DebugAppView<import0.TasksNextWeekContainer> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  compView_3:import1.AppView<import12.TasksHeaderComponent>;
  _TasksHeaderComponent_3_3:import15.Wrapper_TasksHeaderComponent;
  _text_4:any;
  _el_5:any;
  compView_5:import1.AppView<import13.TasksFormGroupContainer>;
  _TasksFormGroupContainer_5_3:import16.Wrapper_TasksFormGroupContainer;
  _text_6:any;
  _el_7:any;
  compView_7:import1.AppView<import14.TasksListComponent>;
  _TasksListComponent_7_3:import17.Wrapper_TasksListComponent;
  _text_8:any;
  _text_9:any;
  _pipe_async_0:import18.AsyncPipe;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TasksNextWeekContainer0,renderType_TasksNextWeekContainer,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_TasksNextWeekContainer0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','example-scrolling-content'),this.debug(1,1,8));
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',this.debug(2,1,47));
    this._el_3 = import4.createRenderElement(this.renderer,this._el_1,'tasks-header',import4.EMPTY_INLINE_ARRAY,this.debug(3,2,12));
    this.compView_3 = new import15.View_TasksHeaderComponent0(this.viewUtils,this,3,this._el_3);
    this._TasksHeaderComponent_3_3 = new import15.Wrapper_TasksHeaderComponent();
    this.compView_3.create(this._TasksHeaderComponent_3_3.context);
    this._text_4 = this.renderer.createText(this._el_1,'\n            ',this.debug(4,2,82));
    this._el_5 = import4.createRenderElement(this.renderer,this._el_1,'tasks-form-group',import4.EMPTY_INLINE_ARRAY,this.debug(5,3,12));
    this.compView_5 = new import16.View_TasksFormGroupContainer0(this.viewUtils,this,5,this._el_5);
    this._TasksFormGroupContainer_5_3 = new import16.Wrapper_TasksFormGroupContainer(this.parentView.injectorGet(import9.TasksSandbox,this.parentIndex),this.parentView.injectorGet(import19.FormBuilder,this.parentIndex));
    this.compView_5.create(this._TasksFormGroupContainer_5_3.context);
    this._text_6 = this.renderer.createText(this._el_1,'\n\n             ',this.debug(6,3,75));
    this._el_7 = import4.createRenderElement(this.renderer,this._el_1,'tasks-list',import4.EMPTY_INLINE_ARRAY,this.debug(7,5,13));
    this.compView_7 = new import17.View_TasksListComponent0(this.viewUtils,this,7,this._el_7);
    this._TasksListComponent_7_3 = new import17.Wrapper_TasksListComponent();
    this.compView_7.create(this._TasksListComponent_7_3.context);
    this._text_8 = this.renderer.createText(this._el_1,'\n        ',this.debug(8,12,27));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n\n        \n       \n    \n    ',this.debug(9,13,14));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_5,new import4.InlineArray2(2,'onSave',(null as any)),this.eventHandler(this.handleEvent_5));
    this._TasksFormGroupContainer_5_3.subscribe(this,this.eventHandler(this.handleEvent_5),true);
    var disposable_1:Function = import4.subscribeToRenderElement(this,this._el_7,new import4.InlineArray16(12,'updateTask',(null as any),'updateAssignee',(null as any),'updateContact',(null as any),'updateClientAccount',(null as any),'removeTask',(null as any),'updateStatus',(null as any)),this.eventHandler(this.handleEvent_7));
    this._TasksListComponent_7_3.subscribe(this,this.eventHandler(this.handleEvent_7),true,true,true,false,true,false,true,true);
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import18.AsyncPipe(this.ref);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TasksHeaderComponent) && (3 === requestNodeIndex))) { return this._TasksHeaderComponent_3_3.context; }
    if (((token === import13.TasksFormGroupContainer) && (5 === requestNodeIndex))) { return this._TasksFormGroupContainer_5_3.context; }
    if (((token === import14.TasksListComponent) && (7 === requestNodeIndex))) { return this._TasksListComponent_7_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import20.ValueUnwrapper();
    this.debug(3,2,46);
    const currVal_3_0_0:any = this.context.headerText;
    this._TasksHeaderComponent_3_3.check_title(currVal_3_0_0,throwOnChange,false);
    this.debug(3,2,26);
    const currVal_3_0_1:any = this.context.headerDate;
    this._TasksHeaderComponent_3_3.check_date(currVal_3_0_1,throwOnChange,false);
    if (this._TasksHeaderComponent_3_3.ngDoCheck(this,this._el_3,throwOnChange)) { this.compView_3.markAsCheckOnce(); }
    this.debug(5,3,12);
    if (this._TasksFormGroupContainer_5_3.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    this.debug(7,5,25);
    valUnwrapper.reset();
    const currVal_7_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.matchingTasks$));
    this._TasksListComponent_7_3.check_tasks(currVal_7_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    if (this._TasksListComponent_7_3.ngDoCheck(this,this._el_7,throwOnChange)) { this.compView_7.markAsCheckOnce(); }
    this.compView_3.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
    this.compView_7.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_3.destroy();
    this.compView_5.destroy();
    this.compView_7.destroy();
    this.debug(3,2,12);
    this._TasksFormGroupContainer_5_3.ngOnDestroy();
    this.debug(5,3,12);
    this._TasksListComponent_7_3.ngOnDestroy();
    this.debug(7,5,13);
    this._pipe_async_0.ngOnDestroy();
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.debug(5,3,12);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'onSave')) {
      const pd_sub_0:any = ((<any>this.context.onSave($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_7(eventName:string,$event:any):boolean {
    this.debug(7,5,13);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'updateTask')) {
      const pd_sub_0:any = ((<any>this.context.onUpdateTask($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'updateAssignee')) {
      const pd_sub_1:any = ((<any>this.context.onUpdateAssignee($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'updateContact')) {
      const pd_sub_2:any = ((<any>this.context.onUpdateContact($event)) !== false);
      result = (pd_sub_2 && result);
    }
    if ((eventName == 'updateClientAccount')) {
      const pd_sub_3:any = ((<any>this.context.onUpdateClientAccount($event)) !== false);
      result = (pd_sub_3 && result);
    }
    if ((eventName == 'removeTask')) {
      const pd_sub_4:any = ((<any>this.context.onRemoveTask($event)) !== false);
      result = (pd_sub_4 && result);
    }
    if ((eventName == 'updateStatus')) {
      const pd_sub_5:any = ((<any>this.context.onUpdateCompleted($event)) !== false);
      result = (pd_sub_5 && result);
    }
    return result;
  }
}