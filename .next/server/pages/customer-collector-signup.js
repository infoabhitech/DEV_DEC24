"use strict";
(() => {
var exports = {};
exports.id = "pages/customer-collector-signup";
exports.ids = ["pages/customer-collector-signup"];
exports.modules = {

/***/ "./pages/customer-collector-signup.js":
/*!********************************************!*\
  !*** ./pages/customer-collector-signup.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_country_region_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-country-region-selector */ "react-country-region-selector");
/* harmony import */ var react_country_region_selector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_country_region_selector__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\DEV\\NFT_DEV_LATEST\\pages\\customer-collector-signup.js";


function Home() {
  const {
    0: inputName,
    1: setInputName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: inputCountry,
    1: setInputCountry
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: inputRegion,
    1: setInputRegion
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: inputEmail,
    1: setInputEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const handleSaveData = async () => {
    const response = await fetch('/api/submitCustomerData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputName,
        inputCountry,
        inputRegion,
        inputEmail
      })
    });

    if (response.ok) {
      alert('Signup successfull & All set for NFT shopping!');
      setInputName('');
      setInputCountry('');
      setInputRegion('');
      setInputEmail('');
    } else {
      alert('Something went wrong!');
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex justify-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        marginTop: '1rem'
      },
      className: "w-1/2 flex flex-col pb-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        align: "center",
        className: "main-title about-h1 font-bold text-1xl text-left subpixel-antialiased",
        children: " Sign up to grab NFT experiences and utilities! "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Name",
        className: "mt-5 border rounded p-3",
        value: inputName,
        onChange: e => setInputName(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_country_region_selector__WEBPACK_IMPORTED_MODULE_2__.CountryDropdown, {
        className: "mt-5 border rounded p-3",
        value: inputCountry,
        onChange: e => setInputCountry(e)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Nearest City",
        className: "mt-5 border rounded p-3",
        value: inputRegion,
        onChange: e => setInputRegion(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Email",
        className: "mt-5 border rounded p-3",
        value: inputEmail,
        onChange: e => setInputEmail(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: handleSaveData,
        className: "font-bold mt-4 bg-purple-500 text-white rounded p-3 shadow-lg",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-country-region-selector":
/*!************************************************!*\
  !*** external "react-country-region-selector" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("react-country-region-selector");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/customer-collector-signup.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVY7QUFMOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCSixlQTRCSTtBQUFRLGVBQU8sRUFBRWIsY0FBakI7QUFDQSxpQkFBUyxFQUFDLCtEQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUDtBQXNDQTs7Ozs7Ozs7OztBQ25FRDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaXNlLWFuZC1mYW1lLy4vcGFnZXMvY3VzdG9tZXItY29sbGVjdG9yLXNpZ251cC5qcyIsIndlYnBhY2s6Ly9yaXNlLWFuZC1mYW1lL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9yaXNlLWFuZC1mYW1lL2V4dGVybmFsIFwicmVhY3QtY291bnRyeS1yZWdpb24tc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9yaXNlLWFuZC1mYW1lL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvdW50cnlEcm9wZG93biwgUmVnaW9uRHJvcGRvd24sIENvdW50cnlSZWdpb25EYXRhIH0gZnJvbSAncmVhY3QtY291bnRyeS1yZWdpb24tc2VsZWN0b3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbaW5wdXROYW1lLCBzZXRJbnB1dE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpbnB1dENvdW50cnksIHNldElucHV0Q291bnRyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lucHV0UmVnaW9uLCBzZXRJbnB1dFJlZ2lvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lucHV0RW1haWwsIHNldElucHV0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc3VibWl0Q3VzdG9tZXJEYXRhJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtpbnB1dE5hbWUsIGlucHV0Q291bnRyeSwgaW5wdXRSZWdpb24sIGlucHV0RW1haWx9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBhbGVydCgnU2lnbnVwIHN1Y2Nlc3NmdWxsICYgQWxsIHNldCBmb3IgTkZUIHNob3BwaW5nIScpO1xyXG4gICAgICBzZXRJbnB1dE5hbWUoJycpO1xyXG4gICAgICBzZXRJbnB1dENvdW50cnkoJycpO1xyXG4gICAgICBzZXRJbnB1dFJlZ2lvbignJyk7XHJcbiAgICAgIHNldElucHV0RW1haWwoJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0gY2xhc3NOYW1lPSd3LTEvMiBmbGV4IGZsZXgtY29sIHBiLTEyJz5cclxuICAgICAgICAgICAgICAgIDxoMSBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT1cIm1haW4tdGl0bGUgYWJvdXQtaDEgZm9udC1ib2xkIHRleHQtMXhsIHRleHQtbGVmdCBzdWJwaXhlbC1hbnRpYWxpYXNlZFwiPiBTaWduIHVwIHRvIGdyYWIgTkZUIGV4cGVyaWVuY2VzIGFuZCB1dGlsaXRpZXMhIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nTmFtZSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtNSBib3JkZXIgcm91bmRlZCBwLTMnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXROYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dE5hbWUoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q291bnRyeURyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J210LTUgYm9yZGVyIHJvdW5kZWQgcC0zJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0Q291bnRyeX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRDb3VudHJ5KGUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdOZWFyZXN0IENpdHknXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J210LTUgYm9yZGVyIHJvdW5kZWQgcC0zJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0UmVnaW9ufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFJlZ2lvbihlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtNSBib3JkZXIgcm91bmRlZCBwLTMnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRFbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2F2ZURhdGF9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnQtYm9sZCBtdC00IGJnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIHAtMyBzaGFkb3ctbGcnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb3VudHJ5LXJlZ2lvbi1zZWxlY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ291bnRyeURyb3Bkb3duIiwiUmVnaW9uRHJvcGRvd24iLCJDb3VudHJ5UmVnaW9uRGF0YSIsIkhvbWUiLCJpbnB1dE5hbWUiLCJzZXRJbnB1dE5hbWUiLCJpbnB1dENvdW50cnkiLCJzZXRJbnB1dENvdW50cnkiLCJpbnB1dFJlZ2lvbiIsInNldElucHV0UmVnaW9uIiwiaW5wdXRFbWFpbCIsInNldElucHV0RW1haWwiLCJoYW5kbGVTYXZlRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImFsZXJ0IiwibWFyZ2luVG9wIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==