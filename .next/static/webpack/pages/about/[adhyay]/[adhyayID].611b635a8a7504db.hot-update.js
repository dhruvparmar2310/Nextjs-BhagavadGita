"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about/[adhyay]/[adhyayID]",{

/***/ "./src/pages/about/[adhyay]/[adhyayID].js":
/*!************************************************!*\
  !*** ./src/pages/about/[adhyay]/[adhyayID].js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_about_adhyay_adhyayID_js_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/pages/about/[adhyay]/[adhyayID].js\",\"import\":\"Ysabeau\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"200\",\"300\",\"400\",\"500\"],\"style\":[\"normal\",\"italic\"]}],\"variableName\":\"ysabeau\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/pages/about/[adhyay]/[adhyayID].js\\\",\\\"import\\\":\\\"Ysabeau\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"200\\\",\\\"300\\\",\\\"400\\\",\\\"500\\\"],\\\"style\\\":[\\\"normal\\\",\\\"italic\\\"]}],\\\"variableName\\\":\\\"ysabeau\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_about_adhyay_adhyayID_js_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_about_adhyay_adhyayID_js_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/Adhyay.module.css */ \"./src/styles/Adhyay.module.css\");\n/* harmony import */ var _styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_assets_adhyay_ch_1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/assets/adhyay/ch-1.jpg */ \"./public/assets/adhyay/ch-1.jpg\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction AdhyayID() {\n    var _data_content;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { adhyayID  } = router.query;\n    const fetchAdhyay = ()=>{\n        const response = axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/api/adhyay/\".concat(adhyayID)).then((data)=>{\n            console.log(\"data >> \", data === null || data === void 0 ? void 0 : data.data);\n            setData(data === null || data === void 0 ? void 0 : data.data);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetchAdhyay();\n        console.log(\"adhyayID :>> \", adhyayID);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"breadcrumbs\",\n                className: \"breadcrumbs\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-between align-items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"Adhyay - \",\n                                    adhyayID\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                            lineNumber: 38,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 38,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/about/adhyay\",\n                                            children: \"Adhyay\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                            lineNumber: 39,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            \"Adhyay - \",\n                                            adhyayID\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"about-us\",\n                className: \"\".concat((_styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_7___default().adhyay)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    \"data-aos\": \"fade-up\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row \".concat((_styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_7___default().content)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-4 text-center\",\n                                \"data-aos\": \"fade-right\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _public_assets_adhyay_ch_1_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n                                    className: \"img-fluid\",\n                                    width: 500,\n                                    height: 500,\n                                    quality: 100,\n                                    alt: \"bhagavad gita\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-8 \".concat((next_font_google_target_css_path_src_pages_about_adhyay_adhyayID_js_import_Ysabeau_arguments_subsets_latin_weight_200_300_400_500_style_normal_italic_variableName_ysabeau___WEBPACK_IMPORTED_MODULE_8___default().className)),\n                                \"data-aos\": \"fade-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"The Bhagavad Gita, or the song of God, was revealed by Lord Shree Krishna to Arjun on the threshold of the epic war of Mahabharata. A decisive battle between two sets of cousins, the Kauravas and the Pandavas, was just about to commence on the battlefield of Kurukshetra. A detailed account of the reasons that led to such a colossal war; is given under Introduction-The Setting of the Bhagavad Gita.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 60,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-italic\",\n                                        children: \"The Bhagavad Gita is primarily a conversation between Lord Shree Krishna and Arjun. However, the first chapter begins with a dialogue between King Dhritarashtra and his minister Sanjay. Dhritarashtra being blind, could not leave his palace in Hastinapur but was eager to know the ongoings of the battlefield.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 63,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-italic\",\n                                        children: \"Sanjay was a disciple of Sage Ved Vyas, the author of the epic Mahabharata and several other Hindu scriptures. Sage Ved Vyas possessed a mystic ability to see and hear events occurring in distant places. He had bestowed upon Sanjay the miraculous power of distant vision. Therefore, Sanjay could see and hear, what transpired on the battleground of Kurukshetra, and gave a first-hand account to King Dhritarashtra while still being in his palace.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 66,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"about-us\",\n                className: \"\".concat((_styles_Adhyay_module_css__WEBPACK_IMPORTED_MODULE_7___default().faq)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    \"data-aos\": \"fade-up\",\n                    children: data === null || data === void 0 ? void 0 : (_data_content = data.content) === null || _data_content === void 0 ? void 0 : _data_content.map((item)=>{\n                        var _item_translation, _item_translation_hi;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {\n                            children: [\n                                console.log(\"item :>> \", item),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Accordion, {\n                                    defaultActiveKey: item[0],\n                                    flush: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Accordion.Item, {\n                                        eventKey: item === null || item === void 0 ? void 0 : item.shlokID,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Accordion.Header, {\n                                                children: item === null || item === void 0 ? void 0 : item.shlok\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                                lineNumber: 83,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Accordion.Body, {\n                                                children: item === null || item === void 0 ? void 0 : (_item_translation = item.translation) === null || _item_translation === void 0 ? void 0 : (_item_translation_hi = _item_translation.hi) === null || _item_translation_hi === void 0 ? void 0 : _item_translation_hi.data\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                                lineNumber: 86,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                        lineNumber: 82,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                                    lineNumber: 81,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, item === null || item === void 0 ? void 0 : item.shlokID, true, {\n                            fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                            lineNumber: 79,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yudiz/Desktop/Dhruv/Trainee/NextJs/NextJs-BhagavadGita/src/pages/about/[adhyay]/[adhyayID].js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AdhyayID, \"hsn7jijbKTvcSiStWXaVhMMylug=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AdhyayID;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdhyayID);\nvar _c;\n$RefreshReg$(_c, \"AdhyayID\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQvW2FkaHlheV0vW2FkaHlheUlEXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVNQTtBQVZtQjtBQUNLO0FBQ0Y7QUFDVztBQUNXO0FBQ0k7QUFFTTtBQUNYO0FBSWpELFNBQVNZLFdBQVc7UUFnRVBDOztJQS9EVCxNQUFNLENBQUNBLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNRLElBQUlDLE1BQU0sR0FBR1QsK0NBQVFBLENBQUM7SUFDN0IsTUFBTVUsU0FBU2Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBQ2MsU0FBUSxFQUFDLEdBQUdELE9BQU9FLEtBQUs7SUFFakMsTUFBTUMsY0FBYyxJQUFNO1FBQ3hCLE1BQU1DLFdBQVdwQixpREFBUyxDQUFDLGVBQXdCLE9BQVRpQixXQUN6Q0ssSUFBSSxDQUFDVixDQUFBQSxPQUFRO1lBQ1pXLFFBQVFDLEdBQUcsQ0FBQyxZQUFZWixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1BLElBQUk7WUFDbENDLFFBQVFELGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUEsSUFBSTtRQUNwQjtJQUNGO0lBRUFQLGdEQUFTQSxDQUFDLElBQU07UUFDZGM7UUFDQUksUUFBUUMsR0FBRyxDQUFDLGlCQUFpQlA7SUFDL0IsR0FBRyxFQUFFO0lBQ0wscUJBQ0U7OzBCQUNJLDhEQUFDUTtnQkFBUVgsSUFBRztnQkFBY1ksV0FBVTswQkFDaEMsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNYLDRFQUFDQzt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUNFOztvQ0FBRztvQ0FBVVg7Ozs7Ozs7MENBQ2QsOERBQUNZOztrREFDRyw4REFBQ0M7a0RBQUcsNEVBQUM1QixrREFBSUE7NENBQUM2QixNQUFLO3NEQUFJOzs7Ozs7Ozs7OztrREFDbkIsOERBQUNEO2tEQUFHLDRFQUFDNUIsa0RBQUlBOzRDQUFDNkIsTUFBSztzREFBZ0I7Ozs7Ozs7Ozs7O2tEQUMvQiw4REFBQ0Q7OzRDQUFHOzRDQUFVYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTTlCLDhEQUFDUTtnQkFBUVgsSUFBRztnQkFBV1ksV0FBVyxHQUFpQixPQUFkbkIseUVBQWE7MEJBQzlDLDRFQUFDb0I7b0JBQUlELFdBQVU7b0JBQVlPLFlBQVM7OEJBRWhDLDRFQUFDTjt3QkFBSUQsV0FBVyxPQUFzQixPQUFmbkIsMEVBQWM7OzBDQUNqQyw4REFBQ29CO2dDQUFJRCxXQUFVO2dDQUF1Qk8sWUFBUzswQ0FDM0MsNEVBQUNoQyxtREFBS0E7b0NBQUNrQyxLQUFLM0IsMEVBQVE7b0NBQ2hCa0IsV0FBVTtvQ0FDVlUsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsU0FBUztvQ0FDVEMsS0FBSTs7Ozs7Ozs7Ozs7MENBR1osOERBQUNaO2dDQUFJRCxXQUFXLFlBQThCLE9BQWxCM0IsOE5BQWlCO2dDQUFJa0MsWUFBUzs7a0RBQ3hELDhEQUFDTztrREFBRTs7Ozs7O2tEQUdILDhEQUFDQTt3Q0FBRWQsV0FBVTtrREFBYzs7Ozs7O2tEQUczQiw4REFBQ2M7d0NBQUVkLFdBQVU7a0RBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUXpDLDhEQUFDRDtnQkFBUVgsSUFBRztnQkFBV1ksV0FBVyxHQUFjLE9BQVhuQixzRUFBVTswQkFDN0MsNEVBQUNvQjtvQkFBSUQsV0FBVTtvQkFBWU8sWUFBUzs4QkFFakNyQixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGdCQUFBQSxLQUFNc0IsT0FBTyxjQUFidEIsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWU4QixJQUFJLENBQUNDLE9BQVM7NEJBVW5CQTt3QkFUVCxxQkFDRSw4REFBQ3ZDLHVEQUFjOztnQ0FDWm1CLFFBQVFDLEdBQUcsQ0FBQyxhQUFhbUI7OENBQzFCLDhEQUFDbEMsc0RBQVNBO29DQUFDb0Msa0JBQWtCRixJQUFJLENBQUMsRUFBRTtvQ0FBRUcsS0FBSzs4Q0FDekMsNEVBQUNyQywyREFBYzt3Q0FBQ3VDLFVBQVVMLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTU0sT0FBTzs7MERBQ3JDLDhEQUFDeEMsNkRBQWdCOzBEQUNka0MsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNUSxLQUFLOzs7Ozs7MERBRWQsOERBQUMxQywyREFBYzswREFDZGtDLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsb0JBQUFBLEtBQU1VLFdBQVcsY0FBakJWLCtCQUFBQSxLQUFBQSxJQUFBQSx3QkFBQUEsa0JBQW1CVyxrREFBbkJYLEtBQUFBLHlCQUF1Qi9CLElBQU47Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFSSCtCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTU0sT0FBTzs7Ozs7b0JBY3RDOzs7Ozs7Ozs7Ozs7O0FBT1o7R0F2RlN0Qzs7UUFHVVIsa0RBQVNBOzs7S0FIbkJRO0FBeUZULCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hYm91dC9bYWRoeWF5XS9bYWRoeWF5SURdLmpzPzMxYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9BZGh5YXkubW9kdWxlLmNzcydcbmltcG9ydCB7IFlzYWJlYXUgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IG1haW4gZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9hZGh5YXkvY2gtMS5qcGcnXG5pbXBvcnQgeyBBY2NvcmRpb24sIENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmNvbnN0IHlzYWJlYXUgPSBZc2FiZWF1KHsgc3Vic2V0czogWydsYXRpbiddLCB3ZWlnaHQ6IFsnMjAwJywgJzMwMCcsICc0MDAnLCAnNTAwJ10sIHN0eWxlOiBbJ25vcm1hbCcsICdpdGFsaWMnXSB9KVxuXG5mdW5jdGlvbiBBZGh5YXlJRCgpIHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3Qge2FkaHlheUlEfSA9IHJvdXRlci5xdWVyeVxuXG4gIGNvbnN0IGZldGNoQWRoeWF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXhpb3MuZ2V0KGAvYXBpL2FkaHlheS8ke2FkaHlheUlEfWApXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZGF0YSA+PiAnLCBkYXRhPy5kYXRhKVxuICAgICAgc2V0RGF0YShkYXRhPy5kYXRhKVxuICAgIH0pXG4gIH0gXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaEFkaHlheSgpXG4gICAgY29uc29sZS5sb2coJ2FkaHlheUlEIDo+PiAnLCBhZGh5YXlJRCk7XG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYnJlYWRjcnVtYnNcIiBjbGFzc05hbWU9XCJicmVhZGNydW1ic1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkFkaHlheSAtIHthZGh5YXlJRH08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj0nLyc+SG9tZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9Jy9hYm91dC9hZGh5YXknPkFkaHlheTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkaHlheSAtIHthZGh5YXlJRH08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBpZD1cImFib3V0LXVzXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYWRoeWF5fWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7c3R5bGVzLmNvbnRlbnR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgdGV4dC1jZW50ZXJcIiBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e21haW4uc3JjfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nYmhhZ2F2YWQgZ2l0YSdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC1sZy04ICR7eXNhYmVhdS5jbGFzc05hbWV9YH0gZGF0YS1hb3M9XCJmYWRlLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBCaGFnYXZhZCBHaXRhLCBvciB0aGUgc29uZyBvZiBHb2QsIHdhcyByZXZlYWxlZCBieSBMb3JkIFNocmVlIEtyaXNobmEgdG8gQXJqdW4gb24gdGhlIHRocmVzaG9sZCBvZiB0aGUgZXBpYyB3YXIgb2YgTWFoYWJoYXJhdGEuIEEgZGVjaXNpdmUgYmF0dGxlIGJldHdlZW4gdHdvIHNldHMgb2YgY291c2lucywgdGhlIEthdXJhdmFzIGFuZCB0aGUgUGFuZGF2YXMsIHdhcyBqdXN0IGFib3V0IHRvIGNvbW1lbmNlIG9uIHRoZSBiYXR0bGVmaWVsZCBvZiBLdXJ1a3NoZXRyYS4gQSBkZXRhaWxlZCBhY2NvdW50IG9mIHRoZSByZWFzb25zIHRoYXQgbGVkIHRvIHN1Y2ggYSBjb2xvc3NhbCB3YXI7IGlzIGdpdmVuIHVuZGVyIEludHJvZHVjdGlvbi1UaGUgU2V0dGluZyBvZiB0aGUgQmhhZ2F2YWQgR2l0YS5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1pdGFsaWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBCaGFnYXZhZCBHaXRhIGlzIHByaW1hcmlseSBhIGNvbnZlcnNhdGlvbiBiZXR3ZWVuIExvcmQgU2hyZWUgS3Jpc2huYSBhbmQgQXJqdW4uIEhvd2V2ZXIsIHRoZSBmaXJzdCBjaGFwdGVyIGJlZ2lucyB3aXRoIGEgZGlhbG9ndWUgYmV0d2VlbiBLaW5nIERocml0YXJhc2h0cmEgYW5kIGhpcyBtaW5pc3RlciBTYW5qYXkuIERocml0YXJhc2h0cmEgYmVpbmcgYmxpbmQsIGNvdWxkIG5vdCBsZWF2ZSBoaXMgcGFsYWNlIGluIEhhc3RpbmFwdXIgYnV0IHdhcyBlYWdlciB0byBrbm93IHRoZSBvbmdvaW5ncyBvZiB0aGUgYmF0dGxlZmllbGQuXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtaXRhbGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTYW5qYXkgd2FzIGEgZGlzY2lwbGUgb2YgU2FnZSBWZWQgVnlhcywgdGhlIGF1dGhvciBvZiB0aGUgZXBpYyBNYWhhYmhhcmF0YSBhbmQgc2V2ZXJhbCBvdGhlciBIaW5kdSBzY3JpcHR1cmVzLiBTYWdlIFZlZCBWeWFzIHBvc3Nlc3NlZCBhIG15c3RpYyBhYmlsaXR5IHRvIHNlZSBhbmQgaGVhciBldmVudHMgb2NjdXJyaW5nIGluIGRpc3RhbnQgcGxhY2VzLiBIZSBoYWQgYmVzdG93ZWQgdXBvbiBTYW5qYXkgdGhlIG1pcmFjdWxvdXMgcG93ZXIgb2YgZGlzdGFudCB2aXNpb24uIFRoZXJlZm9yZSwgU2FuamF5IGNvdWxkIHNlZSBhbmQgaGVhciwgd2hhdCB0cmFuc3BpcmVkIG9uIHRoZSBiYXR0bGVncm91bmQgb2YgS3VydWtzaGV0cmEsIGFuZCBnYXZlIGEgZmlyc3QtaGFuZCBhY2NvdW50IHRvIEtpbmcgRGhyaXRhcmFzaHRyYSB3aGlsZSBzdGlsbCBiZWluZyBpbiBoaXMgcGFsYWNlLlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYWJvdXQtdXNcIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mYXF9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cblxuICAgICAgICAgICAge2RhdGE/LmNvbnRlbnQ/Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0/LnNobG9rSUR9PlxuICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdpdGVtIDo+PiAnLCBpdGVtKX1cbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gZGVmYXVsdEFjdGl2ZUtleT17aXRlbVswXX0gZmx1c2g+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT17aXRlbT8uc2hsb2tJRH0+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbT8uc2hsb2t9XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbT8udHJhbnNsYXRpb24/LmhpPy5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRoeWF5SURcbiJdLCJuYW1lcyI6WyJ5c2FiZWF1IiwiYXhpb3MiLCJJbWFnZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwibWFpbiIsIkFjY29yZGlvbiIsIkNhcmQiLCJBZGh5YXlJRCIsImRhdGEiLCJzZXREYXRhIiwiaWQiLCJzZXRJZCIsInJvdXRlciIsImFkaHlheUlEIiwicXVlcnkiLCJmZXRjaEFkaHlheSIsInJlc3BvbnNlIiwiZ2V0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJvbCIsImxpIiwiaHJlZiIsImFkaHlheSIsImRhdGEtYW9zIiwiY29udGVudCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwicXVhbGl0eSIsImFsdCIsInAiLCJmYXEiLCJtYXAiLCJpdGVtIiwiRnJhZ21lbnQiLCJkZWZhdWx0QWN0aXZlS2V5IiwiZmx1c2giLCJJdGVtIiwiZXZlbnRLZXkiLCJzaGxva0lEIiwiSGVhZGVyIiwic2hsb2siLCJCb2R5IiwidHJhbnNsYXRpb24iLCJoaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/about/[adhyay]/[adhyayID].js\n"));

/***/ })

});