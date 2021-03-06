/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './contacts-widget.container';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../contacts.sandbox';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/material/core/compatibility/compatibility';
import * as import13 from '@angular/material/tabs/tab';
import * as import14 from '../../components/contact-tab/contact-tab.component';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '../../../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import17 from '../../../../node_modules/@angular/material/tabs/tab.ngfactory';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '../../components/contact-tab/contact-tab.component.ngfactory';
import * as import20 from '@angular/forms/src/form_builder';
import * as import21 from 'ng2-accordion/Accordion';
import * as import22 from 'ng2-accordion/AccordionGroup';
import * as import23 from 'ng2-accordion/AccordionHeading';
import * as import24 from '@angular/material/tabs/tab-group';
import * as import25 from '../../components/add-contact-tab/add-contact-tab.component';
import * as import26 from '@angular/core/src/linker/template_ref';
import * as import27 from '@angular/common/src/directives/ng_for';
import * as import28 from '../../../../node_modules/ng2-accordion/Accordion.ngfactory';
import * as import29 from '../../../../node_modules/ng2-accordion/AccordionGroup.ngfactory';
import * as import30 from '../../../../node_modules/ng2-accordion/AccordionHeading.ngfactory';
import * as import31 from '../../../../node_modules/@angular/material/tabs/tab-group.ngfactory';
import * as import32 from '../../components/add-contact-tab/add-contact-tab.component.ngfactory';
import * as import33 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import34 from '@angular/common/src/pipes/async_pipe';
import * as import35 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import36 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_ContactsWidgetContainer {
  /*private*/ _eventHandler:Function;
  context:import0.ContactsWidgetContainer;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.ContactsWidgetContainer(p0,p1,p2);
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
const nodeDebugInfos_ContactsWidgetContainer_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.ContactsWidgetContainer],import0.ContactsWidgetContainer,{})];
var renderType_ContactsWidgetContainer_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_ContactsWidgetContainer_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ContactsWidgetContainer>;
  _ContactsWidgetContainer_0_3:Wrapper_ContactsWidgetContainer;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ContactsWidgetContainer_Host0,renderType_ContactsWidgetContainer_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ContactsWidgetContainer_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'contacts-widget',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_ContactsWidgetContainer0(this.viewUtils,this,0,this._el_0);
    this._ContactsWidgetContainer_0_3 = new Wrapper_ContactsWidgetContainer(this.injectorGet(import9.ContactsSandbox,this.parentIndex),this.injectorGet(import10.ActivatedRoute,this.parentIndex),this.injectorGet(import11.Router,this.parentIndex));
    this.compView_0.create(this._ContactsWidgetContainer_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._ContactsWidgetContainer_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ContactsWidgetContainer) && (0 === requestNodeIndex))) { return this._ContactsWidgetContainer_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    if (this._ContactsWidgetContainer_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._ContactsWidgetContainer_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ContactsWidgetContainerNgFactory:import8.ComponentFactory<import0.ContactsWidgetContainer> = new import8.ComponentFactory<import0.ContactsWidgetContainer>('contacts-widget',View_ContactsWidgetContainer_Host0,import0.ContactsWidgetContainer);
const styles_ContactsWidgetContainer:any[] = ([] as any[]);
const nodeDebugInfos_ContactsWidgetContainer1:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo([
    import12.MdPrefixRejector,
    import13.MdTab
  ]
  ,import13.MdTab,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import14.ContactTabComponent],import14.ContactTabComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_ContactsWidgetContainer1 extends import1.DebugAppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import15.ViewContainer;
  compView_0:import1.AppView<import13.MdTab>;
  _MdPrefixRejector_0_5:import16.Wrapper_MdPrefixRejector;
  _MdTab_0_6:import17.Wrapper_MdTab;
  _query_MdTabLabel_0_0:import18.QueryList<any>;
  _text_1:any;
  _el_2:any;
  compView_2:import1.AppView<import14.ContactTabComponent>;
  _ContactTabComponent_2_3:import19.Wrapper_ContactTabComponent;
  _text_3:any;
  _el_4:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_ContactsWidgetContainer1,renderType_ContactsWidgetContainer,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ContactsWidgetContainer1,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.createRenderElement(this.renderer,(null as any),'md-tab',import4.EMPTY_INLINE_ARRAY,this.debug(0,12,16));
    this._vc_0 = new import15.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new import17.View_MdTab0(this.viewUtils,this,0,this._el_0);
    this._MdPrefixRejector_0_5 = new import16.Wrapper_MdPrefixRejector(this.parentView.parentView.injectorGet(import12.MATERIAL_COMPATIBILITY_MODE,this.parentView.parentIndex,(null as any)));
    this._MdTab_0_6 = new import17.Wrapper_MdTab(this._vc_0.vcRef);
    this._query_MdTabLabel_0_0 = new import18.QueryList<any>();
    this._text_1 = this.renderer.createText((null as any),'\n                    ',this.debug(1,12,111));
    this._el_2 = import4.createRenderElement(this.renderer,(null as any),'contact-tab',import4.EMPTY_INLINE_ARRAY,this.debug(2,13,20));
    this.compView_2 = new import19.View_ContactTabComponent0(this.viewUtils,this,2,this._el_2);
    this._ContactTabComponent_2_3 = new import19.Wrapper_ContactTabComponent(this.parentView.parentView.injectorGet(import20.FormBuilder,this.parentView.parentIndex));
    this.compView_2.create(this._ContactTabComponent_2_3.context);
    this._text_3 = this.renderer.createText((null as any),'\n                ',this.debug(3,14,119));
    this.compView_0.create(this._MdTab_0_6.context);
    this._el_4 = this.renderer.createTemplateAnchor((null as any),(null as any));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_2,new import4.InlineArray4(4,'updateContact',(null as any),'updateContactAccount',(null as any)),this.eventHandler(this.handleEvent_2));
    this._ContactTabComponent_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true,true);
    this._query_MdTabLabel_0_0.reset(([] as any[]));
    this._MdTab_0_6.context.templateLabel = this._query_MdTabLabel_0_0.first;
    this.init(this._el_4,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.ContactTabComponent) && (2 === requestNodeIndex))) { return this._ContactTabComponent_2_3.context; }
    if (((token === import12.MdPrefixRejector) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._MdPrefixRejector_0_5.context; }
    if (((token === import13.MdTab) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._MdTab_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,12,16);
    this._MdPrefixRejector_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(0,12,66);
    const currVal_0_1_0:any = import4.inlineInterpolate(2,'',this.context.$implicit.firstName,' ',this.context.$implicit.lastName,'');
    this._MdTab_0_6.check_textLabel(currVal_0_1_0,throwOnChange,false);
    this._MdTab_0_6.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(2,14,88);
    const currVal_2_0_0:any = this.context.$implicit;
    this._ContactTabComponent_2_3.check_contact(currVal_2_0_0,throwOnChange,false);
    if (this._ContactTabComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange)) { this.compView_2.markAsCheckOnce(); }
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  dirtyParentQueriesInternal():void {
    (<View_ContactsWidgetContainer0>this.parentView)._query_MdTab_11_0.setDirty();
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this.compView_2.destroy();
    this._ContactTabComponent_2_3.ngOnDestroy();
    this.debug(2,13,20);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_4,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {
      cb(this._text_1,ctx);
      cb(this._el_2,ctx);
      cb(this._text_3,ctx);
    }
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.debug(2,13,20);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'updateContact')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onUpdateContact($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'updateContactAccount')) {
      const pd_sub_1:any = ((<any>this.parentView.context.onUpdateContactAccount($event)) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
}
const nodeDebugInfos_ContactsWidgetContainer0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import21.Accordion],import21.Accordion,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import22.AccordionGroup],import22.AccordionGroup,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import23.AccordionHeading],import23.AccordionHeading,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import12.MdPrefixRejector,
    import24.MdTabGroup
  ]
  ,import24.MdTabGroup,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import12.MdPrefixRejector,
    import13.MdTab
  ]
  ,import13.MdTab,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import25.AddContactTabComponent],import25.AddContactTabComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import26.TemplateRef,
    import27.NgFor
  ]
  ,(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_ContactsWidgetContainer:import3.RenderComponentType = import4.createRenderComponentType('/Users/jonoforbes/Developer/Ether/ether-app/src/contacts/containers/contacts-widget/contacts-widget.container.ts class ContactsWidgetContainer - inline template',0,import5.ViewEncapsulation.None,styles_ContactsWidgetContainer,{});
export class View_ContactsWidgetContainer0 extends import1.DebugAppView<import0.ContactsWidgetContainer> {
  _text_0:any;
  _el_1:any;
  compView_1:import1.AppView<import21.Accordion>;
  _Accordion_1_3:import28.Wrapper_Accordion;
  _query_AccordionGroup_1_0:import18.QueryList<any>;
  _text_2:any;
  _el_3:any;
  compView_3:import1.AppView<import22.AccordionGroup>;
  _AccordionGroup_3_3:import29.Wrapper_AccordionGroup;
  _query_AccordionToggle_3_0:import18.QueryList<any>;
  _text_4:any;
  _el_5:any;
  compView_5:import1.AppView<import23.AccordionHeading>;
  _AccordionHeading_5_3:import30.Wrapper_AccordionHeading;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  compView_11:import1.AppView<import24.MdTabGroup>;
  _MdPrefixRejector_11_3:import16.Wrapper_MdPrefixRejector;
  _MdTabGroup_11_4:import31.Wrapper_MdTabGroup;
  _query_MdTab_11_0:import18.QueryList<any>;
  _text_12:any;
  _el_13:any;
  /*private*/ _vc_13:import15.ViewContainer;
  compView_13:import1.AppView<import13.MdTab>;
  _MdPrefixRejector_13_5:import16.Wrapper_MdPrefixRejector;
  _MdTab_13_6:import17.Wrapper_MdTab;
  _query_MdTabLabel_13_0:import18.QueryList<any>;
  _text_14:any;
  _el_15:any;
  compView_15:import1.AppView<import25.AddContactTabComponent>;
  _AddContactTabComponent_15_3:import32.Wrapper_AddContactTabComponent;
  _text_16:any;
  _text_17:any;
  _anchor_18:any;
  /*private*/ _vc_18:import15.ViewContainer;
  _TemplateRef_18_5:any;
  _NgFor_18_6:import33.Wrapper_NgFor;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _pipe_async_0:import34.AsyncPipe;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ContactsWidgetContainer0,renderType_ContactsWidgetContainer,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce,nodeDebugInfos_ContactsWidgetContainer0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(0,0,0));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'accordion',new import4.InlineArray2(2,'class','widget-accordion'),this.debug(1,1,4));
    this.compView_1 = new import28.View_Accordion0(this.viewUtils,this,1,this._el_1);
    this._Accordion_1_3 = new import28.Wrapper_Accordion();
    this._query_AccordionGroup_1_0 = new import18.QueryList<any>();
    this._text_2 = this.renderer.createText((null as any),'\n          \n        ',this.debug(2,1,82));
    this._el_3 = import4.createRenderElement(this.renderer,(null as any),'accordion-group',new import4.InlineArray2(2,'class','widget-accordion'),this.debug(3,3,8));
    this.compView_3 = new import29.View_AccordionGroup0(this.viewUtils,this,3,this._el_3);
    this._AccordionGroup_3_3 = new import29.Wrapper_AccordionGroup(this._Accordion_1_3.context,this.compView_3.ref);
    this._query_AccordionToggle_3_0 = new import18.QueryList<any>();
    this._text_4 = this.renderer.createText((null as any),'\n            ',this.debug(4,3,68));
    this._el_5 = import4.createRenderElement(this.renderer,(null as any),'accordion-heading',new import4.InlineArray2(2,'class','widget-accordion'),this.debug(5,4,12));
    this.compView_5 = new import30.View_AccordionHeading0(this.viewUtils,this,5,this._el_5);
    this._AccordionHeading_5_3 = new import30.Wrapper_AccordionHeading();
    this._text_6 = this.renderer.createText((null as any),'\n                ',this.debug(6,4,56));
    this._el_7 = import4.createRenderElement(this.renderer,(null as any),'h2',new import4.InlineArray2(2,'class','widget widget-head'),this.debug(7,5,16));
    this._text_8 = this.renderer.createText(this._el_7,'Contacts',this.debug(8,5,47));
    this._text_9 = this.renderer.createText((null as any),'\n            ',this.debug(9,5,60));
    this.compView_5.create(this._AccordionHeading_5_3.context);
    this._text_10 = this.renderer.createText((null as any),'\n\n            ',this.debug(10,6,32));
    this._el_11 = import4.createRenderElement(this.renderer,(null as any),'md-tab-group',new import4.InlineArray2(2,'class','widget'),this.debug(11,8,12));
    this.compView_11 = new import31.View_MdTabGroup0(this.viewUtils,this,11,this._el_11);
    this._MdPrefixRejector_11_3 = new import16.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import12.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdTabGroup_11_4 = new import31.Wrapper_MdTabGroup(this.renderer);
    this._query_MdTab_11_0 = new import18.QueryList<any>();
    this._text_12 = this.renderer.createText((null as any),'\n                ',this.debug(12,8,61));
    this._el_13 = import4.createRenderElement(this.renderer,(null as any),'md-tab',new import4.InlineArray2(2,'label','+'),this.debug(13,9,16));
    this._vc_13 = new import15.ViewContainer(13,11,this,this._el_13);
    this.compView_13 = new import17.View_MdTab0(this.viewUtils,this,13,this._el_13);
    this._MdPrefixRejector_13_5 = new import16.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import12.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdTab_13_6 = new import17.Wrapper_MdTab(this._vc_13.vcRef);
    this._query_MdTabLabel_13_0 = new import18.QueryList<any>();
    this._text_14 = this.renderer.createText((null as any),'\n                    ',this.debug(14,9,34));
    this._el_15 = import4.createRenderElement(this.renderer,(null as any),'add-contact-tab',import4.EMPTY_INLINE_ARRAY,this.debug(15,10,20));
    this.compView_15 = new import32.View_AddContactTabComponent0(this.viewUtils,this,15,this._el_15);
    this._AddContactTabComponent_15_3 = new import32.Wrapper_AddContactTabComponent(this.parentView.injectorGet(import20.FormBuilder,this.parentIndex));
    this.compView_15.create(this._AddContactTabComponent_15_3.context);
    this._text_16 = this.renderer.createText((null as any),'\n                ',this.debug(16,10,91));
    this.compView_13.create(this._MdTab_13_6.context);
    this._text_17 = this.renderer.createText((null as any),'\n                ',this.debug(17,11,25));
    this._anchor_18 = this.renderer.createTemplateAnchor((null as any),this.debug(18,12,16));
    this._vc_18 = new import15.ViewContainer(18,11,this,this._anchor_18);
    this._TemplateRef_18_5 = new import26.TemplateRef_(this,18,this._anchor_18);
    this._NgFor_18_6 = new import33.Wrapper_NgFor(this._vc_18.vcRef,this._TemplateRef_18_5,this.parentView.injectorGet(import35.IterableDiffers,this.parentIndex),this.ref);
    this._text_19 = this.renderer.createText((null as any),'      \n            ',this.debug(19,15,25));
    this.compView_11.create(this._MdTabGroup_11_4.context);
    this._text_20 = this.renderer.createText((null as any),'\n        ',this.debug(20,16,27));
    this.compView_3.create(this._AccordionGroup_3_3.context);
    this._text_21 = this.renderer.createText((null as any),'\n    ',this.debug(21,17,26));
    this.compView_1.create(this._Accordion_1_3.context);
    this._text_22 = this.renderer.createText(parentRenderNode,'\n    \n    \n    \n    ',this.debug(22,18,16));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_15,new import4.InlineArray2(2,'addContact',(null as any)),this.eventHandler(this.handleEvent_15));
    this._AddContactTabComponent_15_3.subscribe(this,this.eventHandler(this.handleEvent_15),true);
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import34.AsyncPipe(this.ref);
    this._query_AccordionToggle_3_0.reset(([] as any[]));
    this._AccordionGroup_3_3.context.toggler = this._query_AccordionToggle_3_0.first;
    this._query_MdTabLabel_13_0.reset(([] as any[]));
    this._MdTab_13_6.context.templateLabel = this._query_MdTabLabel_13_0.first;
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
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._anchor_18,
      this._text_19,
      this._text_20,
      this._text_21,
      this._text_22
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.AccordionHeading) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._AccordionHeading_5_3.context; }
    if (((token === import25.AddContactTabComponent) && (15 === requestNodeIndex))) { return this._AddContactTabComponent_15_3.context; }
    if (((token === import12.MdPrefixRejector) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._MdPrefixRejector_13_5.context; }
    if (((token === import13.MdTab) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._MdTab_13_6.context; }
    if (((token === import26.TemplateRef) && (18 === requestNodeIndex))) { return this._TemplateRef_18_5; }
    if (((token === import27.NgFor) && (18 === requestNodeIndex))) { return this._NgFor_18_6.context; }
    if (((token === import12.MdPrefixRejector) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._MdPrefixRejector_11_3.context; }
    if (((token === import24.MdTabGroup) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._MdTabGroup_11_4.context; }
    if (((token === import22.AccordionGroup) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._AccordionGroup_3_3.context; }
    if (((token === import21.Accordion) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._Accordion_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import36.ValueUnwrapper();
    this.debug(1,1,40);
    const currVal_1_0_0:any = false;
    this._Accordion_1_3.check_closeOthers(currVal_1_0_0,throwOnChange,false);
    this.debug(1,1,62);
    const currVal_1_0_1:any = true;
    this._Accordion_1_3.check_showArrows(currVal_1_0_1,throwOnChange,false);
    this._Accordion_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    this.debug(3,3,50);
    const currVal_3_0_0:any = true;
    this._AccordionGroup_3_3.check_isOpened(currVal_3_0_0,throwOnChange,false);
    this._AccordionGroup_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(5,4,12);
    this._AccordionHeading_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(11,8,12);
    this._MdPrefixRejector_11_3.ngDoCheck(this,this._el_11,throwOnChange);
    this.debug(11,8,41);
    const currVal_11_1_0:any = 1;
    this._MdTabGroup_11_4.check_selectedIndex(currVal_11_1_0,throwOnChange,false);
    this._MdTabGroup_11_4.ngDoCheck(this,this._el_11,throwOnChange);
    this.debug(13,9,16);
    this._MdPrefixRejector_13_5.ngDoCheck(this,this._el_13,throwOnChange);
    this.debug(13,9,24);
    const currVal_13_1_0:any = '+';
    this._MdTab_13_6.check_textLabel(currVal_13_1_0,throwOnChange,false);
    this._MdTab_13_6.ngDoCheck(this,this._el_13,throwOnChange);
    this.debug(15,10,20);
    if (this._AddContactTabComponent_15_3.ngDoCheck(this,this._el_15,throwOnChange)) { this.compView_15.markAsCheckOnce(); }
    this.debug(18,12,24);
    valUnwrapper.reset();
    const currVal_18_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.contacts$));
    this._NgFor_18_6.check_ngForOf(currVal_18_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgFor_18_6.ngDoCheck(this,this._anchor_18,throwOnChange);
    this._vc_13.detectChangesInNestedViews(throwOnChange);
    this._vc_18.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_AccordionGroup_1_0.dirty) {
        this._query_AccordionGroup_1_0.reset([this._AccordionGroup_3_3.context]);
        this._Accordion_1_3.context.groups = this._query_AccordionGroup_1_0;
        this._query_AccordionGroup_1_0.notifyOnChanges();
      }
      if (this._query_MdTab_11_0.dirty) {
        this._query_MdTab_11_0.reset([
          this._MdTab_13_6.context,
          this._vc_18.mapNestedViews(View_ContactsWidgetContainer1,(nestedView:View_ContactsWidgetContainer1):any => {
            return [nestedView._MdTab_0_6.context];
          })
        ]
        );
        this._MdTabGroup_11_4.context._tabs = this._query_MdTab_11_0;
        this._query_MdTab_11_0.notifyOnChanges();
      }
      this.debug(11,8,12);
      this._MdTabGroup_11_4.context.ngAfterContentChecked();
      this.debug(1,1,4);
      if ((this.numberOfChecks === 0)) { this._Accordion_1_3.context.ngAfterContentInit(); }
    }
    this._MdTabGroup_11_4.checkHost(this,this.compView_11,this._el_11,throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_3.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
    this.compView_11.internalDetectChanges(throwOnChange);
    this.compView_13.internalDetectChanges(throwOnChange);
    this.compView_15.internalDetectChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(11,8,12);
      this._MdTabGroup_11_4.context.ngAfterViewChecked();
    }
  }
  destroyInternal():void {
    this._vc_13.destroyNestedViews();
    this._vc_18.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_3.destroy();
    this.compView_5.destroy();
    this.compView_11.destroy();
    this.compView_13.destroy();
    this.compView_15.destroy();
    this.debug(5,4,12);
    this._AddContactTabComponent_15_3.ngOnDestroy();
    this.debug(15,10,20);
    this.debug(13,9,16);
    this.debug(18,12,16);
    this._MdTabGroup_11_4.ngOnDestroy();
    this.debug(11,8,12);
    this._AccordionGroup_3_3.ngOnDestroy();
    this.debug(3,3,8);
    this._Accordion_1_3.ngOnDestroy();
    this.debug(1,1,4);
    this._pipe_async_0.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_21,ctx);
    }
    if (((nodeIndex == 3) && (ngContentIndex == 0))) { cb(this._el_5,ctx); }
    if (((nodeIndex == 3) && (ngContentIndex == 1))) {
      cb(this._text_4,ctx);
      cb(this._text_10,ctx);
      cb(this._el_11,ctx);
      cb(this._text_20,ctx);
    }
    if (((nodeIndex == 5) && (ngContentIndex == 0))) {
      cb(this._text_6,ctx);
      cb(this._el_7,ctx);
      cb(this._text_9,ctx);
    }
    if (((nodeIndex == 13) && (ngContentIndex == 0))) {
      cb(this._text_14,ctx);
      cb(this._el_15,ctx);
      cb(this._text_16,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 18)) { return new View_ContactsWidgetContainer1(this.viewUtils,this,18,this._anchor_18,this._vc_18); }
    return (null as any);
  }
  handleEvent_15(eventName:string,$event:any):boolean {
    this.debug(15,10,20);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'addContact')) {
      const pd_sub_0:any = ((<any>this.context.onAddContact($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}