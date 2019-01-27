(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'AcornUtils', 'AcornUiCore'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('AcornUtils'), require('AcornUiCore'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'AcornGame'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'AcornGame'.");
    }
    if (typeof AcornUtils === 'undefined') {
      throw new Error("Error loading module 'AcornGame'. Its dependency 'AcornUtils' was not found. Please, check whether 'AcornUtils' is loaded prior to 'AcornGame'.");
    }
    if (typeof AcornUiCore === 'undefined') {
      throw new Error("Error loading module 'AcornGame'. Its dependency 'AcornUiCore' was not found. Please, check whether 'AcornUiCore' is loaded prior to 'AcornGame'.");
    }
    root.AcornGame = factory(typeof AcornGame === 'undefined' ? {} : AcornGame, kotlin, AcornUtils, AcornUiCore);
  }
}(this, function (_, Kotlin, $module$AcornUtils, $module$AcornUiCore) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Disposable = $module$AcornUtils.com.acornui.core.Disposable;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var From = $module$AcornUtils.com.acornui.serialization.From;
  var To = $module$AcornUtils.com.acornui.serialization.To;
  var string = $module$AcornUtils.com.acornui.serialization.string_c8rh0v$;
  var string_0 = $module$AcornUtils.com.acornui.serialization.string_uavegi$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var acornui = $module$AcornUiCore.com.acornui;
  var _assert = $module$AcornUiCore.com.acornui._assert_eltq40$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var core = $module$AcornUiCore.com.acornui.core;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_bwtc7$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var logging = $module$AcornUtils.com.acornui.logging;
  var copy = $module$AcornUtils.com.acornui.collection.copy_2p1efm$;
  var MinMax = $module$AcornUtils.com.acornui.math.MinMax;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var math = $module$AcornUtils.com.acornui.math;
  var sort = Kotlin.kotlin.collections.sort_pbinho$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Vector2 = $module$AcornUtils.com.acornui.math.Vector2;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var toFloatArray = Kotlin.kotlin.collections.toFloatArray_zwy31$;
  var floatArray = $module$AcornUtils.com.acornui.serialization.floatArray_bs8qql$;
  var floatArray_0 = $module$AcornUtils.com.acornui.serialization.floatArray_uavegi$;
  var toList = Kotlin.kotlin.collections.toList_rjqryz$;
  var Comparable = Kotlin.kotlin.Comparable;
  var Clearable = $module$AcornUtils.com.acornui.collection.Clearable;
  var TextureTarget = $module$AcornUiCore.com.acornui.gl.core.TextureTarget;
  var TextureMinFilter = $module$AcornUiCore.com.acornui.gl.core.TextureMinFilter;
  var GlTextureBase = $module$AcornUiCore.com.acornui.gl.core.GlTextureBase;
  var TextureMagFilter = $module$AcornUiCore.com.acornui.gl.core.TextureMagFilter;
  var TextureWrapMode = $module$AcornUiCore.com.acornui.gl.core.TextureWrapMode;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Pair = Kotlin.kotlin.Pair;
  var Color = $module$AcornUtils.com.acornui.graphic.Color;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var AssetManager = $module$AcornUiCore.com.acornui.core.asset.AssetManager;
  var inject = $module$AcornUiCore.com.acornui.core.di.inject_y3a68v$;
  var AssetType = $module$AcornUiCore.com.acornui.core.asset.AssetType;
  var IntRectangle = $module$AcornUtils.com.acornui.math.IntRectangle;
  var cachedGroup = $module$AcornUiCore.com.acornui.core.asset.cachedGroup_xd4dkp$;
  var graphic = $module$AcornUiCore.com.acornui.core.graphic;
  var loadAndCacheJson = $module$AcornUiCore.com.acornui.core.asset.loadAndCacheJson_9odbhe$;
  var loadAndCacheAtlasPage = $module$AcornUiCore.com.acornui.core.graphic.loadAndCacheAtlasPage_f533ig$;
  var Vector3 = $module$AcornUtils.com.acornui.math.Vector3;
  var ModTagWatch = $module$AcornUtils.com.acornui.observe.ModTagWatch;
  var Matrix4 = $module$AcornUtils.com.acornui.math.Matrix4;
  var Box = $module$AcornUtils.com.acornui.math.Box;
  var numberToInt = Kotlin.numberToInt;
  var uniformMatrix4fv = $module$AcornUiCore.com.acornui.gl.core.uniformMatrix4fv_s3r7dk$;
  var BlendMode = $module$AcornUiCore.com.acornui.core.graphic.BlendMode;
  var Gl20 = $module$AcornUiCore.com.acornui.gl.core.Gl20;
  var GlState = $module$AcornUiCore.com.acornui.gl.core.GlState;
  var Window = $module$AcornUiCore.com.acornui.core.graphic.Window;
  var core_0 = $module$AcornUiCore.com.acornui.gl.core;
  var BufferTexture = $module$AcornUiCore.com.acornui.gl.core.BufferTexture;
  var Scoped = $module$AcornUiCore.com.acornui.core.di.Scoped;
  var ShaderProgramBase = $module$AcornUiCore.com.acornui.gl.core.ShaderProgramBase;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var launch = $module$AcornUtils.com.acornui.async.launch_g2bo5h$;
  var UiComponentImpl = $module$AcornUiCore.com.acornui.component.UiComponentImpl;
  var floatBuffer = $module$AcornUiCore.com.acornui.core.io.floatBuffer_za3lpa$;
  var InteractivityMode = $module$AcornUiCore.com.acornui.component.InteractivityMode;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var get_lastIndex_1 = Kotlin.kotlin.collections.get_lastIndex_rjqryz$;
  var bool = $module$AcornUtils.com.acornui.serialization.bool_uavegi$;
  var bool_0 = $module$AcornUtils.com.acornui.serialization.bool_rvr0ye$;
  var Random = Kotlin.kotlin.random.Random;
  var obj = $module$AcornUtils.com.acornui.serialization.obj_3axv6d$;
  var obj_0 = $module$AcornUtils.com.acornui.serialization.obj_vzin3y$;
  var Version = $module$AcornUiCore.com.acornui.core.Version;
  var arrayList = $module$AcornUtils.com.acornui.serialization.arrayList_3axv6d$;
  var array = $module$AcornUtils.com.acornui.serialization.array_5r75ej$;
  var int = $module$AcornUtils.com.acornui.serialization.int_uavegi$;
  var int_0 = $module$AcornUtils.com.acornui.serialization.int_6g08gh$;
  var onTick = $module$AcornUiCore.com.acornui.core.time.onTick_1ilr4g$;
  var Updatable = $module$AcornUiCore.com.acornui.core.Updatable;
  var Sprite = $module$AcornUiCore.com.acornui.component.Sprite;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var LifecycleBase = $module$AcornUiCore.com.acornui.core.LifecycleBase;
  var closeTo = $module$AcornUtils.com.acornui.core.closeTo_wj6e7o$;
  var sortedInsertionIndex = $module$AcornUtils.com.acornui.collection.sortedInsertionIndex_jmmqv6$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var Matrix3 = $module$AcornUtils.com.acornui.math.Matrix3;
  var toString = Kotlin.toString;
  function SerializableComponentType() {
  }
  function UnknownComponent$Companion() {
    UnknownComponent$Companion_instance = this;
    this.name_tdaagn$_0 = '_Unknown_';
  }
  var UnknownComponent$Companion_instance = null;
  function ComponentSerializer(componentTypes) {
    this.componentTypes = componentTypes;
  }
  var AddEntity$Companion_instance = null;
  var RemoveEntity$Companion_instance = null;
  var Entity$Companion_instance = null;
  function EntitySerializer(componentTypes) {
    this.componentTypes = componentTypes;
    this.componentSerializer_0 = new ComponentSerializer(this.componentTypes);
  }
  var Array_0 = Array;
  var Math_0 = Math;
  var Polygon2$Companion_instance = null;
  function Polygon2Serializer() {
    Polygon2Serializer_instance = this;
  }
  var Polygon2Serializer_instance = null;
  var ExtrudeUtil_instance = null;
  var PointLight$Companion_instance = null;
  var PointLightCamera$Companion_instance = null;
  var IntRectangle_0 = $module$AcornUiCore.$$importsForInline$$.AcornUtils.com.acornui.math.IntRectangle;
  var PACK_FLOAT;
  var UNPACK_FLOAT;
  function ColorTimelineSerializer() {
    ColorTimelineSerializer_instance = this;
  }
  var ColorTimelineSerializer_instance = null;
  var FloatRange$Companion_instance = null;
  function FloatRangeSerializer() {
    FloatRangeSerializer_instance = this;
  }
  var FloatRangeSerializer_instance = null;
  function FloatTimelineSerializer() {
    FloatTimelineSerializer_instance = this;
  }
  var FloatTimelineSerializer_instance = null;
  function ParticleEffectSerializer() {
    ParticleEffectSerializer_instance = this;
    this.serializationVersion = new Version(0, 2, 0);
  }
  var ParticleEffectSerializer_instance = null;
  function ParticleEmitterSerializer() {
    ParticleEmitterSerializer_instance = this;
  }
  var ParticleEmitterSerializer_instance = null;
  function EmitterDurationVoSerializer() {
    EmitterDurationVoSerializer_instance = this;
  }
  var EmitterDurationVoSerializer_instance = null;
  function ParticleImageEntrySerializer() {
    ParticleImageEntrySerializer_instance = this;
  }
  var ParticleImageEntrySerializer_instance = null;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var RegisteredParticleSetters_instance = null;
  var HALF_PI;
  var PropertyTimeline$Companion_instance = null;
  var comparator;
  function PropertyTimelineSerializer() {
    PropertyTimelineSerializer_instance = this;
  }
  var PropertyTimelineSerializer_instance = null;
  var AStar$Companion_instance = null;
  function Physics$Companion() {
    Physics$Companion_instance = this;
    this.name_ptchb5$_0 = 'Physics';
  }
  var Physics$Companion_instance = null;
  function Perimeter$Companion() {
    Perimeter$Companion_instance = this;
    this.name_hnm05l$_0 = 'Perimeter';
  }
  var Perimeter$Companion_instance = null;
  var PhysicsController$Companion_instance = null;
  var CollisionRo$Companion_instance = null;
  var package$com = _.com || (_.com = {});
  var package$acornui = package$com.acornui || (package$com.acornui = {});
  var package$ecs = package$acornui.ecs || (package$acornui.ecs = {});
  $$importsForInline$$.AcornUiCore = $module$AcornUiCore;
  package$ecs.SerializableComponentType = SerializableComponentType;
  package$ecs.ComponentSerializer = ComponentSerializer;
  $$importsForInline$$.AcornUtils = $module$AcornUtils;
  package$ecs.EntitySerializer = EntitySerializer;
  SerializableComponentType.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  UnknownComponent$Companion.prototype.write2_6l37rg$ = SerializableComponentType.prototype.write2_6l37rg$;
  ComponentSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  EntitySerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  Polygon2Serializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  ColorTimelineSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  FloatRangeSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  FloatTimelineSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  ParticleEffectSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  ParticleEmitterSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  EmitterDurationVoSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  ParticleImageEntrySerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  PropertyTimelineSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  Physics$Companion.prototype.write2_6l37rg$ = SerializableComponentType.prototype.write2_6l37rg$;
  Perimeter$Companion.prototype.write2_6l37rg$ = SerializableComponentType.prototype.write2_6l37rg$;
  PACK_FLOAT = '\nvec4 packFloat(const in float value) {\n\tconst vec4 bit_shift = vec4(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);\n\tconst vec4 bit_mask  = vec4(0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);\n\tvec4 res = fract(value * bit_shift);\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\n';
  UNPACK_FLOAT = '\nfloat unpackFloat(const in vec4 rgba_depth) {\n\tconst vec4 bit_shift = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);\n\tfloat depth = dot(rgba_depth, bit_shift);\n\treturn depth;\n}\n';
  HALF_PI = math.PI * 0.5;
  return _;
}));

//# sourceMappingURL=AcornGame.js.map
function alwaysTrue() { return true; }