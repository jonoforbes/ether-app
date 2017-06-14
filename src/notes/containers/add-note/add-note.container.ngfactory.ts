/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './add-note.container';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../notes.sandbox';
import * as import10 from '../notes-editor-group/notes-editor-group.container';
import * as import11 from '../notes-editor-group/notes-editor-group.container.ngfactory';
import * as import12 from '@angular/forms/src/form_builder';
export class Wrapper_AddNoteContainer {
  /*private*/ _eventHandler:Function;
  context:import0.AddNoteContainer;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.AddNoteContainer(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
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
const nodeDebugInfos_AddNoteContainer_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.AddNoteContainer],import0.AddNoteContainer,{})];
var renderType_AddNoteContainer_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_AddNoteContainer_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AddNoteContainer>;
  _AddNoteContainer_0_3:Wrapper_AddNoteContainer;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AddNoteContainer_Host0,renderType_AddNoteContainer_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AddNoteContainer_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'add-note',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_AddNoteContainer0(this.viewUtils,this,0,this._el_0);
    this._AddNoteContainer_0_3 = new Wrapper_AddNoteContainer(this.injectorGet(import9.NotesSandbox,this.parentIndex));
    this.compView_0.create(this._AddNoteContainer_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._AddNoteContainer_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AddNoteContainer) && (0 === requestNodeIndex))) { return this._AddNoteContainer_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._AddNoteContainer_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AddNoteContainerNgFactory:import8.ComponentFactory<import0.AddNoteContainer> = new import8.ComponentFactory<import0.AddNoteContainer>('add-note',View_AddNoteContainer_Host0,import0.AddNoteContainer);
const styles_AddNoteContainer:any[] = ([] as any[]);
const nodeDebugInfos_AddNoteContainer0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import10.NotesEditorGroupContainer],import10.NotesEditorGroupContainer,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_AddNoteContainer:import3.RenderComponentType = import4.createRenderComponentType('/Users/jonoforbes/Developer/Ether/winecellar/src/notes/containers/add-note/add-note.container.ts class AddNoteContainer - inline template',0,import5.ViewEncapsulation.None,styles_AddNoteContainer,{});
export class View_AddNoteContainer0 extends import1.DebugAppView<import0.AddNoteContainer> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  compView_3:import1.AppView<import10.NotesEditorGroupContainer>;
  _NotesEditorGroupContainer_3_3:import11.Wrapper_NotesEditorGroupContainer;
  _text_4:any;
  _text_5:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AddNoteContainer0,renderType_AddNoteContainer,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_AddNoteContainer0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(0,0,0));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','example-scrolling-content'),this.debug(1,1,4));
    this._text_2 = this.renderer.createText(this._el_1,'\n        \n\n\n        ',this.debug(2,1,43));
    this._el_3 = import4.createRenderElement(this.renderer,this._el_1,'notes-editor-group',import4.EMPTY_INLINE_ARRAY,this.debug(3,5,8));
    this.compView_3 = new import11.View_NotesEditorGroupContainer0(this.viewUtils,this,3,this._el_3);
    this._NotesEditorGroupContainer_3_3 = new import11.Wrapper_NotesEditorGroupContainer(this.parentView.injectorGet(import9.NotesSandbox,this.parentIndex),this.parentView.injectorGet(import12.FormBuilder,this.parentIndex));
    this.compView_3.create(this._NotesEditorGroupContainer_3_3.context);
    this._text_4 = this.renderer.createText(this._el_1,'\n\n        \n    ',this.debug(4,5,75));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(5,8,10));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_3,new import4.InlineArray2(2,'onSave',(null as any)),this.eventHandler(this.handleEvent_3));
    this._NotesEditorGroupContainer_3_3.subscribe(this,this.eventHandler(this.handleEvent_3),true,false);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.NotesEditorGroupContainer) && (3 === requestNodeIndex))) { return this._NotesEditorGroupContainer_3_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(3,5,8);
    if (this._NotesEditorGroupContainer_3_3.ngDoCheck(this,this._el_3,throwOnChange)) { this.compView_3.markAsCheckOnce(); }
    this.compView_3.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_3.destroy();
    this._NotesEditorGroupContainer_3_3.ngOnDestroy();
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.debug(3,5,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'onSave')) {
      const pd_sub_0:any = ((<any>this.context.onSave($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}