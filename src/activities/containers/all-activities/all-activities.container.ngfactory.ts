/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './all-activities.container';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../activities.sandbox';
import * as import10 from '../../components/activities-list/activities-list.component';
import * as import11 from '../../components/activities-list/activities-list.component.ngfactory';
import * as import12 from '@angular/common/src/pipes/async_pipe';
import * as import13 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_AllActivitiesContainer {
  /*private*/ _eventHandler:Function;
  context:import0.AllActivitiesContainer;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.AllActivitiesContainer(p0);
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
const nodeDebugInfos_AllActivitiesContainer_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.AllActivitiesContainer],import0.AllActivitiesContainer,{})];
var renderType_AllActivitiesContainer_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_AllActivitiesContainer_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AllActivitiesContainer>;
  _AllActivitiesContainer_0_3:Wrapper_AllActivitiesContainer;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AllActivitiesContainer_Host0,renderType_AllActivitiesContainer_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AllActivitiesContainer_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'all-activities',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_AllActivitiesContainer0(this.viewUtils,this,0,this._el_0);
    this._AllActivitiesContainer_0_3 = new Wrapper_AllActivitiesContainer(this.injectorGet(import9.ActivitiesSandbox,this.parentIndex));
    this.compView_0.create(this._AllActivitiesContainer_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._AllActivitiesContainer_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AllActivitiesContainer) && (0 === requestNodeIndex))) { return this._AllActivitiesContainer_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._AllActivitiesContainer_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._AllActivitiesContainer_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AllActivitiesContainerNgFactory:import8.ComponentFactory<import0.AllActivitiesContainer> = new import8.ComponentFactory<import0.AllActivitiesContainer>('all-activities',View_AllActivitiesContainer_Host0,import0.AllActivitiesContainer);
const styles_AllActivitiesContainer:any[] = ([] as any[]);
const nodeDebugInfos_AllActivitiesContainer0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import10.ActivitiesListComponent],import10.ActivitiesListComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_AllActivitiesContainer:import3.RenderComponentType = import4.createRenderComponentType('/Users/jonoforbes/Developer/Ether/winecellar/src/activities/containers/all-activities/all-activities.container.ts class AllActivitiesContainer - inline template',0,import5.ViewEncapsulation.None,styles_AllActivitiesContainer,{});
export class View_AllActivitiesContainer0 extends import1.DebugAppView<import0.AllActivitiesContainer> {
  _text_0:any;
  _el_1:any;
  compView_1:import1.AppView<import10.ActivitiesListComponent>;
  _ActivitiesListComponent_1_3:import11.Wrapper_ActivitiesListComponent;
  _text_2:any;
  _pipe_async_0:import12.AsyncPipe;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AllActivitiesContainer0,renderType_AllActivitiesContainer,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_AllActivitiesContainer0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'activities-list',import4.EMPTY_INLINE_ARRAY,this.debug(1,1,8));
    this.compView_1 = new import11.View_ActivitiesListComponent0(this.viewUtils,this,1,this._el_1);
    this._ActivitiesListComponent_1_3 = new import11.Wrapper_ActivitiesListComponent();
    this.compView_1.create(this._ActivitiesListComponent_1_3.context);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(2,4,27));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_1,new import4.InlineArray2(2,'removeActivity',(null as any)),this.eventHandler(this.handleEvent_1));
    this._ActivitiesListComponent_1_3.subscribe(this,this.eventHandler(this.handleEvent_1),true);
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import12.AsyncPipe(this.ref);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.ActivitiesListComponent) && (1 === requestNodeIndex))) { return this._ActivitiesListComponent_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import13.ValueUnwrapper();
    this.debug(1,2,8);
    valUnwrapper.reset();
    const currVal_1_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.matchingActivities$));
    this._ActivitiesListComponent_1_3.check_activities(currVal_1_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    if (this._ActivitiesListComponent_1_3.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    this.compView_1.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_1.destroy();
    this._ActivitiesListComponent_1_3.ngOnDestroy();
    this.debug(1,1,8);
    this._pipe_async_0.ngOnDestroy();
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.debug(1,1,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'removeActivity')) {
      const pd_sub_0:any = ((<any>this.context.onRemoveActivity($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}