/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './index';
import * as import2 from '@angular/forms/src/directives';
import * as import3 from '@angular/forms/src/form_providers';
import * as import4 from '@angular/router/src/router_module';
import * as import5 from '@angular/common/src/common_module';
import * as import6 from '@angular/http/src/http_module';
import * as import7 from '@angular/material/core/compatibility/compatibility';
import * as import8 from '@angular/material/core/ripple/ripple';
import * as import9 from '@angular/material/core/option/option';
import * as import10 from '@angular/material/core/portal/portal-directives';
import * as import11 from '@angular/material/core/overlay/overlay-directives';
import * as import12 from '@angular/material/autocomplete/index';
import * as import13 from '@angular/material/button/button';
import * as import14 from '@angular/material/button-toggle/button-toggle';
import * as import15 from '@angular/material/card/card';
import * as import16 from '@angular/material/chips/chip-list';
import * as import17 from '@angular/material/checkbox/checkbox';
import * as import18 from '@angular/material/core/platform/index';
import * as import19 from '@angular/material/core/a11y/index';
import * as import20 from '@angular/material/dialog/index';
import * as import21 from '@angular/material/core/line/line';
import * as import22 from '@angular/material/grid-list/grid-list';
import * as import23 from '@angular/material/icon/icon';
import * as import24 from '@angular/material/input/index';
import * as import25 from '@angular/material/list/list';
import * as import26 from '@angular/material/menu/menu';
import * as import27 from '@angular/material/progress-bar/progress-bar';
import * as import28 from '@angular/material/progress-spinner/progress-spinner';
import * as import29 from '@angular/material/radio/radio';
import * as import30 from '@angular/material/select/index';
import * as import31 from '@angular/material/sidenav/sidenav';
import * as import32 from '@angular/material/slider/slider';
import * as import33 from '@angular/material/slide-toggle/slide-toggle';
import * as import34 from '@angular/material/snack-bar/index';
import * as import35 from '@angular/material/core/observe-content/observe-content';
import * as import36 from '@angular/material/tabs/tab-group';
import * as import37 from '@angular/material/toolbar/toolbar';
import * as import38 from '@angular/material/tooltip/tooltip';
import * as import39 from '@angular/material/core/rtl/dir';
import * as import40 from '@angular/material/core/style/index';
import * as import41 from '@angular/material/core/projection/projection';
import * as import42 from '@angular/material/module';
import * as import43 from '@angular/flex-layout/media-query/_module';
import * as import44 from '@angular/flex-layout/flexbox/_module';
import * as import45 from '../common/index';
import * as import46 from '@agm/core/core.module';
import * as import47 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import48 from '@angular/forms/src/form_builder';
import * as import49 from '@angular/common/src/localization';
import * as import50 from '@angular/http/src/backends/browser_xhr';
import * as import51 from '@angular/http/src/base_response_options';
import * as import52 from '@angular/http/src/backends/xhr_backend';
import * as import53 from '@angular/http/src/base_request_options';
import * as import54 from '@angular/material/core/overlay/position/overlay-position-builder';
import * as import55 from '@angular/material/core/overlay/overlay';
import * as import56 from '@angular/material/core/platform/platform';
import * as import57 from '@angular/material/core/a11y/interactivity-checker';
import * as import58 from '@angular/material/dialog/dialog';
import * as import59 from '@angular/material/core/gestures/gesture-config';
import * as import60 from '@angular/material/snack-bar/snack-bar';
import * as import61 from '@angular/flex-layout/media-query/match-media';
import * as import62 from '@angular/flex-layout/media-query/breakpoints/break-point-registry';
import * as import63 from '@angular/flex-layout/media-query/media-monitor';
import * as import64 from '@angular/flex-layout/media-query/observable-media-service';
import * as import65 from '../common/common.sandbox';
import * as import66 from '../common/authenticated.guard';
import * as import67 from '../common/realtime';
import * as import68 from '@agm/core/utils/browser-globals';
import * as import69 from '@agm/core/services/maps-api-loader/lazy-maps-api-loader';
import * as import70 from './services/addresses.service';
import * as import71 from './services/googlemaps.service';
import * as import72 from './addresses.sandbox';
import * as import73 from '@angular/core/src/di/injector';
import * as import74 from '../../node_modules/@angular/material/dialog/dialog-container.ngfactory';
import * as import75 from '../../node_modules/@angular/material/snack-bar/snack-bar-container.ngfactory';
import * as import76 from '../../node_modules/@angular/material/snack-bar/simple-snack-bar.ngfactory';
import * as import77 from '../../node_modules/@angular/material/tooltip/tooltip.ngfactory';
import * as import78 from '@angular/core/src/i18n/tokens';
import * as import79 from '@angular/material/core/overlay/scroll/scroll-dispatcher';
import * as import80 from '@angular/material/core/overlay/position/viewport-ruler';
import * as import81 from '@angular/material/core/overlay/overlay-container';
import * as import82 from '@angular/core/src/application_ref';
import * as import83 from '@angular/core/src/zone/ng_zone';
import * as import84 from '@angular/material/core/coordination/unique-selection-dispatcher';
import * as import85 from '@angular/material/core/a11y/live-announcer';
import * as import86 from '@angular/material/icon/icon-registry';
import * as import87 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import88 from '@angular/material/core/style/focus-classes';
import * as import89 from '@ngrx/store/src/store';
import * as import90 from '@angular/router/src/router';
import * as import91 from '@angular/http/src/interfaces';
import * as import92 from '@angular/http/src/http';
import * as import93 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import94 from '@angular/flex-layout/media-query/breakpoints/break-points';
import * as import95 from '@agm/core/services/maps-api-loader/maps-api-loader';
class AddressesModuleInjector extends import0.NgModuleInjector<import1.AddressesModule> {
  _InternalFormsSharedModule_0:import2.InternalFormsSharedModule;
  _FormsModule_1:import3.FormsModule;
  _ReactiveFormsModule_2:import3.ReactiveFormsModule;
  _RouterModule_3:import4.RouterModule;
  _CommonModule_4:import5.CommonModule;
  _HttpModule_5:import6.HttpModule;
  _CompatibilityModule_6:import7.CompatibilityModule;
  _MdRippleModule_7:import8.MdRippleModule;
  _MdOptionModule_8:import9.MdOptionModule;
  _PortalModule_9:import10.PortalModule;
  _OverlayModule_10:import11.OverlayModule;
  _MdAutocompleteModule_11:import12.MdAutocompleteModule;
  _MdButtonModule_12:import13.MdButtonModule;
  _MdButtonToggleModule_13:import14.MdButtonToggleModule;
  _MdCardModule_14:import15.MdCardModule;
  _MdChipsModule_15:import16.MdChipsModule;
  _MdCheckboxModule_16:import17.MdCheckboxModule;
  _PlatformModule_17:import18.PlatformModule;
  _A11yModule_18:import19.A11yModule;
  _MdDialogModule_19:import20.MdDialogModule;
  _MdLineModule_20:import21.MdLineModule;
  _MdGridListModule_21:import22.MdGridListModule;
  _MdIconModule_22:import23.MdIconModule;
  _MdInputModule_23:import24.MdInputModule;
  _MdListModule_24:import25.MdListModule;
  _MdMenuModule_25:import26.MdMenuModule;
  _MdProgressBarModule_26:import27.MdProgressBarModule;
  _MdProgressSpinnerModule_27:import28.MdProgressSpinnerModule;
  _MdRadioModule_28:import29.MdRadioModule;
  _MdSelectModule_29:import30.MdSelectModule;
  _MdSidenavModule_30:import31.MdSidenavModule;
  _MdSliderModule_31:import32.MdSliderModule;
  _MdSlideToggleModule_32:import33.MdSlideToggleModule;
  _MdSnackBarModule_33:import34.MdSnackBarModule;
  _ObserveContentModule_34:import35.ObserveContentModule;
  _MdTabsModule_35:import36.MdTabsModule;
  _MdToolbarModule_36:import37.MdToolbarModule;
  _MdTooltipModule_37:import38.MdTooltipModule;
  _RtlModule_38:import39.RtlModule;
  _StyleModule_39:import40.StyleModule;
  _ProjectionModule_40:import41.ProjectionModule;
  _MaterialModule_41:import42.MaterialModule;
  _MediaQueriesModule_42:import43.MediaQueriesModule;
  _FlexLayoutModule_43:import44.FlexLayoutModule;
  _CommonLogicModule_44:import45.CommonLogicModule;
  _AgmCoreModule_45:import46.AgmCoreModule;
  _AddressesModule_46:import1.AddressesModule;
  __RadioControlRegistry_47:import47.RadioControlRegistry;
  __FormBuilder_48:import48.FormBuilder;
  __NgLocalization_49:import49.NgLocaleLocalization;
  __BrowserXhr_50:import50.BrowserXhr;
  __ResponseOptions_51:import51.BaseResponseOptions;
  __XSRFStrategy_52:any;
  __XHRBackend_53:import52.XHRBackend;
  __RequestOptions_54:import53.BaseRequestOptions;
  __Http_55:any;
  __ScrollDispatcher_56:any;
  __ViewportRuler_57:any;
  __OverlayContainer_58:any;
  __OverlayPositionBuilder_59:import54.OverlayPositionBuilder;
  __Overlay_60:import55.Overlay;
  __UniqueSelectionDispatcher_61:any;
  __Platform_62:import56.Platform;
  __InteractivityChecker_63:import57.InteractivityChecker;
  __LiveAnnouncer_64:any;
  __MdDialog_65:import58.MdDialog;
  __MdIconRegistry_66:any;
  __HAMMER_GESTURE_CONFIG_67:import59.GestureConfig;
  __MdSnackBar_68:import60.MdSnackBar;
  __FocusOriginMonitor_69:any;
  __DomProjection_70:import41.DomProjection;
  __MatchMedia_71:import61.MatchMedia;
  __BREAKPOINTS_72:any;
  __BreakPointRegistry_73:import62.BreakPointRegistry;
  __MediaMonitor_74:import63.MediaMonitor;
  __ObservableMedia_75:import64.MediaService;
  __CommonSandbox_76:import65.CommonSandbox;
  __AuthenticatedGuard_77:import66.AuthenticatedGuard;
  __RealTime_78:import67.RealTime;
  __WindowRef_79:import68.WindowRef;
  __DocumentRef_80:import68.DocumentRef;
  __LAZY_MAPS_API_CONFIG_81:any;
  __MapsAPILoader_82:import69.LazyMapsAPILoader;
  __AddressesService_83:import70.AddressesService;
  __GoogleMapsService_84:import71.GoogleMapsService;
  __AddressesSandbox_85:import72.AddressesSandbox;
  constructor(parent:import73.Injector) {
    super(parent,[
      import74.MdDialogContainerNgFactory,
      import75.MdSnackBarContainerNgFactory,
      import76.SimpleSnackBarNgFactory,
      import77.TooltipComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _RadioControlRegistry_47():import47.RadioControlRegistry {
    if ((this.__RadioControlRegistry_47 == null)) { (this.__RadioControlRegistry_47 = new import47.RadioControlRegistry()); }
    return this.__RadioControlRegistry_47;
  }
  get _FormBuilder_48():import48.FormBuilder {
    if ((this.__FormBuilder_48 == null)) { (this.__FormBuilder_48 = new import48.FormBuilder()); }
    return this.__FormBuilder_48;
  }
  get _NgLocalization_49():import49.NgLocaleLocalization {
    if ((this.__NgLocalization_49 == null)) { (this.__NgLocalization_49 = new import49.NgLocaleLocalization(this.parent.get(import78.LOCALE_ID))); }
    return this.__NgLocalization_49;
  }
  get _BrowserXhr_50():import50.BrowserXhr {
    if ((this.__BrowserXhr_50 == null)) { (this.__BrowserXhr_50 = new import50.BrowserXhr()); }
    return this.__BrowserXhr_50;
  }
  get _ResponseOptions_51():import51.BaseResponseOptions {
    if ((this.__ResponseOptions_51 == null)) { (this.__ResponseOptions_51 = new import51.BaseResponseOptions()); }
    return this.__ResponseOptions_51;
  }
  get _XSRFStrategy_52():any {
    if ((this.__XSRFStrategy_52 == null)) { (this.__XSRFStrategy_52 = import6._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_52;
  }
  get _XHRBackend_53():import52.XHRBackend {
    if ((this.__XHRBackend_53 == null)) { (this.__XHRBackend_53 = new import52.XHRBackend(this._BrowserXhr_50,this._ResponseOptions_51,this._XSRFStrategy_52)); }
    return this.__XHRBackend_53;
  }
  get _RequestOptions_54():import53.BaseRequestOptions {
    if ((this.__RequestOptions_54 == null)) { (this.__RequestOptions_54 = new import53.BaseRequestOptions()); }
    return this.__RequestOptions_54;
  }
  get _Http_55():any {
    if ((this.__Http_55 == null)) { (this.__Http_55 = import6.httpFactory(this._XHRBackend_53,this._RequestOptions_54)); }
    return this.__Http_55;
  }
  get _ScrollDispatcher_56():any {
    if ((this.__ScrollDispatcher_56 == null)) { (this.__ScrollDispatcher_56 = import79.SCROLL_DISPATCHER_PROVIDER_FACTORY(this.parent.get(import79.ScrollDispatcher,(null as any)))); }
    return this.__ScrollDispatcher_56;
  }
  get _ViewportRuler_57():any {
    if ((this.__ViewportRuler_57 == null)) { (this.__ViewportRuler_57 = import80.VIEWPORT_RULER_PROVIDER_FACTORY(this.parent.get(import80.ViewportRuler,(null as any)),this._ScrollDispatcher_56)); }
    return this.__ViewportRuler_57;
  }
  get _OverlayContainer_58():any {
    if ((this.__OverlayContainer_58 == null)) { (this.__OverlayContainer_58 = import81.OVERLAY_CONTAINER_PROVIDER_FACTORY(this.parent.get(import81.OverlayContainer,(null as any)))); }
    return this.__OverlayContainer_58;
  }
  get _OverlayPositionBuilder_59():import54.OverlayPositionBuilder {
    if ((this.__OverlayPositionBuilder_59 == null)) { (this.__OverlayPositionBuilder_59 = new import54.OverlayPositionBuilder(this._ViewportRuler_57)); }
    return this.__OverlayPositionBuilder_59;
  }
  get _Overlay_60():import55.Overlay {
    if ((this.__Overlay_60 == null)) { (this.__Overlay_60 = new import55.Overlay(this._OverlayContainer_58,this,this._OverlayPositionBuilder_59,this.parent.get(import82.ApplicationRef),this,this.parent.get(import83.NgZone))); }
    return this.__Overlay_60;
  }
  get _UniqueSelectionDispatcher_61():any {
    if ((this.__UniqueSelectionDispatcher_61 == null)) { (this.__UniqueSelectionDispatcher_61 = import84.UNIQUE_SELECTION_DISPATCHER_PROVIDER_FACTORY(this.parent.get(import84.UniqueSelectionDispatcher,(null as any)))); }
    return this.__UniqueSelectionDispatcher_61;
  }
  get _Platform_62():import56.Platform {
    if ((this.__Platform_62 == null)) { (this.__Platform_62 = new import56.Platform()); }
    return this.__Platform_62;
  }
  get _InteractivityChecker_63():import57.InteractivityChecker {
    if ((this.__InteractivityChecker_63 == null)) { (this.__InteractivityChecker_63 = new import57.InteractivityChecker(this._Platform_62)); }
    return this.__InteractivityChecker_63;
  }
  get _LiveAnnouncer_64():any {
    if ((this.__LiveAnnouncer_64 == null)) { (this.__LiveAnnouncer_64 = import85.LIVE_ANNOUNCER_PROVIDER_FACTORY(this.parent.get(import85.LiveAnnouncer,(null as any)),this.parent.get(import85.LIVE_ANNOUNCER_ELEMENT_TOKEN,(null as any)))); }
    return this.__LiveAnnouncer_64;
  }
  get _MdDialog_65():import58.MdDialog {
    if ((this.__MdDialog_65 == null)) { (this.__MdDialog_65 = new import58.MdDialog(this._Overlay_60,this,this.parent.get(import58.MdDialog,(null as any)))); }
    return this.__MdDialog_65;
  }
  get _MdIconRegistry_66():any {
    if ((this.__MdIconRegistry_66 == null)) { (this.__MdIconRegistry_66 = import23.ICON_REGISTRY_PROVIDER_FACTORY(this.parent.get(import86.MdIconRegistry,(null as any)),this._Http_55,this.parent.get(import87.DomSanitizer))); }
    return this.__MdIconRegistry_66;
  }
  get _HAMMER_GESTURE_CONFIG_67():import59.GestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_67 == null)) { (this.__HAMMER_GESTURE_CONFIG_67 = new import59.GestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_67;
  }
  get _MdSnackBar_68():import60.MdSnackBar {
    if ((this.__MdSnackBar_68 == null)) { (this.__MdSnackBar_68 = new import60.MdSnackBar(this._Overlay_60,this._LiveAnnouncer_64,this.parent.get(import60.MdSnackBar,(null as any)))); }
    return this.__MdSnackBar_68;
  }
  get _FocusOriginMonitor_69():any {
    if ((this.__FocusOriginMonitor_69 == null)) { (this.__FocusOriginMonitor_69 = import88.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY(this.parent.get(import88.FocusOriginMonitor,(null as any)))); }
    return this.__FocusOriginMonitor_69;
  }
  get _DomProjection_70():import41.DomProjection {
    if ((this.__DomProjection_70 == null)) { (this.__DomProjection_70 = new import41.DomProjection()); }
    return this.__DomProjection_70;
  }
  get _MatchMedia_71():import61.MatchMedia {
    if ((this.__MatchMedia_71 == null)) { (this.__MatchMedia_71 = new import61.MatchMedia(this.parent.get(import83.NgZone))); }
    return this.__MatchMedia_71;
  }
  get _BREAKPOINTS_72():any {
    if ((this.__BREAKPOINTS_72 == null)) { (this.__BREAKPOINTS_72 = [
      {
        alias: 'xs',
        suffix: 'Xs',
        overlapping: false,
        mediaQuery: 'screen and (max-width: 599px)'
      }
      ,
      {
        alias: 'gt-xs',
        suffix: 'GtXs',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 600px)'
      }
      ,
      {
        alias: 'sm',
        suffix: 'Sm',
        overlapping: false,
        mediaQuery: 'screen and (min-width: 600px) and (max-width: 959px)'
      }
      ,
      {
        alias: 'gt-sm',
        suffix: 'GtSm',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 960px)'
      }
      ,
      {
        alias: 'md',
        suffix: 'Md',
        overlapping: false,
        mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279px)'
      }
      ,
      {
        alias: 'gt-md',
        suffix: 'GtMd',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1280px)'
      }
      ,
      {
        alias: 'lg',
        suffix: 'Lg',
        overlapping: false,
        mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919px)'
      }
      ,
      {
        alias: 'gt-lg',
        suffix: 'GtLg',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1920px)'
      }
      ,
      {
        alias: 'xl',
        suffix: 'Xl',
        overlapping: false,
        mediaQuery: 'screen and (min-width: 1920px) and (max-width: 5000px)'
      }

    ]
    ); }
    return this.__BREAKPOINTS_72;
  }
  get _BreakPointRegistry_73():import62.BreakPointRegistry {
    if ((this.__BreakPointRegistry_73 == null)) { (this.__BreakPointRegistry_73 = new import62.BreakPointRegistry(this._BREAKPOINTS_72)); }
    return this.__BreakPointRegistry_73;
  }
  get _MediaMonitor_74():import63.MediaMonitor {
    if ((this.__MediaMonitor_74 == null)) { (this.__MediaMonitor_74 = new import63.MediaMonitor(this._BreakPointRegistry_73,this._MatchMedia_71)); }
    return this.__MediaMonitor_74;
  }
  get _ObservableMedia_75():import64.MediaService {
    if ((this.__ObservableMedia_75 == null)) { (this.__ObservableMedia_75 = new import64.MediaService(this._MatchMedia_71,this._BreakPointRegistry_73)); }
    return this.__ObservableMedia_75;
  }
  get _CommonSandbox_76():import65.CommonSandbox {
    if ((this.__CommonSandbox_76 == null)) { (this.__CommonSandbox_76 = new import65.CommonSandbox(this.parent.get(import89.Store))); }
    return this.__CommonSandbox_76;
  }
  get _AuthenticatedGuard_77():import66.AuthenticatedGuard {
    if ((this.__AuthenticatedGuard_77 == null)) { (this.__AuthenticatedGuard_77 = new import66.AuthenticatedGuard(this.parent.get(import90.Router))); }
    return this.__AuthenticatedGuard_77;
  }
  get _RealTime_78():import67.RealTime {
    if ((this.__RealTime_78 == null)) { (this.__RealTime_78 = new import67.RealTime(this.parent.get(import89.Store))); }
    return this.__RealTime_78;
  }
  get _WindowRef_79():import68.WindowRef {
    if ((this.__WindowRef_79 == null)) { (this.__WindowRef_79 = new import68.WindowRef()); }
    return this.__WindowRef_79;
  }
  get _DocumentRef_80():import68.DocumentRef {
    if ((this.__DocumentRef_80 == null)) { (this.__DocumentRef_80 = new import68.DocumentRef()); }
    return this.__DocumentRef_80;
  }
  get _LAZY_MAPS_API_CONFIG_81():any {
    if ((this.__LAZY_MAPS_API_CONFIG_81 == null)) { (this.__LAZY_MAPS_API_CONFIG_81 = {apiKey: 'AIzaSyAqkrkJ74JFbCXlZO0l7xm_1uHlJebs7B4'}); }
    return this.__LAZY_MAPS_API_CONFIG_81;
  }
  get _MapsAPILoader_82():import69.LazyMapsAPILoader {
    if ((this.__MapsAPILoader_82 == null)) { (this.__MapsAPILoader_82 = new import69.LazyMapsAPILoader(this._LAZY_MAPS_API_CONFIG_81,this._WindowRef_79,this._DocumentRef_80)); }
    return this.__MapsAPILoader_82;
  }
  get _AddressesService_83():import70.AddressesService {
    if ((this.__AddressesService_83 == null)) { (this.__AddressesService_83 = new import70.AddressesService(this.parent.get(import89.Store),this._Http_55)); }
    return this.__AddressesService_83;
  }
  get _GoogleMapsService_84():import71.GoogleMapsService {
    if ((this.__GoogleMapsService_84 == null)) { (this.__GoogleMapsService_84 = new import71.GoogleMapsService(this._Http_55)); }
    return this.__GoogleMapsService_84;
  }
  get _AddressesSandbox_85():import72.AddressesSandbox {
    if ((this.__AddressesSandbox_85 == null)) { (this.__AddressesSandbox_85 = new import72.AddressesSandbox(this.parent.get(import89.Store),this._AddressesService_83,this._GoogleMapsService_84)); }
    return this.__AddressesSandbox_85;
  }
  createInternal():import1.AddressesModule {
    this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
    this._FormsModule_1 = new import3.FormsModule();
    this._ReactiveFormsModule_2 = new import3.ReactiveFormsModule();
    this._RouterModule_3 = new import4.RouterModule(this.parent.get(import4.ROUTER_FORROOT_GUARD,(null as any)));
    this._CommonModule_4 = new import5.CommonModule();
    this._HttpModule_5 = new import6.HttpModule();
    this._CompatibilityModule_6 = new import7.CompatibilityModule();
    this._MdRippleModule_7 = new import8.MdRippleModule();
    this._MdOptionModule_8 = new import9.MdOptionModule();
    this._PortalModule_9 = new import10.PortalModule();
    this._OverlayModule_10 = new import11.OverlayModule();
    this._MdAutocompleteModule_11 = new import12.MdAutocompleteModule();
    this._MdButtonModule_12 = new import13.MdButtonModule();
    this._MdButtonToggleModule_13 = new import14.MdButtonToggleModule();
    this._MdCardModule_14 = new import15.MdCardModule();
    this._MdChipsModule_15 = new import16.MdChipsModule();
    this._MdCheckboxModule_16 = new import17.MdCheckboxModule();
    this._PlatformModule_17 = new import18.PlatformModule();
    this._A11yModule_18 = new import19.A11yModule();
    this._MdDialogModule_19 = new import20.MdDialogModule();
    this._MdLineModule_20 = new import21.MdLineModule();
    this._MdGridListModule_21 = new import22.MdGridListModule();
    this._MdIconModule_22 = new import23.MdIconModule();
    this._MdInputModule_23 = new import24.MdInputModule();
    this._MdListModule_24 = new import25.MdListModule();
    this._MdMenuModule_25 = new import26.MdMenuModule();
    this._MdProgressBarModule_26 = new import27.MdProgressBarModule();
    this._MdProgressSpinnerModule_27 = new import28.MdProgressSpinnerModule();
    this._MdRadioModule_28 = new import29.MdRadioModule();
    this._MdSelectModule_29 = new import30.MdSelectModule();
    this._MdSidenavModule_30 = new import31.MdSidenavModule();
    this._MdSliderModule_31 = new import32.MdSliderModule();
    this._MdSlideToggleModule_32 = new import33.MdSlideToggleModule();
    this._MdSnackBarModule_33 = new import34.MdSnackBarModule();
    this._ObserveContentModule_34 = new import35.ObserveContentModule();
    this._MdTabsModule_35 = new import36.MdTabsModule();
    this._MdToolbarModule_36 = new import37.MdToolbarModule();
    this._MdTooltipModule_37 = new import38.MdTooltipModule();
    this._RtlModule_38 = new import39.RtlModule();
    this._StyleModule_39 = new import40.StyleModule();
    this._ProjectionModule_40 = new import41.ProjectionModule();
    this._MaterialModule_41 = new import42.MaterialModule();
    this._MediaQueriesModule_42 = new import43.MediaQueriesModule();
    this._FlexLayoutModule_43 = new import44.FlexLayoutModule();
    this._CommonLogicModule_44 = new import45.CommonLogicModule();
    this._AgmCoreModule_45 = new import46.AgmCoreModule();
    this._AddressesModule_46 = new import1.AddressesModule();
    return this._AddressesModule_46;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_0; }
    if ((token === import3.FormsModule)) { return this._FormsModule_1; }
    if ((token === import3.ReactiveFormsModule)) { return this._ReactiveFormsModule_2; }
    if ((token === import4.RouterModule)) { return this._RouterModule_3; }
    if ((token === import5.CommonModule)) { return this._CommonModule_4; }
    if ((token === import6.HttpModule)) { return this._HttpModule_5; }
    if ((token === import7.CompatibilityModule)) { return this._CompatibilityModule_6; }
    if ((token === import8.MdRippleModule)) { return this._MdRippleModule_7; }
    if ((token === import9.MdOptionModule)) { return this._MdOptionModule_8; }
    if ((token === import10.PortalModule)) { return this._PortalModule_9; }
    if ((token === import11.OverlayModule)) { return this._OverlayModule_10; }
    if ((token === import12.MdAutocompleteModule)) { return this._MdAutocompleteModule_11; }
    if ((token === import13.MdButtonModule)) { return this._MdButtonModule_12; }
    if ((token === import14.MdButtonToggleModule)) { return this._MdButtonToggleModule_13; }
    if ((token === import15.MdCardModule)) { return this._MdCardModule_14; }
    if ((token === import16.MdChipsModule)) { return this._MdChipsModule_15; }
    if ((token === import17.MdCheckboxModule)) { return this._MdCheckboxModule_16; }
    if ((token === import18.PlatformModule)) { return this._PlatformModule_17; }
    if ((token === import19.A11yModule)) { return this._A11yModule_18; }
    if ((token === import20.MdDialogModule)) { return this._MdDialogModule_19; }
    if ((token === import21.MdLineModule)) { return this._MdLineModule_20; }
    if ((token === import22.MdGridListModule)) { return this._MdGridListModule_21; }
    if ((token === import23.MdIconModule)) { return this._MdIconModule_22; }
    if ((token === import24.MdInputModule)) { return this._MdInputModule_23; }
    if ((token === import25.MdListModule)) { return this._MdListModule_24; }
    if ((token === import26.MdMenuModule)) { return this._MdMenuModule_25; }
    if ((token === import27.MdProgressBarModule)) { return this._MdProgressBarModule_26; }
    if ((token === import28.MdProgressSpinnerModule)) { return this._MdProgressSpinnerModule_27; }
    if ((token === import29.MdRadioModule)) { return this._MdRadioModule_28; }
    if ((token === import30.MdSelectModule)) { return this._MdSelectModule_29; }
    if ((token === import31.MdSidenavModule)) { return this._MdSidenavModule_30; }
    if ((token === import32.MdSliderModule)) { return this._MdSliderModule_31; }
    if ((token === import33.MdSlideToggleModule)) { return this._MdSlideToggleModule_32; }
    if ((token === import34.MdSnackBarModule)) { return this._MdSnackBarModule_33; }
    if ((token === import35.ObserveContentModule)) { return this._ObserveContentModule_34; }
    if ((token === import36.MdTabsModule)) { return this._MdTabsModule_35; }
    if ((token === import37.MdToolbarModule)) { return this._MdToolbarModule_36; }
    if ((token === import38.MdTooltipModule)) { return this._MdTooltipModule_37; }
    if ((token === import39.RtlModule)) { return this._RtlModule_38; }
    if ((token === import40.StyleModule)) { return this._StyleModule_39; }
    if ((token === import41.ProjectionModule)) { return this._ProjectionModule_40; }
    if ((token === import42.MaterialModule)) { return this._MaterialModule_41; }
    if ((token === import43.MediaQueriesModule)) { return this._MediaQueriesModule_42; }
    if ((token === import44.FlexLayoutModule)) { return this._FlexLayoutModule_43; }
    if ((token === import45.CommonLogicModule)) { return this._CommonLogicModule_44; }
    if ((token === import46.AgmCoreModule)) { return this._AgmCoreModule_45; }
    if ((token === import1.AddressesModule)) { return this._AddressesModule_46; }
    if ((token === import47.RadioControlRegistry)) { return this._RadioControlRegistry_47; }
    if ((token === import48.FormBuilder)) { return this._FormBuilder_48; }
    if ((token === import49.NgLocalization)) { return this._NgLocalization_49; }
    if ((token === import50.BrowserXhr)) { return this._BrowserXhr_50; }
    if ((token === import51.ResponseOptions)) { return this._ResponseOptions_51; }
    if ((token === import91.XSRFStrategy)) { return this._XSRFStrategy_52; }
    if ((token === import52.XHRBackend)) { return this._XHRBackend_53; }
    if ((token === import53.RequestOptions)) { return this._RequestOptions_54; }
    if ((token === import92.Http)) { return this._Http_55; }
    if ((token === import79.ScrollDispatcher)) { return this._ScrollDispatcher_56; }
    if ((token === import80.ViewportRuler)) { return this._ViewportRuler_57; }
    if ((token === import81.OverlayContainer)) { return this._OverlayContainer_58; }
    if ((token === import54.OverlayPositionBuilder)) { return this._OverlayPositionBuilder_59; }
    if ((token === import55.Overlay)) { return this._Overlay_60; }
    if ((token === import84.UniqueSelectionDispatcher)) { return this._UniqueSelectionDispatcher_61; }
    if ((token === import56.Platform)) { return this._Platform_62; }
    if ((token === import57.InteractivityChecker)) { return this._InteractivityChecker_63; }
    if ((token === import85.LiveAnnouncer)) { return this._LiveAnnouncer_64; }
    if ((token === import58.MdDialog)) { return this._MdDialog_65; }
    if ((token === import86.MdIconRegistry)) { return this._MdIconRegistry_66; }
    if ((token === import93.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_67; }
    if ((token === import60.MdSnackBar)) { return this._MdSnackBar_68; }
    if ((token === import88.FocusOriginMonitor)) { return this._FocusOriginMonitor_69; }
    if ((token === import41.DomProjection)) { return this._DomProjection_70; }
    if ((token === import61.MatchMedia)) { return this._MatchMedia_71; }
    if ((token === import94.BREAKPOINTS)) { return this._BREAKPOINTS_72; }
    if ((token === import62.BreakPointRegistry)) { return this._BreakPointRegistry_73; }
    if ((token === import63.MediaMonitor)) { return this._MediaMonitor_74; }
    if ((token === import64.ObservableMedia)) { return this._ObservableMedia_75; }
    if ((token === import65.CommonSandbox)) { return this._CommonSandbox_76; }
    if ((token === import66.AuthenticatedGuard)) { return this._AuthenticatedGuard_77; }
    if ((token === import67.RealTime)) { return this._RealTime_78; }
    if ((token === import68.WindowRef)) { return this._WindowRef_79; }
    if ((token === import68.DocumentRef)) { return this._DocumentRef_80; }
    if ((token === import69.LAZY_MAPS_API_CONFIG)) { return this._LAZY_MAPS_API_CONFIG_81; }
    if ((token === import95.MapsAPILoader)) { return this._MapsAPILoader_82; }
    if ((token === import70.AddressesService)) { return this._AddressesService_83; }
    if ((token === import71.GoogleMapsService)) { return this._GoogleMapsService_84; }
    if ((token === import72.AddressesSandbox)) { return this._AddressesSandbox_85; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const AddressesModuleNgFactory:import0.NgModuleFactory<import1.AddressesModule> = new import0.NgModuleFactory(AddressesModuleInjector,import1.AddressesModule);