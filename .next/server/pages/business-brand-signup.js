"use strict";
(() => {
var exports = {};
exports.id = "pages/business-brand-signup";
exports.ids = ["pages/business-brand-signup"];
exports.modules = {

/***/ "./pages/business-brand-signup.js":
/*!****************************************!*\
  !*** ./pages/business-brand-signup.js ***!
  \****************************************/
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

var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\DEV\\NFT_DEV_LATEST\\pages\\business-brand-signup.js";


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
    0: inputDescription,
    1: setInputDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: inputEmail,
    1: setInputEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: inputSocialMediaLink,
    1: setInputSocialMediaLink
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: inputIndustry,
    1: setInputIndustry
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: inputUtility,
    1: setInputUtility
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const handleSaveData = async () => {
    const response = await fetch('/api/submitBusinessData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputName,
        inputCountry,
        inputRegion,
        inputDescription,
        inputEmail,
        inputSocialMediaLink,
        inputIndustry,
        inputUtility
      })
    });

    if (response.ok) {
      alert('Signup successfull! All set to Mint Tokens.');
      setInputName('');
      setInputCountry('');
      setInputRegion('');
      setInputDescription('');
      setInputEmail('');
      setInputSocialMediaLink('');
      setInputIndustry('');
      setInputUtility('');
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
        children: "If you are a Business or a Brand, signup to get started.."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Business Name",
        className: "mt-4 border rounded p-3",
        value: inputName,
        onChange: e => setInputName(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_country_region_selector__WEBPACK_IMPORTED_MODULE_2__.CountryDropdown, {
        className: "mt-4 border rounded p-3",
        value: inputCountry,
        onChange: e => setInputCountry(e)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Nearest City",
        className: "mt-4 border rounded p-3",
        value: inputRegion,
        onChange: e => setInputRegion(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Business Description",
        className: "mt-4 border rounded p-3",
        value: inputDescription,
        onChange: e => setInputDescription(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Business Email",
        className: "mt-4 border rounded p-3",
        value: inputEmail,
        onChange: e => setInputEmail(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "url",
        placeholder: "Social Media Link",
        className: "mt-4 border rounded p-3",
        value: inputSocialMediaLink,
        onChange: e => setInputSocialMediaLink(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        className: "mt-4 border rounded p-3",
        value: inputIndustry,
        onChange: e => setInputIndustry(e.target.value),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          children: "Select Industry"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          name: "Beauty",
          children: " Beauty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          name: "Climate Change, Environment, Sustainability",
          children: "Climate Change, Environment, Sustainability"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          name: "Education",
          children: "Education"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          name: "Fashion",
          children: "Fashion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          name: "Food, Beverage",
          children: "Food, Beverage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          name: "Healthcare, Fitness, Well Being",
          children: "Healthcare, Fitness, Well Being"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          name: "Luxury",
          children: "Luxury"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          name: "Media, Entertainment",
          children: "Media, Entertainment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          name: "Retail, e-commerce",
          children: "Retail, e-commerce"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          name: "Travel, Tourism, Hospitality",
          children: "Travel, Tourism, Hospitality"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          name: "Technology",
          children: "Technology"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          name: "Others",
          children: "Others"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Token utility to be offered for customer loyalty like special discounts, reward points, services",
        className: "mt-4 border rounded p-3",
        value: inputUtility,
        onChange: e => setInputUtility(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: handleSaveData,
        className: "font-bold mt-4 bg-purple-500 text-white rounded p-3 shadow-lg",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
var __webpack_exports__ = (__webpack_exec__("./pages/business-brand-signup.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkEsZUFnQkE7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUNKLGVBNERJO0FBQ0EsWUFBSSxFQUFDLE1BREw7QUFFQSxtQkFBVyxFQUFDLGtHQUZaO0FBR0EsaUJBQVMsRUFBQyx5QkFIVjtBQUlBLGFBQUssRUFBRWYsWUFKUDtBQUtBLGdCQUFRLEVBQUdhLENBQUQsSUFBT1osZUFBZSxDQUFDWSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVjtBQUxoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNURKLGVBbUVJO0FBQVEsZUFBTyxFQUFFYixjQUFqQjtBQUNBLGlCQUFTLEVBQUMsK0RBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURQO0FBNkVBOzs7Ozs7Ozs7O0FDbEhEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jpc2UtYW5kLWZhbWUvLi9wYWdlcy9idXNpbmVzcy1icmFuZC1zaWdudXAuanMiLCJ3ZWJwYWNrOi8vcmlzZS1hbmQtZmFtZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmlzZS1hbmQtZmFtZS9leHRlcm5hbCBcInJlYWN0LWNvdW50cnktcmVnaW9uLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vcmlzZS1hbmQtZmFtZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb3VudHJ5RHJvcGRvd24sIFJlZ2lvbkRyb3Bkb3duLCBDb3VudHJ5UmVnaW9uRGF0YSB9IGZyb20gJ3JlYWN0LWNvdW50cnktcmVnaW9uLXNlbGVjdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2lucHV0TmFtZSwgc2V0SW5wdXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaW5wdXRDb3VudHJ5LCBzZXRJbnB1dENvdW50cnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpbnB1dFJlZ2lvbiwgc2V0SW5wdXRSZWdpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpbnB1dERlc2NyaXB0aW9uLCBzZXRJbnB1dERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaW5wdXRFbWFpbCwgc2V0SW5wdXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lucHV0U29jaWFsTWVkaWFMaW5rLCBzZXRJbnB1dFNvY2lhbE1lZGlhTGlua10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lucHV0SW5kdXN0cnksIHNldElucHV0SW5kdXN0cnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpbnB1dFV0aWxpdHksIHNldElucHV0VXRpbGl0eV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9zdWJtaXRCdXNpbmVzc0RhdGEnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2lucHV0TmFtZSwgaW5wdXRDb3VudHJ5LCBpbnB1dFJlZ2lvbiwgaW5wdXREZXNjcmlwdGlvbiwgaW5wdXRFbWFpbCwgaW5wdXRTb2NpYWxNZWRpYUxpbmssIGlucHV0SW5kdXN0cnksIGlucHV0VXRpbGl0eX0pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGFsZXJ0KCdTaWdudXAgc3VjY2Vzc2Z1bGwhIEFsbCBzZXQgdG8gTWludCBUb2tlbnMuJyk7XHJcbiAgICAgIHNldElucHV0TmFtZSgnJyk7XHJcbiAgICAgIHNldElucHV0Q291bnRyeSgnJyk7XHJcbiAgICAgIHNldElucHV0UmVnaW9uKCcnKTtcclxuICAgICAgc2V0SW5wdXREZXNjcmlwdGlvbignJyk7XHJcbiAgICAgIHNldElucHV0RW1haWwoJycpO1xyXG4gICAgICBzZXRJbnB1dFNvY2lhbE1lZGlhTGluaygnJyk7XHJcbiAgICAgIHNldElucHV0SW5kdXN0cnkoJycpO1xyXG4gICAgICBzZXRJbnB1dFV0aWxpdHkoJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0gY2xhc3NOYW1lPSd3LTEvMiBmbGV4IGZsZXgtY29sIHBiLTEyJz5cclxuICAgICAgICAgICAgICAgIDxoMSBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT1cIm1haW4tdGl0bGUgYWJvdXQtaDEgZm9udC1ib2xkIHRleHQtMXhsIHRleHQtbGVmdCBzdWJwaXhlbC1hbnRpYWxpYXNlZFwiPklmIHlvdSBhcmUgYSBCdXNpbmVzcyBvciBhIEJyYW5kLCBzaWdudXAgdG8gZ2V0IHN0YXJ0ZWQuLjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQnVzaW5lc3MgTmFtZSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtNCBib3JkZXIgcm91bmRlZCBwLTMnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXROYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dE5hbWUoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q291bnRyeURyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J210LTQgYm9yZGVyIHJvdW5kZWQgcC0zJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0Q291bnRyeX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRDb3VudHJ5KGUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdOZWFyZXN0IENpdHknXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J210LTQgYm9yZGVyIHJvdW5kZWQgcC0zJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0UmVnaW9ufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFJlZ2lvbihlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdCdXNpbmVzcyBEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtNCBib3JkZXIgcm91bmRlZCBwLTMnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXREZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdCdXNpbmVzcyBFbWFpbCdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtNCBib3JkZXIgcm91bmRlZCBwLTMnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRFbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NvY2lhbCBNZWRpYSBMaW5rJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtdC00IGJvcmRlciByb3VuZGVkIHAtMydcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFNvY2lhbE1lZGlhTGlua31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRTb2NpYWxNZWRpYUxpbmsoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J210LTQgYm9yZGVyIHJvdW5kZWQgcC0zJ1x0XHRcdFx0IFxyXG5cdFx0XHRcdCAgICAgICAgdmFsdWU9e2lucHV0SW5kdXN0cnl9IFxyXG5cdFx0XHRcdCAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dEluZHVzdHJ5KGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPlNlbGVjdCBJbmR1c3RyeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBuYW1lPVwiQmVhdXR5XCI+IEJlYXV0eTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBuYW1lPVwiQ2xpbWF0ZSBDaGFuZ2UsIEVudmlyb25tZW50LCBTdXN0YWluYWJpbGl0eVwiPkNsaW1hdGUgQ2hhbmdlLCBFbnZpcm9ubWVudCwgU3VzdGFpbmFiaWxpdHk8L29wdGlvbj5cclxuXHRcdFx0XHQgICAgICAgIDxvcHRpb24gbmFtZT1cIkVkdWNhdGlvblwiPkVkdWNhdGlvbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBuYW1lPVwiRmFzaGlvblwiPkZhc2hpb248L29wdGlvbj5cclxuXHRcdFx0XHQgICAgICAgIDxvcHRpb24gbmFtZT1cIkZvb2QsIEJldmVyYWdlXCI+Rm9vZCwgQmV2ZXJhZ2U8L29wdGlvbj5cclxuXHRcdFx0XHQgICAgICAgIDxvcHRpb24gbmFtZT1cIkhlYWx0aGNhcmUsIEZpdG5lc3MsIFdlbGwgQmVpbmdcIj5IZWFsdGhjYXJlLCBGaXRuZXNzLCBXZWxsIEJlaW5nPC9vcHRpb24+XHJcblx0XHRcdFx0ICAgICAgICA8b3B0aW9uIG5hbWU9XCJMdXh1cnlcIj5MdXh1cnk8L29wdGlvbj5cclxuXHRcdFx0XHQgICAgICAgIDxvcHRpb24gbmFtZT1cIk1lZGlhLCBFbnRlcnRhaW5tZW50XCI+TWVkaWEsIEVudGVydGFpbm1lbnQ8L29wdGlvbj5cclxuXHRcdFx0XHQgICAgICAgIDxvcHRpb24gbmFtZT1cIlJldGFpbCwgZS1jb21tZXJjZVwiPlJldGFpbCwgZS1jb21tZXJjZTwvb3B0aW9uPlxyXG5cdFx0XHRcdCAgICAgICAgPG9wdGlvbiBuYW1lPVwiVHJhdmVsLCBUb3VyaXNtLCBIb3NwaXRhbGl0eVwiPlRyYXZlbCwgVG91cmlzbSwgSG9zcGl0YWxpdHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gbmFtZT1cIlRlY2hub2xvZ3lcIj5UZWNobm9sb2d5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIG5hbWU9XCJPdGhlcnNcIj5PdGhlcnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Rva2VuIHV0aWxpdHkgdG8gYmUgb2ZmZXJlZCBmb3IgY3VzdG9tZXIgbG95YWx0eSBsaWtlIHNwZWNpYWwgZGlzY291bnRzLCByZXdhcmQgcG9pbnRzLCBzZXJ2aWNlcydcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtNCBib3JkZXIgcm91bmRlZCBwLTMnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRVdGlsaXR5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFV0aWxpdHkoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNhdmVEYXRhfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb250LWJvbGQgbXQtNCBiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBwLTMgc2hhZG93LWxnJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnRyeS1yZWdpb24tc2VsZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNvdW50cnlEcm9wZG93biIsIlJlZ2lvbkRyb3Bkb3duIiwiQ291bnRyeVJlZ2lvbkRhdGEiLCJIb21lIiwiaW5wdXROYW1lIiwic2V0SW5wdXROYW1lIiwiaW5wdXRDb3VudHJ5Iiwic2V0SW5wdXRDb3VudHJ5IiwiaW5wdXRSZWdpb24iLCJzZXRJbnB1dFJlZ2lvbiIsImlucHV0RGVzY3JpcHRpb24iLCJzZXRJbnB1dERlc2NyaXB0aW9uIiwiaW5wdXRFbWFpbCIsInNldElucHV0RW1haWwiLCJpbnB1dFNvY2lhbE1lZGlhTGluayIsInNldElucHV0U29jaWFsTWVkaWFMaW5rIiwiaW5wdXRJbmR1c3RyeSIsInNldElucHV0SW5kdXN0cnkiLCJpbnB1dFV0aWxpdHkiLCJzZXRJbnB1dFV0aWxpdHkiLCJoYW5kbGVTYXZlRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImFsZXJ0IiwibWFyZ2luVG9wIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==