
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 570:
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

var _AppDrawer = __webpack_require__(600);

var _AppDrawer2 = _interopRequireDefault(_AppDrawer);

var _Layout = __webpack_require__(601);

var _Layout2 = _interopRequireDefault(_Layout);

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
        background: 'url(/static/app-drawer-background.jpg) top right no-repeat fixed',
        height: '500vh'
      };
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('div', { style: background, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_AppDrawer2.default, (0, _extends3.default)({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }))));
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

/***/ 600:
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

var _reactRouter = __webpack_require__(614);

var _includes = __webpack_require__(594);

var _includes2 = _interopRequireDefault(_includes);

var _lowerCase = __webpack_require__(596);

var _lowerCase2 = _interopRequireDefault(_lowerCase);

var _filter = __webpack_require__(593);

var _filter2 = _interopRequireDefault(_filter);

var _bluerainClientServices = __webpack_require__(558);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/umair/Projects/bluerain-next/components/AppDrawer/AppDrawer.component.js';
/**
 * Created by saad bin saeed on 3/2/17.
 */

// import SearchBarComponent from 'bluerain-ui/lib/searchBar/SearchBar.component';
// import IconComponent from 'bluerain-ui/lib/Icon/Icon.component';

// import store from '../../redux/store';
// import apps from '../../server/appLoader';
//import './AppDrawer.css';
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
      searchQuery: '', //store.getState().launcher.searchQuery,
      categories: [],
      // filter: store.getState().launcher.filter ? store.getState().launcher.filter : 'None',
      filter: 'None',
      viewAsGrid: true, //store.getState().launcher.view.viewAsGrid,
      viewAsList: false //store.getState().launcher.view.viewAsList,
    };
    // this.printGridView = this.printGridView.bind(this);
    // this.printListView = this.printListView.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
    // this.handleViewAsGrid = this.handleViewAsGrid.bind(this);
    // this.handleViewAsList = this.handleViewAsList.bind(this);
    // this.handleFilter = this.handleFilter.bind(this);
    // this.printIcons = this.printIcons.bind(this);
    return _this;
  }

  // componentWillMount() {
  //   // do long running stuff
  //   const appsDynamicCategories = [];
  //   let appsArray = [];
  //   const categoryList = [];
  //   if (DEV) {
  //     const appNames = ['Things', 'Places', 'Groups', 'Reports', 'Dashboards', 'Developers', 'Leaderboard', 'Fleet', 'Schedules', 'Scenes', 'Rules', 'App Store', 'Subscription', 'Settings'];
  //     const appIcons = ['bluetooth', 'book', 'users', 'flag', 'tachometer', 'laptop', 'graduation-cap', 'calendar', 'commenting', 'compass', 'camera', 'bolt', 'bomb', 'coffee'];
  //     const appCategories = ['assets', 'assets', 'assets', 'analytics', 'analytics', 'configuration', 'analytics', 'apps', 'automation', 'automation', 'automation', 'apps', 'configuration', 'configuration'];
  //     const appColors = ['#F20000', '#F9006B', '#D100D0', '#9D00D2', '#6C59CE', '#785AFE', '#00B4FB', '#00D9E8', '#00AD9A', '#00CB34', '#CFF745', '#FFC500', '#FF7229', '#676767'];
  //     for (let i = 0; i < appNames.length; i += 1) {
  //       const obj = {
  //         name: appNames[i],
  //         category: appCategories[i],
  //         icons: {
  //           name: appIcons[i],
  //           backgroundColors: [appColors[i], '#f2f2f2'],
  //         },
  //         routes: {
  //           path: i % 2 === 0 ? 'device-explorer' : 'hello-world',
  //         },
  //       };
  //       appsArray.push(obj);
  //     }
  //   }
  //   // Assigning categories to original apps
  //   apps.forEach(app => {
  //     const newApp = app;
  //     newApp.category = 'apps';
  //     if (newApp.name === 'Flows') {
  //       // console.log('going to change the icon src');
  //       newApp.png = '/icon-flow-app.svg';
  //     }
  //     appsArray.push(newApp);
  //   });
  //   // Finding unique categories
  //   appsArray.forEach(app => {
  //     appsDynamicCategories.push(app.category);
  //   });
  //   appsDynamicCategories.forEach(category => {
  //     if (!includes(categoryList, category)) {
  //       categoryList.push(category);
  //     }
  //   });
  //   // Handling Filters
  //   const allAppsArray = appsArray;
  //   const filterValue = store.getState().launcher.filter;
  //   if (filterValue && filterValue !== 'none') {
  //     appsArray = filter(appsArray, { category: filterValue });
  //   }
  //   this.setState({
  //     apps: appsArray,
  //     allApps: allAppsArray,
  //     categories: categoryList,
  //     filter: filterValue || 'None',
  //   });
  // }

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

  (0, _createClass3.default)(AppDrawer, [{
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
      var windowWidth = 1000; // document.body.clientWidth;
      return appsArray.map(function (app) {
        return _react2.default.createElement('div', { className: 'app-drawer-icon', key: app.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          }
        }, _react2.default.createElement(_reactRouter.Link, { to: 'app/' + app.routes.path, __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          }
        }, _react2.default.createElement(IconComponent, {
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

      var windowWidth = 1000; // document.body.clientWidth;;
      var viewAsStyle = {
        backgroundColor: 'rgba(0,0,0,0.2)'
      };
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/AppDrawer.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/bluerain-bootstrap-theme.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }), _react2.default.createElement('div', { className: 'container-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, _react2.default.createElement('div', { className: 'row top-bar', __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, _react2.default.createElement('div', { className: 'col-lg-5 offset-lg-1 col-xs-' + (windowWidth < 500 ? '12' : '6') + ' col-sm-6 top-bar-filters', __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, 'View As:\xA0', _react2.default.createElement('button', { className: 'view-as', style: viewAsList ? viewAsStyle : null, onClick: this.handleViewAsList, __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, 'List'), _react2.default.createElement('button', { className: 'view-as', style: viewAsGrid ? viewAsStyle : null, onClick: this.handleViewAsGrid, __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, 'Grid'), ' \xA0\xA0\xA0\xA0', _react2.default.createElement('div', { className: 'dropdown', __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, 'Filters: \xA0', capitalizeFirstLetter(filter)), _react2.default.createElement('div', { className: 'dropdown-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.handleFilter('none');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, 'None'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.handleFilter('assets');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, 'Assets'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.handleFilter('analytics');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, 'Analytics'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.handleFilter('configuration');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, 'Configuration'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.handleFilter('apps');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, 'Apps'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this3.handleFilter('automation');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, 'Automation')))), _react2.default.createElement('div', { className: 'col-lg-3 offset-lg-1 col-xs-' + (windowWidth < 500 ? '12' : '6') + ' col-sm-5', __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, _react2.default.createElement('input', { className: 'form-control search', type: 'text', name: 'name', onChange: this.handleSearch, value: searchQuery || '', placeholder: 'Search here...', __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }))))));
    }
  }]);

  return AppDrawer;
}(_react2.default.Component);

AppDrawer.propTypes = propTypes;
AppDrawer.defautProps = defaultProps;

exports.default = AppDrawer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/components/AppDrawer/AppDrawer.component.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/components/AppDrawer/AppDrawer.component.js"); } } })();

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

var _bluerainClientServices = __webpack_require__(558);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/umair/Projects/bluerain-next/layouts/Layout.js';

//import { connect } from 'react-redux';
//import './system.css';
//import 'bluerain-bootstrap-theme/dist/css/layouts/system-layout.css';
//import SystemNav from '../components/SystemNav';


var loadingBarStyle = {
  zIndex: '999999999',
  backgroundColor: '#B11492' // light
  // backgroundColor: '#8C006E', // dark
};

var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    // console.log('System Layout :: Props :: ', props);
    // Set the state of the flash banner passed by store
    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    _this.state = {
      show: props.showFlashBanner
    };
    return _this;
  }
  // If any change made to flash banner, It will change the state of the flash banner


  (0, _createClass3.default)(Layout, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        show: nextProps.showFlashBanner
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var show = this.state.show;

      // const disableSystemNav = this.props.systemNav.state.disabled;
      //const location = this.props.location.pathname;


      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/layouts/system-layout.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement('div', { className: 'system-layout', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('div', { className: 'system-body', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, this.props.children)));
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;


Layout.propTypes = {
  children: _react2.default.PropTypes.object,
  showNav: _react2.default.PropTypes.bool,
  showFlashBanner: _react2.default.PropTypes.bool,
  showAppBar: _react2.default.PropTypes.bool
};

Layout.defaultProps = {
  showNav: true,
  showFlashBanner: false,
  showAppBar: false
};

// // make a connection of your component with the store
// const mapStateToProps = (state) => {
//   return {
//     showFlashBanner: state.flashBanner.show
//   };
// };
// const FilterLayout = connect(
//   mapStateToProps,
// )(Layout);

// export default withSystemNav(FilterLayout);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/layouts/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/layouts/Layout.js"); } } })();

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(570);


/***/ })

},[620]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2E2YjVhNDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBEcmF3ZXIvQXBwRHJhd2VyLmNvbXBvbmVudC5qcz9hNmI1YTQyIiwid2VicGFjazovLy8uL2xheW91dHMvTGF5b3V0LmpzP2E2YjVhNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBTaXRlR3JpZFdpZGdldCBmcm9tICcuLi9jb21wb25lbnRzL1NpdGUvU2l0ZXNHcmlkL1NpdGVzR3JpZC5jb250YWluZXInO1xuLy8gaW1wb3J0IEFic29sdXRlQ2VudGVyTGF5b3V0IGZyb20gJy4uL2xheW91dHMvQWJzb2x1dGVDZW50ZXJMYXlvdXQnO1xuaW1wb3J0IEFwcERyYXdlciBmcm9tICcuLi9jb21wb25lbnRzL0FwcERyYXdlci9BcHBEcmF3ZXIuY29tcG9uZW50JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4gKHtcblxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ1Byb3BzIGluIGluZGV4IHBhZ2UgaXMgOiAnLCB0aGlzLnByb3BzKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0ge1xuICAgICAgYmFja2dyb3VuZDogJ3VybCgvc3RhdGljL2FwcC1kcmF3ZXItYmFja2dyb3VuZC5qcGcpIHRvcCByaWdodCBuby1yZXBlYXQgZml4ZWQnLFxuICAgICAgaGVpZ2h0OiAnNTAwdmgnLFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IHN0eWxlPXtiYWNrZ3JvdW5kfSA+XG4gICAgICAgIDxBcHBEcmF3ZXIgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsIi8qKlxuICogQ3JlYXRlZCBieSBzYWFkIGJpbiBzYWVlZCBvbiAzLzIvMTcuXG4gKi9cbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgU2VhcmNoQmFyQ29tcG9uZW50IGZyb20gJ2JsdWVyYWluLXVpL2xpYi9zZWFyY2hCYXIvU2VhcmNoQmFyLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tICdibHVlcmFpbi11aS9saWIvSWNvbi9JY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBpbmNsdWRlcyBmcm9tICdsb2Rhc2gvaW5jbHVkZXMnO1xuaW1wb3J0IGxvd2VyQ2FzZSBmcm9tICdsb2Rhc2gvbG93ZXJDYXNlJztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnbG9kYXNoL2ZpbHRlcic7XG5pbXBvcnQgeyBzaG93Rmxhc2hCYW5uZXIgIH0gZnJvbSAnYmx1ZXJhaW4tY2xpZW50LXNlcnZpY2VzJztcbi8vIGltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9yZWR1eC9zdG9yZSc7XG4vLyBpbXBvcnQgYXBwcyBmcm9tICcuLi8uLi9zZXJ2ZXIvYXBwTG9hZGVyJztcbi8vaW1wb3J0ICcuL0FwcERyYXdlci5jc3MnO1xuLy8gaW1wb3J0IHsgREVWIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZyc7XG4vLyByZWR1eCBzdG9yZVxuLy9pbXBvcnQgeyBzZXRWaWV3QXMsIHNldEZpbHRlciwgc2V0U2VhcmNoIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cbmNvbnN0IHByb3BUeXBlcyA9IHtcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbn07XG5cbmNsYXNzIEFwcERyYXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFwcHM6IFtdLFxuICAgICAgYWxsQXBwczogW10sXG4gICAgICBzZWFyY2hRdWVyeTogJycsLy9zdG9yZS5nZXRTdGF0ZSgpLmxhdW5jaGVyLnNlYXJjaFF1ZXJ5LFxuICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAvLyBmaWx0ZXI6IHN0b3JlLmdldFN0YXRlKCkubGF1bmNoZXIuZmlsdGVyID8gc3RvcmUuZ2V0U3RhdGUoKS5sYXVuY2hlci5maWx0ZXIgOiAnTm9uZScsXG4gICAgICBmaWx0ZXI6ICdOb25lJyxcbiAgICAgIHZpZXdBc0dyaWQ6IHRydWUsLy9zdG9yZS5nZXRTdGF0ZSgpLmxhdW5jaGVyLnZpZXcudmlld0FzR3JpZCxcbiAgICAgIHZpZXdBc0xpc3Q6IGZhbHNlLy9zdG9yZS5nZXRTdGF0ZSgpLmxhdW5jaGVyLnZpZXcudmlld0FzTGlzdCxcbiAgICB9O1xuICAgIC8vIHRoaXMucHJpbnRHcmlkVmlldyA9IHRoaXMucHJpbnRHcmlkVmlldy5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMucHJpbnRMaXN0VmlldyA9IHRoaXMucHJpbnRMaXN0Vmlldy5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuaGFuZGxlU2VhcmNoID0gdGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmhhbmRsZVZpZXdBc0dyaWQgPSB0aGlzLmhhbmRsZVZpZXdBc0dyaWQuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmhhbmRsZVZpZXdBc0xpc3QgPSB0aGlzLmhhbmRsZVZpZXdBc0xpc3QuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmhhbmRsZUZpbHRlciA9IHRoaXMuaGFuZGxlRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5wcmludEljb25zID0gdGhpcy5wcmludEljb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gIC8vICAgLy8gZG8gbG9uZyBydW5uaW5nIHN0dWZmXG4gIC8vICAgY29uc3QgYXBwc0R5bmFtaWNDYXRlZ29yaWVzID0gW107XG4gIC8vICAgbGV0IGFwcHNBcnJheSA9IFtdO1xuICAvLyAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IFtdO1xuICAvLyAgIGlmIChERVYpIHtcbiAgLy8gICAgIGNvbnN0IGFwcE5hbWVzID0gWydUaGluZ3MnLCAnUGxhY2VzJywgJ0dyb3VwcycsICdSZXBvcnRzJywgJ0Rhc2hib2FyZHMnLCAnRGV2ZWxvcGVycycsICdMZWFkZXJib2FyZCcsICdGbGVldCcsICdTY2hlZHVsZXMnLCAnU2NlbmVzJywgJ1J1bGVzJywgJ0FwcCBTdG9yZScsICdTdWJzY3JpcHRpb24nLCAnU2V0dGluZ3MnXTtcbiAgLy8gICAgIGNvbnN0IGFwcEljb25zID0gWydibHVldG9vdGgnLCAnYm9vaycsICd1c2VycycsICdmbGFnJywgJ3RhY2hvbWV0ZXInLCAnbGFwdG9wJywgJ2dyYWR1YXRpb24tY2FwJywgJ2NhbGVuZGFyJywgJ2NvbW1lbnRpbmcnLCAnY29tcGFzcycsICdjYW1lcmEnLCAnYm9sdCcsICdib21iJywgJ2NvZmZlZSddO1xuICAvLyAgICAgY29uc3QgYXBwQ2F0ZWdvcmllcyA9IFsnYXNzZXRzJywgJ2Fzc2V0cycsICdhc3NldHMnLCAnYW5hbHl0aWNzJywgJ2FuYWx5dGljcycsICdjb25maWd1cmF0aW9uJywgJ2FuYWx5dGljcycsICdhcHBzJywgJ2F1dG9tYXRpb24nLCAnYXV0b21hdGlvbicsICdhdXRvbWF0aW9uJywgJ2FwcHMnLCAnY29uZmlndXJhdGlvbicsICdjb25maWd1cmF0aW9uJ107XG4gIC8vICAgICBjb25zdCBhcHBDb2xvcnMgPSBbJyNGMjAwMDAnLCAnI0Y5MDA2QicsICcjRDEwMEQwJywgJyM5RDAwRDInLCAnIzZDNTlDRScsICcjNzg1QUZFJywgJyMwMEI0RkInLCAnIzAwRDlFOCcsICcjMDBBRDlBJywgJyMwMENCMzQnLCAnI0NGRjc0NScsICcjRkZDNTAwJywgJyNGRjcyMjknLCAnIzY3Njc2NyddO1xuICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBOYW1lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAvLyAgICAgICBjb25zdCBvYmogPSB7XG4gIC8vICAgICAgICAgbmFtZTogYXBwTmFtZXNbaV0sXG4gIC8vICAgICAgICAgY2F0ZWdvcnk6IGFwcENhdGVnb3JpZXNbaV0sXG4gIC8vICAgICAgICAgaWNvbnM6IHtcbiAgLy8gICAgICAgICAgIG5hbWU6IGFwcEljb25zW2ldLFxuICAvLyAgICAgICAgICAgYmFja2dyb3VuZENvbG9yczogW2FwcENvbG9yc1tpXSwgJyNmMmYyZjInXSxcbiAgLy8gICAgICAgICB9LFxuICAvLyAgICAgICAgIHJvdXRlczoge1xuICAvLyAgICAgICAgICAgcGF0aDogaSAlIDIgPT09IDAgPyAnZGV2aWNlLWV4cGxvcmVyJyA6ICdoZWxsby13b3JsZCcsXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgfTtcbiAgLy8gICAgICAgYXBwc0FycmF5LnB1c2gob2JqKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgLy8gQXNzaWduaW5nIGNhdGVnb3JpZXMgdG8gb3JpZ2luYWwgYXBwc1xuICAvLyAgIGFwcHMuZm9yRWFjaChhcHAgPT4ge1xuICAvLyAgICAgY29uc3QgbmV3QXBwID0gYXBwO1xuICAvLyAgICAgbmV3QXBwLmNhdGVnb3J5ID0gJ2FwcHMnO1xuICAvLyAgICAgaWYgKG5ld0FwcC5uYW1lID09PSAnRmxvd3MnKSB7XG4gIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKCdnb2luZyB0byBjaGFuZ2UgdGhlIGljb24gc3JjJyk7XG4gIC8vICAgICAgIG5ld0FwcC5wbmcgPSAnL2ljb24tZmxvdy1hcHAuc3ZnJztcbiAgLy8gICAgIH1cbiAgLy8gICAgIGFwcHNBcnJheS5wdXNoKG5ld0FwcCk7XG4gIC8vICAgfSk7XG4gIC8vICAgLy8gRmluZGluZyB1bmlxdWUgY2F0ZWdvcmllc1xuICAvLyAgIGFwcHNBcnJheS5mb3JFYWNoKGFwcCA9PiB7XG4gIC8vICAgICBhcHBzRHluYW1pY0NhdGVnb3JpZXMucHVzaChhcHAuY2F0ZWdvcnkpO1xuICAvLyAgIH0pO1xuICAvLyAgIGFwcHNEeW5hbWljQ2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgLy8gICAgIGlmICghaW5jbHVkZXMoY2F0ZWdvcnlMaXN0LCBjYXRlZ29yeSkpIHtcbiAgLy8gICAgICAgY2F0ZWdvcnlMaXN0LnB1c2goY2F0ZWdvcnkpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyAgIC8vIEhhbmRsaW5nIEZpbHRlcnNcbiAgLy8gICBjb25zdCBhbGxBcHBzQXJyYXkgPSBhcHBzQXJyYXk7XG4gIC8vICAgY29uc3QgZmlsdGVyVmFsdWUgPSBzdG9yZS5nZXRTdGF0ZSgpLmxhdW5jaGVyLmZpbHRlcjtcbiAgLy8gICBpZiAoZmlsdGVyVmFsdWUgJiYgZmlsdGVyVmFsdWUgIT09ICdub25lJykge1xuICAvLyAgICAgYXBwc0FycmF5ID0gZmlsdGVyKGFwcHNBcnJheSwgeyBjYXRlZ29yeTogZmlsdGVyVmFsdWUgfSk7XG4gIC8vICAgfVxuICAvLyAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgYXBwczogYXBwc0FycmF5LFxuICAvLyAgICAgYWxsQXBwczogYWxsQXBwc0FycmF5LFxuICAvLyAgICAgY2F0ZWdvcmllczogY2F0ZWdvcnlMaXN0LFxuICAvLyAgICAgZmlsdGVyOiBmaWx0ZXJWYWx1ZSB8fCAnTm9uZScsXG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyBoYW5kbGVTZWFyY2goZXZlbnQpIHtcbiAgLy8gICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoUXVlcnk6IGxvd2VyQ2FzZShldmVudC50YXJnZXQudmFsdWUpIH0pO1xuICAvLyAgIHN0b3JlLmRpc3BhdGNoKHNldFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgLy8gfVxuXG4gIC8vIGhhbmRsZVZpZXdBc0dyaWQoKSB7XG4gIC8vICAgY29uc3QgeyB2aWV3QXNHcmlkLCB2aWV3QXNMaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAvLyAgIGlmICghdmlld0FzR3JpZCkge1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgLy8gICAgICAgdmlld0FzR3JpZDogIXByZXZTdGF0ZS52aWV3QXNHcmlkLFxuICAvLyAgICAgICB2aWV3QXNMaXN0OiAhcHJldlN0YXRlLnZpZXdBc0xpc3QsXG4gIC8vICAgICB9KSk7XG4gIC8vICAgICBzdG9yZS5kaXNwYXRjaChzZXRWaWV3QXMoIXZpZXdBc0dyaWQsICF2aWV3QXNMaXN0KSk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gaGFuZGxlVmlld0FzTGlzdCgpIHtcbiAgLy8gICBjb25zdCB7IHZpZXdBc0xpc3QsIHZpZXdBc0dyaWQgfSA9IHRoaXMuc3RhdGU7XG4gIC8vICAgaWYgKCF2aWV3QXNMaXN0KSB7XG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAvLyAgICAgICB2aWV3QXNMaXN0OiAhcHJldlN0YXRlLnZpZXdBc0xpc3QsXG4gIC8vICAgICAgIHZpZXdBc0dyaWQ6ICFwcmV2U3RhdGUudmlld0FzR3JpZCxcbiAgLy8gICAgIH0pKTtcbiAgLy8gICAgIHN0b3JlLmRpc3BhdGNoKHNldFZpZXdBcyghdmlld0FzR3JpZCwgIXZpZXdBc0xpc3QpKTtcbiAgLy8gICB9XG4gIC8vICAgLy8gc3RvcmUuZGlzcGF0Y2goc29ja2V0Q29ubmVjdGVkKCkpO1xuICAvLyAgIC8vIHRoaXMucHJvcHMuc2hvd0xvYWRpbmcoKTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZygnUHJvcHMgaW4gaW5kZXggcGFnZSBpcyA6ICcsIHRoaXMucHJvcHMpO1xuICAvLyB9XG5cbiAgLy8gaGFuZGxlRmlsdGVyKHZhbHVlKSB7XG4gIC8vICAgY29uc3QgeyBhbGxBcHBzIH0gPSB0aGlzLnN0YXRlO1xuICAvLyAgIGlmICh2YWx1ZSA9PT0gJ25vbmUnKSB7XG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHsgYXBwczogYWxsQXBwcyB9KTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgY29uc3QgYXBwc0FycmF5ID0gZmlsdGVyKGFsbEFwcHMsIHsgY2F0ZWdvcnk6IHZhbHVlIH0pO1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGFwcHM6IGFwcHNBcnJheSB9KTtcbiAgLy8gICB9XG4gIC8vICAgc3RvcmUuZGlzcGF0Y2goc2V0RmlsdGVyKHZhbHVlKSk7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcjogdmFsdWUgfSk7XG4gIC8vIH1cblxuICBwcmludEljb25zKCkge1xuICAgIGNvbnN0IHsgYXBwcywgc2VhcmNoUXVlcnksIHZpZXdBc0xpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYXBwc0FycmF5ID0gW107XG4gICAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgYXBwcy5mb3JFYWNoKGFwcCA9PiB7XG4gICAgICAgIGlmIChpbmNsdWRlcyhsb3dlckNhc2UoYXBwLm5hbWUpLCBzZWFyY2hRdWVyeSkpIHtcbiAgICAgICAgICBhcHBzQXJyYXkucHVzaChhcHApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwcy5mb3JFYWNoKGFwcCA9PiBhcHBzQXJyYXkucHVzaChhcHApKTtcbiAgICB9XG4gICAgaWYgKHZpZXdBc0xpc3QpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFwcC1kcmF3ZXItaWNvbnMtcm93XCI+XG4gICAgICAgICAge3RoaXMucHJpbnRMaXN0VmlldyhhcHBzQXJyYXkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhcHAtZHJhd2VyLWljb25zLXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBvZmZzZXQtbGctMVwiPlxuICAgICAgICAgIHt0aGlzLnByaW50R3JpZFZpZXcoYXBwc0FycmF5KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcHJpbnRMaXN0VmlldyhhcHBzQXJyYXkpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gZmlsdGVyKGFwcHNBcnJheSwgeyBjYXRlZ29yeSB9KTtcbiAgICAgIGlmIChmaWx0ZXJlZEFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIG9mZnNldC1sZy0xXCIga2V5PXtjYXRlZ29yeX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+PHN0cm9uZz57Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGNhdGVnb3J5KX08L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmludEdyaWRWaWV3KGZpbHRlcmVkQXJyYXkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaW50R3JpZFZpZXcoYXBwc0FycmF5KSB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSAxMDAwOy8vIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgcmV0dXJuIGFwcHNBcnJheS5tYXAoYXBwID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWRyYXdlci1pY29uXCIga2V5PXthcHAubmFtZX0+XG4gICAgICAgICAgPExpbmsgdG89e2BhcHAvJHthcHAucm91dGVzLnBhdGh9YH0gPlxuICAgICAgICAgICAgPEljb25Db21wb25lbnRcbiAgICAgICAgICAgICAgbmFtZT17YXBwLmljb25zLm5hbWV9XG4gICAgICAgICAgICAgIHNoYWRvdz17JzIwcHgnfVxuICAgICAgICAgICAgICB0ZXh0PXthcHAubmFtZX0gdGV4dENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JzPXthcHAuaWNvbnMuYmFja2dyb3VuZENvbG9yc31cbiAgICAgICAgICAgICAgcG5nPXthcHAucG5nfVxuICAgICAgICAgICAgICBzaXplPXt3aW5kb3dXaWR0aCA8IDUwMCA/ICcxMDBweCcgOiAnMTIwcHgnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZpZXdBc0dyaWQsIHZpZXdBc0xpc3QsIGZpbHRlciwgc2VhcmNoUXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPTEwMDA7Ly8gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDs7XG4gICAgY29uc3Qgdmlld0FzU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMiknLFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9BcHBEcmF3ZXIuY3NzXCIgLz5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvYmx1ZXJhaW4tYm9vdHN0cmFwLXRoZW1lLmNzc1wiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0b3AtYmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtbGctNSBvZmZzZXQtbGctMSBjb2wteHMtJHt3aW5kb3dXaWR0aCA8IDUwMCA/ICcxMicgOiAnNid9IGNvbC1zbS02IHRvcC1iYXItZmlsdGVyc2B9PlxuICAgICAgICAgICAgVmlldyBBczombmJzcDtcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidmlldy1hc1wiIHN0eWxlPXt2aWV3QXNMaXN0ID8gdmlld0FzU3R5bGUgOiBudWxsfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVZpZXdBc0xpc3R9Pkxpc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidmlldy1hc1wiIHN0eWxlPXt2aWV3QXNHcmlkID8gdmlld0FzU3R5bGUgOiBudWxsfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVZpZXdBc0dyaWR9PkdyaWQ8L2J1dHRvbj4gJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgIDxzcGFuPkZpbHRlcnM6ICZuYnNwO3tjYXBpdGFsaXplRmlyc3RMZXR0ZXIoZmlsdGVyKX08L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVGaWx0ZXIoJ25vbmUnKX0+Tm9uZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVGaWx0ZXIoJ2Fzc2V0cycpfT5Bc3NldHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRmlsdGVyKCdhbmFseXRpY3MnKX0+QW5hbHl0aWNzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUZpbHRlcignY29uZmlndXJhdGlvbicpfT5Db25maWd1cmF0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUZpbHRlcignYXBwcycpfT5BcHBzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUZpbHRlcignYXV0b21hdGlvbicpfT5BdXRvbWF0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtbGctMyBvZmZzZXQtbGctMSBjb2wteHMtJHt3aW5kb3dXaWR0aCA8IDUwMCA/ICcxMicgOiAnNid9IGNvbC1zbS01YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBzZWFyY2hcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNofSB2YWx1ZT17c2VhcmNoUXVlcnkgfHwgJyd9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmUuLi5cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgLy90aGlzLnByaW50SWNvbnMoKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFwcERyYXdlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5BcHBEcmF3ZXIuZGVmYXV0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcERyYXdlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBwRHJhd2VyL0FwcERyYXdlci5jb21wb25lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9ucywgd2l0aFN5c3RlbU5hdiwgRmxhc2hCYW5uZXIsIExvYWRpbmdCYXIgfSBmcm9tICdibHVlcmFpbi1jbGllbnQtc2VydmljZXMnO1xuLy9pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy9pbXBvcnQgJy4vc3lzdGVtLmNzcyc7XG4vL2ltcG9ydCAnYmx1ZXJhaW4tYm9vdHN0cmFwLXRoZW1lL2Rpc3QvY3NzL2xheW91dHMvc3lzdGVtLWxheW91dC5jc3MnO1xuLy9pbXBvcnQgU3lzdGVtTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvU3lzdGVtTmF2JztcblxuXG5jb25zdCBsb2FkaW5nQmFyU3R5bGUgPSB7XG4gIHpJbmRleDogJzk5OTk5OTk5OScsXG4gIGJhY2tncm91bmRDb2xvcjogJyNCMTE0OTInLCAvLyBsaWdodFxuICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjOEMwMDZFJywgLy8gZGFya1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gY29uc29sZS5sb2coJ1N5c3RlbSBMYXlvdXQgOjogUHJvcHMgOjogJywgcHJvcHMpO1xuICAgIC8vIFNldCB0aGUgc3RhdGUgb2YgdGhlIGZsYXNoIGJhbm5lciBwYXNzZWQgYnkgc3RvcmVcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvdzogcHJvcHMuc2hvd0ZsYXNoQmFubmVyLFxuICAgIH1cbiAgfVxuICAvLyBJZiBhbnkgY2hhbmdlIG1hZGUgdG8gZmxhc2ggYmFubmVyLCBJdCB3aWxsIGNoYW5nZSB0aGUgc3RhdGUgb2YgdGhlIGZsYXNoIGJhbm5lclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvdzogbmV4dFByb3BzLnNob3dGbGFzaEJhbm5lclxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2hvdyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIC8vIGNvbnN0IGRpc2FibGVTeXN0ZW1OYXYgPSB0aGlzLnByb3BzLnN5c3RlbU5hdi5zdGF0ZS5kaXNhYmxlZDtcbiAgICAvL2NvbnN0IGxvY2F0aW9uID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZTtcblxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9sYXlvdXRzL3N5c3RlbS1sYXlvdXQuY3NzXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzeXN0ZW0tbGF5b3V0XCI+XG4gICAgICAgICAgey8qPExvYWRpbmdCYXIgc3R5bGU9e2xvYWRpbmdCYXJTdHlsZX0gc2hvd0Zhc3RBY3Rpb25zIHByb2dyZXNzSW5jcmVhc2U9ezN9IC8+Ki99XG4gICAgICAgICAgey8qPE5vdGlmaWNhdGlvbnMgLz4qL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN5c3RlbS1ib2R5XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgc2hvd05hdjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dGbGFzaEJhbm5lcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dBcHBCYXI6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5MYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuICBzaG93TmF2OiB0cnVlLFxuICBzaG93Rmxhc2hCYW5uZXI6IGZhbHNlLFxuICBzaG93QXBwQmFyOiBmYWxzZSxcbn07XG5cblxuLy8gLy8gbWFrZSBhIGNvbm5lY3Rpb24gb2YgeW91ciBjb21wb25lbnQgd2l0aCB0aGUgc3RvcmVcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHNob3dGbGFzaEJhbm5lcjogc3RhdGUuZmxhc2hCYW5uZXIuc2hvd1xuLy8gICB9O1xuLy8gfTtcbi8vIGNvbnN0IEZpbHRlckxheW91dCA9IGNvbm5lY3QoXG4vLyAgIG1hcFN0YXRlVG9Qcm9wcyxcbi8vICkoTGF5b3V0KTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFN5c3RlbU5hdihGaWx0ZXJMYXlvdXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGF5b3V0cy9MYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUpBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUVBO0FBSEE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBSUE7QUFKQTtBQUFBO0FBWEE7QUFFQTtBQWdCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFYQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW1CQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTkE7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7O0FBTUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQU5BO0FBV0E7QUFYQTtBQUNBO0FBV0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFGQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBV0E7QUFYQTs7Ozs7O0FBM05BO0FBQ0E7QUF3T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4UUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUhBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUE5QkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        