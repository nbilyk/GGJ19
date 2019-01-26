package ggj19.build

import com.acornui.build.*
import com.acornui.build.util.clean
import java.io.File
import java.util.*

fun main(args: Array<String>) {
	val allModules = ArrayList(ALL_ACORNUI_MODULES)
	allModules.addAll(arrayListOf(GGJ19Core, GGJ19Js, GGJ19Jvm))
	BuildUtil.execute(allModules, args)
}


object GGJ19Core : CoreModule(File("Shell/core"), name = "GGJ19Core") {
	init {
		resources += skin("basic")
		moduleDependencies = arrayListOf(AcornUtils, AcornUiCore, AcornGame, AcornSpine)
	}
}

object GGJ19Js : JsModule(File("Shell/js"), name = "GGJ19Js") {

	private val docsDir = rel("../../docs")

	init {
		//minimize = false
		moduleDependencies = arrayListOf(GGJ19Core, AcornUtils, AcornUiCore, AcornUiJsBackend)
	}

	override fun deployJs() {
		super.deployJs()
		docsDir.clean()
		distWww.copyRecursively(docsDir)
	}
}

object GGJ19Jvm : JvmModule(File("Shell/jvm"), name = "GGJ19Jvm") {
	init {
		mainClass = "ggj19.jvm.GGJ19JvmKt"
		moduleDependencies = arrayListOf(GGJ19Core, AcornUtils, AcornUiCore, AcornUiLwjglBackend)
	}
}