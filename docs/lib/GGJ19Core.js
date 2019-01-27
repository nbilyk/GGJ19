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
  var contentsAtlas = $module$AcornUiCore.com.acornui.component.contentsAtlas_7bypn$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ContainerImpl = $module$AcornUiCore.com.acornui.component.ContainerImpl;
  var atlas = $module$AcornUiCore.com.acornui.component.atlas_r9djik$;
  var cursor = $module$AcornUiCore.com.acornui.core.cursor;
  var cursor_0 = $module$AcornUiCore.com.acornui.core.cursor.cursor_8kxuli$;
  var Vector2 = $module$AcornUtils.com.acornui.math.Vector2;
  var moveTo = $module$AcornUiCore.com.acornui.component.layout.moveTo_jveujf$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var equals = Kotlin.equals;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ensureNotNull = Kotlin.ensureNotNull;
  var recycle = $module$AcornUiCore.com.acornui.core.cache.recycle_xjf92d$;
  var drawing = $module$AcornUiCore.com.acornui.component.drawing;
  var line = $module$AcornUiCore.com.acornui.component.drawing.line_5nybxc$;
  var staticMesh = $module$AcornUiCore.com.acornui.component.drawing.staticMesh_mkeht6$;
  var staticMeshC = $module$AcornUiCore.com.acornui.component.drawing.staticMeshC_ig2bzk$;
  var onTick = $module$AcornUiCore.com.acornui.core.time.onTick_1ilr4g$;
  var replace = $module$AcornUtils.com.acornui.collection.replace_3odih2$;
  var dragStart = $module$AcornUiCore.com.acornui.core.input.interaction.dragStart_jz45q0$;
  var dragEnd = $module$AcornUiCore.com.acornui.core.input.interaction.dragEnd_jz45q0$;
  var InteractivityMode = $module$AcornUiCore.com.acornui.component.InteractivityMode;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var numberToInt = Kotlin.numberToInt;
  var ElementContainerImpl = $module$AcornUiCore.com.acornui.component.ElementContainerImpl;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var HAlign = $module$AcornUiCore.com.acornui.component.layout.HAlign;
  var rect = $module$AcornUiCore.com.acornui.component.rect_8hpnyb$;
  var Pad_init = $module$AcornUtils.com.acornui.math.Pad_init_mx4ult$;
  var click = $module$AcornUiCore.com.acornui.core.input.interaction.click_w26x3n$;
  var PopUpInfo = $module$AcornUiCore.com.acornui.core.popup.PopUpInfo;
  var addPopUp = $module$AcornUiCore.com.acornui.core.popup.addPopUp_40ntlz$;
  var text = $module$AcornUiCore.com.acornui.component.text.text_os944a$;
  var iconButton = $module$AcornUiCore.com.acornui.component.iconButton_27nmo1$;
  var spacer = $module$AcornUiCore.com.acornui.component.layout.spacer_4yhnsi$;
  var text_0 = $module$AcornUiCore.com.acornui.component.text.text_7i1swk$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var hGroup = $module$AcornUiCore.com.acornui.component.layout.algorithm.hGroup_aiug52$;
  var panel = $module$AcornUiCore.com.acornui.component.panel_4k1mq$;
  var atlas_0 = $module$AcornUiCore.com.acornui.component.atlas_8684q0$;
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
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var ButtonState = $module$AcornUiCore.com.acornui.component.ButtonState;
  var iconButton_0 = $module$AcornUiCore.com.acornui.component.iconButton_hzc8f9$;
  var core = $module$AcornUiCore.com.acornui.core;
  var AssetType = $module$AcornUiCore.com.acornui.core.asset.AssetType;
  var load = $module$AcornUiCore.com.acornui.core.asset.load_k5bt3m$;
  var then = $module$AcornUtils.com.acornui.async.then_7jcrga$;
  var or = $module$AcornUiCore.com.acornui.core.observe.or_x919w3$;
  var bind = $module$AcornUtils.com.acornui.signal.bind_3tpvqv$;
  var CanvasLayoutContainer = $module$AcornUiCore.com.acornui.component.layout.algorithm.CanvasLayoutContainer;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
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
  var get_stage = $module$AcornUiCore.com.acornui.component.get_stage_xd4dkp$;
  var NavBindable = $module$AcornUiCore.com.acornui.core.nav.NavBindable;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var poll = $module$AcornUtils.com.acornui.collection.poll_vvxzk3$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var WindowPanel = $module$AcornUiCore.com.acornui.component.WindowPanel;
  var button = $module$AcornUiCore.com.acornui.component.button_l5thvq$;
  var unboxChar = Kotlin.unboxChar;
  var Enum = Kotlin.kotlin.Enum;
  var toBoxedChar = Kotlin.toBoxedChar;
  var throwISE = Kotlin.throwISE;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var BasicUiSkin = $module$AcornUiCore.com.acornui.skins.BasicUiSkin;
  var charStyle = $module$AcornUiCore.com.acornui.component.text.charStyle_8j5cku$;
  var addStyleRule = $module$AcornUiCore.com.acornui.component.style.addStyleRule_h9ypmx$;
  var CharStyle = $module$AcornUiCore.com.acornui.component.text.CharStyle;
  var Button = $module$AcornUiCore.com.acornui.component.Button;
  var withAncestor = $module$AcornUiCore.com.acornui.component.style.withAncestor_5idwg3$;
  var addStyleRule_0 = $module$AcornUiCore.com.acornui.component.style.addStyleRule_lbpgd4$;
  var cachedGroup = $module$AcornUiCore.com.acornui.core.asset.cachedGroup_xd4dkp$;
  var loadFontFromAtlas = $module$AcornUiCore.com.acornui.component.text.loadFontFromAtlas_itrc35$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$AcornUtils.com.acornui.async.launch_g2bo5h$;
  var Random = Kotlin.kotlin.random.Random;
  var Panel = $module$AcornUiCore.com.acornui.component.Panel;
  GameCharacterIconView.prototype = Object.create(StackLayoutContainer.prototype);
  GameCharacterIconView.prototype.constructor = GameCharacterIconView;
  GameCharacterView.prototype = Object.create(ContainerImpl.prototype);
  GameCharacterView.prototype.constructor = GameCharacterView;
  GameStage.prototype = Object.create(ElementContainerImpl.prototype);
  GameStage.prototype.constructor = GameStage;
  GameView.prototype = Object.create(CanvasLayoutContainer.prototype);
  GameView.prototype.constructor = GameView;
  GGJ19.prototype = Object.create(CanvasLayoutContainer.prototype);
  GGJ19.prototype.constructor = GGJ19;
  LevelChooser.prototype = Object.create(WindowPanel.prototype);
  LevelChooser.prototype.constructor = LevelChooser;
  GameCharacterType.prototype = Object.create(Enum.prototype);
  GameCharacterType.prototype.constructor = GameCharacterType;
  RoomType.prototype = Object.create(Enum.prototype);
  RoomType.prototype.constructor = RoomType;
  Skin.prototype = Object.create(BasicUiSkin.prototype);
  Skin.prototype.constructor = Skin;
  TileView.prototype = Object.create(ContainerImpl.prototype);
  TileView.prototype.constructor = TileView;
  VictoryView.prototype = Object.create(Panel.prototype);
  VictoryView.prototype.constructor = VictoryView;
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
        contentsAtlas(this$GameCharacterIconView.icon_0, this$GameCharacterIconView.atlasPath_0, 'icon_' + it.type.toString().toLowerCase());
      }
       else {
        this$GameCharacterIconView.visible = false;
      }
      return Unit;
    };
  }
  GameCharacterIconView.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameCharacterIconView', interfaces: [StackLayoutContainer]};
  function GameCharacterView(owner) {
    ContainerImpl.call(this, owner);
    this.atlasPath_0 = 'assets/ggj.json';
    this.data = dataBinding(this, emptyCharacter);
    this.isHappy = dataBinding(this, true);
    this.icon_0 = this.addChild_mxweac$(atlas(this, GameCharacterView$icon$lambda));
    this.happyStateIcon_0 = this.addChild_mxweac$(atlas(this, GameCharacterView$happyStateIcon$lambda));
    cursor_0(this, cursor.StandardCursors.HAND);
    this.data.bind_qlkmfe$(GameCharacterView_init$lambda(this));
    this.isHappy.bind_qlkmfe$(GameCharacterView_init$lambda_0(this));
  }
  function GameCharacterView$icon$lambda($receiver) {
    $receiver.setOrigin_y2kzbl$(32.0, 32.0);
    return Unit;
  }
  function GameCharacterView$happyStateIcon$lambda($receiver) {
    $receiver.setScaling_y2kzbl$(1.5, 1.5);
    $receiver.moveTo_y2kzbl$(10.0, 0.0);
    return Unit;
  }
  function GameCharacterView_init$lambda(this$GameCharacterView) {
    return function (it) {
      moveTo(this$GameCharacterView, Isometric_getInstance().twoDToIso_9wm29l$(new Vector2((it.col + 0.3) * TileView$Companion_getInstance().TILE_SIZE, (it.row + 0.3) * TileView$Companion_getInstance().TILE_SIZE)));
      this$GameCharacterView.icon_0.setRegion_puj7f4$(this$GameCharacterView.atlasPath_0, it.type.toString().toLowerCase());
      return Unit;
    };
  }
  function GameCharacterView_init$lambda_0(this$GameCharacterView) {
    return function (it) {
      this$GameCharacterView.happyStateIcon_0.setRegion_puj7f4$(this$GameCharacterView.atlasPath_0, it ? 'smiley' : 'smiley-cry');
      return Unit;
    };
  }
  GameCharacterView.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameCharacterView', interfaces: [ContainerImpl]};
  function GameRules() {
    GameRules_instance = this;
    this.dislikeRules_0 = mapOf([to(GameCharacterType$MUSICIAN_getInstance(), listOf([GameCharacterType$MUSICIAN_getInstance(), GameCharacterType$PARENT_getInstance()])), to(GameCharacterType$GRANDPA_getInstance(), listOf([GameCharacterType$GRANDPA_getInstance(), GameCharacterType$COOK_getInstance()])), to(GameCharacterType$PARENT_getInstance(), listOf([GameCharacterType$PARENT_getInstance(), GameCharacterType$MUSICIAN_getInstance()])), to(GameCharacterType$COOK_getInstance(), listOf([GameCharacterType$GRANDPA_getInstance(), GameCharacterType$COOK_getInstance()]))]);
  }
  GameRules.prototype.calculateHappiness_lpv8jf$ = function (characters) {
    var tmp$, tmp$_0, tmp$_1;
    var happiness = HashMap_init();
    tmp$ = characters.iterator();
    while (tmp$.hasNext()) {
      var character = tmp$.next();
      var key = character.id;
      happiness.put_xwzc9p$(key, true);
    }
    tmp$_0 = characters.iterator();
    while (tmp$_0.hasNext()) {
      var character_0 = tmp$_0.next();
      tmp$_1 = this.dislikeRules_0.get_11rb$(character_0.type);
      if (tmp$_1 == null) {
        continue;
      }
      var dislikeRule = tmp$_1;
      var neighbors = this.neighbors_0(character_0, characters);
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_2;
        tmp$_2 = neighbors.iterator();
        while (tmp$_2.hasNext()) {
          var element = tmp$_2.next();
          if (dislikeRule.contains_11rb$(element.type)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      if (firstOrNull$result != null) {
        var key_0 = character_0.id;
        happiness.put_xwzc9p$(key_0, false);
      }
    }
    return happiness;
  };
  GameRules.prototype.neighbors_0 = function ($receiver, all) {
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = all.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var predicate$result;
      if (equals(element.id, $receiver.id)) {
        predicate$result = false;
      }
       else if (!element.isPlaced) {
        predicate$result = false;
      }
       else {
        predicate$result = element.row === $receiver.row && abs($receiver.col - element.col | 0) <= 1 || (element.col === $receiver.col && abs($receiver.row - element.row | 0) <= 1);
      }
      if (predicate$result)
        destination.add_11rb$(element);
    }
    return destination;
  };
  GameRules.$metadata$ = {kind: Kind_OBJECT, simpleName: 'GameRules', interfaces: []};
  var GameRules_instance = null;
  function GameRules_getInstance() {
    if (GameRules_instance === null) {
      new GameRules();
    }
    return GameRules_instance;
  }
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function GameStage(owner, currentLevel, controlsState, characterHappiness) {
    ElementContainerImpl.call(this, owner);
    this.currentLevel_0 = currentLevel;
    this.controlsState_0 = controlsState;
    this.characterHappiness_0 = characterHappiness;
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
    this.dragView_0 = new GameCharacterView(owner);
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
  function GameStage$initTileViews$lambda(this$GameStage) {
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
        var $receiver = this.tileViews_0.get_za3lpa$(row).get_za3lpa$(col);
        moveTo($receiver, Isometric_getInstance().twoDToIso_dleff0$(col * TileView$Companion_getInstance().TILE_SIZE + 1.0, row * TileView$Companion_getInstance().TILE_SIZE + 1.0));
        this.unaryPlus_b3a6qy$($receiver);
      }
    }
    this.currentLevel_0.bind_qlkmfe$(GameStage$initTileViews$lambda(this));
  };
  function GameStage$initCharacters$lambda$lambda(this$GameStage) {
    return function (item, index) {
      return this$GameStage.unaryPlus_b3a6qy$(this$GameStage.createGameCharacterView_0());
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
    this.currentLevel_0.bind_qlkmfe$(GameStage$initCharacters$lambda(this));
  };
  function GameStage$initDebugLines$lambda$lambda$lambda($receiver) {
    drawing.MeshBuilderStyle.lineStyle.colorTint = new Color(0.25, 0.25, 0.25, 0.5);
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
  function GameStage$initDebugLines$lambda$lambda($receiver) {
    $receiver.buildMesh_dmwms7$(GameStage$initDebugLines$lambda$lambda$lambda);
    return Unit;
  }
  function GameStage$initDebugLines$lambda($receiver) {
    $receiver.mesh = staticMesh($receiver, GameStage$initDebugLines$lambda$lambda);
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
    this.controlsState_0.bind_qlkmfe$(GameStage$initDragView$lambda$lambda($receiver, this));
    this.unaryPlus_b3a6qy$($receiver);
  };
  function GameStage$createGameCharacterView$lambda$lambda$lambda(closure$old, closure$new) {
    return function (it) {
      return it.copy_5ccj1q$(replace(it.characters, closure$old, closure$new));
    };
  }
  function GameStage$createGameCharacterView$lambda$lambda(this$GameStage) {
    return function (old, new_0) {
      this$GameStage.currentLevel_0.change_ru8m0w$(GameStage$createGameCharacterView$lambda$lambda$lambda(old, new_0));
      return Unit;
    };
  }
  function GameStage$createGameCharacterView$lambda$lambda$lambda_0(this$) {
    return function (it) {
      return it.copy_6sjg8m$(void 0, void 0, this$.data.value);
    };
  }
  function GameStage$createGameCharacterView$lambda$lambda_0(this$, this$GameStage) {
    return function (f) {
      this$.alpha = 0.0;
      this$GameStage.controlsState_0.change_ru8m0w$(GameStage$createGameCharacterView$lambda$lambda$lambda_0(this$));
      return Unit;
    };
  }
  function GameStage$createGameCharacterView$lambda$lambda$lambda_1(it) {
    return it.copy_6sjg8m$(void 0, void 0, null);
  }
  function GameStage$createGameCharacterView$lambda$lambda_1(this$, this$GameStage) {
    return function (f) {
      this$.alpha = 1.0;
      var gameCharacter = this$.data.value;
      placeCharacter(this$GameStage.currentLevel_0, gameCharacter, this$GameStage.canvasToGrid_ewdjp1$(this$GameStage.mouse.canvasX, this$GameStage.mouse.canvasY, new GridPosition()));
      this$GameStage.controlsState_0.change_ru8m0w$(GameStage$createGameCharacterView$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function GameStage$createGameCharacterView$lambda$lambda_2(this$) {
    return function (it) {
      var tmp$;
      this$.isHappy.value = (tmp$ = it.get_11rb$(this$.data.value.id)) != null ? tmp$ : true;
      return Unit;
    };
  }
  GameStage.prototype.createGameCharacterView_0 = function () {
    var $receiver = new GameCharacterView(this);
    $receiver.setScaling_y2kzbl$(0.6, 0.6);
    $receiver.data.changed.add_trkh7z$(GameStage$createGameCharacterView$lambda$lambda(this));
    dragStart($receiver).add_trkh7z$(GameStage$createGameCharacterView$lambda$lambda_0($receiver, this));
    dragEnd($receiver).add_trkh7z$(GameStage$createGameCharacterView$lambda$lambda_1($receiver, this));
    this.characterHappiness_0.bind_qlkmfe$(GameStage$createGameCharacterView$lambda$lambda_2($receiver));
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
  GameStage.prototype.render_5yfmeh$ = function (clip) {
    for (var row = 0; row < 20; row++) {
      for (var col = 0; col < 20; col++) {
        var tile = this.tileViews_0.get_za3lpa$(row).get_za3lpa$(col);
        tile.renderGround_5yfmeh$(clip);
      }
    }
    ElementContainerImpl.prototype.render_5yfmeh$.call(this, clip);
    var characterViews = this.characterViews_0;
    var grid = this.currentLevel_0.value.grid;
    for (var row_0 = 0; row_0 < 20; row_0++) {
      loop_label: for (var col_0 = 0; col_0 < 20; col_0++) {
        var tile_0 = this.tileViews_0.get_za3lpa$(row_0).get_za3lpa$(col_0);
        if (grid.get_za3lpa$(row_0).get_za3lpa$(col_0).roomType !== RoomType$NONE_getInstance()) {
          tile_0.renderRightWall_5yfmeh$(clip);
          tile_0.renderLeftWall_5yfmeh$(clip);
          var firstOrNull$result;
          firstOrNull$break: do {
            var tmp$;
            tmp$ = characterViews.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              if (element.data.value.row === row_0 && element.data.value.col === col_0) {
                firstOrNull$result = element;
                break firstOrNull$break;
              }
            }
            firstOrNull$result = null;
          }
           while (false);
          var char = firstOrNull$result;
          char != null ? (char.render_5yfmeh$(clip), Unit) : null;
        }
        if (row_0 > 0 && grid.get_za3lpa$(row_0 - 1 | 0).get_za3lpa$(col_0).roomType !== RoomType$NONE_getInstance())
          tile_0.renderRightWall_5yfmeh$(clip);
        if (col_0 > 0 && grid.get_za3lpa$(row_0).get_za3lpa$(col_0 - 1 | 0).roomType !== RoomType$NONE_getInstance())
          tile_0.renderLeftWall_5yfmeh$(clip);
      }
    }
    this.dragView_0.render_5yfmeh$(clip);
  };
  GameStage.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameStage', interfaces: [ElementContainerImpl]};
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  function GameView(owner) {
    CanvasLayoutContainer.call(this, owner);
    this.controlsState_0 = dataBinding(this, new UiControlsStateVo());
    this.levels = dataBinding(this, listOf_0(emptyLevel));
    this.currentLevelNumber = dataBinding(this, 0);
    this.characterHappiness = dataBinding(this, emptyMap());
    this.currentLevel_0 = dataBinding(this, emptyLevel);
    this.gameStage_0 = new GameStage(this, this.currentLevel_0, this.controlsState_0, this.characterHappiness);
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
    bind(or(this.levels, this.currentLevelNumber), GameView_init$lambda(this));
    this.interactivityMode = InteractivityMode.ALWAYS;
    this.initCameraControls_0();
    this.initStageView_0();
    this.initCharacterQueue_0();
    this.initCharacterRules_0();
    this.initMusic_0();
    this.initNextLevelButton_0();
    this.initVictoryScreen_0();
    this.gridPosition_0 = new GridPosition();
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda($receiver) {
    $receiver.style.backgroundColor = new Color(0.0, 0.0, 0.0, 0.6);
    return Unit;
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda($receiver) {
    return rect($receiver, GameView$initCharacterQueue$lambda$lambda$lambda$lambda);
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda(this$) {
    return function (it) {
      this$.text = 'Level ' + (it + 1 | 0);
      return Unit;
    };
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_0(this$, this$GameView) {
    return function (e) {
      if (e.count === 2) {
        addPopUp(this$, new PopUpInfo(new LevelChooser(this$, this$GameView.levels.value.size, this$GameView.currentLevelNumber)));
      }
      return Unit;
    };
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda_0(this$GameView) {
    return function ($receiver) {
      this$GameView.currentLevelNumber.bind_qlkmfe$(GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda($receiver));
      click($receiver).add_trkh7z$(GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_0($receiver, this$GameView));
      return Unit;
    };
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_1(this$GameView) {
    return function (it) {
      this$GameView.resetLevel_0();
      return Unit;
    };
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda_1(this$GameView) {
    return function ($receiver) {
      $receiver.label = 'Restart';
      click($receiver).add_trkh7z$(GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_1(this$GameView));
      return Unit;
    };
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.widthPercent = 1.0;
    return Unit;
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_2(this$) {
    return function (item, index) {
      var tmp$ = this$;
      var $receiver = new GameCharacterIconView(this$);
      $receiver.defaultWidth = 32.0;
      $receiver.defaultHeight = 32.0;
      return tmp$.unaryPlus_b3a6qy$($receiver);
    };
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_3(element, item, index) {
    element.data.value = item;
    return Unit;
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_4(element) {
    element.dispose();
    return Unit;
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_5(element) {
    return element.data.value;
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_6(o1, o2) {
    return true;
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda_3(closure$upNextLbl, this$GameView, this$) {
    return function (newData) {
      var unlockedCharacters = newData.unlockedCharacters;
      if (!unlockedCharacters.isEmpty())
        unlockedCharacters = unlockedCharacters.subList_vux9f0$(1, unlockedCharacters.size);
      closure$upNextLbl.visible = !unlockedCharacters.isEmpty();
      recycle(reversed(unlockedCharacters), this$GameView.characterIcons_0, GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_2(this$), GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_3, GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_4, GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_5, GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_6);
      return Unit;
    };
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda_0(this$GameView) {
    return function ($receiver) {
      $receiver.unaryPlus_b3a6qy$(text($receiver, GameView$initCharacterQueue$lambda$lambda$lambda$lambda_0(this$GameView)));
      $receiver.unaryPlus_b3a6qy$(iconButton($receiver, this$GameView.theme_0.atlasPath, 'burn', GameView$initCharacterQueue$lambda$lambda$lambda$lambda_1(this$GameView)));
      $receiver.layout_ge8abi$($receiver.unaryPlus_b3a6qy$(spacer($receiver)), GameView$initCharacterQueue$lambda$lambda$lambda$lambda_2);
      var upNextLbl = $receiver.unaryPlus_b3a6qy$(text_0($receiver, 'Up next:'));
      this$GameView.currentLevel_0.bind_qlkmfe$(GameView$initCharacterQueue$lambda$lambda$lambda$lambda_3(upNextLbl, this$GameView, $receiver));
      return Unit;
    };
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda_1($receiver) {
    $receiver.widthPercent = 1.0;
    return Unit;
  }
  function GameView$initCharacterQueue$lambda$lambda(this$GameView) {
    return function ($receiver) {
      $receiver.interactivityMode = InteractivityMode.CHILDREN;
      $receiver.style.background = GameView$initCharacterQueue$lambda$lambda$lambda;
      $receiver.style.padding = Pad_init(5.0);
      $receiver.layout_ge8abi$($receiver.unaryPlus_b3a6qy$(hGroup($receiver, GameView$initCharacterQueue$lambda$lambda$lambda_0(this$GameView))), GameView$initCharacterQueue$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function GameView$initCharacterQueue$lambda$lambda_0($receiver) {
    $receiver.widthPercent = 1.0;
    return Unit;
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda_4(this$GameView, this$) {
    return function (f) {
      var $receiver = this$GameView.currentLevel_0.value.characters;
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
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_7(this$) {
    return function (it) {
      return it.copy_6sjg8m$(void 0, void 0, this$.data.value);
    };
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda_5(this$, this$GameView) {
    return function (e) {
      this$.alpha = 0.2;
      println('Drag start gciv ' + e.currentTarget);
      this$GameView.controlsState_0.change_ru8m0w$(GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_7(this$));
      return Unit;
    };
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_8(it) {
    return it.copy_6sjg8m$(void 0, void 0, null);
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda$lambda_6(this$, this$GameView) {
    return function (f) {
      this$.alpha = 1.0;
      var gameCharacter = this$.data.value;
      println('Drag end ' + toString(gameCharacter));
      if (gameCharacter != null) {
        placeCharacter(this$GameView.currentLevel_0, gameCharacter, this$GameView.mouseGridPosition_0);
        this$GameView.controlsState_0.change_ru8m0w$(GameView$initCharacterQueue$lambda$lambda$lambda$lambda$lambda_8);
      }
      return Unit;
    };
  }
  function GameView$initCharacterQueue$lambda$lambda$lambda_2($receiver) {
    $receiver.width = 64.0;
    $receiver.height = 64.0;
    $receiver.center();
    return Unit;
  }
  function GameView$initCharacterQueue$lambda$lambda_1(this$GameView) {
    return function ($receiver) {
      $receiver.interactivityMode = InteractivityMode.CHILDREN;
      $receiver.style.padding = Pad_init(5.0);
      $receiver.unaryPlus_b3a6qy$(atlas_0($receiver, this$GameView.atlasPath_0, 'CurrentCharacterPresentationBg'));
      var $receiver_0 = new GameCharacterIconView($receiver);
      var this$GameView_0 = this$GameView;
      cursor_0($receiver_0, cursor.StandardCursors.HAND);
      this$GameView_0.currentLevel_0.bind_qlkmfe$(GameView$initCharacterQueue$lambda$lambda$lambda$lambda_4(this$GameView_0, $receiver_0));
      dragStart($receiver_0).add_trkh7z$(GameView$initCharacterQueue$lambda$lambda$lambda$lambda_5($receiver_0, this$GameView_0));
      dragEnd($receiver_0).add_trkh7z$(GameView$initCharacterQueue$lambda$lambda$lambda$lambda_6($receiver_0, this$GameView_0));
      $receiver.layout_ge8abi$($receiver.unaryPlus_b3a6qy$($receiver_0), GameView$initCharacterQueue$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function GameView$initCharacterQueue$lambda$lambda_2($receiver) {
    $receiver.width = 106.0;
    $receiver.height = 106.0;
    return Unit;
  }
  function GameView$initCharacterQueue$lambda(this$GameView) {
    return function ($receiver) {
      $receiver.interactivityMode = InteractivityMode.CHILDREN;
      $receiver.style.gap = 0.0;
      $receiver.style.horizontalAlign = HAlign.RIGHT;
      $receiver.layout_ge8abi$($receiver.unaryPlus_b3a6qy$(panel($receiver, GameView$initCharacterQueue$lambda$lambda(this$GameView))), GameView$initCharacterQueue$lambda$lambda_0);
      $receiver.layout_ge8abi$($receiver.unaryPlus_b3a6qy$(stack($receiver, GameView$initCharacterQueue$lambda$lambda_1(this$GameView))), GameView$initCharacterQueue$lambda$lambda_2);
      return Unit;
    };
  }
  function GameView$initCharacterQueue$lambda_0($receiver) {
    $receiver.widthPercent = 1.0;
    return Unit;
  }
  GameView.prototype.initCharacterQueue_0 = function () {
    this.layout_ge8abi$(this.unaryPlus_b3a6qy$(vGroup(this, GameView$initCharacterQueue$lambda(this))), GameView$initCharacterQueue$lambda_0);
  };
  function GameView$initCharacterRules$lambda$lambda(closure$level) {
    return function (it) {
      return GameRules_getInstance().calculateHappiness_lpv8jf$(closure$level.characters);
    };
  }
  function GameView$initCharacterRules$lambda(this$GameView) {
    return function (level) {
      this$GameView.characterHappiness.change_ru8m0w$(GameView$initCharacterRules$lambda$lambda(level));
      return Unit;
    };
  }
  GameView.prototype.initCharacterRules_0 = function () {
    this.currentLevel_0.bind_qlkmfe$(GameView$initCharacterRules$lambda(this));
  };
  function GameView$initCameraControls$lambda(this$GameView) {
    return function (newWidth, newHeight, f) {
      this$GameView.overviewCam_0.setViewport_dleff0$(newWidth, newHeight);
      this$GameView.updateCam_0();
      return Unit;
    };
  }
  function GameView$initCameraControls$lambda_0(this$GameView) {
    return function (it) {
      this$GameView.moveCamera_0(it.value);
      return Unit;
    };
  }
  function GameView$initCameraControls$lambda_1(this$GameView) {
    return function (it) {
      this$GameView.moveCamera_0(void 0, it.value);
      return Unit;
    };
  }
  function GameView$initCameraControls$lambda_2(this$GameView, closure$startZoom) {
    return function (it) {
      closure$startZoom.v = this$GameView.controlsState_0.value.camera.zoom;
      return Unit;
    };
  }
  function GameView$initCameraControls$lambda_3(closure$startZoom, this$GameView) {
    return function (it) {
      this$GameView.zoomCamera_0(it.startDistance * closure$startZoom.v / it.distance);
      return Unit;
    };
  }
  function GameView$initCameraControls$lambda_4(this$GameView) {
    return function (it) {
      if (!this$GameView.hScroll_0.changed.isDispatching && !this$GameView.vScroll_0.changed.isDispatching) {
        this$GameView.hScroll_0.value = it.camera.x;
        this$GameView.vScroll_0.value = it.camera.y;
      }
      this$GameView.updateCam_0();
      return Unit;
    };
  }
  function GameView$initCameraControls$lambda_5(this$GameView) {
    return function (it) {
      this$GameView.tossScroller_0.stop();
      if (it.deltaY !== 0.0) {
        this$GameView.zoomCamera_0(this$GameView.controlsState_0.value.camera.zoom * (it.deltaY > 0.0 ? 1.2 : 0.8));
      }
      return Unit;
    };
  }
  GameView.prototype.initCameraControls_0 = function () {
    this.window.sizeChanged.add_trkh7z$(GameView$initCameraControls$lambda(this));
    this.hScroll_0.min = -this.stageH_0;
    this.vScroll_0.min = -this.stageW_0 * 0.5;
    this.hScroll_0.max = this.stageW_0;
    this.vScroll_0.max = this.stageH_0 * 0.5;
    this.hScroll_0.changed.add_trkh7z$(GameView$initCameraControls$lambda_0(this));
    this.vScroll_0.changed.add_trkh7z$(GameView$initCameraControls$lambda_1(this));
    var startZoom = {v: 0.0};
    pinchStart(this).add_trkh7z$(GameView$initCameraControls$lambda_2(this, startZoom));
    pinch(this).add_trkh7z$(GameView$initCameraControls$lambda_3(startZoom, this));
    this.controlsState_0.bind_qlkmfe$(GameView$initCameraControls$lambda_4(this));
    wheel(this).add_trkh7z$(GameView$initCameraControls$lambda_5(this));
  };
  GameView.prototype.initStageView_0 = function () {
    var $receiver = this.gameStage_0;
    $receiver.cameraOverride = this.overviewCam_0;
    this.unaryPlus_b3a6qy$($receiver);
  };
  GameView.prototype.updateCam_0 = function () {
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
  function GameView$moveCamera$lambda(this$GameView, closure$x, closure$y, closure$zoom) {
    return function (it) {
      tween.TweenRegistry.kill_4hrdoq$(this$GameView, 'camera', true);
      return it.copy_6sjg8m$(void 0, it.camera.copy_y2kzbl$(closure$x, closure$y, closure$zoom));
    };
  }
  GameView.prototype.moveCamera_0 = function (x, y, zoom) {
    if (x === void 0)
      x = this.controlsState_0.value.camera.x;
    if (y === void 0)
      y = this.controlsState_0.value.camera.y;
    if (zoom === void 0)
      zoom = this.controlsState_0.value.camera.zoom;
    this.controlsState_0.change_ru8m0w$(GameView$moveCamera$lambda(this, x, y, zoom));
  };
  function GameView$zoomCamera$lambda(this$GameView, closure$zoom) {
    return function (it) {
      tween.TweenRegistry.kill_4hrdoq$(this$GameView, 'camera', true);
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
  GameView.prototype.zoomCamera_0 = function (zoom) {
    this.controlsState_0.change_ru8m0w$(GameView$zoomCamera$lambda(this, zoom));
  };
  function GameView$tweenCamera$lambda() {
    return 0.0;
  }
  function GameView$tweenCamera$lambda$lambda(closure$start, closure$end, closure$alpha) {
    return function (it) {
      return it.copy_6sjg8m$(void 0, closure$start.lerp_browbj$(closure$end, closure$alpha));
    };
  }
  function GameView$tweenCamera$lambda_0(this$GameView, closure$start, closure$end) {
    return function (alpha) {
      this$GameView.controlsState_0.change_ru8m0w$(GameView$tweenCamera$lambda$lambda(closure$start, closure$end, alpha));
      return Unit;
    };
  }
  GameView.prototype.tweenCamera_0 = function (x, y, zoom, duration, ease, delay) {
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
    driveTween(this, createPropertyTween(this, 'camera', duration, ease, GameView$tweenCamera$lambda, GameView$tweenCamera$lambda_0(this, start, end), 1.0, delay));
  };
  GameView.prototype.resetLevel_0 = function () {
    var tmp$;
    this.currentLevel_0.value = (tmp$ = getOrNull(this.levels.value, this.currentLevelNumber.value)) != null ? tmp$ : emptyLevel;
  };
  function GameView$initMusic$lambda$lambda(this$) {
    return function (it) {
      this$.toggled = !it.isMuted;
      return Unit;
    };
  }
  function GameView$initMusic$lambda$lambda$lambda(this$) {
    return function (it) {
      return it.copy_6sjg8m$(!this$.toggled);
    };
  }
  function GameView$initMusic$lambda$lambda_0(this$GameView, this$) {
    return function (f) {
      this$GameView.controlsState_0.change_ru8m0w$(GameView$initMusic$lambda$lambda$lambda(this$));
      return Unit;
    };
  }
  function GameView$initMusic$lambda(this$GameView) {
    return function ($receiver) {
      $receiver.iconMap_wty2wd$(mapOf([to(ButtonState.UP, atlas_0($receiver, this$GameView.theme_0.atlasPath, 'speaker-volume-control-mute')), to(ButtonState.TOGGLED_UP, atlas_0($receiver, this$GameView.theme_0.atlasPath, 'speaker-volume'))]));
      $receiver.toggleOnClick = true;
      this$GameView.controlsState_0.bind_qlkmfe$(GameView$initMusic$lambda$lambda($receiver));
      $receiver.toggledChanged.add_trkh7z$(GameView$initMusic$lambda$lambda_0(this$GameView, $receiver));
      return Unit;
    };
  }
  function GameView$initMusic$lambda_0($receiver) {
    $receiver.bottom = 5.0;
    $receiver.left = 5.0;
    return Unit;
  }
  function GameView$initMusic$lambda_1(it) {
    return it.copy_6sjg8m$(false);
  }
  function GameView$initMusic$lambda$lambda_1(this$GameView) {
    return function (it) {
      it.loop = true;
      it.play();
      this$GameView.mainMusic_0 = it;
      return Unit;
    };
  }
  function GameView$initMusic$lambda_2(this$GameView) {
    return function (it) {
      var tmp$, tmp$_0;
      if (it.isMuted) {
        (tmp$ = this$GameView.mainMusic_0) != null ? (tmp$.stop(), Unit) : null;
        this$GameView.persistence_0.setItem_puj7f4$('muted', 'true');
        this$GameView.persistence_0.flush();
      }
       else {
        if (this$GameView.mainMusic_0 == null) {
          then(load(this$GameView, 'assets/music/background.mp3', AssetType.Companion.MUSIC), GameView$initMusic$lambda$lambda_1(this$GameView));
        }
        (tmp$_0 = this$GameView.mainMusic_0) != null ? (tmp$_0.play(), Unit) : null;
        this$GameView.persistence_0.setItem_puj7f4$('muted', 'false');
        this$GameView.persistence_0.flush();
      }
      return Unit;
    };
  }
  GameView.prototype.initMusic_0 = function () {
    this.layout_ge8abi$(this.unaryPlus_b3a6qy$(iconButton_0(this, GameView$initMusic$lambda(this))), GameView$initMusic$lambda_0);
    if (core.userInfo.isDesktop && !equals(this.persistence_0.getItem_61zpoe$('muted'), 'true')) {
      this.controlsState_0.change_ru8m0w$(GameView$initMusic$lambda_1);
    }
    this.controlsState_0.bind_qlkmfe$(GameView$initMusic$lambda_2(this));
  };
  function GameView$initNextLevelButton$lambda$lambda(this$GameView, this$) {
    return function () {
      var showButton = false;
      if (!this$GameView.currentLevel_0.value.characters.isEmpty()) {
        var $receiver = this$GameView.currentLevel_0.value.characters;
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
        var nextUnplaced = firstOrNull$result;
        if (nextUnplaced == null) {
          println('All placed');
          if (!this$GameView.characterHappiness.value.containsValue_11rc$(false)) {
            println('All Happy');
            showButton = true;
          }
        }
      }
      this$.visible = showButton;
      return Unit;
    };
  }
  function GameView$initNextLevelButton$lambda$lambda$lambda(it) {
    return it + 1 | 0;
  }
  function GameView$initNextLevelButton$lambda$lambda_0(this$GameView) {
    return function (it) {
      this$GameView.currentLevelNumber.change_ru8m0w$(GameView$initNextLevelButton$lambda$lambda$lambda);
      return Unit;
    };
  }
  function GameView$initNextLevelButton$lambda(this$GameView) {
    return function ($receiver) {
      $receiver.label = 'Next Level!';
      bind(or(this$GameView.currentLevel_0, this$GameView.characterHappiness), GameView$initNextLevelButton$lambda$lambda(this$GameView, $receiver));
      click($receiver).add_trkh7z$(GameView$initNextLevelButton$lambda$lambda_0(this$GameView));
      return Unit;
    };
  }
  function GameView$initNextLevelButton$lambda_0($receiver) {
    $receiver.bottom = 10.0;
    $receiver.horizontalCenter = 0.0;
    return Unit;
  }
  GameView.prototype.initNextLevelButton_0 = function () {
    this.layout_ge8abi$(this.unaryPlus_b3a6qy$(iconButton(this, this.atlasPath_0, 'smiley', GameView$initNextLevelButton$lambda(this))), GameView$initNextLevelButton$lambda_0);
  };
  function GameView$initVictoryScreen$lambda(this$GameView) {
    return function () {
      if (!this$GameView.levels.value.isEmpty() && this$GameView.currentLevelNumber.value >= this$GameView.levels.value.size) {
        this$GameView.visible = false;
        addPopUp(this$GameView, new PopUpInfo(new VictoryView(this$GameView)));
      }
      return Unit;
    };
  }
  GameView.prototype.initVictoryScreen_0 = function () {
    bind(or(this.levels, this.currentLevelNumber), GameView$initVictoryScreen$lambda(this));
  };
  Object.defineProperty(GameView.prototype, 'mouseGridPosition_0', {get: function () {
    return this.gameStage_0.canvasToGrid_ewdjp1$(this.mouse.canvasX, this.mouse.canvasY, this.gridPosition_0);
  }});
  function GameView_init$lambda(this$GameView) {
    return function () {
      var tmp$;
      this$GameView.currentLevel_0.value = (tmp$ = getOrNull(this$GameView.levels.value, this$GameView.currentLevelNumber.value)) != null ? tmp$ : emptyLevel;
      return Unit;
    };
  }
  GameView.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameView', interfaces: [CanvasLayoutContainer]};
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
  function GGJ19(owner) {
    CanvasLayoutContainer.call(this, owner);
    (new Skin(get_stage(this))).apply();
    var $receiver = new GameView(this);
    then(load($receiver, 'assets/levelData.txt', AssetType.Companion.TEXT), GGJ19_init$lambda$lambda($receiver));
    this.layout_ge8abi$(this.unaryPlus_b3a6qy$($receiver), GGJ19_init$lambda);
  }
  function GGJ19_init$lambda$lambda(this$) {
    return function (it) {
      this$.levels.value = parseGameData(it);
      return Unit;
    };
  }
  function GGJ19_init$lambda($receiver) {
    $receiver.fill();
    return Unit;
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
      var $receiver_0 = poll(lines);
      var tmp$_4;
      var queue = trim(Kotlin.isCharSequence(tmp$_4 = $receiver_0) ? tmp$_4 : throwCCE()).toString();
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
  function LevelChooser(owner, levels, levelBinding) {
    WindowPanel.call(this, owner);
    this.unaryPlus_b3a6qy$(vGroup(this, LevelChooser_init$lambda(levels, levelBinding)));
  }
  function LevelChooser_init$lambda$lambda$lambda(closure$i, this$) {
    return function (it) {
      this$.toggled = closure$i === (it + 1 | 0);
      return Unit;
    };
  }
  function LevelChooser_init$lambda$lambda$lambda_0(closure$i, closure$levelBinding) {
    return function (it) {
      closure$levelBinding.value = closure$i - 1 | 0;
      return Unit;
    };
  }
  function LevelChooser_init$lambda$lambda(closure$levelBinding, closure$i) {
    return function ($receiver) {
      closure$levelBinding.bind_qlkmfe$(LevelChooser_init$lambda$lambda$lambda(closure$i, $receiver));
      click($receiver).add_trkh7z$(LevelChooser_init$lambda$lambda$lambda_0(closure$i, closure$levelBinding));
      return Unit;
    };
  }
  function LevelChooser_init$lambda(closure$levels, closure$levelBinding) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$levels;
      for (var i = 1; i <= tmp$; i++) {
        $receiver.unaryPlus_b3a6qy$(button($receiver, 'Level ' + i, LevelChooser_init$lambda$lambda(closure$levelBinding, i)));
      }
      return Unit;
    };
  }
  LevelChooser.$metadata$ = {kind: Kind_CLASS, simpleName: 'LevelChooser', interfaces: [WindowPanel]};
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
    GameCharacterType$GRANDPA_instance = new GameCharacterType('GRANDPA', 1, 71);
    GameCharacterType$PARENT_instance = new GameCharacterType('PARENT', 2, 80);
    GameCharacterType$COOK_instance = new GameCharacterType('COOK', 3, 67);
    GameCharacterType$UNKNOWN_instance = new GameCharacterType('UNKNOWN', 4, 85);
    GameCharacterType$Companion_getInstance();
  }
  var GameCharacterType$MUSICIAN_instance;
  function GameCharacterType$MUSICIAN_getInstance() {
    GameCharacterType_initFields();
    return GameCharacterType$MUSICIAN_instance;
  }
  var GameCharacterType$GRANDPA_instance;
  function GameCharacterType$GRANDPA_getInstance() {
    GameCharacterType_initFields();
    return GameCharacterType$GRANDPA_instance;
  }
  var GameCharacterType$PARENT_instance;
  function GameCharacterType$PARENT_getInstance() {
    GameCharacterType_initFields();
    return GameCharacterType$PARENT_instance;
  }
  var GameCharacterType$COOK_instance;
  function GameCharacterType$COOK_getInstance() {
    GameCharacterType_initFields();
    return GameCharacterType$COOK_instance;
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
    if (char === 79)
      return GameCharacterType$GRANDPA_getInstance();
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
    return [GameCharacterType$MUSICIAN_getInstance(), GameCharacterType$GRANDPA_getInstance(), GameCharacterType$PARENT_getInstance(), GameCharacterType$COOK_getInstance(), GameCharacterType$UNKNOWN_getInstance()];
  }
  GameCharacterType.values = GameCharacterType$values;
  function GameCharacterType$valueOf(name) {
    switch (name) {
      case 'MUSICIAN':
        return GameCharacterType$MUSICIAN_getInstance();
      case 'GRANDPA':
        return GameCharacterType$GRANDPA_getInstance();
      case 'PARENT':
        return GameCharacterType$PARENT_getInstance();
      case 'COOK':
        return GameCharacterType$COOK_getInstance();
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
    this.theme.panelBgColor = Color.Companion.DARK_GRAY;
    this.theme.controlBarBgColor = new Color(0.3, 0.3, 0.3, 1.0);
  };
  function Skin$apply$lambda($receiver) {
    $receiver.selectable = false;
    return Unit;
  }
  Skin.prototype.apply = function () {
    BasicUiSkin.prototype.apply.call(this);
    addStyleRule(this.target, charStyle(Skin$apply$lambda));
    var charStyle_0 = new CharStyle();
    charStyle_0.colorTint = Color.Companion.DARK_GRAY;
    charStyle_0.selectable = false;
    addStyleRule_0(this.target, charStyle_0, withAncestor(Button.Companion));
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
    this.grass_0 = this.addChild_mxweac$(this.piece_0('floor_grass_a'));
    this.floor_0 = this.addChild_mxweac$(this.piece_0('floor' + Random.Default.nextInt_za3lpa$(3)));
    this.rightWall_0 = this.addChild_mxweac$(this.piece_0('right_wall' + Random.Default.nextInt_za3lpa$(3), TileView$rightWall$lambda));
    this.leftWall_0 = this.addChild_mxweac$(this.piece_0('left_wall' + Random.Default.nextInt_za3lpa$(3), TileView$leftWall$lambda));
  }
  TileView.prototype.renderGround_5yfmeh$ = function (clip) {
    var isRoom = this.data.value.roomType === RoomType$STANDARD_getInstance();
    if (isRoom)
      this.floor_0.render_5yfmeh$(clip);
    else
      this.grass_0.render_5yfmeh$(clip);
  };
  TileView.prototype.renderRightWall_5yfmeh$ = function (clip) {
    this.rightWall_0.render_5yfmeh$(clip);
  };
  TileView.prototype.renderLeftWall_5yfmeh$ = function (clip) {
    this.leftWall_0.render_5yfmeh$(clip);
  };
  function TileView$piece$lambda($receiver) {
    return Unit;
  }
  function TileView$piece$lambda_0(closure$init) {
    return function ($receiver) {
      $receiver.visible = false;
      $receiver.originY = 64.0;
      $receiver.originX = 128.0;
      $receiver.setScaling_y2kzbl$(0.5, 0.5);
      closure$init($receiver);
      return Unit;
    };
  }
  TileView.prototype.piece_0 = function (region, init) {
    if (init === void 0)
      init = TileView$piece$lambda;
    return atlas_0(this, this.atlasPath_0, region, TileView$piece$lambda_0(init));
  };
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
  function TileView$rightWall$lambda($receiver) {
    $receiver.alpha = 0.7;
    return Unit;
  }
  function TileView$leftWall$lambda($receiver) {
    $receiver.alpha = 0.7;
    return Unit;
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
  function VictoryView(owner) {
    Panel.call(this, owner);
    this.unaryPlus_b3a6qy$(text_0(this, 'Victory!!!'));
  }
  VictoryView.$metadata$ = {kind: Kind_CLASS, simpleName: 'VictoryView', interfaces: [Panel]};
  Object.defineProperty(_, 'config', {get: function () {
    return config;
  }});
  var package$ggj19 = _.ggj19 || (_.ggj19 = {});
  package$ggj19.GameCharacterIconView = GameCharacterIconView;
  package$ggj19.GameCharacterView = GameCharacterView;
  Object.defineProperty(package$ggj19, 'GameRules', {get: GameRules_getInstance});
  $$importsForInline$$.AcornUtils = $module$AcornUtils;
  package$ggj19.GameStage = GameStage;
  package$ggj19.GameView = GameView;
  package$ggj19.UiControlsStateVo = UiControlsStateVo;
  package$ggj19.CameraVo = CameraVo;
  package$ggj19.placeCharacter_opltb5$ = placeCharacter;
  package$ggj19.GridPosition = GridPosition;
  package$ggj19.GGJ19 = GGJ19;
  package$ggj19.parseGameData_61zpoe$ = parseGameData;
  package$ggj19.LevelChooser = LevelChooser;
  Object.defineProperty(GameCharacter, 'Companion', {get: GameCharacter$Companion_getInstance});
  var package$model = package$ggj19.model || (package$ggj19.model = {});
  package$model.GameCharacter = GameCharacter;
  Object.defineProperty(GameCharacterType, 'MUSICIAN', {get: GameCharacterType$MUSICIAN_getInstance});
  Object.defineProperty(GameCharacterType, 'GRANDPA', {get: GameCharacterType$GRANDPA_getInstance});
  Object.defineProperty(GameCharacterType, 'PARENT', {get: GameCharacterType$PARENT_getInstance});
  Object.defineProperty(GameCharacterType, 'COOK', {get: GameCharacterType$COOK_getInstance});
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
  package$ggj19.VictoryView = VictoryView;
  config = new AppConfig(void 0, void 0, void 0, void 0, 60, void 0, void 0, new WindowConfig('GGJ19', void 0, void 0, new Color(0.2, 0.2, 0.2, 1.0)), new GlConfig(true));
  emptyCharacter = new GameCharacter();
  emptyLevel = new GameLevel();
  return _;
}));

//# sourceMappingURL=GGJ19Core.js.map
function alwaysTrue() { return true; }