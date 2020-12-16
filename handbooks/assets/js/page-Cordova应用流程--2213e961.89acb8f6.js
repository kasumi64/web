(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{526:function(a,t,s){"use strict";s.r(t);var n=s(1),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"cordova-应用流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cordova-应用流程"}},[a._v("#")]),a._v(" Cordova 应用流程")]),a._v(" "),s("h2",{attrs:{id:"环境的搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境的搭建"}},[a._v("#")]),a._v(" 环境的搭建")]),a._v(" "),s("ul",[s("li",[a._v("安装 Nodejs    "),s("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("nodejs官网"),s("OutboundLink")],1),a._v(";")]),a._v(" "),s("li",[a._v("安装 Cordova-cli "),s("a",{attrs:{href:"https://cordova.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),s("OutboundLink")],1),a._v(" "),s("ol",[s("li",[a._v("npm install cordova -g;")]),a._v(" "),s("li",[a._v("添加 path 环境变量：C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\cordova\\bin")])])]),a._v(" "),s("li",[a._v("安装 Java-jdk "),s("a",{attrs:{href:"https://www.oracle.com/cn/java/technologies/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java-jdk官网"),s("OutboundLink")],1),a._v(" "),s("ol",[s("li",[a._v("Java SE 8 (1.8) Windows x64")])])]),a._v(" "),s("li",[a._v("安装 Android Studio "),s("a",{attrs:{href:"https://developer.android.google.cn/studio",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),s("OutboundLink")],1),a._v(" "),s("ol",[s("li",[a._v("安装 SDK，安卓的最小版本")]),a._v(" "),s("li",[a._v("安装 AVD 虚拟机")]),a._v(" "),s("li",[a._v("配环境变量，不修改默认路径可以不用配\n"),s("ul",[s("li",[a._v("SDK：ANDROID_HOME = ANDROID_SDK_ROOT = D:\\Android sdk\\SDK\\")]),a._v(" "),s("li",[a._v("AVD：ANDROID_SDK_HOME = D:\\Android sdk\\AndroidAvd\\")])])]),a._v(" "),s("li",[a._v("Studio => file => settings... => System Setting => Android SDK => Android SDK Location 【D:\\Android sdk\\SDK\\】")])])]),a._v(" "),s("li",[a._v("安装 Ant 安卓平台下的打包附属工具"),s("a",{attrs:{href:"https://ant.apache.org/bindownload.cgi",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),s("OutboundLink")],1),a._v(" "),s("ol",[s("li",[a._v("左侧边栏 Download 下的 Binary Distributions")]),a._v(" "),s("li",[a._v("选择 apache-ant-1.10.9-bin.zip，然后解压把 bin 目录放到 path 环境变量中")])])]),a._v(" "),s("li",[a._v("Gradle build 时自动安装\n"),s("ol",[s("li",[a._v("网络不给力时手动安装\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://gradle.org/releases/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网 releases"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://services.gradle.org/distributions/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网 services"),s("OutboundLink")],1)])])]),a._v(" "),s("li",[a._v("安装路径 C:\\Users\\LGY\\.gradle\\wrapper\\dists\\【gradle-6.5-bin】")])])])]),a._v(" "),s("center",[s("font",{attrs:{face:"consolas",color:"#0099ff",size:"4"}},[a._v("Cordova 架构图")])],1),a._v(" "),s("p",[s("img",{attrs:{src:"https://kasumi64.gitee.io/web/image-host/manual/Cordova.png",alt:"Cordova 架构图"}})]),a._v(" "),s("h2",{attrs:{id:"创建工程项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建工程项目"}},[a._v("#")]),a._v(" 创建工程项目")]),a._v(" "),s("ol",[s("li",[a._v("cordova create xxx com.example.xxx HelloWorld\n"),s("ul",[s("li",[a._v("XXX 创建的目录")]),a._v(" "),s("li",[a._v("com.example.xxx  反向域名(包名)")]),a._v(" "),s("li",[a._v("HelloWorld 项目名称")])])]),a._v(" "),s("li",[a._v("cd XXX")]),a._v(" "),s("li",[a._v("cordova platform add android 添加平台")]),a._v(" "),s("li",[a._v("cordova build android 编译app")]),a._v(" "),s("li",[a._v("cordova platform remove android 删除平台"),s("br"),a._v("\ncordova platform rm android 或者")]),a._v(" "),s("li",[a._v("运行app"),s("br"),a._v("\ncordova emulate android"),s("br"),a._v("\ncordova serve android"),s("br"),a._v("\ncordova run android")]),a._v(" "),s("li",[a._v("引入插件，cordova9.0 安卓插件\n"),s("ul",[s("li",[a._v("cordova plugin add cordova-plugin-camera  相机")]),a._v(" "),s("li",[a._v("cordova plugin add cordova-plugin-device  设备")])])]),a._v(" "),s("li",[a._v("查看平台列表 cordova platform ls")]),a._v(" "),s("li",[a._v("查看插件列表 cordova plugin list")]),a._v(" "),s("li",[a._v("cordova requirements 检查是否具备使用 Cordova 开发/运行 Android / IOS 应用的条件")])]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" cordova plugin add cordova"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("...")]),a._v("..\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" cordova plugin add org.apache.cordova. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("...")]),a._v(". //老式写法已淘汰\n1. battery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("status  电池状态\n2. dialogs  对话框\n3. file  文件\n4. geolocation  地理位置\n5. inappbrowser  浏览器窗口\n6. media  媒体\n7. media"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("capture  媒体捕获\n8. network"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("information  网络信息\n9. screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("orientation  屏幕方向\n10. splashscreen  起动页面\n11. statusbar  状态栏\n12. vibration  振动\n13. whitelist  白名单\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[a._v("#")]),a._v(" 目录")]),a._v(" "),s("ul",[s("li",[a._v("platforms：已添加的打包平台，如：android，ios")]),a._v(" "),s("li",[a._v("plugins：引入的插件")]),a._v(" "),s("li",[a._v("www：H5开发目录")])]),a._v(" "),s("h3",{attrs:{id:"安卓工程目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安卓工程目录"}},[a._v("#")]),a._v(" 安卓工程目录")]),a._v(" "),s("ul",[s("li",[a._v("打包好的文件 cordova工程\\platforms\\android\\app\\build\\outputs\\apk\\debug\\app-debug.apk")]),a._v(" "),s("li",[a._v("web文件 cordova工程\\platforms\\android\\app\\src\\main\\assets\\www")])]),a._v(" "),s("h2",{attrs:{id:"cordova-vue-混合开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cordova-vue-混合开发"}},[a._v("#")]),a._v(" Cordova + vue 混合开发")]),a._v(" "),s("p",[a._v("修改 Vue 项目配置文件")]),a._v(" "),s("ul",[s("li",[a._v("脚手架 3.xx 以上")])]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// vue.config.js")]),a._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\toutputDir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("  path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'../bulid_APK/www/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//发布目录")]),a._v("\n\tassetsDir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"static"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//静态资源")]),a._v("\n\tindexPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"index.html"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//入口文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("ul",[s("li",[a._v("脚手架 2.xx 以下")])]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// config/index.js")]),a._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    build"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        index"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'../dist/index.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//打包入口")]),a._v("\n\t    assetsRoot"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'../dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//打包目录")]),a._v("\n        assetsSubDirectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'static'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//静态资源")]),a._v("\n        assetsPublicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("ul",[s("li",[a._v("把打包好的 vue 页面，自动添加到 cordova/www 下面")]),a._v(" "),s("li",[a._v("用 cordova 打包成 apk")])]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意：")]),a._v(" "),s("p",[a._v("打包 APK 的时候不要忘记添加：")]),a._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("script")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("cordova.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("script")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("cordova_plugins.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])]),a._v(" "),s("h2",{attrs:{id:"cordova打包-h5项目打包成ipa-简书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cordova打包-h5项目打包成ipa-简书"}},[a._v("#")]),a._v(" Cordova打包（H5项目打包成ipa）"),s("a",{attrs:{href:"https://www.jianshu.com/p/e952fa42880e",target:"_blank",rel:"noopener noreferrer"}},[a._v("简书"),s("OutboundLink")],1)]),a._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://link.jianshu.com/?t=https://itunes.apple.com/cn/app/xcode/id497799835?mt=12",target:"_blank",rel:"noopener noreferrer"}},[a._v("Xcode"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://link.jianshu.com/?t=https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Node.js"),s("OutboundLink")],1),a._v("(点击Installer进行下载并安装)")]),a._v(" "),s("li",[a._v("Mac系统终端")])]),a._v(" "),s("h3",{attrs:{id:"其它相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它相关"}},[a._v("#")]),a._v(" 其它相关")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- AndroidManifest.xml 信息的配置 --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("uses-sdk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android:")]),a._v("minSdkVersion")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("22"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android:")]),a._v("targetSdkVersion")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("29"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/xiyangbaixue/archive/2016/04/11/5374728.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("相关资料"),s("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=r.exports}}]);