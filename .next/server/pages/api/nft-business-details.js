"use strict";
(() => {
var exports = {};
exports.id = "pages/api/nft-business-details";
exports.ids = ["pages/api/nft-business-details"];
exports.modules = {

/***/ "./db/dbConnect.js":
/*!*************************!*\
  !*** ./db/dbConnect.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

const dbConnect = async () => {
  try {
    await (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.connect)(`${process.env.MONGODB_URI}`); // console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error(`Error connecting to MongoDB: ${error.message}`);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);

/***/ }),

/***/ "./models/nftBusinessModel.js":
/*!************************************!*\
  !*** ./models/nftBusinessModel.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ "mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NftBusinessSchema = new _mongoose.default.Schema({
  inputName: {
    type: String
  },
  inputCountry: {
    type: String
  },
  inputRegion: {
    type: String
  },
  inputDescription: {
    type: String
  },
  inputEmail: {
    type: String
  },
  inputIndustry: {
    type: String
  },
  inputUtility: {
    type: String
  }
}, {
  collection: "NFTBusiness"
});
module.exports = _mongoose.default.models.NFTBusiness || _mongoose.default.model("NFTBusiness", NftBusinessSchema);

/***/ }),

/***/ "./pages/api/nft-business-details.js":
/*!*******************************************!*\
  !*** ./pages/api/nft-business-details.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/dbConnect */ "./db/dbConnect.js");
/* harmony import */ var _models_nftBusinessModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/nftBusinessModel */ "./models/nftBusinessModel.js");
/* harmony import */ var _models_nftBusinessModel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_nftBusinessModel__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
  const {
    method,
    body
  } = req;

  if (method === "POST") {
    const businessName = body.business_name;

    if (!businessName) {
      return res.status(400).json({
        success: false,
        message: "No NFT ID!"
      });
    }

    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__.default)();

    try {
      const businessDetails = await _models_nftBusinessModel__WEBPACK_IMPORTED_MODULE_1___default().findOne({
        inputName: businessName
      });
      return res.status(200).json({
        success: true,
        business: businessDetails
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.message
      });
    }
  }

  return res.status(400).json({
    success: false,
    message: "Unable to process the request."
  });
}

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/nft-business-details.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsS0FBSyxFQUFFQSxLQUFLLENBQUNDO0FBQS9CLE9BQXJCLENBQVA7QUFDRDtBQUNGOztBQUVELFNBQU9xQixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxJQUFBQSxPQUFPLEVBQUUsS0FBWDtBQUFrQjVCLElBQUFBLE9BQU8sRUFBRTtBQUEzQixHQUFyQixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7QUN0QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaXNlLWFuZC1mYW1lLy4vZGIvZGJDb25uZWN0LmpzIiwid2VicGFjazovL3Jpc2UtYW5kLWZhbWUvLi9tb2RlbHMvbmZ0QnVzaW5lc3NNb2RlbC5qcyIsIndlYnBhY2s6Ly9yaXNlLWFuZC1mYW1lLy4vcGFnZXMvYXBpL25mdC1idXNpbmVzcy1kZXRhaWxzLmpzIiwid2VicGFjazovL3Jpc2UtYW5kLWZhbWUvZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcblx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXHJcblx0KTtcclxufVxyXG5cclxuY29uc3QgZGJDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRhd2FpdCBjb25uZWN0KGAke3Byb2Nlc3MuZW52Lk1PTkdPREJfVVJJfWApO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gTW9uZ29EQlwiKTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7IiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgTmZ0QnVzaW5lc3NTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG5cdHtcclxuXHRcdGlucHV0TmFtZToge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRDb3VudHJ5OiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdH0sXHJcblx0XHRpbnB1dFJlZ2lvbjoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHR9LFxyXG5cdFx0aW5wdXREZXNjcmlwdGlvbjoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRFbWFpbDoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRJbmR1c3RyeToge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRVdGlsaXR5OiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHR7IGNvbGxlY3Rpb246IFwiTkZUQnVzaW5lc3NcIiB9XHJcbik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9XHJcblx0bW9uZ29vc2UubW9kZWxzLk5GVEJ1c2luZXNzIHx8XHJcblx0bW9uZ29vc2UubW9kZWwoXCJORlRCdXNpbmVzc1wiLCBOZnRCdXNpbmVzc1NjaGVtYSk7IiwiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vZGIvZGJDb25uZWN0XCI7XHJcbmltcG9ydCBORlRCdXNpbmVzcyBmcm9tIFwiLi4vLi4vbW9kZWxzL25mdEJ1c2luZXNzTW9kZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCB7IG1ldGhvZCwgYm9keSB9ID0gcmVxO1xyXG5cclxuICBpZiAobWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgYnVzaW5lc3NOYW1lID0gYm9keS5idXNpbmVzc19uYW1lO1xyXG4gICAgaWYgKCFidXNpbmVzc05hbWUpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiTm8gTkZUIElEIVwiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYnVzaW5lc3NEZXRhaWxzID0gYXdhaXQgTkZUQnVzaW5lc3MuZmluZE9uZSh7IGlucHV0TmFtZTogYnVzaW5lc3NOYW1lIH0pO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBidXNpbmVzczogYnVzaW5lc3NEZXRhaWxzIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiVW5hYmxlIHRvIHByb2Nlc3MgdGhlIHJlcXVlc3QuXCIgfSk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwibmFtZXMiOlsiY29ubmVjdCIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiZGJDb25uZWN0IiwiZXJyb3IiLCJtZXNzYWdlIiwiTmZ0QnVzaW5lc3NTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsImlucHV0TmFtZSIsInR5cGUiLCJTdHJpbmciLCJpbnB1dENvdW50cnkiLCJpbnB1dFJlZ2lvbiIsImlucHV0RGVzY3JpcHRpb24iLCJpbnB1dEVtYWlsIiwiaW5wdXRJbmR1c3RyeSIsImlucHV0VXRpbGl0eSIsImNvbGxlY3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiTkZUQnVzaW5lc3MiLCJtb2RlbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwiYnVzaW5lc3NOYW1lIiwiYnVzaW5lc3NfbmFtZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiYnVzaW5lc3NEZXRhaWxzIiwiZmluZE9uZSIsImJ1c2luZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==