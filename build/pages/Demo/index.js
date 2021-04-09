(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/babel-loader/lib/index.js?cwd=c:\\Users\\65140\\Desktop\\quickAPP\\helloworld&cacheDirectory&plugins[]=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Demo/index.ux?uxType=page":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/babel-loader/lib/index.js?cwd=c:\Users\65140\Desktop\quickAPP\helloworld&cacheDirectory&plugins[]=c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Demo/index.ux?uxType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  private: {
    end: false,
    curPage: 1,
    categories: [],
    curIndex: 0,
    list: []
  },

  onInit() {
    _system.default.fetch({
      url: 'https://wikihow.xiaozuowen.net/categories/',
      success: res => {
        const data = JSON.parse(res.data);
        this.categories = data.list;
      }
    });
  },

  tabChange(e) {
    this.curIndex = e.index;
    const curName = this.categories[this.curIndex].name;
    this.request();
  },

  request() {
    const curName = this.categories[this.curIndex].name;
    console.log(curName);

    _system.default.fetch({
      url: 'https://wikihow.xiaozuowen.net/categories/' + curName,
      data: {
        size: 4
      },
      success: res => {
        const data = JSON.parse(res.data);
        console.log(data.list);
        this.list = data.list;
      }
    });
  },

  loadMore() {
    const curName = this.categories[this.curIndex].name;

    _system.default.fetch({
      url: 'https://wikihow.xiaozuowen.net/categories/' + curName,
      data: {
        size: 2 * this.curPage++
      },
      success: res => {
        const data = JSON.parse(res.data);
        console.log(data.list);
        this.list = this.list.concat(data.list);

        if (!this.list.length) {
          this.end = true;
        }
      }
    });
  }

};
exports.default = _default;
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    const accType = typeof moduleOwn[acc];

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (const name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Demo/index.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Demo/index.ux?uxType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".all-tab": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".search": {
    "paddingTop": "15px",
    "paddingRight": "25px",
    "paddingBottom": "15px",
    "paddingLeft": "25px",
    "borderTopColor": "#556e88",
    "borderRightColor": "#556e88",
    "borderBottomColor": "#556e88",
    "borderLeftColor": "#556e88",
    "borderBottomWidth": "1px"
  },
  ".tab-bar": {
    "backgroundColor": "#f2f2f2"
  },
  ".tab-bar text": {
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px",
    "color": "#aa8d8d",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".tab-bar .active": {
    "color": "#FF0000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "active"
        }
      ]
    }
  },
  ".search input": {
    "width": "100%",
    "paddingTop": "10px",
    "paddingRight": "15px",
    "paddingBottom": "10px",
    "paddingLeft": "15px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#ced4da",
    "borderRightColor": "#ced4da",
    "borderBottomColor": "#ced4da",
    "borderLeftColor": "#ced4da",
    "borderRadius": "10px",
    "fontSize": "28px",
    "backgroundColor": "#ffffff",
    "height": "60px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "input"
        }
      ]
    }
  },
  ".tab-section": {
    "flexDirection": "column",
    "justifyContent": "center"
  },
  ".list-item": {
    "paddingTop": "25px",
    "paddingRight": "25px",
    "paddingBottom": "25px",
    "paddingLeft": "25px",
    "borderTopColor": "#0881fa",
    "borderRightColor": "#0881fa",
    "borderBottomColor": "#0881fa",
    "borderLeftColor": "#0881fa",
    "borderBottomWidth": "1px",
    "backgroundColor": "#ffffff"
  },
  ".list-item .image": {
    "flexShrink": 0,
    "width": "200px",
    "height": "400px",
    "marginRight": "10px",
    "marginLeft": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "image"
        }
      ]
    }
  },
  ".list-item .info": {
    "flexDirection": "column",
    "width": "500px",
    "height": "400px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        }
      ]
    }
  },
  ".list-item .info .title": {
    "marginBottom": "10px",
    "fontSize": "32px",
    "color": "#1c87f1",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title"
        }
      ]
    }
  }
}

/***/ }),

/***/ "../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Demo/index.ux?uxType=page&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Demo/index.ux?uxType=page& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "all-page"
  ],
  "children": [
    {
      "type": "tabs",
      "attr": {},
      "events": {
        "change": "tabChange"
      },
      "children": [
        {
          "type": "tab-bar",
          "attr": {
            "mode": "scrollable"
          },
          "classList": [
            "tab-bar"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.name}
              },
              "classList": function () {return [this.curIndex===this.$idx?'active':'']},
              "repeat": function () {return this.categories}
            }
          ]
        },
        {
          "type": "tab-content",
          "attr": {},
          "classList": [
            "tab-content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-section"
              ],
              "repeat": function () {return this.categories},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "search"
                  ],
                  "children": [
                    {
                      "type": "input",
                      "attr": {
                        "type": "text",
                        "placeholder": "请输入搜索"
                      }
                    }
                  ]
                },
                {
                  "type": "list",
                  "attr": {},
                  "classList": [
                    "list"
                  ],
                  "events": {
                    "scrollbottom": "loadMore"
                  },
                  "children": [
                    {
                      "type": "list-item",
                      "attr": {
                        "type": "shop-item"
                      },
                      "classList": [
                        "list-item"
                      ],
                      "repeat": function () {return this.list},
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "info"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.title}
                              },
                              "classList": [
                                "title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.desc}
                              }
                            }
                          ]
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.$item.cover_img}
                          }
                        }
                      ]
                    },
                    {
                      "type": "list-item",
                      "attr": {
                        "type": "load"
                      },
                      "children": [
                        {
                          "type": "progress",
                          "attr": {
                            "type": "circular"
                          },
                          "shown": function () {return !this.end}
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "加载更多"
                          },
                          "shown": function () {return !this.end}
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/pages/Demo/index.ux?uxType=page ***!
  \*********************************************/

var $app_style$ = __webpack_require__(/*! !../../../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Demo/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !../../../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/babel-loader/lib/index.js?cwd=c:\Users\65140\Desktop\quickAPP\helloworld&cacheDirectory&plugins[]=c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!../../../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/babel-loader/lib/index.js?cwd=c:\\Users\\65140\\Desktop\\quickAPP\\helloworld&cacheDirectory&plugins[]=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Demo/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Demo/index.ux?uxType=page&")

     $app_module$.exports.style = $app_style$
})
$app_bootstrap$('@app-component/index',{ packagerVersion: "1.9.2" })
})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createPageHandler();
    }
    else {
      window.createPageHandler = createPageHandler
    }
  })();