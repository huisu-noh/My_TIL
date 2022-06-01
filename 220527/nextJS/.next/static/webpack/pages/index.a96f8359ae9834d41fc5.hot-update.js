webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "C:\\Users\\ddung\\Desktop\\\uC720\uB370\uBBF8 \uC608\uC2DC\uD30C\uC77C\\NextJS2\\pages\\index.js";
// our-domain.com/

var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'A First Meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Kwanghwamun.JPG',
  address: '서울특별시 종로구 청와대로 1 (세종로)',
  description: 'This is a first meetup!'
}, {
  id: 'm2',
  title: 'A Second Meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Kwanghwamun.JPG',
  address: '서울특별시 종로구 청와대로 1 (세종로)',
  description: 'This is a Second meetup!'
}]; // props 로 받기 때문에 더이상 Hook이 필요 없다.

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
/* 
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
} */

/*
// 비동기
// 여기 작성된 코드는 클라이언트 측에 들어가지 않기 때문에, 클라이언트 측에서 절대 실행되지 않는다.
// 이 코드는 빌드 프로세스 중에 실행되기 때문이다.
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // 페이지에서 요청이 들어오면 적어도 10초 마다 서버에서 페이지를 다시 생성!
    // 즉 페이지가 배열 다음에 규칙적으로 업데이트 되게 할 수 있다. 
    revalidate: 10,
  };
}
*/


_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsZ0JBRlQ7QUFHRUMsT0FBSyxFQUNILHFFQUpKO0FBS0VDLFNBQU8sRUFBRSx3QkFMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQURvQixFQVNwQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsaUJBRlQ7QUFHRUMsT0FBSyxFQUNILHFFQUpKO0FBS0VDLFNBQU8sRUFBRSx3QkFMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQVRvQixDQUF0QixDLENBbUJBOztBQUNBLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0FoQ1NGLFE7QUFrQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE5NmY4MzU5YWU5ODM0ZDQxZmM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBvdXItZG9tYWluLmNvbS9cclxuXHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdtMScsXHJcbiAgICB0aXRsZTogJ0EgRmlyc3QgTWVldHVwJyxcclxuICAgIGltYWdlOlxyXG4gICAgICAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy84LzgxL0t3YW5naHdhbXVuLkpQRycsXHJcbiAgICBhZGRyZXNzOiAn7ISc7Jq47Yq567OE7IucIOyiheuhnOq1rCDssq3smYDrjIDroZwgMSAo7IS47KKF66GcKScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBmaXJzdCBtZWV0dXAhJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnbTInLFxyXG4gICAgdGl0bGU6ICdBIFNlY29uZCBNZWV0dXAnLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzgvODEvS3dhbmdod2FtdW4uSlBHJyxcclxuICAgIGFkZHJlc3M6ICfshJzsmrjtirnrs4Tsi5wg7KKF66Gc6rWsIOyyreyZgOuMgOuhnCAxICjshLjsooXroZwpJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIFNlY29uZCBtZWV0dXAhJyxcclxuICB9LFxyXG5dO1xyXG5cclxuLy8gcHJvcHMg66GcIOuwm+q4sCDrlYzrrLjsl5Ag642U7J207IOBIEhvb2vsnbQg7ZWE7JqUIOyXhuuLpC5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XHJcbn1cclxuXHJcbi8qIFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcclxuICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcclxuXHJcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4gICAgfSxcclxuICB9O1xyXG59ICovXHJcblxyXG4vKlxyXG4vLyDruYTrj5nquLBcclxuLy8g7Jes6riwIOyekeyEseuQnCDsvZTrk5zripQg7YG065287J207Ja47Yq4IOy4oeyXkCDrk6TslrTqsIDsp4Ag7JWK6riwIOuVjOusuOyXkCwg7YG065287J207Ja47Yq4IOy4oeyXkOyEnCDsoIjrjIAg7Iuk7ZaJ65CY7KeAIOyViuuKlOuLpC5cclxuLy8g7J20IOy9lOuTnOuKlCDruYzrk5wg7ZSE66Gc7IS47IqkIOykkeyXkCDsi6TtlonrkJjquLAg65WM66y47J2064ukLlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4gICAgfSxcclxuICAgIC8vIO2OmOydtOyngOyXkOyEnCDsmpTssq3snbQg65Ok7Ja07Jik66m0IOyggeyWtOuPhCAxMOy0iCDrp4jri6Qg7ISc67KE7JeQ7IScIO2OmOydtOyngOulvCDri6Tsi5wg7IOd7ISxIVxyXG4gICAgLy8g7KaJIO2OmOydtOyngOqwgCDrsLDsl7Qg64uk7J2M7JeQIOq3nOy5meyggeycvOuhnCDsl4XrjbDsnbTtirgg65CY6rKMIO2VoCDsiJgg7J6I64ukLiBcclxuICAgIHJldmFsaWRhdGU6IDEwLFxyXG4gIH07XHJcbn1cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9