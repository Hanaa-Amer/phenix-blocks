/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/button/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/button/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _px_controls_uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../px-controls/uploader */ "./src/blocks/px-controls/uploader.js");
/* harmony import */ var _px_controls_colors_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../px-controls/colors/text */ "./src/blocks/px-controls/colors/text.js");
/* harmony import */ var _px_controls_elements_margin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../px-controls/elements/margin */ "./src/blocks/px-controls/elements/margin.js");
/* harmony import */ var _px_controls_elements_padding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../px-controls/elements/padding */ "./src/blocks/px-controls/elements/padding.js");
/* harmony import */ var _px_controls_colors_background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../px-controls/colors/background */ "./src/blocks/px-controls/colors/background.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//====> WP Modules <====//







 //====> Edit Mode <====//

function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  //===> Set Settings <===//
  var set_label = function set_label(label) {
    return setAttributes({
      label: label
    });
  };

  var set_outline = function set_outline(outline) {
    return setAttributes({
      outline: outline
    });
  };

  var set_iconLabel = function set_iconLabel(iconLabel) {
    return setAttributes({
      iconLabel: iconLabel
    });
  };

  var set_iconEnd = function set_iconEnd(iconEnd) {
    return setAttributes({
      iconEnd: iconEnd
    });
  };

  var set_data_id = function set_data_id(data_id) {
    return setAttributes({
      data_id: data_id
    });
  };

  var set_data_modal = function set_data_modal(data_modal) {
    return setAttributes({
      data_modal: data_modal
    });
  };

  var set_color = function set_color(color) {
    return setAttributes({
      color: color
    });
  };

  var set_size = function set_size(size) {
    return setAttributes({
      size: size
    });
  };

  var set_type = function set_type(type) {
    return setAttributes({
      type: type
    });
  };

  var set_radius = function set_radius(radius) {
    return setAttributes({
      radius: radius
    });
  };

  var set_isLightBox = function set_isLightBox(isLightBox) {
    return setAttributes({
      isLightBox: isLightBox
    });
  };

  var set_lightbox_src = function set_lightbox_src(lightbox_src) {
    return setAttributes({
      lightbox_src: lightbox_src
    });
  };

  var set_lightbox_type = function set_lightbox_type(lightbox_type) {
    return setAttributes({
      lightbox_type: lightbox_type
    });
  };

  var set_spacing_pd = function set_spacing_pd(spacing_pd) {
    return setAttributes({
      spacing_pd: spacing_pd
    });
  };

  var set_spacing_mg = function set_spacing_mg(spacing_mg) {
    return setAttributes({
      spacing_mg: spacing_mg
    });
  }; //===> Options Tabs <===//


  var changeTab = function changeTab(clicked) {
    var _optionsList$querySel;

    //===> Option Data <===//
    var element = Phenix(clicked.target),
        parent = element.ancestor('.options-tabs'),
        optionsList = Phenix(parent).next('.options-list'),
        currentActive = Phenix(parent.querySelector(':scope > .primary')),
        currentType = "".concat(element[0].getAttribute('data-options')),
        targetElement = optionsList.querySelector(":scope > .".concat(currentType)); //===> Change Active <===//

    currentActive.addClass('light').removeClass('primary');
    element.addClass('primary').removeClass('light'); //===> Show Options <===//

    (_optionsList$querySel = optionsList.querySelector(':scope > .flexbox:not(.hidden)')) === null || _optionsList$querySel === void 0 ? void 0 : _optionsList$querySel.classList.add('hidden');
    Phenix(targetElement).removeClass('hidden');
  }; //===> Link Settings <===//


  var set_isLink = function set_isLink(isLink) {
    return setAttributes({
      isLink: isLink
    });
  };

  var set_inNewTab = function set_inNewTab(inNewTab) {
    return setAttributes({
      inNewTab: inNewTab
    });
  };

  var set_url = function set_url(url) {
    return setAttributes({
      url: url
    });
  }; //===> Set Background <===//


  var set_background = function set_background(background) {
    //===> Adjust Primary Colors <===//
    var primaryColors = ["bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info"];

    if (primaryColors.includes(background.value)) {
      background.value = background.value.replace('bg-', '');
    } //=== Set New Value ===//


    setAttributes({
      background: background.value
    }); //===> Update Rotation <===//

    if (attributes.bg_type === 'gradient' && background.rotation) {
      setAttributes({
        bg_rotate: background.rotation
      });
    } else {
      setAttributes({
        bg_type: background.type
      });
    }
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  var innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)();
  var labelControl = /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    value: attributes.label,
    onChange: set_label,
    tagName: "span",
    placeholder: "TXT",
    className: "mg-0 pd-0"
  }); //===> Set Default Values <===//

  var setDefault = function setDefault() {
    //===> Main Names <===//
    blockProps.className += " btn"; //===> Color/Background <===//

    if (attributes.background) {
      //===> Background Rotation <===//
      if (attributes.bg_rotate) blockProps.className += " ".concat(attributes.bg_rotate); //===> Image Background <===//

      if (attributes.bg_type === 'image') {
        blockProps.className += " px-media";
        blockProps["data-src"] = attributes.background;
        setPhenixView();
      } //===> Name Background <===//
      else blockProps.className += " ".concat(attributes.background);
    }

    if (attributes.color) blockProps.className += " ".concat(attributes.color); //===> Default Type <===//

    if (attributes.type) blockProps.className += " ".concat(attributes.type); //===> Default Size <===//

    if (attributes.size) blockProps.className += " ".concat(attributes.size); //===> Default Radius <===//

    if (attributes.radius) blockProps.className += " ".concat(attributes.radius); //===> Default Style <===//

    if (attributes.outline) blockProps.className += " outline"; //===> Render Spacing <===//

    if (attributes.spacing_pd) blockProps.className += " ".concat(attributes.spacing_pd);
    if (attributes.spacing_mg) blockProps.className += " ".concat(attributes.spacing_mg);
  };

  setDefault(); //===> Set JS URL <===//

  if (attributes.isLink) blockProps['href'] = "#none"; //===> URL Auto-Complete <===//

  var suggestionsRender = function suggestionsRender(props) {
    return /*#__PURE__*/React.createElement("ul", {
      className: "fluid reset-list bg-white bx-shadow-dp-1 border-1 border-solid border-alpha-10 z-index-dropdown position-ab pos-start-0 pos-after-y"
    }, props.suggestions.map(function (suggestion, index) {
      return /*#__PURE__*/React.createElement("li", {
        key: "link-sug-key-".concat(index),
        className: "pdx-15 pdy-5 fs-12 divider-b mouse-pointer",
        onClick: function onClick() {
          return props.handleSuggestionClick(suggestion);
        }
      }, /*#__PURE__*/React.createElement("strong", null, suggestion.title), /*#__PURE__*/React.createElement("span", {
        className: "display-block fs-10 color-primary tx-nowrap"
      }, suggestion.url));
    }));
  }; //===> Render <===//


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Settings"
  }, /*#__PURE__*/React.createElement("label", {
    className: "mb-10 weight-medium"
  }, "Button Type"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadioGroup, {
    label: "Button Type",
    onChange: set_type,
    defaultChecked: attributes.type
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "normal"
  }, "Default"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "square"
  }, "icon only"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "btn-icon"
  }, "with icon")), /*#__PURE__*/React.createElement("span", {
    className: "display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t"
  }), /*#__PURE__*/React.createElement("label", {
    className: "mb-10 weight-medium"
  }, "Button Size"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadioGroup, {
    label: "Button Size",
    onChange: set_size,
    defaultChecked: attributes.size
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "normal"
  }, "Default"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "tiny"
  }, "XS"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "small"
  }, "SM"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "large"
  }, "LG"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "xlarge"
  }, "XL")), /*#__PURE__*/React.createElement("span", {
    className: "display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t"
  }), /*#__PURE__*/React.createElement("label", {
    className: "mb-10 weight-medium"
  }, "Border Radius"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadioGroup, {
    label: "Button Size",
    onChange: set_radius,
    defaultChecked: attributes.radius
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-none"
  }, "NO"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-sm"
  }, "XS"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-md"
  }, "SM"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-lg"
  }, "LG"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-xl"
  }, "XL"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-xxl"
  }, "XXL"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-circle"
  }, "Full Circle"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-height"
  }, "Full Round")), /*#__PURE__*/React.createElement("span", {
    className: "display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t"
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Outline Style",
    checked: attributes.outline,
    onChange: set_outline
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Link Button",
    checked: attributes.isLink,
    onChange: set_isLink
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Lightbox Button",
    checked: attributes.isLightBox,
    onChange: set_isLightBox
  }), attributes.type === 'btn-icon' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Icon as Label",
    checked: attributes.iconLabel,
    onChange: set_iconLabel
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Icon in the End",
    checked: attributes.iconEnd,
    onChange: set_iconEnd
  })) : null), attributes.isLink ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Link Settings"
  }, /*#__PURE__*/React.createElement("span", {
    className: "color-primary tx-icon far fa-link display-block mb-10"
  }, attributes.url), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLinkControlSearchInput, {
    placeholder: "URL or Page Name",
    onChange: set_url,
    value: attributes.url,
    allowDirectEntry: false,
    withURLSuggestion: false,
    withCreateSuggestion: false,
    renderSuggestions: function renderSuggestions(props) {
      return suggestionsRender(props);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Open in New Tab ?",
    checked: attributes.inNewTab,
    onChange: set_inNewTab
  }))) : null, attributes.isLightBox ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Lightbox Settings"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    key: "lightbox-type",
    label: "Lightbox Type",
    value: attributes.lightbox_type,
    onChange: set_lightbox_type,
    options: [{
      label: 'Image',
      value: 'image'
    }, {
      label: 'Video',
      value: 'video'
    }, {
      label: 'Embed',
      value: 'embed'
    }]
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Custom Source",
    checked: attributes.lightbox_src,
    onChange: set_lightbox_src
  }), attributes.lightbox_src ? /*#__PURE__*/React.createElement(_px_controls_uploader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Upload Source",
    type: attributes.lightbox_type,
    value: attributes.url,
    setValue: function setValue(file) {
      setAttributes({
        url: file.url
      });
    }
  }) : /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    key: "container_id",
    label: "Lightbox Source",
    value: attributes.url,
    onChange: set_url
  })) : null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Text Color",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_controls_colors_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: set_color,
    value: attributes.color
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Background",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_controls_colors_background__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: set_background,
    type: attributes.bg_type,
    value: attributes.background
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Spacing",
    initialOpen: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "options-tabs lined-tabs fluid px-group borderd-group divider-b mb-10"
  }, /*#__PURE__*/React.createElement("button", {
    key: "padding",
    onClick: changeTab,
    className: "btn tiny outline primary col",
    "data-options": "padding-size"
  }, "Padding Size"), /*#__PURE__*/React.createElement("button", {
    key: "margin",
    onClick: changeTab,
    className: "btn tiny outline light col",
    "data-options": "margin-size"
  }, "Margin Size")), /*#__PURE__*/React.createElement("div", {
    className: "options-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flexbox padding-size"
  }, /*#__PURE__*/React.createElement(_px_controls_elements_padding__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: "px-spacing_pd",
    onChange: set_spacing_pd,
    value: attributes.spacing_pd
  })), /*#__PURE__*/React.createElement("div", {
    className: "flexbox margin-size hidden"
  }, /*#__PURE__*/React.createElement(_px_controls_elements_margin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: "px-spacing_mg",
    onChange: set_spacing_mg,
    value: attributes.spacing_mg
  })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Custom Data",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Data-ID",
    value: attributes.data_id,
    onChange: set_data_id
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Data-Modal",
    value: attributes.data_modal,
    onChange: set_data_modal
  }))), attributes.preview ? /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/buttons.jpg",
    alt: "",
    className: "fluid"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, attributes.isLink ? /*#__PURE__*/React.createElement("a", _extends({
    onClick: function onClick(event) {
      return event.preventDefault();
    }
  }, blockProps), attributes.type !== 'square' ? labelControl : '') : /*#__PURE__*/React.createElement("button", blockProps, attributes.type !== 'square' ? labelControl : '')));
}

/***/ }),

/***/ "./src/blocks/px-controls/colors/background.js":
/*!*****************************************************!*\
  !*** ./src/blocks/px-controls/colors/background.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PhenixBackground; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uploader */ "./src/blocks/px-controls/uploader.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/
//===> WordPress Modules <===//


 //====> Phenix Modules <====//

 //===> Phenix Background <===//

var PhenixBackground = /*#__PURE__*/function (_Component) {
  _inherits(PhenixBackground, _Component);

  var _super = _createSuper(PhenixBackground);

  function PhenixBackground() {
    var _this;

    _classCallCheck(this, PhenixBackground);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      colors: ["fas fa-redo tx-align-center", "bg-inherit", "bg-transparent", "bg-primary", "bg-primary-dark", "bg-secondary", "bg-secondary-dark", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-offwhite-primary", "bg-offwhite-secondary", "bg-offwhite-info", "bg-offwhite-success", "bg-offwhite-danger", "bg-offwhite-warning", "bg-offwhite-smoke", "bg-offwhite-gray", "bg-offwhite-snow", "bg-offwhite-honeydew", "bg-offwhite-aliceblue", "bg-offwhite-ghost", "bg-offwhite-seashell", "bg-offwhite-beige", "bg-offwhite-oldlace", "bg-offwhite-floral", "bg-offwhite-antique", "bg-offwhite-linen", "bg-offwhite-lavenderblush", "bg-alpha-05", "bg-alpha-10", "bg-alpha-15", "bg-alpha-25", "bg-alpha-50", "bg-alpha-75", "bg-facebook", "bg-twitter", "bg-youtube", "bg-instagram", "bg-snapchat", "bg-whatsapp", "bg-pinterest", "bg-linkedin", "bg-behance", "bg-dribbble", "bg-flicker"],
      gradients: ["bg-grade-primary", "bg-grade-secondary", "bg-grade-warning", "bg-grade-danger", "bg-grade-success", "bg-grade-water", "bg-grade-ice", "bg-grade-fire", "bg-grade-purple"],
      rotation: ['bg-grade-0', 'bg-grade-45', 'bg-grade-90', 'bg-grade-120', 'bg-grade-120n', 'bg-grade-90n', 'bg-grade-45n', 'bg-grade-180'],
      placeholder: "https://via.placeholder.com/480x200.webp?text=Example"
    });

    return _this;
  }

  _createClass(PhenixBackground, [{
    key: "render",
    value: //===> Render <===//
    function render() {
      var _this2 = this;

      //===> Properties <===//
      var _this$props = this.props,
          type = _this$props.type,
          value = _this$props.value,
          label = _this$props.label,
          rotate = _this$props.rotate,
          onChange = _this$props.onChange; //===> Returned Value <===//

      var options = {
        type: type,
        rotate: rotate,
        value: value
      }; //===> Set Type <===//

      var set_type = function set_type(type) {
        //===> Set Value <===//
        options.type = type; //===> change value <===//

        if (options.type === 'image') {
          options.value = _this2.state.placeholder;
        } else {
          options.value = "";
        } //===> Return Options <===//


        return onChange(options);
      }; //===> Set Type <===//


      var set_rotate = function set_rotate(rotate) {
        //===> Set Value <===//
        options.rotate = rotate; //===> change value <===//

        if (options.type !== 'gradient') options.value = ""; //===> Return Options <===//

        return onChange(options);
      }; //===> Set Background <===//


      var setBackground = function setBackground(clicked) {
        //===> Get Value <===//
        var button = clicked.target,
            value = button.getAttribute('data-value'); //===> Colors & Gradients <===//

        if (button) {
          options.value = value;
        } //===> Image Type <===//
        else {
          options.value = clicked.url;
        } //===> Return Options <===//


        return onChange(options);
      }; //===> Buttons Creator <===//


      var makeButtons = function makeButtons(list, type) {
        var output = []; //===> for each item <===//

        for (var index = 0; index < list.length; index++) {
          //===> Get Value <===//
          var name = list[index];
          var title = "",
              isColor = !name.includes("fa-"); //===> Convert to Title <===//

          if (isColor) {
            title = list[index].replace('bg-', '').replace('-', ' '); //===> UpperCase Title <===//

            title = title.replace(/^\w/, function (c) {
              return c.toUpperCase();
            });
          } else title = "Reset";

          output.push( /*#__PURE__*/React.createElement("button", {
            key: "".concat(name.replaceAll(" ", "-")),
            onClick: setBackground,
            title: title,
            "data-value": isColor ? name : "",
            className: "".concat(isColor ? name : "".concat(name, " color-gray fs-12"), " col reset-button ").concat(value === name ? 'px-active' : ""),
            style: {
              "width": "30px",
              "height": "16px",
              "borderRadius": "16px"
            }
          }));
        } //===> Return Buttons <===//


        return output;
      }; //===> Colors Panel <===//


      var showPanel = function showPanel(clicked) {
        var button = clicked.target,
            wrapper = Phenix(button).ancestor('.px-gb-component'),
            panel = wrapper.querySelector(".options-list"); //=== Show/Hide Panel ===//

        if (panel) {
          Phenix(button).toggleClass("px-active");
          Phenix(panel).toggleClass("px-active").slideToggle(300, 0, "flex");
        }
      }; //===> Component Design <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component position-rv mb-15"
      }, /*#__PURE__*/React.createElement("label", {
        className: "mb-10 tx-UpperCase"
      }, label), /*#__PURE__*/React.createElement("div", {
        className: "overflow-hidden form-control small flexbox border-alpha-25 mb-5 tx-align-start radius-md align-center-y pdx-0 flow-nowrap"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: showPanel,
        className: "w-max-150 fs-13 col h-min-100 reset-button options-toggle flexbox flow-nowrap align-between align-center-y pdx-10 divider-e",
        type: "button"
      }, type !== "image" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "me-5 radius-circle inline-block ".concat(value.length > 0 ? value : "bg-inherit"),
        style: {
          "width": "17px",
          "height": "17px"
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "col tx-nowrap pde-5 tx-capitalize"
      }, value.length > 0 ? value.replaceAll("-", " ").replace("bg", "") : "Default")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "me-5 radius-circle inline-block",
        style: {
          "width": "22px",
          "height": "22px",
          "backgroundImage": "url(".concat(value, ")"),
          "backgroundSize": "cover",
          "backgroundPosition": "center"
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "col tx-nowrap pde-5"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Replace", "phenix"))), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-pencil fs-12 color-gray"
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        key: "bg-type",
        value: type || "",
        onChange: set_type,
        options: [{
          label: 'color',
          value: 'color'
        }, {
          label: 'image',
          value: 'image'
        }, {
          label: 'gradient',
          value: 'gradient'
        }]
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox options-list align-between ".concat(type !== "image" ? 'pd-15 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom' : 'pdt-5', " hidden fluid"),
        style: {
          gap: "10px"
        }
      }, type === "color" ? makeButtons(this.state.colors) : type === "gradient" ? makeButtons(this.state.gradients) : null, type === "image" ? /*#__PURE__*/React.createElement(_uploader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: "upload-file",
        value: !value ? this.state.placeholder : value,
        setValue: setBackground
      }) : null, /*#__PURE__*/React.createElement("div", {
        className: "divider-t pdt-15 col-12"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "".concat(_("Rotation", "phenix")),
        key: "gradient-direction",
        value: rotate || "",
        onChange: set_rotate,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', "phenix"),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('45 Degree', "phenix"),
          value: 'bg-grade-45'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('-45 Degree', "phenix"),
          value: 'bg-grade-45n'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('90 Degree', "phenix"),
          value: 'bg-grade-90'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('-90 Degree', "phenix"),
          value: 'bg-grade-90n'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('120 Degree', "phenix"),
          value: 'bg-grade-120'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('-120 Degree', "phenix"),
          value: 'bg-grade-120n'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('180 Degree', "phenix"),
          value: 'bg-grade-180'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('-180 Degree', "phenix"),
          value: 'bg-grade-180n'
        }]
      }))));
    }
  }]);

  return PhenixBackground;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component);



/***/ }),

/***/ "./src/blocks/px-controls/colors/text.js":
/*!***********************************************!*\
  !*** ./src/blocks/px-controls/colors/text.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PhenixColors; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/
//===> WordPress Modules <===//
 //===> Phenix Background <===//

var PhenixColors = /*#__PURE__*/function (_Component) {
  _inherits(PhenixColors, _Component);

  var _super = _createSuper(PhenixColors);

  function PhenixColors() {
    _classCallCheck(this, PhenixColors);

    return _super.apply(this, arguments);
  }

  _createClass(PhenixColors, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          value = _this$props.value,
          label = _this$props.label,
          onChange = _this$props.onChange; //===> Colors List <===//

      var pxPallete = ["color-inherit", "color-transparent", "color-primary", "color-primary-dark", "color-secondary", "color-secondary-dark", "color-gray", "color-dark", "color-white", "color-success", "color-danger", "color-warning", "color-info", "color-facebook", "color-twitter", "color-youtube", "color-instagram", "color-snapchat", "color-whatsapp", "color-pinterest", "color-linkedin", "color-behance", "color-dribbble", "color-flicker", "fas fa-redo tx-align-center"]; //===> Set Color <===//

      var setColor = function setColor(clicked) {
        //===> Get Value <===//
        var button = clicked.target,
            value = button.getAttribute('data-value'); //===> Return Options <===//

        return onChange(value);
      }; //===> Buttons Creator <===//


      var makeButtons = function makeButtons(list) {
        var output = []; //===> for each item <===//

        for (var index = 0; index < list.length; index++) {
          //===> Get Value <===//
          var name = list[index];
          var title = "",
              isColor = !name.includes("fa-"); //===> Convert to Title <===//

          if (isColor) {
            title = list[index].replace('color-', '').replace('-', ' '); //===> UpperCase Title <===//

            title = title.replace(/^\w/, function (c) {
              return c.toUpperCase();
            });
          } else title = "Reset";

          output.push( /*#__PURE__*/React.createElement("button", {
            key: "".concat(name.replaceAll(" ", "-")),
            onClick: setColor,
            title: title,
            "data-value": isColor ? name : "",
            className: "".concat(isColor ? name.replace('color-', 'bg-') : "".concat(name, " color-gray fs-12"), " reset-button ").concat(value === name ? 'px-active' : null),
            style: {
              "width": "30px",
              "height": "16px",
              "borderRadius": "16px"
            }
          }));
        } //===> Return Buttons <===//


        return output;
      }; //===> Colors Panel <===//


      var showPanel = function showPanel(clicked) {
        var button = clicked.target,
            panel = Phenix(button).next(".options-list"); //=== Show/Hide Panel ===//

        if (panel) {
          Phenix(button).toggleClass("px-active");
          Phenix(panel).toggleClass("px-active").slideToggle(300, 0, "flex");
        }
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component position-rv mb-15"
      }, /*#__PURE__*/React.createElement("label", {
        className: "mb-10 tx-UpperCase"
      }, label), /*#__PURE__*/React.createElement("button", {
        onClick: showPanel,
        className: "options-toggle form-control small flexbox align-between align-center-y radius-md tx-align-start border-alpha-25 mb-5",
        type: "button"
      }, /*#__PURE__*/React.createElement("span", {
        className: "me-10 radius-circle inline-block ".concat(value.length > 0 ? value.replace("color-", "bg-") : "bg-inherit"),
        style: {
          "width": "20px",
          "height": "20px"
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "col"
      }, value.length > 0 ? value.replaceAll("-", " ").replace("color", "") : "Default"), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-pencil"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox options-list align-between pd-20 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom hidden fluid",
        style: {
          gap: "10px"
        }
      }, makeButtons(pxPallete)));
    }
  }]);

  return PhenixColors;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/px-controls/elements/margin.js":
/*!***************************************************!*\
  !*** ./src/blocks/px-controls/elements/margin.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PhenixMargin; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/
//===> WordPress Modules <===//

 //===> Phenix Margin <===//

var PhenixMargin = /*#__PURE__*/function (_Component) {
  _inherits(PhenixMargin, _Component);

  var _super = _createSuper(PhenixMargin);

  function PhenixMargin() {
    _classCallCheck(this, PhenixMargin);

    return _super.apply(this, arguments);
  }

  _createClass(PhenixMargin, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange; //===> Options Tabs <===//

      var changeTab = function changeTab(clicked) {
        var _optionsList$querySel;

        //===> Option Data <===//
        var element = Phenix(clicked.target),
            parent = element.ancestor('.options-tabs'),
            optionsList = Phenix(parent).next('.options-list'),
            currentActive = Phenix(parent.querySelector(':scope > .primary')),
            currentType = "".concat(element[0].getAttribute('data-options')),
            targetElement = optionsList.querySelector(":scope > .".concat(currentType)); //===> Change Active <===//

        currentActive.addClass('light').removeClass('primary');
        element.addClass('primary').removeClass('light'); //===> Show Options <===//

        (_optionsList$querySel = optionsList.querySelector(':scope > .flexbox:not(.hidden)')) === null || _optionsList$querySel === void 0 ? void 0 : _optionsList$querySel.classList.add('hidden');
        Phenix(targetElement).removeClass('hidden');
      }; //===> .Get Default Value. <===//


      var values = value.split(' '),
          options = {
        small: ["", false],
        medium: ["", false],
        large: ["", false],
        xlarge: ["", false]
      }; //===> Default Combined Options <===//

      if (value.includes("comb")) values.forEach(function (item) {
        if (item.includes("comb")) {
          //==> Define item <==//
          var option_item = false,
              option_screen; //==> Small Screen <==//

          if (item.includes("comb-sm")) option_screen = "small"; //==> Medium Screen <==//
          else if (item.includes("comb-md")) option_screen = "medium"; //==> Large Screen <==//
          else if (item.includes("comb-lg")) option_screen = "large"; //==> xLarge Screen <==//
          else if (item.includes("comb-xl")) option_screen = "xlarge"; //===> Set the Option <===//

          options[option_screen][0] = option_item;
          options[option_screen][1] = true;
        }
      }); //===> Set Combined Size <===//

      var set_combined = function set_combined(combined) {
        //===> Element Data <===//
        var checkbox = combined.target,
            current_sizes = value.replace(/\s\s+/g, ' '),
            comb_type = checkbox.name,
            comb_point = "-".concat(comb_type.slice(comb_type.indexOf('-') + 1, comb_type.lastIndexOf('-'))); //===> Cleanup Combined/Sepereated <===//

        current_sizes.split(" ").forEach(function (name) {
          //===> Fallback <===//
          if (name.length > 0 && !name.includes('comb')) {
            //===> Define Properties <===//
            if (comb_point.includes("sm")) comb_point = "";
            var nameValue = "".concat(name.slice(name.lastIndexOf('-') + 1)),
                margin_ys = name.includes("mt".concat(comb_point, "-").concat(nameValue)) || name.includes("mb".concat(comb_point, "-").concat(nameValue)),
                margin_xs = name.includes("ms".concat(comb_point, "-").concat(nameValue)) || name.includes("me".concat(comb_point, "-").concat(nameValue)),
                margin_x = name.includes("mx".concat(comb_point, "-").concat(nameValue)),
                margin_y = name.includes("my".concat(comb_point, "-").concat(nameValue)); //===> Cleanup Current Sizes <===//

            if (margin_ys || margin_xs || margin_y || margin_x) current_sizes = current_sizes.replace(name, ""); //===> Seperate X <===//

            if (margin_x) {
              if (!current_sizes.includes("ms".concat(comb_point, "-"))) current_sizes += " ms".concat(comb_point, "-").concat(nameValue);
              if (!current_sizes.includes("me".concat(comb_point, "-"))) current_sizes += " me".concat(comb_point, "-").concat(nameValue);
            } //===> Seperate Y <===//
            else if (margin_y) {
              if (!current_sizes.includes("mt".concat(comb_point, "-"))) current_sizes += " mt".concat(comb_point, "-").concat(nameValue);
              if (!current_sizes.includes("mb".concat(comb_point, "-"))) current_sizes += " mb".concat(comb_point, "-").concat(nameValue);
            } //===> Combine X <===//
            else if (margin_xs && !current_sizes.includes("mx".concat(comb_point, "-"))) {
              current_sizes += " mx".concat(comb_point, "-").concat(nameValue);
            } //===> Combine Y <===//
            else if (margin_ys && !current_sizes.includes("my".concat(comb_point, "-"))) {
              current_sizes += " my".concat(comb_point, "-").concat(nameValue);
            }
          }
        }); //===> Activate Combined Size <===//

        if (checkbox.checked && !values.includes(comb_type)) {
          return onChange(" ".concat(comb_type, " ").concat(current_sizes));
        } //===> De-Activate the Combined Size <===//
        else if (!checkbox.checked && values.includes(comb_type)) {
          return onChange(current_sizes.replace(" ".concat(comb_type, " "), ''));
        }
      }; //===> Set Value <===//


      var set_value = function set_value(prefix, the_value, breakpoint) {
        //===> Fallback <===//
        if (!prefix || !the_value) return; //===> Define Returned Value <===//

        var output_sizes = value.replace(/\s\s+/g, ' '); //===> Screen Points <===//

        switch (breakpoint) {
          case "-sm":
            breakpoint = ['', "small"];
            break;

          case "-md":
            breakpoint = [breakpoint, "medium"];
            break;

          case "-lg":
            breakpoint = [breakpoint, "large"];
            break;

          case "-xl":
            breakpoint = [breakpoint, "xlarge"];
            break;

          default:
            breakpoint = breakpoint;
            break;
        } //===> Update Size <===//


        if (output_sizes.includes("".concat(prefix).concat(breakpoint[0]))) {
          //===> For Each Size <===//
          output_sizes.split(' ').forEach(function (name) {
            //===> When the Size is Found Replace it <===//
            if (name.startsWith("".concat(prefix).concat(breakpoint[0]))) {
              output_sizes = output_sizes.replace(name, " ".concat(prefix).concat(breakpoint[0], "-").concat(the_value));
              return onChange(output_sizes);
            }
          });
        } //===> for New Size <===//
        else {
          //===> Set the New Size <===//
          return onChange(" ".concat(output_sizes, " ").concat(prefix).concat(breakpoint[0], "-").concat(the_value));
        }
      }; //===> Layout Creator <===//


      var make_options = function make_options(data, value_infix) {
        //===> Default Values <===//
        var current_values = {
          my: 0,
          mx: 0,
          mt: 0,
          ms: 0,
          mb: 0,
          me: 0
        }; //===> Get Options Status <===//

        var comb_status = data[1]; //===> for Each Name in Value <===//

        values.forEach(function (name) {
          //===> Fallback <===//
          if (!name.includes('comb')) {
            //===> Get the Name Prefix <===//
            var end = name.indexOf("-"),
                namePrefix = name.slice(0, end),
                hasProp = current_values.hasOwnProperty(namePrefix); //===> if the Prefix matches any value Grap it <===//

            if (hasProp) {
              //===> if the Name has any value related to the current infix <===//
              if (name.includes(value_infix)) {
                current_values[namePrefix] = parseInt(name.replace(/\D/g, ''));
              } //===> for Zero Screen <===//
              else if (value_infix === "-sm" && !name.includes(value_infix)) {
                current_values[namePrefix] = parseInt(name.replace(/\D/g, ''));
              }
            }
          }
        }); //===> Create the Layout <===//

        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
          className: "option-control mb-5",
          "data-type": "checkbox"
        }, /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          name: "comb".concat(value_infix, "-mg"),
          checked: comb_status,
          onChange: set_combined
        }), /*#__PURE__*/React.createElement("span", {
          className: "fas fa-link"
        }, "Combined Size")), comb_status ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrows-y",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "my".concat(value_infix),
          step: 5,
          min: 0,
          max: 100,
          value: current_values.my,
          onChange: function onChange(number) {
            return set_value('my', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrows-x",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "mx".concat(value_infix),
          step: 5,
          min: 0,
          max: 100,
          value: current_values.mx,
          onChange: function onChange(number) {
            return set_value('mx', number, value_infix);
          }
        }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-top",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "mt".concat(value_infix),
          step: 5,
          min: 0,
          max: 100,
          value: current_values.mt,
          onChange: function onChange(number) {
            return set_value('mt', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-start",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "ms".concat(value_infix),
          step: 5,
          min: 0,
          max: 100,
          value: current_values.ms,
          onChange: function onChange(number) {
            return set_value('ms', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-bottom",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "mb".concat(value_infix),
          step: 5,
          min: 0,
          max: 100,
          value: current_values.mb,
          onChange: function onChange(number) {
            return set_value('mb', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-end",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "me".concat(value_infix),
          step: 5,
          min: 0,
          max: 100,
          value: current_values.me,
          onChange: function onChange(number) {
            return set_value('me', number, value_infix);
          }
        }))));
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component"
      }, /*#__PURE__*/React.createElement("div", {
        className: "options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-10"
      }, /*#__PURE__*/React.createElement("button", {
        key: "mobile",
        onClick: changeTab,
        className: "btn square tiny primary col far fa-mobile",
        title: "Mobile Screens",
        "data-options": "small-options"
      }), /*#__PURE__*/React.createElement("button", {
        key: "tablet",
        onClick: changeTab,
        className: "btn square tiny light col far fa-tablet",
        title: "Tablet Screens",
        "data-options": "medium-options"
      }), /*#__PURE__*/React.createElement("button", {
        key: "laptop",
        onClick: changeTab,
        className: "btn square tiny light col far fa-laptop",
        title: "Desktop Screens",
        "data-options": "large-options"
      }), /*#__PURE__*/React.createElement("button", {
        key: "desktop",
        onClick: changeTab,
        className: "btn square tiny light col far fa-desktop",
        title: "xLarge Screens",
        "data-options": "xlarge-options"
      })), /*#__PURE__*/React.createElement("div", {
        className: "options-list"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flexbox small-options"
      }, make_options(options.small, "-sm")), /*#__PURE__*/React.createElement("div", {
        className: "flexbox medium-options hidden"
      }, make_options(options.medium, "-md")), /*#__PURE__*/React.createElement("div", {
        className: "flexbox large-options hidden"
      }, make_options(options.large, "-lg")), /*#__PURE__*/React.createElement("div", {
        className: "flexbox xlarge-options hidden"
      }, make_options(options.xlarge, "-xl"))));
    }
  }]);

  return PhenixMargin;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/px-controls/elements/padding.js":
/*!****************************************************!*\
  !*** ./src/blocks/px-controls/elements/padding.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PhenixPadding; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/
//===> WordPress Modules <===//

 //===> Phenix Padding <===//

var PhenixPadding = /*#__PURE__*/function (_Component) {
  _inherits(PhenixPadding, _Component);

  var _super = _createSuper(PhenixPadding);

  function PhenixPadding() {
    _classCallCheck(this, PhenixPadding);

    return _super.apply(this, arguments);
  }

  _createClass(PhenixPadding, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange; //===> Options Tabs <===//

      var changeTab = function changeTab(clicked) {
        var _optionsList$querySel;

        //===> Option Data <===//
        var element = Phenix(clicked.target),
            parent = element.ancestor('.options-tabs'),
            optionsList = Phenix(parent).next('.options-list'),
            currentActive = Phenix(parent.querySelector(':scope > .primary')),
            currentType = "".concat(element[0].getAttribute('data-options')),
            targetElement = optionsList.querySelector(":scope > .".concat(currentType)); //===> Change Active <===//

        currentActive.addClass('light').removeClass('primary');
        element.addClass('primary').removeClass('light'); //===> Show Options <===//

        (_optionsList$querySel = optionsList.querySelector(':scope > .flexbox:not(.hidden)')) === null || _optionsList$querySel === void 0 ? void 0 : _optionsList$querySel.classList.add('hidden');
        Phenix(targetElement).removeClass('hidden');
      }; //===> .Get Default Value. <===//


      var values = value.split(' '),
          options = {
        small: ["", false],
        medium: ["", false],
        large: ["", false],
        xlarge: ["", false]
      }; //===> Default Combined Options <===//

      if (value.includes("comb")) values.forEach(function (item) {
        if (item.includes("comb")) {
          //==> Define item <==//
          var option_item = false,
              option_screen; //==> Small Screen <==//

          if (item.includes("comb-sm")) option_screen = "small"; //==> Medium Screen <==//
          else if (item.includes("comb-md")) option_screen = "medium"; //==> Large Screen <==//
          else if (item.includes("comb-lg")) option_screen = "large"; //==> xLarge Screen <==//
          else if (item.includes("comb-xl")) option_screen = "xlarge"; //===> Set the Option <===//

          options[option_screen][0] = option_item;
          options[option_screen][1] = true;
        }
      }); //===> Set Combined Size <===//

      var set_combined = function set_combined(combined) {
        //===> Element Data <===//
        var checkbox = combined.target,
            current_sizes = value.replace(/\s\s+/g, ' '),
            comb_type = checkbox.name,
            comb_point = "-".concat(comb_type.slice(comb_type.indexOf('-') + 1, comb_type.lastIndexOf('-'))); //===> Cleanup Combined/Sepereated <===//

        current_sizes.split(" ").forEach(function (name) {
          //===> Fallback <===//
          if (name.length > 0 && !name.includes('comb')) {
            //===> Define Properties <===//
            if (comb_point.includes("sm")) comb_point = "";
            var nameValue = "".concat(name.slice(name.lastIndexOf('-') + 1)),
                padding_ys = name.includes("pdt".concat(comb_point, "-").concat(nameValue)) || name.includes("pdb".concat(comb_point, "-").concat(nameValue)),
                padding_xs = name.includes("pds".concat(comb_point, "-").concat(nameValue)) || name.includes("pde".concat(comb_point, "-").concat(nameValue)),
                padding_x = name.includes("pdx".concat(comb_point, "-").concat(nameValue)),
                padding_y = name.includes("pdy".concat(comb_point, "-").concat(nameValue)); //===> Cleanup Current Sizes <===//

            if (padding_ys || padding_xs || padding_y || padding_x) current_sizes = current_sizes.replace(name, ""); //===> Seperate X <===//

            if (padding_x) {
              if (!current_sizes.includes("pds".concat(comb_point, "-"))) current_sizes += " pds".concat(comb_point, "-").concat(nameValue);
              if (!current_sizes.includes("pde".concat(comb_point, "-"))) current_sizes += " pde".concat(comb_point, "-").concat(nameValue);
            } //===> Seperate Y <===//
            else if (padding_y) {
              if (!current_sizes.includes("pdt".concat(comb_point, "-"))) current_sizes += " pdt".concat(comb_point, "-").concat(nameValue);
              if (!current_sizes.includes("pdb".concat(comb_point, "-"))) current_sizes += " pdb".concat(comb_point, "-").concat(nameValue);
            } //===> Combine X <===//
            else if (padding_xs && !current_sizes.includes("pdx".concat(comb_point, "-"))) {
              current_sizes += " pdx".concat(comb_point, "-").concat(nameValue);
            } //===> Combine Y <===//
            else if (padding_ys && !current_sizes.includes("pdy".concat(comb_point, "-"))) {
              current_sizes += " pdy".concat(comb_point, "-").concat(nameValue);
            }
          }
        }); //===> Activate Combined Size <===//

        if (checkbox.checked && !values.includes(comb_type)) {
          return onChange(" ".concat(comb_type, " ").concat(current_sizes));
        } //===> De-Activate the Combined Size <===//
        else if (!checkbox.checked && values.includes(comb_type)) {
          return onChange(current_sizes.replace(" ".concat(comb_type, " "), ''));
        }
      }; //===> Set Value <===//


      var set_value = function set_value(prefix, the_value, breakpoint) {
        //===> Fallback <===//
        if (!prefix || !the_value) return; //===> Define Returned Value <===//

        var output_sizes = value.replace(/\s\s+/g, ' '); //===> Screen Points <===//

        switch (breakpoint) {
          case "-sm":
            breakpoint = ['', "small"];
            break;

          case "-md":
            breakpoint = [breakpoint, "medium"];
            break;

          case "-lg":
            breakpoint = [breakpoint, "large"];
            break;

          case "-xl":
            breakpoint = [breakpoint, "xlarge"];
            break;

          default:
            breakpoint = breakpoint;
            break;
        } //===> Update Size <===//


        if (output_sizes.includes("".concat(prefix).concat(breakpoint[0]))) {
          //===> For Each Size <===//
          output_sizes.split(' ').forEach(function (name) {
            //===> When the Size is Found Replace it <===//
            if (name.startsWith("".concat(prefix).concat(breakpoint[0]))) {
              output_sizes = output_sizes.replace(name, " ".concat(prefix).concat(breakpoint[0], "-").concat(the_value));
              return onChange(output_sizes);
            }
          });
        } //===> for New Size <===//
        else {
          //===> Set the New Size <===//
          return onChange(" ".concat(output_sizes, " ").concat(prefix).concat(breakpoint[0], "-").concat(the_value));
        }
      }; //===> Layout Creator <===//


      var make_options = function make_options(data, value_infix) {
        //===> Default Values <===//
        var current_values = {
          pdy: 0,
          pdx: 0,
          pdt: 0,
          pds: 0,
          pdb: 0,
          pde: 0
        }; //===> Get Options Status <===//

        var comb_status = data[1]; //===> for Each Name in Value <===//

        values.forEach(function (name) {
          //===> Fallback <===//
          if (!name.includes('comb')) {
            //===> Get the Name Prefix <===//
            var end = name.indexOf("-"),
                namePrefix = name.slice(0, end),
                hasProp = current_values.hasOwnProperty(namePrefix); //===> if the Prefix matches any value Grap it <===//

            if (hasProp) {
              //===> if the Name has any value related to the current infix <===//
              if (name.includes(value_infix)) {
                current_values[namePrefix] = parseInt(name.replace(/\D/g, ''));
              } //===> for Zero Screen <===//
              else if (value_infix === "-sm") {
                current_values[namePrefix] = parseInt(name.replace(/\D/g, ''));
                console.log(value_infix, current_values[namePrefix]);
              }
            }
          }
        }); //===> Create the Layout <===//

        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
          className: "option-control mb-5",
          "data-type": "checkbox"
        }, /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          name: "comb".concat(value_infix, "-pd"),
          checked: comb_status,
          onChange: set_combined
        }), /*#__PURE__*/React.createElement("span", {
          className: "fas fa-link"
        }, "Combined Size")), comb_status ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrows-y",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "pdy".concat(value_infix),
          step: 5,
          min: -1,
          max: 100,
          value: current_values.pdy,
          onChange: function onChange(number) {
            return set_value('pdy', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrows-x",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "pdx".concat(value_infix),
          step: 5,
          min: -1,
          max: 100,
          value: current_values.pdx,
          onChange: function onChange(number) {
            return set_value('pdx', number, value_infix);
          }
        }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-top",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "pdt".concat(value_infix),
          step: 5,
          min: -1,
          max: 100,
          value: current_values.pdt,
          onChange: function onChange(number) {
            return set_value('pdt', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-start",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "pds".concat(value_infix),
          step: 5,
          min: -1,
          max: 100,
          value: current_values.pds,
          onChange: function onChange(number) {
            return set_value('pds', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-bottom",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "pdb".concat(value_infix),
          step: 5,
          min: -1,
          max: 100,
          value: current_values.pdb,
          onChange: function onChange(number) {
            return set_value('pdb', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-end",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "pde".concat(value_infix),
          step: 5,
          min: -1,
          max: 100,
          value: current_values.pde,
          onChange: function onChange(number) {
            return set_value('pde', number, value_infix);
          }
        }))));
      }; //===> Reset Value <===//


      var reset_value = function reset_value() {
        return onChange('');
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component"
      }, /*#__PURE__*/React.createElement("div", {
        className: "options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-10"
      }, /*#__PURE__*/React.createElement("button", {
        key: "mobile",
        onClick: changeTab,
        className: "btn square tiny primary col far fa-mobile",
        title: "Mobile Screens",
        "data-options": "small-options"
      }), /*#__PURE__*/React.createElement("button", {
        key: "tablet",
        onClick: changeTab,
        className: "btn square tiny light col far fa-tablet",
        title: "Tablet Screens",
        "data-options": "medium-options"
      }), /*#__PURE__*/React.createElement("button", {
        key: "laptop",
        onClick: changeTab,
        className: "btn square tiny light col far fa-laptop",
        title: "Desktop Screens",
        "data-options": "large-options"
      }), /*#__PURE__*/React.createElement("button", {
        key: "desktop",
        onClick: changeTab,
        className: "btn square tiny light col far fa-desktop",
        title: "xLarge Screens",
        "data-options": "xlarge-options"
      })), /*#__PURE__*/React.createElement("div", {
        className: "options-list"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flexbox small-options"
      }, make_options(options.small, "-sm")), /*#__PURE__*/React.createElement("div", {
        className: "flexbox medium-options hidden"
      }, make_options(options.medium, "-md")), /*#__PURE__*/React.createElement("div", {
        className: "flexbox large-options hidden"
      }, make_options(options.large, "-lg")), /*#__PURE__*/React.createElement("div", {
        className: "flexbox xlarge-options hidden"
      }, make_options(options.xlarge, "-xl"))), /*#__PURE__*/React.createElement("button", {
        onClick: reset_value,
        className: "btn tiny radius-sm"
      }, "Reset Size"));
    }
  }]);

  return PhenixPadding;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/px-controls/uploader.js":
/*!********************************************!*\
  !*** ./src/blocks/px-controls/uploader.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MediaUploader; }
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/
//===> WordPress Modules <===//

 //===> Media Uploader <===//

var MediaUploader = /*#__PURE__*/function (_Component) {
  _inherits(MediaUploader, _Component);

  var _super = _createSuper(MediaUploader);

  function MediaUploader() {
    _classCallCheck(this, MediaUploader);

    return _super.apply(this, arguments);
  }

  _createClass(MediaUploader, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          size = _this$props.size,
          type = _this$props.type,
          setValue = _this$props.setValue,
          className = _this$props.className; //===> Output <===//

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
        onSelect: setValue,
        value: value,
        render: function render(_ref) {
          var open = _ref.open;
          return /*#__PURE__*/React.createElement("div", {
            className: "cursor-pointer",
            onClick: open
          }, label ? /*#__PURE__*/React.createElement("label", {
            className: "mb-10 cursor-pointer"
          }, label) : '', /*#__PURE__*/React.createElement("div", {
            className: "flexbox align-center-y align-between cursor-pointer".concat(className ? "".concat(className) : "")
          }, size === 'small' ? /*#__PURE__*/React.createElement(React.Fragment, null, !type || type === 'image' ? /*#__PURE__*/React.createElement("img", {
            src: value,
            style: {
              "maxHeight": "2.25rem"
            }
          }) : null, /*#__PURE__*/React.createElement("button", {
            key: "change-media",
            onClick: open,
            className: "btn square primary small radius-sm fs-12 fas fa-upload"
          })) : /*#__PURE__*/React.createElement(React.Fragment, null, !type || type === 'image' ? /*#__PURE__*/React.createElement("img", {
            src: value,
            className: "radius-sm radius-top",
            style: {
              "maxWidth": "100%",
              "display": "block"
            }
          }) : null, /*#__PURE__*/React.createElement("button", {
            key: "change-media",
            onClick: open,
            className: "btn fluid primary small radius-sm radius-bottom fs-13 far fa-camera btn-icon"
          }, "Select File"))));
        }
      }));
    }
  }]);

  return MediaUploader;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component);



/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/button/block.json":
/*!**************************************!*\
  !*** ./src/blocks/button/block.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/button","version":"0.1.0","title":"PDS Button","category":"design","description":"Phenix Design System Button Component","supports":{"html":false},"attributes":{"preview":{"type":"boolean","default":false},"isLink":{"type":"boolean","default":false},"inNewTab":{"type":"boolean","default":false},"iconLabel":{"type":"boolean","default":false},"iconEnd":{"type":"boolean","default":false},"label":{"type":"string","default":"Button"},"url":{"type":"string","default":"#none"},"type":{"type":"string","default":"normal"},"size":{"type":"string","default":"normal"},"radius":{"type":"string","default":"radius-none"},"outline":{"type":"boolean","default":false},"bg_type":{"type":"string","default":"color"},"bg_rotate":{"type":"string","default":""},"background":{"type":"string","default":"primary"},"color":{"type":"string","default":""},"data_id":{"type":"string","default":""},"data_modal":{"type":"string","default":""},"isLightBox":{"type":"boolean","default":false},"lightbox_src":{"type":"boolean","default":false},"lightbox_type":{"type":"string","default":"image"},"className":{"type":"string","default":"btn primary"},"spacing_pd":{"type":"string","default":""},"spacing_mg":{"type":"string","default":""}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"file:./index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************************!*\
  !*** ./src/blocks/button/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/button/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/button/block.json");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/*
 * ===> 01 - Block Data
 * ===> 02 - WordPress Modules
 * ===> 03 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/
//===> Block Data <===//

 //===> WordPress Modules <===//


 //===> Register Block <===//

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  icon: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "254",
    height: "254",
    viewBox: "0 0 254 254"
  }, /*#__PURE__*/React.createElement("g", {
    id: "button",
    transform: "translate(4296 3460)"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "base",
    width: "254",
    height: "254",
    transform: "translate(-4296 -3460)",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    id: "server",
    d: "M169.554,32H24.222A24.222,24.222,0,0,0,0,56.222V80.444a24.222,24.222,0,0,0,24.222,24.222H169.554a24.222,24.222,0,0,0,24.222-24.222V56.222A24.232,24.232,0,0,0,169.554,32Zm12.111,48.444a12.127,12.127,0,0,1-12.111,12.111H24.222A12.137,12.137,0,0,1,12.111,80.444V56.222A12.127,12.127,0,0,1,24.222,44.111H169.554a12.127,12.127,0,0,1,12.111,12.111ZM117.326,59.25a9.083,9.083,0,1,0,9.083,9.083A9.083,9.083,0,0,0,117.326,59.25Zm-36.333,0a9.083,9.083,0,1,0,9.083,9.083A9.083,9.083,0,0,0,80.992,59.25Z",
    transform: "translate(-4265.888 -3453.554)"
  }), /*#__PURE__*/React.createElement("path", {
    id: "server-2",
    "data-name": "server",
    d: "M181.665,91.045H12.111A12.137,12.137,0,0,0,0,103.156V151.6a12.137,12.137,0,0,0,12.111,12.111H181.665A12.137,12.137,0,0,0,193.776,151.6V103.156A12.147,12.147,0,0,0,181.665,91.045Zm-118.6,42.9V120.614h69.395v13.328Z",
    transform: "translate(-4265.889 -3415.711)"
  }))),

  /**===> @see ./edit.js <===*/
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],

  /**===> Block Output <===*/
  save: function save(_ref) {
    var attributes = _ref.attributes;
    //===> Get Block Properties <===//
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(); //===> Set JS URL <===//

    if (attributes.isLink) {
      blockProps['href'] = attributes.url;
      blockProps['rel'] = "noopener";
    }

    if (attributes.inNewTab) blockProps['target'] = "_blank"; //===> Set Custom Data <===//

    if (attributes.data_id.length > 1) {
      blockProps['data-id'] = attributes.data_id;
      blockProps.className += ' menu-toggle';
    }

    if (attributes.data_modal.length > 1) blockProps['data-modal'] = attributes.data_modal;

    if (attributes.isLightBox) {
      blockProps['href'] = attributes.url;
      blockProps.className += ' px-lightbox';
      if (attributes.lightbox_type) blockProps['data-media'] = attributes.lightbox_type;
    } //===> Render Spacing <===//


    if (attributes.spacing_pd) blockProps.className += " ".concat(attributes.spacing_pd);
    if (attributes.spacing_mg) blockProps.className += " ".concat(attributes.spacing_mg); //===> Set Default Values <===//

    var setDefault = function setDefault() {
      //===> Main Names <===//
      blockProps.className += " btn"; //===> Color/Background <===//

      if (attributes.background) {
        //===> Image Background <===//
        if (attributes.bg_type === 'image') {
          blockProps.className += " px-media";
          blockProps["data-src"] = attributes.background;
          setPhenixView();
        } //===> Name Background <===//
        else {
          blockProps.className += " ".concat(attributes.background);
        } //===> Background Rotation <===//


        if (attributes.bg_rotate) blockProps.className += " ".concat(attributes.bg_rotate);
      }

      if (attributes.color) blockProps.className += " ".concat(attributes.color); //===> Default Type <===//

      if (attributes.type) blockProps.className += " ".concat(attributes.type); //===> Default Size <===//

      if (attributes.size) blockProps.className += " ".concat(attributes.size); //===> Default Radius <===//

      if (attributes.radius) blockProps.className += " ".concat(attributes.radius); //===> Default Style <===//

      if (attributes.outline) blockProps.className += " outline";
    };

    setDefault(); //===> Render <===//

    return /*#__PURE__*/React.createElement(React.Fragment, null, attributes.isLink ? /*#__PURE__*/React.createElement("a", blockProps, attributes.type !== "square" ? attributes.label : '') : /*#__PURE__*/React.createElement("button", blockProps, attributes.type !== "square" ? attributes.label : ''));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map