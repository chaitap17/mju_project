"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DashboardNotifications",
  data: function data() {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      status: ["??????????????????????????????????????????", "???????????????????????????"]
    };
  },
  computed: {
    parsedDirection: function parsedDirection() {
      return this.direction.split(" ");
    },
    height: function height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;

        case "sm":
          return 400;

        case "md":
          return 500;

        case "lg":
          return 600;

        case "xl":
          return 800;
      }
    },
    methods: {
      randomColor: function randomColor() {
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Components/home.vue":
/*!******************************************!*\
  !*** ./resources/js/Components/home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_vue_vue_type_template_id_65036fec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=65036fec& */ "./resources/js/Components/home.vue?vue&type=template&id=65036fec&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/Components/home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_65036fec___WEBPACK_IMPORTED_MODULE_0__.render,
  _home_vue_vue_type_template_id_65036fec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/home.vue?vue&type=template&id=65036fec&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/home.vue?vue&type=template&id=65036fec& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_65036fec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_65036fec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_65036fec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=template&id=65036fec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home.vue?vue&type=template&id=65036fec&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home.vue?vue&type=template&id=65036fec&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home.vue?vue&type=template&id=65036fec& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-app-bar", { attrs: { flat: "" } }, [
        _c("h2", [_vm._v("???????????????????????????????????????")]),
      ]),
      _vm._v(" "),
      _c(
        "v-form",
        {
          model: {
            value: _vm.valid,
            callback: function ($$v) {
              _vm.valid = $$v
            },
            expression: "valid",
          },
        },
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-card",
                    { staticClass: "overflow-hidden" },
                    [
                      _c("h3", [_vm._v("????????????????????? 1 ????????????????????????????????????")]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("h5", [
                                _vm._v("????????????????????? 1 ???????????????????????????????????? ?????????????????????????????? :"),
                              ]),
                              _vm._v(
                                "\n                            ??????????????????\n                            "
                              ),
                              _c("v-text-field", {
                                attrs: {
                                  solo: "",
                                  rules: _vm.nameRules,
                                  label: "????????????????????????????????????????????? ",
                                  required: "",
                                  "error-messages": _vm.nameErrors,
                                  counter: 10,
                                },
                                on: {
                                  input: function ($event) {
                                    return _vm.$v.name.$touch()
                                  },
                                  blur: function ($event) {
                                    return _vm.$v.name.$touch()
                                  },
                                },
                                model: {
                                  value: _vm.name,
                                  callback: function ($$v) {
                                    _vm.name = $$v
                                  },
                                  expression: "name",
                                },
                              }),
                              _vm._v(
                                "???????????????????????? :\n                            "
                              ),
                              _c("v-textarea", {
                                attrs: {
                                  "auto-grow": "",
                                  solo: "",
                                  "single-line": "",
                                  label: "????????????????????????",
                                },
                                model: {
                                  value: _vm.message,
                                  callback: function ($$v) {
                                    _vm.message = $$v
                                  },
                                  expression: "message",
                                },
                              }),
                              _vm._v(
                                "\n                            ????????????????????? :\n                            "
                              ),
                              _c("v-textarea", {
                                attrs: {
                                  "auto-grow": "",
                                  solo: "",
                                  "single-line": "",
                                  label: "?????????????????????",
                                },
                                model: {
                                  value: _vm.message,
                                  callback: function ($$v) {
                                    _vm.message = $$v
                                  },
                                  expression: "message",
                                },
                              }),
                              _vm._v(
                                "\n                            ????????????????????????????????? ??????.\n                            "
                              ),
                              _c("v-select", {
                                attrs: {
                                  items: _vm.items,
                                  label: "????????????????????????????????? ??????.",
                                  solo: "",
                                },
                              }),
                              _vm._v("???????????????????????????????????????:"),
                              _c("v-select", {
                                attrs: {
                                  items: _vm.items,
                                  label: "????????????????????????????????? ??????.",
                                  solo: "",
                                },
                              }),
                              _vm._v("??????????????????????????????????????????"),
                              _c("v-select", {
                                attrs: {
                                  items: _vm.items,
                                  label: "????????????????????????????????? ??????.",
                                  solo: "",
                                },
                              }),
                              _vm._v(
                                "????????????????????????????????????????????????????????????\n                            "
                              ),
                              _c("v-select", {
                                attrs: {
                                  items: _vm.items,
                                  label: "????????????????????????????????? ??????.",
                                  solo: "",
                                },
                              }),
                              _vm._v(
                                "???????????????????????????????????????????????????\n                            "
                              ),
                              _c("v-select", {
                                attrs: {
                                  items: _vm.status,
                                  label: "????????????????????????????????? ??????.",
                                  solo: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("h5", [
                                _vm._v("????????????????????? 1 ???????????????????????????????????? ?????????????????????????????? :"),
                              ]),
                              _vm._v(
                                "\n                            ??????????????????\n                            "
                              ),
                              _c("v-text-field", {
                                attrs: {
                                  solo: "",
                                  rules: _vm.nameRules,
                                  label: "Title name",
                                  required: "",
                                },
                                model: {
                                  value: _vm.name,
                                  callback: function ($$v) {
                                    _vm.name = $$v
                                  },
                                  expression: "name",
                                },
                              }),
                              _vm._v(
                                "Abstract :\n                            "
                              ),
                              _c("v-textarea", {
                                attrs: {
                                  "auto-grow": "",
                                  solo: "",
                                  "single-line": "",
                                  label: "Abstract",
                                },
                                model: {
                                  value: _vm.message,
                                  callback: function ($$v) {
                                    _vm.message = $$v
                                  },
                                  expression: "message",
                                },
                              }),
                              _vm._v(
                                "\n                            Keyword :\n                            "
                              ),
                              _c("v-textarea", {
                                attrs: {
                                  "auto-grow": "",
                                  solo: "",
                                  "single-line": "",
                                  label: "keyword",
                                },
                                model: {
                                  value: _vm.message,
                                  callback: function ($$v) {
                                    _vm.message = $$v
                                  },
                                  expression: "message",
                                },
                              }),
                              _vm._v("??????????????????????????????????????????????????????????????????:"),
                              _c("v-select", {
                                attrs: {
                                  items: _vm.items,
                                  label: "????????????????????????????????? ??????.",
                                  solo: "",
                                },
                              }),
                              _vm._v("?????????????????????????????????????????? :"),
                              _c("v-select", {
                                attrs: {
                                  items: _vm.items,
                                  label: "????????????????????????????????? ??????.",
                                  solo: "",
                                },
                              }),
                              _vm._v("???????????????????????????????????? :"),
                              _c("v-select", {
                                attrs: {
                                  items: _vm.items,
                                  label: "????????????????????????????????? ??????.",
                                  solo: "",
                                },
                              }),
                              _vm._v(
                                "\n                            Road map :"
                              ),
                              _c("v-select", {
                                attrs: {
                                  items: _vm.items,
                                  label: "????????????????????????????????? ??????.",
                                  solo: "",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _vm._v(
                                "\n                            ?????????????????????????????????????????????????????? :\n                            "
                              ),
                              _c("v-text-field", {
                                attrs: {
                                  solo: "",
                                  rules: _vm.nameRules,
                                  label: "Title name",
                                  required: "",
                                },
                                model: {
                                  value: _vm.name,
                                  callback: function ($$v) {
                                    _vm.name = $$v
                                  },
                                  expression: "name",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _vm._v(
                                "\n                            ?????????????????????????????????????????????????????? :\n                            "
                              ),
                              _c("v-text-field", {
                                attrs: {
                                  solo: "",
                                  rules: _vm.nameRules,
                                  label: "Title name",
                                  required: "",
                                },
                                model: {
                                  value: _vm.name,
                                  callback: function ($$v) {
                                    _vm.name = $$v
                                  },
                                  expression: "name",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [_vm._v("????????????????????? 2 ??????????????????????????????????????????")]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c("h5", [_vm._v("????????????????????????????????????")]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????? :\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ????????????????????????????????????????????? :\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _vm._v(
                                    "\n                                ????????? :\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????? :\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _vm._v(
                                    "?????????????????????????????????????????????????????????:\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c("h5", [_vm._v("?????????????????????????????????")]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????? :\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ????????????????????????????????????????????? :\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _vm._v(
                                    "\n                                ????????? :\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????? :\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _vm._v(
                                    "?????????????????????????????????????????????????????????:\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [_vm._v("????????????????????? 3 ???????????????????????????????????????????????????")]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [
                            _vm._v("????????????????????? 4 ?????????????????????????????????????????????????????????????????????"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [_vm._v("????????????????????? 5 ????????????????????????????????????????????????????????????")]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [
                            _vm._v("????????????????????? 6 ???????????????????????????????????????????????????????????????????????????"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [
                            _vm._v("????????????????????? 7 ???????????????????????????????????????????????????????????????????????????"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [_vm._v("????????????????????? 8 ???????????????????????????????????????????????????????????????")]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [
                            _vm._v("????????????????????? 9 ??????????????????????????????????????? ???????????????????????????????????????"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [
                            _vm._v("????????????????????? 10 ????????????????????????????????????????????????????????????????????????"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c("h5", [_vm._v("??????????????????????????????????????????")]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _vm._v(
                                    "\n                                ??????????????????????????????\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _vm._v(
                                    "xxx\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _vm._v(
                                    "????????????????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [_vm._v("????????????????????? 11 ????????????????????????????????????????????????????????????")]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-file-input", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "File input",
                                      required: "",
                                      multiple: "",
                                      "show-size": "",
                                      counter: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [_vm._v("????????????????????? 12 ???????????????????????????????????????????????????")]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c("h5", [_vm._v("???????????????????????????????????????????????????")]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ????????????????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ?????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ??????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ??????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ??????????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [
                            _vm._v("????????????????????? 13 ???????????????????????????????????????????????????????????????????????????"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _vm._v(
                                "??????????????????????????????????????????????????????\n                            "
                              ),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ??????????????????????????????/???????????????????????????????????? ?????????.??????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ??????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????/??????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ????????????????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "5" } },
                                [
                                  _vm._v(
                                    "\n                                ????????? ??????????????? ?????? ??????????????????????????????\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                  _vm._v(
                                    "?????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "7" } },
                                [
                                  _vm._v(
                                    "\n                                ?????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                  _vm._v(
                                    "\n                                ??????????????????????????????/????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [
                            _vm._v("????????????????????? 14 ??????????????????????????????????????????????????????????????????????????????"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [
                            _vm._v("????????????????????? 15 ??????????????????????????????????????????????????????????????????"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c("h5", [_vm._v("???????????????????????????????????????????????????")]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-select", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ?????????????????????????????????/Research Name\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                URL ???????????????????????????\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ??????????????????????????????/???????????????????????????(????????? ?????????.??????????????????)\n                                "
                                  ),
                                  _c("v-text-field", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "Title name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        [
                          _c("h3", [_vm._v("????????????????????????????????????????????????????????????")]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12" } },
                                [
                                  _vm._v(
                                    "\n                                ???????????????????????????????????????????????????\n                                "
                                  ),
                                  _c("v-file-input", {
                                    attrs: {
                                      solo: "",
                                      rules: _vm.nameRules,
                                      label: "File input",
                                      required: "",
                                      multiple: "",
                                      "show-size": "",
                                      counter: "",
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function ($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { justify: "space-around" } },
                        [
                          _c(
                            "v-card-text",
                            {
                              staticStyle: {
                                height: "100px",
                                position: "relative",
                              },
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    depressed: "",
                                    right: "",
                                    color: "blue",
                                    dark: "",
                                    absolute: "",
                                    top: "",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                                ??????????????????\n                            "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);