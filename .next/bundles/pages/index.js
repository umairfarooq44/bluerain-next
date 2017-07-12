
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _AppDrawer = __webpack_require__(601);

var _AppDrawer2 = _interopRequireDefault(_AppDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/umair/Projects/bluerain-next/pages/index.js?entry';
// import SiteGridWidget from '../components/Site/SitesGrid/SitesGrid.container';
// import AbsoluteCenterLayout from '../layouts/AbsoluteCenterLayout';

// import $ from 'jquery';

var IndexPage = function IndexPage() {
  return {
    render: function render() {
      // console.log('Props in index page is : ', this.props);
      var background = {
        background: 'url(/app-drawer-background.jpg) top right no-repeat fixed',
        height: '500vh'
      };
      return _react2.default.createElement('div', { style: background, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_AppDrawer2.default, (0, _extends3.default)({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })));
    }
  };
};

exports.default = IndexPage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

module.exports = ".app-drawer-icon{\n  float: left;\n  margin: 16px;\n}\n.app-drawer-icon a:hover{\n  text-decoration: none;\n}\n.app-drawer-icons-row{\n  margin-left: -2%;\n  margin-top: 1%;\n}\n.top-bar {\n  height: 59px;\n  background-color: rgba(0,0,0,0.2);\n  font-size: 14px;\n  color: white;\n}\n.top-bar-filters{\n  margin-top: 17px;\n}\n\n.search{\n  background-color: rgba(0,0,0,0.2) !important;\n  height: 40px;\n  color: white !important;\n  margin-top: 0.7em;\n}\n.category{\n  width: 100%;\n  border-bottom: 1px solid #D7C4C1;\n  margin-left: 20px;\n  margin-top: 20px;\n  color: #D7C4C1;\n  font-size: 18px;\n  width: 88%;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: rgba(0,0,0,0.5);\n    width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n  color: white;\n}\n.view-as{\n  background-color: transparent;\n  min-width: 60px;\n  height: 30px;\n  border: none;\n  color: white;\n\n}\n.dropdown-content button{\n  background-color: rgba(0,0,0,0.2);\n  width: 160px;\n  padding: 12px 16px;\n  border: none;\n  color: white;\n  text-align: left;\n}\n.dropdown-content button:hover{\n  background-color: rgba(0,0,0,0.8);\n}\n\n@media (min-width: 500px) and (max-width: 768px) {\n  .top-bar {\n    font-size: 12px;\n  }\n  .view-as{\n    min-width: 44px;\n  }\n  .dropdown-content {\n    width: 110px;\n  }\n  .dropdown-content button{\n    width: 110px;\n    padding: 12px 16px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .top-bar {\n    height: 107px;\n    font-size: 12px;\n  }\n  .view-as{\n    min-width: 44px;\n  }\n  .dropdown-content {\n    width: 110px;\n  }\n  .dropdown-content button{\n    width: 110px;\n    padding: 12px 16px;\n  }\n}\n";

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(621);

var _Icon2 = _interopRequireDefault(_Icon);

var _reactRouter = __webpack_require__(614);

var _includes = __webpack_require__(594);

var _includes2 = _interopRequireDefault(_includes);

var _lowerCase = __webpack_require__(596);

var _lowerCase2 = _interopRequireDefault(_lowerCase);

var _filter = __webpack_require__(593);

var _filter2 = _interopRequireDefault(_filter);

var _bluerainClientServices = __webpack_require__(570);

__webpack_require__(599);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/umair/Projects/bluerain-next/components/AppDrawer/AppDrawer.component.js';
/**
 * Created by saad bin saeed on 3/2/17.
 */

// import SearchBarComponent from 'bluerain-ui/lib/searchBar/SearchBar.component';

// import store from '../../redux/store';
// import apps from '../../server/appLoader';

// import { DEV } from '../../server/config';
// redux store
//import { setViewAs, setFilter, setSearch } from '../../redux/actions';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var propTypes = {};

var defaultProps = {};

var AppDrawer = function (_React$Component) {
  (0, _inherits3.default)(AppDrawer, _React$Component);

  function AppDrawer(props) {
    (0, _classCallCheck3.default)(this, AppDrawer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AppDrawer.__proto__ || (0, _getPrototypeOf2.default)(AppDrawer)).call(this, props));

    _this.state = {
      apps: [],
      allApps: [],
      searchQuery: store.getState().launcher.searchQuery,
      categories: [],
      // filter: store.getState().launcher.filter ? store.getState().launcher.filter : 'None',
      filter: 'None',
      viewAsGrid: store.getState().launcher.view.viewAsGrid,
      viewAsList: store.getState().launcher.view.viewAsList
    };
    _this.printGridView = _this.printGridView.bind(_this);
    _this.printListView = _this.printListView.bind(_this);
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.handleViewAsGrid = _this.handleViewAsGrid.bind(_this);
    _this.handleViewAsList = _this.handleViewAsList.bind(_this);
    _this.handleFilter = _this.handleFilter.bind(_this);
    _this.printIcons = _this.printIcons.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AppDrawer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // do long running stuff
      var appsDynamicCategories = [];
      var appsArray = [];
      var categoryList = [];
      if (DEV) {
        var appNames = ['Things', 'Places', 'Groups', 'Reports', 'Dashboards', 'Developers', 'Leaderboard', 'Fleet', 'Schedules', 'Scenes', 'Rules', 'App Store', 'Subscription', 'Settings'];
        var appIcons = ['bluetooth', 'book', 'users', 'flag', 'tachometer', 'laptop', 'graduation-cap', 'calendar', 'commenting', 'compass', 'camera', 'bolt', 'bomb', 'coffee'];
        var appCategories = ['assets', 'assets', 'assets', 'analytics', 'analytics', 'configuration', 'analytics', 'apps', 'automation', 'automation', 'automation', 'apps', 'configuration', 'configuration'];
        var appColors = ['#F20000', '#F9006B', '#D100D0', '#9D00D2', '#6C59CE', '#785AFE', '#00B4FB', '#00D9E8', '#00AD9A', '#00CB34', '#CFF745', '#FFC500', '#FF7229', '#676767'];
        for (var i = 0; i < appNames.length; i += 1) {
          var obj = {
            name: appNames[i],
            category: appCategories[i],
            icons: {
              name: appIcons[i],
              backgroundColors: [appColors[i], '#f2f2f2']
            },
            routes: {
              path: i % 2 === 0 ? 'device-explorer' : 'hello-world'
            }
          };
          appsArray.push(obj);
        }
      }
      // Assigning categories to original apps
      apps.forEach(function (app) {
        var newApp = app;
        newApp.category = 'apps';
        if (newApp.name === 'Flows') {
          // console.log('going to change the icon src');
          newApp.png = '/icon-flow-app.svg';
        }
        appsArray.push(newApp);
      });
      // Finding unique categories
      appsArray.forEach(function (app) {
        appsDynamicCategories.push(app.category);
      });
      appsDynamicCategories.forEach(function (category) {
        if (!(0, _includes2.default)(categoryList, category)) {
          categoryList.push(category);
        }
      });
      // Handling Filters
      var allAppsArray = appsArray;
      var filterValue = store.getState().launcher.filter;
      if (filterValue && filterValue !== 'none') {
        appsArray = (0, _filter2.default)(appsArray, { category: filterValue });
      }
      this.setState({
        apps: appsArray,
        allApps: allAppsArray,
        categories: categoryList,
        filter: filterValue || 'None'
      });
    }

    // handleSearch(event) {
    //   this.setState({ searchQuery: lowerCase(event.target.value) });
    //   store.dispatch(setSearch(event.target.value));
    // }

    // handleViewAsGrid() {
    //   const { viewAsGrid, viewAsList } = this.state;
    //   if (!viewAsGrid) {
    //     this.setState(prevState => ({
    //       viewAsGrid: !prevState.viewAsGrid,
    //       viewAsList: !prevState.viewAsList,
    //     }));
    //     store.dispatch(setViewAs(!viewAsGrid, !viewAsList));
    //   }
    // }

    // handleViewAsList() {
    //   const { viewAsList, viewAsGrid } = this.state;
    //   if (!viewAsList) {
    //     this.setState(prevState => ({
    //       viewAsList: !prevState.viewAsList,
    //       viewAsGrid: !prevState.viewAsGrid,
    //     }));
    //     store.dispatch(setViewAs(!viewAsGrid, !viewAsList));
    //   }
    //   // store.dispatch(socketConnected());
    //   // this.props.showLoading();
    //   // console.log('Props in index page is : ', this.props);
    // }

    // handleFilter(value) {
    //   const { allApps } = this.state;
    //   if (value === 'none') {
    //     this.setState({ apps: allApps });
    //   } else {
    //     const appsArray = filter(allApps, { category: value });
    //     this.setState({ apps: appsArray });
    //   }
    //   store.dispatch(setFilter(value));
    //   this.setState({ filter: value });
    // }

  }, {
    key: 'printIcons',
    value: function printIcons() {
      var _state = this.state,
          apps = _state.apps,
          searchQuery = _state.searchQuery,
          viewAsList = _state.viewAsList;

      var appsArray = [];
      if (searchQuery.length !== 0) {
        apps.forEach(function (app) {
          if ((0, _includes2.default)((0, _lowerCase2.default)(app.name), searchQuery)) {
            appsArray.push(app);
          }
        });
      } else {
        apps.forEach(function (app) {
          return appsArray.push(app);
        });
      }
      if (viewAsList) {
        return _react2.default.createElement('div', { className: 'row app-drawer-icons-row', __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          }
        }, this.printListView(appsArray));
      }
      return _react2.default.createElement('div', { className: 'row app-drawer-icons-row', __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, _react2.default.createElement('div', { className: 'col-lg-10 offset-lg-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, this.printGridView(appsArray)));
    }
  }, {
    key: 'printListView',
    value: function printListView(appsArray) {
      var _this2 = this;

      return this.state.categories.map(function (category) {
        var filteredArray = (0, _filter2.default)(appsArray, { category: category });
        if (filteredArray.length !== 0) {
          return _react2.default.createElement('div', { className: 'col-lg-10 offset-lg-1', key: category, __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            }
          }, _react2.default.createElement('div', { className: 'category', __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            }
          }, _react2.default.createElement('strong', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            }
          }, capitalizeFirstLetter(category))), _this2.printGridView(filteredArray));
        }
        return null;
      });
    }
  }, {
    key: 'printGridView',
    value: function printGridView(appsArray) {
      var windowWidth = document.body.clientWidth;
      return appsArray.map(function (app) {
        return _react2.default.createElement('div', { className: 'app-drawer-icon', key: app.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          }
        }, _react2.default.createElement(_reactRouter.Link, { to: 'app/' + app.routes.path, __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          }
        }, _react2.default.createElement(_Icon2.default, {
          name: app.icons.name,
          shadow: '20px',
          text: app.name, textColor: 'white',
          backgroundColors: app.icons.backgroundColors,
          png: app.png,
          size: windowWidth < 500 ? '100px' : '120px',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          }
        })));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state2 = this.state,
          viewAsGrid = _state2.viewAsGrid,
          viewAsList = _state2.viewAsList,
          filter = _state2.filter,
          searchQuery = _state2.searchQuery;

      var windowWidth = document.body.clientWidth;;
      var viewAsStyle = {
        backgroundColor: 'rgba(0,0,0,0.2)'
      };
      return _react2.default.createElement('div', { className: 'container-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, _react2.default.createElement('div', { className: 'row top-bar', __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, _react2.default.createElement('div', { className: 'col-lg-5 offset-lg-1 col-xs-' + (windowWidth < 500 ? '12' : '6') + ' col-sm-6 top-bar-filters', __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, 'View As:\xA0', _react2.default.createElement('button', { className: 'view-as', style: viewAsList ? viewAsStyle : null, onClick: this.handleViewAsList, __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, 'List'), _react2.default.createElement('button', { className: 'view-as', style: viewAsGrid ? viewAsStyle : null, onClick: this.handleViewAsGrid, __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, 'Grid'), ' \xA0\xA0\xA0\xA0', _react2.default.createElement('div', { className: 'dropdown', __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, 'Filters: \xA0', capitalizeFirstLetter(filter)), _react2.default.createElement('div', { className: 'dropdown-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.handleFilter('none');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, 'None'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.handleFilter('assets');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, 'Assets'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.handleFilter('analytics');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, 'Analytics'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.handleFilter('configuration');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, 'Configuration'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.handleFilter('apps');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, 'Apps'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.handleFilter('automation');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, 'Automation')))), _react2.default.createElement('div', { className: 'col-lg-3 offset-lg-1 col-xs-' + (windowWidth < 500 ? '12' : '6') + ' col-sm-5', __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, _react2.default.createElement('input', { className: 'form-control search', type: 'text', name: 'name', onChange: this.handleSearch, value: searchQuery || '', placeholder: 'Search here...', __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      })))), this.printIcons());
    }
  }]);

  return AppDrawer;
}(_react2.default.Component);

AppDrawer.propTypes = propTypes;
AppDrawer.defautProps = defaultProps;

exports.default = AppDrawer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/components/AppDrawer/AppDrawer.component.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/components/AppDrawer/AppDrawer.component.js"); } } })();

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(569);


/***/ })

},[620]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzFjNGYwMGIiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQXBwRHJhd2VyL0FwcERyYXdlci5jc3M/MWM0ZjAwYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcERyYXdlci9BcHBEcmF3ZXIuY29tcG9uZW50LmpzPzFjNGYwMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBTaXRlR3JpZFdpZGdldCBmcm9tICcuLi9jb21wb25lbnRzL1NpdGUvU2l0ZXNHcmlkL1NpdGVzR3JpZC5jb250YWluZXInO1xuLy8gaW1wb3J0IEFic29sdXRlQ2VudGVyTGF5b3V0IGZyb20gJy4uL2xheW91dHMvQWJzb2x1dGVDZW50ZXJMYXlvdXQnO1xuaW1wb3J0IEFwcERyYXdlciBmcm9tICcuLi9jb21wb25lbnRzL0FwcERyYXdlci9BcHBEcmF3ZXIuY29tcG9uZW50Jztcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+ICh7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdQcm9wcyBpbiBpbmRleCBwYWdlIGlzIDogJywgdGhpcy5wcm9wcyk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICd1cmwoL2FwcC1kcmF3ZXItYmFja2dyb3VuZC5qcGcpIHRvcCByaWdodCBuby1yZXBlYXQgZml4ZWQnLFxuICAgICAgaGVpZ2h0OiAnNTAwdmgnLFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e2JhY2tncm91bmR9ID5cbiAgICAgICAgPEFwcERyYXdlciB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsIm1vZHVsZS5leHBvcnRzID0gXCIuYXBwLWRyYXdlci1pY29ue1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW46IDE2cHg7XFxufVxcbi5hcHAtZHJhd2VyLWljb24gYTpob3ZlcntcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmFwcC1kcmF3ZXItaWNvbnMtcm93e1xcbiAgbWFyZ2luLWxlZnQ6IC0yJTtcXG4gIG1hcmdpbi10b3A6IDElO1xcbn1cXG4udG9wLWJhciB7XFxuICBoZWlnaHQ6IDU5cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi50b3AtYmFyLWZpbHRlcnN7XFxuICBtYXJnaW4tdG9wOiAxN3B4O1xcbn1cXG5cXG4uc2VhcmNoe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG4gIG1hcmdpbi10b3A6IDAuN2VtO1xcbn1cXG4uY2F0ZWdvcnl7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDdDNEMxO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgY29sb3I6ICNEN0M0QzE7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB3aWR0aDogODglO1xcbn1cXG5cXG4uZHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4udmlldy1hc3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWluLXdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG4uZHJvcGRvd24tY29udGVudCBidXR0b257XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XFxuICB3aWR0aDogMTYwcHg7XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uZHJvcGRvd24tY29udGVudCBidXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAudG9wLWJhciB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG4gIC52aWV3LWFze1xcbiAgICBtaW4td2lkdGg6IDQ0cHg7XFxuICB9XFxuICAuZHJvcGRvd24tY29udGVudCB7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gIH1cXG4gIC5kcm9wZG93bi1jb250ZW50IGJ1dHRvbntcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC50b3AtYmFyIHtcXG4gICAgaGVpZ2h0OiAxMDdweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcbiAgLnZpZXctYXN7XFxuICAgIG1pbi13aWR0aDogNDRweDtcXG4gIH1cXG4gIC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgfVxcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYnV0dG9ue1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIH1cXG59XFxuXCJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9BcHBEcmF3ZXIvQXBwRHJhd2VyLmNzcyIsIi8qKlxuICogQ3JlYXRlZCBieSBzYWFkIGJpbiBzYWVlZCBvbiAzLzIvMTcuXG4gKi9cbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgU2VhcmNoQmFyQ29tcG9uZW50IGZyb20gJ2JsdWVyYWluLXVpL2xpYi9zZWFyY2hCYXIvU2VhcmNoQmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tICdibHVlcmFpbi11aS9saWIvSWNvbi9JY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBpbmNsdWRlcyBmcm9tICdsb2Rhc2gvaW5jbHVkZXMnO1xuaW1wb3J0IGxvd2VyQ2FzZSBmcm9tICdsb2Rhc2gvbG93ZXJDYXNlJztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnbG9kYXNoL2ZpbHRlcic7XG5pbXBvcnQgeyBzaG93Rmxhc2hCYW5uZXIgIH0gZnJvbSAnYmx1ZXJhaW4tY2xpZW50LXNlcnZpY2VzJztcbi8vIGltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9yZWR1eC9zdG9yZSc7XG4vLyBpbXBvcnQgYXBwcyBmcm9tICcuLi8uLi9zZXJ2ZXIvYXBwTG9hZGVyJztcbmltcG9ydCAnLi9BcHBEcmF3ZXIuY3NzJztcbi8vIGltcG9ydCB7IERFViB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnO1xuLy8gcmVkdXggc3RvcmVcbi8vaW1wb3J0IHsgc2V0Vmlld0FzLCBzZXRGaWx0ZXIsIHNldFNlYXJjaCB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5jb25zdCBwcm9wVHlwZXMgPSB7XG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG59O1xuXG5jbGFzcyBBcHBEcmF3ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhcHBzOiBbXSxcbiAgICAgIGFsbEFwcHM6IFtdLFxuICAgICAgc2VhcmNoUXVlcnk6IHN0b3JlLmdldFN0YXRlKCkubGF1bmNoZXIuc2VhcmNoUXVlcnksXG4gICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgIC8vIGZpbHRlcjogc3RvcmUuZ2V0U3RhdGUoKS5sYXVuY2hlci5maWx0ZXIgPyBzdG9yZS5nZXRTdGF0ZSgpLmxhdW5jaGVyLmZpbHRlciA6ICdOb25lJyxcbiAgICAgIGZpbHRlcjogJ05vbmUnLFxuICAgICAgdmlld0FzR3JpZDogc3RvcmUuZ2V0U3RhdGUoKS5sYXVuY2hlci52aWV3LnZpZXdBc0dyaWQsXG4gICAgICB2aWV3QXNMaXN0OiBzdG9yZS5nZXRTdGF0ZSgpLmxhdW5jaGVyLnZpZXcudmlld0FzTGlzdCxcbiAgICB9O1xuICAgIHRoaXMucHJpbnRHcmlkVmlldyA9IHRoaXMucHJpbnRHcmlkVmlldy5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJpbnRMaXN0VmlldyA9IHRoaXMucHJpbnRMaXN0Vmlldy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2VhcmNoID0gdGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVZpZXdBc0dyaWQgPSB0aGlzLmhhbmRsZVZpZXdBc0dyaWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVZpZXdBc0xpc3QgPSB0aGlzLmhhbmRsZVZpZXdBc0xpc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlciA9IHRoaXMuaGFuZGxlRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wcmludEljb25zID0gdGhpcy5wcmludEljb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gZG8gbG9uZyBydW5uaW5nIHN0dWZmXG4gICAgY29uc3QgYXBwc0R5bmFtaWNDYXRlZ29yaWVzID0gW107XG4gICAgbGV0IGFwcHNBcnJheSA9IFtdO1xuICAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IFtdO1xuICAgIGlmIChERVYpIHtcbiAgICAgIGNvbnN0IGFwcE5hbWVzID0gWydUaGluZ3MnLCAnUGxhY2VzJywgJ0dyb3VwcycsICdSZXBvcnRzJywgJ0Rhc2hib2FyZHMnLCAnRGV2ZWxvcGVycycsICdMZWFkZXJib2FyZCcsICdGbGVldCcsICdTY2hlZHVsZXMnLCAnU2NlbmVzJywgJ1J1bGVzJywgJ0FwcCBTdG9yZScsICdTdWJzY3JpcHRpb24nLCAnU2V0dGluZ3MnXTtcbiAgICAgIGNvbnN0IGFwcEljb25zID0gWydibHVldG9vdGgnLCAnYm9vaycsICd1c2VycycsICdmbGFnJywgJ3RhY2hvbWV0ZXInLCAnbGFwdG9wJywgJ2dyYWR1YXRpb24tY2FwJywgJ2NhbGVuZGFyJywgJ2NvbW1lbnRpbmcnLCAnY29tcGFzcycsICdjYW1lcmEnLCAnYm9sdCcsICdib21iJywgJ2NvZmZlZSddO1xuICAgICAgY29uc3QgYXBwQ2F0ZWdvcmllcyA9IFsnYXNzZXRzJywgJ2Fzc2V0cycsICdhc3NldHMnLCAnYW5hbHl0aWNzJywgJ2FuYWx5dGljcycsICdjb25maWd1cmF0aW9uJywgJ2FuYWx5dGljcycsICdhcHBzJywgJ2F1dG9tYXRpb24nLCAnYXV0b21hdGlvbicsICdhdXRvbWF0aW9uJywgJ2FwcHMnLCAnY29uZmlndXJhdGlvbicsICdjb25maWd1cmF0aW9uJ107XG4gICAgICBjb25zdCBhcHBDb2xvcnMgPSBbJyNGMjAwMDAnLCAnI0Y5MDA2QicsICcjRDEwMEQwJywgJyM5RDAwRDInLCAnIzZDNTlDRScsICcjNzg1QUZFJywgJyMwMEI0RkInLCAnIzAwRDlFOCcsICcjMDBBRDlBJywgJyMwMENCMzQnLCAnI0NGRjc0NScsICcjRkZDNTAwJywgJyNGRjcyMjknLCAnIzY3Njc2NyddO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBOYW1lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgbmFtZTogYXBwTmFtZXNbaV0sXG4gICAgICAgICAgY2F0ZWdvcnk6IGFwcENhdGVnb3JpZXNbaV0sXG4gICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgIG5hbWU6IGFwcEljb25zW2ldLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yczogW2FwcENvbG9yc1tpXSwgJyNmMmYyZjInXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJvdXRlczoge1xuICAgICAgICAgICAgcGF0aDogaSAlIDIgPT09IDAgPyAnZGV2aWNlLWV4cGxvcmVyJyA6ICdoZWxsby13b3JsZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgYXBwc0FycmF5LnB1c2gob2JqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQXNzaWduaW5nIGNhdGVnb3JpZXMgdG8gb3JpZ2luYWwgYXBwc1xuICAgIGFwcHMuZm9yRWFjaChhcHAgPT4ge1xuICAgICAgY29uc3QgbmV3QXBwID0gYXBwO1xuICAgICAgbmV3QXBwLmNhdGVnb3J5ID0gJ2FwcHMnO1xuICAgICAgaWYgKG5ld0FwcC5uYW1lID09PSAnRmxvd3MnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdnb2luZyB0byBjaGFuZ2UgdGhlIGljb24gc3JjJyk7XG4gICAgICAgIG5ld0FwcC5wbmcgPSAnL2ljb24tZmxvdy1hcHAuc3ZnJztcbiAgICAgIH1cbiAgICAgIGFwcHNBcnJheS5wdXNoKG5ld0FwcCk7XG4gICAgfSk7XG4gICAgLy8gRmluZGluZyB1bmlxdWUgY2F0ZWdvcmllc1xuICAgIGFwcHNBcnJheS5mb3JFYWNoKGFwcCA9PiB7XG4gICAgICBhcHBzRHluYW1pY0NhdGVnb3JpZXMucHVzaChhcHAuY2F0ZWdvcnkpO1xuICAgIH0pO1xuICAgIGFwcHNEeW5hbWljQ2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgIGlmICghaW5jbHVkZXMoY2F0ZWdvcnlMaXN0LCBjYXRlZ29yeSkpIHtcbiAgICAgICAgY2F0ZWdvcnlMaXN0LnB1c2goY2F0ZWdvcnkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEhhbmRsaW5nIEZpbHRlcnNcbiAgICBjb25zdCBhbGxBcHBzQXJyYXkgPSBhcHBzQXJyYXk7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBzdG9yZS5nZXRTdGF0ZSgpLmxhdW5jaGVyLmZpbHRlcjtcbiAgICBpZiAoZmlsdGVyVmFsdWUgJiYgZmlsdGVyVmFsdWUgIT09ICdub25lJykge1xuICAgICAgYXBwc0FycmF5ID0gZmlsdGVyKGFwcHNBcnJheSwgeyBjYXRlZ29yeTogZmlsdGVyVmFsdWUgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYXBwczogYXBwc0FycmF5LFxuICAgICAgYWxsQXBwczogYWxsQXBwc0FycmF5LFxuICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcnlMaXN0LFxuICAgICAgZmlsdGVyOiBmaWx0ZXJWYWx1ZSB8fCAnTm9uZScsXG4gICAgfSk7XG4gIH1cblxuICAvLyBoYW5kbGVTZWFyY2goZXZlbnQpIHtcbiAgLy8gICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoUXVlcnk6IGxvd2VyQ2FzZShldmVudC50YXJnZXQudmFsdWUpIH0pO1xuICAvLyAgIHN0b3JlLmRpc3BhdGNoKHNldFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgLy8gfVxuXG4gIC8vIGhhbmRsZVZpZXdBc0dyaWQoKSB7XG4gIC8vICAgY29uc3QgeyB2aWV3QXNHcmlkLCB2aWV3QXNMaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAvLyAgIGlmICghdmlld0FzR3JpZCkge1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgLy8gICAgICAgdmlld0FzR3JpZDogIXByZXZTdGF0ZS52aWV3QXNHcmlkLFxuICAvLyAgICAgICB2aWV3QXNMaXN0OiAhcHJldlN0YXRlLnZpZXdBc0xpc3QsXG4gIC8vICAgICB9KSk7XG4gIC8vICAgICBzdG9yZS5kaXNwYXRjaChzZXRWaWV3QXMoIXZpZXdBc0dyaWQsICF2aWV3QXNMaXN0KSk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gaGFuZGxlVmlld0FzTGlzdCgpIHtcbiAgLy8gICBjb25zdCB7IHZpZXdBc0xpc3QsIHZpZXdBc0dyaWQgfSA9IHRoaXMuc3RhdGU7XG4gIC8vICAgaWYgKCF2aWV3QXNMaXN0KSB7XG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAvLyAgICAgICB2aWV3QXNMaXN0OiAhcHJldlN0YXRlLnZpZXdBc0xpc3QsXG4gIC8vICAgICAgIHZpZXdBc0dyaWQ6ICFwcmV2U3RhdGUudmlld0FzR3JpZCxcbiAgLy8gICAgIH0pKTtcbiAgLy8gICAgIHN0b3JlLmRpc3BhdGNoKHNldFZpZXdBcyghdmlld0FzR3JpZCwgIXZpZXdBc0xpc3QpKTtcbiAgLy8gICB9XG4gIC8vICAgLy8gc3RvcmUuZGlzcGF0Y2goc29ja2V0Q29ubmVjdGVkKCkpO1xuICAvLyAgIC8vIHRoaXMucHJvcHMuc2hvd0xvYWRpbmcoKTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZygnUHJvcHMgaW4gaW5kZXggcGFnZSBpcyA6ICcsIHRoaXMucHJvcHMpO1xuICAvLyB9XG5cbiAgLy8gaGFuZGxlRmlsdGVyKHZhbHVlKSB7XG4gIC8vICAgY29uc3QgeyBhbGxBcHBzIH0gPSB0aGlzLnN0YXRlO1xuICAvLyAgIGlmICh2YWx1ZSA9PT0gJ25vbmUnKSB7XG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHsgYXBwczogYWxsQXBwcyB9KTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgY29uc3QgYXBwc0FycmF5ID0gZmlsdGVyKGFsbEFwcHMsIHsgY2F0ZWdvcnk6IHZhbHVlIH0pO1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGFwcHM6IGFwcHNBcnJheSB9KTtcbiAgLy8gICB9XG4gIC8vICAgc3RvcmUuZGlzcGF0Y2goc2V0RmlsdGVyKHZhbHVlKSk7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcjogdmFsdWUgfSk7XG4gIC8vIH1cblxuICBwcmludEljb25zKCkge1xuICAgIGNvbnN0IHsgYXBwcywgc2VhcmNoUXVlcnksIHZpZXdBc0xpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYXBwc0FycmF5ID0gW107XG4gICAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgYXBwcy5mb3JFYWNoKGFwcCA9PiB7XG4gICAgICAgIGlmIChpbmNsdWRlcyhsb3dlckNhc2UoYXBwLm5hbWUpLCBzZWFyY2hRdWVyeSkpIHtcbiAgICAgICAgICBhcHBzQXJyYXkucHVzaChhcHApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwcy5mb3JFYWNoKGFwcCA9PiBhcHBzQXJyYXkucHVzaChhcHApKTtcbiAgICB9XG4gICAgaWYgKHZpZXdBc0xpc3QpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFwcC1kcmF3ZXItaWNvbnMtcm93XCI+XG4gICAgICAgICAge3RoaXMucHJpbnRMaXN0VmlldyhhcHBzQXJyYXkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhcHAtZHJhd2VyLWljb25zLXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBvZmZzZXQtbGctMVwiPlxuICAgICAgICAgIHt0aGlzLnByaW50R3JpZFZpZXcoYXBwc0FycmF5KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcHJpbnRMaXN0VmlldyhhcHBzQXJyYXkpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gZmlsdGVyKGFwcHNBcnJheSwgeyBjYXRlZ29yeSB9KTtcbiAgICAgIGlmIChmaWx0ZXJlZEFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIG9mZnNldC1sZy0xXCIga2V5PXtjYXRlZ29yeX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+PHN0cm9uZz57Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGNhdGVnb3J5KX08L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmludEdyaWRWaWV3KGZpbHRlcmVkQXJyYXkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaW50R3JpZFZpZXcoYXBwc0FycmF5KSB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHJldHVybiBhcHBzQXJyYXkubWFwKGFwcCA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1kcmF3ZXItaWNvblwiIGtleT17YXBwLm5hbWV9PlxuICAgICAgICAgIDxMaW5rIHRvPXtgYXBwLyR7YXBwLnJvdXRlcy5wYXRofWB9ID5cbiAgICAgICAgICAgIDxJY29uQ29tcG9uZW50XG4gICAgICAgICAgICAgIG5hbWU9e2FwcC5pY29ucy5uYW1lfVxuICAgICAgICAgICAgICBzaGFkb3c9eycyMHB4J31cbiAgICAgICAgICAgICAgdGV4dD17YXBwLm5hbWV9IHRleHRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9ycz17YXBwLmljb25zLmJhY2tncm91bmRDb2xvcnN9XG4gICAgICAgICAgICAgIHBuZz17YXBwLnBuZ31cbiAgICAgICAgICAgICAgc2l6ZT17d2luZG93V2lkdGggPCA1MDAgPyAnMTAwcHgnIDogJzEyMHB4J31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2aWV3QXNHcmlkLCB2aWV3QXNMaXN0LCBmaWx0ZXIsIHNlYXJjaFF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID1kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoOztcbiAgICBjb25zdCB2aWV3QXNTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC4yKScsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdG9wLWJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLWxnLTUgb2Zmc2V0LWxnLTEgY29sLXhzLSR7d2luZG93V2lkdGggPCA1MDAgPyAnMTInIDogJzYnfSBjb2wtc20tNiB0b3AtYmFyLWZpbHRlcnNgfT5cbiAgICAgICAgICAgIFZpZXcgQXM6Jm5ic3A7XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInZpZXctYXNcIiBzdHlsZT17dmlld0FzTGlzdCA/IHZpZXdBc1N0eWxlIDogbnVsbH0gb25DbGljaz17dGhpcy5oYW5kbGVWaWV3QXNMaXN0fT5MaXN0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInZpZXctYXNcIiBzdHlsZT17dmlld0FzR3JpZCA/IHZpZXdBc1N0eWxlIDogbnVsbH0gb25DbGljaz17dGhpcy5oYW5kbGVWaWV3QXNHcmlkfT5HcmlkPC9idXR0b24+ICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICA8c3Bhbj5GaWx0ZXJzOiAmbmJzcDt7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGZpbHRlcil9PC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRmlsdGVyKCdub25lJyl9Pk5vbmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRmlsdGVyKCdhc3NldHMnKX0+QXNzZXRzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUZpbHRlcignYW5hbHl0aWNzJyl9PkFuYWx5dGljczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVGaWx0ZXIoJ2NvbmZpZ3VyYXRpb24nKX0+Q29uZmlndXJhdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVGaWx0ZXIoJ2FwcHMnKX0+QXBwczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVGaWx0ZXIoJ2F1dG9tYXRpb24nKX0+QXV0b21hdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLWxnLTMgb2Zmc2V0LWxnLTEgY29sLXhzLSR7d2luZG93V2lkdGggPCA1MDAgPyAnMTInIDogJzYnfSBjb2wtc20tNWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgc2VhcmNoXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaH0gdmFsdWU9e3NlYXJjaFF1ZXJ5IHx8ICcnfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlLi4uXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJpbnRJY29ucygpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXBwRHJhd2VyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkFwcERyYXdlci5kZWZhdXRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgQXBwRHJhd2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcHBEcmF3ZXIvQXBwRHJhd2VyLmNvbXBvbmVudC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7O0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBSUE7QUFBQTtBQUVBO0FBRUE7QUFIQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFHQTtBQUhBO0FBQUE7QUFWQTtBQUVBO0FBY0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBZEE7Ozs7QUFJQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTs7QUFJQTtBQUFBO0FBUEE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU5BO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7OztBQU1BO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFOQTtBQVdBO0FBWEE7QUFDQTtBQVdBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBRkE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBS0E7QUFMQTtBQVNBOzs7OztBQWhPQTtBQUNBO0FBa09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        