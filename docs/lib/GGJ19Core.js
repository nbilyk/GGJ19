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
  var AssetType = $module$AcornUiCore.com.acornui.core.asset.AssetType;
  var load = $module$AcornUiCore.com.acornui.core.asset.load_k5bt3m$;
  var Unit = Kotlin.kotlin.Unit;
  var then = $module$AcornUtils.com.acornui.async.then_7jcrga$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var or = $module$AcornUiCore.com.acornui.core.observe.or_x919w3$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var bind = $module$AcornUtils.com.acornui.signal.bind_3tpvqv$;
  var text = $module$AcornUiCore.com.acornui.component.text.text_7i1swk$;
  var rect = $module$AcornUiCore.com.acornui.component.rect_8hpnyb$;
  var text_0 = $module$AcornUiCore.com.acornui.component.text.text_os944a$;
  var hGroup = $module$AcornUiCore.com.acornui.component.layout.algorithm.hGroup_aiug52$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var NavBindable = $module$AcornUiCore.com.acornui.core.nav.NavBindable;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var poll = $module$AcornUtils.com.acornui.collection.poll_vvxzk3$;
  var equals = Kotlin.equals;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var replaceAt = $module$AcornUtils.com.acornui.collection.replaceAt_g8jm4q$;
  var pinchStart = $module$AcornUiCore.com.acornui.core.input.interaction.pinchStart_erfg7f$;
  var pinch = $module$AcornUiCore.com.acornui.core.input.interaction.pinch_erfg7f$;
  var wheel = $module$AcornUiCore.com.acornui.core.input.wheel_w26x3n$;
  var Vector2 = $module$AcornUtils.com.acornui.math.Vector2;
  var moveTo = $module$AcornUiCore.com.acornui.component.layout.moveTo_jveujf$;
  var keyDown = $module$AcornUiCore.com.acornui.core.input.keyDown_w26x3n$;
  var drawing = $module$AcornUiCore.com.acornui.component.drawing;
  var line = $module$AcornUiCore.com.acornui.component.drawing.line_5nybxc$;
  var staticMesh = $module$AcornUiCore.com.acornui.component.drawing.staticMesh_mkeht6$;
  var staticMeshC = $module$AcornUiCore.com.acornui.component.drawing.staticMeshC_ig2bzk$;
  var container = $module$AcornUiCore.com.acornui.component.container_10kks9$;
  var tween = $module$AcornUiCore.com.acornui.core.tween;
  var math = $module$AcornUtils.com.acornui.math;
  var createPropertyTween = $module$AcornUiCore.com.acornui.core.tween.createPropertyTween_abp5vu$;
  var driveTween = $module$AcornUiCore.com.acornui.core.tween.driveTween_asoma$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var orthographicCamera = $module$AcornUiCore.com.acornui.core.graphic.orthographicCamera_fsqvpo$;
  var dragAttachment = $module$AcornUiCore.com.acornui.core.input.interaction.dragAttachment_rt6gw7$;
  var TossScroller = $module$AcornUiCore.com.acornui.component.scroll.TossScroller;
  var own = $module$AcornUiCore.com.acornui.core.di.own_hwf7iz$;
  var ScrollModelImpl = $module$AcornUiCore.com.acornui.component.scroll.ScrollModelImpl;
  var TossScrollModelBinding = $module$AcornUiCore.com.acornui.component.scroll.TossScrollModelBinding;
  var InteractivityMode = $module$AcornUiCore.com.acornui.component.InteractivityMode;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var BasicUiSkin = $module$AcornUiCore.com.acornui.skins.BasicUiSkin;
  var ContainerImpl = $module$AcornUiCore.com.acornui.component.ContainerImpl;
  var atlas = $module$AcornUiCore.com.acornui.component.atlas_8684q0$;
  GGJ19.prototype = Object.create(CanvasLayoutContainer.prototype);
  GGJ19.prototype.constructor = GGJ19;
  LevelView.prototype = Object.create(CanvasLayoutContainer.prototype);
  LevelView.prototype.constructor = LevelView;
  GameCharacterType.prototype = Object.create(Enum.prototype);
  GameCharacterType.prototype.constructor = GameCharacterType;
  RoomType.prototype = Object.create(Enum.prototype);
  RoomType.prototype.constructor = RoomType;
  Skin.prototype = Object.create(BasicUiSkin.prototype);
  Skin.prototype.constructor = Skin;
  TileView.prototype = Object.create(ContainerImpl.prototype);
  TileView.prototype.constructor = TileView;
  var config;
  function GGJ19(owner) {
    CanvasLayoutContainer.call(this, owner);
    this.atlasPath_0 = 'assets/ggj.json';
    this.levels_0 = dataBinding(this, listOf(new GameLevel()));
    this.currentLevel_0 = dataBinding(this, 0);
    (new Skin(get_stage(this))).apply();
    then(load(this, 'assets/levelData.txt', AssetType.Companion.TEXT), GGJ19_init$lambda(this));
    this.levels_0.value = listOf(new GameLevel(listOf_0([new GameCharacter(GameCharacterType$ARTIST_getInstance()), new GameCharacter(GameCharacterType$GRANDMA_getInstance()), new GameCharacter(GameCharacterType$ARTIST_getInstance())])));
    var $receiver = new LevelView(this);
    bind(or(this.levels_0, this.currentLevel_0), GGJ19_init$lambda$lambda(this, $receiver));
    var levelView = this.layout_ge8abi$(this.unaryPlus_b3a6qy$($receiver), GGJ19_init$lambda_0);
    bind(or(this.levels_0, this.currentLevel_0), GGJ19_init$lambda_1(this, levelView));
    this.layout_ge8abi$(this.unaryPlus_b3a6qy$(rect(this, GGJ19_init$lambda_2)), GGJ19_init$lambda_3);
    this.layout_ge8abi$(this.unaryPlus_b3a6qy$(hGroup(this, GGJ19_init$lambda_4(this))), GGJ19_init$lambda_5);
  }
  function GGJ19_init$lambda(this$GGJ19) {
    return function (it) {
      this$GGJ19.levels_0.value = parseGameData(it);
      return Unit;
    };
  }
  function GGJ19_init$lambda$lambda(this$GGJ19, this$) {
    return function () {
      var tmp$;
      this$.originalData.value = (tmp$ = getOrNull(this$GGJ19.levels_0.value, this$GGJ19.currentLevel_0.value)) != null ? tmp$ : emptyLevel;
      return Unit;
    };
  }
  function GGJ19_init$lambda_0($receiver) {
    $receiver.fill();
    return Unit;
  }
  function GGJ19_init$lambda$lambda_0($receiver) {
    $receiver.center();
    return Unit;
  }
  function GGJ19_init$lambda_1(this$GGJ19, closure$levelView) {
    return function () {
      if (!this$GGJ19.levels_0.value.isEmpty() && this$GGJ19.currentLevel_0.value >= this$GGJ19.levels_0.value.size) {
        closure$levelView.visible = false;
        this$GGJ19.layout_ge8abi$(this$GGJ19.unaryPlus_b3a6qy$(text(this$GGJ19, 'Victory!!!')), GGJ19_init$lambda$lambda_0);
      }
      return Unit;
    };
  }
  function GGJ19_init$lambda_2($receiver) {
    $receiver.style.backgroundColor = new Color(0.0, 0.0, 0.0, 0.3);
    return Unit;
  }
  function GGJ19_init$lambda_3($receiver) {
    $receiver.widthPercent = 1.0;
    $receiver.height = 40.0;
    return Unit;
  }
  function GGJ19_init$lambda$lambda$lambda(this$) {
    return function (it) {
      this$.text = 'Level ' + it;
      return Unit;
    };
  }
  function GGJ19_init$lambda$lambda_1(this$GGJ19) {
    return function ($receiver) {
      this$GGJ19.currentLevel_0.bind_qlkmfe$(GGJ19_init$lambda$lambda$lambda($receiver));
      return Unit;
    };
  }
  function GGJ19_init$lambda_4(this$GGJ19) {
    return function ($receiver) {
      $receiver.unaryPlus_b3a6qy$(text_0($receiver, GGJ19_init$lambda$lambda_1(this$GGJ19)));
      return Unit;
    };
  }
  function GGJ19_init$lambda_5($receiver) {
    $receiver.left = 10.0;
    $receiver.top = 10.0;
    return Unit;
  }
  GGJ19.$metadata$ = {kind: Kind_CLASS, simpleName: 'GGJ19', interfaces: [NavBindable, CanvasLayoutContainer]};
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function parseGameData(str) {
    var tmp$;
    var lines = toMutableList(split(str, ['\n']));
    var levels = ArrayList_init();
    while (!lines.isEmpty()) {
      eatEmptyLines(lines);
      var tmp$_0;
      var a = ArrayList_init_0(20);
      tmp$_0 = 20 - 1 | 0;
      for (var i = 0; i <= tmp$_0; i++) {
        var tmp$_1 = a.add_11rb$;
        var tmp$_2;
        var a_0 = ArrayList_init_0(20);
        tmp$_2 = 20 - 1 | 0;
        for (var i_0 = 0; i_0 <= tmp$_2; i_0++) {
          a_0.add_11rb$(new Tile());
        }
        tmp$_1.call(a, a_0);
      }
      var grid = a;
      for (var row = 0; row < 20; row++) {
        var cols = split(poll(lines), [' ']);
        for (var col = 0; col < 20; col++) {
          if (!equals(cols.get_za3lpa$(col), '.')) {
            grid.get_za3lpa$(row).set_wxm5ur$(col, new Tile(RoomType$STANDARD_getInstance()));
          }
        }
      }
      eatEmptyLines(lines);
      var queue = poll(lines);
      var queueChars = split(queue, [' ']);
      var pendingCharacters = ArrayList_init();
      tmp$ = queueChars.iterator();
      while (tmp$.hasNext()) {
        var queueChar = tmp$.next();
        pendingCharacters.add_11rb$(new GameCharacter(GameCharacterType$Companion_getInstance().fromLetter_s8itvh$(queueChar.charCodeAt(0))));
      }
      levels.add_11rb$(new GameLevel(pendingCharacters, grid));
      eatEmptyLines(lines);
    }
    return levels;
  }
  function eatEmptyLines($receiver) {
    while (!$receiver.isEmpty() && (isBlank($receiver.get_za3lpa$(0)) || startsWith($receiver.get_za3lpa$(0), '#'))) {
      poll($receiver);
    }
  }
  function LevelView(owner) {
    LevelView$Companion_getInstance();
    CanvasLayoutContainer.call(this, owner);
    this.stateData_0 = dataBinding(this, new UiControlsStateVo());
    this.originalData = dataBinding(this, emptyLevel);
    this.currentLevel_0 = dataBinding(this, this.originalData.value);
    var tmp$;
    var a = ArrayList_init_0(20);
    tmp$ = 20 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0 = a.add_11rb$;
      var tmp$_1;
      var a_0 = ArrayList_init_0(20);
      tmp$_1 = 20 - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_1; i_0++) {
        a_0.add_11rb$(new TileView(this));
      }
      tmp$_0.call(a, a_0);
    }
    this.tileViews_0 = a;
    this.gameStage_0 = container(this);
    this.overviewCam_0 = orthographicCamera(this, true);
    this.drag_0 = dragAttachment(this);
    this.tossScroller_0 = own(this, new TossScroller(this.gameStage_0, void 0, this.drag_0));
    this.hScroll_0 = own(this, new ScrollModelImpl());
    this.vScroll_0 = own(this, new ScrollModelImpl());
    this.tossScrollBinding_0 = own(this, new TossScrollModelBinding(this.tossScroller_0, this.hScroll_0, this.vScroll_0));
    this.padding_0 = 0.0;
    this.stageW_0 = LevelView$Companion_getInstance().TILE_SIZE * 20 + this.padding_0 * 2.0;
    this.stageH_0 = LevelView$Companion_getInstance().TILE_SIZE * 20 + this.padding_0 * 2.0;
    this.originalData.bind_qlkmfe$(LevelView_init$lambda(this));
    this.interactivityMode = InteractivityMode.ALWAYS;
    this.initTileViews_0();
    this.initCameraControls_0();
    this.initStageView_0();
    this.initCharacterQueue_0();
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function LevelView$initCharacterQueue$lambda$lambda$lambda(this$) {
    return function (level) {
      var tmp$ = this$;
      var $receiver = level.pendingCharacters;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(item.type);
      }
      tmp$.text = 'Chars: ' + destination;
      return Unit;
    };
  }
  function LevelView$initCharacterQueue$lambda$lambda(this$LevelView) {
    return function ($receiver) {
      this$LevelView.currentLevel_0.bind_qlkmfe$(LevelView$initCharacterQueue$lambda$lambda$lambda($receiver));
      return Unit;
    };
  }
  function LevelView$initCharacterQueue$lambda(this$LevelView) {
    return function ($receiver) {
      $receiver.unaryPlus_b3a6qy$(text_0($receiver, LevelView$initCharacterQueue$lambda$lambda(this$LevelView)));
      return Unit;
    };
  }
  function LevelView$initCharacterQueue$lambda_0($receiver) {
    $receiver.right = 10.0;
    $receiver.top = 10.0;
    return Unit;
  }
  LevelView.prototype.initCharacterQueue_0 = function () {
    this.layout_ge8abi$(this.unaryPlus_b3a6qy$(hGroup(this, LevelView$initCharacterQueue$lambda(this))), LevelView$initCharacterQueue$lambda_0);
  };
  function LevelView$initTileViews$lambda$lambda(closure$row, closure$col, closure$newTile) {
    return function (it) {
      return it.copy_tgih01$(void 0, replaceAt(it.grid, closure$row, replaceAt(it.grid.get_za3lpa$(closure$row), closure$col, closure$newTile)));
    };
  }
  function LevelView$initTileViews$lambda(this$LevelView, closure$row, closure$col) {
    return function (newTile) {
      this$LevelView.currentLevel_0.change_ru8m0w$(LevelView$initTileViews$lambda$lambda(closure$row, closure$col, newTile));
      return Unit;
    };
  }
  function LevelView$initTileViews$lambda_0(this$LevelView) {
    return function (it) {
      for (var row = 0; row < 20; row++) {
        for (var col = 0; col < 20; col++) {
          this$LevelView.tileViews_0.get_za3lpa$(row).get_za3lpa$(col).data.value = it.getTile_vux9f0$(row, col);
        }
      }
      return Unit;
    };
  }
  LevelView.prototype.initTileViews_0 = function () {
    for (var row = 0; row < 20; row++) {
      for (var col = 0; col < 20; col++) {
        this.tileViews_0.get_za3lpa$(row).get_za3lpa$(col).data.bind_qlkmfe$(LevelView$initTileViews$lambda(this, row, col));
      }
    }
    this.currentLevel_0.bind_qlkmfe$(LevelView$initTileViews$lambda_0(this));
  };
  function LevelView$initCameraControls$lambda(this$LevelView) {
    return function (newWidth, newHeight, f) {
      this$LevelView.overviewCam_0.setViewport_dleff0$(newWidth, newHeight);
      this$LevelView.updateCam_0();
      return Unit;
    };
  }
  function LevelView$initCameraControls$lambda_0(this$LevelView) {
    return function (it) {
      this$LevelView.moveCamera_0(it.value);
      return Unit;
    };
  }
  function LevelView$initCameraControls$lambda_1(this$LevelView) {
    return function (it) {
      this$LevelView.moveCamera_0(void 0, it.value);
      return Unit;
    };
  }
  function LevelView$initCameraControls$lambda_2(this$LevelView, closure$startZoom) {
    return function (it) {
      closure$startZoom.v = this$LevelView.stateData_0.value.camera.zoom;
      return Unit;
    };
  }
  function LevelView$initCameraControls$lambda_3(closure$startZoom, this$LevelView) {
    return function (it) {
      this$LevelView.zoomCamera_0(it.startDistance * closure$startZoom.v / it.distance);
      return Unit;
    };
  }
  function LevelView$initCameraControls$lambda_4(this$LevelView) {
    return function (it) {
      if (!this$LevelView.hScroll_0.changed.isDispatching && !this$LevelView.vScroll_0.changed.isDispatching) {
        this$LevelView.hScroll_0.value = it.camera.x;
        this$LevelView.vScroll_0.value = it.camera.y;
      }
      this$LevelView.updateCam_0();
      return Unit;
    };
  }
  function LevelView$initCameraControls$lambda_5(this$LevelView) {
    return function (it) {
      this$LevelView.tossScroller_0.stop();
      if (it.deltaY !== 0.0) {
        this$LevelView.zoomCamera_0(this$LevelView.stateData_0.value.camera.zoom * (it.deltaY > 0.0 ? 1.2 : 0.8));
      }
      return Unit;
    };
  }
  LevelView.prototype.initCameraControls_0 = function () {
    this.window.sizeChanged.add_trkh7z$(LevelView$initCameraControls$lambda(this));
    this.hScroll_0.min = -this.stageH_0;
    this.vScroll_0.min = -this.stageW_0 * 0.5;
    this.hScroll_0.max = this.stageW_0;
    this.vScroll_0.max = this.stageH_0 * 0.5;
    this.hScroll_0.changed.add_trkh7z$(LevelView$initCameraControls$lambda_0(this));
    this.vScroll_0.changed.add_trkh7z$(LevelView$initCameraControls$lambda_1(this));
    var startZoom = {v: 0.0};
    pinchStart(this).add_trkh7z$(LevelView$initCameraControls$lambda_2(this, startZoom));
    pinch(this).add_trkh7z$(LevelView$initCameraControls$lambda_3(startZoom, this));
    this.stateData_0.bind_qlkmfe$(LevelView$initCameraControls$lambda_4(this));
    wheel(this).add_trkh7z$(LevelView$initCameraControls$lambda_5(this));
  };
  function LevelView$initStageView$lambda$lambda$lambda$lambda(this$) {
    return function (it) {
      if (it.ctrlKey && it.keyCode === 68) {
        this$.visible = !this$.visible;
      }
      return Unit;
    };
  }
  function LevelView$initStageView$lambda$lambda$lambda$lambda$lambda($receiver) {
    drawing.MeshBuilderStyle.lineStyle.colorTint = Color.Companion.RED;
    for (var row = 0; row < 20; row++) {
      var ptA = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2(0.0, row * LevelView$Companion_getInstance().TILE_SIZE));
      var ptB = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2(20 * LevelView$Companion_getInstance().TILE_SIZE, row * LevelView$Companion_getInstance().TILE_SIZE));
      line($receiver, ptA.x, ptA.y, ptB.x, ptB.y);
    }
    for (var col = 0; col < 20; col++) {
      var ptA_0 = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2(col * LevelView$Companion_getInstance().TILE_SIZE, 0.0));
      var ptB_0 = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2(col * LevelView$Companion_getInstance().TILE_SIZE, 20 * LevelView$Companion_getInstance().TILE_SIZE));
      line($receiver, ptA_0.x, ptA_0.y, ptB_0.x, ptB_0.y);
    }
    return Unit;
  }
  function LevelView$initStageView$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.buildMesh_dmwms7$(LevelView$initStageView$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function LevelView$initStageView$lambda$lambda$lambda($receiver) {
    $receiver.visible = false;
    keyDown(get_stage($receiver)).add_trkh7z$(LevelView$initStageView$lambda$lambda$lambda$lambda($receiver));
    $receiver.mesh = staticMesh($receiver, LevelView$initStageView$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function LevelView$initStageView$lambda$lambda(this$LevelView) {
    return function ($receiver) {
      for (var row = 0; row < 20; row++) {
        for (var col = 0; col < 20; col++) {
          $receiver.unaryPlus_b3a6qy$(this$LevelView.tileViews_0.get_za3lpa$(row).get_za3lpa$(col));
          moveTo(this$LevelView.tileViews_0.get_za3lpa$(row).get_za3lpa$(col), Isometric_getInstance().twoDToIso_dleff0$(col * LevelView$Companion_getInstance().TILE_SIZE, row * LevelView$Companion_getInstance().TILE_SIZE));
        }
      }
      $receiver.unaryPlus_b3a6qy$(staticMeshC($receiver, LevelView$initStageView$lambda$lambda$lambda));
      return Unit;
    };
  }
  LevelView.prototype.initStageView_0 = function () {
    var $receiver = this.gameStage_0;
    $receiver.cameraOverride = this.overviewCam_0;
    var origin = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2(10 * LevelView$Companion_getInstance().TILE_SIZE, 10 * LevelView$Companion_getInstance().TILE_SIZE));
    $receiver.setOrigin_y2kzbl$(origin.x, origin.y);
    $receiver.unaryPlus_b3a6qy$(container($receiver, LevelView$initStageView$lambda$lambda(this)));
    this.unaryPlus_b3a6qy$($receiver);
  };
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
      return it.copy_wrz2sm$(it.camera.copy_y2kzbl$(closure$x, closure$y, closure$zoom));
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
      return it.copy_wrz2sm$(cam.copy_y2kzbl$(void 0, void 0, newZoom));
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
      return it.copy_wrz2sm$(closure$start.lerp_browbj$(closure$end, closure$alpha));
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
    var end = new CameraVo(x, y, clamp_73gzaq$result);
    driveTween(this, createPropertyTween(this, 'camera', duration, ease, LevelView$tweenCamera$lambda, LevelView$tweenCamera$lambda_0(this, start, end), 1.0, delay));
  };
  LevelView.prototype.resetLevel = function () {
    this.currentLevel_0.value = this.originalData.value;
  };
  function LevelView$Companion() {
    LevelView$Companion_instance = this;
    this.TILE_SIZE = 64.0;
  }
  LevelView$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var LevelView$Companion_instance = null;
  function LevelView$Companion_getInstance() {
    if (LevelView$Companion_instance === null) {
      new LevelView$Companion();
    }
    return LevelView$Companion_instance;
  }
  function LevelView_init$lambda(this$LevelView) {
    return function (it) {
      this$LevelView.currentLevel_0.value = it;
      return Unit;
    };
  }
  LevelView.$metadata$ = {kind: Kind_CLASS, simpleName: 'LevelView', interfaces: [CanvasLayoutContainer]};
  function UiControlsStateVo(camera) {
    if (camera === void 0)
      camera = new CameraVo();
    this.camera = camera;
  }
  UiControlsStateVo.$metadata$ = {kind: Kind_CLASS, simpleName: 'UiControlsStateVo', interfaces: []};
  UiControlsStateVo.prototype.component1 = function () {
    return this.camera;
  };
  UiControlsStateVo.prototype.copy_wrz2sm$ = function (camera) {
    return new UiControlsStateVo(camera === void 0 ? this.camera : camera);
  };
  UiControlsStateVo.prototype.toString = function () {
    return 'UiControlsStateVo(camera=' + Kotlin.toString(this.camera) + ')';
  };
  UiControlsStateVo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.camera) | 0;
    return result;
  };
  UiControlsStateVo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.camera, other.camera))));
  };
  function CameraVo(x, y, zoom) {
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
  CameraVo.prototype.lerp_browbj$ = function (other, alpha) {
    return new CameraVo((other.x - this.x) * alpha + this.x, (other.y - this.y) * alpha + this.y, (other.zoom - this.zoom) * alpha + this.zoom);
  };
  CameraVo.$metadata$ = {kind: Kind_CLASS, simpleName: 'CameraVo', interfaces: []};
  CameraVo.prototype.component1 = function () {
    return this.x;
  };
  CameraVo.prototype.component2 = function () {
    return this.y;
  };
  CameraVo.prototype.component3 = function () {
    return this.zoom;
  };
  CameraVo.prototype.copy_y2kzbl$ = function (x, y, zoom) {
    return new CameraVo(x === void 0 ? this.x : x, y === void 0 ? this.y : y, zoom === void 0 ? this.zoom : zoom);
  };
  CameraVo.prototype.toString = function () {
    return 'CameraVo(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', zoom=' + Kotlin.toString(this.zoom)) + ')';
  };
  CameraVo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.zoom) | 0;
    return result;
  };
  CameraVo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.zoom, other.zoom)))));
  };
  function GameCharacter(type, x, y) {
    if (x === void 0)
      x = -1;
    if (y === void 0)
      y = -1;
    this.type = type;
    this.x = x;
    this.y = y;
  }
  GameCharacter.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameCharacter', interfaces: []};
  GameCharacter.prototype.component1 = function () {
    return this.type;
  };
  GameCharacter.prototype.component2 = function () {
    return this.x;
  };
  GameCharacter.prototype.component3 = function () {
    return this.y;
  };
  GameCharacter.prototype.copy_8a1t74$ = function (type, x, y) {
    return new GameCharacter(type === void 0 ? this.type : type, x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  GameCharacter.prototype.toString = function () {
    return 'GameCharacter(type=' + Kotlin.toString(this.type) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  GameCharacter.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  GameCharacter.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function GameCharacterType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameCharacterType_initFields() {
    GameCharacterType_initFields = function () {
    };
    GameCharacterType$MUSICIAN_instance = new GameCharacterType('MUSICIAN', 0);
    GameCharacterType$GRANDMA_instance = new GameCharacterType('GRANDMA', 1);
    GameCharacterType$ARTIST_instance = new GameCharacterType('ARTIST', 2);
    GameCharacterType$UNKNOWN_instance = new GameCharacterType('UNKNOWN', 3);
    GameCharacterType$Companion_getInstance();
  }
  var GameCharacterType$MUSICIAN_instance;
  function GameCharacterType$MUSICIAN_getInstance() {
    GameCharacterType_initFields();
    return GameCharacterType$MUSICIAN_instance;
  }
  var GameCharacterType$GRANDMA_instance;
  function GameCharacterType$GRANDMA_getInstance() {
    GameCharacterType_initFields();
    return GameCharacterType$GRANDMA_instance;
  }
  var GameCharacterType$ARTIST_instance;
  function GameCharacterType$ARTIST_getInstance() {
    GameCharacterType_initFields();
    return GameCharacterType$ARTIST_instance;
  }
  var GameCharacterType$UNKNOWN_instance;
  function GameCharacterType$UNKNOWN_getInstance() {
    GameCharacterType_initFields();
    return GameCharacterType$UNKNOWN_instance;
  }
  function GameCharacterType$Companion() {
    GameCharacterType$Companion_instance = this;
  }
  GameCharacterType$Companion.prototype.fromLetter_s8itvh$ = function (char) {
    var tmp$;
    switch (char) {
      case 71:
        tmp$ = GameCharacterType$GRANDMA_getInstance();
        break;
      case 65:
        tmp$ = GameCharacterType$ARTIST_getInstance();
        break;
      case 77:
        tmp$ = GameCharacterType$MUSICIAN_getInstance();
        break;
      default:tmp$ = GameCharacterType$UNKNOWN_getInstance();
        break;
    }
    return tmp$;
  };
  GameCharacterType$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var GameCharacterType$Companion_instance = null;
  function GameCharacterType$Companion_getInstance() {
    GameCharacterType_initFields();
    if (GameCharacterType$Companion_instance === null) {
      new GameCharacterType$Companion();
    }
    return GameCharacterType$Companion_instance;
  }
  GameCharacterType.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameCharacterType', interfaces: [Enum]};
  function GameCharacterType$values() {
    return [GameCharacterType$MUSICIAN_getInstance(), GameCharacterType$GRANDMA_getInstance(), GameCharacterType$ARTIST_getInstance(), GameCharacterType$UNKNOWN_getInstance()];
  }
  GameCharacterType.values = GameCharacterType$values;
  function GameCharacterType$valueOf(name) {
    switch (name) {
      case 'MUSICIAN':
        return GameCharacterType$MUSICIAN_getInstance();
      case 'GRANDMA':
        return GameCharacterType$GRANDMA_getInstance();
      case 'ARTIST':
        return GameCharacterType$ARTIST_getInstance();
      case 'UNKNOWN':
        return GameCharacterType$UNKNOWN_getInstance();
      default:throwISE('No enum constant ggj19.model.GameCharacterType.' + name);
    }
  }
  GameCharacterType.valueOf_61zpoe$ = GameCharacterType$valueOf;
  function GameLevel(pendingCharacters, grid, placedCharacters) {
    GameLevel$Companion_getInstance();
    if (pendingCharacters === void 0)
      pendingCharacters = emptyList();
    if (grid === void 0) {
      var tmp$;
      var a = ArrayList_init_0(20);
      tmp$ = 20 - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        var tmp$_0 = a.add_11rb$;
        var tmp$_1;
        var a_0 = ArrayList_init_0(20);
        tmp$_1 = 20 - 1 | 0;
        for (var i_0 = 0; i_0 <= tmp$_1; i_0++) {
          a_0.add_11rb$(new Tile());
        }
        tmp$_0.call(a, a_0);
      }
      grid = a;
    }
    if (placedCharacters === void 0)
      placedCharacters = emptyList();
    this.pendingCharacters = pendingCharacters;
    this.grid = grid;
    this.placedCharacters = placedCharacters;
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
    return this.pendingCharacters;
  };
  GameLevel.prototype.component2 = function () {
    return this.grid;
  };
  GameLevel.prototype.component3 = function () {
    return this.placedCharacters;
  };
  GameLevel.prototype.copy_tgih01$ = function (pendingCharacters, grid, placedCharacters) {
    return new GameLevel(pendingCharacters === void 0 ? this.pendingCharacters : pendingCharacters, grid === void 0 ? this.grid : grid, placedCharacters === void 0 ? this.placedCharacters : placedCharacters);
  };
  GameLevel.prototype.toString = function () {
    return 'GameLevel(pendingCharacters=' + Kotlin.toString(this.pendingCharacters) + (', grid=' + Kotlin.toString(this.grid)) + (', placedCharacters=' + Kotlin.toString(this.placedCharacters)) + ')';
  };
  GameLevel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pendingCharacters) | 0;
    result = result * 31 + Kotlin.hashCode(this.grid) | 0;
    result = result * 31 + Kotlin.hashCode(this.placedCharacters) | 0;
    return result;
  };
  GameLevel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pendingCharacters, other.pendingCharacters) && Kotlin.equals(this.grid, other.grid) && Kotlin.equals(this.placedCharacters, other.placedCharacters)))));
  };
  var emptyLevel;
  function Tile(roomType) {
    if (roomType === void 0)
      roomType = RoomType$NONE_getInstance();
    this.roomType = roomType;
  }
  Tile.$metadata$ = {kind: Kind_CLASS, simpleName: 'Tile', interfaces: []};
  Tile.prototype.component1 = function () {
    return this.roomType;
  };
  Tile.prototype.copy_b54vna$ = function (roomType) {
    return new Tile(roomType === void 0 ? this.roomType : roomType);
  };
  Tile.prototype.toString = function () {
    return 'Tile(roomType=' + Kotlin.toString(this.roomType) + ')';
  };
  Tile.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.roomType) | 0;
    return result;
  };
  Tile.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.roomType, other.roomType))));
  };
  function RoomType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RoomType_initFields() {
    RoomType_initFields = function () {
    };
    RoomType$NONE_instance = new RoomType('NONE', 0);
    RoomType$STANDARD_instance = new RoomType('STANDARD', 1);
  }
  var RoomType$NONE_instance;
  function RoomType$NONE_getInstance() {
    RoomType_initFields();
    return RoomType$NONE_instance;
  }
  var RoomType$STANDARD_instance;
  function RoomType$STANDARD_getInstance() {
    RoomType_initFields();
    return RoomType$STANDARD_instance;
  }
  RoomType.$metadata$ = {kind: Kind_CLASS, simpleName: 'RoomType', interfaces: [Enum]};
  function RoomType$values() {
    return [RoomType$NONE_getInstance(), RoomType$STANDARD_getInstance()];
  }
  RoomType.values = RoomType$values;
  function RoomType$valueOf(name) {
    switch (name) {
      case 'NONE':
        return RoomType$NONE_getInstance();
      case 'STANDARD':
        return RoomType$STANDARD_getInstance();
      default:throwISE('No enum constant ggj19.model.RoomType.' + name);
    }
  }
  RoomType.valueOf_61zpoe$ = RoomType$valueOf;
  function Skin(stage) {
    BasicUiSkin.call(this, stage);
  }
  Skin.prototype.initTheme = function () {
    this.theme.textColor = new Color(1.0, 1.0, 1.0, 1.0);
  };
  Skin.$metadata$ = {kind: Kind_CLASS, simpleName: 'Skin', interfaces: [BasicUiSkin]};
  function TileView(owner) {
    ContainerImpl.call(this, owner);
    this.atlasPath_0 = 'assets/ggj.json';
    this.data = dataBinding(this, new Tile());
    this.atlas_0 = this.addChild_mxweac$(atlas(this, this.atlasPath_0, 'EmptyTile', TileView$atlas$lambda));
    this.data.bind_qlkmfe$(TileView_init$lambda(this));
  }
  function TileView$atlas$lambda($receiver) {
    $receiver.originY = 64.0;
    $receiver.originX = 128.0;
    $receiver.setScaling_y2kzbl$(0.5, 0.5);
    return Unit;
  }
  function TileView_init$lambda(this$TileView) {
    return function (it) {
      var tmp$;
      switch (it.roomType.name) {
        case 'NONE':
          tmp$ = 'EmptyRoom';
          break;
        case 'STANDARD':
          tmp$ = 'Room';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var region = tmp$;
      this$TileView.atlas_0.setRegion_puj7f4$(this$TileView.atlasPath_0, region);
      return Unit;
    };
  }
  TileView.$metadata$ = {kind: Kind_CLASS, simpleName: 'TileView', interfaces: [ContainerImpl]};
  function Isometric() {
    Isometric_instance = this;
  }
  Isometric.prototype.isoToTwoD_dleff0$ = function (x, y) {
    return this.isoToTwoD_9wm29l$(new Vector2(x, y));
  };
  Isometric.prototype.isoToTwoD_9wm29l$ = function (coord) {
    return coord.set_dleff0$((2.0 * coord.y + coord.x) / 2.0, (2.0 * coord.y - coord.x) / 2.0);
  };
  Isometric.prototype.twoDToIso_dleff0$ = function (x, y) {
    return this.twoDToIso_9wm29l$(new Vector2(x, y));
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
  package$ggj19.parseGameData_61zpoe$ = parseGameData;
  Object.defineProperty(LevelView, 'Companion', {get: LevelView$Companion_getInstance});
  package$ggj19.LevelView = LevelView;
  package$ggj19.UiControlsStateVo = UiControlsStateVo;
  package$ggj19.CameraVo = CameraVo;
  var package$model = package$ggj19.model || (package$ggj19.model = {});
  package$model.GameCharacter = GameCharacter;
  Object.defineProperty(GameCharacterType, 'MUSICIAN', {get: GameCharacterType$MUSICIAN_getInstance});
  Object.defineProperty(GameCharacterType, 'GRANDMA', {get: GameCharacterType$GRANDMA_getInstance});
  Object.defineProperty(GameCharacterType, 'ARTIST', {get: GameCharacterType$ARTIST_getInstance});
  Object.defineProperty(GameCharacterType, 'UNKNOWN', {get: GameCharacterType$UNKNOWN_getInstance});
  Object.defineProperty(GameCharacterType, 'Companion', {get: GameCharacterType$Companion_getInstance});
  package$model.GameCharacterType = GameCharacterType;
  Object.defineProperty(GameLevel, 'Companion', {get: GameLevel$Companion_getInstance});
  package$model.GameLevel = GameLevel;
  package$model.Tile = Tile;
  Object.defineProperty(RoomType, 'NONE', {get: RoomType$NONE_getInstance});
  Object.defineProperty(RoomType, 'STANDARD', {get: RoomType$STANDARD_getInstance});
  package$model.RoomType = RoomType;
  package$ggj19.Skin = Skin;
  package$ggj19.TileView = TileView;
  var package$util = package$ggj19.util || (package$ggj19.util = {});
  Object.defineProperty(package$util, 'Isometric', {get: Isometric_getInstance});
  config = new AppConfig(void 0, void 0, void 0, void 0, 60, void 0, void 0, new WindowConfig('GGJ19', void 0, void 0, new Color(0.2, 0.2, 0.2, 1.0)), new GlConfig(true));
  emptyLevel = new GameLevel();
  return _;
}));

//# sourceMappingURL=GGJ19Core.js.map
function alwaysTrue() { return true; }