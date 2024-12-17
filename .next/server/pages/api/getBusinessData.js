"use strict";
(() => {
var exports = {};
exports.id = "pages/api/getBusinessData";
exports.ids = ["pages/api/getBusinessData"];
exports.modules = {

/***/ "./pages/api/getBusinessData.js":
/*!**************************************!*\
  !*** ./pages/api/getBusinessData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
  if (req.method === 'GET') {
    const {
      inputEmail
    } = req.body;
    const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    try {
      await client.connect();
      const database = client.db('NFTDatabase'); // Choose a name for your database

      const collection = database.collection('NFTBusiness'); // Choose a name for your collection

      const data = await collection.find({}).project({
        inputDescription: 0,
        inputCountry: 0,
        inputIndustry: 0,
        inputRegion: 0,
        inputUtility: 0,
        _id: 0
      }).toArray();
      res.json(data);
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong!'
      });
    } finally {
      await client.close(1500);
    }
  } else {
    res.status(405).json({
      message: 'Method not allowed!'
    });
  }
}

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/getBusinessData.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldEJ1c2luZXNzRGF0YS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsVUFBTTtBQUFDQyxNQUFBQTtBQUFELFFBQWVILEdBQUcsQ0FBQ0ksSUFBekI7QUFFQSxVQUFNQyxNQUFNLEdBQUcsSUFBSVAsZ0RBQUosQ0FBZ0JRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUE1QixFQUF5QztBQUN0REMsTUFBQUEsZUFBZSxFQUFFLElBRHFDO0FBRXREQyxNQUFBQSxrQkFBa0IsRUFBRTtBQUZrQyxLQUF6QyxDQUFmOztBQUtBLFFBQUk7QUFDRixZQUFNTCxNQUFNLENBQUNNLE9BQVAsRUFBTjtBQUNBLFlBQU1DLFFBQVEsR0FBR1AsTUFBTSxDQUFDUSxFQUFQLENBQVUsYUFBVixDQUFqQixDQUZFLENBRXlDOztBQUUzQyxZQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0UsVUFBVCxDQUFvQixhQUFwQixDQUFuQixDQUpFLENBSXFEOztBQUV2RCxZQUFNQyxJQUFJLEdBQUcsTUFBTUQsVUFBVSxDQUFDRSxJQUFYLENBQWdCLEVBQWhCLEVBQW9CQyxPQUFwQixDQUE0QjtBQUFFQyxRQUFBQSxnQkFBZ0IsRUFBRSxDQUFwQjtBQUF1QkMsUUFBQUEsWUFBWSxFQUFFLENBQXJDO0FBQXdDQyxRQUFBQSxhQUFhLEVBQUUsQ0FBdkQ7QUFBMERDLFFBQUFBLFdBQVcsRUFBRSxDQUF2RTtBQUEwRUMsUUFBQUEsWUFBWSxFQUFFLENBQXhGO0FBQTJGQyxRQUFBQSxHQUFHLEVBQUU7QUFBaEcsT0FBNUIsRUFBaUlDLE9BQWpJLEVBQW5CO0FBQ0F2QixNQUFBQSxHQUFHLENBQUN3QixJQUFKLENBQVNWLElBQVQ7QUFFRCxLQVRELENBU0UsT0FBT1csS0FBUCxFQUFjO0FBQ2R6QixNQUFBQSxHQUFHLENBQUMwQixNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBRUcsUUFBQUEsT0FBTyxFQUFFO0FBQVgsT0FBckI7QUFDRCxLQVhELFNBV1U7QUFDUixZQUFNdkIsTUFBTSxDQUFDd0IsS0FBUCxDQUFhLElBQWIsQ0FBTjtBQUNEO0FBQ0YsR0F0QkQsTUFzQk87QUFDTDVCLElBQUFBLEdBQUcsQ0FBQzBCLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFFRyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7QUM1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaXNlLWFuZC1mYW1lLy4vcGFnZXMvYXBpL2dldEJ1c2luZXNzRGF0YS5qcyIsIndlYnBhY2s6Ly9yaXNlLWFuZC1mYW1lL2V4dGVybmFsIFwibW9uZ29kYlwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICBjb25zdCB7aW5wdXRFbWFpbH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcclxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG4gICAgICBjb25zdCBkYXRhYmFzZSA9IGNsaWVudC5kYignTkZURGF0YWJhc2UnKTsgLy8gQ2hvb3NlIGEgbmFtZSBmb3IgeW91ciBkYXRhYmFzZVxyXG5cclxuICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGRhdGFiYXNlLmNvbGxlY3Rpb24oJ05GVEJ1c2luZXNzJyk7IC8vIENob29zZSBhIG5hbWUgZm9yIHlvdXIgY29sbGVjdGlvblxyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZCh7fSkucHJvamVjdCh7IGlucHV0RGVzY3JpcHRpb246IDAsIGlucHV0Q291bnRyeTogMCwgaW5wdXRJbmR1c3RyeTogMCwgaW5wdXRSZWdpb246IDAsIGlucHV0VXRpbGl0eTogMCwgX2lkOiAwIH0pLnRvQXJyYXkoKTtcclxuICAgICAgcmVzLmpzb24oZGF0YSk7XHJcbiAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmchJyB9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGF3YWl0IGNsaWVudC5jbG9zZSgxNTAwKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkIScgfSk7XHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaW5wdXRFbWFpbCIsImJvZHkiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0IiwiZGF0YWJhc2UiLCJkYiIsImNvbGxlY3Rpb24iLCJkYXRhIiwiZmluZCIsInByb2plY3QiLCJpbnB1dERlc2NyaXB0aW9uIiwiaW5wdXRDb3VudHJ5IiwiaW5wdXRJbmR1c3RyeSIsImlucHV0UmVnaW9uIiwiaW5wdXRVdGlsaXR5IiwiX2lkIiwidG9BcnJheSIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsIm1lc3NhZ2UiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=