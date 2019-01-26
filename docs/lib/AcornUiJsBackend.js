(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'AcornUtils', 'AcornUiCore'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('AcornUtils'), require('AcornUiCore'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'AcornUiJsBackend'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'AcornUiJsBackend'.");
    }
    if (typeof AcornUtils === 'undefined') {
      throw new Error("Error loading module 'AcornUiJsBackend'. Its dependency 'AcornUtils' was not found. Please, check whether 'AcornUtils' is loaded prior to 'AcornUiJsBackend'.");
    }
    if (typeof AcornUiCore === 'undefined') {
      throw new Error("Error loading module 'AcornUiJsBackend'. Its dependency 'AcornUiCore' was not found. Please, check whether 'AcornUiCore' is loaded prior to 'AcornUiJsBackend'.");
    }
    root.AcornUiJsBackend = factory(typeof AcornUiJsBackend === 'undefined' ? {} : AcornUiJsBackend, kotlin, AcornUtils, AcornUiCore);
  }
}(this, function (_, Kotlin, $module$AcornUtils, $module$AcornUiCore) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var Promise = $module$AcornUtils.com.acornui.async.Promise;
  var getCallableRef = Kotlin.getCallableRef;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Signal0 = $module$AcornUtils.com.acornui.signal.Signal0;
  var MusicReadyState = $module$AcornUiCore.com.acornui.core.audio.MusicReadyState;
  var Music = $module$AcornUiCore.com.acornui.core.audio.Music;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var AssetType = $module$AcornUiCore.com.acornui.core.asset.AssetType;
  var Deferred$Status = $module$AcornUtils.com.acornui.async.Deferred.Status;
  var AssetLoader = $module$AcornUiCore.com.acornui.core.asset.AssetLoader;
  var Sound = $module$AcornUiCore.com.acornui.core.audio.Sound;
  var SoundFactory = $module$AcornUiCore.com.acornui.core.audio.SoundFactory;
  var time = $module$AcornUiCore.com.acornui.core.time;
  var UrlRequestData = $module$AcornUiCore.com.acornui.core.request.UrlRequestData;
  var async = $module$AcornUtils.com.acornui.async.async_lnyleu$;
  var CursorManagerBase = $module$AcornUiCore.com.acornui.core.cursor.CursorManagerBase;
  var cursor = $module$AcornUiCore.com.acornui.core.cursor;
  var LifecycleBase = $module$AcornUiCore.com.acornui.core.LifecycleBase;
  var Cursor = $module$AcornUiCore.com.acornui.core.cursor.Cursor;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var FileIoManager = $module$AcornUiCore.com.acornui.file.FileIoManager;
  var launch = $module$AcornUtils.com.acornui.async.launch_g2bo5h$;
  var FileReader_0 = $module$AcornUiCore.com.acornui.file.FileReader;
  var ensureNotNull = Kotlin.ensureNotNull;
  var numberToInt = Kotlin.numberToInt;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Gl20 = $module$AcornUiCore.com.acornui.gl.core.Gl20;
  var GlProgramRef = $module$AcornUiCore.com.acornui.gl.core.GlProgramRef;
  var GlShaderRef = $module$AcornUiCore.com.acornui.gl.core.GlShaderRef;
  var GlBufferRef = $module$AcornUiCore.com.acornui.gl.core.GlBufferRef;
  var GlFramebufferRef = $module$AcornUiCore.com.acornui.gl.core.GlFramebufferRef;
  var GlRenderbufferRef = $module$AcornUiCore.com.acornui.gl.core.GlRenderbufferRef;
  var GlTextureRef = $module$AcornUiCore.com.acornui.gl.core.GlTextureRef;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init;
  var GlActiveInfoRef = $module$AcornUiCore.com.acornui.gl.core.GlActiveInfoRef;
  var GlUniformLocationRef = $module$AcornUiCore.com.acornui.gl.core.GlUniformLocationRef;
  var WrappedGl20 = $module$AcornUiCore.com.acornui.gl.core.WrappedGl20;
  var GlState = $module$AcornUiCore.com.acornui.gl.core.GlState;
  var GlStageImpl = $module$AcornUiCore.com.acornui.component.GlStageImpl;
  var FakeFocusMouse = $module$AcornUiCore.com.acornui.core.focus.FakeFocusMouse;
  var own = $module$AcornUiCore.com.acornui.core.di.own_hwf7iz$;
  var dKey = $module$AcornUiCore.com.acornui.core.di.dKey_8ofd6x$;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var ApplicationBase$BootTask = $module$AcornUiCore.com.acornui.core.ApplicationBase.BootTask;
  var AppConfig = $module$AcornUiCore.com.acornui.core.AppConfig;
  var Window = $module$AcornUiCore.com.acornui.core.graphic.Window;
  var GlStateImpl = $module$AcornUiCore.com.acornui.gl.core.GlStateImpl;
  var HtmlComponent = $module$AcornUiCore.com.acornui.component.HtmlComponent;
  var FocusManagerImpl = $module$AcornUiCore.com.acornui.core.focus.FocusManagerImpl;
  var FocusManager = $module$AcornUiCore.com.acornui.core.focus.FocusManager;
  var GlTextureBase = $module$AcornUiCore.com.acornui.gl.core.GlTextureBase;
  var Framebuffer = $module$AcornUiCore.com.acornui.gl.core.Framebuffer;
  var Matrix4 = $module$AcornUtils.com.acornui.math.Matrix4;
  var BlendMode = $module$AcornUiCore.com.acornui.core.graphic.BlendMode;
  var putVertex = $module$AcornUiCore.com.acornui.gl.core.putVertex_qow018$;
  var putQuadIndices = $module$AcornUiCore.com.acornui.gl.core.putQuadIndices_qky3j1$;
  var BufferFactory = $module$AcornUiCore.com.acornui.core.io.BufferFactory;
  var RgbData = $module$AcornUiCore.com.acornui.core.graphic.RgbData;
  var core = $module$AcornUiCore.com.acornui.core;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Signal1 = $module$AcornUtils.com.acornui.signal.Signal1;
  var Signal3 = $module$AcornUtils.com.acornui.signal.Signal3;
  var Signal2 = $module$AcornUtils.com.acornui.signal.Signal2;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var logging = $module$AcornUtils.com.acornui.logging;
  var Color = $module$AcornUtils.com.acornui.graphic.Color;
  var equals = Kotlin.equals;
  var UiComponentImpl = $module$AcornUiCore.com.acornui.component.UiComponentImpl;
  var BoxStyle = $module$AcornUiCore.com.acornui.component.BoxStyle;
  var TextField = $module$AcornUiCore.com.acornui.component.text.TextField;
  var Pad_init = $module$AcornUtils.com.acornui.math.Pad_init_mx4ult$;
  var Bounds = $module$AcornUtils.com.acornui.math.Bounds;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var ClickDispatcher = $module$AcornUiCore.com.acornui.core.input.interaction.ClickDispatcher;
  var InteractivityManager = $module$AcornUiCore.com.acornui.core.input.InteractivityManager;
  var inject = $module$AcornUiCore.com.acornui.core.di.inject_y3a68v$;
  var Stage = $module$AcornUiCore.com.acornui.component.Stage;
  var PasteInteractionRo = $module$AcornUiCore.com.acornui.core.input.interaction.PasteInteractionRo;
  var CopyInteractionRo = $module$AcornUiCore.com.acornui.core.input.interaction.CopyInteractionRo;
  var Scoped = $module$AcornUiCore.com.acornui.core.di.Scoped;
  var Disposable = $module$AcornUtils.com.acornui.core.Disposable;
  var ClipboardItemType = $module$AcornUiCore.com.acornui.core.input.interaction.ClipboardItemType;
  var Any = Object;
  var InteractionEventBase = $module$AcornUiCore.com.acornui.core.input.InteractionEventBase;
  var numberToLong = Kotlin.numberToLong;
  var KeyLocation = $module$AcornUiCore.com.acornui.core.input.interaction.KeyLocation;
  var KeyInteraction = $module$AcornUiCore.com.acornui.core.input.interaction.KeyInteraction;
  var CharInteraction = $module$AcornUiCore.com.acornui.core.input.interaction.CharInteraction;
  var DualHashMap = $module$AcornUtils.com.acornui.collection.DualHashMap;
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var KeyInput = $module$AcornUiCore.com.acornui.core.input.KeyInput;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var Touch = $module$AcornUiCore.com.acornui.core.input.interaction.Touch;
  var WhichButton = $module$AcornUiCore.com.acornui.core.input.WhichButton;
  var TouchInteraction = $module$AcornUiCore.com.acornui.core.input.interaction.TouchInteraction;
  var MouseInteraction = $module$AcornUiCore.com.acornui.core.input.interaction.MouseInteraction;
  var WheelInteraction = $module$AcornUiCore.com.acornui.core.input.interaction.WheelInteraction;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var MouseInput = $module$AcornUiCore.com.acornui.core.input.MouseInput;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var BufferBase = $module$AcornUtils.com.acornui.io.BufferBase;
  var NativeReadWriteByteBuffer = $module$AcornUtils.com.acornui.io.NativeReadWriteByteBuffer;
  var NativeReadWriteBuffer = $module$AcornUtils.com.acornui.io.NativeReadWriteBuffer;
  var toShort = Kotlin.toShort;
  var ResponseException = $module$AcornUiCore.com.acornui.core.request.ResponseException;
  var request = $module$AcornUiCore.com.acornui.core.request;
  var ByteArrayFormItem = $module$AcornUiCore.com.acornui.core.request.ByteArrayFormItem;
  var StringFormItem = $module$AcornUiCore.com.acornui.core.request.StringFormItem;
  var Request = $module$AcornUiCore.com.acornui.core.request.Request;
  var RestServiceFactory = $module$AcornUiCore.com.acornui.core.request.RestServiceFactory;
  var OwnedImpl_init = $module$AcornUiCore.com.acornui.core.di.OwnedImpl_init_r456d0$;
  var PopUpManager = $module$AcornUiCore.com.acornui.core.popup.PopUpManager;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var createScope = $module$AcornUiCore.com.acornui.core.di.createScope_gl1zro$;
  var appendParam = $module$AcornUtils.com.acornui.browser.appendParam_j4ogox$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var awaitOrNull = $module$AcornUtils.com.acornui.async.awaitOrNull_uirwv7$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toString = Kotlin.toString;
  var acornui = $module$AcornUiCore.com.acornui;
  var AudioManagerImpl = $module$AcornUiCore.com.acornui.core.audio.AudioManagerImpl;
  var AudioManager = $module$AcornUiCore.com.acornui.core.audio.AudioManager;
  var PopUpManagerImpl = $module$AcornUiCore.com.acornui.core.popup.PopUpManagerImpl;
  var UndoDispatcher = $module$AcornUiCore.com.acornui.core.input.interaction.UndoDispatcher;
  var ContextMenuManager = $module$AcornUiCore.com.acornui.core.input.interaction.ContextMenuManager;
  var ApplicationBase = $module$AcornUiCore.com.acornui.core.ApplicationBase;
  var dKey_0 = $module$AcornUiCore.com.acornui.core.di.dKey_30y1fr$;
  var stringMapOf = Kotlin.kotlin.collections.stringMapOf_gkrhic$;
  var collection = $module$AcornUtils.com.acornui.collection;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var browser = $module$AcornUtils.com.acornui.browser;
  var Locale = $module$AcornUiCore.com.acornui.core.i18n.Locale;
  var UserInfo = $module$AcornUiCore.com.acornui.core.UserInfo;
  var Logger = $module$AcornUtils.com.acornui.logging.Logger;
  var io = $module$AcornUiCore.com.acornui.core.io;
  var serialization = $module$AcornUtils.com.acornui.serialization;
  var OrthographicCamera = $module$AcornUiCore.com.acornui.core.graphic.OrthographicCamera;
  var Camera = $module$AcornUiCore.com.acornui.core.graphic.Camera;
  var autoCenterCamera = $module$AcornUiCore.com.acornui.core.graphic.autoCenterCamera_w932k$;
  var file = $module$AcornUtils.com.acornui.io.file;
  var Files = $module$AcornUiCore.com.acornui.core.io.file.Files;
  var FilesImpl = $module$AcornUiCore.com.acornui.core.io.file.FilesImpl;
  var AssetManager = $module$AcornUiCore.com.acornui.core.asset.AssetManager;
  var AssetManagerImpl = $module$AcornUiCore.com.acornui.core.asset.AssetManagerImpl;
  var TimeDriver = $module$AcornUiCore.com.acornui.core.time.TimeDriver;
  var TimeDriverImpl = $module$AcornUiCore.com.acornui.core.time.TimeDriverImpl;
  var InteractivityManagerImpl = $module$AcornUiCore.com.acornui.core.input.InteractivityManagerImpl;
  var CursorManager = $module$AcornUiCore.com.acornui.core.cursor.CursorManager;
  var Persistence = $module$AcornUiCore.com.acornui.core.persistance.Persistence;
  var SelectionManager = $module$AcornUiCore.com.acornui.core.selection.SelectionManager;
  var SelectionManagerImpl = $module$AcornUiCore.com.acornui.core.selection.SelectionManagerImpl;
  var I18n = $module$AcornUiCore.com.acornui.core.i18n.I18n;
  var I18nImpl = $module$AcornUiCore.com.acornui.core.i18n.I18nImpl;
  var text = $module$AcornUiCore.com.acornui.core.text;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var MinMax = $module$AcornUtils.com.acornui.math.MinMax;
  var Version = $module$AcornUiCore.com.acornui.core.Version;
  var copy = $module$AcornUtils.com.acornui.collection.copy_2p1efm$;
  var DateTimeFormatType = $module$AcornUiCore.com.acornui.core.text.DateTimeFormatType;
  var DateTimeFormatStyle = $module$AcornUiCore.com.acornui.core.text.DateTimeFormatStyle;
  var DateTimeFormatter = $module$AcornUiCore.com.acornui.core.text.DateTimeFormatter;
  var NumberFormatType = $module$AcornUiCore.com.acornui.core.text.NumberFormatType;
  var NumberFormatter = $module$AcornUiCore.com.acornui.core.text.NumberFormatter;
  var DateRo = $module$AcornUiCore.com.acornui.core.time.DateRo;
  var hashCode = Kotlin.hashCode;
  var zeroPadding = $module$AcornUtils.com.acornui.core.zeroPadding_ce333h$;
  var Date_0 = $module$AcornUiCore.com.acornui.core.time.Date;
  var L1000000 = Kotlin.Long.fromInt(1000000);
  var TimeProvider = $module$AcornUiCore.com.acornui.core.time.TimeProvider;
  var Location = $module$AcornUiCore.com.acornui.core.browser.Location;
  decodeAudioData$ObjectLiteral.prototype = Object.create(Promise.prototype);
  decodeAudioData$ObjectLiteral.prototype.constructor = decodeAudioData$ObjectLiteral;
  PanningModel.prototype = Object.create(Enum.prototype);
  PanningModel.prototype.constructor = PanningModel;
  JsAudioElementSoundLoader.prototype = Object.create(Promise.prototype);
  JsAudioElementSoundLoader.prototype.constructor = JsAudioElementSoundLoader;
  JsCursorManager.prototype = Object.create(CursorManagerBase.prototype);
  JsCursorManager.prototype.constructor = JsCursorManager;
  JsStandardCursor.prototype = Object.create(LifecycleBase.prototype);
  JsStandardCursor.prototype.constructor = JsStandardCursor;
  JsFileReader$readAsString$ObjectLiteral.prototype = Object.create(Promise.prototype);
  JsFileReader$readAsString$ObjectLiteral.prototype.constructor = JsFileReader$readAsString$ObjectLiteral;
  JsFileReader$readAsBinary$ObjectLiteral.prototype = Object.create(Promise.prototype);
  JsFileReader$readAsBinary$ObjectLiteral.prototype.constructor = JsFileReader$readAsBinary$ObjectLiteral;
  JsApplicationBase.prototype = Object.create(ApplicationBase.prototype);
  JsApplicationBase.prototype.constructor = JsApplicationBase;
  WebGlApplication.prototype = Object.create(JsApplicationBase.prototype);
  WebGlApplication.prototype.constructor = WebGlApplication;
  WebGlTexture.prototype = Object.create(GlTextureBase.prototype);
  WebGlTexture.prototype.constructor = WebGlTexture;
  WebGlTextureLoader$work$ObjectLiteral.prototype = Object.create(Promise.prototype);
  WebGlTextureLoader$work$ObjectLiteral.prototype.constructor = WebGlTextureLoader$work$ObjectLiteral;
  JsHtmlComponent.prototype = Object.create(UiComponentImpl.prototype);
  JsHtmlComponent.prototype.constructor = JsHtmlComponent;
  JsClickDispatcher.prototype = Object.create(ClickDispatcher.prototype);
  JsClickDispatcher.prototype.constructor = JsClickDispatcher;
  JsPasteInteraction.prototype = Object.create(InteractionEventBase.prototype);
  JsPasteInteraction.prototype.constructor = JsPasteInteraction;
  JsCopyInteraction.prototype = Object.create(InteractionEventBase.prototype);
  JsCopyInteraction.prototype.constructor = JsCopyInteraction;
  JsByteBuffer.prototype = Object.create(BufferBase.prototype);
  JsByteBuffer.prototype.constructor = JsByteBuffer;
  JsShortBuffer.prototype = Object.create(BufferBase.prototype);
  JsShortBuffer.prototype.constructor = JsShortBuffer;
  JsIntBuffer.prototype = Object.create(BufferBase.prototype);
  JsIntBuffer.prototype.constructor = JsIntBuffer;
  JsFloatBuffer.prototype = Object.create(BufferBase.prototype);
  JsFloatBuffer.prototype.constructor = JsFloatBuffer;
  JsDoubleBuffer.prototype = Object.create(BufferBase.prototype);
  JsDoubleBuffer.prototype.constructor = JsDoubleBuffer;
  JsHttpRequest.prototype = Object.create(Promise.prototype);
  JsHttpRequest.prototype.constructor = JsHttpRequest;
  JsArrayBufferRequest.prototype = Object.create(JsHttpRequest.prototype);
  JsArrayBufferRequest.prototype.constructor = JsArrayBufferRequest;
  JsBinaryRequest.prototype = Object.create(JsHttpRequest.prototype);
  JsBinaryRequest.prototype.constructor = JsBinaryRequest;
  JsTextRequest.prototype = Object.create(JsHttpRequest.prototype);
  JsTextRequest.prototype.constructor = JsTextRequest;
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var SafeContinuation_init = Kotlin.kotlin.coroutines.SafeContinuation_init_wj8d80$;
  var audioContextSupported;
  function decodeAudioData$ObjectLiteral(closure$audioData, this$decodeAudioData) {
    Promise.call(this);
    this$decodeAudioData.decodeAudioData(closure$audioData, getCallableRef('success', function ($receiver, result) {
      return $receiver.success_11rb$(result), Unit;
    }.bind(null, this)));
  }
  decodeAudioData$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Promise]};
  function decodeAudioData($receiver, audioData) {
    return new decodeAudioData$ObjectLiteral(audioData, $receiver);
  }
  function PanningModel(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PanningModel_initFields() {
    PanningModel_initFields = function () {
    };
    PanningModel$EQUAL_POWER_instance = new PanningModel('EQUAL_POWER', 0, 'equalpower');
    PanningModel$HRTF_instance = new PanningModel('HRTF', 1, 'HRTF');
  }
  var PanningModel$EQUAL_POWER_instance;
  function PanningModel$EQUAL_POWER_getInstance() {
    PanningModel_initFields();
    return PanningModel$EQUAL_POWER_instance;
  }
  var PanningModel$HRTF_instance;
  function PanningModel$HRTF_getInstance() {
    PanningModel_initFields();
    return PanningModel$HRTF_instance;
  }
  PanningModel.$metadata$ = {kind: Kind_CLASS, simpleName: 'PanningModel', interfaces: [Enum]};
  function PanningModel$values() {
    return [PanningModel$EQUAL_POWER_getInstance(), PanningModel$HRTF_getInstance()];
  }
  PanningModel.values = PanningModel$values;
  function PanningModel$valueOf(name) {
    switch (name) {
      case 'EQUAL_POWER':
        return PanningModel$EQUAL_POWER_getInstance();
      case 'HRTF':
        return PanningModel$HRTF_getInstance();
      default:throwISE('No enum constant com.acornui.js.audio.PanningModel.' + name);
    }
  }
  PanningModel.valueOf_61zpoe$ = PanningModel$valueOf;
  function JsAudioContext_0() {
    JsAudioContext_instance = this;
    this.instance_8i74nc$_0 = lazy(JsAudioContext$instance$lambda);
  }
  Object.defineProperty(JsAudioContext_0.prototype, 'instance', {get: function () {
    return this.instance_8i74nc$_0.value;
  }});
  function JsAudioContext$instance$lambda() {
    var JsAudioContext = window.AudioContext || window.webkitAudioContext;
    return new JsAudioContext();
  }
  JsAudioContext_0.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsAudioContext', interfaces: []};
  var JsAudioContext_instance = null;
  function JsAudioContext_getInstance() {
    if (JsAudioContext_instance === null) {
      new JsAudioContext_0();
    }
    return JsAudioContext_instance;
  }
  function JsAudioElementMusic(audioManager, element) {
    this.audioManager_i3xjxw$_0 = audioManager;
    this.element_z3o0az$_0 = element;
    this.readyStateChanged_520onf$_0 = new Signal0();
    this.readyState_bzz6iz$_0 = MusicReadyState.NOTHING;
    this.onCompleted_jrqp17$_0 = null;
    this.elementEndedHandler_xx8bbv$_0 = JsAudioElementMusic$elementEndedHandler$lambda(this);
    this.loadedDataHandler_k7dx0q$_0 = JsAudioElementMusic$loadedDataHandler$lambda(this);
    this.element_z3o0az$_0.addEventListener('ended', this.elementEndedHandler_xx8bbv$_0);
    this.element_z3o0az$_0.addEventListener('loadeddata', this.loadedDataHandler_k7dx0q$_0);
    this.audioManager_i3xjxw$_0.registerMusic_rfbu1o$(this);
    this._volume_ehunko$_0 = 1.0;
  }
  Object.defineProperty(JsAudioElementMusic.prototype, 'readyStateChanged', {get: function () {
    return this.readyStateChanged_520onf$_0;
  }});
  Object.defineProperty(JsAudioElementMusic.prototype, 'readyState', {get: function () {
    return this.readyState_bzz6iz$_0;
  }, set: function (readyState) {
    this.readyState_bzz6iz$_0 = readyState;
  }});
  Object.defineProperty(JsAudioElementMusic.prototype, 'onCompleted', {get: function () {
    return this.onCompleted_jrqp17$_0;
  }, set: function (onCompleted) {
    this.onCompleted_jrqp17$_0 = onCompleted;
  }});
  Object.defineProperty(JsAudioElementMusic.prototype, 'duration', {get: function () {
    return this.element_z3o0az$_0.duration;
  }});
  Object.defineProperty(JsAudioElementMusic.prototype, 'isPlaying', {get: function () {
    return !this.element_z3o0az$_0.paused;
  }});
  Object.defineProperty(JsAudioElementMusic.prototype, 'loop', {get: function () {
    return this.element_z3o0az$_0.loop;
  }, set: function (value) {
    this.element_z3o0az$_0.loop = value;
  }});
  Object.defineProperty(JsAudioElementMusic.prototype, 'volume', {get: function () {
    return this._volume_ehunko$_0;
  }, set: function (value) {
    this._volume_ehunko$_0 = value;
    var tmp$ = this.element_z3o0az$_0;
    var value_0 = value * this.audioManager_i3xjxw$_0.musicVolume;
    var clamp_73gzaq$result;
    clamp_73gzaq$break: do {
      if (Kotlin.compareTo(value_0, 0.0) <= 0) {
        clamp_73gzaq$result = 0.0;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(value_0, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = value_0;
    }
     while (false);
    tmp$.volume = clamp_73gzaq$result;
  }});
  JsAudioElementMusic.prototype.play = function () {
    this.element_z3o0az$_0.play();
  };
  JsAudioElementMusic.prototype.pause = function () {
    this.element_z3o0az$_0.pause();
  };
  JsAudioElementMusic.prototype.stop = function () {
    this.element_z3o0az$_0.currentTime = 0.0;
    this.element_z3o0az$_0.pause();
  };
  Object.defineProperty(JsAudioElementMusic.prototype, 'currentTime', {get: function () {
    return this.element_z3o0az$_0.currentTime;
  }, set: function (value) {
    this.element_z3o0az$_0.currentTime = value;
  }});
  JsAudioElementMusic.prototype.update = function () {
  };
  JsAudioElementMusic.prototype.dispose = function () {
    this.audioManager_i3xjxw$_0.unregisterMusic_rfbu1o$(this);
    this.readyStateChanged.dispose();
    this.element_z3o0az$_0.removeEventListener('ended', this.elementEndedHandler_xx8bbv$_0);
    this.element_z3o0az$_0.removeEventListener('loadeddata', this.loadedDataHandler_k7dx0q$_0);
    this.element_z3o0az$_0.pause();
    this.element_z3o0az$_0.src = '';
    this.element_z3o0az$_0.load();
  };
  function JsAudioElementMusic$elementEndedHandler$lambda(this$JsAudioElementMusic) {
    return function (event) {
      var tmp$;
      if (!this$JsAudioElementMusic.loop)
        (tmp$ = this$JsAudioElementMusic.onCompleted) != null ? tmp$() : null;
      return Unit;
    };
  }
  function JsAudioElementMusic$loadedDataHandler$lambda(this$JsAudioElementMusic) {
    return function (event) {
      if (this$JsAudioElementMusic.readyState === MusicReadyState.NOTHING && this$JsAudioElementMusic.element_z3o0az$_0.readyState >= 3) {
        this$JsAudioElementMusic.readyState = MusicReadyState.READY;
        this$JsAudioElementMusic.readyStateChanged.dispatch();
      }
      return Unit;
    };
  }
  JsAudioElementMusic.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsAudioElementMusic', interfaces: [Music]};
  function JsAudioElementMusicLoader(path, audioManager) {
    this.path_qz6nlb$_0 = path;
    this.type_qwk8kk$_0 = AssetType.Companion.MUSIC;
    this.music_0 = new JsAudioElementMusic(audioManager, Audio(this.path));
    this.status_h8t9gc$_0 = Deferred$Status.SUCCESSFUL;
    this.result_wa4xeh$_0 = this.music_0;
  }
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'path', {get: function () {
    return this.path_qz6nlb$_0;
  }});
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'type', {get: function () {
    return this.type_qwk8kk$_0;
  }});
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'secondsLoaded', {get: function () {
    return 0.0;
  }});
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'secondsTotal', {get: function () {
    return 0.0;
  }});
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'status', {get: function () {
    return this.status_h8t9gc$_0;
  }});
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'result', {get: function () {
    return this.result_wa4xeh$_0;
  }});
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'error', {get: function () {
    throw Exception_init('status is not FAILED');
  }});
  JsAudioElementMusicLoader.prototype.await = function (continuation) {
    return this.music_0;
  };
  JsAudioElementMusicLoader.prototype.cancel = function () {
  };
  JsAudioElementMusicLoader.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsAudioElementMusicLoader', interfaces: [AssetLoader]};
  function Audio(source) {
    var tmp$;
    var audio = alwaysTrue(tmp$ = document.createElement('AUDIO'), HTMLAudioElement) ? tmp$ : throwCCE();
    audio.src = source;
    return audio;
  }
  function JsAudioElementSound(audioManager, src, priority) {
    this.audioManager_0 = audioManager;
    this.src_0 = src;
    this.priority_iqhf13$_0 = priority;
    this.onCompleted_bis89x$_0 = null;
    this._isPlaying_0 = false;
    this.element_0 = null;
    this.elementEndedHandler_0 = JsAudioElementSound$elementEndedHandler$lambda(this);
    this.element_0 = Audio(this.src_0);
    this.element_0.addEventListener('ended', this.elementEndedHandler_0);
    this.audioManager_0.registerSound_riitae$(this);
    this._volume_0 = 1.0;
  }
  Object.defineProperty(JsAudioElementSound.prototype, 'priority', {get: function () {
    return this.priority_iqhf13$_0;
  }});
  Object.defineProperty(JsAudioElementSound.prototype, 'onCompleted', {get: function () {
    return this.onCompleted_bis89x$_0;
  }, set: function (onCompleted) {
    this.onCompleted_bis89x$_0 = onCompleted;
  }});
  Object.defineProperty(JsAudioElementSound.prototype, 'isPlaying', {get: function () {
    return this._isPlaying_0;
  }});
  JsAudioElementSound.prototype.complete_0 = function () {
    var tmp$;
    this._isPlaying_0 = false;
    (tmp$ = this.onCompleted) != null ? tmp$() : null;
    this.onCompleted = null;
    this.audioManager_0.unregisterSound_riitae$(this);
  };
  Object.defineProperty(JsAudioElementSound.prototype, 'loop', {get: function () {
    return this.element_0.loop;
  }, set: function (value) {
    this.element_0.loop = value;
  }});
  Object.defineProperty(JsAudioElementSound.prototype, 'volume', {get: function () {
    return this._volume_0;
  }, set: function (value) {
    this._volume_0 = value;
    var tmp$ = this.element_0;
    var value_0 = value * this.audioManager_0.soundVolume;
    var clamp_73gzaq$result;
    clamp_73gzaq$break: do {
      if (Kotlin.compareTo(value_0, 0.0) <= 0) {
        clamp_73gzaq$result = 0.0;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(value_0, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = value_0;
    }
     while (false);
    tmp$.volume = clamp_73gzaq$result;
  }});
  JsAudioElementSound.prototype.setPosition_y2kzbl$ = function (x, y, z) {
  };
  JsAudioElementSound.prototype.start = function () {
    if (this._isPlaying_0)
      return;
    this._isPlaying_0 = true;
    this.element_0.play();
  };
  JsAudioElementSound.prototype.stop = function () {
    if (!this._isPlaying_0)
      return;
    this._isPlaying_0 = false;
    this.element_0.pause();
    this.element_0.currentTime = 0.0;
  };
  Object.defineProperty(JsAudioElementSound.prototype, 'currentTime', {get: function () {
    return this.element_0.currentTime;
  }});
  JsAudioElementSound.prototype.update = function () {
  };
  JsAudioElementSound.prototype.dispose = function () {
    this._isPlaying_0 = false;
    this.element_0.pause();
    this.element_0.src = '';
    this.element_0.load();
  };
  function JsAudioElementSound$elementEndedHandler$lambda(this$JsAudioElementSound) {
    return function (event) {
      if (!this$JsAudioElementSound.loop)
        this$JsAudioElementSound.complete_0();
      return Unit;
    };
  }
  JsAudioElementSound.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsAudioElementSound', interfaces: [Sound]};
  function JsAudioElementSoundFactory(audioManager, path, duration) {
    this.audioManager_0 = audioManager;
    this.path_0 = path;
    this.duration_cygcu7$_0 = duration;
    this.defaultPriority_n11rbu$_0 = 0.0;
    this.audioManager_0.registerSoundSource_bl6c9o$(this);
  }
  Object.defineProperty(JsAudioElementSoundFactory.prototype, 'duration', {get: function () {
    return this.duration_cygcu7$_0;
  }});
  Object.defineProperty(JsAudioElementSoundFactory.prototype, 'defaultPriority', {get: function () {
    return this.defaultPriority_n11rbu$_0;
  }, set: function (defaultPriority) {
    this.defaultPriority_n11rbu$_0 = defaultPriority;
  }});
  JsAudioElementSoundFactory.prototype.createInstance_mx4ult$ = function (priority) {
    if (!this.audioManager_0.canPlaySound_mx4ult$(priority))
      return null;
    return new JsAudioElementSound(this.audioManager_0, this.path_0, priority);
  };
  JsAudioElementSoundFactory.prototype.dispose = function () {
    this.audioManager_0.unregisterSoundSource_bl6c9o$(this);
  };
  JsAudioElementSoundFactory.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsAudioElementSoundFactory', interfaces: [SoundFactory]};
  function JsAudioElementSoundLoader(path, audioManager) {
    Promise.call(this);
    this.path_j45797$_0 = path;
    this.audioManager_0 = audioManager;
    this.type_j6rm9y$_0 = AssetType.Companion.SOUND;
    this.element_0 = Audio(this.path);
    this.element_0.addEventListener('loadeddata', JsAudioElementSoundLoader_init$lambda(this));
  }
  Object.defineProperty(JsAudioElementSoundLoader.prototype, 'path', {get: function () {
    return this.path_j45797$_0;
  }});
  Object.defineProperty(JsAudioElementSoundLoader.prototype, 'type', {get: function () {
    return this.type_j6rm9y$_0;
  }});
  Object.defineProperty(JsAudioElementSoundLoader.prototype, 'secondsLoaded', {get: function () {
    return 0.0;
  }});
  Object.defineProperty(JsAudioElementSoundLoader.prototype, 'secondsTotal', {get: function () {
    return 0.0;
  }});
  JsAudioElementSoundLoader.prototype.cancel = function () {
    this.element_0.pause();
    this.element_0.src = '';
    this.element_0.load();
  };
  function JsAudioElementSoundLoader_init$lambda(this$JsAudioElementSoundLoader) {
    return function (event) {
      var tmp$;
      var e = alwaysTrue(tmp$ = event.currentTarget, HTMLAudioElement) ? tmp$ : throwCCE();
      if (e.readyState >= 1) {
        var duration = e.duration;
        var asset = new JsAudioElementSoundFactory(this$JsAudioElementSoundLoader.audioManager_0, this$JsAudioElementSoundLoader.path, duration);
        this$JsAudioElementSoundLoader.success_11rb$(asset);
        this$JsAudioElementSoundLoader.cancel();
      }
      return Unit;
    };
  }
  JsAudioElementSoundLoader.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsAudioElementSoundLoader', interfaces: [AssetLoader, Promise]};
  function JsWebAudioMusic(audioManager, context, element) {
    this.audioManager_0 = audioManager;
    this.element_0 = element;
    this.readyStateChanged_sm5j89$_0 = new Signal0();
    this.onCompleted_99dwm9$_0 = null;
    this.gain_0 = null;
    this.mediaElementNode_0 = null;
    this._isPlaying_0 = false;
    this.mediaElementNode_0 = context.createMediaElementSource(this.element_0);
    this.mediaElementNode_0.addEventListener('ended', JsWebAudioMusic_init$lambda(this));
    this.gain_0 = context.createGain();
    this.gain_0.gain.value = this.audioManager_0.soundVolume;
    this.mediaElementNode_0.connect(this.gain_0);
    this.gain_0.connect(context.destination);
    this.audioManager_0.registerMusic_rfbu1o$(this);
    this._volume_0 = 1.0;
  }
  function JsWebAudioMusicLoader(path, audioManager) {
    this.path_5f3097$_0 = path;
    this.audioManager_0 = audioManager;
    this.type_5cgl8g$_0 = AssetType.Companion.MUSIC;
    this.element = Audio(this.path);
    this.element.load();
    this.result_8umuwt$_0 = lazy(JsWebAudioMusicLoader$result$lambda(this));
  }
  function JsWebAudioSound(audioManager, context, decodedData, priority) {
    this.audioManager_0 = audioManager;
    this.context_0 = context;
    this.decodedData_0 = decodedData;
    this.priority_49uy6l$_0 = priority;
    this.onCompleted_hicddj$_0 = null;
    this.gain_0 = null;
    this.panner_0 = null;
    this.audioBufferSourceNode_0 = null;
    this._isPlaying_0 = false;
    this._startTime_0 = 0.0;
    this._stopTime_0 = 0.0;
    this.audioBufferSourceNode_0 = this.context_0.createBufferSource();
    this.audioBufferSourceNode_0.addEventListener('ended', JsWebAudioSound_init$lambda(this));
    this.audioBufferSourceNode_0.buffer = this.decodedData_0;
    this.panner_0 = this.context_0.createPanner();
    this.panner_0.panningModel = PanningModel$EQUAL_POWER_getInstance().value;
    this.gain_0 = this.context_0.createGain();
    this.gain_0.gain.value = this.audioManager_0.soundVolume;
    this.audioBufferSourceNode_0.connect(this.panner_0);
    this.panner_0.connect(this.gain_0);
    this.panner_0.setPosition(0.0, 0.0, 1.0);
    this.gain_0.connect(this.context_0.destination);
    this.audioManager_0.registerSound_riitae$(this);
    this._volume_0 = 1.0;
  }
  Object.defineProperty(JsWebAudioSound.prototype, 'priority', {get: function () {
    return this.priority_49uy6l$_0;
  }});
  Object.defineProperty(JsWebAudioSound.prototype, 'onCompleted', {get: function () {
    return this.onCompleted_hicddj$_0;
  }, set: function (onCompleted) {
    this.onCompleted_hicddj$_0 = onCompleted;
  }});
  Object.defineProperty(JsWebAudioSound.prototype, 'isPlaying', {get: function () {
    return this._isPlaying_0;
  }});
  JsWebAudioSound.prototype.complete_0 = function () {
    var tmp$;
    this._stopTime_0 = time.time.nowS();
    this._isPlaying_0 = false;
    (tmp$ = this.onCompleted) != null ? tmp$() : null;
    this.onCompleted = null;
    this.audioManager_0.unregisterSound_riitae$(this);
  };
  Object.defineProperty(JsWebAudioSound.prototype, 'loop', {get: function () {
    return this.audioBufferSourceNode_0.loop;
  }, set: function (value) {
    this.audioBufferSourceNode_0.loop = value;
  }});
  Object.defineProperty(JsWebAudioSound.prototype, 'volume', {get: function () {
    return this._volume_0;
  }, set: function (value) {
    this._volume_0 = value;
    var tmp$ = this.gain_0.gain;
    var value_0 = value * this.audioManager_0.soundVolume;
    var clamp_73gzaq$result;
    clamp_73gzaq$break: do {
      if (Kotlin.compareTo(value_0, 0.0) <= 0) {
        clamp_73gzaq$result = 0.0;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(value_0, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = value_0;
    }
     while (false);
    tmp$.value = clamp_73gzaq$result;
  }});
  JsWebAudioSound.prototype.setPosition_y2kzbl$ = function (x, y, z) {
    this.panner_0.setPosition(x, y, z);
  };
  JsWebAudioSound.prototype.start = function () {
    this.audioBufferSourceNode_0.start(this.context_0.currentTime);
    this._startTime_0 = time.time.nowS();
  };
  JsWebAudioSound.prototype.stop = function () {
    this.audioBufferSourceNode_0.stop(0.0);
  };
  Object.defineProperty(JsWebAudioSound.prototype, 'currentTime', {get: function () {
    if (!this._isPlaying_0)
      return this._stopTime_0 - this._startTime_0;
    else
      return time.time.nowS() - this._startTime_0;
  }});
  JsWebAudioSound.prototype.update = function () {
  };
  JsWebAudioSound.prototype.dispose = function () {
    this.stop();
  };
  function JsWebAudioSound_init$lambda(this$JsWebAudioSound) {
    return function (it) {
      this$JsWebAudioSound.complete_0();
      return Unit;
    };
  }
  JsWebAudioSound.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsWebAudioSound', interfaces: [Sound]};
  function JsWebAudioSoundFactory(audioManager, context, decodedData) {
    this.audioManager_0 = audioManager;
    this.context_0 = context;
    this.decodedData_0 = decodedData;
    this.defaultPriority_2ncy9u$_0 = 0.0;
    this.audioManager_0.registerSoundSource_bl6c9o$(this);
  }
  Object.defineProperty(JsWebAudioSoundFactory.prototype, 'defaultPriority', {get: function () {
    return this.defaultPriority_2ncy9u$_0;
  }, set: function (defaultPriority) {
    this.defaultPriority_2ncy9u$_0 = defaultPriority;
  }});
  Object.defineProperty(JsWebAudioSoundFactory.prototype, 'duration', {get: function () {
    return get_duration(this.decodedData_0);
  }});
  JsWebAudioSoundFactory.prototype.createInstance_mx4ult$ = function (priority) {
    if (!this.audioManager_0.canPlaySound_mx4ult$(priority))
      return null;
    return new JsWebAudioSound(this.audioManager_0, this.context_0, this.decodedData_0, priority);
  };
  JsWebAudioSoundFactory.prototype.dispose = function () {
    this.audioManager_0.unregisterSoundSource_bl6c9o$(this);
  };
  JsWebAudioSoundFactory.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsWebAudioSoundFactory', interfaces: [SoundFactory]};
  function get_duration($receiver) {
    return $receiver.duration;
  }
  function JsWebAudioSoundLoader(path, audioManager) {
    if (path === void 0)
      path = '';
    this.path_ucv7dt$_0 = path;
    this.audioManager_0 = audioManager;
    this.type_ua8sd2$_0 = AssetType.Companion.SOUND;
    this.fileLoader_0 = new JsArrayBufferRequest(new UrlRequestData(this.path));
    this.work_0 = null;
    if (!audioContextSupported) {
      throw Exception_init('Audio not supported in this browser.');
    }
    this.work_0 = async(JsWebAudioSoundLoader_init$lambda(this));
  }
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'path', {get: function () {
    return this.path_ucv7dt$_0;
  }});
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'type', {get: function () {
    return this.type_ua8sd2$_0;
  }});
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'secondsLoaded', {get: function () {
    return this.fileLoader_0.secondsLoaded;
  }});
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'secondsTotal', {get: function () {
    return this.fileLoader_0.secondsTotal;
  }});
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'status', {get: function () {
    return this.work_0.status;
  }});
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'result', {get: function () {
    return this.work_0.result;
  }});
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'error', {get: function () {
    return this.work_0.error;
  }});
  JsWebAudioSoundLoader.prototype.await = function (continuation) {
    return this.work_0.await(continuation);
  };
  JsWebAudioSoundLoader.prototype.cancel = function () {
    this.fileLoader_0.cancel();
  };
  function JsWebAudioSoundLoader_init$lambda(this$JsWebAudioSoundLoader_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsWebAudioSoundLoader_init$lambda(this$JsWebAudioSoundLoader_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsWebAudioSoundLoader_init$lambda(this$JsWebAudioSoundLoader_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsWebAudioSoundLoader = this$JsWebAudioSoundLoader_0;
    this.local$tmp$ = void 0;
    this.local$context = void 0;
  }
  Coroutine$JsWebAudioSoundLoader_init$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsWebAudioSoundLoader_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsWebAudioSoundLoader_init$lambda.prototype.constructor = Coroutine$JsWebAudioSoundLoader_init$lambda;
  Coroutine$JsWebAudioSoundLoader_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$context = JsAudioContext_getInstance().instance;
            this.state_0 = 2;
            this.result_0 = this.local$this$JsWebAudioSoundLoader.fileLoader_0.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var decodedData = decodeAudioData(this.local$context, this.result_0);
            this.local$tmp$ = this.local$this$JsWebAudioSoundLoader.audioManager_0;
            this.state_0 = 3;
            this.result_0 = decodedData.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return new JsWebAudioSoundFactory(this.local$tmp$, this.local$context, this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsWebAudioSoundLoader.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsWebAudioSoundLoader', interfaces: [AssetLoader]};
  function JsCursorManager(canvas) {
    CursorManagerBase.call(this);
    this.canvas_0 = canvas;
    var $receiver = cursor.StandardCursors;
    $receiver.ALIAS = new JsStandardCursor('alias', this.canvas_0);
    $receiver.ALL_SCROLL = new JsStandardCursor('all-scroll', this.canvas_0);
    $receiver.CELL = new JsStandardCursor('cell', this.canvas_0);
    $receiver.COPY = new JsStandardCursor('copy', this.canvas_0);
    $receiver.CROSSHAIR = new JsStandardCursor('crosshair', this.canvas_0);
    $receiver.DEFAULT = new JsStandardCursor('default', this.canvas_0);
    $receiver.HAND = new JsStandardCursor('pointer', this.canvas_0);
    $receiver.HELP = new JsStandardCursor('help', this.canvas_0);
    $receiver.IBEAM = new JsStandardCursor('text', this.canvas_0);
    $receiver.MOVE = new JsStandardCursor('move', this.canvas_0);
    $receiver.NONE = new JsStandardCursor('none', this.canvas_0);
    $receiver.NOT_ALLOWED = new JsStandardCursor('not-allowed', this.canvas_0);
    $receiver.POINTER_WAIT = new JsStandardCursor('progress', this.canvas_0);
    $receiver.RESIZE_E = new JsStandardCursor('e-resize', this.canvas_0);
    $receiver.RESIZE_N = new JsStandardCursor('n-resize', this.canvas_0);
    $receiver.RESIZE_NE = new JsStandardCursor('ne-resize', this.canvas_0);
    $receiver.RESIZE_SE = new JsStandardCursor('se-resize', this.canvas_0);
    $receiver.WAIT = new JsStandardCursor('wait', this.canvas_0);
  }
  JsCursorManager.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsCursorManager', interfaces: [CursorManagerBase]};
  function JsStandardCursor(identifier, canvas) {
    LifecycleBase.call(this);
    this.identifier = identifier;
    this.canvas = canvas;
  }
  JsStandardCursor.prototype.onActivated = function () {
    this.canvas.style.cursor = this.identifier;
  };
  JsStandardCursor.prototype.onDeactivated = function () {
    this.canvas.style.cursor = 'auto';
  };
  JsStandardCursor.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsStandardCursor', interfaces: [Cursor, LifecycleBase]};
  function JsFileIoManager() {
    this.saveSupported_m5rbcw$_0 = true;
    this.filePicker_0 = null;
  }
  Object.defineProperty(JsFileIoManager.prototype, 'saveSupported', {get: function () {
    return this.saveSupported_m5rbcw$_0;
  }});
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function JsFileIoManager$changeHandler$lambda(this$JsFileIoManager, closure$onSuccess) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      var filePicker = this$JsFileIoManager.filePicker_0;
      if (filePicker != null) {
        var fileList = filePicker.files;
        if (fileList == null || fileList.length === 0) {
          tmp$_1 = null;
        }
         else {
          var tempList = ArrayList_init();
          tmp$ = fileList.length - 1 | 0;
          for (var i = 0; i <= tmp$; i++) {
            tmp$_0 = fileList[i];
            if (tmp$_0 == null) {
              continue;
            }
            tempList.add_11rb$(new JsFileReader(tmp$_0));
          }
          tmp$_1 = tempList;
        }
        var fileReaders = tmp$_1;
        if (fileReaders != null) {
          if (filePicker.multiple)
            closure$onSuccess(fileReaders);
          else
            closure$onSuccess(fileReaders.get_za3lpa$(0));
        }
      }
      return Unit;
    };
  }
  JsFileIoManager.prototype.changeHandler_0 = function (onSuccess) {
    return JsFileIoManager$changeHandler$lambda(this, onSuccess);
  };
  JsFileIoManager.prototype.createFilePicker_0 = function () {
    var tmp$, tmp$_0;
    if (document.body == null) {
      var $receiver = document.createElement('body');
      document.appendChild($receiver);
    }
    var newFilePicker = alwaysTrue(tmp$ = document.createElement('input'), HTMLInputElement) ? tmp$ : throwCCE();
    newFilePicker.type = 'file';
    newFilePicker.setAttribute('style', 'width: 0px; height: 0px; overflow: hidden;');
    newFilePicker.style.visibility = 'hidden';
    newFilePicker.onclick = null;
    (tmp$_0 = document.body) != null ? tmp$_0.appendChild(newFilePicker) : null;
    return newFilePicker;
  };
  JsFileIoManager.prototype.destroyFilePicker_0 = function () {
    var tmp$;
    var body = document.body;
    if (body != null && body.contains(this.filePicker_0)) {
      body.removeChild(alwaysTrue(tmp$ = this.filePicker_0, Node) ? tmp$ : throwCCE());
      this.filePicker_0 = null;
    }
  };
  JsFileIoManager.prototype.getFileReaders_0 = function (fileFilterGroups, onSuccess) {
    var tmp$, tmp$_0;
    tmp$ = this.filePicker_0;
    if (tmp$ == null) {
      throw IllegalStateException_init('Internal error: filePicker not created');
    }
    var filePicker = tmp$;
    filePicker.accept = (tmp$_0 = fileFilterGroups != null ? this.toFilterListStr_0(fileFilterGroups) : null) != null ? tmp$_0 : '';
    filePicker.onchange = this.changeHandler_0(onSuccess);
    filePicker.click();
  };
  function JsFileIoManager$toFilterListStr$lambda(this$JsFileIoManager) {
    return function (it) {
      return this$JsFileIoManager.toFilterListStr_1(it);
    };
  }
  JsFileIoManager.prototype.toFilterListStr_0 = function ($receiver) {
    var ua = window.navigator.userAgent;
    if (contains(ua, 'Safari/') && !contains(ua, 'Chrome/', true) && !contains(ua, 'Chromium', true))
      return '';
    return joinToString($receiver, ',', void 0, void 0, void 0, void 0, JsFileIoManager$toFilterListStr$lambda(this));
  };
  function JsFileIoManager$toFilterListStr$lambda_0(it) {
    return '.' + it;
  }
  JsFileIoManager.prototype.toFilterListStr_1 = function ($receiver) {
    return joinToString($receiver.extensions, ',', void 0, void 0, void 0, void 0, JsFileIoManager$toFilterListStr$lambda_0);
  };
  JsFileIoManager.prototype.pickFileForOpen_n96jzz$$default = function (fileFilterGroups, onSuccess) {
    var tmp$;
    this.destroyFilePicker_0();
    this.filePicker_0 = this.createFilePicker_0();
    this.getFileReaders_0(fileFilterGroups, typeof (tmp$ = onSuccess) === 'function' ? tmp$ : throwCCE());
  };
  JsFileIoManager.prototype.pickFilesForOpen_h14xhw$$default = function (fileFilterGroups, onSuccess) {
    var tmp$, tmp$_0;
    this.destroyFilePicker_0();
    this.filePicker_0 = this.createFilePicker_0();
    (tmp$ = this.filePicker_0) != null ? (tmp$.multiple = true) : null;
    this.getFileReaders_0(fileFilterGroups, typeof (tmp$_0 = onSuccess) === 'function' ? tmp$_0 : throwCCE());
  };
  JsFileIoManager.prototype.saveText_j5k4le$$default = function (text, fileFilterGroups, defaultFilename, defaultExtension) {
    this.saveData_0(text, defaultFilename);
  };
  JsFileIoManager.prototype.saveBinary_mbynv2$$default = function (data, fileFilterGroups, defaultFilename, defaultExtension) {
    this.saveData_0(data.native, defaultFilename);
  };
  function JsFileIoManager$saveData$lambda(closure$a, closure$url) {
    return function () {
      var tmp$;
      (tmp$ = document.body) != null ? tmp$.removeChild(closure$a) : null;
      URL.revokeObjectURL(closure$url);
      return Unit;
    };
  }
  JsFileIoManager.prototype.saveData_0 = function (data, defaultFilename) {
    var tmp$, tmp$_0;
    var type = 'application/octet-stream';
    var o = {};
    o['type'] = type;
    var file = new Blob([data], o);
    var nav = window.navigator;
    if (nav.msSaveOrOpenBlob)
      nav.msSaveOrOpenBlob(file, defaultFilename);
    else {
      var a = alwaysTrue(tmp$ = document.createElement('a'), HTMLAnchorElement) ? tmp$ : throwCCE();
      var url = URL.createObjectURL(file);
      a.href = url;
      a.download = defaultFilename;
      (tmp$_0 = document.body) != null ? tmp$_0.appendChild(a) : null;
      a.click();
      window.setTimeout(JsFileIoManager$saveData$lambda(a, url), 0);
    }
  };
  JsFileIoManager.prototype.dispose = function () {
    this.destroyFilePicker_0();
  };
  JsFileIoManager.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsFileIoManager', interfaces: [FileIoManager]};
  function JsFileReader(file) {
    this.file = file;
    this.name_5dpn58$_0 = this.file.name;
    this.size_5atan6$_0 = Kotlin.Long.fromInt(this.file.size);
    this.lastModified_5renmo$_0 = Kotlin.Long.fromInt(this.file.lastModified);
    this.reader_0 = new FileReader();
  }
  Object.defineProperty(JsFileReader.prototype, 'name', {get: function () {
    return this.name_5dpn58$_0;
  }});
  Object.defineProperty(JsFileReader.prototype, 'size', {get: function () {
    return this.size_5atan6$_0;
  }});
  Object.defineProperty(JsFileReader.prototype, 'lastModified', {get: function () {
    return this.lastModified_5renmo$_0;
  }});
  function JsFileReader$readAsString$ObjectLiteral(this$JsFileReader) {
    Promise.call(this);
    launch(JsFileReader$readAsString$JsFileReader$readAsString$ObjectLiteral_init$lambda(this$JsFileReader, this));
  }
  function JsFileReader$readAsString$JsFileReader$readAsString$ObjectLiteral_init$lambda$lambda(this$JsFileReader, this$) {
    return function (f) {
      var tmp$, tmp$_0;
      tmp$_0 = typeof (tmp$ = this$JsFileReader.reader_0.result) === 'string' ? tmp$ : throwCCE();
      this$.success_11rb$(tmp$_0);
      return Unit;
    };
  }
  function JsFileReader$readAsString$JsFileReader$readAsString$ObjectLiteral_init$lambda$lambda_0(this$JsFileReader, this$) {
    return function (f) {
      this$.fail_tcv7n7$(Exception_init(this$JsFileReader.reader_0.error.toString()));
      return Unit;
    };
  }
  function JsFileReader$readAsString$JsFileReader$readAsString$ObjectLiteral_init$lambda(this$JsFileReader_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsFileReader$readAsString$JsFileReader$readAsString$ObjectLiteral_init$lambda(this$JsFileReader_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsFileReader$readAsString$JsFileReader$readAsString$ObjectLiteral_init$lambda(this$JsFileReader_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsFileReader = this$JsFileReader_0;
    this.local$this$ = this$_0;
  }
  Coroutine$JsFileReader$readAsString$JsFileReader$readAsString$ObjectLiteral_init$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsFileReader$readAsString$JsFileReader$readAsString$ObjectLiteral_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsFileReader$readAsString$JsFileReader$readAsString$ObjectLiteral_init$lambda.prototype.constructor = Coroutine$JsFileReader$readAsString$JsFileReader$readAsString$ObjectLiteral_init$lambda;
  Coroutine$JsFileReader$readAsString$JsFileReader$readAsString$ObjectLiteral_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$JsFileReader.reader_0.onload = JsFileReader$readAsString$JsFileReader$readAsString$ObjectLiteral_init$lambda$lambda(this.local$this$JsFileReader, this.local$this$);
            this.local$this$JsFileReader.reader_0.onerror = JsFileReader$readAsString$JsFileReader$readAsString$ObjectLiteral_init$lambda$lambda_0(this.local$this$JsFileReader, this.local$this$);
            return this.local$this$JsFileReader.reader_0.readAsText(this.local$this$JsFileReader.file), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsFileReader$readAsString$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Promise]};
  JsFileReader.prototype.readAsString = function (continuation) {
    return (new JsFileReader$readAsString$ObjectLiteral(this)).await(continuation);
  };
  function JsFileReader$readAsBinary$ObjectLiteral(this$JsFileReader) {
    Promise.call(this);
    launch(JsFileReader$readAsBinary$JsFileReader$readAsBinary$ObjectLiteral_init$lambda(this$JsFileReader, this));
  }
  function JsFileReader$readAsBinary$JsFileReader$readAsBinary$ObjectLiteral_init$lambda$lambda(this$JsFileReader, this$) {
    return function (f) {
      var tmp$;
      var byteBuffer = new JsByteBuffer(new Uint8Array(alwaysTrue(tmp$ = this$JsFileReader.reader_0.result, ArrayBuffer) ? tmp$ : throwCCE()));
      this$.success_11rb$(byteBuffer);
      return Unit;
    };
  }
  function JsFileReader$readAsBinary$JsFileReader$readAsBinary$ObjectLiteral_init$lambda$lambda_0(this$JsFileReader, this$) {
    return function (f) {
      this$.fail_tcv7n7$(Exception_init(this$JsFileReader.reader_0.error.toString()));
      return Unit;
    };
  }
  function JsFileReader$readAsBinary$JsFileReader$readAsBinary$ObjectLiteral_init$lambda(this$JsFileReader_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsFileReader$readAsBinary$JsFileReader$readAsBinary$ObjectLiteral_init$lambda(this$JsFileReader_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsFileReader$readAsBinary$JsFileReader$readAsBinary$ObjectLiteral_init$lambda(this$JsFileReader_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsFileReader = this$JsFileReader_0;
    this.local$this$ = this$_0;
  }
  Coroutine$JsFileReader$readAsBinary$JsFileReader$readAsBinary$ObjectLiteral_init$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsFileReader$readAsBinary$JsFileReader$readAsBinary$ObjectLiteral_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsFileReader$readAsBinary$JsFileReader$readAsBinary$ObjectLiteral_init$lambda.prototype.constructor = Coroutine$JsFileReader$readAsBinary$JsFileReader$readAsBinary$ObjectLiteral_init$lambda;
  Coroutine$JsFileReader$readAsBinary$JsFileReader$readAsBinary$ObjectLiteral_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$JsFileReader.reader_0.onload = JsFileReader$readAsBinary$JsFileReader$readAsBinary$ObjectLiteral_init$lambda$lambda(this.local$this$JsFileReader, this.local$this$);
            this.local$this$JsFileReader.reader_0.onerror = JsFileReader$readAsBinary$JsFileReader$readAsBinary$ObjectLiteral_init$lambda$lambda_0(this.local$this$JsFileReader, this.local$this$);
            return this.local$this$JsFileReader.reader_0.readAsArrayBuffer(this.local$this$JsFileReader.file), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsFileReader$readAsBinary$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Promise]};
  JsFileReader.prototype.readAsBinary = function (continuation) {
    return (new JsFileReader$readAsBinary$ObjectLiteral(this)).await(continuation);
  };
  JsFileReader.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsFileReader', interfaces: [FileReader_0]};
  function WebGl20(context) {
    this.context_0 = context;
  }
  WebGl20.prototype.activeTexture_za3lpa$ = function (texture) {
    this.context_0.activeTexture(texture);
  };
  WebGl20.prototype.attachShader_62dx5d$ = function (program, shader) {
    var tmp$, tmp$_0;
    this.context_0.attachShader((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o, (Kotlin.isType(tmp$_0 = shader, WebGlShaderRef) ? tmp$_0 : throwCCE()).o);
  };
  WebGl20.prototype.bindAttribLocation_9ij5eg$ = function (program, index, name) {
    var tmp$;
    this.context_0.bindAttribLocation((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o, index, name);
  };
  WebGl20.prototype.bindBuffer_gtr22n$ = function (target, buffer) {
    var tmp$, tmp$_0;
    this.context_0.bindBuffer(target, (tmp$_0 = Kotlin.isType(tmp$ = buffer, WebGlBufferRef) ? tmp$ : null) != null ? tmp$_0.o : null);
  };
  WebGl20.prototype.bindFramebuffer_6chnl2$ = function (target, framebuffer) {
    var tmp$, tmp$_0;
    this.context_0.bindFramebuffer(target, (tmp$_0 = Kotlin.isType(tmp$ = framebuffer, WebGlFramebufferRef) ? tmp$ : null) != null ? tmp$_0.o : null);
  };
  WebGl20.prototype.bindRenderbuffer_abwfzf$ = function (target, renderbuffer) {
    var tmp$, tmp$_0;
    this.context_0.bindRenderbuffer(target, (tmp$_0 = Kotlin.isType(tmp$ = renderbuffer, WebGlRenderbufferRef) ? tmp$ : null) != null ? tmp$_0.o : null);
  };
  WebGl20.prototype.bindTexture_2s7dt8$ = function (target, texture) {
    var tmp$, tmp$_0;
    this.context_0.bindTexture(target, (tmp$_0 = Kotlin.isType(tmp$ = texture, WebGlTextureRef) ? tmp$ : null) != null ? tmp$_0.o : null);
  };
  WebGl20.prototype.blendColor_7b5o5w$ = function (red, green, blue, alpha) {
    this.context_0.blendColor(red, green, blue, alpha);
  };
  WebGl20.prototype.blendEquation_za3lpa$ = function (mode) {
    this.context_0.blendEquation(mode);
  };
  WebGl20.prototype.blendEquationSeparate_vux9f0$ = function (modeRGB, modeAlpha) {
    this.context_0.blendEquationSeparate(modeRGB, modeAlpha);
  };
  WebGl20.prototype.blendFunc_vux9f0$ = function (sfactor, dfactor) {
    this.context_0.blendFunc(sfactor, dfactor);
  };
  WebGl20.prototype.blendFuncSeparate_tjonv8$ = function (srcRGB, dstRGB, srcAlpha, dstAlpha) {
    this.context_0.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
  };
  WebGl20.prototype.bufferData_qt1dr2$ = function (target, size, usage) {
    this.context_0.bufferData(target, size, usage);
  };
  WebGl20.prototype.bufferDatabv_hei4ru$ = function (target, data, usage) {
    var tmp$;
    this.context_0.bufferData(target, alwaysTrue(tmp$ = data.native, Object) ? tmp$ : throwCCE(), usage);
  };
  WebGl20.prototype.bufferDatafv_j70xym$ = function (target, data, usage) {
    var tmp$;
    this.context_0.bufferData(target, alwaysTrue(tmp$ = data.native, Object) ? tmp$ : throwCCE(), usage);
  };
  WebGl20.prototype.bufferDatasv_bazfg2$ = function (target, data, usage) {
    var tmp$;
    this.context_0.bufferData(target, alwaysTrue(tmp$ = data.native, Object) ? tmp$ : throwCCE(), usage);
  };
  WebGl20.prototype.bufferSubDatafv_2103vu$ = function (target, offset, data) {
    var tmp$;
    this.context_0.bufferSubData(target, offset, alwaysTrue(tmp$ = data.native, Object) ? tmp$ : throwCCE());
  };
  WebGl20.prototype.bufferSubDatasv_84ed8q$ = function (target, offset, data) {
    var tmp$;
    this.context_0.bufferSubData(target, offset, alwaysTrue(tmp$ = data.native, Object) ? tmp$ : throwCCE());
  };
  WebGl20.prototype.checkFramebufferStatus_za3lpa$ = function (target) {
    return this.context_0.checkFramebufferStatus(target);
  };
  WebGl20.prototype.clear_za3lpa$ = function (mask) {
    this.context_0.clear(mask);
  };
  WebGl20.prototype.clearColor_7b5o5w$ = function (red, green, blue, alpha) {
    this.context_0.clearColor(red, green, blue, alpha);
  };
  WebGl20.prototype.clearDepth_mx4ult$ = function (depth) {
    this.context_0.clearDepth(depth);
  };
  WebGl20.prototype.clearStencil_za3lpa$ = function (s) {
    this.context_0.clearStencil(s);
  };
  WebGl20.prototype.colorMask_nyyhg$ = function (red, green, blue, alpha) {
    this.context_0.colorMask(red, green, blue, alpha);
  };
  WebGl20.prototype.compileShader_adcz9h$ = function (shader) {
    var tmp$;
    this.context_0.compileShader((alwaysTrue(tmp$ = shader, WebGlShaderRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.copyTexImage2D_wrdw30$ = function (target, level, internalFormat, x, y, width, height, border) {
    this.context_0.copyTexImage2D(target, level, internalFormat, x, y, width, height, border);
  };
  WebGl20.prototype.copyTexSubImage2D_wrdw30$ = function (target, level, xOffset, yOffset, x, y, width, height) {
    this.context_0.copyTexSubImage2D(target, level, xOffset, yOffset, x, y, width, height);
  };
  WebGl20.prototype.createBuffer = function () {
    return new WebGlBufferRef(ensureNotNull(this.context_0.createBuffer()));
  };
  WebGl20.prototype.createFramebuffer = function () {
    return new WebGlFramebufferRef(ensureNotNull(this.context_0.createFramebuffer()));
  };
  WebGl20.prototype.createProgram = function () {
    return new WebGlProgramRef(ensureNotNull(this.context_0.createProgram()));
  };
  WebGl20.prototype.createRenderbuffer = function () {
    return new WebGlRenderbufferRef(ensureNotNull(this.context_0.createRenderbuffer()));
  };
  WebGl20.prototype.createShader_za3lpa$ = function (type) {
    return new WebGlShaderRef(ensureNotNull(this.context_0.createShader(type)));
  };
  WebGl20.prototype.createTexture = function () {
    return new WebGlTextureRef(ensureNotNull(this.context_0.createTexture()));
  };
  WebGl20.prototype.cullFace_za3lpa$ = function (mode) {
    this.context_0.cullFace(mode);
  };
  WebGl20.prototype.deleteBuffer_qv4l9y$ = function (buffer) {
    var tmp$;
    this.context_0.deleteBuffer((alwaysTrue(tmp$ = buffer, WebGlBufferRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.deleteFramebuffer_ljn901$ = function (framebuffer) {
    var tmp$;
    this.context_0.deleteFramebuffer((alwaysTrue(tmp$ = framebuffer, WebGlFramebufferRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.deleteProgram_bf3f0o$ = function (program) {
    var tmp$;
    this.context_0.deleteProgram((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.deleteRenderbuffer_x108uk$ = function (renderbuffer) {
    var tmp$;
    this.context_0.deleteRenderbuffer((alwaysTrue(tmp$ = renderbuffer, WebGlRenderbufferRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.deleteShader_adcz9h$ = function (shader) {
    var tmp$;
    this.context_0.deleteShader((alwaysTrue(tmp$ = shader, WebGlShaderRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.deleteTexture_yq8m69$ = function (texture) {
    var tmp$;
    this.context_0.deleteTexture((alwaysTrue(tmp$ = texture, WebGlTextureRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.depthFunc_za3lpa$ = function (func) {
    this.context_0.depthFunc(func);
  };
  WebGl20.prototype.depthMask_6taknv$ = function (flag) {
    this.context_0.depthMask(flag);
  };
  WebGl20.prototype.depthRange_dleff0$ = function (zNear, zFar) {
    this.context_0.depthRange(zNear, zFar);
  };
  WebGl20.prototype.detachShader_62dx5d$ = function (program, shader) {
    var tmp$, tmp$_0;
    this.context_0.detachShader((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o, (Kotlin.isType(tmp$_0 = shader, WebGlShaderRef) ? tmp$_0 : throwCCE()).o);
  };
  WebGl20.prototype.disable_za3lpa$ = function (cap) {
    this.context_0.disable(cap);
  };
  WebGl20.prototype.disableVertexAttribArray_za3lpa$ = function (index) {
    this.context_0.disableVertexAttribArray(index);
  };
  WebGl20.prototype.drawArrays_qt1dr2$ = function (mode, first, count) {
    this.context_0.drawArrays(mode, first, count);
  };
  WebGl20.prototype.drawElements_tjonv8$ = function (mode, count, type, offset) {
    this.context_0.drawElements(mode, count, type, offset);
  };
  WebGl20.prototype.enable_za3lpa$ = function (cap) {
    this.context_0.enable(cap);
  };
  WebGl20.prototype.enableVertexAttribArray_za3lpa$ = function (index) {
    this.context_0.enableVertexAttribArray(index);
  };
  WebGl20.prototype.finish = function () {
    this.context_0.finish();
  };
  WebGl20.prototype.flush = function () {
    this.context_0.flush();
  };
  WebGl20.prototype.framebufferRenderbuffer_4jii3u$ = function (target, attachment, renderbufferTarget, renderbuffer) {
    var tmp$;
    this.context_0.framebufferRenderbuffer(target, attachment, renderbufferTarget, (alwaysTrue(tmp$ = renderbuffer, WebGlRenderbufferRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.framebufferTexture2D_sivm59$ = function (target, attachment, textureTarget, texture, level) {
    var tmp$;
    this.context_0.framebufferTexture2D(target, attachment, textureTarget, (alwaysTrue(tmp$ = texture, WebGlTextureRef) ? tmp$ : throwCCE()).o, level);
  };
  WebGl20.prototype.frontFace_za3lpa$ = function (mode) {
    this.context_0.frontFace(mode);
  };
  WebGl20.prototype.generateMipmap_za3lpa$ = function (target) {
    this.context_0.generateMipmap(target);
  };
  WebGl20.prototype.getActiveAttrib_q5fai$ = function (program, index) {
    var tmp$;
    return new WebGlActiveInfoRef(ensureNotNull(this.context_0.getActiveAttrib((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o, index)));
  };
  WebGl20.prototype.getActiveUniform_q5fai$ = function (program, index) {
    var tmp$;
    return new WebGlActiveInfoRef(ensureNotNull(this.context_0.getActiveUniform((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o, index)));
  };
  var Array_0 = Array;
  WebGl20.prototype.getAttachedShaders_bf3f0o$ = function (program) {
    var tmp$, tmp$_0;
    var src = (tmp$_0 = this.context_0.getAttachedShaders((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o)) != null ? tmp$_0 : [];
    var array = Array_0(src.length);
    var tmp$_1;
    tmp$_1 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_1; i++) {
      array[i] = new WebGlShaderRef(src[i]);
    }
    var out = array;
    return out;
  };
  WebGl20.prototype.getAttribLocation_stzeiy$ = function (program, name) {
    var tmp$;
    return this.context_0.getAttribLocation((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o, name);
  };
  WebGl20.prototype.getError = function () {
    return this.context_0.getError();
  };
  WebGl20.prototype.getProgramInfoLog_bf3f0o$ = function (program) {
    var tmp$;
    return this.context_0.getProgramInfoLog((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.getShaderInfoLog_adcz9h$ = function (shader) {
    var tmp$;
    return this.context_0.getShaderInfoLog((alwaysTrue(tmp$ = shader, WebGlShaderRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.getUniformLocation_stzeiy$ = function (program, name) {
    var tmp$, tmp$_0;
    tmp$_0 = this.context_0.getUniformLocation((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o, name);
    if (tmp$_0 == null) {
      return null;
    }
    var uniformLocation = tmp$_0;
    return new WebGlUniformLocationRef(uniformLocation);
  };
  WebGl20.prototype.hint_vux9f0$ = function (target, mode) {
    return this.context_0.hint(target, mode);
  };
  WebGl20.prototype.isBuffer_qv4l9y$ = function (buffer) {
    var tmp$;
    return this.context_0.isBuffer((alwaysTrue(tmp$ = buffer, WebGlBufferRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.isEnabled_za3lpa$ = function (cap) {
    return this.context_0.isEnabled(cap);
  };
  WebGl20.prototype.isFramebuffer_ljn901$ = function (framebuffer) {
    var tmp$;
    return this.context_0.isFramebuffer((alwaysTrue(tmp$ = framebuffer, WebGlFramebufferRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.isProgram_bf3f0o$ = function (program) {
    var tmp$;
    return this.context_0.isProgram((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.isRenderbuffer_x108uk$ = function (renderbuffer) {
    var tmp$;
    return this.context_0.isRenderbuffer((alwaysTrue(tmp$ = renderbuffer, WebGlRenderbufferRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.isShader_adcz9h$ = function (shader) {
    var tmp$;
    return this.context_0.isShader((alwaysTrue(tmp$ = shader, WebGlShaderRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.isTexture_yq8m69$ = function (texture) {
    var tmp$;
    return this.context_0.isTexture((alwaysTrue(tmp$ = texture, WebGlTextureRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.lineWidth_mx4ult$ = function (width) {
    this.context_0.lineWidth(width);
  };
  WebGl20.prototype.linkProgram_bf3f0o$ = function (program) {
    var tmp$;
    this.context_0.linkProgram((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.pixelStorei_vux9f0$ = function (pName, param) {
    this.context_0.pixelStorei(pName, param);
  };
  WebGl20.prototype.polygonOffset_dleff0$ = function (factor, units) {
    this.context_0.polygonOffset(factor, units);
  };
  WebGl20.prototype.readPixels_owzn1q$ = function (x, y, width, height, format, type, pixels) {
    var tmp$;
    this.context_0.readPixels(x, y, width, height, format, type, alwaysTrue(tmp$ = pixels.native, Object) ? tmp$ : throwCCE());
  };
  WebGl20.prototype.renderbufferStorage_tjonv8$ = function (target, internalFormat, width, height) {
    this.context_0.renderbufferStorage(target, internalFormat, width, height);
  };
  WebGl20.prototype.sampleCoverage_8ca0d4$ = function (value, invert) {
    this.context_0.sampleCoverage(value, invert);
  };
  WebGl20.prototype.scissor_tjonv8$ = function (x, y, width, height) {
    this.context_0.scissor(x, y, width, height);
  };
  WebGl20.prototype.shaderSource_cwqujt$ = function (shader, source) {
    var tmp$;
    this.context_0.shaderSource((alwaysTrue(tmp$ = shader, WebGlShaderRef) ? tmp$ : throwCCE()).o, source);
  };
  WebGl20.prototype.stencilFunc_qt1dr2$ = function (func, ref, mask) {
    this.context_0.stencilFunc(func, ref, mask);
  };
  WebGl20.prototype.stencilFuncSeparate_tjonv8$ = function (face, func, ref, mask) {
    this.context_0.stencilFuncSeparate(face, func, ref, mask);
  };
  WebGl20.prototype.stencilMask_za3lpa$ = function (mask) {
    this.context_0.stencilMask(mask);
  };
  WebGl20.prototype.stencilMaskSeparate_vux9f0$ = function (face, mask) {
    this.context_0.stencilMaskSeparate(face, mask);
  };
  WebGl20.prototype.stencilOp_qt1dr2$ = function (fail, zfail, zpass) {
    this.context_0.stencilOp(fail, zfail, zpass);
  };
  WebGl20.prototype.stencilOpSeparate_tjonv8$ = function (face, fail, zfail, zpass) {
    this.context_0.stencilOpSeparate(face, fail, zfail, zpass);
  };
  WebGl20.prototype.texImage2Db_npa8mn$ = function (target, level, internalFormat, width, height, border, format, type, pixels) {
    this.context_0.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels != null ? pixels.native : null);
  };
  WebGl20.prototype.texImage2Df_s0ir6d$ = function (target, level, internalFormat, width, height, border, format, type, pixels) {
    this.context_0.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels != null ? pixels.native : null);
  };
  WebGl20.prototype.texImage2D_ab2lua$ = function (target, level, internalFormat, format, type, texture) {
    var tmp$;
    this.context_0.texImage2D(target, level, internalFormat, format, type, (alwaysTrue(tmp$ = texture, WebGlTexture) ? tmp$ : throwCCE()).image);
  };
  WebGl20.prototype.texParameterf_n0b4r3$ = function (target, pName, param) {
    this.context_0.texParameterf(target, pName, param);
  };
  WebGl20.prototype.texParameteri_qt1dr2$ = function (target, pName, param) {
    this.context_0.texParameteri(target, pName, param);
  };
  WebGl20.prototype.texSubImage2D_lk17dw$ = function (target, level, xOffset, yOffset, format, type, texture) {
    var tmp$;
    this.context_0.texSubImage2D(target, level, xOffset, yOffset, format, type, (alwaysTrue(tmp$ = texture, WebGlTexture) ? tmp$ : throwCCE()).image);
  };
  WebGl20.prototype.uniform1f_5w6wo$ = function (location, x) {
    var tmp$;
    this.context_0.uniform1f((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, x);
  };
  WebGl20.prototype.uniform1fv_jd42vl$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform1fv((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Float32Array) ? tmp$_0 : throwCCE());
  };
  WebGl20.prototype.uniform1i_y004uz$ = function (location, x) {
    var tmp$;
    this.context_0.uniform1i((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, x);
  };
  WebGl20.prototype.uniform1iv_8h7zz6$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform1iv((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Int32Array) ? tmp$_0 : throwCCE());
  };
  WebGl20.prototype.uniform2f_419b65$ = function (location, x, y) {
    var tmp$;
    this.context_0.uniform2f((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, x, y);
  };
  WebGl20.prototype.uniform2fv_jd42vl$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform2fv((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Float32Array) ? tmp$_0 : throwCCE());
  };
  WebGl20.prototype.uniform2i_2fdgq5$ = function (location, x, y) {
    var tmp$;
    this.context_0.uniform2i((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, x, y);
  };
  WebGl20.prototype.uniform2iv_8h7zz6$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform2iv((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Int32Array) ? tmp$_0 : throwCCE());
  };
  WebGl20.prototype.uniform3f_oyxfc8$ = function (location, x, y, z) {
    var tmp$;
    this.context_0.uniform3f((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, x, y, z);
  };
  WebGl20.prototype.uniform3fv_jd42vl$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform3fv((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Float32Array) ? tmp$_0 : throwCCE());
  };
  WebGl20.prototype.uniform3i_8egqxx$ = function (location, x, y, z) {
    var tmp$;
    this.context_0.uniform3i((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, x, y, z);
  };
  WebGl20.prototype.uniform3iv_8h7zz6$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform3iv((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Int32Array) ? tmp$_0 : throwCCE());
  };
  WebGl20.prototype.uniform4f_b6e565$ = function (location, x, y, z, w) {
    var tmp$;
    this.context_0.uniform4f((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, x, y, z, w);
  };
  WebGl20.prototype.uniform4fv_jd42vl$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform4fv((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Float32Array) ? tmp$_0 : throwCCE());
  };
  WebGl20.prototype.uniform4i_faf5yl$ = function (location, x, y, z, w) {
    var tmp$;
    this.context_0.uniform4i((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, x, y, z, w);
  };
  WebGl20.prototype.uniform4iv_8h7zz6$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform4iv((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Int32Array) ? tmp$_0 : throwCCE());
  };
  WebGl20.prototype.uniformMatrix2fv_5hw48e$ = function (location, transpose, value) {
    var tmp$, tmp$_0;
    this.context_0.uniformMatrix2fv((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, transpose, Kotlin.isType(tmp$_0 = value.native, Float32Array) ? tmp$_0 : throwCCE());
  };
  WebGl20.prototype.uniformMatrix3fv_5hw48e$ = function (location, transpose, value) {
    var tmp$, tmp$_0;
    this.context_0.uniformMatrix3fv((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, transpose, Kotlin.isType(tmp$_0 = value.native, Float32Array) ? tmp$_0 : throwCCE());
  };
  WebGl20.prototype.uniformMatrix4fv_5hw48e$ = function (location, transpose, value) {
    var tmp$, tmp$_0;
    this.context_0.uniformMatrix4fv((alwaysTrue(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : throwCCE()).o, transpose, Kotlin.isType(tmp$_0 = value.native, Float32Array) ? tmp$_0 : throwCCE());
  };
  WebGl20.prototype.useProgram_15mccn$ = function (program) {
    var tmp$, tmp$_0;
    this.context_0.useProgram((tmp$_0 = Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : null) != null ? tmp$_0.o : null);
  };
  WebGl20.prototype.validateProgram_bf3f0o$ = function (program) {
    var tmp$;
    this.context_0.validateProgram((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o);
  };
  WebGl20.prototype.vertexAttrib1f_24o109$ = function (index, x) {
    this.context_0.vertexAttrib1f(index, x);
  };
  WebGl20.prototype.vertexAttrib1fv_jrl480$ = function (index, values) {
    var tmp$;
    this.context_0.vertexAttrib1fv(index, alwaysTrue(tmp$ = values.native, Float32Array) ? tmp$ : throwCCE());
  };
  WebGl20.prototype.vertexAttrib2f_nhq4am$ = function (index, x, y) {
    this.context_0.vertexAttrib2f(index, x, y);
  };
  WebGl20.prototype.vertexAttrib2fv_jrl480$ = function (index, values) {
    var tmp$;
    this.context_0.vertexAttrib2fv(index, alwaysTrue(tmp$ = values.native, Float32Array) ? tmp$ : throwCCE());
  };
  WebGl20.prototype.vertexAttrib3f_eyukp3$ = function (index, x, y, z) {
    this.context_0.vertexAttrib3f(index, x, y, z);
  };
  WebGl20.prototype.vertexAttrib3fv_jrl480$ = function (index, values) {
    var tmp$;
    this.context_0.vertexAttrib3fv(index, alwaysTrue(tmp$ = values.native, Float32Array) ? tmp$ : throwCCE());
  };
  WebGl20.prototype.vertexAttrib4f_xpxj32$ = function (index, x, y, z, w) {
    this.context_0.vertexAttrib4f(index, x, y, z, w);
  };
  WebGl20.prototype.vertexAttrib4fv_jrl480$ = function (index, values) {
    var tmp$;
    this.context_0.vertexAttrib4fv(index, alwaysTrue(tmp$ = values.native, Float32Array) ? tmp$ : throwCCE());
  };
  WebGl20.prototype.vertexAttribPointer_owihk5$ = function (index, size, type, normalized, stride, offset) {
    this.context_0.vertexAttribPointer(index, size, type, normalized, stride, offset);
  };
  WebGl20.prototype.viewport_tjonv8$ = function (x, y, width, height) {
    this.context_0.viewport(x, y, width, height);
  };
  WebGl20.prototype.getUniformb_x4nmrd$ = function (program, location) {
    var tmp$, tmp$_0, tmp$_1;
    return typeof (tmp$_1 = this.context_0.getUniform((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o, (Kotlin.isType(tmp$_0 = location, WebGlUniformLocationRef) ? tmp$_0 : throwCCE()).o)) === 'boolean' ? tmp$_1 : throwCCE();
  };
  WebGl20.prototype.getUniformi_x4nmrd$ = function (program, location) {
    var tmp$, tmp$_0, tmp$_1;
    return typeof (tmp$_1 = this.context_0.getUniform((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o, (Kotlin.isType(tmp$_0 = location, WebGlUniformLocationRef) ? tmp$_0 : throwCCE()).o)) === 'number' ? tmp$_1 : throwCCE();
  };
  WebGl20.prototype.getUniformf_x4nmrd$ = function (program, location) {
    var tmp$, tmp$_0, tmp$_1;
    return typeof (tmp$_1 = this.context_0.getUniform((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o, (Kotlin.isType(tmp$_0 = location, WebGlUniformLocationRef) ? tmp$_0 : throwCCE()).o)) === 'number' ? tmp$_1 : throwCCE();
  };
  WebGl20.prototype.getVertexAttribi_vux9f0$ = function (index, pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getVertexAttrib(index, pName)) === 'number' ? tmp$ : throwCCE();
  };
  WebGl20.prototype.getVertexAttribb_vux9f0$ = function (index, pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getVertexAttrib(index, pName)) === 'boolean' ? tmp$ : throwCCE();
  };
  WebGl20.prototype.getTexParameter_vux9f0$ = function (target, pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getTexParameter(target, pName)) === 'number' ? tmp$ : throwCCE();
  };
  WebGl20.prototype.getShaderParameterb_v5gftj$ = function (shader, pName) {
    var tmp$, tmp$_0;
    return typeof (tmp$_0 = this.context_0.getShaderParameter((alwaysTrue(tmp$ = shader, WebGlShaderRef) ? tmp$ : throwCCE()).o, pName)) === 'boolean' ? tmp$_0 : throwCCE();
  };
  WebGl20.prototype.getShaderParameteri_v5gftj$ = function (shader, pName) {
    var tmp$, tmp$_0;
    return typeof (tmp$_0 = this.context_0.getShaderParameter((alwaysTrue(tmp$ = shader, WebGlShaderRef) ? tmp$ : throwCCE()).o, pName)) === 'number' ? tmp$_0 : throwCCE();
  };
  WebGl20.prototype.getRenderbufferParameter_vux9f0$ = function (target, pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getRenderbufferParameter(target, pName)) === 'number' ? tmp$ : throwCCE();
  };
  WebGl20.prototype.getParameterb_za3lpa$ = function (pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getParameter(pName)) === 'boolean' ? tmp$ : throwCCE();
  };
  WebGl20.prototype.getParameteri_za3lpa$ = function (pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getParameter(pName)) === 'number' ? tmp$ : throwCCE();
  };
  WebGl20.prototype.getProgramParameterb_q5fai$ = function (program, pName) {
    var tmp$, tmp$_0;
    return typeof (tmp$_0 = this.context_0.getProgramParameter((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o, pName)) === 'boolean' ? tmp$_0 : throwCCE();
  };
  WebGl20.prototype.getProgramParameteri_q5fai$ = function (program, pName) {
    var tmp$, tmp$_0;
    var r = this.context_0.getProgramParameter((alwaysTrue(tmp$ = program, WebGlProgramRef) ? tmp$ : throwCCE()).o, pName);
    return numberToInt(Kotlin.isNumber(tmp$_0 = r) ? tmp$_0 : throwCCE());
  };
  WebGl20.prototype.getBufferParameter_vux9f0$ = function (target, pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getBufferParameter(target, pName)) === 'number' ? tmp$ : throwCCE();
  };
  WebGl20.prototype.getFramebufferAttachmentParameteri_qt1dr2$ = function (target, attachment, pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getFramebufferAttachmentParameter(target, attachment, pName)) === 'number' ? tmp$ : throwCCE();
  };
  WebGl20.prototype.getSupportedExtensions = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.context_0.getSupportedExtensions()) != null ? toList(tmp$) : null) != null ? tmp$_0 : emptyList();
  };
  WebGl20.prototype.getExtension_61zpoe$ = function (name) {
    return this.context_0.getExtension(name);
  };
  WebGl20.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebGl20', interfaces: [Gl20]};
  function WebGlProgramRef(o) {
    this.o = o;
  }
  WebGlProgramRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebGlProgramRef', interfaces: [GlProgramRef]};
  function WebGlShaderRef(o) {
    this.o = o;
  }
  WebGlShaderRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebGlShaderRef', interfaces: [GlShaderRef]};
  function WebGlBufferRef(o) {
    this.o = o;
  }
  WebGlBufferRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebGlBufferRef', interfaces: [GlBufferRef]};
  function WebGlFramebufferRef(o) {
    this.o = o;
  }
  WebGlFramebufferRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebGlFramebufferRef', interfaces: [GlFramebufferRef]};
  function WebGlRenderbufferRef(o) {
    this.o = o;
  }
  WebGlRenderbufferRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebGlRenderbufferRef', interfaces: [GlRenderbufferRef]};
  function WebGlTextureRef(o) {
    this.o = o;
  }
  WebGlTextureRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebGlTextureRef', interfaces: [GlTextureRef]};
  function WebGlActiveInfoRef(o) {
    this.o = o;
  }
  Object.defineProperty(WebGlActiveInfoRef.prototype, 'name', {get: function () {
    return this.o.name;
  }, set: function (value) {
    throw UnsupportedOperationException_init();
  }});
  Object.defineProperty(WebGlActiveInfoRef.prototype, 'size', {get: function () {
    return this.o.size;
  }, set: function (value) {
    throw UnsupportedOperationException_init();
  }});
  Object.defineProperty(WebGlActiveInfoRef.prototype, 'type', {get: function () {
    return this.o.type;
  }, set: function (value) {
    throw UnsupportedOperationException_init();
  }});
  WebGlActiveInfoRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebGlActiveInfoRef', interfaces: [GlActiveInfoRef]};
  function WebGlUniformLocationRef(o) {
    this.o = o;
  }
  WebGlUniformLocationRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebGlUniformLocationRef', interfaces: [GlUniformLocationRef]};
  function WebGlApplication(rootId) {
    WebGlApplication$Companion_getInstance();
    JsApplicationBase.call(this);
    this.rootId_9f80uw$_0 = rootId;
    this.canvasTask_hj0jwo$_0 = (new ApplicationBase$BootTask(WebGlApplication$canvasTask$lambda(this))).provideDelegate_ff3vde$(this, WebGlApplication$canvasTask_metadata);
    this.glTask_unnm05$_0 = (new ApplicationBase$BootTask(WebGlApplication$glTask$lambda(this))).provideDelegate_ff3vde$(this, WebGlApplication$glTask_metadata);
    this.windowTask_94te0g$_0 = (new ApplicationBase$BootTask(WebGlApplication$windowTask$lambda(this))).provideDelegate_ff3vde$(this, WebGlApplication$windowTask_metadata);
    this.glStateTask_v4bzpe$_0 = (new ApplicationBase$BootTask(WebGlApplication$glStateTask$lambda(this))).provideDelegate_ff3vde$(this, WebGlApplication$glStateTask_metadata);
    this.textureLoaderTask_be3nvg$_0 = (new ApplicationBase$BootTask(WebGlApplication$textureLoaderTask$lambda)).provideDelegate_ff3vde$(this, WebGlApplication$textureLoaderTask_metadata);
    this.componentsTask_5cfbd6$_0 = (new ApplicationBase$BootTask(WebGlApplication$componentsTask$lambda(this))).provideDelegate_ff3vde$(this, WebGlApplication$componentsTask_metadata);
    this.focusManagerTask_mjf617$_0 = (new ApplicationBase$BootTask(WebGlApplication$focusManagerTask$lambda(this))).provideDelegate_ff3vde$(this, WebGlApplication$focusManagerTask_metadata);
  }
  var WebGlApplication$canvasTask_metadata = new PropertyMetadata('canvasTask');
  Object.defineProperty(WebGlApplication.prototype, 'canvasTask', {get: function () {
    return this.canvasTask_hj0jwo$_0.getValue_lrcp0p$(this, WebGlApplication$canvasTask_metadata);
  }});
  var WebGlApplication$glTask_metadata = new PropertyMetadata('glTask');
  Object.defineProperty(WebGlApplication.prototype, 'glTask', {get: function () {
    return this.glTask_unnm05$_0.getValue_lrcp0p$(this, WebGlApplication$glTask_metadata);
  }});
  var WebGlApplication$windowTask_metadata = new PropertyMetadata('windowTask');
  Object.defineProperty(WebGlApplication.prototype, 'windowTask', {get: function () {
    return this.windowTask_94te0g$_0.getValue_lrcp0p$(this, WebGlApplication$windowTask_metadata);
  }});
  var WebGlApplication$glStateTask_metadata = new PropertyMetadata('glStateTask');
  Object.defineProperty(WebGlApplication.prototype, 'glStateTask', {get: function () {
    return this.glStateTask_v4bzpe$_0.getValue_lrcp0p$(this, WebGlApplication$glStateTask_metadata);
  }});
  var WebGlApplication$textureLoaderTask_metadata = new PropertyMetadata('textureLoaderTask');
  Object.defineProperty(WebGlApplication.prototype, 'textureLoaderTask', {get: function () {
    return this.textureLoaderTask_be3nvg$_0.getValue_lrcp0p$(this, WebGlApplication$textureLoaderTask_metadata);
  }});
  function WebGlApplication$addAssetLoaders$lambda$lambda(closure$gl, closure$glState) {
    return function (path, estimatedBytesTotal) {
      return new WebGlTextureLoader(path, estimatedBytesTotal, closure$gl, closure$glState);
    };
  }
  function WebGlApplication$addAssetLoaders$lambda(this$WebGlApplication_0, closure$loaders_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$WebGlApplication$addAssetLoaders$lambda(this$WebGlApplication_0, closure$loaders_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$WebGlApplication$addAssetLoaders$lambda(this$WebGlApplication_0, closure$loaders_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$WebGlApplication = this$WebGlApplication_0;
    this.local$closure$loaders = closure$loaders_0;
    this.local$gl = void 0;
  }
  Coroutine$WebGlApplication$addAssetLoaders$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$WebGlApplication$addAssetLoaders$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebGlApplication$addAssetLoaders$lambda.prototype.constructor = Coroutine$WebGlApplication$addAssetLoaders$lambda;
  Coroutine$WebGlApplication$addAssetLoaders$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$WebGlApplication.get_li8edk$(Gl20.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$gl = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$WebGlApplication.get_li8edk$(GlState.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var glState = this.result_0;
            var $receiver = this.local$closure$loaders;
            var key = AssetType.Companion.TEXTURE;
            $receiver.put_xwzc9p$(key, WebGlApplication$addAssetLoaders$lambda$lambda(this.local$gl, glState));
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  WebGlApplication.prototype.addAssetLoaders_qs3r5d$ = function (loaders) {
    JsApplicationBase.prototype.addAssetLoaders_qs3r5d$.call(this, loaders);
    launch(WebGlApplication$addAssetLoaders$lambda(this, loaders));
  };
  var WebGlApplication$componentsTask_metadata = new PropertyMetadata('componentsTask');
  Object.defineProperty(WebGlApplication.prototype, 'componentsTask', {get: function () {
    return this.componentsTask_5cfbd6$_0.getValue_lrcp0p$(this, WebGlApplication$componentsTask_metadata);
  }});
  var WebGlApplication$focusManagerTask_metadata = new PropertyMetadata('focusManagerTask');
  Object.defineProperty(WebGlApplication.prototype, 'focusManagerTask', {get: function () {
    return this.focusManagerTask_mjf617$_0.getValue_lrcp0p$(this, WebGlApplication$focusManagerTask_metadata);
  }});
  WebGlApplication.prototype.createStage_717veb$ = function (owner, continuation) {
    return new GlStageImpl(owner);
  };
  WebGlApplication.prototype.initializeSpecialInteractivity_717veb$ = function (owner_0, continuation_0, suspended) {
    var instance = new Coroutine$initializeSpecialInteractivity_717veb$(this, owner_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$initializeSpecialInteractivity_717veb$($this, owner_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$owner = owner_0;
  }
  Coroutine$initializeSpecialInteractivity_717veb$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$initializeSpecialInteractivity_717veb$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initializeSpecialInteractivity_717veb$.prototype.constructor = Coroutine$initializeSpecialInteractivity_717veb$;
  Coroutine$initializeSpecialInteractivity_717veb$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = JsApplicationBase.prototype.initializeSpecialInteractivity_717veb$.call(this.$this, this.local$owner, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            own(this.local$owner, new FakeFocusMouse(this.local$owner.injector));
            this.state_0 = 3;
            this.result_0 = this.$this.get_li8edk$(WebGlApplication$Companion_getInstance().CANVAS, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            own(this.local$owner, new JsClickDispatcher(this.result_0, this.local$owner.injector));
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function WebGlApplication$Companion() {
    WebGlApplication$Companion_instance = this;
    this.CANVAS = dKey(JsApplicationBase$Companion_getInstance().CANVAS_0);
  }
  WebGlApplication$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var WebGlApplication$Companion_instance = null;
  function WebGlApplication$Companion_getInstance() {
    if (WebGlApplication$Companion_instance === null) {
      new WebGlApplication$Companion();
    }
    return WebGlApplication$Companion_instance;
  }
  function WebGlApplication$canvasTask$lambda(this$WebGlApplication_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$WebGlApplication$canvasTask$lambda(this$WebGlApplication_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$WebGlApplication$canvasTask$lambda(this$WebGlApplication_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$WebGlApplication = this$WebGlApplication_0;
  }
  Coroutine$WebGlApplication$canvasTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$WebGlApplication$canvasTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebGlApplication$canvasTask$lambda.prototype.constructor = Coroutine$WebGlApplication$canvasTask$lambda;
  Coroutine$WebGlApplication$canvasTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            tmp$ = document.getElementById(this.local$this$WebGlApplication.rootId_9f80uw$_0);
            if (tmp$ == null) {
              throw Exception_init('Could not find root canvas ' + this.local$this$WebGlApplication.rootId_9f80uw$_0);
            }

            var rootElement = tmp$;
            var root = Kotlin.isType(tmp$_0 = rootElement, HTMLElement) ? tmp$_0 : throwCCE();
            root.style.setProperty('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
            clear(root);
            var canvas = Kotlin.isType(tmp$_1 = document.createElement('canvas'), HTMLCanvasElement) ? tmp$_1 : throwCCE();
            canvas.style.setProperty('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
            var $receiver = canvas.style;
            $receiver.width = '100%';
            $receiver.height = '100%';
            $receiver.position = 'absolute';
            root.appendChild(canvas);
            return this.local$this$WebGlApplication.set_7ey6m6$(WebGlApplication$Companion_getInstance().CANVAS, canvas), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function WebGlApplication$glTask$lambda(this$WebGlApplication_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$WebGlApplication$glTask$lambda(this$WebGlApplication_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$WebGlApplication$glTask$lambda(this$WebGlApplication_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$WebGlApplication = this$WebGlApplication_0;
    this.local$tmp$ = void 0;
    this.local$attributes = void 0;
  }
  Coroutine$WebGlApplication$glTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$WebGlApplication$glTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebGlApplication$glTask$lambda.prototype.constructor = Coroutine$WebGlApplication$glTask$lambda;
  Coroutine$WebGlApplication$glTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$this$WebGlApplication.get_li8edk$(AppConfig.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var config = this.result_0;
            var glConfig = config.gl;
            var o = {};
            o['alpha'] = true;
            o['depth'] = true;
            o['stencil'] = false;
            o['antialias'] = true;
            o['premultipliedAlpha'] = true;
            o['preserveDrawingBuffer'] = false;
            o['preferLowPowerToHighPerformance'] = false;
            o['failIfMajorPerformanceCaveat'] = false;
            this.local$attributes = o;
            this.local$attributes.alpha = glConfig.alpha;
            this.local$attributes.antialias = glConfig.antialias;
            this.local$attributes.depth = glConfig.depth;
            this.local$attributes.stencil = glConfig.stencil;
            this.local$attributes.premultipliedAlpha = false;
            this.local$tmp$ = WebGl_getInstance();
            this.state_0 = 3;
            this.result_0 = this.local$this$WebGlApplication.get_li8edk$(WebGlApplication$Companion_getInstance().CANVAS, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            tmp$ = this.local$tmp$.getContext_x0zhn6$(this.result_0, this.local$attributes);
            if (tmp$ == null) {
              throw Exception_init('Browser does not support WebGL');
            }

            var context = tmp$;
            var gl = new WebGl20(context);
            return this.local$this$WebGlApplication.set_7ey6m6$(Gl20.Companion, gl), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function WebGlApplication$windowTask$lambda(this$WebGlApplication_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$WebGlApplication$windowTask$lambda(this$WebGlApplication_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$WebGlApplication$windowTask$lambda(this$WebGlApplication_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$WebGlApplication = this$WebGlApplication_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
  }
  Coroutine$WebGlApplication$windowTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$WebGlApplication$windowTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebGlApplication$windowTask$lambda.prototype.constructor = Coroutine$WebGlApplication$windowTask$lambda;
  Coroutine$WebGlApplication$windowTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = Window.Companion;
            this.state_0 = 2;
            this.result_0 = this.local$this$WebGlApplication.get_li8edk$(WebGlApplication$Companion_getInstance().CANVAS, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$WebGlApplication.config(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_1 = this.result_0.window;
            this.state_0 = 4;
            this.result_0 = this.local$this$WebGlApplication.get_li8edk$(Gl20.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            tmp$ = new WebGlWindowImpl(this.local$tmp$_0, this.local$tmp$_1, this.result_0);
            return this.local$this$WebGlApplication.set_7ey6m6$(this.local$tmp$, tmp$), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function WebGlApplication$glStateTask$lambda(this$WebGlApplication_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$WebGlApplication$glStateTask$lambda(this$WebGlApplication_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$WebGlApplication$glStateTask$lambda(this$WebGlApplication_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$WebGlApplication = this$WebGlApplication_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$WebGlApplication$glStateTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$WebGlApplication$glStateTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebGlApplication$glStateTask$lambda.prototype.constructor = Coroutine$WebGlApplication$glStateTask$lambda;
  Coroutine$WebGlApplication$glStateTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = GlState.Companion;
            this.state_0 = 2;
            this.result_0 = this.local$this$WebGlApplication.get_li8edk$(Gl20.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$WebGlApplication.get_li8edk$(Window.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            tmp$ = new GlStateImpl(this.local$tmp$_0, this.result_0);
            return this.local$this$WebGlApplication.set_7ey6m6$(this.local$tmp$, tmp$), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function WebGlApplication$textureLoaderTask$lambda(continuation_0, suspended) {
    var instance = new Coroutine$WebGlApplication$textureLoaderTask$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$WebGlApplication$textureLoaderTask$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$WebGlApplication$textureLoaderTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$WebGlApplication$textureLoaderTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebGlApplication$textureLoaderTask$lambda.prototype.constructor = Coroutine$WebGlApplication$textureLoaderTask$lambda;
  Coroutine$WebGlApplication$textureLoaderTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function WebGlApplication$componentsTask$lambda$lambda(closure$root) {
    return function (it) {
      return new JsHtmlComponent(it, closure$root);
    };
  }
  function WebGlApplication$componentsTask$lambda(this$WebGlApplication_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$WebGlApplication$componentsTask$lambda(this$WebGlApplication_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$WebGlApplication$componentsTask$lambda(this$WebGlApplication_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$WebGlApplication = this$WebGlApplication_0;
  }
  Coroutine$WebGlApplication$componentsTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$WebGlApplication$componentsTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebGlApplication$componentsTask$lambda.prototype.constructor = Coroutine$WebGlApplication$componentsTask$lambda;
  Coroutine$WebGlApplication$componentsTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var root = alwaysTrue(tmp$ = document.getElementById(this.local$this$WebGlApplication.rootId_9f80uw$_0), HTMLElement) ? tmp$ : throwCCE();
            return this.local$this$WebGlApplication.set_7ey6m6$(HtmlComponent.Companion.FACTORY_KEY, WebGlApplication$componentsTask$lambda$lambda(root)), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function WebGlApplication$focusManagerTask$lambda$lambda(closure$canvas) {
    return function (old, new_0) {
      if (new_0 != null) {
        closure$canvas.focus();
      }
      return Unit;
    };
  }
  function WebGlApplication$focusManagerTask$lambda(this$WebGlApplication_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$WebGlApplication$focusManagerTask$lambda(this$WebGlApplication_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$WebGlApplication$focusManagerTask$lambda(this$WebGlApplication_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$WebGlApplication = this$WebGlApplication_0;
  }
  Coroutine$WebGlApplication$focusManagerTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$WebGlApplication$focusManagerTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebGlApplication$focusManagerTask$lambda.prototype.constructor = Coroutine$WebGlApplication$focusManagerTask$lambda;
  Coroutine$WebGlApplication$focusManagerTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$WebGlApplication.get_li8edk$(WebGlApplication$Companion_getInstance().CANVAS, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var canvas = this.result_0;
            var focusManager = new FocusManagerImpl();
            focusManager.focusedChanged.add_trkh7z$(WebGlApplication$focusManagerTask$lambda$lambda(canvas));
            return this.local$this$WebGlApplication.set_7ey6m6$(FocusManager.Companion, focusManager), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  WebGlApplication.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebGlApplication', interfaces: [JsApplicationBase]};
  function WebGlTexture(gl, glState) {
    GlTextureBase.call(this, gl, glState);
    var tmp$;
    this.image = alwaysTrue(tmp$ = document.createElement('img'), HTMLImageElement) ? tmp$ : throwCCE();
    this._rgbData_9irvko$_0 = lazy(WebGlTexture$_rgbData$lambda(glState, this, gl));
  }
  Object.defineProperty(WebGlTexture.prototype, 'width', {get: function () {
    return this.image.naturalWidth;
  }});
  Object.defineProperty(WebGlTexture.prototype, 'height', {get: function () {
    return this.image.naturalHeight;
  }});
  Object.defineProperty(WebGlTexture.prototype, '_rgbData_0', {get: function () {
    return this._rgbData_9irvko$_0.value;
  }});
  Object.defineProperty(WebGlTexture.prototype, 'rgbData', {get: function () {
    return this._rgbData_0;
  }});
  function WebGlTexture$_rgbData$lambda(closure$glState, this$WebGlTexture, closure$gl) {
    return function () {
      var tmp$;
      var batch = closure$glState.batch;
      var previousShader = closure$glState.shader;
      this$WebGlTexture.refInc();
      var framebuffer = new Framebuffer(closure$gl, closure$glState, this$WebGlTexture.width, this$WebGlTexture.height, false, false);
      framebuffer.begin();
      closure$glState.viewProjection = Matrix4.Companion.IDENTITY;
      closure$glState.setTexture_2imobx$(this$WebGlTexture);
      closure$glState.blendMode_f21slm$(BlendMode.Companion.NORMAL, false);
      putVertex(batch, -1.0, -1.0, 0.0, void 0, void 0, 0.0, 0.0);
      putVertex(batch, 1.0, -1.0, 0.0, void 0, void 0, 1.0, 0.0);
      putVertex(batch, 1.0, 1.0, 0.0, void 0, void 0, 1.0, 1.0);
      putVertex(batch, -1.0, 1.0, 0.0, void 0, void 0, 0.0, 1.0);
      putQuadIndices(batch);
      batch.flush();
      var pixelData = BufferFactory.Companion.instance.byteBuffer_za3lpa$(Kotlin.imul(this$WebGlTexture.width, this$WebGlTexture.height) * 4 | 0);
      closure$gl.readPixels_owzn1q$(0, 0, this$WebGlTexture.width, this$WebGlTexture.height, 6408, 5121, pixelData);
      framebuffer.end();
      closure$glState.shader = previousShader;
      framebuffer.dispose();
      var rgbData = new RgbData(this$WebGlTexture.width, this$WebGlTexture.height, true);
      var bytes = rgbData.bytes;
      var i = 0;
      while (pixelData.hasRemaining) {
        bytes[tmp$ = i, i = tmp$ + 1 | 0, tmp$] = pixelData.get();
      }
      this$WebGlTexture.refDec();
      return rgbData;
    };
  }
  WebGlTexture.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebGlTexture', interfaces: [GlTextureBase]};
  function WebGlTextureLoader(path, estimatedBytesTotal, gl, glState) {
    this.path_vws1jy$_0 = path;
    this.estimatedBytesTotal_0 = estimatedBytesTotal;
    this.gl_0 = gl;
    this.glState_0 = glState;
    this.type_vzegkp$_0 = AssetType.Companion.TEXTURE;
    this.work_0 = new WebGlTextureLoader$work$ObjectLiteral(this);
  }
  Object.defineProperty(WebGlTextureLoader.prototype, 'path', {get: function () {
    return this.path_vws1jy$_0;
  }});
  Object.defineProperty(WebGlTextureLoader.prototype, 'type', {get: function () {
    return this.type_vzegkp$_0;
  }});
  Object.defineProperty(WebGlTextureLoader.prototype, 'secondsLoaded', {get: function () {
    return 0.0;
  }});
  Object.defineProperty(WebGlTextureLoader.prototype, 'secondsTotal', {get: function () {
    return this.estimatedBytesTotal_0 * core.Bandwidth.downBpsInv;
  }});
  Object.defineProperty(WebGlTextureLoader.prototype, 'status', {get: function () {
    return this.work_0.status;
  }});
  Object.defineProperty(WebGlTextureLoader.prototype, 'result', {get: function () {
    return this.work_0.result;
  }});
  Object.defineProperty(WebGlTextureLoader.prototype, 'error', {get: function () {
    return this.work_0.error;
  }});
  WebGlTextureLoader.prototype.await = function (continuation) {
    return this.work_0.await(continuation);
  };
  WebGlTextureLoader.prototype.cancel = function () {
  };
  function WebGlTextureLoader$work$ObjectLiteral(this$WebGlTextureLoader) {
    Promise.call(this);
    var jsTexture = new WebGlTexture(this$WebGlTextureLoader.gl_0, this$WebGlTextureLoader.glState_0);
    if (URL.prototype != undefined == true) {
      if (startsWith(this$WebGlTextureLoader.path, 'http', true) && (new URL(this$WebGlTextureLoader.path)).origin !== window.location.origin) {
        jsTexture.image.crossOrigin = '';
      }
    }
    jsTexture.image.src = this$WebGlTextureLoader.path;
    jsTexture.image.onload = WebGlTextureLoader$work$WebGlTextureLoader$work$ObjectLiteral_init$lambda(jsTexture, this);
    jsTexture.image.onerror = WebGlTextureLoader$work$WebGlTextureLoader$work$ObjectLiteral_init$lambda_0(this);
  }
  function WebGlTextureLoader$work$WebGlTextureLoader$work$ObjectLiteral_init$lambda(closure$jsTexture, this$) {
    return function (it) {
      this$.success_11rb$(closure$jsTexture);
      return Unit;
    };
  }
  function WebGlTextureLoader$work$WebGlTextureLoader$work$ObjectLiteral_init$lambda_0(this$) {
    return function (msg, url, lineNo, columnNo, error) {
      var tmp$, tmp$_0;
      tmp$_0 = Exception_init((tmp$ = msg != null ? msg.toString() : null) != null ? tmp$ : 'Unknown Error');
      this$.fail_tcv7n7$(tmp$_0);
      return Unit;
    };
  }
  WebGlTextureLoader$work$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Promise]};
  WebGlTextureLoader.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebGlTextureLoader', interfaces: [AssetLoader]};
  function WebGlWindowImpl(canvas, config, gl) {
    this.canvas_0 = canvas;
    this.gl_0 = gl;
    this._isActiveChanged_0 = new Signal1();
    this.isActiveChanged_afuww3$_0 = this._isActiveChanged_0.asRo();
    this._isVisibleChanged_0 = new Signal1();
    this.isVisibleChanged_ip6acn$_0 = this._isVisibleChanged_0.asRo();
    this._sizeChanged_0 = new Signal3();
    this.sizeChanged_5rxdbi$_0 = this._sizeChanged_0.asRo();
    this._scaleChanged_0 = new Signal2();
    this.scaleChanged_y61id3$_0 = this._scaleChanged_0.asRo();
    this._width_0 = 0.0;
    this._height_0 = 0.0;
    this.sizeIsDirty_0 = true;
    this.hiddenProp_0 = null;
    this.hiddenPropEventMap_0 = hashMapOf([to('hidden', 'visibilitychange'), to('mozHidden', 'mozvisibilitychange'), to('webkitHidden', 'webkitvisibilitychange'), to('msHidden', 'msvisibilitychange')]);
    this.visibilityChangeHandler_0 = WebGlWindowImpl$visibilityChangeHandler$lambda(this);
    this.webGlContextRestoredHandler_0 = WebGlWindowImpl$webGlContextRestoredHandler$lambda(this);
    this.blurHandler_0 = WebGlWindowImpl$blurHandler$lambda(this);
    this.focusHandler_0 = WebGlWindowImpl$focusHandler$lambda(this);
    this.resizeHandler_0 = WebGlWindowImpl$resizeHandler$lambda(this);
    this._clearColor_0 = Color.Companion.CLEAR.copy();
    this.setSize_0(this.canvas_0.offsetWidth, this.canvas_0.offsetHeight, true);
    window.addEventListener('resize', this.resizeHandler_0);
    this.canvas_0.addEventListener('webglcontextrestored', this.webGlContextRestoredHandler_0);
    window.addEventListener('blur', this.blurHandler_0);
    window.addEventListener('focus', this.focusHandler_0);
    this.canvas_0.addEventListener('selectstart', WebGlWindowImpl_init$lambda);
    if (config.title.length > 0)
      document.title = config.title;
    this.watchForVisibilityChanges_0();
    this.clearColor = config.backgroundColor;
    this.gl_0.clear_za3lpa$(17664);
    this._isVisible_0 = true;
    this._isActive_0 = true;
    this.continuousRendering_ynsxy4$_0 = false;
    this._renderRequested_0 = true;
    this._closeRequested_0 = false;
    this._fullScreen_0 = false;
    this._location_muy7l9$_0 = lazy(WebGlWindowImpl$_location$lambda);
  }
  Object.defineProperty(WebGlWindowImpl.prototype, 'isActiveChanged', {get: function () {
    return this.isActiveChanged_afuww3$_0;
  }});
  Object.defineProperty(WebGlWindowImpl.prototype, 'isVisibleChanged', {get: function () {
    return this.isVisibleChanged_ip6acn$_0;
  }});
  Object.defineProperty(WebGlWindowImpl.prototype, 'sizeChanged', {get: function () {
    return this.sizeChanged_5rxdbi$_0;
  }});
  Object.defineProperty(WebGlWindowImpl.prototype, 'scaleChanged', {get: function () {
    return this.scaleChanged_y61id3$_0;
  }});
  Object.defineProperty(WebGlWindowImpl.prototype, 'clearColor', {get: function () {
    return this._clearColor_0;
  }, set: function (value) {
    this._clearColor_0.set_8suw10$(value);
    this.gl_0.clearColor_8suw10$(value);
    this.requestRender();
  }});
  WebGlWindowImpl.prototype.watchForVisibilityChanges_0 = function () {
    this.hiddenProp_0 = null;
    if ('hidden' in document) {
      this.hiddenProp_0 = 'hidden';
    }
     else if ('mozHidden' in document) {
      this.hiddenProp_0 = 'mozHidden';
    }
     else if ('webkitHidden' in document) {
      this.hiddenProp_0 = 'webkitHidden';
    }
     else if ('msHidden' in document) {
      this.hiddenProp_0 = 'msHidden';
    }
    if (this.hiddenProp_0 != null) {
      document.addEventListener(ensureNotNull(this.hiddenPropEventMap_0.get_11rb$(ensureNotNull(this.hiddenProp_0))), this.visibilityChangeHandler_0);
      this.visibilityChangeHandler_0(null);
    }
  };
  WebGlWindowImpl.prototype.unwatchVisibilityChanges_0 = function () {
    if (this.hiddenProp_0 != null) {
      document.removeEventListener(ensureNotNull(this.hiddenPropEventMap_0.get_11rb$(ensureNotNull(this.hiddenProp_0))), this.visibilityChangeHandler_0);
      this.hiddenProp_0 = null;
    }
  };
  Object.defineProperty(WebGlWindowImpl.prototype, 'isVisible', {get: function () {
    return this._isVisible_0;
  }, set: function (value) {
    if (this._isVisible_0 === value)
      return;
    this._isVisible_0 = value;
    this._isVisibleChanged_0.dispatch_11rb$(value);
  }});
  Object.defineProperty(WebGlWindowImpl.prototype, 'isActive', {get: function () {
    return this._isActive_0;
  }, set: function (value) {
    if (this._isActive_0 === value)
      return;
    this._isActive_0 = value;
    this._isActiveChanged_0.dispatch_11rb$(value);
  }});
  Object.defineProperty(WebGlWindowImpl.prototype, 'width', {get: function () {
    return this._width_0;
  }});
  Object.defineProperty(WebGlWindowImpl.prototype, 'height', {get: function () {
    return this._height_0;
  }});
  Object.defineProperty(WebGlWindowImpl.prototype, 'scaleX', {get: function () {
    return 1.0;
  }});
  Object.defineProperty(WebGlWindowImpl.prototype, 'scaleY', {get: function () {
    return 1.0;
  }});
  WebGlWindowImpl.prototype.setSize_dleff0$ = function (width, height) {
    this.setSize_0(width, height, false);
  };
  WebGlWindowImpl.prototype.setSize_0 = function (width, height, isUserInteraction) {
    if (this._width_0 === width && this._height_0 === height)
      return;
    this._width_0 = width;
    this._height_0 = height;
    if (!isUserInteraction) {
      this.canvas_0.style.width = numberToInt(this._width_0).toString() + 'px';
      this.canvas_0.style.height = numberToInt(this._height_0).toString() + 'px';
    }
    this.sizeIsDirty_0 = true;
    this._sizeChanged_0.dispatch_1llc0w$(this._width_0, this._height_0, isUserInteraction);
  };
  Object.defineProperty(WebGlWindowImpl.prototype, 'continuousRendering', {get: function () {
    return this.continuousRendering_ynsxy4$_0;
  }, set: function (continuousRendering) {
    this.continuousRendering_ynsxy4$_0 = continuousRendering;
  }});
  WebGlWindowImpl.prototype.shouldRender_6taknv$ = function (clearRenderRequest) {
    var bool = this.continuousRendering || this._renderRequested_0;
    if (clearRenderRequest && this._renderRequested_0)
      this._renderRequested_0 = false;
    return bool;
  };
  WebGlWindowImpl.prototype.requestRender = function () {
    if (this._renderRequested_0)
      return;
    this._renderRequested_0 = true;
  };
  WebGlWindowImpl.prototype.renderBegin = function () {
    if (this.sizeIsDirty_0) {
      this.sizeIsDirty_0 = false;
      this.canvas_0.width = numberToInt(this._width_0);
      this.canvas_0.height = numberToInt(this._height_0);
    }
    this.gl_0.clear_za3lpa$(17664);
  };
  WebGlWindowImpl.prototype.renderEnd = function () {
  };
  WebGlWindowImpl.prototype.isCloseRequested = function () {
    return this._closeRequested_0;
  };
  WebGlWindowImpl.prototype.requestClose = function () {
    this._closeRequested_0 = true;
  };
  Object.defineProperty(WebGlWindowImpl.prototype, 'fullScreen', {get: function () {
    return this._fullScreen_0;
  }, set: function (value) {
    if (value === this._fullScreen_0)
      return;
    this._fullScreen_0 = value;
  }});
  Object.defineProperty(WebGlWindowImpl.prototype, '_location_0', {get: function () {
    return this._location_muy7l9$_0.value;
  }});
  Object.defineProperty(WebGlWindowImpl.prototype, 'location', {get: function () {
    return this._location_0;
  }});
  WebGlWindowImpl.prototype.dispose = function () {
    this._sizeChanged_0.dispose();
    this._isVisibleChanged_0.dispose();
    window.removeEventListener('resize', this.resizeHandler_0);
    this.canvas_0.removeEventListener('webglcontextlost', this.webGlContextRestoredHandler_0);
    window.removeEventListener('blur', this.blurHandler_0);
    window.removeEventListener('focus', this.focusHandler_0);
    this.unwatchVisibilityChanges_0();
  };
  function WebGlWindowImpl$visibilityChangeHandler$lambda(this$WebGlWindowImpl) {
    return function (event) {
      this$WebGlWindowImpl.isVisible = document[ensureNotNull(this$WebGlWindowImpl.hiddenProp_0)] != true;
      return Unit;
    };
  }
  function WebGlWindowImpl$webGlContextRestoredHandler$lambda(this$WebGlWindowImpl) {
    return function (event) {
      logging.Log.info_s8jyv4$('WebGL context lost');
      this$WebGlWindowImpl.requestRender();
      return Unit;
    };
  }
  function WebGlWindowImpl$blurHandler$lambda(this$WebGlWindowImpl) {
    return function (f) {
      this$WebGlWindowImpl.isActive = false;
      return Unit;
    };
  }
  function WebGlWindowImpl$focusHandler$lambda(this$WebGlWindowImpl) {
    return function (f) {
      this$WebGlWindowImpl.isActive = true;
      return Unit;
    };
  }
  function WebGlWindowImpl$resizeHandler$lambda(this$WebGlWindowImpl) {
    return function (f) {
      this$WebGlWindowImpl.setSize_0(this$WebGlWindowImpl.canvas_0.offsetWidth, this$WebGlWindowImpl.canvas_0.offsetHeight, true);
      return Unit;
    };
  }
  function WebGlWindowImpl_init$lambda(it) {
    it.preventDefault();
    return Unit;
  }
  function WebGlWindowImpl$_location$lambda() {
    return new JsLocation(window.location);
  }
  WebGlWindowImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebGlWindowImpl', interfaces: [Window]};
  function JsHtmlComponent(owner, rootElement, element) {
    var tmp$;
    if (element === void 0)
      element = alwaysTrue(tmp$ = document.createElement('div'), HTMLElement) ? tmp$ : throwCCE();
    UiComponentImpl.call(this, owner);
    this.rootElement_0 = rootElement;
    this.component_0 = new DomComponent(element);
    this.boxStyle_5skest$_0 = this.bind_d9cwf8$(new BoxStyle());
    this.focusedChangingHandler_0 = JsHtmlComponent$focusedChangingHandler$lambda(this);
    this.parentElement_0 = null;
    var tmp$_0;
    this.styleTags.add_11rb$(TextField.Companion);
    this.watch_s0mkkf$(this.boxStyle, void 0, JsHtmlComponent_init$lambda(element, this));
    this.parentElement_0 = (tmp$_0 = element.parentElement) != null ? tmp$_0 : this.rootElement_0;
    if (this.parentElement_0.contains(element))
      this.parentElement_0.removeChild(element);
    element.style.display = 'block';
    element.style.opacity = '0';
    element.style.setProperty('position', 'absolute');
  }
  Object.defineProperty(JsHtmlComponent.prototype, 'boxStyle', {get: function () {
    return this.boxStyle_5skest$_0;
  }});
  JsHtmlComponent.prototype.onActivated = function () {
    UiComponentImpl.prototype.onActivated.call(this);
    this.focusManager.focusedChanging.add_trkh7z$(this.focusedChangingHandler_0);
    this.parentElement_0.appendChild(this.component_0.element);
  };
  JsHtmlComponent.prototype.onDeactivated = function () {
    this.focusManager.focusedChanging.remove_trkh7z$(this.focusedChangingHandler_0);
    UiComponentImpl.prototype.onDeactivated.call(this);
    this.parentElement_0.removeChild(this.component_0.element);
  };
  Object.defineProperty(JsHtmlComponent.prototype, 'html', {get: function () {
    return this.component_0.element.innerHTML;
  }, set: function (value) {
    this.component_0.element.innerHTML = value;
  }});
  JsHtmlComponent.prototype.updateLayoutEnabled = function () {
    UiComponentImpl.prototype.updateLayoutEnabled.call(this);
    var v = {v: true};
    parentWalk$break: do {
      var p = this;
      while (p != null) {
        var callback$result;
        if (!p.visible) {
          v.v = false;
          callback$result = false;
        }
         else {
          callback$result = true;
        }
        var shouldContinue = callback$result;
        if (!shouldContinue) {
          break parentWalk$break;
        }
        p = p.parent;
      }
      null;
    }
     while (false);
    this.component_0.visible = v.v;
  };
  JsHtmlComponent.prototype.updateLayout_64u75x$ = function (explicitWidth, explicitHeight, out) {
    this.component_0.setSize_yxjqmk$(explicitWidth, explicitHeight);
    out.set_i12l7q$(this.component_0.bounds);
  };
  JsHtmlComponent.prototype.updateConcatenatedColorTransform = function () {
    UiComponentImpl.prototype.updateConcatenatedColorTransform.call(this);
    this.component_0.setConcatenatedColorTint_8suw10$(this.concatenatedColorTint);
  };
  JsHtmlComponent.prototype.updateConcatenatedTransform = function () {
    UiComponentImpl.prototype.updateConcatenatedTransform.call(this);
    this.component_0.setConcatenatedTransform_pekf88$(this.concatenatedTransform);
  };
  function JsHtmlComponent$focusedChangingHandler$lambda(this$JsHtmlComponent) {
    return function (oldFocusable, newFocusable, cancel) {
      if (equals(oldFocusable, this$JsHtmlComponent)) {
        cancel.cancel();
      }
      return Unit;
    };
  }
  function JsHtmlComponent_init$lambda(closure$element, this$JsHtmlComponent) {
    return function (it) {
      applyCss(it, closure$element);
      applyBox(it, this$JsHtmlComponent.component_0);
      return Unit;
    };
  }
  JsHtmlComponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsHtmlComponent', interfaces: [HtmlComponent, UiComponentImpl]};
  function DomComponent(element) {
    var tmp$;
    if (element === void 0)
      element = alwaysTrue(tmp$ = document.createElement('div'), HTMLElement) ? tmp$ : throwCCE();
    this.element = element;
    this.padding = Pad_init(0.0);
    this.border = Pad_init(0.0);
    this.margin = Pad_init(0.0);
    this._interactivityEnabled_0 = true;
    this._bounds_0 = new Bounds();
    this.element.draggable = false;
    this.element.className = 'acornComponent';
    this._visible_0 = true;
    this.explicitWidth_0 = null;
    this.explicitHeight_0 = null;
    this._width_0 = null;
    this._height_0 = null;
  }
  Object.defineProperty(DomComponent.prototype, 'interactivityEnabled', {get: function () {
    return this._interactivityEnabled_0;
  }, set: function (value) {
    this._interactivityEnabled_0 = value;
    this.element.style.setProperty('pointer-events', value ? 'auto' : 'none');
  }});
  Object.defineProperty(DomComponent.prototype, 'visible', {get: function () {
    return this._visible_0;
  }, set: function (value) {
    if (this._visible_0 === value)
      return;
    this._visible_0 = value;
    this.refreshDisplayStyle_0();
  }});
  DomComponent.prototype.refreshDisplayStyle_0 = function () {
    if (this._visible_0) {
      this.element.style.display = 'inline-block';
    }
     else {
      this.element.style.display = 'none';
    }
  };
  Object.defineProperty(DomComponent.prototype, 'bounds', {get: function () {
    if (this.explicitWidth_0 == null) {
      this._bounds_0.width = this.element.offsetWidth + this.marginW_0;
    }
     else {
      this._bounds_0.width = ensureNotNull(this.explicitWidth_0);
    }
    if (this.explicitHeight_0 == null) {
      this._bounds_0.height = this.element.offsetHeight + this.marginH_0;
    }
     else {
      this._bounds_0.height = ensureNotNull(this.explicitHeight_0);
    }
    return this._bounds_0;
  }});
  var Math_0 = Math;
  DomComponent.prototype.setSize_yxjqmk$ = function (width, height) {
    if (this.explicitWidth_0 == width && this.explicitHeight_0 == height)
      return;
    this.explicitWidth_0 = width;
    this.explicitHeight_0 = height;
    var tmp$;
    if (width == null)
      tmp$ = 'auto';
    else {
      var b = width - this.paddingW_0 - this.borderW_0 - this.marginW_0;
      tmp$ = Math_0.max(0.0, b).toString() + 'px';
    }
    var newW = tmp$;
    var tmp$_0;
    if (height == null)
      tmp$_0 = 'auto';
    else {
      var b_0 = height - this.paddingH_0 - this.borderH_0 - this.marginH_0;
      tmp$_0 = Math_0.max(0.0, b_0).toString() + 'px';
    }
    var newH = tmp$_0;
    if (!equals(newW, this._width_0)) {
      this._width_0 = newW;
      this.element.style.width = newW;
    }
    if (!equals(newH, this._height_0)) {
      this._height_0 = newH;
      this.element.style.height = newH;
    }
  };
  Object.defineProperty(DomComponent.prototype, 'paddingW_0', {get: function () {
    return this.padding.left + this.padding.right;
  }});
  Object.defineProperty(DomComponent.prototype, 'paddingH_0', {get: function () {
    return this.padding.top + this.padding.bottom;
  }});
  Object.defineProperty(DomComponent.prototype, 'borderW_0', {get: function () {
    return this.border.left + this.border.right;
  }});
  Object.defineProperty(DomComponent.prototype, 'borderH_0', {get: function () {
    return this.border.top + this.border.bottom;
  }});
  Object.defineProperty(DomComponent.prototype, 'marginW_0', {get: function () {
    return this.margin.left + this.margin.right;
  }});
  Object.defineProperty(DomComponent.prototype, 'marginH_0', {get: function () {
    return this.margin.top + this.margin.bottom;
  }});
  DomComponent.prototype.setConcatenatedTransform_pekf88$ = function (value) {
    this.element.style.transform = 'matrix3d(' + joinToString(value.values, ',') + ')';
  };
  DomComponent.prototype.setConcatenatedColorTint_8suw10$ = function (value) {
    this.element.style.opacity = value.a.toString();
  };
  DomComponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'DomComponent', interfaces: []};
  function applyBox($receiver, native) {
    native.margin.set_rw8g7s$($receiver.margin);
    native.border.set_rw8g7s$($receiver.borderThicknesses);
    native.padding.set_rw8g7s$($receiver.padding);
  }
  function applyCss($receiver, element) {
    var it = $receiver;
    var $receiver_0 = element.style;
    var gradient = it.linearGradient;
    if (gradient == null) {
      $receiver_0.removeProperty('background');
      $receiver_0.backgroundColor = it.backgroundColor.toCssString();
    }
     else {
      $receiver_0.removeProperty('background-color');
      $receiver_0.background = gradient.toCssString();
    }
    var bC = it.borderColors;
    $receiver_0.borderTopColor = bC.top.toCssString();
    $receiver_0.borderRightColor = bC.right.toCssString();
    $receiver_0.borderBottomColor = bC.bottom.toCssString();
    $receiver_0.borderLeftColor = bC.left.toCssString();
    var b = it.borderThicknesses;
    $receiver_0.borderLeftWidth = b.left.toString() + 'px';
    $receiver_0.borderTopWidth = b.top.toString() + 'px';
    $receiver_0.borderRightWidth = b.right.toString() + 'px';
    $receiver_0.borderBottomWidth = b.bottom.toString() + 'px';
    var c = it.borderRadii;
    $receiver_0.borderTopLeftRadius = c.topLeft.x.toString() + 'px ' + c.topLeft.y + 'px';
    $receiver_0.borderTopRightRadius = c.topRight.x.toString() + 'px ' + c.topRight.y + 'px';
    $receiver_0.borderBottomRightRadius = c.bottomRight.x.toString() + 'px ' + c.bottomRight.y + 'px';
    $receiver_0.borderBottomLeftRadius = c.bottomLeft.x.toString() + 'px ' + c.bottomLeft.y + 'px';
    $receiver_0.borderStyle = 'solid';
    var m = it.margin;
    $receiver_0.marginLeft = m.left.toString() + 'px';
    $receiver_0.marginTop = m.top.toString() + 'px';
    $receiver_0.marginRight = m.right.toString() + 'px';
    $receiver_0.marginBottom = m.bottom.toString() + 'px';
    var p = it.padding;
    $receiver_0.paddingLeft = p.left.toString() + 'px';
    $receiver_0.paddingTop = p.top.toString() + 'px';
    $receiver_0.paddingRight = p.right.toString() + 'px';
    $receiver_0.paddingBottom = p.bottom.toString() + 'px';
  }
  function WebGl() {
    WebGl_instance = this;
  }
  WebGl.prototype.getContext_x0zhn6$ = function (canvas, attributes) {
    if (attributes === void 0) {
      var o = {};
      o['alpha'] = true;
      o['depth'] = true;
      o['stencil'] = false;
      o['antialias'] = true;
      o['premultipliedAlpha'] = true;
      o['preserveDrawingBuffer'] = false;
      o['preferLowPowerToHighPerformance'] = false;
      o['failIfMajorPerformanceCaveat'] = false;
      attributes = o;
    }
    var tmp$, tmp$_0;
    var names = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-webgl', 'webkit-3d'];
    tmp$ = get_lastIndex(names);
    for (var i = 0; i <= tmp$; i++) {
      var context = canvas.getContext(names[i], attributes);
      if (context != null) {
        return Kotlin.isType(tmp$_0 = context, WebGLRenderingContext) ? tmp$_0 : throwCCE();
      }
    }
    return null;
  };
  WebGl.$metadata$ = {kind: Kind_OBJECT, simpleName: 'WebGl', interfaces: []};
  var WebGl_instance = null;
  function WebGl_getInstance() {
    if (WebGl_instance === null) {
      new WebGl();
    }
    return WebGl_instance;
  }
  function JsClickDispatcher(rootElement, injector) {
    ClickDispatcher.call(this, injector);
    this.rootElement_0 = rootElement;
    this.contextMenuFireHandler_0 = JsClickDispatcher$contextMenuFireHandler$lambda(this);
    this.rootElement_0.addEventListener('click', this.fireHandler, true);
    this.rootElement_0.addEventListener('contextmenu', this.contextMenuFireHandler_0, true);
  }
  JsClickDispatcher.prototype.dispose = function () {
    ClickDispatcher.prototype.dispose.call(this);
    this.rootElement_0.removeEventListener('click', this.fireHandler, true);
    this.rootElement_0.removeEventListener('contextmenu', this.contextMenuFireHandler_0, true);
  };
  function JsClickDispatcher$contextMenuFireHandler$lambda(this$JsClickDispatcher) {
    return function (event) {
      if (this$JsClickDispatcher.fireClickEvent()) {
        if (this$JsClickDispatcher.clickEvent.defaultPrevented()) {
          event.preventDefault();
        }
      }
      return Unit;
    };
  }
  JsClickDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsClickDispatcher', interfaces: [ClickDispatcher]};
  function JsClipboardDispatcher(rootElement, injector) {
    this.rootElement_0 = rootElement;
    this.injector_qnes1r$_0 = injector;
    this.interactivity_0 = inject(this, InteractivityManager.Companion);
    this.focus_0 = inject(this, FocusManager.Companion);
    this.stage_0 = inject(this, Stage.Companion);
    this.pasteEvent_0 = new JsPasteInteraction();
    this.copyEvent_0 = new JsCopyInteraction();
    this.pasteHandler_0 = JsClipboardDispatcher$pasteHandler$lambda(this);
    this.copyHandler_0 = JsClipboardDispatcher$copyHandler$lambda(this);
    this.cutHandler_0 = JsClipboardDispatcher$cutHandler$lambda(this);
    window.addEventListener('paste', this.pasteHandler_0, true);
    window.addEventListener('cut', this.cutHandler_0, true);
    window.addEventListener('copy', this.copyHandler_0, true);
  }
  Object.defineProperty(JsClipboardDispatcher.prototype, 'injector', {get: function () {
    return this.injector_qnes1r$_0;
  }});
  JsClipboardDispatcher.prototype.dispose = function () {
    window.removeEventListener('paste', this.pasteHandler_0, true);
    window.removeEventListener('cut', this.cutHandler_0, true);
    window.removeEventListener('copy', this.copyHandler_0, true);
  };
  function JsClipboardDispatcher$pasteHandler$lambda(this$JsClipboardDispatcher) {
    return function (it) {
      var tmp$, tmp$_0;
      this$JsClipboardDispatcher.pasteEvent_0.clear();
      this$JsClipboardDispatcher.pasteEvent_0.type = PasteInteractionRo.Companion.PASTE;
      this$JsClipboardDispatcher.pasteEvent_0.set_kdiu0w$(alwaysTrue(tmp$ = it, ClipboardEvent) ? tmp$ : throwCCE());
      this$JsClipboardDispatcher.interactivity_0.dispatch_esru08$((tmp$_0 = this$JsClipboardDispatcher.focus_0.focused) != null ? tmp$_0 : this$JsClipboardDispatcher.stage_0, this$JsClipboardDispatcher.pasteEvent_0);
      it.preventDefault();
      return Unit;
    };
  }
  function JsClipboardDispatcher$copyHandler$lambda(this$JsClipboardDispatcher) {
    return function (it) {
      var tmp$, tmp$_0;
      this$JsClipboardDispatcher.copyEvent_0.clear();
      this$JsClipboardDispatcher.copyEvent_0.type = CopyInteractionRo.Companion.COPY;
      this$JsClipboardDispatcher.copyEvent_0.set_kdiu0w$(alwaysTrue(tmp$ = it, ClipboardEvent) ? tmp$ : throwCCE());
      this$JsClipboardDispatcher.interactivity_0.dispatch_esru08$((tmp$_0 = this$JsClipboardDispatcher.focus_0.focused) != null ? tmp$_0 : this$JsClipboardDispatcher.stage_0, this$JsClipboardDispatcher.copyEvent_0);
      it.preventDefault();
      return Unit;
    };
  }
  function JsClipboardDispatcher$cutHandler$lambda(this$JsClipboardDispatcher) {
    return function (it) {
      var tmp$, tmp$_0;
      this$JsClipboardDispatcher.copyEvent_0.clear();
      this$JsClipboardDispatcher.copyEvent_0.type = CopyInteractionRo.Companion.CUT;
      this$JsClipboardDispatcher.copyEvent_0.set_kdiu0w$(alwaysTrue(tmp$ = it, ClipboardEvent) ? tmp$ : throwCCE());
      this$JsClipboardDispatcher.interactivity_0.dispatch_esru08$((tmp$_0 = this$JsClipboardDispatcher.focus_0.focused) != null ? tmp$_0 : this$JsClipboardDispatcher.stage_0, this$JsClipboardDispatcher.copyEvent_0);
      it.preventDefault();
      return Unit;
    };
  }
  JsClipboardDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsClipboardDispatcher', interfaces: [Disposable, Scoped]};
  function JsPasteInteraction() {
    InteractionEventBase.call(this);
    this.jsEvent_0 = null;
  }
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  JsPasteInteraction.prototype.getItemByType_2b6yy1$ = function (type, continuation) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = this.jsEvent_0;
    if (tmp$ == null) {
      return null;
    }
    var jsEvent = tmp$;
    if (equals(type, ClipboardItemType.Companion.PLAIN_TEXT))
      tmp$_2 = (tmp$_0 = jsEvent.clipboardData) != null ? tmp$_0.getData('text/plain') : null;
    else if (equals(type, ClipboardItemType.Companion.HTML))
      tmp$_2 = (tmp$_1 = jsEvent.clipboardData) != null ? tmp$_1.getData('text/html') : null;
    else if (equals(type, ClipboardItemType.Companion.TEXTURE)) {
      throw new NotImplementedError_init();
    }
     else if (equals(type, ClipboardItemType.Companion.FILE_LIST)) {
      throw new NotImplementedError_init();
    }
     else
      tmp$_2 = null;
    return (tmp$_3 = tmp$_2) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE();
  };
  JsPasteInteraction.prototype.set_kdiu0w$ = function (clipboardEvent) {
    this.jsEvent_0 = clipboardEvent;
  };
  JsPasteInteraction.prototype.clear = function () {
    InteractionEventBase.prototype.clear.call(this);
    this.jsEvent_0 = null;
  };
  JsPasteInteraction.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsPasteInteraction', interfaces: [PasteInteractionRo, InteractionEventBase]};
  function JsCopyInteraction() {
    InteractionEventBase.call(this);
    this.jsEvent_0 = null;
  }
  JsCopyInteraction.prototype.addItem_uiqjml$ = function (type, value) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$ = this.jsEvent_0;
    if (tmp$ == null) {
      return;
    }
    var jsEvent = tmp$;
    if (equals(type, ClipboardItemType.Companion.PLAIN_TEXT)) {
      tmp$_2 = jsEvent.clipboardData;
      tmp$_1 = typeof (tmp$_0 = value) === 'string' ? tmp$_0 : throwCCE();
      tmp$_2 != null ? (tmp$_2.setData('text/plain', tmp$_1), Unit) : null;
    }
     else if (equals(type, ClipboardItemType.Companion.HTML)) {
      tmp$_5 = jsEvent.clipboardData;
      tmp$_4 = typeof (tmp$_3 = value) === 'string' ? tmp$_3 : throwCCE();
      tmp$_5 != null ? (tmp$_5.setData('text/html', tmp$_4), Unit) : null;
    }
     else if (equals(type, ClipboardItemType.Companion.TEXTURE)) {
      throw new NotImplementedError_init();
    }
     else if (equals(type, ClipboardItemType.Companion.FILE_LIST)) {
      throw new NotImplementedError_init();
    }
  };
  JsCopyInteraction.prototype.set_kdiu0w$ = function (clipboardEvent) {
    this.jsEvent_0 = clipboardEvent;
  };
  JsCopyInteraction.prototype.clear = function () {
    InteractionEventBase.prototype.clear.call(this);
    this.jsEvent_0 = null;
  };
  JsCopyInteraction.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsCopyInteraction', interfaces: [CopyInteractionRo, InteractionEventBase]};
  function JsKeyInput(root) {
    this.root_0 = root;
    this.keyDown_8glj6w$_0 = new Signal1();
    this.keyUp_3xcqdr$_0 = new Signal1();
    this.char_w30xud$_0 = new Signal1();
    this.keyEvent_0 = new KeyInteraction();
    this.charEvent_0 = new CharInteraction();
    this.downMap_0 = new DualHashMap();
    this.keyDownHandler_0 = JsKeyInput$keyDownHandler$lambda(this);
    this.keyUpHandler_0 = JsKeyInput$keyUpHandler$lambda(this);
    this.keyPressHandler_0 = JsKeyInput$keyPressHandler$lambda(this);
    this.rootBlurHandler_0 = JsKeyInput$rootBlurHandler$lambda(this);
    window.addEventListener('keydown', this.keyDownHandler_0);
    window.addEventListener('keyup', this.keyUpHandler_0);
    window.addEventListener('keypress', this.keyPressHandler_0);
    window.addEventListener('blur', this.rootBlurHandler_0);
  }
  Object.defineProperty(JsKeyInput.prototype, 'keyDown', {get: function () {
    return this.keyDown_8glj6w$_0;
  }});
  Object.defineProperty(JsKeyInput.prototype, 'keyUp', {get: function () {
    return this.keyUp_3xcqdr$_0;
  }});
  Object.defineProperty(JsKeyInput.prototype, 'char', {get: function () {
    return this.char_w30xud$_0;
  }});
  JsKeyInput.prototype.populateKeyEvent_0 = function (jsEvent) {
    this.keyEvent_0.timestamp = numberToLong(jsEvent.timeStamp);
    this.keyEvent_0.location = this.locationFromInt_0(jsEvent.location);
    this.keyEvent_0.keyCode = jsEvent.keyCode;
    this.keyEvent_0.altKey = jsEvent.altKey;
    this.keyEvent_0.ctrlKey = jsEvent.ctrlKey;
    this.keyEvent_0.metaKey = jsEvent.metaKey;
    this.keyEvent_0.shiftKey = jsEvent.shiftKey;
    this.keyEvent_0.isRepeat = jsEvent.repeat;
  };
  JsKeyInput.prototype.keyIsDown_3iojlf$$default = function (keyCode, location) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (location === KeyLocation.UNKNOWN) {
      tmp$_2 = (tmp$_0 = (tmp$ = this.downMap_0.get_11rb$(keyCode)) != null ? !tmp$.isEmpty() : null) != null ? tmp$_0 : false;
    }
     else {
      tmp$_2 = (tmp$_1 = this.downMap_0.get_xwzc9p$(keyCode, location)) != null ? tmp$_1 : false;
    }
    return tmp$_2;
  };
  JsKeyInput.prototype.dispose = function () {
    window.removeEventListener('keydown', this.keyDownHandler_0);
    window.removeEventListener('keyup', this.keyUpHandler_0);
    window.removeEventListener('keypress', this.keyPressHandler_0);
    window.removeEventListener('blur', this.rootBlurHandler_0);
    this.keyDown.dispose();
    this.keyUp.dispose();
    this.char.dispose();
  };
  JsKeyInput.prototype.locationFromInt_0 = function (location) {
    var tmp$;
    switch (location) {
      case 0:
        tmp$ = KeyLocation.STANDARD;
        break;
      case 1:
        tmp$ = KeyLocation.LEFT;
        break;
      case 2:
        tmp$ = KeyLocation.RIGHT;
        break;
      case 3:
        tmp$ = KeyLocation.NUMBER_PAD;
        break;
      default:tmp$ = KeyLocation.UNKNOWN;
        break;
    }
    return tmp$;
  };
  function JsKeyInput$keyDownHandler$lambda(this$JsKeyInput) {
    return function (jsEvent) {
      if (Kotlin.isType(jsEvent, KeyboardEvent)) {
        this$JsKeyInput.keyEvent_0.clear();
        this$JsKeyInput.populateKeyEvent_0(jsEvent);
        if (!jsEvent.repeat) {
          this$JsKeyInput.downMap_0.put_1llc0w$(this$JsKeyInput.keyEvent_0.keyCode, this$JsKeyInput.keyEvent_0.location, true);
        }
        this$JsKeyInput.keyDown.dispatch_11rb$(this$JsKeyInput.keyEvent_0);
        if (this$JsKeyInput.keyEvent_0.defaultPrevented())
          jsEvent.preventDefault();
      }
      return Unit;
    };
  }
  function JsKeyInput$keyUpHandler$lambda(this$JsKeyInput) {
    return function (jsEvent) {
      var tmp$;
      if (Kotlin.isType(jsEvent, KeyboardEvent)) {
        this$JsKeyInput.keyEvent_0.clear();
        this$JsKeyInput.populateKeyEvent_0(jsEvent);
        (tmp$ = this$JsKeyInput.downMap_0.get_11rb$(this$JsKeyInput.keyEvent_0.keyCode)) != null ? (tmp$.clear(), Unit) : null;
        this$JsKeyInput.keyUp.dispatch_11rb$(this$JsKeyInput.keyEvent_0);
        if (this$JsKeyInput.keyEvent_0.defaultPrevented())
          jsEvent.preventDefault();
      }
      return Unit;
    };
  }
  function JsKeyInput$keyPressHandler$lambda(this$JsKeyInput) {
    return function (jsEvent) {
      if (Kotlin.isType(jsEvent, KeyboardEvent)) {
        this$JsKeyInput.charEvent_0.clear();
        this$JsKeyInput.charEvent_0.char = toBoxedChar(toChar(jsEvent.charCode));
        this$JsKeyInput.char.dispatch_11rb$(this$JsKeyInput.charEvent_0);
        if (this$JsKeyInput.charEvent_0.defaultPrevented())
          jsEvent.preventDefault();
      }
      return Unit;
    };
  }
  function JsKeyInput$rootBlurHandler$lambda(this$JsKeyInput) {
    return function (jsEvent) {
      this$JsKeyInput.downMap_0.clear();
      return Unit;
    };
  }
  JsKeyInput.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsKeyInput', interfaces: [KeyInput]};
  function JsMouseInput(root) {
    JsMouseInput$Companion_getInstance();
    this.root_0 = root;
    this.touchStart_76nyhq$_0 = new Signal1();
    this.touchEnd_ndd06v$_0 = new Signal1();
    this.touchMove_e2n801$_0 = new Signal1();
    this.touchCancel_uttsja$_0 = new Signal1();
    this.mouseDown_sv9xm0$_0 = new Signal1();
    this.mouseUp_quzr7z$_0 = new Signal1();
    this.mouseMove_t081zt$_0 = new Signal1();
    this.mouseWheel_jl85ld$_0 = new Signal1();
    this.overCanvasChanged_vvetzt$_0 = new Signal1();
    this.touchEvent_0 = new TouchInteraction();
    this.mouseEvent_0 = new MouseInteraction();
    this.wheelEvent_0 = new WheelInteraction();
    this._overCanvas_0 = false;
    this._canvasX_0 = 0.0;
    this._canvasY_0 = 0.0;
    this.linePixelSize = 24.0;
    this.pagePixelSize = 24.0 * 200.0;
    this.downMap_0 = HashMap_init();
    this.mouseEnterHandler_0 = JsMouseInput$mouseEnterHandler$lambda(this);
    this.mouseLeaveHandler_0 = JsMouseInput$mouseLeaveHandler$lambda(this);
    this.touchStartHandler_0 = JsMouseInput$touchStartHandler$lambda(this);
    this.touchMoveHandler_0 = JsMouseInput$touchMoveHandler$lambda(this);
    this.touchEndHandler_0 = JsMouseInput$touchEndHandler$lambda(this);
    this.touchCancelHandler_0 = JsMouseInput$touchCancelHandler$lambda(this);
    this.mouseMoveHandler_0 = JsMouseInput$mouseMoveHandler$lambda(this);
    this.mouseDownHandler_0 = JsMouseInput$mouseDownHandler$lambda(this);
    this.mouseUpHandler_0 = JsMouseInput$mouseUpHandler$lambda(this);
    this.mouseWheelHandler_0 = JsMouseInput$mouseWheelHandler$lambda(this);
    window.addEventListener('touchstart', this.touchStartHandler_0, true);
    window.addEventListener('touchend', this.touchEndHandler_0, true);
    window.addEventListener('touchmove', this.touchMoveHandler_0, true);
    window.addEventListener('touchcancel', this.touchCancelHandler_0, true);
    this.root_0.addEventListener('touchleave', this.mouseLeaveHandler_0, true);
    window.addEventListener('touchleave', this.mouseLeaveHandler_0, true);
    this.root_0.addEventListener('mouseenter', this.mouseEnterHandler_0, true);
    window.addEventListener('mouseleave', this.mouseLeaveHandler_0, true);
    this.root_0.addEventListener('mouseleave', this.mouseLeaveHandler_0, true);
    window.addEventListener('mousemove', this.mouseMoveHandler_0, true);
    window.addEventListener('mousedown', this.mouseDownHandler_0, true);
    window.addEventListener('mouseup', this.mouseUpHandler_0, true);
    this.root_0.addEventListener('wheel', this.mouseWheelHandler_0, true);
  }
  Object.defineProperty(JsMouseInput.prototype, 'touchStart', {get: function () {
    return this.touchStart_76nyhq$_0;
  }});
  Object.defineProperty(JsMouseInput.prototype, 'touchEnd', {get: function () {
    return this.touchEnd_ndd06v$_0;
  }});
  Object.defineProperty(JsMouseInput.prototype, 'touchMove', {get: function () {
    return this.touchMove_e2n801$_0;
  }});
  Object.defineProperty(JsMouseInput.prototype, 'touchCancel', {get: function () {
    return this.touchCancel_uttsja$_0;
  }});
  Object.defineProperty(JsMouseInput.prototype, 'mouseDown', {get: function () {
    return this.mouseDown_sv9xm0$_0;
  }});
  Object.defineProperty(JsMouseInput.prototype, 'mouseUp', {get: function () {
    return this.mouseUp_quzr7z$_0;
  }});
  Object.defineProperty(JsMouseInput.prototype, 'mouseMove', {get: function () {
    return this.mouseMove_t081zt$_0;
  }});
  Object.defineProperty(JsMouseInput.prototype, 'mouseWheel', {get: function () {
    return this.mouseWheel_jl85ld$_0;
  }});
  Object.defineProperty(JsMouseInput.prototype, 'overCanvasChanged', {get: function () {
    return this.overCanvasChanged_vvetzt$_0;
  }});
  Object.defineProperty(JsMouseInput.prototype, 'canvasX', {get: function () {
    return this._canvasX_0;
  }});
  Object.defineProperty(JsMouseInput.prototype, 'canvasY', {get: function () {
    return this._canvasY_0;
  }});
  Object.defineProperty(JsMouseInput.prototype, 'overCanvas', {get: function () {
    return this._overCanvas_0;
  }});
  JsMouseInput.prototype.overCanvas_0 = function (value) {
    if (this._overCanvas_0 === value)
      return;
    this._overCanvas_0 = value;
    this.overCanvasChanged.dispatch_11rb$(value);
  };
  JsMouseInput.prototype.populateMouseEvent_0 = function (jsEvent) {
    this.mouseEvent_0.clear();
    this.mouseEvent_0.timestamp = numberToLong(jsEvent.timeStamp);
    this.mouseEvent_0.canvasX = jsEvent.clientX - this.root_0.offsetLeft;
    this.mouseEvent_0.canvasY = jsEvent.clientY - this.root_0.offsetTop;
    this.mouseEvent_0.button = JsMouseInput$Companion_getInstance().getWhichButton_za3lpa$(jsEvent.button);
    this._canvasX_0 = this.mouseEvent_0.canvasX;
    this._canvasY_0 = this.mouseEvent_0.canvasY;
  };
  JsMouseInput.prototype.populateTouchEvent_0 = function (jsEvent) {
    var tmp$;
    this.touchEvent_0.clear();
    this.set_0(this.touchEvent_0, jsEvent);
    tmp$ = firstOrNull(this.touchEvent_0.touches);
    if (tmp$ == null) {
      return;
    }
    var firstTouch = tmp$;
    this._canvasX_0 = firstTouch.canvasX;
    this._canvasY_0 = firstTouch.canvasY;
  };
  JsMouseInput.prototype.set_0 = function ($receiver, jsEvent) {
    var tmp$, tmp$_0;
    $receiver.timestamp = numberToLong(jsEvent.timeStamp);
    $receiver.clearTouches();
    tmp$ = get_lastIndex(jsEvent.changedTouches);
    for (var i = 0; i <= tmp$; i++) {
      var changedTouch = jsEvent.changedTouches[i];
      var t = Touch.Companion.obtain();
      this.set_1(t, changedTouch);
      $receiver.changedTouches.add_11rb$(t);
    }
    tmp$_0 = get_lastIndex(jsEvent.touches);
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      var touch = jsEvent.touches[i_0];
      var t_0 = Touch.Companion.obtain();
      this.set_1(t_0, touch);
      $receiver.touches.add_11rb$(t_0);
    }
  };
  JsMouseInput.prototype.set_1 = function ($receiver, jsTouch) {
    $receiver.canvasX = jsTouch.clientX - this.root_0.offsetLeft;
    $receiver.canvasY = jsTouch.clientY - this.root_0.offsetTop;
    $receiver.identifier = jsTouch.identifier;
  };
  JsMouseInput.prototype.dispose = function () {
    this.touchStart.dispose();
    this.touchEnd.dispose();
    this.touchMove.dispose();
    this.touchCancel.dispose();
    this.mouseDown.dispose();
    this.mouseUp.dispose();
    this.mouseMove.dispose();
    this.mouseWheel.dispose();
    this.overCanvasChanged.dispose();
    window.removeEventListener('touchstart', this.touchStartHandler_0, true);
    window.removeEventListener('touchend', this.touchEndHandler_0, true);
    window.removeEventListener('touchmove', this.touchMoveHandler_0, true);
    this.root_0.removeEventListener('touchleave', this.mouseLeaveHandler_0, true);
    window.removeEventListener('touchleave', this.mouseLeaveHandler_0, true);
    this.root_0.removeEventListener('mouseenter', this.mouseEnterHandler_0, true);
    this.root_0.removeEventListener('mouseleave', this.mouseLeaveHandler_0, true);
    window.removeEventListener('mousemove', this.mouseMoveHandler_0, true);
    window.removeEventListener('mousedown', this.mouseDownHandler_0, true);
    window.removeEventListener('mouseup', this.mouseUpHandler_0, true);
    this.root_0.removeEventListener('wheel', this.mouseWheelHandler_0, true);
  };
  JsMouseInput.prototype.mouseIsDown_6klequ$ = function (button) {
    return this.downMap_0.get_11rb$(button) === true;
  };
  function JsMouseInput$Companion() {
    JsMouseInput$Companion_instance = this;
  }
  JsMouseInput$Companion.prototype.getWhichButton_za3lpa$ = function (i) {
    var tmp$;
    switch (i) {
      case -1:
        tmp$ = WhichButton.UNKNOWN;
        break;
      case 0:
        tmp$ = WhichButton.LEFT;
        break;
      case 1:
        tmp$ = WhichButton.MIDDLE;
        break;
      case 2:
        tmp$ = WhichButton.RIGHT;
        break;
      case 3:
        tmp$ = WhichButton.BACK;
        break;
      case 4:
        tmp$ = WhichButton.FORWARD;
        break;
      default:tmp$ = WhichButton.UNKNOWN;
        break;
    }
    return tmp$;
  };
  JsMouseInput$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var JsMouseInput$Companion_instance = null;
  function JsMouseInput$Companion_getInstance() {
    if (JsMouseInput$Companion_instance === null) {
      new JsMouseInput$Companion();
    }
    return JsMouseInput$Companion_instance;
  }
  function JsMouseInput$mouseEnterHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      this$JsMouseInput.overCanvas_0(true);
      return Unit;
    };
  }
  function JsMouseInput$mouseLeaveHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      this$JsMouseInput.overCanvas_0(false);
      return Unit;
    };
  }
  function JsMouseInput$touchStartHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = alwaysTrue(tmp$ = jsEvent, TouchEvent) ? tmp$ : throwCCE();
      this$JsMouseInput.populateTouchEvent_0(tmp$_0);
      this$JsMouseInput.touchStart.dispatch_11rb$(this$JsMouseInput.touchEvent_0);
      if (jsEvent.cancelable && this$JsMouseInput.touchEvent_0.defaultPrevented())
        jsEvent.preventDefault();
      return Unit;
    };
  }
  function JsMouseInput$touchMoveHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = alwaysTrue(tmp$ = jsEvent, TouchEvent) ? tmp$ : throwCCE();
      this$JsMouseInput.populateTouchEvent_0(tmp$_0);
      this$JsMouseInput.touchMove.dispatch_11rb$(this$JsMouseInput.touchEvent_0);
      if (jsEvent.cancelable && this$JsMouseInput.touchEvent_0.defaultPrevented())
        jsEvent.preventDefault();
      return Unit;
    };
  }
  function JsMouseInput$touchEndHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = alwaysTrue(tmp$ = jsEvent, TouchEvent) ? tmp$ : throwCCE();
      this$JsMouseInput.populateTouchEvent_0(tmp$_0);
      this$JsMouseInput.touchEnd.dispatch_11rb$(this$JsMouseInput.touchEvent_0);
      if (jsEvent.cancelable && this$JsMouseInput.touchEvent_0.defaultPrevented())
        jsEvent.preventDefault();
      return Unit;
    };
  }
  function JsMouseInput$touchCancelHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = alwaysTrue(tmp$ = jsEvent, TouchEvent) ? tmp$ : throwCCE();
      this$JsMouseInput.populateTouchEvent_0(tmp$_0);
      this$JsMouseInput.touchCancel.dispatch_11rb$(this$JsMouseInput.touchEvent_0);
      if (jsEvent.cancelable && this$JsMouseInput.touchEvent_0.defaultPrevented())
        jsEvent.preventDefault();
      return Unit;
    };
  }
  function JsMouseInput$mouseMoveHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = alwaysTrue(tmp$ = jsEvent, MouseEvent) ? tmp$ : throwCCE();
      this$JsMouseInput.populateMouseEvent_0(tmp$_0);
      this$JsMouseInput.mouseEvent_0.button = WhichButton.UNKNOWN;
      this$JsMouseInput.mouseMove.dispatch_11rb$(this$JsMouseInput.mouseEvent_0);
      if (jsEvent.cancelable && this$JsMouseInput.mouseEvent_0.defaultPrevented())
        jsEvent.preventDefault();
      return Unit;
    };
  }
  function JsMouseInput$mouseDownHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = alwaysTrue(tmp$ = jsEvent, MouseEvent) ? tmp$ : throwCCE();
      this$JsMouseInput.populateMouseEvent_0(tmp$_0);
      var $receiver = this$JsMouseInput.downMap_0;
      var key = this$JsMouseInput.mouseEvent_0.button;
      $receiver.put_xwzc9p$(key, true);
      this$JsMouseInput.mouseDown.dispatch_11rb$(this$JsMouseInput.mouseEvent_0);
      if (jsEvent.cancelable && this$JsMouseInput.mouseEvent_0.defaultPrevented())
        jsEvent.preventDefault();
      return Unit;
    };
  }
  function JsMouseInput$mouseUpHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = alwaysTrue(tmp$ = jsEvent, MouseEvent) ? tmp$ : throwCCE();
      this$JsMouseInput.populateMouseEvent_0(tmp$_0);
      var $receiver = this$JsMouseInput.downMap_0;
      var key = this$JsMouseInput.mouseEvent_0.button;
      $receiver.put_xwzc9p$(key, false);
      this$JsMouseInput.mouseUp.dispatch_11rb$(this$JsMouseInput.mouseEvent_0);
      if (jsEvent.cancelable && this$JsMouseInput.mouseEvent_0.defaultPrevented())
        jsEvent.preventDefault();
      return Unit;
    };
  }
  function JsMouseInput$mouseWheelHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      if (Kotlin.isType(jsEvent, WheelEvent)) {
        this$JsMouseInput.wheelEvent_0.clear();
        this$JsMouseInput.wheelEvent_0.timestamp = numberToLong(jsEvent.timeStamp);
        this$JsMouseInput.wheelEvent_0.canvasX = jsEvent.pageX - this$JsMouseInput.root_0.offsetLeft;
        this$JsMouseInput.wheelEvent_0.canvasY = jsEvent.pageY - this$JsMouseInput.root_0.offsetTop;
        this$JsMouseInput.wheelEvent_0.button = JsMouseInput$Companion_getInstance().getWhichButton_za3lpa$(jsEvent.button);
        this$JsMouseInput._canvasX_0 = this$JsMouseInput.wheelEvent_0.canvasX;
        this$JsMouseInput._canvasY_0 = this$JsMouseInput.wheelEvent_0.canvasY;
        var m = jsEvent.deltaMode === WheelEvent.DOM_DELTA_PAGE ? this$JsMouseInput.pagePixelSize : jsEvent.deltaMode === WheelEvent.DOM_DELTA_LINE ? this$JsMouseInput.linePixelSize : 1.0;
        this$JsMouseInput.wheelEvent_0.deltaX = m * jsEvent.deltaX;
        this$JsMouseInput.wheelEvent_0.deltaY = m * jsEvent.deltaY;
        this$JsMouseInput.wheelEvent_0.deltaZ = m * jsEvent.deltaZ;
        this$JsMouseInput.mouseWheel.dispatch_11rb$(this$JsMouseInput.wheelEvent_0);
      }
      return Unit;
    };
  }
  JsMouseInput.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsMouseInput', interfaces: [MouseInput]};
  function JsBufferFactory() {
  }
  JsBufferFactory.prototype.byteBuffer_za3lpa$ = function (capacity) {
    return new JsByteBuffer(new Uint8Array(capacity));
  };
  JsBufferFactory.prototype.shortBuffer_za3lpa$ = function (capacity) {
    return new JsShortBuffer(new Uint16Array(capacity));
  };
  JsBufferFactory.prototype.intBuffer_za3lpa$ = function (capacity) {
    return new JsIntBuffer(new Uint32Array(capacity));
  };
  JsBufferFactory.prototype.floatBuffer_za3lpa$ = function (capacity) {
    return new JsFloatBuffer(new Float32Array(capacity));
  };
  JsBufferFactory.prototype.doubleBuffer_za3lpa$ = function (capacity) {
    return new JsDoubleBuffer(new Float64Array(capacity));
  };
  JsBufferFactory.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsBufferFactory', interfaces: [BufferFactory]};
  function JsByteBuffer(bufferView) {
    BufferBase.call(this, bufferView.length);
    this.bufferView_0 = bufferView;
    this.dataView_0 = new DataView(this.bufferView_0.buffer);
    this.littleEndian_0 = true;
    this.dataSize_mxluyb$_0 = 1;
  }
  JsByteBuffer.prototype.get = function () {
    return this.bufferView_0[this.nextPosition_za3lpa$()];
  };
  JsByteBuffer.prototype.put_11rb$ = function (value) {
    this.bufferView_0[this.nextPosition_za3lpa$()] = value;
  };
  Object.defineProperty(JsByteBuffer.prototype, 'native', {get: function () {
    return this._limit === this.capacity ? this.bufferView_0 : this.bufferView_0.subarray(0, this._limit);
  }});
  Object.defineProperty(JsByteBuffer.prototype, 'dataSize', {get: function () {
    return this.dataSize_mxluyb$_0;
  }});
  JsByteBuffer.prototype.getShort = function () {
    return this.dataView_0.getInt16(this.nextPosition_za3lpa$(2), this.littleEndian_0);
  };
  JsByteBuffer.prototype.getInt = function () {
    return this.dataView_0.getInt32(this.nextPosition_za3lpa$(4), this.littleEndian_0);
  };
  JsByteBuffer.prototype.getFloat = function () {
    return this.dataView_0.getFloat32(this.nextPosition_za3lpa$(4), this.littleEndian_0);
  };
  JsByteBuffer.prototype.getDouble = function () {
    return this.dataView_0.getFloat64(this.nextPosition_za3lpa$(8), this.littleEndian_0);
  };
  JsByteBuffer.prototype.getLong = function () {
    var int1 = this.dataView_0.getInt32(this.nextPosition_za3lpa$(4), this.littleEndian_0);
    var int2 = this.dataView_0.getInt32(this.nextPosition_za3lpa$(4), this.littleEndian_0);
    return Kotlin.Long.fromInt(int1).shiftLeft(16).or(Kotlin.Long.fromInt(int2));
  };
  JsByteBuffer.prototype.putShort_mq22fl$ = function (value) {
    this.dataView_0.setInt16(this.nextPosition_za3lpa$(2), value, this.littleEndian_0);
  };
  JsByteBuffer.prototype.putInt_za3lpa$ = function (value) {
    this.dataView_0.setInt32(this.nextPosition_za3lpa$(4), value, this.littleEndian_0);
  };
  JsByteBuffer.prototype.putFloat_mx4ult$ = function (value) {
    this.dataView_0.setFloat32(this.nextPosition_za3lpa$(4), value, this.littleEndian_0);
  };
  JsByteBuffer.prototype.putDouble_14dthe$ = function (value) {
    this.dataView_0.setFloat64(this.nextPosition_za3lpa$(8), value, this.littleEndian_0);
  };
  JsByteBuffer.prototype.putLong_s8cxhz$ = function (value) {
    this.dataView_0.setInt32(this.nextPosition_za3lpa$(4), value.shiftRight(16).toInt(), this.littleEndian_0);
    this.dataView_0.setInt32(this.nextPosition_za3lpa$(4), value.and(L4294967295).toInt(), this.littleEndian_0);
  };
  JsByteBuffer.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsByteBuffer', interfaces: [NativeReadWriteByteBuffer, BufferBase]};
  function JsShortBuffer(bufferView) {
    BufferBase.call(this, bufferView.length);
    this.bufferView_0 = bufferView;
    this.dataSize_84sac3$_0 = 2;
  }
  Object.defineProperty(JsShortBuffer.prototype, 'dataSize', {get: function () {
    return this.dataSize_84sac3$_0;
  }});
  JsShortBuffer.prototype.get = function () {
    return this.bufferView_0[this.nextPosition_za3lpa$()];
  };
  JsShortBuffer.prototype.put_11rb$ = function (value) {
    this.bufferView_0[this.nextPosition_za3lpa$()] = value;
  };
  Object.defineProperty(JsShortBuffer.prototype, 'native', {get: function () {
    return this._limit === this.capacity ? this.bufferView_0 : this.bufferView_0.subarray(0, this._limit);
  }});
  JsShortBuffer.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsShortBuffer', interfaces: [NativeReadWriteBuffer, BufferBase]};
  function JsIntBuffer(bufferView) {
    BufferBase.call(this, bufferView.length);
    this.bufferView_0 = bufferView;
    this.dataSize_kau8ue$_0 = 4;
  }
  Object.defineProperty(JsIntBuffer.prototype, 'dataSize', {get: function () {
    return this.dataSize_kau8ue$_0;
  }});
  JsIntBuffer.prototype.get = function () {
    return this.bufferView_0[this.nextPosition_za3lpa$()];
  };
  JsIntBuffer.prototype.put_11rb$ = function (value) {
    this.bufferView_0[this.nextPosition_za3lpa$()] = value;
  };
  Object.defineProperty(JsIntBuffer.prototype, 'native', {get: function () {
    return this._limit === this.capacity ? this.bufferView_0 : this.bufferView_0.subarray(0, this._limit);
  }});
  JsIntBuffer.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsIntBuffer', interfaces: [NativeReadWriteBuffer, BufferBase]};
  function JsFloatBuffer(bufferView) {
    BufferBase.call(this, bufferView.length);
    this.bufferView_0 = bufferView;
    this.dataSize_2vqi43$_0 = 4;
  }
  Object.defineProperty(JsFloatBuffer.prototype, 'dataSize', {get: function () {
    return this.dataSize_2vqi43$_0;
  }});
  JsFloatBuffer.prototype.get = function () {
    return this.bufferView_0[this.nextPosition_za3lpa$()];
  };
  JsFloatBuffer.prototype.put_11rb$ = function (value) {
    this.bufferView_0[this.nextPosition_za3lpa$()] = value;
  };
  Object.defineProperty(JsFloatBuffer.prototype, 'native', {get: function () {
    return this._limit === this.capacity ? this.bufferView_0 : this.bufferView_0.subarray(0, this._limit);
  }});
  JsFloatBuffer.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsFloatBuffer', interfaces: [NativeReadWriteBuffer, BufferBase]};
  function JsDoubleBuffer(bufferView) {
    BufferBase.call(this, bufferView.length);
    this.bufferView_0 = bufferView;
    this.dataSize_smpv0c$_0 = 8;
  }
  Object.defineProperty(JsDoubleBuffer.prototype, 'dataSize', {get: function () {
    return this.dataSize_smpv0c$_0;
  }});
  JsDoubleBuffer.prototype.get = function () {
    return this.bufferView_0[this.nextPosition_za3lpa$()];
  };
  JsDoubleBuffer.prototype.put_11rb$ = function (value) {
    this.bufferView_0[this.nextPosition_za3lpa$()] = value;
  };
  Object.defineProperty(JsDoubleBuffer.prototype, 'native', {get: function () {
    return this._limit === this.capacity ? this.bufferView_0 : this.bufferView_0.subarray(0, this._limit);
  }});
  JsDoubleBuffer.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsDoubleBuffer', interfaces: [NativeReadWriteBuffer, BufferBase]};
  function JsHttpRequest(requestData, responseType) {
    Promise.call(this);
    this._bytesLoaded_a9sfs8$_0 = 0;
    this._bytesTotal_o35kgj$_0 = 0;
    this.httpRequest_tnk4cc$_0 = new XMLHttpRequest();
    var tmp$, tmp$_0;
    this.httpRequest_tnk4cc$_0.onprogress = JsHttpRequest_init$lambda(this);
    this.httpRequest_tnk4cc$_0.onreadystatechange = JsHttpRequest_init$lambda_0(this);
    var async = true;
    var url = equals(requestData.method, request.UrlRequestMethod.GET) && requestData.variables != null ? requestData.url + '?' + ensureNotNull(requestData.variables).toQueryString() : requestData.url;
    this.httpRequest_tnk4cc$_0.open(requestData.method, url, async, requestData.user, requestData.password);
    this.httpRequest_tnk4cc$_0.responseType = responseType;
    this.httpRequest_tnk4cc$_0.timeout = requestData.timeout.toInt();
    tmp$ = requestData.headers.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var key = tmp$_1.key;
      var value = tmp$_1.value;
      this.httpRequest_tnk4cc$_0.setRequestHeader(key, value);
    }
    if (equals(requestData.method, request.UrlRequestMethod.GET)) {
      this.httpRequest_tnk4cc$_0.send();
    }
     else {
      if (requestData.variables != null) {
        var data = ensureNotNull(requestData.variables).toQueryString();
        this.httpRequest_tnk4cc$_0.send(data);
      }
       else if (requestData.formData != null) {
        var formData = new FormData();
        tmp$_0 = ensureNotNull(requestData.formData).items.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          if (Kotlin.isType(item, ByteArrayFormItem)) {
            formData.append(item.name, new Blob([item.value.native]));
          }
           else if (Kotlin.isType(item, StringFormItem)) {
            formData.append(item.name, item.value);
          }
           else {
            logging.Log.warn_s8jyv4$('Unknown form item type ' + item);
          }
        }
        this.httpRequest_tnk4cc$_0.send(formData);
      }
       else if (requestData.body != null) {
        this.httpRequest_tnk4cc$_0.send(ensureNotNull(requestData.body));
      }
       else {
        this.httpRequest_tnk4cc$_0.send();
      }
    }
  }
  Object.defineProperty(JsHttpRequest.prototype, 'secondsLoaded', {get: function () {
    return this._bytesLoaded_a9sfs8$_0 * core.Bandwidth.downBpsInv;
  }});
  Object.defineProperty(JsHttpRequest.prototype, 'secondsTotal', {get: function () {
    return this._bytesTotal_o35kgj$_0 * core.Bandwidth.downBpsInv;
  }});
  JsHttpRequest.prototype.cancel = function () {
    this.httpRequest_tnk4cc$_0.abort();
  };
  function JsHttpRequest_init$lambda(this$JsHttpRequest) {
    return function (event) {
      var tmp$;
      alwaysTrue(tmp$ = event, ProgressEvent) ? tmp$ : throwCCE();
      this$JsHttpRequest._bytesLoaded_a9sfs8$_0 = event.loaded;
      this$JsHttpRequest._bytesTotal_o35kgj$_0 = event.total;
      return Unit;
    };
  }
  function JsHttpRequest_init$lambda_0(this$JsHttpRequest) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      if (this$JsHttpRequest.httpRequest_tnk4cc$_0.readyState === XMLHttpRequest.DONE) {
        this$JsHttpRequest.httpRequest_tnk4cc$_0.onreadystatechange = null;
        if (this$JsHttpRequest.httpRequest_tnk4cc$_0.status === toShort(200) || this$JsHttpRequest.httpRequest_tnk4cc$_0.status === toShort(304)) {
          var result = this$JsHttpRequest.process_1endcj$(this$JsHttpRequest.httpRequest_tnk4cc$_0);
          this$JsHttpRequest.success_11rb$(result);
        }
         else {
          tmp$_1 = new ResponseException(this$JsHttpRequest.httpRequest_tnk4cc$_0.status, this$JsHttpRequest.httpRequest_tnk4cc$_0.statusText, (tmp$_0 = (tmp$ = this$JsHttpRequest.httpRequest_tnk4cc$_0.response) != null ? tmp$.toString() : null) != null ? tmp$_0 : '');
          this$JsHttpRequest.fail_tcv7n7$(tmp$_1);
        }
      }
      return Unit;
    };
  }
  JsHttpRequest.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsHttpRequest', interfaces: [Request, Promise]};
  function JsArrayBufferRequest(requestData) {
    JsHttpRequest.call(this, requestData, 'arraybuffer');
  }
  JsArrayBufferRequest.prototype.process_1endcj$ = function (httpRequest) {
    var tmp$;
    return alwaysTrue(tmp$ = httpRequest.response, ArrayBuffer) ? tmp$ : throwCCE();
  };
  JsArrayBufferRequest.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsArrayBufferRequest', interfaces: [JsHttpRequest]};
  function JsBinaryRequest(requestData) {
    JsHttpRequest.call(this, requestData, 'arraybuffer');
  }
  JsBinaryRequest.prototype.process_1endcj$ = function (httpRequest) {
    var tmp$;
    return new JsByteBuffer(new Uint8Array(alwaysTrue(tmp$ = ensureNotNull(httpRequest.response), ArrayBuffer) ? tmp$ : throwCCE()));
  };
  JsBinaryRequest.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsBinaryRequest', interfaces: [JsHttpRequest]};
  function JsTextRequest(requestData) {
    JsHttpRequest.call(this, requestData, 'text');
  }
  JsTextRequest.prototype.process_1endcj$ = function (httpRequest) {
    var tmp$;
    return typeof (tmp$ = ensureNotNull(httpRequest.response)) === 'string' ? tmp$ : throwCCE();
  };
  JsTextRequest.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsTextRequest', interfaces: [JsHttpRequest]};
  function JsRestServiceFactory() {
    JsRestServiceFactory_instance = this;
  }
  JsRestServiceFactory.prototype.createTextRequest_dife3q$ = function (injector, requestData) {
    return new JsTextRequest(requestData);
  };
  JsRestServiceFactory.prototype.createBinaryRequest_dife3q$ = function (injector, requestData) {
    return new JsBinaryRequest(requestData);
  };
  JsRestServiceFactory.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsRestServiceFactory', interfaces: [RestServiceFactory]};
  var JsRestServiceFactory_instance = null;
  function JsRestServiceFactory_getInstance() {
    if (JsRestServiceFactory_instance === null) {
      new JsRestServiceFactory();
    }
    return JsRestServiceFactory_instance;
  }
  function JsApplicationBase() {
    JsApplicationBase$Companion_getInstance();
    ApplicationBase.call(this);
    this.frameDriver_64420u$_0 = null;
    collection._stringMap = JsApplicationBase_init$lambda;
    Function.prototype.uncachedBind = Function.prototype.bind;
    Function.prototype.bind = function () {
      if (arguments.length !== 2 || arguments[0] !== null || arguments[1] === null)
        return this.uncachedBind.apply(this, arguments);
      var receiver = arguments[1];
      if (!receiver.__bindingCache)
        receiver.__bindingCache = {};
      var existing = receiver.__bindingCache[this];
      if (existing !== undefined)
        return existing;
      var newBind = this.uncachedBind.apply(this, arguments);
      receiver.__bindingCache[this] = newBind;
      return newBind;
    };
    Kotlin.uncachedIsType = Kotlin.isType;
    Kotlin.isType = function (object, klass) {
      if (klass === Object) {
        switch (typeof object) {
          case 'string':
          case 'number':
          case 'boolean':
          case 'function':
            return true;
          default:return object instanceof Object;
        }
      }
      if (object == null || klass == null || (typeof object !== 'object' && typeof object !== 'function')) {
        return false;
      }
      if (typeof klass === 'function' && object instanceof klass) {
        return true;
      }
      if (!object.__typeCache)
        object.__typeCache = {};
      var existing = object.__typeCache[klass];
      if (existing !== undefined)
        return existing;
      var typeCheck = Kotlin.uncachedIsType.apply(this, arguments);
      object.__typeCache[klass] = typeCheck;
      return typeCheck;
    };
    if (!equals(getCallableRef('memberRefTest', function ($receiver) {
      return $receiver.memberRefTest_1sur1o$_0(), Unit;
    }.bind(null, this)), getCallableRef('memberRefTest', function ($receiver) {
      return $receiver.memberRefTest_1sur1o$_0(), Unit;
    }.bind(null, this))))
      println("[SEVERE] Member reference fix isn't working.");
    time.time = new TimeProviderImpl();
    browser.encodeUriComponent2 = getCallableRef('encodeURIComponent', function (str) {
      return encodeURIComponent(str);
    });
    browser.decodeUriComponent2 = getCallableRef('decodeURIComponent', function (str) {
      return decodeURIComponent(str);
    });
    window.onbeforeunload = JsApplicationBase_init$lambda_0(this);
    this.userInfoTask_d8lzep$_0 = (new ApplicationBase$BootTask(JsApplicationBase$userInfoTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$userInfoTask_metadata);
    this.loggingTask_cikgkt$_0 = (new ApplicationBase$BootTask(JsApplicationBase$loggingTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$loggingTask_metadata);
    this.bufferTask_srz9fc$_0 = (new ApplicationBase$BootTask(JsApplicationBase$bufferTask$lambda)).provideDelegate_ff3vde$(this, JsApplicationBase$bufferTask_metadata);
    this.mouseInputTask_v6aomr$_0 = (new ApplicationBase$BootTask(JsApplicationBase$mouseInputTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$mouseInputTask_metadata);
    this.keyInputTask_2zl61f$_0 = (new ApplicationBase$BootTask(JsApplicationBase$keyInputTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$keyInputTask_metadata);
    this.jsonTask_obehe8$_0 = (new ApplicationBase$BootTask(JsApplicationBase$jsonTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$jsonTask_metadata);
    this.cameraTask_8r36b7$_0 = (new ApplicationBase$BootTask(JsApplicationBase$cameraTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$cameraTask_metadata);
    this.filesTask_99q3az$_0 = (new ApplicationBase$BootTask(JsApplicationBase$filesTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$filesTask_metadata);
    this.requestTask_ntzizn$_0 = (new ApplicationBase$BootTask(JsApplicationBase$requestTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$requestTask_metadata);
    this.assetManagerTask_aj6sjp$_0 = (new ApplicationBase$BootTask(JsApplicationBase$assetManagerTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$assetManagerTask_metadata);
    this.timeDriverTask_8nynst$_0 = (new ApplicationBase$BootTask(JsApplicationBase$timeDriverTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$timeDriverTask_metadata);
    this.interactivityTask_92zzqx$_0 = (new ApplicationBase$BootTask(JsApplicationBase$interactivityTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$interactivityTask_metadata);
    this.focusManagerTask_xhrs9v$_0 = (new ApplicationBase$BootTask(JsApplicationBase$focusManagerTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$focusManagerTask_metadata);
    this.cursorManagerTask_hix7et$_0 = (new ApplicationBase$BootTask(JsApplicationBase$cursorManagerTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$cursorManagerTask_metadata);
    this.persistenceTask_hmgujx$_0 = (new ApplicationBase$BootTask(JsApplicationBase$persistenceTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$persistenceTask_metadata);
    this.selectionManagerTask_n38c15$_0 = (new ApplicationBase$BootTask(JsApplicationBase$selectionManagerTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$selectionManagerTask_metadata);
    this.i18nTask_r8cd0m$_0 = (new ApplicationBase$BootTask(JsApplicationBase$i18nTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$i18nTask_metadata);
    this.textFormattersTask_sy4pry$_0 = (new ApplicationBase$BootTask(JsApplicationBase$textFormattersTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$textFormattersTask_metadata);
    this.fileIoManagerTask_hk78m1$_0 = (new ApplicationBase$BootTask(JsApplicationBase$fileIoManagerTask$lambda(this))).provideDelegate_ff3vde$(this, JsApplicationBase$fileIoManagerTask_metadata);
  }
  function JsApplicationBase$start$lambda(closure$appConfig_0, this$JsApplicationBase_0, closure$onReady_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$start$lambda(closure$appConfig_0, this$JsApplicationBase_0, closure$onReady_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$start$lambda(closure$appConfig_0, this$JsApplicationBase_0, closure$onReady_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$appConfig = closure$appConfig_0;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
    this.local$closure$onReady = closure$onReady_0;
    this.local$popUpManager = void 0;
    this.local$scope = void 0;
  }
  Coroutine$JsApplicationBase$start$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$start$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$start$lambda.prototype.constructor = Coroutine$JsApplicationBase$start$lambda;
  Coroutine$JsApplicationBase$start$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.initializeConfig_3zlglu$(this.local$closure$appConfig, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$JsApplicationBase.contentLoad_fx543c$_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$this$JsApplicationBase.awaitAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$this$JsApplicationBase.createInjector(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var injector = this.result_0;
            this.state_0 = 6;
            this.result_0 = this.local$this$JsApplicationBase.createStage_717veb$(OwnedImpl_init(injector), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$this$JsApplicationBase.stage = this.result_0;
            this.state_0 = 7;
            this.result_0 = this.local$this$JsApplicationBase.createPopUpManager_k58t2y$(this.local$this$JsApplicationBase.stage, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$popUpManager = this.result_0;
            this.local$scope = createScope(this.local$this$JsApplicationBase.stage, listOf([Stage.Companion.to_trkh7z$(this.local$this$JsApplicationBase.stage), PopUpManager.Companion.to_trkh7z$(this.local$popUpManager)]));
            this.state_0 = 8;
            this.result_0 = this.local$this$JsApplicationBase.initializeSpecialInteractivity_717veb$(this.local$scope, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$closure$onReady(this.local$scope);
            this.local$this$JsApplicationBase.stage.addElement_sxf3l3$(this.local$popUpManager.view);
            this.state_0 = 9;
            this.result_0 = this.local$this$JsApplicationBase.initializeFrameDriver_r456d0$(this.local$scope.injector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.local$this$JsApplicationBase.frameDriver_64420u$_0 = this.result_0;
            return ensureNotNull(this.local$this$JsApplicationBase.frameDriver_64420u$_0).start(), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsApplicationBase.prototype.start_6zqdxa$ = function (appConfig, onReady) {
    launch(JsApplicationBase$start$lambda(appConfig, this, onReady));
  };
  function JsApplicationBase$initializeConfig$lambda(closure$prevOnError, closure$finalConfig) {
    return function (message, source, lineNo, colNo, error) {
      closure$prevOnError != null ? closure$prevOnError(message, source, lineNo, colNo, error) : null;
      var msg = 'Error: ' + message.toString() + ' ' + lineNo + ' ' + source + ' ' + colNo + ' ' + toString(error);
      logging.Log.error_s8jyv4$(msg);
      if (closure$finalConfig.debug)
        window.alert(msg);
      return Unit;
    };
  }
  JsApplicationBase.prototype.initializeConfig_3zlglu$ = function (appConfig_0, continuation_0, suspended) {
    var instance = new Coroutine$initializeConfig_3zlglu$(this, appConfig_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$initializeConfig_3zlglu$($this, appConfig_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$debug = void 0;
    this.local$debugCoroutines = void 0;
    this.local$appConfig = appConfig_0;
  }
  Coroutine$initializeConfig_3zlglu$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$initializeConfig_3zlglu$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initializeConfig_3zlglu$.prototype.constructor = Coroutine$initializeConfig_3zlglu$;
  Coroutine$initializeConfig_3zlglu$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var path = this.local$appConfig.rootPath + appendParam('assets/build.txt', 'version', core.UidUtil.createUid());
            var buildVersionLoader = new JsTextLoader(path);
            var tmp$_0 = this.local$appConfig.debug;
            if (!tmp$_0) {
              var $receiver = window.location.search;
              tmp$_0 = Regex_init('(?:&|\\?)debug=(true|1)').containsMatchIn_6bul2c$($receiver);
            }

            this.local$debug = tmp$_0;
            var tmp$_1 = this.local$appConfig.debugCoroutines;
            if (!tmp$_1) {
              var $receiver_0 = window.location.search;
              tmp$_1 = Regex_init('(?:&|\\?)debugCoroutines=(true|1)').containsMatchIn_6bul2c$($receiver_0);
            }

            this.local$debugCoroutines = tmp$_1;
            this.state_0 = 2;
            this.result_0 = awaitOrNull(buildVersionLoader, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var build = this.result_0;
            if (build != null) {
              tmp$ = this.local$appConfig.copy_t8nx6$(this.local$appConfig.version.copy_tjonv8$(void 0, void 0, void 0, toInt(build)), void 0, this.local$debug, this.local$debugCoroutines);
            }
             else {
              logging.Log.warn_s8jyv4$('assets/build.txt failed to load');
              tmp$ = this.local$appConfig.copy_t8nx6$(void 0, void 0, this.local$debug, this.local$debugCoroutines);
            }

            var finalConfig = tmp$;
            var prevOnError = window.onerror;
            window.onerror = JsApplicationBase$initializeConfig$lambda(prevOnError, finalConfig);
            acornui.assertionsEnabled = finalConfig.debug;
            logging.Log.info_s8jyv4$('Config ' + finalConfig);
            this.$this.set_7ey6m6$(AppConfig.Companion, finalConfig);
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  var JsApplicationBase$userInfoTask_metadata = new PropertyMetadata('userInfoTask');
  Object.defineProperty(JsApplicationBase.prototype, 'userInfoTask', {get: function () {
    return this.userInfoTask_d8lzep$_0.getValue_lrcp0p$(this, JsApplicationBase$userInfoTask_metadata);
  }});
  function JsApplicationBase$contentLoad$lambda$lambda(closure$cont) {
    return function (it) {
      closure$cont.resumeWith_tl1gpc$(new Result(Unit));
      return Unit;
    };
  }
  function JsApplicationBase$contentLoad$lambda(cont) {
    if (equals(document.readyState, 'loading')) {
      document.addEventListener('DOMContentLoaded', JsApplicationBase$contentLoad$lambda$lambda(cont));
    }
     else {
      cont.resumeWith_tl1gpc$(new Result(Unit));
    }
    return Unit;
  }
  function suspendCoroutine$lambda_0(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
    };
  }
  JsApplicationBase.prototype.contentLoad_fx543c$_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$contentLoad_fx543c$_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$contentLoad_fx543c$_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$contentLoad_fx543c$_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$contentLoad_fx543c$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$contentLoad_fx543c$_0.prototype.constructor = Coroutine$contentLoad_fx543c$_0;
  Coroutine$contentLoad_fx543c$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCoroutine$lambda_0(JsApplicationBase$contentLoad$lambda)(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsApplicationBase.prototype.initializeFrameDriver_r456d0$ = function (injector, continuation) {
    return new JsApplicationRunnerImpl(injector);
  };
  var JsApplicationBase$loggingTask_metadata = new PropertyMetadata('loggingTask');
  Object.defineProperty(JsApplicationBase.prototype, 'loggingTask', {get: function () {
    return this.loggingTask_cikgkt$_0.getValue_lrcp0p$(this, JsApplicationBase$loggingTask_metadata);
  }});
  var JsApplicationBase$bufferTask_metadata = new PropertyMetadata('bufferTask');
  Object.defineProperty(JsApplicationBase.prototype, 'bufferTask', {get: function () {
    return this.bufferTask_srz9fc$_0.getValue_lrcp0p$(this, JsApplicationBase$bufferTask_metadata);
  }});
  var JsApplicationBase$mouseInputTask_metadata = new PropertyMetadata('mouseInputTask');
  Object.defineProperty(JsApplicationBase.prototype, 'mouseInputTask', {get: function () {
    return this.mouseInputTask_v6aomr$_0.getValue_lrcp0p$(this, JsApplicationBase$mouseInputTask_metadata);
  }});
  var JsApplicationBase$keyInputTask_metadata = new PropertyMetadata('keyInputTask');
  Object.defineProperty(JsApplicationBase.prototype, 'keyInputTask', {get: function () {
    return this.keyInputTask_2zl61f$_0.getValue_lrcp0p$(this, JsApplicationBase$keyInputTask_metadata);
  }});
  var JsApplicationBase$jsonTask_metadata = new PropertyMetadata('jsonTask');
  Object.defineProperty(JsApplicationBase.prototype, 'jsonTask', {get: function () {
    return this.jsonTask_obehe8$_0.getValue_lrcp0p$(this, JsApplicationBase$jsonTask_metadata);
  }});
  var JsApplicationBase$cameraTask_metadata = new PropertyMetadata('cameraTask');
  Object.defineProperty(JsApplicationBase.prototype, 'cameraTask', {get: function () {
    return this.cameraTask_8r36b7$_0.getValue_lrcp0p$(this, JsApplicationBase$cameraTask_metadata);
  }});
  var JsApplicationBase$filesTask_metadata = new PropertyMetadata('filesTask');
  Object.defineProperty(JsApplicationBase.prototype, 'filesTask', {get: function () {
    return this.filesTask_99q3az$_0.getValue_lrcp0p$(this, JsApplicationBase$filesTask_metadata);
  }});
  var JsApplicationBase$requestTask_metadata = new PropertyMetadata('requestTask');
  Object.defineProperty(JsApplicationBase.prototype, 'requestTask', {get: function () {
    return this.requestTask_ntzizn$_0.getValue_lrcp0p$(this, JsApplicationBase$requestTask_metadata);
  }});
  var JsApplicationBase$assetManagerTask_metadata = new PropertyMetadata('assetManagerTask');
  Object.defineProperty(JsApplicationBase.prototype, 'assetManagerTask', {get: function () {
    return this.assetManagerTask_aj6sjp$_0.getValue_lrcp0p$(this, JsApplicationBase$assetManagerTask_metadata);
  }});
  function JsApplicationBase$addAssetLoaders$lambda(path, estimatedBytesTotal) {
    return new JsTextLoader(path, estimatedBytesTotal);
  }
  function JsApplicationBase$addAssetLoaders$lambda_0(path, estimatedBytesTotal) {
    return new JsBinaryLoader(path, estimatedBytesTotal);
  }
  function JsApplicationBase$addAssetLoaders$lambda_1(closure$audioManager) {
    return function (path, f) {
      return new JsWebAudioSoundLoader(path, closure$audioManager);
    };
  }
  function JsApplicationBase$addAssetLoaders$lambda_2(closure$audioManager) {
    return function (path, f) {
      return new JsAudioElementSoundLoader(path, closure$audioManager);
    };
  }
  function JsApplicationBase$addAssetLoaders$lambda_3(closure$audioManager) {
    return function (path, f) {
      return new JsAudioElementMusicLoader(path, closure$audioManager);
    };
  }
  JsApplicationBase.prototype.addAssetLoaders_qs3r5d$ = function (loaders) {
    var tmp$, tmp$_0;
    var key = AssetType.Companion.TEXT;
    loaders.put_xwzc9p$(key, JsApplicationBase$addAssetLoaders$lambda);
    var key_0 = AssetType.Companion.BINARY;
    loaders.put_xwzc9p$(key_0, JsApplicationBase$addAssetLoaders$lambda_0);
    var audioManager = new AudioManagerImpl();
    this.set_7ey6m6$(AudioManager.Companion, audioManager);
    tmp$_0 = AssetType.Companion.SOUND;
    if (audioContextSupported) {
      tmp$ = JsApplicationBase$addAssetLoaders$lambda_1(audioManager);
    }
     else {
      tmp$ = JsApplicationBase$addAssetLoaders$lambda_2(audioManager);
    }
    var value = tmp$;
    loaders.put_xwzc9p$(tmp$_0, value);
    var key_1 = AssetType.Companion.MUSIC;
    loaders.put_xwzc9p$(key_1, JsApplicationBase$addAssetLoaders$lambda_3(audioManager));
  };
  var JsApplicationBase$timeDriverTask_metadata = new PropertyMetadata('timeDriverTask');
  Object.defineProperty(JsApplicationBase.prototype, 'timeDriverTask', {get: function () {
    return this.timeDriverTask_8nynst$_0.getValue_lrcp0p$(this, JsApplicationBase$timeDriverTask_metadata);
  }});
  var JsApplicationBase$interactivityTask_metadata = new PropertyMetadata('interactivityTask');
  Object.defineProperty(JsApplicationBase.prototype, 'interactivityTask', {get: function () {
    return this.interactivityTask_92zzqx$_0.getValue_lrcp0p$(this, JsApplicationBase$interactivityTask_metadata);
  }});
  var JsApplicationBase$focusManagerTask_metadata = new PropertyMetadata('focusManagerTask');
  Object.defineProperty(JsApplicationBase.prototype, 'focusManagerTask', {get: function () {
    return this.focusManagerTask_xhrs9v$_0.getValue_lrcp0p$(this, JsApplicationBase$focusManagerTask_metadata);
  }});
  var JsApplicationBase$cursorManagerTask_metadata = new PropertyMetadata('cursorManagerTask');
  Object.defineProperty(JsApplicationBase.prototype, 'cursorManagerTask', {get: function () {
    return this.cursorManagerTask_hix7et$_0.getValue_lrcp0p$(this, JsApplicationBase$cursorManagerTask_metadata);
  }});
  var JsApplicationBase$persistenceTask_metadata = new PropertyMetadata('persistenceTask');
  Object.defineProperty(JsApplicationBase.prototype, 'persistenceTask', {get: function () {
    return this.persistenceTask_hmgujx$_0.getValue_lrcp0p$(this, JsApplicationBase$persistenceTask_metadata);
  }});
  var JsApplicationBase$selectionManagerTask_metadata = new PropertyMetadata('selectionManagerTask');
  Object.defineProperty(JsApplicationBase.prototype, 'selectionManagerTask', {get: function () {
    return this.selectionManagerTask_n38c15$_0.getValue_lrcp0p$(this, JsApplicationBase$selectionManagerTask_metadata);
  }});
  var JsApplicationBase$i18nTask_metadata = new PropertyMetadata('i18nTask');
  Object.defineProperty(JsApplicationBase.prototype, 'i18nTask', {get: function () {
    return this.i18nTask_r8cd0m$_0.getValue_lrcp0p$(this, JsApplicationBase$i18nTask_metadata);
  }});
  var JsApplicationBase$textFormattersTask_metadata = new PropertyMetadata('textFormattersTask');
  Object.defineProperty(JsApplicationBase.prototype, 'textFormattersTask', {get: function () {
    return this.textFormattersTask_sy4pry$_0.getValue_lrcp0p$(this, JsApplicationBase$textFormattersTask_metadata);
  }});
  var JsApplicationBase$fileIoManagerTask_metadata = new PropertyMetadata('fileIoManagerTask');
  Object.defineProperty(JsApplicationBase.prototype, 'fileIoManagerTask', {get: function () {
    return this.fileIoManagerTask_hk78m1$_0.getValue_lrcp0p$(this, JsApplicationBase$fileIoManagerTask_metadata);
  }});
  JsApplicationBase.prototype.createPopUpManager_k58t2y$ = function (root, continuation) {
    return new PopUpManagerImpl(root);
  };
  JsApplicationBase.prototype.initializeSpecialInteractivity_717veb$ = function (owner, continuation) {
    own(owner, new JsClipboardDispatcher(inject(owner, JsApplicationBase$Companion_getInstance().CANVAS_0), owner.injector));
    own(owner, new UndoDispatcher(owner.injector));
    own(owner, new ContextMenuManager(owner));
  };
  JsApplicationBase.prototype.memberRefTest_1sur1o$_0 = function () {
  };
  function JsApplicationBase$dispose$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$dispose$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$dispose$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
  }
  Coroutine$JsApplicationBase$dispose$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$dispose$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$dispose$lambda.prototype.constructor = Coroutine$JsApplicationBase$dispose$lambda;
  Coroutine$JsApplicationBase$dispose$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.awaitAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return (tmp$ = this.local$this$JsApplicationBase.frameDriver_64420u$_0) != null ? (tmp$.stop(), Unit) : null;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsApplicationBase.prototype.dispose = function () {
    ApplicationBase.prototype.dispose.call(this);
    launch(JsApplicationBase$dispose$lambda(this));
  };
  function JsApplicationBase$Companion() {
    JsApplicationBase$Companion_instance = this;
    this.CANVAS_0 = dKey_0();
  }
  JsApplicationBase$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var JsApplicationBase$Companion_instance = null;
  function JsApplicationBase$Companion_getInstance() {
    if (JsApplicationBase$Companion_instance === null) {
      new JsApplicationBase$Companion();
    }
    return JsApplicationBase$Companion_instance;
  }
  function JsApplicationBase_init$lambda() {
    return stringMapOf([]);
  }
  function JsApplicationBase_init$lambda_0(this$JsApplicationBase) {
    return function (it) {
      this$JsApplicationBase.dispose();
      return undefined;
    };
  }
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function JsApplicationBase$userInfoTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$userInfoTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$userInfoTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
  }
  Coroutine$JsApplicationBase$userInfoTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$userInfoTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$userInfoTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$userInfoTask$lambda;
  Coroutine$JsApplicationBase$userInfoTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
            var isTouchDevice = (tmp$_0 = typeof (tmp$ = 'ontouchstart' in window || !!navigator.maxTouchPoints) === 'boolean' ? tmp$ : null) != null ? tmp$_0 : false;
            var check = false;
            (function (a) {
              if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true;
            }(navigator.userAgent || navigator.vendor || window.opera));
            var isMobile = (tmp$_2 = typeof (tmp$_1 = check) === 'boolean' ? tmp$_1 : null) != null ? tmp$_2 : false;
            var languages = (tmp$_3 = window.navigator.languages) != null ? tmp$_3 : [window.navigator.language];
            var tmp$_4 = void 0;
            var tmp$_5 = window.navigator.userAgent;
            var tmp$_6 = window.navigator.platform;
            var destination = ArrayList_init_0(languages.length);
            var tmp$_7;
            for (tmp$_7 = 0; tmp$_7 !== languages.length; ++tmp$_7) {
              var item = languages[tmp$_7];
              destination.add_11rb$(new Locale(item));
            }

            var uI = new UserInfo(isTouchDevice, true, tmp$_4, isMobile, tmp$_5, tmp$_6, destination);
            core.userInfo = uI;
            return this.local$this$JsApplicationBase.set_7ey6m6$(UserInfo.Companion, uI), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$loggingTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$loggingTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$loggingTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
  }
  Coroutine$JsApplicationBase$loggingTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$loggingTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$loggingTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$loggingTask$lambda;
  Coroutine$JsApplicationBase$loggingTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(AppConfig.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.result_0.debug) {
              return logging.Log.level = Logger.Companion.DEBUG, Unit;
            }
             else {
              return logging.Log.level = Logger.Companion.WARN, Unit;
            }

          case 3:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$bufferTask$lambda(continuation_0, suspended) {
    var instance = new Coroutine$JsApplicationBase$bufferTask$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$JsApplicationBase$bufferTask$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$JsApplicationBase$bufferTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$bufferTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$bufferTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$bufferTask$lambda;
  Coroutine$JsApplicationBase$bufferTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return BufferFactory.Companion.instance = new JsBufferFactory(), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$mouseInputTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$mouseInputTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$mouseInputTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$JsApplicationBase$mouseInputTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$mouseInputTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$mouseInputTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$mouseInputTask$lambda;
  Coroutine$JsApplicationBase$mouseInputTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = MouseInput.Companion;
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(JsApplicationBase$Companion_getInstance().CANVAS_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = new JsMouseInput(this.result_0);
            return this.local$this$JsApplicationBase.set_7ey6m6$(this.local$tmp$, tmp$), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$keyInputTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$keyInputTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$keyInputTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$JsApplicationBase$keyInputTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$keyInputTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$keyInputTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$keyInputTask$lambda;
  Coroutine$JsApplicationBase$keyInputTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = KeyInput.Companion;
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(JsApplicationBase$Companion_getInstance().CANVAS_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = new JsKeyInput(this.result_0);
            return this.local$this$JsApplicationBase.set_7ey6m6$(this.local$tmp$, tmp$), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$jsonTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$jsonTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$jsonTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
  }
  Coroutine$JsApplicationBase$jsonTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$jsonTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$jsonTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$jsonTask$lambda;
  Coroutine$JsApplicationBase$jsonTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$JsApplicationBase.set_7ey6m6$(io.JSON_KEY, serialization.JsonSerializer), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$cameraTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$cameraTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$cameraTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
    this.local$camera = void 0;
  }
  Coroutine$JsApplicationBase$cameraTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$cameraTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$cameraTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$cameraTask$lambda;
  Coroutine$JsApplicationBase$cameraTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$camera = new OrthographicCamera();
            this.local$this$JsApplicationBase.set_7ey6m6$(Camera.Companion, this.local$camera);
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(Window.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return autoCenterCamera(this.result_0, this.local$camera);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$filesTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$filesTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$filesTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
    this.local$json = void 0;
  }
  Coroutine$JsApplicationBase$filesTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$filesTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$filesTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$filesTask$lambda;
  Coroutine$JsApplicationBase$filesTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(io.JSON_KEY, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$json = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(AppConfig.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var config = this.result_0;
            var path = config.rootPath + appendParam(config.assetsManifestPath, 'version', config.version.toVersionString());
            this.state_0 = 4;
            this.result_0 = (new JsTextLoader(path)).await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var it = this.result_0;
            var manifest = this.local$json.read_awjrhg$(it, file.FilesManifestSerializer);
            return this.local$this$JsApplicationBase.set_7ey6m6$(Files.Companion, new FilesImpl(manifest)), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$requestTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$requestTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$requestTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
  }
  Coroutine$JsApplicationBase$requestTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$requestTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$requestTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$requestTask$lambda;
  Coroutine$JsApplicationBase$requestTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$JsApplicationBase.set_7ey6m6$(RestServiceFactory.Companion, JsRestServiceFactory_getInstance()), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$assetManagerTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$assetManagerTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$assetManagerTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$loaders = void 0;
  }
  Coroutine$JsApplicationBase$assetManagerTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$assetManagerTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$assetManagerTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$assetManagerTask$lambda;
  Coroutine$JsApplicationBase$assetManagerTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(AppConfig.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var config = this.result_0;
            this.local$loaders = HashMap_init();
            this.local$this$JsApplicationBase.addAssetLoaders_qs3r5d$(this.local$loaders);
            this.local$tmp$ = AssetManager.Companion;
            this.local$tmp$_0 = config.rootPath;
            this.state_0 = 3;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(Files.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            tmp$ = new AssetManagerImpl(this.local$tmp$_0, this.result_0, this.local$loaders, true);
            return this.local$this$JsApplicationBase.set_7ey6m6$(this.local$tmp$, tmp$), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$timeDriverTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$timeDriverTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$timeDriverTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$JsApplicationBase$timeDriverTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$timeDriverTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$timeDriverTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$timeDriverTask$lambda;
  Coroutine$JsApplicationBase$timeDriverTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = TimeDriver.Companion;
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.config(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = new TimeDriverImpl(this.result_0.timeDriverConfig);
            return this.local$this$JsApplicationBase.set_7ey6m6$(this.local$tmp$, tmp$), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$interactivityTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$interactivityTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$interactivityTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
  }
  Coroutine$JsApplicationBase$interactivityTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$interactivityTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$interactivityTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$interactivityTask$lambda;
  Coroutine$JsApplicationBase$interactivityTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = InteractivityManager.Companion;
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(MouseInput.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(KeyInput.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(FocusManager.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            tmp$ = new InteractivityManagerImpl(this.local$tmp$_0, this.local$tmp$_1, this.result_0);
            return this.local$this$JsApplicationBase.set_7ey6m6$(this.local$tmp$, tmp$), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$focusManagerTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$focusManagerTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$focusManagerTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
  }
  Coroutine$JsApplicationBase$focusManagerTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$focusManagerTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$focusManagerTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$focusManagerTask$lambda;
  Coroutine$JsApplicationBase$focusManagerTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$JsApplicationBase.set_7ey6m6$(FocusManager.Companion, new FocusManagerImpl()), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$cursorManagerTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$cursorManagerTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$cursorManagerTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$JsApplicationBase$cursorManagerTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$cursorManagerTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$cursorManagerTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$cursorManagerTask$lambda;
  Coroutine$JsApplicationBase$cursorManagerTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = CursorManager.Companion;
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(JsApplicationBase$Companion_getInstance().CANVAS_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = new JsCursorManager(this.result_0);
            return this.local$this$JsApplicationBase.set_7ey6m6$(this.local$tmp$, tmp$), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$persistenceTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$persistenceTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$persistenceTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$JsApplicationBase$persistenceTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$persistenceTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$persistenceTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$persistenceTask$lambda;
  Coroutine$JsApplicationBase$persistenceTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = Persistence.Companion;
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(AppConfig.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = new JsPersistence(this.result_0.version);
            return this.local$this$JsApplicationBase.set_7ey6m6$(this.local$tmp$, tmp$), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$selectionManagerTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$selectionManagerTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$selectionManagerTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
  }
  Coroutine$JsApplicationBase$selectionManagerTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$selectionManagerTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$selectionManagerTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$selectionManagerTask$lambda;
  Coroutine$JsApplicationBase$selectionManagerTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$JsApplicationBase.set_7ey6m6$(SelectionManager.Companion, new SelectionManagerImpl()), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$i18nTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$i18nTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$i18nTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
  }
  Coroutine$JsApplicationBase$i18nTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$i18nTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$i18nTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$i18nTask$lambda;
  Coroutine$JsApplicationBase$i18nTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(UserInfo.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$this$JsApplicationBase.set_7ey6m6$(I18n.Companion, new I18nImpl()), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$textFormattersTask$lambda$lambda() {
    return new NumberFormatterImpl();
  }
  function JsApplicationBase$textFormattersTask$lambda$lambda_0() {
    return new DateTimeFormatterImpl();
  }
  function JsApplicationBase$textFormattersTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$textFormattersTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$textFormattersTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
  }
  Coroutine$JsApplicationBase$textFormattersTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$textFormattersTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$textFormattersTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$textFormattersTask$lambda;
  Coroutine$JsApplicationBase$textFormattersTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$JsApplicationBase.get_li8edk$(UserInfo.Companion, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            text.numberFormatterProvider = JsApplicationBase$textFormattersTask$lambda$lambda;
            return text.dateTimeFormatterProvider = JsApplicationBase$textFormattersTask$lambda$lambda_0, Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsApplicationBase$fileIoManagerTask$lambda(this$JsApplicationBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JsApplicationBase$fileIoManagerTask$lambda(this$JsApplicationBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsApplicationBase$fileIoManagerTask$lambda(this$JsApplicationBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JsApplicationBase = this$JsApplicationBase_0;
  }
  Coroutine$JsApplicationBase$fileIoManagerTask$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JsApplicationBase$fileIoManagerTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsApplicationBase$fileIoManagerTask$lambda.prototype.constructor = Coroutine$JsApplicationBase$fileIoManagerTask$lambda;
  Coroutine$JsApplicationBase$fileIoManagerTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$JsApplicationBase.set_7ey6m6$(FileIoManager.Companion, new JsFileIoManager()), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsApplicationBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsApplicationBase', interfaces: [ApplicationBase]};
  function JsApplicationRunner() {
  }
  JsApplicationRunner.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'JsApplicationRunner', interfaces: []};
  function JsApplicationRunnerImpl(injector) {
    this.injector_pb3lig$_0 = injector;
    this.stage_0 = inject(this, Stage.Companion);
    this.timeDriver_0 = inject(this, TimeDriver.Companion);
    this.appWindow_0 = inject(this, Window.Companion);
    this.isRunning_0 = false;
    this.tickFrameId_0 = -1;
    this.tick_0 = JsApplicationRunnerImpl$tick$lambda(this);
    this.viewport_0 = new MinMax();
  }
  Object.defineProperty(JsApplicationRunnerImpl.prototype, 'injector', {get: function () {
    return this.injector_pb3lig$_0;
  }});
  JsApplicationRunnerImpl.prototype.start = function () {
    if (this.isRunning_0)
      return;
    logging.Log.info_s8jyv4$('Application#startIndex');
    this.isRunning_0 = true;
    this.stage_0.activate();
    this.timeDriver_0.activate();
    this.tickFrameId_0 = window.requestAnimationFrame(this.tick_0);
  };
  JsApplicationRunnerImpl.prototype._tick_0 = function () {
    this.timeDriver_0.update();
    if (this.appWindow_0.shouldRender_6taknv$(true)) {
      this.stage_0.update();
      this.appWindow_0.renderBegin();
      if (this.stage_0.visible)
        this.stage_0.render_5yfmeh$(this.viewport_0.set_7b5o5w$(0.0, 0.0, this.appWindow_0.width, this.appWindow_0.height));
      this.appWindow_0.renderEnd();
    }
    this.tickFrameId_0 = window.requestAnimationFrame(this.tick_0);
  };
  JsApplicationRunnerImpl.prototype.stop = function () {
    if (!this.isRunning_0)
      return;
    logging.Log.info_s8jyv4$('Application#stop');
    this.isRunning_0 = false;
    window.cancelAnimationFrame(this.tickFrameId_0);
  };
  function JsApplicationRunnerImpl$tick$lambda(this$JsApplicationRunnerImpl) {
    return function (newTime) {
      this$JsApplicationRunnerImpl._tick_0();
      return Unit;
    };
  }
  JsApplicationRunnerImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsApplicationRunnerImpl', interfaces: [Scoped, JsApplicationRunner]};
  function JsBinaryLoader(path, estimatedBytesTotal, request) {
    if (estimatedBytesTotal === void 0)
      estimatedBytesTotal = 0;
    if (request === void 0)
      request = new JsBinaryRequest(new UrlRequestData(path));
    this.path_glkg6g$_0 = path;
    this.estimatedBytesTotal_0 = estimatedBytesTotal;
    this.request_0 = request;
    this.type_giy15p$_0 = AssetType.Companion.BINARY;
  }
  Object.defineProperty(JsBinaryLoader.prototype, 'path', {get: function () {
    return this.path_glkg6g$_0;
  }});
  Object.defineProperty(JsBinaryLoader.prototype, 'type', {get: function () {
    return this.type_giy15p$_0;
  }});
  Object.defineProperty(JsBinaryLoader.prototype, 'secondsLoaded', {get: function () {
    return this.request_0.secondsLoaded;
  }});
  Object.defineProperty(JsBinaryLoader.prototype, 'secondsTotal', {get: function () {
    return this.request_0.secondsTotal <= 0.0 ? this.estimatedBytesTotal_0 * core.Bandwidth.downBpsInv : this.request_0.secondsTotal;
  }});
  Object.defineProperty(JsBinaryLoader.prototype, 'status', {get: function () {
    return this.request_0.status;
  }});
  Object.defineProperty(JsBinaryLoader.prototype, 'result', {get: function () {
    return this.request_0.result;
  }});
  Object.defineProperty(JsBinaryLoader.prototype, 'error', {get: function () {
    return this.request_0.error;
  }});
  JsBinaryLoader.prototype.await = function (continuation) {
    return this.request_0.await(continuation);
  };
  JsBinaryLoader.prototype.cancel = function () {
    this.request_0.cancel();
  };
  JsBinaryLoader.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsBinaryLoader', interfaces: [AssetLoader]};
  function JsTextLoader(path, estimatedBytesTotal, request) {
    if (estimatedBytesTotal === void 0)
      estimatedBytesTotal = 0;
    if (request === void 0)
      request = new JsTextRequest(new UrlRequestData(path));
    this.path_cua550$_0 = path;
    this.estimatedBytesTotal_0 = estimatedBytesTotal;
    this.request_0 = request;
    this.type_cwwk5r$_0 = AssetType.Companion.TEXT;
  }
  Object.defineProperty(JsTextLoader.prototype, 'path', {get: function () {
    return this.path_cua550$_0;
  }});
  Object.defineProperty(JsTextLoader.prototype, 'type', {get: function () {
    return this.type_cwwk5r$_0;
  }});
  Object.defineProperty(JsTextLoader.prototype, 'secondsLoaded', {get: function () {
    return this.request_0.secondsLoaded;
  }});
  Object.defineProperty(JsTextLoader.prototype, 'secondsTotal', {get: function () {
    return this.request_0.secondsTotal <= 0.0 ? this.estimatedBytesTotal_0 * core.Bandwidth.downBpsInv : this.request_0.secondsTotal;
  }});
  Object.defineProperty(JsTextLoader.prototype, 'status', {get: function () {
    return this.request_0.status;
  }});
  Object.defineProperty(JsTextLoader.prototype, 'result', {get: function () {
    return this.request_0.result;
  }});
  Object.defineProperty(JsTextLoader.prototype, 'error', {get: function () {
    return this.request_0.error;
  }});
  JsTextLoader.prototype.await = function (continuation) {
    return this.request_0.await(continuation);
  };
  JsTextLoader.prototype.cancel = function () {
    this.request_0.cancel();
  };
  JsTextLoader.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsTextLoader', interfaces: [AssetLoader]};
  function JsPersistence(currentVersion) {
    this.currentVersion_0 = currentVersion;
    this._version_0 = null;
    var tmp$;
    this.storageAllowed_0 = typeof (tmp$ = typeof Storage !== 'undefined') === 'boolean' ? tmp$ : throwCCE();
    this.currentVersionWritten_0 = false;
    if (!this.storageAllowed_0)
      println('Storage not allowed.');
    var versionStr = this.getItem_61zpoe$('__version');
    this._version_0 = versionStr == null ? null : Version.Companion.fromStr_61zpoe$(versionStr);
  }
  Object.defineProperty(JsPersistence.prototype, 'version', {get: function () {
    return this._version_0;
  }});
  Object.defineProperty(JsPersistence.prototype, 'allowed', {get: function () {
    return this.storageAllowed_0;
  }});
  Object.defineProperty(JsPersistence.prototype, 'length', {get: function () {
    if (!this.storageAllowed_0)
      return 0;
    return localStorage.length;
  }});
  JsPersistence.prototype.key_za3lpa$ = function (index) {
    if (!this.storageAllowed_0)
      return null;
    return localStorage.key(index);
  };
  JsPersistence.prototype.getItem_61zpoe$ = function (key) {
    if (!this.storageAllowed_0)
      return null;
    return localStorage.getItem(key);
  };
  JsPersistence.prototype.setItem_puj7f4$ = function (key, value) {
    if (!this.storageAllowed_0)
      return;
    localStorage.setItem(key, value);
    if (!this.currentVersionWritten_0) {
      this.currentVersionWritten_0 = true;
      localStorage.setItem('__version', this.currentVersion_0.toVersionString());
      this._version_0 = this.currentVersion_0;
    }
  };
  JsPersistence.prototype.removeItem_61zpoe$ = function (key) {
    if (!this.storageAllowed_0)
      return;
    localStorage.removeItem(key);
  };
  JsPersistence.prototype.clear = function () {
    if (!this.storageAllowed_0)
      return;
    localStorage.clear();
  };
  JsPersistence.prototype.flush = function () {
  };
  JsPersistence.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsPersistence', interfaces: [Persistence]};
  function DomSelectionManager(root) {
    this.root_0 = root;
    this._selectionChanged_0 = new Signal2();
    this.selectionChanged_t3mari$_0 = this._selectionChanged_0.asRo();
    this.selection_puorqa$_0 = emptyList();
    this.selectionChangedHandler_0 = DomSelectionManager$selectionChangedHandler$lambda;
    document.addEventListener('selectionchange', this.selectionChangedHandler_0);
  }
  function DateTimeFormatterImpl() {
    this.type_uhpul5$_0 = this.watched_0(DateTimeFormatType.DATE_TIME);
    this.timeStyle_vp1svl$_0 = this.watched_0(DateTimeFormatStyle.DEFAULT);
    this.dateStyle_z0ito0$_0 = this.watched_0(DateTimeFormatStyle.DEFAULT);
    this.timeZone_wzvno8$_0 = this.watched_0(null);
    this.locales_6b1k3q$_0 = this.watched_0(null);
    this.currentUserLocales_0 = emptyList();
    this._formatter_0 = null;
  }
  var DateTimeFormatterImpl$type_metadata = new PropertyMetadata('type');
  Object.defineProperty(DateTimeFormatterImpl.prototype, 'type', {get: function () {
    return this.type_uhpul5$_0.getValue_lrcp0p$(this, DateTimeFormatterImpl$type_metadata);
  }, set: function (type) {
    this.type_uhpul5$_0.setValue_9rddgb$(this, DateTimeFormatterImpl$type_metadata, type);
  }});
  var DateTimeFormatterImpl$timeStyle_metadata = new PropertyMetadata('timeStyle');
  Object.defineProperty(DateTimeFormatterImpl.prototype, 'timeStyle', {get: function () {
    return this.timeStyle_vp1svl$_0.getValue_lrcp0p$(this, DateTimeFormatterImpl$timeStyle_metadata);
  }, set: function (timeStyle) {
    this.timeStyle_vp1svl$_0.setValue_9rddgb$(this, DateTimeFormatterImpl$timeStyle_metadata, timeStyle);
  }});
  var DateTimeFormatterImpl$dateStyle_metadata = new PropertyMetadata('dateStyle');
  Object.defineProperty(DateTimeFormatterImpl.prototype, 'dateStyle', {get: function () {
    return this.dateStyle_z0ito0$_0.getValue_lrcp0p$(this, DateTimeFormatterImpl$dateStyle_metadata);
  }, set: function (dateStyle) {
    this.dateStyle_z0ito0$_0.setValue_9rddgb$(this, DateTimeFormatterImpl$dateStyle_metadata, dateStyle);
  }});
  var DateTimeFormatterImpl$timeZone_metadata = new PropertyMetadata('timeZone');
  Object.defineProperty(DateTimeFormatterImpl.prototype, 'timeZone', {get: function () {
    return this.timeZone_wzvno8$_0.getValue_lrcp0p$(this, DateTimeFormatterImpl$timeZone_metadata);
  }, set: function (timeZone) {
    this.timeZone_wzvno8$_0.setValue_9rddgb$(this, DateTimeFormatterImpl$timeZone_metadata, timeZone);
  }});
  var DateTimeFormatterImpl$locales_metadata = new PropertyMetadata('locales');
  Object.defineProperty(DateTimeFormatterImpl.prototype, 'locales', {get: function () {
    return this.locales_6b1k3q$_0.getValue_lrcp0p$(this, DateTimeFormatterImpl$locales_metadata);
  }, set: function (locales) {
    this.locales_6b1k3q$_0.setValue_9rddgb$(this, DateTimeFormatterImpl$locales_metadata, locales);
  }});
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  Object.defineProperty(DateTimeFormatterImpl.prototype, 'formatter_0', {get: function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.locales == null && !equals(this.currentUserLocales_0, core.userInfo.currentLocale.value)) {
      this._formatter_0 = null;
      this.currentUserLocales_0 = copy(core.userInfo.currentLocale.value);
    }
    if (this._formatter_0 == null) {
      var $receiver = (tmp$ = this.locales) != null ? tmp$ : this.currentUserLocales_0;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_3;
      tmp$_3 = $receiver.iterator();
      while (tmp$_3.hasNext()) {
        var item = tmp$_3.next();
        destination.add_11rb$(item.value);
      }
      var locales = destination;
      var JsDateTimeFormat = Intl.DateTimeFormat;
      var options = {};
      if (this.timeZone != null) {
        options.timeZone = this.timeZone;
      }
      if (this.type === DateTimeFormatType.TIME || this.type === DateTimeFormatType.DATE_TIME) {
        if (this.timeStyle === DateTimeFormatStyle.FULL || this.timeStyle === DateTimeFormatStyle.LONG)
          options.timeZoneName = 'short';
        options.hour = 'numeric';
        options.minute = 'numeric';
        if (this.timeStyle !== DateTimeFormatStyle.SHORT)
          options.second = 'numeric';
      }
      if (this.type === DateTimeFormatType.DATE || this.type === DateTimeFormatType.DATE_TIME) {
        if (this.dateStyle === DateTimeFormatStyle.FULL)
          options.weekday = 'long';
        options.day = 'numeric';
        switch (this.dateStyle.name) {
          case 'FULL':
            tmp$_0 = 'long';
            break;
          case 'LONG':
            tmp$_0 = 'short';
            break;
          default:tmp$_0 = 'numeric';
            break;
        }
        options.month = tmp$_0;
        options.year = this.dateStyle === DateTimeFormatStyle.SHORT ? '2-digit' : 'numeric';
      }
       else if (this.type === DateTimeFormatType.MONTH) {
        switch (this.dateStyle.name) {
          case 'FULL':
            tmp$_1 = 'long';
            break;
          case 'LONG':
            tmp$_1 = 'short';
            break;
          default:tmp$_1 = 'numeric';
            break;
        }
        options.month = tmp$_1;
      }
       else if (this.type === DateTimeFormatType.WEEKDAY) {
        switch (this.dateStyle.name) {
          case 'FULL':
          case 'LONG':
            tmp$_2 = 'long';
            break;
          case 'MEDIUM':
          case 'SHORT':
            tmp$_2 = 'short';
            break;
          case 'DEFAULT':
            tmp$_2 = 'long';
            break;
          default:tmp$_2 = Kotlin.noWhenBranchMatched();
            break;
        }
        options.weekday = tmp$_2;
      }
      this._formatter_0 = JsDateTimeFormat(copyToArray(locales), options);
    }
    return ensureNotNull(this._formatter_0);
  }});
  DateTimeFormatterImpl.prototype.format_11rb$ = function (value) {
    var tmp$, tmp$_0;
    alwaysTrue(tmp$ = value, DateImpl) ? tmp$ : throwCCE();
    return typeof (tmp$_0 = ensureNotNull(this.formatter_0).format(value.date_8be2vx$)) === 'string' ? tmp$_0 : throwCCE();
  };
  function DateTimeFormatterImpl$watched$lambda(this$DateTimeFormatterImpl) {
    return function (it) {
      this$DateTimeFormatterImpl._formatter_0 = null;
      return Unit;
    };
  }
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  observable$ObjectLiteral.prototype = Object.create(ObservableProperty.prototype);
  observable$ObjectLiteral.prototype.constructor = observable$ObjectLiteral;
  function observable$ObjectLiteral(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  observable$ObjectLiteral.prototype.beforeChange_jxtfl0$ = function (property, oldValue, newValue) {
    return !equals(oldValue, newValue);
  };
  observable$ObjectLiteral.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(newValue);
  };
  observable$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  DateTimeFormatterImpl.prototype.watched_0 = function (initial) {
    return new observable$ObjectLiteral(DateTimeFormatterImpl$watched$lambda(this), initial);
  };
  DateTimeFormatterImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'DateTimeFormatterImpl', interfaces: [DateTimeFormatter]};
  function NumberFormatterImpl() {
    this.type_5qjto9$_0 = this.watched_0(NumberFormatType.NUMBER);
    this.locales_2c3tco$_0 = this.watched_0(null);
    this.minIntegerDigits_i6u5gh$_0 = this.watched_0(1);
    this.maxIntegerDigits_k3haod$_0 = this.watched_0(40);
    this.minFractionDigits_l3cba1$_0 = this.watched_0(0);
    this.maxFractionDigits_ga9uz$_0 = this.watched_0(3);
    this.useGrouping_vudqev$_0 = this.watched_0(true);
    this.currencyCode_cnxnh1$_0 = this.watched_0('USD');
    this.lastLocales_0 = emptyList();
    this.formatter_0 = null;
  }
  var NumberFormatterImpl$type_metadata = new PropertyMetadata('type');
  Object.defineProperty(NumberFormatterImpl.prototype, 'type', {get: function () {
    return this.type_5qjto9$_0.getValue_lrcp0p$(this, NumberFormatterImpl$type_metadata);
  }, set: function (type) {
    this.type_5qjto9$_0.setValue_9rddgb$(this, NumberFormatterImpl$type_metadata, type);
  }});
  var NumberFormatterImpl$locales_metadata = new PropertyMetadata('locales');
  Object.defineProperty(NumberFormatterImpl.prototype, 'locales', {get: function () {
    return this.locales_2c3tco$_0.getValue_lrcp0p$(this, NumberFormatterImpl$locales_metadata);
  }, set: function (locales) {
    this.locales_2c3tco$_0.setValue_9rddgb$(this, NumberFormatterImpl$locales_metadata, locales);
  }});
  var NumberFormatterImpl$minIntegerDigits_metadata = new PropertyMetadata('minIntegerDigits');
  Object.defineProperty(NumberFormatterImpl.prototype, 'minIntegerDigits', {get: function () {
    return this.minIntegerDigits_i6u5gh$_0.getValue_lrcp0p$(this, NumberFormatterImpl$minIntegerDigits_metadata);
  }, set: function (minIntegerDigits) {
    this.minIntegerDigits_i6u5gh$_0.setValue_9rddgb$(this, NumberFormatterImpl$minIntegerDigits_metadata, minIntegerDigits);
  }});
  var NumberFormatterImpl$maxIntegerDigits_metadata = new PropertyMetadata('maxIntegerDigits');
  Object.defineProperty(NumberFormatterImpl.prototype, 'maxIntegerDigits', {get: function () {
    return this.maxIntegerDigits_k3haod$_0.getValue_lrcp0p$(this, NumberFormatterImpl$maxIntegerDigits_metadata);
  }, set: function (maxIntegerDigits) {
    this.maxIntegerDigits_k3haod$_0.setValue_9rddgb$(this, NumberFormatterImpl$maxIntegerDigits_metadata, maxIntegerDigits);
  }});
  var NumberFormatterImpl$minFractionDigits_metadata = new PropertyMetadata('minFractionDigits');
  Object.defineProperty(NumberFormatterImpl.prototype, 'minFractionDigits', {get: function () {
    return this.minFractionDigits_l3cba1$_0.getValue_lrcp0p$(this, NumberFormatterImpl$minFractionDigits_metadata);
  }, set: function (minFractionDigits) {
    this.minFractionDigits_l3cba1$_0.setValue_9rddgb$(this, NumberFormatterImpl$minFractionDigits_metadata, minFractionDigits);
  }});
  var NumberFormatterImpl$maxFractionDigits_metadata = new PropertyMetadata('maxFractionDigits');
  Object.defineProperty(NumberFormatterImpl.prototype, 'maxFractionDigits', {get: function () {
    return this.maxFractionDigits_ga9uz$_0.getValue_lrcp0p$(this, NumberFormatterImpl$maxFractionDigits_metadata);
  }, set: function (maxFractionDigits) {
    this.maxFractionDigits_ga9uz$_0.setValue_9rddgb$(this, NumberFormatterImpl$maxFractionDigits_metadata, maxFractionDigits);
  }});
  var NumberFormatterImpl$useGrouping_metadata = new PropertyMetadata('useGrouping');
  Object.defineProperty(NumberFormatterImpl.prototype, 'useGrouping', {get: function () {
    return this.useGrouping_vudqev$_0.getValue_lrcp0p$(this, NumberFormatterImpl$useGrouping_metadata);
  }, set: function (useGrouping) {
    this.useGrouping_vudqev$_0.setValue_9rddgb$(this, NumberFormatterImpl$useGrouping_metadata, useGrouping);
  }});
  var NumberFormatterImpl$currencyCode_metadata = new PropertyMetadata('currencyCode');
  Object.defineProperty(NumberFormatterImpl.prototype, 'currencyCode', {get: function () {
    return this.currencyCode_cnxnh1$_0.getValue_lrcp0p$(this, NumberFormatterImpl$currencyCode_metadata);
  }, set: function (currencyCode) {
    this.currencyCode_cnxnh1$_0.setValue_9rddgb$(this, NumberFormatterImpl$currencyCode_metadata, currencyCode);
  }});
  NumberFormatterImpl.prototype.format_11rb$ = function (value) {
    var tmp$;
    if (value == null)
      return '';
    if (this.locales == null && !equals(this.lastLocales_0, core.userInfo.currentLocale.value)) {
      this.formatter_0 = null;
      this.lastLocales_0 = copy(core.userInfo.currentLocale.value);
    }
    if (this.formatter_0 == null) {
      var $receiver = (tmp$ = this.locales) != null ? tmp$ : this.lastLocales_0;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(item.value);
      }
      var locales = destination;
      var JsNumberFormat = Intl.NumberFormat;
      var options = {};
      options.minimumIntegerDigits = this.minIntegerDigits;
      options.maximumIntegerDigits = this.maxIntegerDigits;
      options.minimumFractionDigits = this.minFractionDigits;
      options.maximumFractionDigits = this.maxFractionDigits;
      options.useGrouping = this.useGrouping;
      if (this.type === NumberFormatType.CURRENCY) {
        options.style = 'currency';
        options.currency = this.currencyCode;
      }
       else if (this.type === NumberFormatType.PERCENT) {
        options.style = 'percent';
      }
      this.formatter_0 = JsNumberFormat(copyToArray(locales), options);
    }
    return ensureNotNull(this.formatter_0).format(value);
  };
  function NumberFormatterImpl$watched$lambda(this$NumberFormatterImpl) {
    return function (it) {
      this$NumberFormatterImpl.formatter_0 = null;
      return Unit;
    };
  }
  observable$ObjectLiteral_0.prototype = Object.create(ObservableProperty.prototype);
  observable$ObjectLiteral_0.prototype.constructor = observable$ObjectLiteral_0;
  function observable$ObjectLiteral_0(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  observable$ObjectLiteral_0.prototype.beforeChange_jxtfl0$ = function (property, oldValue, newValue) {
    return !equals(oldValue, newValue);
  };
  observable$ObjectLiteral_0.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(newValue);
  };
  observable$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  NumberFormatterImpl.prototype.watched_0 = function (initial) {
    return new observable$ObjectLiteral_0(NumberFormatterImpl$watched$lambda(this), initial);
  };
  NumberFormatterImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'NumberFormatterImpl', interfaces: [NumberFormatter]};
  function DateImpl() {
    this.date_8be2vx$ = new Date();
  }
  Object.defineProperty(DateImpl.prototype, 'time', {get: function () {
    var tmp$;
    return numberToLong(alwaysTrue(tmp$ = this.date_8be2vx$.getTime()) ? tmp$ : throwCCE());
  }, set: function (value) {
    var t = value.toNumber();
    this.date_8be2vx$.setTime(t);
  }});
  Object.defineProperty(DateImpl.prototype, 'fullYear', {get: function () {
    return this.date_8be2vx$.getFullYear();
  }, set: function (value) {
    this.date_8be2vx$.setFullYear(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'monthIndex', {get: function () {
    return this.date_8be2vx$.getMonth();
  }, set: function (value) {
    this.date_8be2vx$.setMonth(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'dayOfMonth', {get: function () {
    return this.date_8be2vx$.getDate();
  }, set: function (value) {
    this.date_8be2vx$.setDate(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'dayOfWeek', {get: function () {
    return this.date_8be2vx$.getDay();
  }});
  Object.defineProperty(DateImpl.prototype, 'hour', {get: function () {
    return this.date_8be2vx$.getHours();
  }, set: function (value) {
    this.date_8be2vx$.setHours(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'minute', {get: function () {
    return this.date_8be2vx$.getMinutes();
  }, set: function (value) {
    this.date_8be2vx$.setMinutes(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'second', {get: function () {
    return this.date_8be2vx$.getSeconds();
  }, set: function (value) {
    this.date_8be2vx$.setSeconds(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'milli', {get: function () {
    return this.date_8be2vx$.getMilliseconds();
  }, set: function (value) {
    this.date_8be2vx$.setMilliseconds(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'utcFullYear', {get: function () {
    return this.date_8be2vx$.getUTCFullYear();
  }, set: function (value) {
    this.date_8be2vx$.setUTCFullYear(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'utcMonthIndex', {get: function () {
    return this.date_8be2vx$.getUTCMonth();
  }, set: function (value) {
    this.date_8be2vx$.setUTCMonth(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'utcDayOfMonth', {get: function () {
    return this.date_8be2vx$.getUTCDate();
  }, set: function (value) {
    this.date_8be2vx$.setUTCDate(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'utcDayOfWeek', {get: function () {
    return this.date_8be2vx$.getUTCDay();
  }});
  Object.defineProperty(DateImpl.prototype, 'utcHour', {get: function () {
    return this.date_8be2vx$.getUTCHours();
  }, set: function (value) {
    this.date_8be2vx$.setUTCHours(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'utcMinute', {get: function () {
    return this.date_8be2vx$.getUTCMinutes();
  }, set: function (value) {
    this.date_8be2vx$.setUTCMinutes(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'utcSecond', {get: function () {
    return this.date_8be2vx$.getUTCSeconds();
  }, set: function (value) {
    this.date_8be2vx$.setUTCSeconds(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'utcMilli', {get: function () {
    return this.date_8be2vx$.getUTCMilliseconds();
  }, set: function (value) {
    this.date_8be2vx$.setUTCMilliseconds(value);
  }});
  Object.defineProperty(DateImpl.prototype, 'timezoneOffset', {get: function () {
    return this.date_8be2vx$.getTimezoneOffset();
  }});
  DateImpl.prototype.copy = function () {
    var newDate = new DateImpl();
    newDate.time = this.time;
    return newDate;
  };
  DateImpl.prototype.equals = function (other) {
    if (other == null)
      return false;
    if (!Kotlin.isType(other, DateRo))
      return false;
    return equals(this.time, other.time);
  };
  DateImpl.prototype.hashCode = function () {
    return hashCode(this.time);
  };
  DateImpl.prototype.toString = function () {
    return 'Date(' + this.fullYear + '/' + this.month + '/' + this.dayOfMonth + ' ' + this.hour + ':' + zeroPadding(this.minute, 2) + ':' + zeroPadding(this.second, 2) + '.' + this.milli + ')';
  };
  DateImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'DateImpl', interfaces: [Date_0]};
  function TimeProviderImpl() {
    this.startTime_0 = null;
    this.startTime_0 = this.nowMs();
  }
  TimeProviderImpl.prototype.now = function () {
    return new DateImpl();
  };
  TimeProviderImpl.prototype.nowMs = function () {
    var tmp$;
    return Kotlin.Long.fromNumber(typeof (tmp$ = Date.now()) === 'number' ? tmp$ : throwCCE());
  };
  TimeProviderImpl.prototype.nanoElapsed = function () {
    var tmp$;
    return numberToLong(alwaysTrue(tmp$ = performance.now()) ? tmp$ : throwCCE()).subtract(this.startTime_0).multiply(L1000000);
  };
  TimeProviderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'TimeProviderImpl', interfaces: [TimeProvider]};
  function JsLocation(location) {
    this.location_0 = location;
  }
  Object.defineProperty(JsLocation.prototype, 'href', {get: function () {
    return this.location_0.href;
  }});
  Object.defineProperty(JsLocation.prototype, 'origin', {get: function () {
    return this.location_0.origin;
  }});
  Object.defineProperty(JsLocation.prototype, 'protocol', {get: function () {
    return this.location_0.protocol;
  }});
  Object.defineProperty(JsLocation.prototype, 'host', {get: function () {
    return this.location_0.host;
  }});
  Object.defineProperty(JsLocation.prototype, 'hostname', {get: function () {
    return this.location_0.hostname;
  }});
  Object.defineProperty(JsLocation.prototype, 'port', {get: function () {
    return this.location_0.port;
  }});
  Object.defineProperty(JsLocation.prototype, 'pathname', {get: function () {
    return this.location_0.pathname;
  }});
  Object.defineProperty(JsLocation.prototype, 'search', {get: function () {
    return this.location_0.search;
  }});
  Object.defineProperty(JsLocation.prototype, 'hash', {get: function () {
    return this.location_0.hash;
  }});
  JsLocation.prototype.reload = function () {
    this.location_0.reload();
  };
  JsLocation.prototype.navigateToUrl_w9b03s$ = function (url, name, specs) {
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = specs != null ? specs.toSpecsString() : null) != null ? tmp$ : '';
    window.open(url, name, tmp$_0);
  };
  JsLocation.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsLocation', interfaces: [Location]};
  var package$com = _.com || (_.com = {});
  var package$acornui = package$com.acornui || (package$com.acornui = {});
  var package$js = package$acornui.js || (package$acornui.js = {});
  var package$audio = package$js.audio || (package$js.audio = {});
  package$audio.decodeAudioData_jmz3sj$ = decodeAudioData;
  Object.defineProperty(PanningModel, 'EQUAL_POWER', {get: PanningModel$EQUAL_POWER_getInstance});
  Object.defineProperty(PanningModel, 'HRTF', {get: PanningModel$HRTF_getInstance});
  package$audio.PanningModel = PanningModel;
  Object.defineProperty(package$audio, 'JsAudioContext', {get: JsAudioContext_getInstance});
  $$importsForInline$$.AcornUtils = $module$AcornUtils;
  package$audio.JsAudioElementMusic = JsAudioElementMusic;
  package$audio.JsAudioElementMusicLoader = JsAudioElementMusicLoader;
  package$audio.Audio_61zpoe$ = Audio;
  package$audio.JsAudioElementSound = JsAudioElementSound;
  package$audio.JsAudioElementSoundFactory = JsAudioElementSoundFactory;
  package$audio.JsAudioElementSoundLoader = JsAudioElementSoundLoader;
  package$audio.JsWebAudioMusic = JsWebAudioMusic;
  package$audio.JsWebAudioMusicLoader = JsWebAudioMusicLoader;
  package$audio.JsWebAudioSound = JsWebAudioSound;
  package$audio.JsWebAudioSoundFactory = JsWebAudioSoundFactory;
  package$audio.JsWebAudioSoundLoader = JsWebAudioSoundLoader;
  var package$cursor = package$js.cursor || (package$js.cursor = {});
  package$cursor.JsCursorManager = JsCursorManager;
  package$cursor.JsStandardCursor = JsStandardCursor;
  var package$file = package$js.file || (package$js.file = {});
  package$file.JsFileIoManager = JsFileIoManager;
  package$file.JsFileReader = JsFileReader;
  var package$gl = package$js.gl || (package$js.gl = {});
  package$gl.WebGl20 = WebGl20;
  package$gl.WebGlProgramRef = WebGlProgramRef;
  package$gl.WebGlShaderRef = WebGlShaderRef;
  package$gl.WebGlBufferRef = WebGlBufferRef;
  package$gl.WebGlFramebufferRef = WebGlFramebufferRef;
  package$gl.WebGlRenderbufferRef = WebGlRenderbufferRef;
  package$gl.WebGlTextureRef = WebGlTextureRef;
  package$gl.WebGlActiveInfoRef = WebGlActiveInfoRef;
  package$gl.WebGlUniformLocationRef = WebGlUniformLocationRef;
  Object.defineProperty(WebGlApplication, 'Companion', {get: WebGlApplication$Companion_getInstance});
  package$gl.WebGlApplication = WebGlApplication;
  package$gl.WebGlTexture = WebGlTexture;
  package$gl.WebGlTextureLoader = WebGlTextureLoader;
  package$gl.WebGlWindowImpl = WebGlWindowImpl;
  var package$html = package$js.html || (package$js.html = {});
  $$importsForInline$$.AcornUiCore = $module$AcornUiCore;
  package$html.JsHtmlComponent = JsHtmlComponent;
  package$html.DomComponent = DomComponent;
  Object.defineProperty(package$html, 'WebGl', {get: WebGl_getInstance});
  var package$input = package$js.input || (package$js.input = {});
  package$input.JsClickDispatcher = JsClickDispatcher;
  package$input.JsClipboardDispatcher = JsClipboardDispatcher;
  package$input.JsKeyInput = JsKeyInput;
  Object.defineProperty(JsMouseInput, 'Companion', {get: JsMouseInput$Companion_getInstance});
  package$input.JsMouseInput = JsMouseInput;
  var package$io = package$js.io || (package$js.io = {});
  package$io.JsBufferFactory = JsBufferFactory;
  package$io.JsByteBuffer = JsByteBuffer;
  package$io.JsShortBuffer = JsShortBuffer;
  package$io.JsIntBuffer = JsIntBuffer;
  package$io.JsFloatBuffer = JsFloatBuffer;
  package$io.JsDoubleBuffer = JsDoubleBuffer;
  package$io.JsHttpRequest = JsHttpRequest;
  package$io.JsArrayBufferRequest = JsArrayBufferRequest;
  package$io.JsBinaryRequest = JsBinaryRequest;
  package$io.JsTextRequest = JsTextRequest;
  Object.defineProperty(package$io, 'JsRestServiceFactory', {get: JsRestServiceFactory_getInstance});
  Object.defineProperty(JsApplicationBase, 'Companion', {get: JsApplicationBase$Companion_getInstance});
  package$js.JsApplicationBase = JsApplicationBase;
  package$js.JsApplicationRunner = JsApplicationRunner;
  package$js.JsApplicationRunnerImpl = JsApplicationRunnerImpl;
  var package$loader = package$js.loader || (package$js.loader = {});
  package$loader.JsBinaryLoader = JsBinaryLoader;
  package$loader.JsTextLoader = JsTextLoader;
  var package$persistance = package$js.persistance || (package$js.persistance = {});
  package$persistance.JsPersistence = JsPersistence;
  var package$selection = package$js.selection || (package$js.selection = {});
  package$selection.DomSelectionManager = DomSelectionManager;
  var package$text = package$js.text || (package$js.text = {});
  package$text.DateTimeFormatterImpl = DateTimeFormatterImpl;
  package$text.NumberFormatterImpl = NumberFormatterImpl;
  var package$time = package$js.time || (package$js.time = {});
  package$time.DateImpl = DateImpl;
  package$time.TimeProviderImpl = TimeProviderImpl;
  var package$window = package$js.window || (package$js.window = {});
  package$window.JsLocation = JsLocation;
  Object.defineProperty(JsAudioElementMusic.prototype, 'isPaused', Object.getOwnPropertyDescriptor(Music.prototype, 'isPaused'));
  JsAudioElementMusic.prototype.toggle = Music.prototype.toggle;
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(AssetLoader.prototype, 'percentLoaded'));
  JsAudioElementSoundFactory.prototype.createInstance = SoundFactory.prototype.createInstance;
  Object.defineProperty(JsAudioElementSoundLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(AssetLoader.prototype, 'percentLoaded'));
  Object.defineProperty(JsWebAudioMusic.prototype, 'isPaused', Object.getOwnPropertyDescriptor(Music.prototype, 'isPaused'));
  JsWebAudioMusic.prototype.toggle = Music.prototype.toggle;
  Object.defineProperty(JsWebAudioMusicLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(AssetLoader.prototype, 'percentLoaded'));
  JsWebAudioSoundFactory.prototype.createInstance = SoundFactory.prototype.createInstance;
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(AssetLoader.prototype, 'percentLoaded'));
  JsFileIoManager.prototype.pickFileForOpen_n96jzz$ = FileIoManager.prototype.pickFileForOpen_n96jzz$;
  JsFileIoManager.prototype.pickFilesForOpen_h14xhw$ = FileIoManager.prototype.pickFilesForOpen_h14xhw$;
  JsFileIoManager.prototype.saveText_j5k4le$ = FileIoManager.prototype.saveText_j5k4le$;
  JsFileIoManager.prototype.saveBinary_mbynv2$ = FileIoManager.prototype.saveBinary_mbynv2$;
  WebGl20.prototype.clearColor_8suw10$ = Gl20.prototype.clearColor_8suw10$;
  WebGl20.prototype.uniform2f_1b4vwg$ = Gl20.prototype.uniform2f_1b4vwg$;
  WebGl20.prototype.uniform3f_ppdhs3$ = Gl20.prototype.uniform3f_ppdhs3$;
  WebGl20.prototype.uniform3f_1b4vwf$ = Gl20.prototype.uniform3f_1b4vwf$;
  WebGl20.prototype.uniform4f_ppdhs3$ = Gl20.prototype.uniform4f_ppdhs3$;
  Object.defineProperty(WebGlTextureLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(AssetLoader.prototype, 'percentLoaded'));
  JsKeyInput.prototype.keyIsDown_3iojlf$ = KeyInput.prototype.keyIsDown_3iojlf$;
  JsMouseInput.prototype.mousePosition_9wm29l$ = MouseInput.prototype.mousePosition_9wm29l$;
  JsByteBuffer.prototype.getChar16 = NativeReadWriteByteBuffer.prototype.getChar16;
  JsByteBuffer.prototype.getChar8 = NativeReadWriteByteBuffer.prototype.getChar8;
  JsByteBuffer.prototype.putChar16_s8itvh$ = NativeReadWriteByteBuffer.prototype.putChar16_s8itvh$;
  JsByteBuffer.prototype.putChar8_s8itvh$ = NativeReadWriteByteBuffer.prototype.putChar8_s8itvh$;
  Object.defineProperty(JsHttpRequest.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(Request.prototype, 'percentLoaded'));
  Object.defineProperty(JsBinaryLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(AssetLoader.prototype, 'percentLoaded'));
  Object.defineProperty(JsTextLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(AssetLoader.prototype, 'percentLoaded'));
  JsPersistence.prototype.containsItem_61zpoe$ = Persistence.prototype.containsItem_61zpoe$;
  DomSelectionManager.prototype.clear = SelectionManager.prototype.clear;
  NumberFormatterImpl.prototype.parse_61zpoe$ = NumberFormatter.prototype.parse_61zpoe$;
  Object.defineProperty(DateImpl.prototype, 'month', Object.getOwnPropertyDescriptor(Date_0.prototype, 'month'));
  Object.defineProperty(DateImpl.prototype, 'utcMonth', Object.getOwnPropertyDescriptor(Date_0.prototype, 'utcMonth'));
  DateImpl.prototype.compareTo_11rb$ = Date_0.prototype.compareTo_11rb$;
  DateImpl.prototype.set_kxlrdn$ = Date_0.prototype.set_kxlrdn$;
  DateImpl.prototype.setDate_qt1dr2$ = Date_0.prototype.setDate_qt1dr2$;
  DateImpl.prototype.setTimeOfDay_tjonv8$$default = Date_0.prototype.setTimeOfDay_tjonv8$$default;
  DateImpl.prototype.setUtcDate_qt1dr2$ = Date_0.prototype.setUtcDate_qt1dr2$;
  DateImpl.prototype.setUtcTimeOfDay_tjonv8$$default = Date_0.prototype.setUtcTimeOfDay_tjonv8$$default;
  DateImpl.prototype.toIsoString = Date_0.prototype.toIsoString;
  DateImpl.prototype.setTimeOfDay_tjonv8$ = Date_0.prototype.setTimeOfDay_tjonv8$;
  DateImpl.prototype.setUtcTimeOfDay_tjonv8$ = Date_0.prototype.setUtcTimeOfDay_tjonv8$;
  TimeProviderImpl.prototype.date_ui44o2$$default = TimeProvider.prototype.date_ui44o2$$default;
  TimeProviderImpl.prototype.date_s8cxhz$ = TimeProvider.prototype.date_s8cxhz$;
  TimeProviderImpl.prototype.msElapsed = TimeProvider.prototype.msElapsed;
  TimeProviderImpl.prototype.nowS = TimeProvider.prototype.nowS;
  TimeProviderImpl.prototype.time_tjonv8$$default = TimeProvider.prototype.time_tjonv8$$default;
  TimeProviderImpl.prototype.utcDate_ui44o2$$default = TimeProvider.prototype.utcDate_ui44o2$$default;
  TimeProviderImpl.prototype.utcTime_tjonv8$$default = TimeProvider.prototype.utcTime_tjonv8$$default;
  TimeProviderImpl.prototype.date_ui44o2$ = TimeProvider.prototype.date_ui44o2$;
  TimeProviderImpl.prototype.time_tjonv8$ = TimeProvider.prototype.time_tjonv8$;
  TimeProviderImpl.prototype.utcDate_ui44o2$ = TimeProvider.prototype.utcDate_ui44o2$;
  TimeProviderImpl.prototype.utcTime_tjonv8$ = TimeProvider.prototype.utcTime_tjonv8$;
  JsLocation.prototype.navigateToUrl_61zpoe$ = Location.prototype.navigateToUrl_61zpoe$;
  JsLocation.prototype.navigateToUrl_puj7f4$ = Location.prototype.navigateToUrl_puj7f4$;
  Object.defineProperty(JsLocation.prototype, 'hrefBase', Object.getOwnPropertyDescriptor(Location.prototype, 'hrefBase'));
  Object.defineProperty(JsLocation.prototype, 'searchParams', Object.getOwnPropertyDescriptor(Location.prototype, 'searchParams'));
  var tmp$;
  var JsAudioContext = window.AudioContext || window.webkitAudioContext;
  audioContextSupported = typeof (tmp$ = JsAudioContext != null) === 'boolean' ? tmp$ : throwCCE();
  return _;
}));

//# sourceMappingURL=AcornUiJsBackend.js.map
function alwaysTrue() { return true; }