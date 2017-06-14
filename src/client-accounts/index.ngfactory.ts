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
import * as import47 from '../addresses/index';
import * as import48 from '../contacts/index';
import * as import49 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import50 from '@angular/forms/src/form_builder';
import * as import51 from '@angular/common/src/localization';
import * as import52 from '@angular/http/src/backends/browser_xhr';
import * as import53 from '@angular/http/src/base_response_options';
import * as import54 from '@angular/http/src/backends/xhr_backend';
import * as import55 from '@angular/http/src/base_request_options';
import * as import56 from '@angular/material/core/overlay/position/overlay-position-builder';
import * as import57 from '@angular/material/core/overlay/overlay';
import * as import58 from '@angular/material/core/platform/platform';
import * as import59 from '@angular/material/core/a11y/interactivity-checker';
import * as import60 from '@angular/material/dialog/dialog';
import * as import61 from '@angular/material/core/gestures/gesture-config';
import * as import62 from '@angular/material/snack-bar/snack-bar';
import * as import63 from '@angular/flex-layout/media-query/match-media';
import * as import64 from '@angular/flex-layout/media-query/breakpoints/break-point-registry';
import * as import65 from '@angular/flex-layout/media-query/media-monitor';
import * as import66 from '@angular/flex-layout/media-query/observable-media-service';
import * as import67 from '../common/common.sandbox';
import * as import68 from '../common/authenticated.guard';
import * as import69 from '../common/realtime';
import * as import70 from '@agm/core/utils/browser-globals';
import * as import71 from '@agm/core/services/maps-api-loader/lazy-maps-api-loader';
import * as import72 from '../addresses/services/addresses.service';
import * as import73 from '../addresses/services/googlemaps.service';
import * as import74 from '../addresses/addresses.sandbox';
import * as import75 from '../contacts/services/contacts.service';
import * as import76 from '../contacts/contacts.sandbox';
import * as import77 from './services/client-accounts.service';
import * as import78 from './client-accounts.sandbox';
import * as import79 from '@angular/core/src/di/injector';
import * as import80 from '../../node_modules/@angular/material/dialog/dialog-container.ngfactory';
import * as import81 from '../../node_modules/@angular/material/snack-bar/snack-bar-container.ngfactory';
import * as import82 from '../../node_modules/@angular/material/snack-bar/simple-snack-bar.ngfactory';
import * as import83 from '../../node_modules/@angular/material/tooltip/tooltip.ngfactory';
import * as import84 from '@angular/core/src/i18n/tokens';
import * as import85 from '@angular/material/core/overlay/scroll/scroll-dispatcher';
import * as import86 from '@angular/material/core/overlay/position/viewport-ruler';
import * as import87 from '@angular/material/core/overlay/overlay-container';
import * as import88 from '@angular/core/src/application_ref';
import * as import89 from '@angular/core/src/zone/ng_zone';
import * as import90 from '@angular/material/core/coordination/unique-selection-dispatcher';
import * as import91 from '@angular/material/core/a11y/live-announcer';
import * as import92 from '@angular/material/icon/icon-registry';
import * as import93 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import94 from '@angular/material/core/style/focus-classes';
import * as import95 from '@ngrx/store/src/store';
import * as import96 from '@angular/router/src/router';
import * as import97 from '@angular/http/src/interfaces';
import * as import98 from '@angular/http/src/http';
import * as import99 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import100 from '@angular/flex-layout/media-query/breakpoints/break-points';
import * as import101 from '@agm/core/services/maps-api-loader/maps-api-loader';
class ClientAccountsModuleInjector extends import0.NgModuleInjector<import1.ClientAccountsModule> {
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
  _AddressesModule_46:import47.AddressesModule;
  _ContactsModule_47:import48.ContactsModule;
  _ClientAccountsModule_48:import1.ClientAccountsModule;
  __RadioControlRegistry_49:import49.RadioControlRegistry;
  __FormBuilder_50:import50.FormBuilder;
  __NgLocalization_51:import51.NgLocaleLocalization;
  __BrowserXhr_52:import52.BrowserXhr;
  __ResponseOptions_53:import53.BaseResponseOptions;
  __XSRFStrategy_54:any;
  __XHRBackend_55:import54.XHRBackend;
  __RequestOptions_56:import55.BaseRequestOptions;
  __Http_57:any;
  __ScrollDispatcher_58:any;
  __ViewportRuler_59:any;
  __OverlayContainer_60:any;
  __OverlayPositionBuilder_61:import56.OverlayPositionBuilder;
  __Overlay_62:import57.Overlay;
  __UniqueSelectionDispatcher_63:any;
  __Platform_64:import58.Platform;
  __InteractivityChecker_65:import59.InteractivityChecker;
  __LiveAnnouncer_66:any;
  __MdDialog_67:import60.MdDialog;
  __MdIconRegistry_68:any;
  __HAMMER_GESTURE_CONFIG_69:import61.GestureConfig;
  __MdSnackBar_70:import62.MdSnackBar;
  __FocusOriginMonitor_71:any;
  __DomProjection_72:import41.DomProjection;
  __MatchMedia_73:import63.MatchMedia;
  __BREAKPOINTS_74:any;
  __BreakPointRegistry_75:import64.BreakPointRegistry;
  __MediaMonitor_76:import65.MediaMonitor;
  __ObservableMedia_77:import66.MediaService;
  __CommonSandbox_78:import67.CommonSandbox;
  __AuthenticatedGuard_79:import68.AuthenticatedGuard;
  __RealTime_80:import69.RealTime;
  __WindowRef_81:import70.WindowRef;
  __DocumentRef_82:import70.DocumentRef;
  __LAZY_MAPS_API_CONFIG_83:any;
  __MapsAPILoader_84:import71.LazyMapsAPILoader;
  __AddressesService_85:import72.AddressesService;
  __GoogleMapsService_86:import73.GoogleMapsService;
  __AddressesSandbox_87:import74.AddressesSandbox;
  __ContactsService_88:import75.ContactsService;
  __ContactsSandbox_89:import76.ContactsSandbox;
  __ClientAccountsService_90:import77.ClientAccountsService;
  __ClientAccountsSandbox_91:import78.ClientAccountsSandbox;
  constructor(parent:import79.Injector) {
    super(parent,[
      import80.MdDialogContainerNgFactory,
      import81.MdSnackBarContainerNgFactory,
      import82.SimpleSnackBarNgFactory,
      import83.TooltipComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _RadioControlRegistry_49():import49.RadioControlRegistry {
    if ((this.__RadioControlRegistry_49 == null)) { (this.__RadioControlRegistry_49 = new import49.RadioControlRegistry()); }
    return this.__RadioControlRegistry_49;
  }
  get _FormBuilder_50():import50.FormBuilder {
    if ((this.__FormBuilder_50 == null)) { (this.__FormBuilder_50 = new import50.FormBuilder()); }
    return this.__FormBuilder_50;
  }
  get _NgLocalization_51():import51.NgLocaleLocalization {
    if ((this.__NgLocalization_51 == null)) { (this.__NgLocalization_51 = new import51.NgLocaleLocalization(this.parent.get(import84.LOCALE_ID))); }
    return this.__NgLocalization_51;
  }
  get _BrowserXhr_52():import52.BrowserXhr {
    if ((this.__BrowserXhr_52 == null)) { (this.__BrowserXhr_52 = new import52.BrowserXhr()); }
    return this.__BrowserXhr_52;
  }
  get _ResponseOptions_53():import53.BaseResponseOptions {
    if ((this.__ResponseOptions_53 == null)) { (this.__ResponseOptions_53 = new import53.BaseResponseOptions()); }
    return this.__ResponseOptions_53;
  }
  get _XSRFStrategy_54():any {
    if ((this.__XSRFStrategy_54 == null)) { (this.__XSRFStrategy_54 = import6._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_54;
  }
  get _XHRBackend_55():import54.XHRBackend {
    if ((this.__XHRBackend_55 == null)) { (this.__XHRBackend_55 = new import54.XHRBackend(this._BrowserXhr_52,this._ResponseOptions_53,this._XSRFStrategy_54)); }
    return this.__XHRBackend_55;
  }
  get _RequestOptions_56():import55.BaseRequestOptions {
    if ((this.__RequestOptions_56 == null)) { (this.__RequestOptions_56 = new import55.BaseRequestOptions()); }
    return this.__RequestOptions_56;
  }
  get _Http_57():any {
    if ((this.__Http_57 == null)) { (this.__Http_57 = import6.httpFactory(this._XHRBackend_55,this._RequestOptions_56)); }
    return this.__Http_57;
  }
  get _ScrollDispatcher_58():any {
    if ((this.__ScrollDispatcher_58 == null)) { (this.__ScrollDispatcher_58 = import85.SCROLL_DISPATCHER_PROVIDER_FACTORY(this.parent.get(import85.ScrollDispatcher,(null as any)))); }
    return this.__ScrollDispatcher_58;
  }
  get _ViewportRuler_59():any {
    if ((this.__ViewportRuler_59 == null)) { (this.__ViewportRuler_59 = import86.VIEWPORT_RULER_PROVIDER_FACTORY(this.parent.get(import86.ViewportRuler,(null as any)),this._ScrollDispatcher_58)); }
    return this.__ViewportRuler_59;
  }
  get _OverlayContainer_60():any {
    if ((this.__OverlayContainer_60 == null)) { (this.__OverlayContainer_60 = import87.OVERLAY_CONTAINER_PROVIDER_FACTORY(this.parent.get(import87.OverlayContainer,(null as any)))); }
    return this.__OverlayContainer_60;
  }
  get _OverlayPositionBuilder_61():import56.OverlayPositionBuilder {
    if ((this.__OverlayPositionBuilder_61 == null)) { (this.__OverlayPositionBuilder_61 = new import56.OverlayPositionBuilder(this._ViewportRuler_59)); }
    return this.__OverlayPositionBuilder_61;
  }
  get _Overlay_62():import57.Overlay {
    if ((this.__Overlay_62 == null)) { (this.__Overlay_62 = new import57.Overlay(this._OverlayContainer_60,this,this._OverlayPositionBuilder_61,this.parent.get(import88.ApplicationRef),this,this.parent.get(import89.NgZone))); }
    return this.__Overlay_62;
  }
  get _UniqueSelectionDispatcher_63():any {
    if ((this.__UniqueSelectionDispatcher_63 == null)) { (this.__UniqueSelectionDispatcher_63 = import90.UNIQUE_SELECTION_DISPATCHER_PROVIDER_FACTORY(this.parent.get(import90.UniqueSelectionDispatcher,(null as any)))); }
    return this.__UniqueSelectionDispatcher_63;
  }
  get _Platform_64():import58.Platform {
    if ((this.__Platform_64 == null)) { (this.__Platform_64 = new import58.Platform()); }
    return this.__Platform_64;
  }
  get _InteractivityChecker_65():import59.InteractivityChecker {
    if ((this.__InteractivityChecker_65 == null)) { (this.__InteractivityChecker_65 = new import59.InteractivityChecker(this._Platform_64)); }
    return this.__InteractivityChecker_65;
  }
  get _LiveAnnouncer_66():any {
    if ((this.__LiveAnnouncer_66 == null)) { (this.__LiveAnnouncer_66 = import91.LIVE_ANNOUNCER_PROVIDER_FACTORY(this.parent.get(import91.LiveAnnouncer,(null as any)),this.parent.get(import91.LIVE_ANNOUNCER_ELEMENT_TOKEN,(null as any)))); }
    return this.__LiveAnnouncer_66;
  }
  get _MdDialog_67():import60.MdDialog {
    if ((this.__MdDialog_67 == null)) { (this.__MdDialog_67 = new import60.MdDialog(this._Overlay_62,this,this.parent.get(import60.MdDialog,(null as any)))); }
    return this.__MdDialog_67;
  }
  get _MdIconRegistry_68():any {
    if ((this.__MdIconRegistry_68 == null)) { (this.__MdIconRegistry_68 = import23.ICON_REGISTRY_PROVIDER_FACTORY(this.parent.get(import92.MdIconRegistry,(null as any)),this._Http_57,this.parent.get(import93.DomSanitizer))); }
    return this.__MdIconRegistry_68;
  }
  get _HAMMER_GESTURE_CONFIG_69():import61.GestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_69 == null)) { (this.__HAMMER_GESTURE_CONFIG_69 = new import61.GestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_69;
  }
  get _MdSnackBar_70():import62.MdSnackBar {
    if ((this.__MdSnackBar_70 == null)) { (this.__MdSnackBar_70 = new import62.MdSnackBar(this._Overlay_62,this._LiveAnnouncer_66,this.parent.get(import62.MdSnackBar,(null as any)))); }
    return this.__MdSnackBar_70;
  }
  get _FocusOriginMonitor_71():any {
    if ((this.__FocusOriginMonitor_71 == null)) { (this.__FocusOriginMonitor_71 = import94.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY(this.parent.get(import94.FocusOriginMonitor,(null as any)))); }
    return this.__FocusOriginMonitor_71;
  }
  get _DomProjection_72():import41.DomProjection {
    if ((this.__DomProjection_72 == null)) { (this.__DomProjection_72 = new import41.DomProjection()); }
    return this.__DomProjection_72;
  }
  get _MatchMedia_73():import63.MatchMedia {
    if ((this.__MatchMedia_73 == null)) { (this.__MatchMedia_73 = new import63.MatchMedia(this.parent.get(import89.NgZone))); }
    return this.__MatchMedia_73;
  }
  get _BREAKPOINTS_74():any {
    if ((this.__BREAKPOINTS_74 == null)) { (this.__BREAKPOINTS_74 = [
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
    return this.__BREAKPOINTS_74;
  }
  get _BreakPointRegistry_75():import64.BreakPointRegistry {
    if ((this.__BreakPointRegistry_75 == null)) { (this.__BreakPointRegistry_75 = new import64.BreakPointRegistry(this._BREAKPOINTS_74)); }
    return this.__BreakPointRegistry_75;
  }
  get _MediaMonitor_76():import65.MediaMonitor {
    if ((this.__MediaMonitor_76 == null)) { (this.__MediaMonitor_76 = new import65.MediaMonitor(this._BreakPointRegistry_75,this._MatchMedia_73)); }
    return this.__MediaMonitor_76;
  }
  get _ObservableMedia_77():import66.MediaService {
    if ((this.__ObservableMedia_77 == null)) { (this.__ObservableMedia_77 = new import66.MediaService(this._MatchMedia_73,this._BreakPointRegistry_75)); }
    return this.__ObservableMedia_77;
  }
  get _CommonSandbox_78():import67.CommonSandbox {
    if ((this.__CommonSandbox_78 == null)) { (this.__CommonSandbox_78 = new import67.CommonSandbox(this.parent.get(import95.Store))); }
    return this.__CommonSandbox_78;
  }
  get _AuthenticatedGuard_79():import68.AuthenticatedGuard {
    if ((this.__AuthenticatedGuard_79 == null)) { (this.__AuthenticatedGuard_79 = new import68.AuthenticatedGuard(this.parent.get(import96.Router))); }
    return this.__AuthenticatedGuard_79;
  }
  get _RealTime_80():import69.RealTime {
    if ((this.__RealTime_80 == null)) { (this.__RealTime_80 = new import69.RealTime(this.parent.get(import95.Store))); }
    return this.__RealTime_80;
  }
  get _WindowRef_81():import70.WindowRef {
    if ((this.__WindowRef_81 == null)) { (this.__WindowRef_81 = new import70.WindowRef()); }
    return this.__WindowRef_81;
  }
  get _DocumentRef_82():import70.DocumentRef {
    if ((this.__DocumentRef_82 == null)) { (this.__DocumentRef_82 = new import70.DocumentRef()); }
    return this.__DocumentRef_82;
  }
  get _LAZY_MAPS_API_CONFIG_83():any {
    if ((this.__LAZY_MAPS_API_CONFIG_83 == null)) { (this.__LAZY_MAPS_API_CONFIG_83 = {apiKey: 'AIzaSyAqkrkJ74JFbCXlZO0l7xm_1uHlJebs7B4'}); }
    return this.__LAZY_MAPS_API_CONFIG_83;
  }
  get _MapsAPILoader_84():import71.LazyMapsAPILoader {
    if ((this.__MapsAPILoader_84 == null)) { (this.__MapsAPILoader_84 = new import71.LazyMapsAPILoader(this._LAZY_MAPS_API_CONFIG_83,this._WindowRef_81,this._DocumentRef_82)); }
    return this.__MapsAPILoader_84;
  }
  get _AddressesService_85():import72.AddressesService {
    if ((this.__AddressesService_85 == null)) { (this.__AddressesService_85 = new import72.AddressesService(this.parent.get(import95.Store),this._Http_57)); }
    return this.__AddressesService_85;
  }
  get _GoogleMapsService_86():import73.GoogleMapsService {
    if ((this.__GoogleMapsService_86 == null)) { (this.__GoogleMapsService_86 = new import73.GoogleMapsService(this._Http_57)); }
    return this.__GoogleMapsService_86;
  }
  get _AddressesSandbox_87():import74.AddressesSandbox {
    if ((this.__AddressesSandbox_87 == null)) { (this.__AddressesSandbox_87 = new import74.AddressesSandbox(this.parent.get(import95.Store),this._AddressesService_85,this._GoogleMapsService_86)); }
    return this.__AddressesSandbox_87;
  }
  get _ContactsService_88():import75.ContactsService {
    if ((this.__ContactsService_88 == null)) { (this.__ContactsService_88 = new import75.ContactsService(this.parent.get(import95.Store),this._Http_57)); }
    return this.__ContactsService_88;
  }
  get _ContactsSandbox_89():import76.ContactsSandbox {
    if ((this.__ContactsSandbox_89 == null)) { (this.__ContactsSandbox_89 = new import76.ContactsSandbox(this.parent.get(import95.Store),this._ContactsService_88)); }
    return this.__ContactsSandbox_89;
  }
  get _ClientAccountsService_90():import77.ClientAccountsService {
    if ((this.__ClientAccountsService_90 == null)) { (this.__ClientAccountsService_90 = new import77.ClientAccountsService(this.parent.get(import95.Store),this._Http_57)); }
    return this.__ClientAccountsService_90;
  }
  get _ClientAccountsSandbox_91():import78.ClientAccountsSandbox {
    if ((this.__ClientAccountsSandbox_91 == null)) { (this.__ClientAccountsSandbox_91 = new import78.ClientAccountsSandbox(this.parent.get(import95.Store),this._ClientAccountsService_90)); }
    return this.__ClientAccountsSandbox_91;
  }
  createInternal():import1.ClientAccountsModule {
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
    this._AddressesModule_46 = new import47.AddressesModule();
    this._ContactsModule_47 = new import48.ContactsModule();
    this._ClientAccountsModule_48 = new import1.ClientAccountsModule();
    return this._ClientAccountsModule_48;
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
    if ((token === import47.AddressesModule)) { return this._AddressesModule_46; }
    if ((token === import48.ContactsModule)) { return this._ContactsModule_47; }
    if ((token === import1.ClientAccountsModule)) { return this._ClientAccountsModule_48; }
    if ((token === import49.RadioControlRegistry)) { return this._RadioControlRegistry_49; }
    if ((token === import50.FormBuilder)) { return this._FormBuilder_50; }
    if ((token === import51.NgLocalization)) { return this._NgLocalization_51; }
    if ((token === import52.BrowserXhr)) { return this._BrowserXhr_52; }
    if ((token === import53.ResponseOptions)) { return this._ResponseOptions_53; }
    if ((token === import97.XSRFStrategy)) { return this._XSRFStrategy_54; }
    if ((token === import54.XHRBackend)) { return this._XHRBackend_55; }
    if ((token === import55.RequestOptions)) { return this._RequestOptions_56; }
    if ((token === import98.Http)) { return this._Http_57; }
    if ((token === import85.ScrollDispatcher)) { return this._ScrollDispatcher_58; }
    if ((token === import86.ViewportRuler)) { return this._ViewportRuler_59; }
    if ((token === import87.OverlayContainer)) { return this._OverlayContainer_60; }
    if ((token === import56.OverlayPositionBuilder)) { return this._OverlayPositionBuilder_61; }
    if ((token === import57.Overlay)) { return this._Overlay_62; }
    if ((token === import90.UniqueSelectionDispatcher)) { return this._UniqueSelectionDispatcher_63; }
    if ((token === import58.Platform)) { return this._Platform_64; }
    if ((token === import59.InteractivityChecker)) { return this._InteractivityChecker_65; }
    if ((token === import91.LiveAnnouncer)) { return this._LiveAnnouncer_66; }
    if ((token === import60.MdDialog)) { return this._MdDialog_67; }
    if ((token === import92.MdIconRegistry)) { return this._MdIconRegistry_68; }
    if ((token === import99.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_69; }
    if ((token === import62.MdSnackBar)) { return this._MdSnackBar_70; }
    if ((token === import94.FocusOriginMonitor)) { return this._FocusOriginMonitor_71; }
    if ((token === import41.DomProjection)) { return this._DomProjection_72; }
    if ((token === import63.MatchMedia)) { return this._MatchMedia_73; }
    if ((token === import100.BREAKPOINTS)) { return this._BREAKPOINTS_74; }
    if ((token === import64.BreakPointRegistry)) { return this._BreakPointRegistry_75; }
    if ((token === import65.MediaMonitor)) { return this._MediaMonitor_76; }
    if ((token === import66.ObservableMedia)) { return this._ObservableMedia_77; }
    if ((token === import67.CommonSandbox)) { return this._CommonSandbox_78; }
    if ((token === import68.AuthenticatedGuard)) { return this._AuthenticatedGuard_79; }
    if ((token === import69.RealTime)) { return this._RealTime_80; }
    if ((token === import70.WindowRef)) { return this._WindowRef_81; }
    if ((token === import70.DocumentRef)) { return this._DocumentRef_82; }
    if ((token === import71.LAZY_MAPS_API_CONFIG)) { return this._LAZY_MAPS_API_CONFIG_83; }
    if ((token === import101.MapsAPILoader)) { return this._MapsAPILoader_84; }
    if ((token === import72.AddressesService)) { return this._AddressesService_85; }
    if ((token === import73.GoogleMapsService)) { return this._GoogleMapsService_86; }
    if ((token === import74.AddressesSandbox)) { return this._AddressesSandbox_87; }
    if ((token === import75.ContactsService)) { return this._ContactsService_88; }
    if ((token === import76.ContactsSandbox)) { return this._ContactsSandbox_89; }
    if ((token === import77.ClientAccountsService)) { return this._ClientAccountsService_90; }
    if ((token === import78.ClientAccountsSandbox)) { return this._ClientAccountsSandbox_91; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ClientAccountsModuleNgFactory:import0.NgModuleFactory<import1.ClientAccountsModule> = new import0.NgModuleFactory(ClientAccountsModuleInjector,import1.ClientAccountsModule);