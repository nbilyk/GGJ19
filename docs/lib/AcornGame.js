define(['exports', 'kotlin', 'AcornUtils', 'AcornUiCore'], function (_, Kotlin, $module$AcornUtils, $module$AcornUiCore) {
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
  var CommandType = $module$AcornUiCore.com.acornui.core.mvc.CommandType;
  var Command = $module$AcornUiCore.com.acornui.core.mvc.Command;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var invokeCommand = $module$AcornUiCore.com.acornui.core.mvc.invokeCommand_ime8ct$;
  var acornui = $module$AcornUiCore.com.acornui;
  var _assert = $module$AcornUiCore.com.acornui._assert_eltq40$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var core = $module$AcornUiCore.com.acornui.core;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_xf5xz2$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var logging = $module$AcornUtils.com.acornui.logging;
  var copy = $module$AcornUtils.com.acornui.collection.copy_2p1efm$;
  var MinMax = $module$AcornUtils.com.acornui.math.MinMax;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var math = $module$AcornUtils.com.acornui.math;
  var sort = Kotlin.kotlin.collections.sort_pbinho$;
  var floatArray = $module$AcornUtils.com.acornui.serialization.floatArray_bs8qql$;
  var floatArray_0 = $module$AcornUtils.com.acornui.serialization.floatArray_uavegi$;
  var Vector2 = $module$AcornUtils.com.acornui.math.Vector2;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Comparable = Kotlin.kotlin.Comparable;
  var Clearable = $module$AcornUtils.com.acornui.collection.Clearable;
  var TextureTarget = $module$AcornUiCore.com.acornui.gl.core.TextureTarget;
  var GlTextureBase = $module$AcornUiCore.com.acornui.gl.core.GlTextureBase;
  var TextureMinFilter = $module$AcornUiCore.com.acornui.gl.core.TextureMinFilter;
  var TextureMagFilter = $module$AcornUiCore.com.acornui.gl.core.TextureMagFilter;
  var TextureWrapMode = $module$AcornUiCore.com.acornui.gl.core.TextureWrapMode;
  var numberToInt = Kotlin.numberToInt;
  var Gl20 = $module$AcornUiCore.com.acornui.gl.core.Gl20;
  var Color = $module$AcornUtils.com.acornui.graphics.Color;
  var BlendMode = $module$AcornUiCore.com.acornui.core.graphics.BlendMode;
  var inject = $module$AcornUiCore.com.acornui.core.di.inject_y3a68v$;
  var GlState = $module$AcornUiCore.com.acornui.gl.core.GlState;
  var Window = $module$AcornUiCore.com.acornui.core.graphics.Window;
  var Matrix4 = $module$AcornUtils.com.acornui.math.Matrix4;
  var ShaderProgram = $module$AcornUiCore.com.acornui.gl.core.ShaderProgram;
  var Scoped = $module$AcornUiCore.com.acornui.core.di.Scoped;
  var core_0 = $module$AcornUiCore.com.acornui.gl.core;
  var ShaderProgramBase = $module$AcornUiCore.com.acornui.gl.core.ShaderProgramBase;
  var Vector3 = $module$AcornUtils.com.acornui.math.Vector3;
  var ModTagWatch = $module$AcornUtils.com.acornui.observe.ModTagWatch;
  var Box = $module$AcornUtils.com.acornui.math.Box;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var launch = $module$AcornUtils.com.acornui.async.launch_g2bo5h$;
  var UiComponentImpl = $module$AcornUiCore.com.acornui.component.UiComponentImpl;
  var InteractivityMode = $module$AcornUiCore.com.acornui.component.InteractivityMode;
  var onTick = $module$AcornUiCore.com.acornui.core.time.onTick_1ilr4g$;
  var Updatable = $module$AcornUiCore.com.acornui.core.Updatable;
  var cachedGroup = $module$AcornUiCore.com.acornui.core.assets.cachedGroup_xd4dkp$;
  var graphics = $module$AcornUiCore.com.acornui.core.graphics;
  var loadAndCacheJson = $module$AcornUiCore.com.acornui.core.assets.loadAndCacheJson_31kxst$;
  var loadAndCacheAtlasPage = $module$AcornUiCore.com.acornui.core.graphics.loadAndCacheAtlasPage_6zkz2s$;
  var Sprite = $module$AcornUiCore.com.acornui.gl.component.Sprite;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var HashMap_init_0 = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var sortedInsertionIndex = $module$AcornUtils.com.acornui.collection.sortedInsertionIndex_jmmqv6$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var arrayList = $module$AcornUtils.com.acornui.serialization.arrayList_3axv6d$;
  var array = $module$AcornUtils.com.acornui.serialization.array_5r75ej$;
  var bool = $module$AcornUtils.com.acornui.serialization.bool_uavegi$;
  var obj = $module$AcornUtils.com.acornui.serialization.obj_3axv6d$;
  var int = $module$AcornUtils.com.acornui.serialization.int_uavegi$;
  var int_0 = $module$AcornUtils.com.acornui.serialization.int_6g08gh$;
  var obj_0 = $module$AcornUtils.com.acornui.serialization.obj_vzin3y$;
  var bool_0 = $module$AcornUtils.com.acornui.serialization.bool_rvr0ye$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var LifecycleBase = $module$AcornUiCore.com.acornui.core.LifecycleBase;
  var Matrix3 = $module$AcornUtils.com.acornui.math.Matrix3;
  var commander = $module$AcornUiCore.com.acornui.core.mvc.commander_xd4dkp$;
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
  function Polygon2$Companion() {
    Polygon2$Companion_instance = this;
    this.tmp_0 = new Vector2();
    this.mTd2_0 = new Vector2();
    this.supportA_0 = new Float32Array(4);
    this.supportB_0 = new Float32Array(4);
    var array = Array_0(4);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new SortedPoint();
    }
    this.sortedEdgeVertices_0 = array;
    this.vAxis_0 = new Vector2();
  }
  var Polygon2$Companion_instance = null;
  var IntRectangle = $module$AcornUiCore.$$importsForInline$$.AcornUtils.com.acornui.math.IntRectangle;
  var Math_0 = Math;
  var LightingRenderer$Companion_instance = null;
  var PACK_FLOAT;
  var UNPACK_FLOAT;
  var PointLight$Companion_instance = null;
  var PointLightCamera$Companion_instance = null;
  var ParticleEmitterInstance$Companion_instance = null;
  var RegisteredParticleSetters_instance = null;
  function ParticleSpawnSerializer() {
    ParticleSpawnSerializer$Companion_getInstance();
  }
  function ParticleSpawnSerializer$Companion() {
    ParticleSpawnSerializer$Companion_instance = this;
  }
  var ParticleSpawnSerializer$Companion_instance = null;
  var ParticleSpawnRegistry_instance = null;
  var PointSpawn$Companion_instance = null;
  function PointSpawnSerializer() {
    PointSpawnSerializer_instance = this;
    this.type_t8pyvt$_0 = PointSpawn$Companion_getInstance().TYPE;
  }
  var PointSpawnSerializer_instance = null;
  function ParticleEffectSerializer() {
    ParticleEffectSerializer_instance = this;
  }
  var ParticleEffectSerializer_instance = null;
  function ParticleEmitterSerializer() {
    ParticleEmitterSerializer_instance = this;
  }
  var ParticleEmitterSerializer_instance = null;
  function EmitterDurationSerializer() {
    EmitterDurationSerializer_instance = this;
  }
  var EmitterDurationSerializer_instance = null;
  function PropertyTimelineSerializer() {
    PropertyTimelineSerializer_instance = this;
  }
  var PropertyTimelineSerializer_instance = null;
  function ParticleImageEntrySerializer() {
    ParticleImageEntrySerializer_instance = this;
  }
  var ParticleImageEntrySerializer_instance = null;
  var AStar$Companion_instance = null;
  var PhysicsController$Companion_instance = null;
  var CollisionRo$Companion_instance = null;
  function PhysicsVo$Companion() {
    PhysicsVo$Companion_instance = this;
    this.name_k83vuu$_0 = 'PhysicsVo';
  }
  var PhysicsVo$Companion_instance = null;
  function PerimeterVo$Companion() {
    PerimeterVo$Companion_instance = this;
    this.name_tqftrk$_0 = 'PerimeterVo';
  }
  var PerimeterVo$Companion_instance = null;
  var package$com = _.com || (_.com = {});
  var package$acornui = package$com.acornui || (package$com.acornui = {});
  var package$ecs = package$acornui.ecs || (package$acornui.ecs = {});
  $$importsForInline$$.AcornUiCore = $module$AcornUiCore;
  package$ecs.SerializableComponentType = SerializableComponentType;
  package$ecs.ComponentSerializer = ComponentSerializer;
  $$importsForInline$$.AcornUtils = $module$AcornUtils;
  package$ecs.EntitySerializer = EntitySerializer;
  var package$particle = package$acornui.particle || (package$acornui.particle = {});
  package$particle.ParticleSpawnSerializer = ParticleSpawnSerializer;
  SerializableComponentType.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  UnknownComponent$Companion.prototype.write2_6l37rg$ = SerializableComponentType.prototype.write2_6l37rg$;
  ComponentSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  EntitySerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  Polygon2$Companion.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  ParticleSpawnSerializer$Companion.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  ParticleSpawnSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  PointSpawnSerializer.prototype.write2_6l37rg$ = ParticleSpawnSerializer.prototype.write2_6l37rg$;
  ParticleEffectSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  ParticleEmitterSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  EmitterDurationSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  PropertyTimelineSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  ParticleImageEntrySerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  PhysicsVo$Companion.prototype.write2_6l37rg$ = SerializableComponentType.prototype.write2_6l37rg$;
  PerimeterVo$Companion.prototype.write2_6l37rg$ = SerializableComponentType.prototype.write2_6l37rg$;
  PACK_FLOAT = '\nvec4 packFloat(const in float value) {\n\tconst vec4 bit_shift = vec4(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);\n\tconst vec4 bit_mask  = vec4(0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);\n\tvec4 res = fract(value * bit_shift);\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\n';
  UNPACK_FLOAT = '\nfloat unpackFloat(const in vec4 rgba_depth) {\n\tconst vec4 bit_shift = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);\n\tfloat depth = dot(rgba_depth, bit_shift);\n\treturn depth;\n}\n';
  return _;
});

//# sourceMappingURL=AcornGame.js.map
