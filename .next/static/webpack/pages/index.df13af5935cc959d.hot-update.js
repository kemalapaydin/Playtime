"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SendSolForm.tsx":
/*!************************************!*\
  !*** ./components/SendSolForm.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SendSolForm\": function() { return /* binding */ SendSolForm; }\n/* harmony export */ });\n/* harmony import */ var _Users_berkaybaygut_Desktop_Playtime_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_berkaybaygut_Desktop_Playtime_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_berkaybaygut_Desktop_Playtime_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"./node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SendSolForm = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), txSig = ref[0], setTxSig = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), gmtm1 = ref1[0], setGmtm = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), playtimeAmount = ref2[0], setPlaytimeAmount = ref2[1]; // New state to store the user's playtime\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useConnection)().connection;\n    var ref3 = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)(), publicKey = ref3.publicKey, sendTransaction = ref3.sendTransaction;\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), history = ref4[0], setHistory = ref4[1]; // New state to store the user's playtime history\n    var link = function() {\n        return txSig ? \"https://explorer.solana.com/tx/\".concat(txSig, \"?cluster=devnet\") : \"\";\n    };\n    var fetchGmtm = function() {\n        var _ref = _asyncToGenerator(_Users_berkaybaygut_Desktop_Playtime_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var walletAddress, playtime, response, data, gmtm, formatTime;\n            return _Users_berkaybaygut_Desktop_Playtime_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(!connection || !publicKey)) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 2:\n                        walletAddress = document.getElementById(\"walletAddress\");\n                        playtime = document.getElementById(\"playtime\");\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return fetch(\"/api/playtime-claim\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                walletAddress: walletAddress.value,\n                                playtime: playtime.value,\n                                timestamp: new Date()\n                            })\n                        });\n                    case 7:\n                        response = _ctx.sent;\n                        _ctx.next = 10;\n                        return response.json();\n                    case 10:\n                        data = _ctx.sent;\n                        gmtm = data.playtimeDifference; // Assuming the response contains a property called \"gmtm\"\n                        formatTime = function(seconds) {\n                            var hours = Math.floor(seconds / 3600);\n                            var minutes = Math.floor(seconds % 3600 / 60);\n                            var remainingSeconds = seconds % 60;\n                            return \"\".concat(hours, \" hours \").concat(minutes, \" minutes \").concat(remainingSeconds, \" seconds\");\n                        };\n                        setPlaytimeAmount(gmtm / 10000);\n                        setGmtm(formatTime(gmtm) + \" playtime.\" + \"Reward is \" + gmtm / 10000 + \" $GMTM\");\n                        setHistory(data.historyArray);\n                        _ctx.next = 21;\n                        break;\n                    case 18:\n                        _ctx.prev = 18;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        console.error(\"Error:\", _ctx.t0);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    18\n                ]\n            ]);\n        }));\n        return function fetchGmtm() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendSol = function(event) {\n        event.preventDefault();\n        if (!connection || !publicKey) {\n            return;\n        }\n        var transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Transaction();\n        var sendSolInstruction = _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.SystemProgram.transfer({\n            fromPubkey: publicKey,\n            toPubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(\"4xioYX3VFqzdZGwDEPfMED3kWEEyGBMrRk637eiLNJz\"),\n            lamports: _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL * 0.0000887 * playtimeAmount\n        });\n        transaction.add(sendSolInstruction);\n        sendTransaction(transaction, connection).then(function(sig) {\n            setTxSig(sig);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__.WalletMultiButton, {}, void 0, false, {\n                fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            publicKey ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: sendSol,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"userId\",\n                        children: \"User WA:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, _this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        id: \"walletAddress\",\n                        type: \"text\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().formField),\n                        placeholder: \"Enter wallet address\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"userId\",\n                        children: \"User Playtime:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, _this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        id: \"playtime\",\n                        type: \"text\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().formField),\n                        placeholder: \"Enter playtime\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: fetchGmtm,\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().formButton),\n                        children: \"Calculate Playtime for the user\"\n                    }, void 0, false, {\n                        fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, _this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"amount\",\n                        children: gmtm1\n                    }, void 0, false, {\n                        fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().formButton),\n                        children: \"SEND\"\n                    }, void 0, false, {\n                        fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                children: \"Connect Your Wallet for GAMETIME\"\n            }, void 0, false, {\n                fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                lineNumber: 118,\n                columnNumber: 9\n            }, _this),\n            txSig ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"View your transaction on \"\n                    }, void 0, false, {\n                        fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        href: link(),\n                        children: \"Solana Explorer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                lineNumber: 122,\n                columnNumber: 9\n            }, _this) : null,\n            history.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Playtime History\"\n                    }, void 0, false, {\n                        fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, _this),\n                    history.map(function(entry, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            style: {\n                                backgroundColor: index % 2 === 0 ? \"lightgray\" : \"darkgray\",\n                                padding: \"10px\",\n                                borderBottom: \"1px solid gray\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: entry.playtime\n                                }, void 0, false, {\n                                    fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 15\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: entry.timestamp.toDate().toISOString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                                    lineNumber: 140,\n                                    columnNumber: 15\n                                }, _this1)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n                lineNumber: 128,\n                columnNumber: 9\n            }, _this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/berkaybaygut/Desktop/Playtime/components/SendSolForm.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, _this);\n};\n_s(SendSolForm, \"6Uxa+hdni22Hb6uhnz/ciF849xM=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useConnection,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet\n    ];\n});\n_c = SendSolForm;\nvar _c;\n$RefreshReg$(_c, \"SendSolForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFDO2tDQUFDLENBQXlCOzs7Ozs7Z0dBQzNCQyxDQUFDO3dCQUFDQyxJQUFJLEVBQUUvRCxJQUFJO2tDQUFJLENBQWU7Ozs7Ozs7Ozs7O3dCQUVoQyxJQUFJO1lBQ1BGLE9BQU8sQ0FBQ2tFLE1BQU0sR0FBRyxDQUFDLCtFQUNoQnBCLENBQUc7O2dHQUNEcUIsQ0FBRTtrQ0FBQyxDQUFnQjs7Ozs7O29CQUNuQm5FLE9BQU8sQ0FBQ29FLEdBQUcsQ0FBQyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELEtBQUs7MkdBQ3ZCdkIsQ0FBRzs0QkFFRnlCLEtBQUssRUFBRSxDQUFDO2dDQUNOQyxlQUFlLEVBQUVILEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQVcsYUFBRyxDQUFVO2dDQUMzREksT0FBTyxFQUFFLENBQU07Z0NBQ2ZDLFlBQVksRUFBRSxDQUFnQjs0QkFDaEMsQ0FBQzs7NEdBRUFDLENBQUU7OENBQUVMLEtBQUssQ0FBQ2pFLFFBQVE7Ozs7Ozs0R0FDbEIwRCxDQUFDOzhDQUFFTyxLQUFLLENBQUNwRCxTQUFTLENBQUMwRCxNQUFNLEdBQUdDLFdBQVc7Ozs7Ozs7MkJBUm5DUixLQUFLOzs7Ozs7Ozs7Ozt3QkFZZCxJQUFJOzs7Ozs7O0FBR2QsQ0FBQztHQTFJWS9FLFdBQVc7O1FBSUNQLHVFQUFhO1FBQ0dDLG1FQUFTOzs7S0FMckNNLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZW5kU29sRm9ybS50c3g/NDA5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb25uZWN0aW9uLCB1c2VXYWxsZXQgfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xuaW1wb3J0ICogYXMgd2ViMyBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5pbXBvcnQgeyBMQU1QT1JUU19QRVJfU09MIH0gZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiO1xuaW1wb3J0IHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBXYWxsZXRNdWx0aUJ1dHRvbiB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpXCI7XG5pbXBvcnQgeyBIaXN0b3J5RW50cnkgfSBmcm9tIFwiLi4vcGFnZXMvYXBpL3BsYXl0aW1lLWNsYWltXCI7XG5cbmV4cG9ydCBjb25zdCBTZW5kU29sRm9ybTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt0eFNpZywgc2V0VHhTaWddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtnbXRtLCBzZXRHbXRtXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcGxheXRpbWVBbW91bnQsIHNldFBsYXl0aW1lQW1vdW50XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpOyAvLyBOZXcgc3RhdGUgdG8gc3RvcmUgdGhlIHVzZXIncyBwbGF5dGltZVxuICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IHVzZUNvbm5lY3Rpb24oKTtcbiAgY29uc3QgeyBwdWJsaWNLZXksIHNlbmRUcmFuc2FjdGlvbiB9ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlPEhpc3RvcnlFbnRyeVtdPihbXSk7IC8vIE5ldyBzdGF0ZSB0byBzdG9yZSB0aGUgdXNlcidzIHBsYXl0aW1lIGhpc3RvcnlcbiAgY29uc3QgbGluayA9ICgpID0+IHtcbiAgICByZXR1cm4gdHhTaWdcbiAgICAgID8gYGh0dHBzOi8vZXhwbG9yZXIuc29sYW5hLmNvbS90eC8ke3R4U2lnfT9jbHVzdGVyPWRldm5ldGBcbiAgICAgIDogXCJcIjtcbiAgfTtcblxuICBjb25zdCBmZXRjaEdtdG0gPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFjb25uZWN0aW9uIHx8ICFwdWJsaWNLZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgd2FsbGV0QWRkcmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJ3YWxsZXRBZGRyZXNzXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgcGxheXRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXl0aW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcGxheXRpbWUtY2xhaW1cIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB3YWxsZXRBZGRyZXNzOiB3YWxsZXRBZGRyZXNzLnZhbHVlLFxuICAgICAgICAgIHBsYXl0aW1lOiBwbGF5dGltZS52YWx1ZSxcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3QgZ210bSA9IGRhdGEucGxheXRpbWVEaWZmZXJlbmNlOyAvLyBBc3N1bWluZyB0aGUgcmVzcG9uc2UgY29udGFpbnMgYSBwcm9wZXJ0eSBjYWxsZWQgXCJnbXRtXCJcbiAgICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAoc2Vjb25kczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHNlY29uZHMgJSAzNjAwKSAvIDYwKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcblxuICAgICAgICByZXR1cm4gYCR7aG91cnN9IGhvdXJzICR7bWludXRlc30gbWludXRlcyAke3JlbWFpbmluZ1NlY29uZHN9IHNlY29uZHNgO1xuICAgICAgfTtcbiAgICAgIHNldFBsYXl0aW1lQW1vdW50KGdtdG0gLyAxMDAwMCk7XG4gICAgICBzZXRHbXRtKFxuICAgICAgICBmb3JtYXRUaW1lKGdtdG0pICsgXCIgcGxheXRpbWUuXCIgKyBcIlJld2FyZCBpcyBcIiArIGdtdG0gLyAxMDAwMCArIFwiICRHTVRNXCJcbiAgICAgICk7XG4gICAgICBzZXRIaXN0b3J5KGRhdGEuaGlzdG9yeUFycmF5KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZW5kU29sID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWNvbm5lY3Rpb24gfHwgIXB1YmxpY0tleSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyB3ZWIzLlRyYW5zYWN0aW9uKCk7XG5cbiAgICBjb25zdCBzZW5kU29sSW5zdHJ1Y3Rpb24gPSB3ZWIzLlN5c3RlbVByb2dyYW0udHJhbnNmZXIoe1xuICAgICAgZnJvbVB1YmtleTogcHVibGljS2V5LFxuICAgICAgdG9QdWJrZXk6IG5ldyB3ZWIzLlB1YmxpY0tleShcbiAgICAgICAgXCI0eGlvWVgzVkZxemRaR3dERVBmTUVEM2tXRUV5R0JNclJrNjM3ZWlMTkp6XCJcbiAgICAgICksXG4gICAgICBsYW1wb3J0czogTEFNUE9SVFNfUEVSX1NPTCAqIDAuMDAwMDg4NyAqIHBsYXl0aW1lQW1vdW50LFxuICAgIH0pO1xuXG4gICAgdHJhbnNhY3Rpb24uYWRkKHNlbmRTb2xJbnN0cnVjdGlvbik7XG4gICAgc2VuZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBjb25uZWN0aW9uKS50aGVuKChzaWcpID0+IHtcbiAgICAgIHNldFR4U2lnKHNpZyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFdhbGxldE11bHRpQnV0dG9uIC8+XG4gICAgICB7cHVibGljS2V5ID8gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZFNvbH0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VySWRcIj5Vc2VyIFdBOjwvbGFiZWw+IHsvKiBOZXcgaW5wdXQgZm9yIHVzZXIgSUQgKi99XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cIndhbGxldEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUZpZWxkfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB3YWxsZXQgYWRkcmVzc1wiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VySWRcIj5Vc2VyIFBsYXl0aW1lOjwvbGFiZWw+e1wiIFwifVxuICAgICAgICAgIHsvKiBOZXcgaW5wdXQgZm9yIHVzZXIgSUQgKi99XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInBsYXl0aW1lXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1GaWVsZH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGxheXRpbWVcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17ZmV0Y2hHbXRtfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUJ1dHRvbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDYWxjdWxhdGUgUGxheXRpbWUgZm9yIHRoZSB1c2VyXG4gICAgICAgICAgPC9idXR0b24+e1wiIFwifVxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW1vdW50XCI+e2dtdG19PC9sYWJlbD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQnV0dG9ufT5cbiAgICAgICAgICAgIFNFTkRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4+Q29ubmVjdCBZb3VyIFdhbGxldCBmb3IgR0FNRVRJTUU8L3NwYW4+XG4gICAgICApfVxuXG4gICAgICB7dHhTaWcgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+VmlldyB5b3VyIHRyYW5zYWN0aW9uIG9uIDwvcD5cbiAgICAgICAgICA8YSBocmVmPXtsaW5rKCl9PlNvbGFuYSBFeHBsb3JlcjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtoaXN0b3J5Lmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPlBsYXl0aW1lIEhpc3Rvcnk8L2gyPlxuICAgICAgICAgIHtoaXN0b3J5Lm1hcCgoZW50cnksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBcImxpZ2h0Z3JheVwiIDogXCJkYXJrZ3JheVwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgZ3JheVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDM+e2VudHJ5LnBsYXl0aW1lfTwvaDM+XG4gICAgICAgICAgICAgIDxwPntlbnRyeS50aW1lc3RhbXAudG9EYXRlKCkudG9JU09TdHJpbmcoKX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlQ29ubmVjdGlvbiIsInVzZVdhbGxldCIsIndlYjMiLCJMQU1QT1JUU19QRVJfU09MIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJXYWxsZXRNdWx0aUJ1dHRvbiIsIlNlbmRTb2xGb3JtIiwidHhTaWciLCJzZXRUeFNpZyIsImdtdG0iLCJzZXRHbXRtIiwicGxheXRpbWVBbW91bnQiLCJzZXRQbGF5dGltZUFtb3VudCIsImNvbm5lY3Rpb24iLCJwdWJsaWNLZXkiLCJzZW5kVHJhbnNhY3Rpb24iLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsImxpbmsiLCJmZXRjaEdtdG0iLCJ3YWxsZXRBZGRyZXNzIiwicGxheXRpbWUiLCJyZXNwb25zZSIsImRhdGEiLCJmb3JtYXRUaW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidmFsdWUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwianNvbiIsInBsYXl0aW1lRGlmZmVyZW5jZSIsInNlY29uZHMiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJyZW1haW5pbmdTZWNvbmRzIiwiaGlzdG9yeUFycmF5IiwiY29uc29sZSIsImVycm9yIiwic2VuZFNvbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0cmFuc2FjdGlvbiIsIlRyYW5zYWN0aW9uIiwic2VuZFNvbEluc3RydWN0aW9uIiwiU3lzdGVtUHJvZ3JhbSIsInRyYW5zZmVyIiwiZnJvbVB1YmtleSIsInRvUHVia2V5IiwiUHVibGljS2V5IiwibGFtcG9ydHMiLCJhZGQiLCJ0aGVuIiwic2lnIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJmb3JtRmllbGQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayIsImZvcm1CdXR0b24iLCJiciIsInNwYW4iLCJwIiwiYSIsImhyZWYiLCJsZW5ndGgiLCJoMiIsIm1hcCIsImluZGV4IiwiZW50cnkiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJCb3R0b20iLCJoMyIsInRvRGF0ZSIsInRvSVNPU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SendSolForm.tsx\n");

/***/ })

});