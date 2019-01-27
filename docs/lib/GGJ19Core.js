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
  var StackLayoutContainer = $module$AcornUiCore.com.acornui.component.StackLayoutContainer;
  var dataBinding = $module$AcornUiCore.com.acornui.core.observe.dataBinding_7pofm6$;
  var image = $module$AcornUiCore.com.acornui.component.image_e3xjfr$;
  var Unit = Kotlin.kotlin.Unit;
  var unboxChar = Kotlin.unboxChar;
  var contentsAtlas = $module$AcornUiCore.com.acornui.component.contentsAtlas_7bypn$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ContainerImpl = $module$AcornUiCore.com.acornui.component.ContainerImpl;
  var atlas = $module$AcornUiCore.com.acornui.component.atlas_r9djik$;
  var cursor = $module$AcornUiCore.com.acornui.core.cursor;
  var cursor_0 = $module$AcornUiCore.com.acornui.core.cursor.cursor_8kxuli$;
  var Vector2 = $module$AcornUtils.com.acornui.math.Vector2;
  var moveTo = $module$AcornUiCore.com.acornui.component.layout.moveTo_jveujf$;
  var replaceAt = $module$AcornUtils.com.acornui.collection.replaceAt_g8jm4q$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals = Kotlin.equals;
  var recycle = $module$AcornUiCore.com.acornui.core.cache.recycle_xjf92d$;
  var get_stage = $module$AcornUiCore.com.acornui.component.get_stage_xd4dkp$;
  var keyDown = $module$AcornUiCore.com.acornui.core.input.keyDown_w26x3n$;
  var drawing = $module$AcornUiCore.com.acornui.component.drawing;
  var line = $module$AcornUiCore.com.acornui.component.drawing.line_5nybxc$;
  var staticMesh = $module$AcornUiCore.com.acornui.component.drawing.staticMesh_mkeht6$;
  var staticMeshC = $module$AcornUiCore.com.acornui.component.drawing.staticMeshC_ig2bzk$;
  var onTick = $module$AcornUiCore.com.acornui.core.time.onTick_1ilr4g$;
  var replace = $module$AcornUtils.com.acornui.collection.replace_3odih2$;
  var or = $module$AcornUiCore.com.acornui.core.observe.or_x919w3$;
  var InteractivityMode = $module$AcornUiCore.com.acornui.component.InteractivityMode;
  var bind = $module$AcornUtils.com.acornui.signal.bind_3tpvqv$;
  var dragStart = $module$AcornUiCore.com.acornui.core.input.interaction.dragStart_jz45q0$;
  var dragEnd = $module$AcornUiCore.com.acornui.core.input.interaction.dragEnd_jz45q0$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var numberToInt = Kotlin.numberToInt;
  var ElementContainerImpl = $module$AcornUiCore.com.acornui.component.ElementContainerImpl;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var CanvasLayoutContainer = $module$AcornUiCore.com.acornui.component.layout.algorithm.CanvasLayoutContainer;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var AssetType = $module$AcornUiCore.com.acornui.core.asset.AssetType;
  var load = $module$AcornUiCore.com.acornui.core.asset.load_k5bt3m$;
  var then = $module$AcornUtils.com.acornui.async.then_7jcrga$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var text = $module$AcornUiCore.com.acornui.component.text.text_7i1swk$;
  var NavBindable = $module$AcornUiCore.com.acornui.core.nav.NavBindable;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var poll = $module$AcornUtils.com.acornui.collection.poll_vvxzk3$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var ButtonState = $module$AcornUiCore.com.acornui.component.ButtonState;
  var atlas_0 = $module$AcornUiCore.com.acornui.component.atlas_8684q0$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var iconButton = $module$AcornUiCore.com.acornui.component.iconButton_hzc8f9$;
  var core = $module$AcornUiCore.com.acornui.core;
  var HAlign = $module$AcornUiCore.com.acornui.component.layout.HAlign;
  var rect = $module$AcornUiCore.com.acornui.component.rect_8hpnyb$;
  var Pad_init = $module$AcornUtils.com.acornui.math.Pad_init_mx4ult$;
  var spacer = $module$AcornUiCore.com.acornui.component.layout.spacer_4yhnsi$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var hGroup = $module$AcornUiCore.com.acornui.component.layout.algorithm.hGroup_aiug52$;
  var panel = $module$AcornUiCore.com.acornui.component.panel_4k1mq$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toString = Kotlin.toString;
  var stack = $module$AcornUiCore.com.acornui.component.stack_339xz$;
  var vGroup = $module$AcornUiCore.com.acornui.component.layout.algorithm.vGroup_hlverc$;
  var pinchStart = $module$AcornUiCore.com.acornui.core.input.interaction.pinchStart_erfg7f$;
  var pinch = $module$AcornUiCore.com.acornui.core.input.interaction.pinch_erfg7f$;
  var wheel = $module$AcornUiCore.com.acornui.core.input.wheel_w26x3n$;
  var tween = $module$AcornUiCore.com.acornui.core.tween;
  var math = $module$AcornUtils.com.acornui.math;
  var createPropertyTween = $module$AcornUiCore.com.acornui.core.tween.createPropertyTween_abp5vu$;
  var driveTween = $module$AcornUiCore.com.acornui.core.tween.driveTween_asoma$;
  var orthographicCamera = $module$AcornUiCore.com.acornui.core.graphic.orthographicCamera_fsqvpo$;
  var dragAttachment = $module$AcornUiCore.com.acornui.core.input.interaction.dragAttachment_rt6gw7$;
  var TossScroller = $module$AcornUiCore.com.acornui.component.scroll.TossScroller;
  var own = $module$AcornUiCore.com.acornui.core.di.own_hwf7iz$;
  var ScrollModelImpl = $module$AcornUiCore.com.acornui.component.scroll.ScrollModelImpl;
  var TossScrollModelBinding = $module$AcornUiCore.com.acornui.component.scroll.TossScrollModelBinding;
  var Theme = $module$AcornUiCore.com.acornui.skins.Theme;
  var inject = $module$AcornUiCore.com.acornui.core.di.inject_y3a68v$;
  var Persistence = $module$AcornUiCore.com.acornui.core.persistance.Persistence;
  var logging = $module$AcornUtils.com.acornui.logging;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var toBoxedChar = Kotlin.toBoxedChar;
  var throwISE = Kotlin.throwISE;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var cachedGroup = $module$AcornUiCore.com.acornui.core.asset.cachedGroup_xd4dkp$;
  var loadFontFromAtlas = $module$AcornUiCore.com.acornui.component.text.loadFontFromAtlas_itrc35$;
  var charStyle = $module$AcornUiCore.com.acornui.component.text.charStyle_8j5cku$;
  var addStyleRule = $module$AcornUiCore.com.acornui.component.style.addStyleRule_h9ypmx$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$AcornUtils.com.acornui.async.launch_g2bo5h$;
  var BasicUiSkin = $module$AcornUiCore.com.acornui.skins.BasicUiSkin;
  GameCharacterIconView.prototype = Object.create(StackLayoutContainer.prototype);
  GameCharacterIconView.prototype.constructor = GameCharacterIconView;
  GameCharacterView.prototype = Object.create(ContainerImpl.prototype);
  GameCharacterView.prototype.constructor = GameCharacterView;
  GameStage.prototype = Object.create(ElementContainerImpl.prototype);
  GameStage.prototype.constructor = GameStage;
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
  function GameCharacterIconView(owner) {
    StackLayoutContainer.call(this, owner);
    this.atlasPath_0 = 'assets/ggj.json';
    this.data = dataBinding(this, null);
    this.icon_0 = this.layout_ge8abi$(this.unaryPlus_b3a6qy$(image(this)), GameCharacterIconView$icon$lambda);
    this.data.bind_qlkmfe$(GameCharacterIconView_init$lambda(this));
  }
  function GameCharacterIconView$icon$lambda($receiver) {
    $receiver.fill();
    return Unit;
  }
  function GameCharacterIconView_init$lambda(this$GameCharacterIconView) {
    return function (it) {
      if (it != null) {
        this$GameCharacterIconView.visible = true;
        contentsAtlas(this$GameCharacterIconView.icon_0, this$GameCharacterIconView.atlasPath_0, String.fromCharCode(unboxChar(it.type.char)));
      }
       else {
        this$GameCharacterIconView.visible = false;
      }
      return Unit;
    };
  }
  GameCharacterIconView.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameCharacterIconView', interfaces: [StackLayoutContainer]};
  function GameCharacterView(owner, initialCharacter) {
    ContainerImpl.call(this, owner);
    this.atlasPath_0 = 'assets/ggj.json';
    this.data = dataBinding(this, initialCharacter);
    this.icon_0 = this.addChild_mxweac$(atlas(this, GameCharacterView$icon$lambda));
    cursor_0(this, cursor.StandardCursors.HAND);
    this.data.bind_qlkmfe$(GameCharacterView_init$lambda(this));
  }
  function GameCharacterView$icon$lambda($receiver) {
    $receiver.setOrigin_y2kzbl$(32.0, 32.0);
    return Unit;
  }
  function GameCharacterView_init$lambda(this$GameCharacterView) {
    return function (it) {
      moveTo(this$GameCharacterView, Isometric_getInstance().twoDToIso_9wm29l$(new Vector2((it.col + 0.5) * TileView$Companion_getInstance().TILE_SIZE, (it.row + 0.5) * TileView$Companion_getInstance().TILE_SIZE)));
      this$GameCharacterView.icon_0.setRegion_puj7f4$(this$GameCharacterView.atlasPath_0, String.fromCharCode(unboxChar(it.type.char)));
      return Unit;
    };
  }
  GameCharacterView.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameCharacterView', interfaces: [ContainerImpl]};
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function GameStage(owner, currentLevel, controlsState) {
    ElementContainerImpl.call(this, owner);
    this.currentLevel = currentLevel;
    this.controlsState = controlsState;
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
    this.characterViews_0 = ArrayList_init();
    this.dragView_0 = new GameCharacterView(owner, emptyCharacter);
    this.interactivityMode = InteractivityMode.ALWAYS;
    var origin = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2(10 * TileView$Companion_getInstance().TILE_SIZE, 10 * TileView$Companion_getInstance().TILE_SIZE));
    this.setOrigin_y2kzbl$(origin.x, origin.y);
    this.initTileViews_0();
    this.initCharacters_0();
    this.initDebugLines_0();
    this.initDragView_0();
    this.tick_0 = null;
    this.tmpGridP_0 = new GridPosition();
    this.tmpVec2_0 = new Vector2();
  }
  function GameStage$initTileViews$lambda$lambda(closure$row, closure$col, closure$newTile) {
    return function (it) {
      return it.copy_5ccj1q$(void 0, replaceAt(it.grid, closure$row, replaceAt(it.grid.get_za3lpa$(closure$row), closure$col, closure$newTile)));
    };
  }
  function GameStage$initTileViews$lambda(this$GameStage, closure$row, closure$col) {
    return function (newTile) {
      this$GameStage.currentLevel.change_ru8m0w$(GameStage$initTileViews$lambda$lambda(closure$row, closure$col, newTile));
      return Unit;
    };
  }
  function GameStage$initTileViews$lambda_0(this$GameStage) {
    return function (it) {
      for (var row = 0; row < 20; row++) {
        for (var col = 0; col < 20; col++) {
          this$GameStage.tileViews_0.get_za3lpa$(row).get_za3lpa$(col).data.value = ensureNotNull(it.getTile_vux9f0$(row, col));
        }
      }
      return Unit;
    };
  }
  GameStage.prototype.initTileViews_0 = function () {
    for (var row = 0; row < 20; row++) {
      for (var col = 0; col < 20; col++) {
        this.unaryPlus_b3a6qy$(this.tileViews_0.get_za3lpa$(row).get_za3lpa$(col));
        moveTo(this.tileViews_0.get_za3lpa$(row).get_za3lpa$(col), Isometric_getInstance().twoDToIso_dleff0$(col * TileView$Companion_getInstance().TILE_SIZE, row * TileView$Companion_getInstance().TILE_SIZE));
      }
    }
    for (var row_0 = 0; row_0 < 20; row_0++) {
      for (var col_0 = 0; col_0 < 20; col_0++) {
        this.tileViews_0.get_za3lpa$(row_0).get_za3lpa$(col_0).data.bind_qlkmfe$(GameStage$initTileViews$lambda(this, row_0, col_0));
      }
    }
    this.currentLevel.bind_qlkmfe$(GameStage$initTileViews$lambda_0(this));
  };
  function GameStage$initCharacters$lambda$lambda(this$GameStage) {
    return function (item, index) {
      return this$GameStage.unaryPlus_b3a6qy$(this$GameStage.createGameCharacterView_0(item));
    };
  }
  function GameStage$initCharacters$lambda$lambda_0(element, item, index) {
    element.data.value = item;
    return Unit;
  }
  function GameStage$initCharacters$lambda$lambda_1(element) {
    element.dispose();
    return Unit;
  }
  function GameStage$initCharacters$lambda$lambda_2(element) {
    return element.data.value;
  }
  function GameStage$initCharacters$lambda$lambda_3(o1, o2) {
    return equals(o1 != null ? o1.id : null, o2 != null ? o2.id : null);
  }
  function GameStage$initCharacters$lambda(this$GameStage) {
    return function (newData) {
      var $receiver = newData.characters;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.isPlaced)
          destination.add_11rb$(element);
      }
      var placedCharacters = destination;
      recycle(placedCharacters, this$GameStage.characterViews_0, GameStage$initCharacters$lambda$lambda(this$GameStage), GameStage$initCharacters$lambda$lambda_0, GameStage$initCharacters$lambda$lambda_1, GameStage$initCharacters$lambda$lambda_2, GameStage$initCharacters$lambda$lambda_3);
      return Unit;
    };
  }
  GameStage.prototype.initCharacters_0 = function () {
    this.currentLevel.bind_qlkmfe$(GameStage$initCharacters$lambda(this));
  };
  function GameStage$initDebugLines$lambda$lambda(this$) {
    return function (it) {
      if (it.ctrlKey && it.keyCode === 68) {
        this$.visible = !this$.visible;
      }
      return Unit;
    };
  }
  function GameStage$initDebugLines$lambda$lambda$lambda($receiver) {
    drawing.MeshBuilderStyle.lineStyle.colorTint = Color.Companion.RED;
    for (var row = 0; row <= 20; row++) {
      var ptA = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2(0.0, row * TileView$Companion_getInstance().TILE_SIZE));
      var ptB = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2(20 * TileView$Companion_getInstance().TILE_SIZE, row * TileView$Companion_getInstance().TILE_SIZE));
      line($receiver, ptA.x, ptA.y, ptB.x, ptB.y);
    }
    for (var col = 0; col <= 20; col++) {
      var ptA_0 = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2(col * TileView$Companion_getInstance().TILE_SIZE, 0.0));
      var ptB_0 = Isometric_getInstance().twoDToIso_9wm29l$(new Vector2(col * TileView$Companion_getInstance().TILE_SIZE, 20 * TileView$Companion_getInstance().TILE_SIZE));
      line($receiver, ptA_0.x, ptA_0.y, ptB_0.x, ptB_0.y);
    }
    return Unit;
  }
  function GameStage$initDebugLines$lambda$lambda_0($receiver) {
    $receiver.buildMesh_dmwms7$(GameStage$initDebugLines$lambda$lambda$lambda);
    return Unit;
  }
  function GameStage$initDebugLines$lambda($receiver) {
    $receiver.visible = false;
    keyDown(get_stage($receiver)).add_trkh7z$(GameStage$initDebugLines$lambda$lambda($receiver));
    $receiver.mesh = staticMesh($receiver, GameStage$initDebugLines$lambda$lambda_0);
    return Unit;
  }
  GameStage.prototype.initDebugLines_0 = function () {
    this.unaryPlus_b3a6qy$(staticMeshC(this, GameStage$initDebugLines$lambda));
  };
  function GameStage$initDragView$lambda$lambda$lambda(this$GameStage) {
    return function (it) {
      this$GameStage.mousePosition_9wm29l$(this$GameStage.tmpVec2_0);
      this$GameStage.dragView_0.setPosition_y2kzbl$(this$GameStage.tmpVec2_0.x, this$GameStage.tmpVec2_0.y);
      return Unit;
    };
  }
  function GameStage$initDragView$lambda$lambda(this$, this$GameStage) {
    return function (it) {
      var tmp$, tmp$_0;
      this$.data.value = (tmp$ = it.dragging) != null ? tmp$ : emptyCharacter;
      var oldIsDragging = this$.visible;
      var newIsDragging = it.dragging != null;
      if (oldIsDragging !== newIsDragging) {
        this$.visible = newIsDragging;
        if (this$.visible) {
          if (this$GameStage.tick_0 == null) {
            this$GameStage.tick_0 = onTick(this$, GameStage$initDragView$lambda$lambda$lambda(this$GameStage));
          }
        }
         else {
          (tmp$_0 = this$GameStage.tick_0) != null ? (tmp$_0.dispose(), Unit) : null;
          this$GameStage.tick_0 = null;
        }
      }
      return Unit;
    };
  }
  GameStage.prototype.initDragView_0 = function () {
    var $receiver = this.dragView_0;
    this.controlsState.bind_qlkmfe$(GameStage$initDragView$lambda$lambda($receiver, this));
    this.unaryPlus_b3a6qy$($receiver);
  };
  function GameStage$createGameCharacterView$lambda$lambda$lambda(closure$old, closure$new) {
    return function (it) {
      return it.copy_5ccj1q$(replace(it.characters, closure$old, closure$new));
    };
  }
  function GameStage$createGameCharacterView$lambda$lambda(this$GameStage) {
    return function (old, new_0) {
      this$GameStage.currentLevel.change_ru8m0w$(GameStage$createGameCharacterView$lambda$lambda$lambda(old, new_0));
      return Unit;
    };
  }
  function GameStage$createGameCharacterView$lambda$lambda_0(this$GameStage, this$) {
    return function () {
      var isLocked = this$GameStage.currentLevel.value.isLocked_44icga$(this$.data.value);
      this$.interactivityMode = isLocked ? InteractivityMode.NONE : InteractivityMode.ALL;
      this$.colorTint = isLocked ? Color.Companion.GRAY : Color.Companion.WHITE;
      return Unit;
    };
  }
  function GameStage$createGameCharacterView$lambda$lambda$lambda_0(this$) {
    return function (it) {
      return it.copy_6sjg8m$(void 0, void 0, this$.data.value);
    };
  }
  function GameStage$createGameCharacterView$lambda$lambda_1(this$, this$GameStage) {
    return function (f) {
      this$.visible = false;
      this$GameStage.controlsState.change_ru8m0w$(GameStage$createGameCharacterView$lambda$lambda$lambda_0(this$));
      return Unit;
    };
  }
  function GameStage$createGameCharacterView$lambda$lambda$lambda_1(it) {
    return it.copy_6sjg8m$(void 0, void 0, null);
  }
  function GameStage$createGameCharacterView$lambda$lambda_2(this$, this$GameStage) {
    return function (f) {
      this$.visible = true;
      var gameCharacter = this$.data.value;
      placeCharacter(this$GameStage.currentLevel, gameCharacter, this$GameStage.canvasToGrid_ewdjp1$(this$GameStage.mouse.canvasX, this$GameStage.mouse.canvasY, new GridPosition()));
      this$GameStage.controlsState.change_ru8m0w$(GameStage$createGameCharacterView$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  GameStage.prototype.createGameCharacterView_0 = function (character) {
    var $receiver = new GameCharacterView(this, character);
    $receiver.setScaling_y2kzbl$(0.6, 0.6);
    $receiver.data.changed.add_trkh7z$(GameStage$createGameCharacterView$lambda$lambda(this));
    bind(or($receiver.data, this.currentLevel), GameStage$createGameCharacterView$lambda$lambda_0(this, $receiver));
    dragStart($receiver).add_trkh7z$(GameStage$createGameCharacterView$lambda$lambda_1($receiver, this));
    dragEnd($receiver).add_trkh7z$(GameStage$createGameCharacterView$lambda$lambda_2($receiver, this));
    return $receiver;
  };
  GameStage.prototype.getChildrenUnderPoint_88w43d$$default = function (canvasX, canvasY, onlyInteractive, returnAll, out, rayCache) {
    if (!this.visible || (onlyInteractive && this.inheritedInteractivityMode === InteractivityMode.NONE))
      return out;
    if (returnAll || out.isEmpty()) {
      this.canvasToGrid_ewdjp1$(canvasX, canvasY, this.tmpGridP_0);
      for (var i = get_lastIndex(this.characterViews_0); i >= 0; i--) {
        var characterView = this.characterViews_0.get_za3lpa$(i);
        if (!characterView.visible || (onlyInteractive && !characterView.interactivityEnabled))
          continue;
        var m = characterView.data.value;
        if (m.row === this.tmpGridP_0.row && m.col === this.tmpGridP_0.col) {
          out.add_11rb$(characterView);
        }
        if (!returnAll && !out.isEmpty())
          break;
      }
    }
    if ((returnAll || out.isEmpty()) && (!onlyInteractive || this.interactivityEnabled)) {
      out.add_11rb$(this);
    }
    return out;
  };
  GameStage.prototype.canvasToGrid_ewdjp1$ = function (canvasX, canvasY, out) {
    Isometric_getInstance().isoToTwoD_9wm29l$(this.canvasToLocal_9wm29l$(this.tmpVec2_0.set_dleff0$(canvasX, canvasY)));
    out.col = numberToInt(this.tmpVec2_0.x / TileView$Companion_getInstance().TILE_SIZE);
    out.row = numberToInt(this.tmpVec2_0.y / TileView$Companion_getInstance().TILE_SIZE);
    return out;
  };
  GameStage.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameStage', interfaces: [ElementContainerImpl]};
  function GGJ19(owner) {
    CanvasLayoutContainer.call(this, owner);
    this.atlasPath_0 = 'assets/ggj.json';
    this.levels_0 = dataBinding(this, listOf(new GameLevel()));
    this.currentLevel_0 = dataBinding(this, 0);
    (new Skin(get_stage(this))).apply();
    then(load(this, 'assets/levelData.txt', AssetType.Companion.TEXT), GGJ19_init$lambda(this));
    var $receiver = new LevelView(this);
    bind(or(this.levels_0, this.currentLevel_0), GGJ19_init$lambda$lambda(this, $receiver));
    var levelView = this.layout_ge8abi$(this.unaryPlus_b3a6qy$($receiver), GGJ19_init$lambda_0);
    bind(or(this.levels_0, this.currentLevel_0), GGJ19_init$lambda_1(this, levelView));
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
  GGJ19.$metadata$ = {kind: Kind_CLASS, simpleName: 'GGJ19', interfaces: [NavBindable, CanvasLayoutContainer]};
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
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
        var $receiver = poll(lines);
        var tmp$_3;
        var cols = split(trim(Kotlin.isCharSequence(tmp$_3 = $receiver) ? tmp$_3 : throwCCE()).toString(), [' ']);
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
        pendingCharacters.add_11rb$(new GameCharacter(void 0, GameCharacterType$Companion_getInstance().fromLetter_s8itvh$(queueChar.charCodeAt(0))));
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
    CanvasLayoutContainer.call(this, owner);
    this.controlsState_0 = dataBinding(this, new UiControlsStateVo());
    this.originalData = dataBinding(this, emptyLevel);
    this.currentLevel_0 = dataBinding(this, this.originalData.value);
    this.gameStage_0 = new GameStage(this, this.currentLevel_0, this.controlsState_0);
    this.overviewCam_0 = orthographicCamera(this, true);
    this.drag_0 = dragAttachment(this);
    this.tossScroller_0 = own(this, new TossScroller(this.gameStage_0, void 0, this.drag_0));
    this.hScroll_0 = own(this, new ScrollModelImpl());
    this.vScroll_0 = own(this, new ScrollModelImpl());
    this.tossScrollBinding_0 = own(this, new TossScrollModelBinding(this.tossScroller_0, this.hScroll_0, this.vScroll_0));
    this.padding_0 = 0.0;
    this.stageW_0 = TileView$Companion_getInstance().TILE_SIZE * 20 + this.padding_0 * 2.0;
    this.stageH_0 = TileView$Companion_getInstance().TILE_SIZE * 20 + this.padding_0 * 2.0;
    this.characterIcons_0 = ArrayList_init();
    this.mainMusic_0 = null;
    this.theme_0 = inject(this, Theme.Companion);
    this.atlasPath_0 = 'assets/ggj.json';
    this.persistence_0 = inject(this, Persistence.Companion);
    this.originalData.bind_qlkmfe$(LevelView_init$lambda(this));
    this.interactivityMode = InteractivityMode.ALWAYS;
    this.initCameraControls_0();
    this.initStageView_0();
    this.initCharacterQueue_0();
    this.initMusic_0();
    this.gridPosition_0 = new GridPosition();
  }
  function LevelView$initMusic$lambda$lambda(this$) {
    return function (it) {
      this$.toggled = !it.isMuted;
      return Unit;
    };
  }
  function LevelView$initMusic$lambda$lambda$lambda(this$) {
    return function (it) {
      return it.copy_6sjg8m$(!this$.toggled);
    };
  }
  function LevelView$initMusic$lambda$lambda_0(this$LevelView, this$) {
    return function (f) {
      this$LevelView.controlsState_0.change_ru8m0w$(LevelView$initMusic$lambda$lambda$lambda(this$));
      return Unit;
    };
  }
  function LevelView$initMusic$lambda(this$LevelView) {
    return function ($receiver) {
      $receiver.iconMap_wty2wd$(mapOf([to(ButtonState.UP, atlas_0($receiver, this$LevelView.theme_0.atlasPath, 'speaker-volume-control-mute')), to(ButtonState.TOGGLED_UP, atlas_0($receiver, this$LevelView.theme_0.atlasPath, 'speaker-volume'))]));
      $receiver.toggleOnClick = true;
      this$LevelView.controlsState_0.bind_qlkmfe$(LevelView$initMusic$lambda$lambda($receiver));
      $receiver.toggledChanged.add_trkh7z$(LevelView$initMusic$lambda$lambda_0(this$LevelView, $receiver));
      return Unit;
    };
  }
  function LevelView$initMusic$lambda_0($receiver) {
    $receiver.bottom = 5.0;
    $receiver.left = 5.0;
    return Unit;
  }
  function LevelView$initMusic$lambda_1(it) {
    return it.copy_6sjg8m$(false);
  }
  function LevelView$initMusic$lambda$lambda_1(this$LevelView) {
    return function (it) {
      it.loop = true;
      it.play();
      this$LevelView.mainMusic_0 = it;
      return Unit;
    };
  }
  function LevelView$initMusic$lambda_2(this$LevelView) {
    return function (it) {
      var tmp$, tmp$_0;
      if (it.isMuted) {
        (tmp$ = this$LevelView.mainMusic_0) != null ? (tmp$.stop(), Unit) : null;
        this$LevelView.persistence_0.setItem_puj7f4$('muted', 'true');
        this$LevelView.persistence_0.flush();
      }
       else {
        if (this$LevelView.mainMusic_0 == null) {
          then(load(this$LevelView, 'assets/music/background.mp3', AssetType.Companion.MUSIC), LevelView$initMusic$lambda$lambda_1(this$LevelView));
        }
        (tmp$_0 = this$LevelView.mainMusic_0) != null ? (tmp$_0.play(), Unit) : null;
        this$LevelView.persistence_0.setItem_puj7f4$('muted', 'false');
        this$LevelView.persistence_0.flush();
      }
      return Unit;
    };
  }
  LevelView.prototype.initMusic_0 = function () {
    this.layout_ge8abi$(this.unaryPlus_b3a6qy$(iconButton(this, LevelView$initMusic$lambda(this))), LevelView$initMusic$lambda_0);
    if (core.userInfo.isDesktop && !equals(this.persistence_0.getItem_61zpoe$('muted'), 'true')) {
      this.controlsState_0.change_ru8m0w$(LevelView$initMusic$lambda_1);
    }
    this.controlsState_0.bind_qlkmfe$(LevelView$initMusic$lambda_2(this));
  };
  function LevelView$initCharacterQueue$lambda$lambda$lambda$lambda($receiver) {
    $receiver.style.backgroundColor = new Color(0.0, 0.0, 0.0, 0.3);
    return Unit;
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda($receiver) {
    return rect($receiver, LevelView$initCharacterQueue$lambda$lambda$lambda$lambda);
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.widthPercent = 1.0;
    return Unit;
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda(this$) {
    return function (item, index) {
      var tmp$ = this$;
      var $receiver = new GameCharacterIconView(this$);
      $receiver.defaultWidth = 32.0;
      $receiver.defaultHeight = 32.0;
      return tmp$.unaryPlus_b3a6qy$($receiver);
    };
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_0(element, item, index) {
    element.data.value = item;
    return Unit;
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_1(element) {
    element.dispose();
    return Unit;
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_2(element) {
    return element.data.value;
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_3(o1, o2) {
    return true;
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda$lambda_1(closure$upNextLbl, this$LevelView, this$) {
    return function (newData) {
      var unlockedCharacters = newData.unlockedCharacters;
      if (!unlockedCharacters.isEmpty())
        unlockedCharacters = unlockedCharacters.subList_vux9f0$(1, unlockedCharacters.size);
      closure$upNextLbl.visible = !unlockedCharacters.isEmpty();
      recycle(reversed(unlockedCharacters), this$LevelView.characterIcons_0, LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda(this$), LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_0, LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_1, LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_2, LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_3);
      return Unit;
    };
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda_0(this$LevelView) {
    return function ($receiver) {
      $receiver.layout_ge8abi$($receiver.unaryPlus_b3a6qy$(spacer($receiver)), LevelView$initCharacterQueue$lambda$lambda$lambda$lambda_0);
      var upNextLbl = $receiver.unaryPlus_b3a6qy$(text($receiver, 'Up next:'));
      this$LevelView.currentLevel_0.bind_qlkmfe$(LevelView$initCharacterQueue$lambda$lambda$lambda$lambda_1(upNextLbl, this$LevelView, $receiver));
      return Unit;
    };
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda_1($receiver) {
    $receiver.widthPercent = 1.0;
    return Unit;
  }
  function LevelView$initCharacterQueue$lambda$lambda(this$LevelView) {
    return function ($receiver) {
      $receiver.interactivityMode = InteractivityMode.CHILDREN;
      $receiver.style.background = LevelView$initCharacterQueue$lambda$lambda$lambda;
      $receiver.style.padding = Pad_init(5.0);
      $receiver.layout_ge8abi$($receiver.unaryPlus_b3a6qy$(hGroup($receiver, LevelView$initCharacterQueue$lambda$lambda$lambda_0(this$LevelView))), LevelView$initCharacterQueue$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function LevelView$initCharacterQueue$lambda$lambda_0($receiver) {
    $receiver.widthPercent = 1.0;
    return Unit;
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda$lambda_2(this$LevelView, this$) {
    return function (f) {
      var $receiver = this$LevelView.currentLevel_0.value.characters;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!element.isPlaced) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      var firstUnplaced = firstOrNull$result;
      this$.data.value = firstUnplaced;
      return Unit;
    };
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_4(this$) {
    return function (it) {
      return it.copy_6sjg8m$(void 0, void 0, this$.data.value);
    };
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda$lambda_3(this$, this$LevelView) {
    return function (e) {
      this$.alpha = 0.2;
      println('Drag start gciv ' + e.currentTarget);
      this$LevelView.controlsState_0.change_ru8m0w$(LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_4(this$));
      return Unit;
    };
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_5(it) {
    return it.copy_6sjg8m$(void 0, void 0, null);
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda$lambda_4(this$, this$LevelView) {
    return function (f) {
      this$.alpha = 1.0;
      var gameCharacter = this$.data.value;
      println('Drag end ' + toString(gameCharacter));
      if (gameCharacter != null) {
        placeCharacter(this$LevelView.currentLevel_0, gameCharacter, this$LevelView.mouseGridPosition_0);
        this$LevelView.controlsState_0.change_ru8m0w$(LevelView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_5);
      }
      return Unit;
    };
  }
  function LevelView$initCharacterQueue$lambda$lambda$lambda_2($receiver) {
    $receiver.width = 64.0;
    $receiver.height = 64.0;
    $receiver.center();
    return Unit;
  }
  function LevelView$initCharacterQueue$lambda$lambda_1(this$LevelView) {
    return function ($receiver) {
      $receiver.interactivityMode = InteractivityMode.CHILDREN;
      $receiver.style.padding = Pad_init(5.0);
      $receiver.unaryPlus_b3a6qy$(atlas_0($receiver, this$LevelView.atlasPath_0, 'CurrentCharacterPresentationBg'));
      var $receiver_0 = new GameCharacterIconView($receiver);
      var this$LevelView_0 = this$LevelView;
      cursor_0($receiver_0, cursor.StandardCursors.HAND);
      this$LevelView_0.currentLevel_0.bind_qlkmfe$(LevelView$initCharacterQueue$lambda$lambda$lambda$lambda_2(this$LevelView_0, $receiver_0));
      dragStart($receiver_0).add_trkh7z$(LevelView$initCharacterQueue$lambda$lambda$lambda$lambda_3($receiver_0, this$LevelView_0));
      dragEnd($receiver_0).add_trkh7z$(LevelView$initCharacterQueue$lambda$lambda$lambda$lambda_4($receiver_0, this$LevelView_0));
      $receiver.layout_ge8abi$($receiver.unaryPlus_b3a6qy$($receiver_0), LevelView$initCharacterQueue$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function LevelView$initCharacterQueue$lambda$lambda_2($receiver) {
    $receiver.width = 106.0;
    $receiver.height = 106.0;
    return Unit;
  }
  function LevelView$initCharacterQueue$lambda(this$LevelView) {
    return function ($receiver) {
      $receiver.interactivityMode = InteractivityMode.CHILDREN;
      $receiver.style.gap = 0.0;
      $receiver.style.horizontalAlign = HAlign.RIGHT;
      $receiver.layout_ge8abi$($receiver.unaryPlus_b3a6qy$(panel($receiver, LevelView$initCharacterQueue$lambda$lambda(this$LevelView))), LevelView$initCharacterQueue$lambda$lambda_0);
      $receiver.layout_ge8abi$($receiver.unaryPlus_b3a6qy$(stack($receiver, LevelView$initCharacterQueue$lambda$lambda_1(this$LevelView))), LevelView$initCharacterQueue$lambda$lambda_2);
      return Unit;
    };
  }
  function LevelView$initCharacterQueue$lambda_0($receiver) {
    $receiver.widthPercent = 1.0;
    return Unit;
  }
  LevelView.prototype.initCharacterQueue_0 = function () {
    this.layout_ge8abi$(this.unaryPlus_b3a6qy$(vGroup(this, LevelView$initCharacterQueue$lambda(this))), LevelView$initCharacterQueue$lambda_0);
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
      closure$startZoom.v = this$LevelView.controlsState_0.value.camera.zoom;
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
        this$LevelView.zoomCamera_0(this$LevelView.controlsState_0.value.camera.zoom * (it.deltaY > 0.0 ? 1.2 : 0.8));
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
    this.controlsState_0.bind_qlkmfe$(LevelView$initCameraControls$lambda_4(this));
    wheel(this).add_trkh7z$(LevelView$initCameraControls$lambda_5(this));
  };
  LevelView.prototype.initStageView_0 = function () {
    var $receiver = this.gameStage_0;
    $receiver.cameraOverride = this.overviewCam_0;
    this.unaryPlus_b3a6qy$($receiver);
  };
  LevelView.prototype.updateCam_0 = function () {
    var cam = this.controlsState_0.value.camera;
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
      return it.copy_6sjg8m$(void 0, it.camera.copy_y2kzbl$(closure$x, closure$y, closure$zoom));
    };
  }
  LevelView.prototype.moveCamera_0 = function (x, y, zoom) {
    if (x === void 0)
      x = this.controlsState_0.value.camera.x;
    if (y === void 0)
      y = this.controlsState_0.value.camera.y;
    if (zoom === void 0)
      zoom = this.controlsState_0.value.camera.zoom;
    this.controlsState_0.change_ru8m0w$(LevelView$moveCamera$lambda(this, x, y, zoom));
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
      return it.copy_6sjg8m$(void 0, cam.copy_y2kzbl$(void 0, void 0, newZoom));
    };
  }
  LevelView.prototype.zoomCamera_0 = function (zoom) {
    this.controlsState_0.change_ru8m0w$(LevelView$zoomCamera$lambda(this, zoom));
  };
  function LevelView$tweenCamera$lambda() {
    return 0.0;
  }
  function LevelView$tweenCamera$lambda$lambda(closure$start, closure$end, closure$alpha) {
    return function (it) {
      return it.copy_6sjg8m$(void 0, closure$start.lerp_browbj$(closure$end, closure$alpha));
    };
  }
  function LevelView$tweenCamera$lambda_0(this$LevelView, closure$start, closure$end) {
    return function (alpha) {
      this$LevelView.controlsState_0.change_ru8m0w$(LevelView$tweenCamera$lambda$lambda(closure$start, closure$end, alpha));
      return Unit;
    };
  }
  LevelView.prototype.tweenCamera_0 = function (x, y, zoom, duration, ease, delay) {
    if (x === void 0)
      x = this.controlsState_0.value.camera.x;
    if (y === void 0)
      y = this.controlsState_0.value.camera.y;
    if (zoom === void 0)
      zoom = this.controlsState_0.value.camera.zoom;
    if (duration === void 0)
      duration = 0.5;
    if (ease === void 0)
      ease = math.Easing.pow3;
    if (delay === void 0)
      delay = 0.0;
    var start = this.controlsState_0.value.camera.copy_y2kzbl$();
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
  Object.defineProperty(LevelView.prototype, 'mouseGridPosition_0', {get: function () {
    return this.gameStage_0.canvasToGrid_ewdjp1$(this.mouse.canvasX, this.mouse.canvasY, this.gridPosition_0);
  }});
  function LevelView_init$lambda(this$LevelView) {
    return function (it) {
      this$LevelView.currentLevel_0.value = it;
      return Unit;
    };
  }
  LevelView.$metadata$ = {kind: Kind_CLASS, simpleName: 'LevelView', interfaces: [CanvasLayoutContainer]};
  function UiControlsStateVo(isMuted, camera, dragging) {
    if (isMuted === void 0)
      isMuted = true;
    if (camera === void 0)
      camera = new CameraVo();
    if (dragging === void 0)
      dragging = null;
    this.isMuted = isMuted;
    this.camera = camera;
    this.dragging = dragging;
  }
  UiControlsStateVo.$metadata$ = {kind: Kind_CLASS, simpleName: 'UiControlsStateVo', interfaces: []};
  UiControlsStateVo.prototype.component1 = function () {
    return this.isMuted;
  };
  UiControlsStateVo.prototype.component2 = function () {
    return this.camera;
  };
  UiControlsStateVo.prototype.component3 = function () {
    return this.dragging;
  };
  UiControlsStateVo.prototype.copy_6sjg8m$ = function (isMuted, camera, dragging) {
    return new UiControlsStateVo(isMuted === void 0 ? this.isMuted : isMuted, camera === void 0 ? this.camera : camera, dragging === void 0 ? this.dragging : dragging);
  };
  UiControlsStateVo.prototype.toString = function () {
    return 'UiControlsStateVo(isMuted=' + Kotlin.toString(this.isMuted) + (', camera=' + Kotlin.toString(this.camera)) + (', dragging=' + Kotlin.toString(this.dragging)) + ')';
  };
  UiControlsStateVo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.isMuted) | 0;
    result = result * 31 + Kotlin.hashCode(this.camera) | 0;
    result = result * 31 + Kotlin.hashCode(this.dragging) | 0;
    return result;
  };
  UiControlsStateVo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.isMuted, other.isMuted) && Kotlin.equals(this.camera, other.camera) && Kotlin.equals(this.dragging, other.dragging)))));
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
  function placeCharacter$lambda(closure$gameCharacter, closure$position) {
    return function (it) {
      return it.copy_5ccj1q$(replace(it.characters, closure$gameCharacter, closure$gameCharacter.copy_yw9fxa$(void 0, void 0, closure$position.row, closure$position.col)));
    };
  }
  function placeCharacter$lambda_0(closure$gameCharacter) {
    return function (it) {
      return it.copy_5ccj1q$(replace(it.characters, closure$gameCharacter, closure$gameCharacter.copy_yw9fxa$(void 0, void 0, -1, -1)));
    };
  }
  function placeCharacter($receiver, gameCharacter, position) {
    var tile = $receiver.value.getTile_vux9f0$(position.row, position.col);
    logging.Log.debug_s8jyv4$('placeCharacter : Position: ' + position + ' Tile: ' + toString(tile) + ' Character: ' + gameCharacter);
    var foundEmptyLocation = false;
    if (tile != null && tile.roomType === RoomType$STANDARD_getInstance()) {
      var existingCharacter = $receiver.value.getCharacterAt_vux9f0$(position.row, position.col);
      if (equals(existingCharacter != null ? existingCharacter.id : null, gameCharacter.id))
        return;
      if (existingCharacter == null) {
        logging.Log.debug_s8jyv4$('Tile empty, placing...');
        foundEmptyLocation = true;
        $receiver.change_ru8m0w$(placeCharacter$lambda(gameCharacter, position));
      }
    }
    if (!foundEmptyLocation) {
      $receiver.change_ru8m0w$(placeCharacter$lambda_0(gameCharacter));
    }
  }
  function GridPosition(row, col) {
    if (row === void 0)
      row = 0;
    if (col === void 0)
      col = 0;
    this.row = row;
    this.col = col;
  }
  GridPosition.$metadata$ = {kind: Kind_CLASS, simpleName: 'GridPosition', interfaces: []};
  GridPosition.prototype.component1 = function () {
    return this.row;
  };
  GridPosition.prototype.component2 = function () {
    return this.col;
  };
  GridPosition.prototype.copy_vux9f0$ = function (row, col) {
    return new GridPosition(row === void 0 ? this.row : row, col === void 0 ? this.col : col);
  };
  GridPosition.prototype.toString = function () {
    return 'GridPosition(row=' + Kotlin.toString(this.row) + (', col=' + Kotlin.toString(this.col)) + ')';
  };
  GridPosition.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    result = result * 31 + Kotlin.hashCode(this.col) | 0;
    return result;
  };
  GridPosition.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.row, other.row) && Kotlin.equals(this.col, other.col)))));
  };
  function GameCharacter(id, type, row, col) {
    GameCharacter$Companion_getInstance();
    if (id === void 0)
      id = (GameCharacter$Companion_getInstance().nextId_0 = GameCharacter$Companion_getInstance().nextId_0 + 1 | 0, GameCharacter$Companion_getInstance().nextId_0).toString();
    if (type === void 0)
      type = GameCharacterType$UNKNOWN_getInstance();
    if (row === void 0)
      row = -1;
    if (col === void 0)
      col = -1;
    this.id = id;
    this.type = type;
    this.row = row;
    this.col = col;
    this.isPlaced = this.col !== -1;
  }
  function GameCharacter$Companion() {
    GameCharacter$Companion_instance = this;
    this.nextId_0 = 0;
  }
  GameCharacter$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var GameCharacter$Companion_instance = null;
  function GameCharacter$Companion_getInstance() {
    if (GameCharacter$Companion_instance === null) {
      new GameCharacter$Companion();
    }
    return GameCharacter$Companion_instance;
  }
  GameCharacter.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameCharacter', interfaces: []};
  GameCharacter.prototype.component1 = function () {
    return this.id;
  };
  GameCharacter.prototype.component2 = function () {
    return this.type;
  };
  GameCharacter.prototype.component3 = function () {
    return this.row;
  };
  GameCharacter.prototype.component4 = function () {
    return this.col;
  };
  GameCharacter.prototype.copy_yw9fxa$ = function (id, type, row, col) {
    return new GameCharacter(id === void 0 ? this.id : id, type === void 0 ? this.type : type, row === void 0 ? this.row : row, col === void 0 ? this.col : col);
  };
  GameCharacter.prototype.toString = function () {
    return 'GameCharacter(id=' + Kotlin.toString(this.id) + (', type=' + Kotlin.toString(this.type)) + (', row=' + Kotlin.toString(this.row)) + (', col=' + Kotlin.toString(this.col)) + ')';
  };
  GameCharacter.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    result = result * 31 + Kotlin.hashCode(this.col) | 0;
    return result;
  };
  GameCharacter.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.row, other.row) && Kotlin.equals(this.col, other.col)))));
  };
  function GameCharacterType(name, ordinal, char) {
    Enum.call(this);
    this.char = toBoxedChar(char);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameCharacterType_initFields() {
    GameCharacterType_initFields = function () {
    };
    GameCharacterType$MUSICIAN_instance = new GameCharacterType('MUSICIAN', 0, 77);
    GameCharacterType$GRANDMA_instance = new GameCharacterType('GRANDMA', 1, 71);
    GameCharacterType$ARTIST_instance = new GameCharacterType('ARTIST', 2, 65);
    GameCharacterType$UNKNOWN_instance = new GameCharacterType('UNKNOWN', 3, 85);
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
    var tmp$, tmp$_0;
    tmp$ = GameCharacterType$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var value = tmp$[tmp$_0];
      if (unboxChar(value.char) === char)
        return value;
    }
    return GameCharacterType$UNKNOWN_getInstance();
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
  var emptyCharacter;
  function GameLevel(characters, grid, initialLockedCount) {
    GameLevel$Companion_getInstance();
    if (characters === void 0)
      characters = emptyList();
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
    if (initialLockedCount === void 0)
      initialLockedCount = 0;
    this.characters = characters;
    this.grid = grid;
    this.initialLockedCount = initialLockedCount;
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  var checkCountOverflow = Kotlin.kotlin.collections.checkCountOverflow_za3lpa$;
  Object.defineProperty(GameLevel.prototype, 'placedCount', {get: function () {
    var $receiver = this.characters;
    var count$result;
    count$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        count$result = 0;
        break count$break;
      }
      var count = 0;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.isPlaced)
          checkCountOverflow((count = count + 1 | 0, count));
      }
      count$result = count;
    }
     while (false);
    return count$result;
  }});
  var Math_0 = Math;
  Object.defineProperty(GameLevel.prototype, 'unlockedCharacters', {get: function () {
    var tmp$ = this.characters;
    var a = this.initialLockedCount;
    var b = this.placedCount - 1 | 0;
    return tmp$.subList_vux9f0$(Math_0.max(a, b), this.characters.size);
  }});
  GameLevel.prototype.isLocked_44icga$ = function (character) {
    var index = this.characters.indexOf_11rb$(character);
    return index < (this.placedCount - 1 | 0);
  };
  GameLevel.prototype.getTile_vux9f0$ = function (row, col) {
    if (row < 0 || col < 0 || row >= 20 || col >= 20)
      return null;
    return this.grid.get_za3lpa$(row).get_za3lpa$(col);
  };
  GameLevel.prototype.getCharacterAt_vux9f0$ = function (row, col) {
    var $receiver = this.characters;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.row === row && element.col === col) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
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
    return this.characters;
  };
  GameLevel.prototype.component2 = function () {
    return this.grid;
  };
  GameLevel.prototype.component3 = function () {
    return this.initialLockedCount;
  };
  GameLevel.prototype.copy_5ccj1q$ = function (characters, grid, initialLockedCount) {
    return new GameLevel(characters === void 0 ? this.characters : characters, grid === void 0 ? this.grid : grid, initialLockedCount === void 0 ? this.initialLockedCount : initialLockedCount);
  };
  GameLevel.prototype.toString = function () {
    return 'GameLevel(characters=' + Kotlin.toString(this.characters) + (', grid=' + Kotlin.toString(this.grid)) + (', initialLockedCount=' + Kotlin.toString(this.initialLockedCount)) + ')';
  };
  GameLevel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.characters) | 0;
    result = result * 31 + Kotlin.hashCode(this.grid) | 0;
    result = result * 31 + Kotlin.hashCode(this.initialLockedCount) | 0;
    return result;
  };
  GameLevel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.characters, other.characters) && Kotlin.equals(this.grid, other.grid) && Kotlin.equals(this.initialLockedCount, other.initialLockedCount)))));
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
  function Skin$loadBitmapFonts$lambda$lambda($receiver) {
    $receiver.fontKey = 'assets/uiskin/mainFont.fnt';
    return Unit;
  }
  function Skin$loadBitmapFonts$lambda(this$Skin_0, closure$group_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Skin$loadBitmapFonts$lambda(this$Skin_0, closure$group_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Skin$loadBitmapFonts$lambda(this$Skin_0, closure$group_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Skin = this$Skin_0;
    this.local$closure$group = closure$group_0;
  }
  Coroutine$Skin$loadBitmapFonts$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$Skin$loadBitmapFonts$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Skin$loadBitmapFonts$lambda.prototype.constructor = Coroutine$Skin$loadBitmapFonts$lambda;
  Coroutine$Skin$loadBitmapFonts$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = loadFontFromAtlas(this.local$this$Skin, 'assets/uiskin/mainFont.fnt', this.local$this$Skin.theme.atlasPath, this.local$closure$group, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return addStyleRule(this.local$this$Skin.target, charStyle(Skin$loadBitmapFonts$lambda$lambda)), Unit;
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
  Skin.prototype.loadBitmapFonts = function () {
    var group = cachedGroup(this);
    launch(Skin$loadBitmapFonts$lambda(this, group));
  };
  Skin.$metadata$ = {kind: Kind_CLASS, simpleName: 'Skin', interfaces: [BasicUiSkin]};
  function TileView(owner) {
    TileView$Companion_getInstance();
    ContainerImpl.call(this, owner);
    this.atlasPath_0 = 'assets/ggj.json';
    this.data = dataBinding(this, new Tile());
    this.atlas_0 = this.addChild_mxweac$(atlas_0(this, this.atlasPath_0, 'EmptyTile', TileView$atlas$lambda));
    this.data.bind_qlkmfe$(TileView_init$lambda(this));
  }
  function TileView$Companion() {
    TileView$Companion_instance = this;
    this.TILE_SIZE = 64.0;
  }
  TileView$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var TileView$Companion_instance = null;
  function TileView$Companion_getInstance() {
    if (TileView$Companion_instance === null) {
      new TileView$Companion();
    }
    return TileView$Companion_instance;
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
  package$ggj19.GameCharacterIconView = GameCharacterIconView;
  package$ggj19.GameCharacterView = GameCharacterView;
  $$importsForInline$$.AcornUtils = $module$AcornUtils;
  package$ggj19.GameStage = GameStage;
  package$ggj19.GGJ19 = GGJ19;
  package$ggj19.parseGameData_61zpoe$ = parseGameData;
  package$ggj19.LevelView = LevelView;
  package$ggj19.UiControlsStateVo = UiControlsStateVo;
  package$ggj19.CameraVo = CameraVo;
  package$ggj19.placeCharacter_opltb5$ = placeCharacter;
  package$ggj19.GridPosition = GridPosition;
  Object.defineProperty(GameCharacter, 'Companion', {get: GameCharacter$Companion_getInstance});
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
  Object.defineProperty(TileView, 'Companion', {get: TileView$Companion_getInstance});
  package$ggj19.TileView = TileView;
  var package$util = package$ggj19.util || (package$ggj19.util = {});
  Object.defineProperty(package$util, 'Isometric', {get: Isometric_getInstance});
  config = new AppConfig(void 0, void 0, void 0, void 0, 60, void 0, void 0, new WindowConfig('GGJ19', void 0, void 0, new Color(0.2, 0.2, 0.2, 1.0)), new GlConfig(true));
  emptyCharacter = new GameCharacter();
  emptyLevel = new GameLevel();
  return _;
}));

//# sourceMappingURL=GGJ19Core.js.map
function alwaysTrue() { return true; }