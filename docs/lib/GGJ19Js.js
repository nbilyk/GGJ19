define(['exports', 'kotlin', 'AcornUiJsBackend', 'AcornUiCore', 'GGJ19Core'], function (_, Kotlin, $module$AcornUiJsBackend, $module$AcornUiCore, $module$GGJ19Core) {
  'use strict';
  var WebGlApplication = $module$AcornUiJsBackend.com.acornui.js.gl.WebGlApplication;
  var WindowConfig = $module$AcornUiCore.com.acornui.core.WindowConfig;
  var GlConfig = $module$AcornUiCore.com.acornui.core.GlConfig;
  var AppConfig = $module$AcornUiCore.com.acornui.core.AppConfig;
  var get_stage = $module$AcornUiCore.com.acornui.component.get_stage_xd4dkp$;
  var GGJ19 = $module$GGJ19Core.ggj19.GGJ19;
  var Unit = Kotlin.kotlin.Unit;
  function main$lambda($receiver) {
    get_stage($receiver).addElement_sxf3l3$(new GGJ19($receiver));
    return Unit;
  }
  function main(args) {
    (new WebGlApplication('gGJ19Root')).start_6zqdxa$(new AppConfig(void 0, void 0, void 0, 60, void 0, new WindowConfig('GGJ19'), new GlConfig(false)), main$lambda);
  }
  var package$ggj19 = _.ggj19 || (_.ggj19 = {});
  var package$js = package$ggj19.js || (package$ggj19.js = {});
  package$js.main_kand9s$ = main;
  main([]);
  return _;
});

//# sourceMappingURL=GGJ19Js.js.map
