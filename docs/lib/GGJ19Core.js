(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'AcornUtils', 'AcornUiCore'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('AcornUtils'), require('AcornUiCore'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'GGJ19Core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'GGJ19Core'.");
    }
    if (typeof AcornUtils === 'undefined') {
      throw new Error("Error loading module 'GGJ19Core'. Its dependency 'AcornUtils' was not found. Please, check whether 'AcornUtils' is loaded prior to 'GGJ19Core'.");
    }
    if (typeof AcornUiCore === 'undefined') {
      throw new Error("Error loading module 'GGJ19Core'. Its dependency 'AcornUiCore' was not found. Please, check whether 'AcornUiCore' is loaded prior to 'GGJ19Core'.");
    }
    root.GGJ19Core = factory(typeof GGJ19Core === 'undefined' ? {} : GGJ19Core, kotlin, AcornUtils, AcornUiCore);
  }
}(this, function (_, Kotlin, $module$AcornUtils, $module$AcornUiCore) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Color = $module$AcornUtils.com.acornui.graphic.Color;
  var WindowConfig = $module$AcornUiCore.com.acornui.core.WindowConfig;
  var GlConfig = $module$AcornUiCore.com.acornui.core.GlConfig;
  var AppConfig = $module$AcornUiCore.com.acornui.core.AppConfig;
  var CanvasLayoutContainer = $module$AcornUiCore.com.acornui.component.layout.algorithm.CanvasLayoutContainer;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var dataBinding = $module$AcornUiCore.com.acornui.core.observe.dataBinding_7pofm6$;
  var get_stage = $module$AcornUiCore.com.acornui.component.get_stage_xd4dkp$;
  var BasicUiSkin = $module$AcornUiCore.com.acornui.skins.BasicUiSkin;
  var or = $module$AcornUiCore.com.acornui.core.observe.or_x919w3$;
  var Unit = Kotlin.kotlin.Unit;
  var bind = $module$AcornUtils.com.acornui.signal.bind_3tpvqv$;
  var text = $module$AcornUiCore.com.acornui.component.text.text_os944a$;
  var hGroup = $module$AcornUiCore.com.acornui.component.layout.algorithm.hGroup_aiug52$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var NavBindable = $module$AcornUiCore.com.acornui.core.nav.NavBindable;
  var tween = $module$AcornUiCore.com.acornui.core.tween;
  var math = $module$AcornUtils.com.acornui.math;
  var createPropertyTween = $module$AcornUiCore.com.acornui.core.tween.createPropertyTween_abp5vu$;
  var driveTween = $module$AcornUiCore.com.acornui.core.tween.driveTween_asoma$;
  var StackLayoutContainer = $module$AcornUiCore.com.acornui.component.StackLayoutContainer;
  var stack = $module$AcornUiCore.com.acornui.component.stack_339xz$;
  var orthographicCamera = $module$AcornUiCore.com.acornui.core.graphic.orthographicCamera_fsqvpo$;
  var dragAttachment = $module$AcornUiCore.com.acornui.core.input.interaction.dragAttachment_rt6gw7$;
  var TossScroller = $module$AcornUiCore.com.acornui.component.scroll.TossScroller;
  var own = $module$AcornUiCore.com.acornui.core.di.own_hwf7iz$;
  var ScrollModelImpl = $module$AcornUiCore.com.acornui.component.scroll.ScrollModelImpl;
  var TossScrollModelBinding = $module$AcornUiCore.com.acornui.component.scroll.TossScrollModelBinding;
  var InteractivityMode = $module$AcornUiCore.com.acornui.component.InteractivityMode;
  var pinchStart = $module$AcornUiCore.com.acornui.core.input.interaction.pinchStart_erfg7f$;
  var pinch = $module$AcornUiCore.com.acornui.core.input.interaction.pinch_erfg7f$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var wheel = $module$AcornUiCore.com.acornui.core.input.wheel_w26x3n$;
  var Vector2 = $module$AcornUtils.com.acornui.math.Vector2;
  var line = $module$AcornUiCore.com.acornui.component.drawing.line_5nybxc$;
  var staticMesh = $module$AcornUiCore.com.acornui.component.drawing.staticMesh_mkeht6$;
  var staticMeshC = $module$AcornUiCore.com.acornui.component.drawing.staticMeshC_ig2bzk$;
  var container = $module$AcornUiCore.com.acornui.component.container_10kks9$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var atlas = $module$AcornUiCore.com.acornui.component.atlas_8684q0$;
  GGJ19.prototype = Object.create(CanvasLayoutContainer.prototype);
  GGJ19.prototype.constructor = GGJ19;
  LevelView.prototype = Object.create(StackLayoutContainer.prototype);
  LevelView.prototype.constructor = LevelView;
  TileView.prototype = Object.create(StackLayoutContainer.prototype);
  TileView.prototype.constructor = TileView;
  var config;
  function GGJ19(owner) {
    CanvasLayoutContainer.call(this, owner);
    this.atlasPath_0 = 'assets/ggj.json';
    this.levels_0 = dataBinding(this, listOf(new GameLevel()));
    this.currentLevel_0 = dataBinding(this, 0);
    (new BasicUiSkin(get_stage(this))).apply();
    var $receiver = new LevelView(this);
    bind(or(this.levels_0, this.currentLevel_0), GGJ19_init$lambda$lambda(this, $receiver));
    this.layout_ge8abi$(this.unaryPlus_b3a6qy$($receiver), GGJ19_init$lambda);
    this.layout_ge8abi$(this.unaryPlus_b3a6qy$(hGroup(this, GGJ19_init$lambda_0(this))), GGJ19_init$lambda_1);
  }
  function GGJ19_init$lambda$lambda(this$GGJ19, this$) {
    return function () {
      this$.data.value = this$GGJ19.levels_0.value.get_za3lpa$(this$GGJ19.currentLevel_0.value);
      return Unit;
    };
  }
  function GGJ19_init$lambda($receiver) {
    $receiver.fill();
    return Unit;
  }
  function GGJ19_init$lambda$lambda$lambda(this$) {
    return function (it) {
      this$.text = 'Level: ' + it;
      return Unit;
    };
  }
  function GGJ19_init$lambda$lambda_0(this$GGJ19) {
    return function ($receiver) {
      this$GGJ19.currentLevel_0.bind_qlkmfe$(GGJ19_init$lambda$lambda$lambda($receiver));
      return Unit;
    };
  }
  function GGJ19_init$lambda_0(this$GGJ19) {
    return function ($receiver) {
      $receiver.unaryPlus_b3a6qy$(text($receiver, GGJ19_init$lambda$lambda_0(this$GGJ19)));
      return Unit;
    };
  }
  function GGJ19_init$lambda_1($receiver) {
    $receiver.left = 10.0;
    $receiver.top = 10.0;
    return Unit;
  }
  GGJ19.$metadata$ = {kind: Kind_CLASS, simpleName: 'GGJ19', interfaces: [NavBindable, CanvasLayoutContainer]};
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function LevelView(owner) {
    StackLayoutContainer.call(this, owner);
    this.stateData_0 = dataBinding(this, new OverviewStateVo());
    this.data = dataBinding(this, new GameLevel());
    var tmp$;
    var a = ArrayList_init(20);
    tmp$ = 20 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0 = a.add_11rb$;
      var tmp$_1;
      var a_0 = ArrayList_init(20);
      tmp$_1 = 20 - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_1; i_0++) {
        a_0.add_11rb$(new TileView(this));
      }
      tmp$_0.call(a, a_0);
    }
    this.tileViews_0 = a;
    this.gameStage_0 = stack(this);
    this.overviewCam_0 = orthographicCamera(this, true);
    this.drag_0 = dragAttachment(this);
    this.tossScroller_0 = own(this, new TossScroller(this.gameStage_0, void 0, this.drag_0));
    this.hScroll_0 = own(this, new ScrollModelImpl());
    this.vScroll_0 = own(this, new ScrollModelImpl());
    this.tossScrollBinding_0 = own(this, new TossScrollModelBinding(this.tossScroller_0, this.hScroll_0, this.vScroll_0));
    this.interactivityMode = InteractivityMode.ALWAYS;
    this.window.sizeChanged.add_trkh7z$(LevelView_init$lambda(this));
    this.hScroll_0.min = 0.0;
    this.vScroll_0.min = 0.0;
    this.hScroll_0.changed.add_trkh7z$(LevelView_init$lambda_0(this));
    this.vScroll_0.changed.add_trkh7z$(LevelView_init$lambda_1(this));
    var startZoom = {v: 0.0};
    pinchStart(this).add_trkh7z$(LevelView_init$lambda_2(this, startZoom));
    pinch(this).add_trkh7z$(LevelView_init$lambda_3(startZoom, this));
    this.stateData_0.bind_qlkmfe$(LevelView_init$lambda_4(this));
    this.drag_0.dragStart.add_trkh7z$(LevelView_init$lambda_5);
    wheel(this).add_trkh7z$(LevelView_init$lambda_6(this));
    var $receiver = this.gameStage_0;
    var padding = 50.0;
    var stageW = 64.0 * 20.0 + padding * 2.0;
    var stageH = 64.0 * 20.0 + padding * 2.0;
    $receiver.defaultWidth = stageW;
    $receiver.defaultHeight = stageH;
    this.hScroll_0.max = stageW;
    this.vScroll_0.max = stageH;
    $receiver.cameraOverride = this.overviewCam_0;
    $receiver.layout_ge8abi$($receiver.unaryPlus_b3a6qy$(container($receiver, LevelView_init$lambda$lambda)), LevelView_init$lambda$lambda_0);
    this.layout_ge8abi$(this.unaryPlus_b3a6qy$($receiver), LevelView_init$lambda_7);
    this.data.bind_qlkmfe$(LevelView_init$lambda_8(this));
  }
  LevelView.prototype.updateCam_0 = function () {
    var cam = this.stateData_0.value.camera;
    var z = cam.zoom;
    var w = this.overviewCam_0.viewportWidth * z;
    var h = this.overviewCam_0.viewportHeight * z;
    this.overviewCam_0.zoom = z;
    this.overviewCam_0.moveToLookAtRect_qymak0$(cam.x - w * 0.5, cam.y - h * 0.5, w, h);
    this.tossScrollBinding_0.modelToPixelsX = 1.0 / z;
    this.tossScrollBinding_0.modelToPixelsY = 1.0 / z;
    this.window.requestRender();
  };
  function LevelView$moveCamera$lambda(this$LevelView, closure$x, closure$y, closure$zoom) {
    return function (it) {
      tween.TweenRegistry.kill_4hrdoq$(this$LevelView, 'camera', true);
      return it.copy_1k3lfx$(it.camera.copy_y2kzbl$(closure$x, closure$y, closure$zoom));
    };
  }
  LevelView.prototype.moveCamera_0 = function (x, y, zoom) {
    if (x === void 0)
      x = this.stateData_0.value.camera.x;
    if (y === void 0)
      y = this.stateData_0.value.camera.y;
    if (zoom === void 0)
      zoom = this.stateData_0.value.camera.zoom;
    this.stateData_0.change_ru8m0w$(LevelView$moveCamera$lambda(this, x, y, zoom));
  };
  function LevelView$zoomCamera$lambda(this$LevelView, closure$zoom) {
    return function (it) {
      tween.TweenRegistry.kill_4hrdoq$(this$LevelView, 'camera', true);
      var value = closure$zoom;
      var clamp_73gzaq$result;
      clamp_73gzaq$break: do {
        if (Kotlin.compareTo(value, 0.1) <= 0) {
          clamp_73gzaq$result = 0.1;
          break clamp_73gzaq$break;
        }
        if (Kotlin.compareTo(value, 4.0) >= 0) {
          clamp_73gzaq$result = 4.0;
          break clamp_73gzaq$break;
        }
        clamp_73gzaq$result = value;
      }
       while (false);
      var newZoom = clamp_73gzaq$result;
      var cam = it.camera;
      return it.copy_1k3lfx$(cam.copy_y2kzbl$(void 0, void 0, newZoom));
    };
  }
  LevelView.prototype.zoomCamera_0 = function (zoom) {
    this.stateData_0.change_ru8m0w$(LevelView$zoomCamera$lambda(this, zoom));
  };
  function LevelView$tweenCamera$lambda() {
    return 0.0;
  }
  function LevelView$tweenCamera$lambda$lambda(closure$start, closure$end, closure$alpha) {
    return function (it) {
      return it.copy_1k3lfx$(closure$start.lerp_u94za0$(closure$end, closure$alpha));
    };
  }
  function LevelView$tweenCamera$lambda_0(this$LevelView, closure$start, closure$end) {
    return function (alpha) {
      this$LevelView.stateData_0.change_ru8m0w$(LevelView$tweenCamera$lambda$lambda(closure$start, closure$end, alpha));
      return Unit;
    };
  }
  LevelView.prototype.tweenCamera_0 = function (x, y, zoom, duration, ease, delay) {
    if (x === void 0)
      x = this.stateData_0.value.camera.x;
    if (y === void 0)
      y = this.stateData_0.value.camera.y;
    if (zoom === void 0)
      zoom = this.stateData_0.value.camera.zoom;
    if (duration === void 0)
      duration = 0.5;
    if (ease === void 0)
      ease = math.Easing.pow3;
    if (delay === void 0)
      delay = 0.0;
    var start = this.stateData_0.value.camera.copy_y2kzbl$();
    var clamp_73gzaq$result;
    clamp_73gzaq$break: do {
      if (Kotlin.compareTo(zoom, 0.1) <= 0) {
        clamp_73gzaq$result = 0.1;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(zoom, 4.0) >= 0) {
        clamp_73gzaq$result = 4.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = zoom;
    }
     while (false);
    var end = new OverviewCameraVo(x, y, clamp_73gzaq$result);
    driveTween(this, createPropertyTween(this, 'camera', duration, ease, LevelView$tweenCamera$lambda, LevelView$tweenCamera$lambda_0(this, start, end), 1.0, delay));
  };
  function LevelView_init$lambda(this$LevelView) {
    return function (newWidth, newHeight, f) {
      this$LevelView.overviewCam_0.setViewport_dleff0$(newWidth, newHeight);
      this$LevelView.updateCam_0();
      return Unit;
    };
  }
  function LevelView_init$lambda_0(this$LevelView) {
    return function (it) {
      this$LevelView.moveCamera_0(it.value);
      return Unit;
    };
  }
  function LevelView_init$lambda_1(this$LevelView) {
    return function (it) {
      this$LevelView.moveCamera_0(void 0, it.value);
      return Unit;
    };
  }
  function LevelView_init$lambda_2(this$LevelView, closure$startZoom) {
    return function (it) {
      closure$startZoom.v = this$LevelView.stateData_0.value.camera.zoom;
      return Unit;
    };
  }
  function LevelView_init$lambda_3(closure$startZoom, this$LevelView) {
    return function (it) {
      this$LevelView.zoomCamera_0(it.startDistance * closure$startZoom.v / it.distance);
      return Unit;
    };
  }
  function LevelView_init$lambda_4(this$LevelView) {
    return function (it) {
      if (!this$LevelView.hScroll_0.changed.isDispatching && !this$LevelView.vScroll_0.changed.isDispatching) {
        this$LevelView.hScroll_0.value = it.camera.x;
        this$LevelView.vScroll_0.value = it.camera.y;
      }
      this$LevelView.updateCam_0();
      return Unit;
    };
  }
  function LevelView_init$lambda_5(it) {
    println('D S');
    return Unit;
  }
  function LevelView_init$lambda_6(this$LevelView) {
    return function (it) {
      this$LevelView.tossScroller_0.stop();
      if (it.deltaY !== 0.0) {
        this$LevelView.zoomCamera_0(this$LevelView.stateData_0.value.camera.zoom * (it.deltaY > 0.0 ? 1.2 : 0.8));
      }
      return Unit;
    };
  }
  function LevelView_init$lambda$lambda$lambda$lambda$lambda($receiver) {
    for (var row = 0; row < 20; row++) {
      for (var col = 0; col < 20; col++) {
        var ptA = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2(col * 64.0, row * 64.0));
        var ptB = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2((col + 1.0) * 64.0, row * 64.0));
        var ptC = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2((col + 1.0) * 64.0, (row + 1.0) * 64.0));
        var ptD = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2(col * 64.0, (row + 1.0) * 64.0));
        line($receiver, ptA.x, ptA.y, ptB.x, ptB.y);
        line($receiver, ptB.x, ptB.y, ptC.x, ptC.y);
        line($receiver, ptC.x, ptC.y, ptD.x, ptD.y);
        line($receiver, ptD.x, ptD.y, ptA.x, ptA.y);
      }
    }
    return Unit;
  }
  function LevelView_init$lambda$lambda$lambda$lambda($receiver) {
    $receiver.buildMesh_dmwms7$(LevelView_init$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function LevelView_init$lambda$lambda$lambda($receiver) {
    $receiver.mesh = staticMesh($receiver, LevelView_init$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function LevelView_init$lambda$lambda($receiver) {
    $receiver.unaryPlus_b3a6qy$(staticMeshC($receiver, LevelView_init$lambda$lambda$lambda));
    return Unit;
  }
  function LevelView_init$lambda$lambda_0($receiver) {
    $receiver.fill();
    return Unit;
  }
  function LevelView_init$lambda_7($receiver) {
    $receiver.fill();
    return Unit;
  }
  function LevelView_init$lambda_8(this$LevelView) {
    return function (it) {
      for (var row = 0; row < 20; row++) {
        for (var col = 0; col < 20; col++) {
          this$LevelView.tileViews_0.get_za3lpa$(row).get_za3lpa$(col).data.value = it.getTile_vux9f0$(row, col);
        }
      }
      return Unit;
    };
  }
  LevelView.$metadata$ = {kind: Kind_CLASS, simpleName: 'LevelView', interfaces: [StackLayoutContainer]};
  function OverviewStateVo(camera) {
    if (camera === void 0)
      camera = new OverviewCameraVo();
    this.camera = camera;
  }
  OverviewStateVo.$metadata$ = {kind: Kind_CLASS, simpleName: 'OverviewStateVo', interfaces: []};
  OverviewStateVo.prototype.component1 = function () {
    return this.camera;
  };
  OverviewStateVo.prototype.copy_1k3lfx$ = function (camera) {
    return new OverviewStateVo(camera === void 0 ? this.camera : camera);
  };
  OverviewStateVo.prototype.toString = function () {
    return 'OverviewStateVo(camera=' + Kotlin.toString(this.camera) + ')';
  };
  OverviewStateVo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.camera) | 0;
    return result;
  };
  OverviewStateVo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.camera, other.camera))));
  };
  function OverviewCameraVo(x, y, zoom) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (zoom === void 0)
      zoom = 1.0;
    this.x = x;
    this.y = y;
    this.zoom = zoom;
  }
  OverviewCameraVo.prototype.lerp_u94za0$ = function (other, alpha) {
    return new OverviewCameraVo((other.x - this.x) * alpha + this.x, (other.y - this.y) * alpha + this.y, (other.zoom - this.zoom) * alpha + this.zoom);
  };
  OverviewCameraVo.$metadata$ = {kind: Kind_CLASS, simpleName: 'OverviewCameraVo', interfaces: []};
  OverviewCameraVo.prototype.component1 = function () {
    return this.x;
  };
  OverviewCameraVo.prototype.component2 = function () {
    return this.y;
  };
  OverviewCameraVo.prototype.component3 = function () {
    return this.zoom;
  };
  OverviewCameraVo.prototype.copy_y2kzbl$ = function (x, y, zoom) {
    return new OverviewCameraVo(x === void 0 ? this.x : x, y === void 0 ? this.y : y, zoom === void 0 ? this.zoom : zoom);
  };
  OverviewCameraVo.prototype.toString = function () {
    return 'OverviewCameraVo(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', zoom=' + Kotlin.toString(this.zoom)) + ')';
  };
  OverviewCameraVo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.zoom) | 0;
    return result;
  };
  OverviewCameraVo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.zoom, other.zoom)))));
  };
  function GameLevel(grid) {
    GameLevel$Companion_getInstance();
    if (grid === void 0) {
      var tmp$;
      var a = ArrayList_init(20);
      tmp$ = 20 - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        var tmp$_0 = a.add_11rb$;
        var tmp$_1;
        var a_0 = ArrayList_init(20);
        tmp$_1 = 20 - 1 | 0;
        for (var i_0 = 0; i_0 <= tmp$_1; i_0++) {
          a_0.add_11rb$(EmptyTile_getInstance());
        }
        tmp$_0.call(a, a_0);
      }
      grid = a;
    }
    this.grid = grid;
  }
  GameLevel.prototype.getTile_vux9f0$ = function (row, col) {
    return this.grid.get_za3lpa$(row).get_za3lpa$(col);
  };
  function GameLevel$Companion() {
    GameLevel$Companion_instance = this;
    this.MAX_COLS = 20;
    this.MAX_ROWS = 20;
  }
  GameLevel$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var GameLevel$Companion_instance = null;
  function GameLevel$Companion_getInstance() {
    if (GameLevel$Companion_instance === null) {
      new GameLevel$Companion();
    }
    return GameLevel$Companion_instance;
  }
  GameLevel.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameLevel', interfaces: []};
  GameLevel.prototype.component1 = function () {
    return this.grid;
  };
  GameLevel.prototype.copy_m6jspb$ = function (grid) {
    return new GameLevel(grid === void 0 ? this.grid : grid);
  };
  GameLevel.prototype.toString = function () {
    return 'GameLevel(grid=' + Kotlin.toString(this.grid) + ')';
  };
  GameLevel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.grid) | 0;
    return result;
  };
  GameLevel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.grid, other.grid))));
  };
  var Traits$SUNNY_instance;
  var Traits$NOISY_instance;
  var Traits$DANGEROUS_instance;
  var Resource$NOISE_instance;
  var Resource$SUNLIGHT_instance;
  var Resource$DANGER_instance;
  function Room(resources, traits, occupant) {
    if (resources === void 0)
      resources = emptyList();
    if (traits === void 0)
      traits = emptyList();
    if (occupant === void 0)
      occupant = null;
    this.resources_untibd$_0 = resources;
    this.traits_h5abml$_0 = traits;
    this.occupant = occupant;
  }
  Object.defineProperty(Room.prototype, 'resources', {get: function () {
    return this.resources_untibd$_0;
  }});
  Object.defineProperty(Room.prototype, 'traits', {get: function () {
    return this.traits_h5abml$_0;
  }});
  Room.$metadata$ = {kind: Kind_CLASS, simpleName: 'Room', interfaces: [Tile]};
  Room.prototype.component1 = function () {
    return this.resources;
  };
  Room.prototype.component2 = function () {
    return this.traits;
  };
  Room.prototype.component3 = function () {
    return this.occupant;
  };
  Room.prototype.copy_2i63p2$ = function (resources, traits, occupant) {
    return new Room(resources === void 0 ? this.resources : resources, traits === void 0 ? this.traits : traits, occupant === void 0 ? this.occupant : occupant);
  };
  Room.prototype.toString = function () {
    return 'Room(resources=' + Kotlin.toString(this.resources) + (', traits=' + Kotlin.toString(this.traits)) + (', occupant=' + Kotlin.toString(this.occupant)) + ')';
  };
  Room.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.resources) | 0;
    result = result * 31 + Kotlin.hashCode(this.traits) | 0;
    result = result * 31 + Kotlin.hashCode(this.occupant) | 0;
    return result;
  };
  Room.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.resources, other.resources) && Kotlin.equals(this.traits, other.traits) && Kotlin.equals(this.occupant, other.occupant)))));
  };
  function Tile() {
  }
  Tile.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Tile', interfaces: []};
  function EmptyTile() {
    EmptyTile_instance = this;
    this.resources_x48rh3$_0 = emptyList();
    this.traits_q7pg5d$_0 = emptyList();
  }
  Object.defineProperty(EmptyTile.prototype, 'resources', {get: function () {
    return this.resources_x48rh3$_0;
  }});
  Object.defineProperty(EmptyTile.prototype, 'traits', {get: function () {
    return this.traits_q7pg5d$_0;
  }});
  EmptyTile.$metadata$ = {kind: Kind_OBJECT, simpleName: 'EmptyTile', interfaces: [Tile]};
  var EmptyTile_instance = null;
  function EmptyTile_getInstance() {
    if (EmptyTile_instance === null) {
      new EmptyTile();
    }
    return EmptyTile_instance;
  }
  function TileView(owner) {
    StackLayoutContainer.call(this, owner);
    this.atlasPath_0 = 'assets/ggj.json';
    this.data = dataBinding(this, EmptyTile_getInstance());
    this.atlas_0 = this.layout_ge8abi$(this.unaryPlus_b3a6qy$(atlas(this, this.atlasPath_0, 'EmptyTile')), TileView$atlas$lambda);
    this.defaultWidth = 64.0;
    this.defaultHeight = 64.0;
    this.data.bind_qlkmfe$(TileView_init$lambda(this));
  }
  function TileView$atlas$lambda($receiver) {
    $receiver.fill();
    return Unit;
  }
  function TileView_init$lambda(this$TileView) {
    return function (it) {
      if (Kotlin.isType(it, Room)) {
        this$TileView.atlas_0.setRegion_puj7f4$(this$TileView.atlasPath_0, 'Room');
      }
       else {
        this$TileView.atlas_0.setRegion_puj7f4$(this$TileView.atlasPath_0, 'EmptyRoom');
      }
      return Unit;
    };
  }
  TileView.$metadata$ = {kind: Kind_CLASS, simpleName: 'TileView', interfaces: [StackLayoutContainer]};
  function Isometric() {
    Isometric_instance = this;
  }
  Isometric.prototype.isoToTwoD_9wm29l$ = function (coord) {
    return coord.set_dleff0$((2.0 * coord.y + coord.x) / 2.0, (2.0 * coord.y - coord.x) / 2.0);
  };
  Isometric.prototype.twoDToIso_9wm29l$ = function (coord) {
    return coord.set_dleff0$(coord.x - coord.y, (coord.x + coord.y) / 2);
  };
  Isometric.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Isometric', interfaces: []};
  var Isometric_instance = null;
  function Isometric_getInstance() {
    if (Isometric_instance === null) {
      new Isometric();
    }
    return Isometric_instance;
  }
  Object.defineProperty(_, 'config', {get: function () {
    return config;
  }});
  var package$ggj19 = _.ggj19 || (_.ggj19 = {});
  package$ggj19.GGJ19 = GGJ19;
  $$importsForInline$$.AcornUtils = $module$AcornUtils;
  package$ggj19.LevelView = LevelView;
  package$ggj19.OverviewStateVo = OverviewStateVo;
  package$ggj19.OverviewCameraVo = OverviewCameraVo;
  Object.defineProperty(GameLevel, 'Companion', {get: GameLevel$Companion_getInstance});
  var package$model = package$ggj19.model || (package$ggj19.model = {});
  package$model.GameLevel = GameLevel;
  package$model.Room = Room;
  package$model.Tile = Tile;
  Object.defineProperty(package$model, 'EmptyTile', {get: EmptyTile_getInstance});
  package$ggj19.TileView = TileView;
  var package$util = package$ggj19.util || (package$ggj19.util = {});
  Object.defineProperty(package$util, 'Isometric', {get: Isometric_getInstance});
  config = new AppConfig(void 0, void 0, void 0, void 0, 60, void 0, void 0, new WindowConfig('GGJ19', void 0, void 0, Color.Companion.DARK_GRAY), new GlConfig(true));
  return _;
}));

//# sourceMappingURL=GGJ19Core.js.map
function alwaysTrue() { return true; }