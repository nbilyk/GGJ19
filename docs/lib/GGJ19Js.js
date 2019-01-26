(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'AcornUiJsBackend', 'GGJ19Core', 'AcornUiCore'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('AcornUiJsBackend'), require('GGJ19Core'), require('AcornUiCore'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'GGJ19Js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'GGJ19Js'.");
    }
    if (typeof AcornUiJsBackend === 'undefined') {
      throw new Error("Error loading module 'GGJ19Js'. Its dependency 'AcornUiJsBackend' was not found. Please, check whether 'AcornUiJsBackend' is loaded prior to 'GGJ19Js'.");
    }
    if (typeof GGJ19Core === 'undefined') {
      throw new Error("Error loading module 'GGJ19Js'. Its dependency 'GGJ19Core' was not found. Please, check whether 'GGJ19Core' is loaded prior to 'GGJ19Js'.");
    }
    if (typeof AcornUiCore === 'undefined') {
      throw new Error("Error loading module 'GGJ19Js'. Its dependency 'AcornUiCore' was not found. Please, check whether 'AcornUiCore' is loaded prior to 'GGJ19Js'.");
    }
    root.GGJ19Js = factory(typeof GGJ19Js === 'undefined' ? {} : GGJ19Js, kotlin, AcornUiJsBackend, GGJ19Core, AcornUiCore);
  }
}(this, function (_, Kotlin, $module$AcornUiJsBackend, $module$GGJ19Core, $module$AcornUiCore) {
  'use strict';
  var WebGlApplication = $module$AcornUiJsBackend.com.acornui.js.gl.WebGlApplication;
  var anonymous = $module$GGJ19Core;
  var get_stage = $module$AcornUiCore.com.acornui.component.get_stage_xd4dkp$;
  var GGJ19 = $module$GGJ19Core.ggj19.GGJ19;
  var Unit = Kotlin.kotlin.Unit;
  function main$lambda($receiver) {
    get_stage($receiver).addElement_sxf3l3$(new GGJ19($receiver));
    return Unit;
  }
  function main(args) {
    (new WebGlApplication('gGJ19Root')).start_6zqdxa$(anonymous.config, main$lambda);
  }
  var package$ggj19 = _.ggj19 || (_.ggj19 = {});
  var package$js = package$ggj19.js || (package$ggj19.js = {});
  package$js.main_kand9s$ = main;
  main([]);
  return _;
}));

//# sourceMappingURL=GGJ19Js.js.map
function alwaysTrue() { return true; }