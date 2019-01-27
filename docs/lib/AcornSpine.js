(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'AcornUtils', 'AcornUiCore'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('AcornUtils'), require('AcornUiCore'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'AcornSpine'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'AcornSpine'.");
    }
    if (typeof AcornUtils === 'undefined') {
      throw new Error("Error loading module 'AcornSpine'. Its dependency 'AcornUtils' was not found. Please, check whether 'AcornUtils' is loaded prior to 'AcornSpine'.");
    }
    if (typeof AcornUiCore === 'undefined') {
      throw new Error("Error loading module 'AcornSpine'. Its dependency 'AcornUiCore' was not found. Please, check whether 'AcornUiCore' is loaded prior to 'AcornSpine'.");
    }
    root.AcornSpine = factory(typeof AcornSpine === 'undefined' ? {} : AcornSpine, kotlin, AcornUtils, AcornUiCore);
  }
}(this, function (_, Kotlin, $module$AcornUtils, $module$AcornUiCore) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ensureNotNull = Kotlin.ensureNotNull;
  var numberToInt = Kotlin.numberToInt;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var ClearableObjectPool_init = $module$AcornUtils.com.acornui.collection.ClearableObjectPool_init_y83ar3$;
  var Clearable = $module$AcornUtils.com.acornui.collection.Clearable;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var math = $module$AcornUtils.com.acornui.math;
  var toString = Kotlin.toString;
  var arrayCopy = $module$AcornUtils.com.acornui.collection.arrayCopy_hd6cw9$;
  var throwCCE = Kotlin.throwCCE;
  var Color = $module$AcornUtils.com.acornui.graphic.Color;
  var MinMax = $module$AcornUtils.com.acornui.math.MinMax;
  var Vector2 = $module$AcornUtils.com.acornui.math.Vector2;
  var VertexAttribute = $module$AcornUiCore.com.acornui.gl.core.VertexAttribute;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var VertexAttributes = $module$AcornUiCore.com.acornui.gl.core.VertexAttributes;
  var loadAndCacheJson = $module$AcornUiCore.com.acornui.core.asset.loadAndCacheJson_9odbhe$;
  var graphic = $module$AcornUiCore.com.acornui.core.graphic;
  var stringMapOf = $module$AcornUtils.com.acornui.collection.stringMapOf_gkrhic$;
  var awaitAll = $module$AcornUtils.com.acornui.async.awaitAll_qff8ei$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var async = $module$AcornUtils.com.acornui.async.async_lnyleu$;
  var AtlasPageDecorator = $module$AcornUiCore.com.acornui.core.graphic.AtlasPageDecorator;
  var AssetType = $module$AcornUiCore.com.acornui.core.asset.AssetType;
  var UiComponentImpl = $module$AcornUiCore.com.acornui.component.UiComponentImpl;
  var onTick = $module$AcornUiCore.com.acornui.core.time.onTick_1ilr4g$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var equals = Kotlin.equals;
  var string = $module$AcornUtils.com.acornui.serialization.string_uavegi$;
  var From = $module$AcornUtils.com.acornui.serialization.From;
  var bool = $module$AcornUtils.com.acornui.serialization.bool_uavegi$;
  var int = $module$AcornUtils.com.acornui.serialization.int_uavegi$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var BlendMode = $module$AcornUiCore.com.acornui.core.graphic.BlendMode;
  var floatArray = $module$AcornUtils.com.acornui.serialization.floatArray_uavegi$;
  var floatArray_0 = $module$AcornUtils.com.acornui.serialization.floatArray_86n5bk$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var putIndex = $module$AcornUiCore.com.acornui.gl.core.putIndex_yk6tvf$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var Animation$Companion_instance = null;
  var Array_0 = Array;
  var ColorTimeline$Companion_instance = null;
  var CurveTimeline$Companion_instance = null;
  var IkConstraintTimeline$Companion_instance = null;
  var RotateTimeline$Companion_instance = null;
  var ScaleTimeline$Companion_instance = null;
  var TranslateTimeline$Companion_instance = null;
  var Math_0 = Math;
  var RegionAttachment$Companion_instance = null;
  var spineVertexAttributes;
  var SpineVertexUtils_instance = null;
  var Map = Kotlin.kotlin.collections.Map;
  var CurveType$LINEAR_instance;
  var CurveType$STEPPED_instance;
  var CurveType$BEZIER_instance;
  var SkeletonDataSerializer_instance = null;
  var BoneDataSerializer_instance = null;
  var SpineEventDefaultsSerializer_instance = null;
  var SkinAttachmentSerializer_instance = null;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var IkConstraintDataSerializer_instance = null;
  var TransformConstraintDataSerializer_instance = null;
  var AnimationDataSerializer_instance = null;
  var SlotDataSerializer_instance = null;
  var AttachmentFrameDataSerializer_instance = null;
  var ColorFrameDataSerializer_instance = null;
  var CurveDataSerializer_instance = null;
  var DrawOrderFrameDataSerializer_instance = null;
  var DrawOrderOffsetDataSerializer_instance = null;
  var EventFrameDataSerializer_instance = null;
  var FfdFrameDataSerializer_instance = null;
  var IkConstraintFrameDataSerializer_instance = null;
  var RotateFrameDataSerializer_instance = null;
  var ScaleFrameDataSerializer_instance = null;
  var BezierCurveDataSerializer_instance = null;
  var TranslateFrameDataSerializer_instance = null;
  var BoundingBoxAttachmentDataSerializer_instance = null;
  var MeshAttachmentDataSerializer_instance = null;
  var RegionAttachmentDataSerializer_instance = null;
  var SkinAttachmentDataSerializer_instance = null;
  var WeightedMeshAttachmentDataSerializer_instance = null;
  var SkinAttachmentType$REGION_instance;
  var SkinAttachmentType$BOUNDINGBOX_instance;
  var SkinAttachmentType$MESH_instance;
  var SkinAttachmentType$WEIGHTEDMESH_instance;
  var IkConstraint$Companion_instance = null;
  var SkeletonMeshRenderer_instance = null;
  var Skin$Companion_instance = null;
  $$importsForInline$$.AcornUtils = $module$AcornUtils;
  spineVertexAttributes = new VertexAttributes(listOf([new VertexAttribute(2, false, 5126, 0), new VertexAttribute(4, false, 5126, 2), new VertexAttribute(2, false, 5126, 3)]));
  return _;
}));

//# sourceMappingURL=AcornSpine.js.map
function alwaysTrue() { return true; }