
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 621:
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

var _AppDrawer = __webpack_require__(704);

var _AppDrawer2 = _interopRequireDefault(_AppDrawer);

var _Layout = __webpack_require__(708);

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

/***/ 704:
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

var _reactRouter = __webpack_require__(610);

var _includes = __webpack_require__(684);

var _includes2 = _interopRequireDefault(_includes);

var _lowerCase = __webpack_require__(687);

var _lowerCase2 = _interopRequireDefault(_lowerCase);

var _filter = __webpack_require__(683);

var _filter2 = _interopRequireDefault(_filter);

var _bluerainClientServices = __webpack_require__(556);

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

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(636);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _reactRouter = __webpack_require__(610);

var _reactstrap = __webpack_require__(819);

var _reactTooltip = __webpack_require__(744);

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _bluerainClientServices = __webpack_require__(556);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/umair/Projects/bluerain-next/components/SystemNav/SystemNav.component.js';
// import { Icon } from 'react-fa';


var propTypes = {
  linkToUserProfile: _react.PropTypes.string
};

var defaultProps = {
  linkToUserProfile: '/user'
};

var imgSrc = void 0;

var SystemNavComponent = function (_React$Component) {
  (0, _inherits3.default)(SystemNavComponent, _React$Component);

  function SystemNavComponent(props) {
    (0, _classCallCheck3.default)(this, SystemNavComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SystemNavComponent.__proto__ || (0, _getPrototypeOf2.default)(SystemNavComponent)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }

  (0, _createClass3.default)(SystemNavComponent, [{
    key: 'getDropDownMenu',
    value: function getDropDownMenu() {
      if (localStorage.sessionToken) {
        return _react2.default.createElement(_reactstrap.Dropdown, { tag: 'li', isOpen: this.state.dropdownOpen, toggle: this.toggle, className: 'nav-item dropup system-dropdown', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, _react2.default.createElement(_reactstrap.DropdownToggle, { tag: 'a', className: 'nav-link', id: 'supportedContentDropdown', 'aria-haspopup': true, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _react2.default.createElement('span', { className: 'nav-item-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, _react2.default.createElement('img', { src: imgSrc, className: 'rounded-circle', alt: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        })), _react2.default.createElement('span', { className: 'nav-item-text', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, 'Abdul Rehman')), _react2.default.createElement(_reactstrap.DropdownMenu, { className: 'system-dropdown-menu', 'aria-labelledby': 'supportedContentDropdown', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, _react2.default.createElement(_reactstrap.DropdownItem, { tag: 'a', href: '/logout', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, 'Log out')));
      }
      return _react2.default.createElement('li', { className: 'nav-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('a', { className: 'nav-link', href: '/login', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('img', { src: imgSrc, className: 'rounded-circle', alt: '', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })));
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          linkToUserProfile = _props.linkToUserProfile,
          items = _props.items,
          props = (0, _objectWithoutProperties3.default)(_props, ['linkToUserProfile', 'items']);

      if (localStorage && localStorage.profilePicture) {
        imgSrc = localStorage.profilePicture;
      } else {
        imgSrc = 'https://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png';
      }
      return _react2.default.createElement('div', { className: 'system-nav', style: { height: '100%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('div', { className: 'navbar navbar-full navbar-dark only-icons system-drawer', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_reactRouter.Link, { className: 'navbar-brand', to: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('div', { className: 'mevris-logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Mevris')), _react2.default.createElement('ul', { className: 'navbar nav navbar-nav', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('li', { className: 'nav-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_reactRouter.Link, { className: 'nav-link', to: '/app', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('span', { className: 'nav-item-icon', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), _react2.default.createElement('span', { className: 'nav-item-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'Launcher')))), _react2.default.createElement('div', { className: 'nav-separator', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), _react2.default.createElement('ul', { className: 'navbar nav navbar-nav', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, items.map(SystemNavComponent.renderItem)), _react2.default.createElement('div', { className: 'nav-spacer', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), _react2.default.createElement('ul', { className: 'nav navbar-nav', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement('li', { className: 'nav-item active', __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement('a', { className: 'nav-link', href: '', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement('div', { className: 'nav-icon', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement('i', { className: 'fa fa-fw fa-plug', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), _react2.default.createElement('i', { className: 'status-icon fa fa-circle text-' + (this.props.isConnected ? 'success' : 'danger'), __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })))), this.getDropDownMenu())), _react2.default.createElement(_reactTooltip2.default, { id: 'system-nav', place: 'left', effect: 'solid', __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }));
    }
  }], [{
    key: 'renderItem',
    value: function renderItem(item) {
      return _react2.default.createElement('li', { className: 'nav-item', key: item.slug, 'data-tip': item.title, 'data-for': 'system-nav', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_reactRouter.Link, { className: 'nav-link', to: item.to, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('span', { className: 'nav-item-icon', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement('span', { className: 'nav-item-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, item.title), _react2.default.createElement('span', { className: 'hidden-sm-up', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, item.title)));
    }
  }]);

  return SystemNavComponent;
}(_react2.default.Component);

SystemNavComponent.propTypes = propTypes;
SystemNavComponent.defaultProps = defaultProps;

exports.default = (0, _bluerainClientServices.withSocket)(SystemNavComponent);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/components/SystemNav/SystemNav.component.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/components/SystemNav/SystemNav.component.js"); } } })();

/***/ }),

/***/ 706:
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

var _reactSidebar = __webpack_require__(736);

var _reactSidebar2 = _interopRequireDefault(_reactSidebar);

var _SystemNav = __webpack_require__(705);

var _SystemNav2 = _interopRequireDefault(_SystemNav);

var _appLoader = __webpack_require__(714);

var _appLoader2 = _interopRequireDefault(_appLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/umair/Projects/bluerain-next/components/SystemNav/SystemNav.container.js';


var propTypes = {
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object, _react2.default.PropTypes.func]),
  systemNav: _react2.default.PropTypes.shape({
    actions: _react2.default.PropTypes.object,
    state: _react2.default.PropTypes.object
  }).isRequired
};

var SystemNav = function (_Component) {
  (0, _inherits3.default)(SystemNav, _Component);

  function SystemNav(props) {
    (0, _classCallCheck3.default)(this, SystemNav);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SystemNav.__proto__ || (0, _getPrototypeOf2.default)(SystemNav)).call(this, props));

    _this.onSetopen = _this.onSetopen.bind(_this);
    _this.mediaQueryChanged = _this.mediaQueryChanged.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SystemNav, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var mql = window.matchMedia('(min-width: 800px)');
      mql.addListener(this.mediaQueryChanged);

      this.setState({ mql: mql });
      var docked = mql.matches;
      var _props$systemNav$acti = this.props.systemNav.actions,
          dock = _props$systemNav$acti.dock,
          undock = _props$systemNav$acti.undock;

      if (docked) {
        dock();
      } else {
        undock();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.state.mql.removeListener(this.mediaQueryChanged.bind(this));
    }
  }, {
    key: 'onSetopen',
    value: function onSetopen(isOpen) {
      var _props$systemNav$acti2 = this.props.systemNav.actions,
          open = _props$systemNav$acti2.open,
          close = _props$systemNav$acti2.close;

      if (isOpen) {
        open();
      } else {
        close();
      }
    }
  }, {
    key: 'mediaQueryChanged',
    value: function mediaQueryChanged() {
      var docked = this.state.mql.matches;
      var _props$systemNav$acti3 = this.props.systemNav.actions,
          dock = _props$systemNav$acti3.dock,
          undock = _props$systemNav$acti3.undock;

      if (docked) {
        dock();
      } else {
        undock();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$systemNav$stat = this.props.systemNav.state,
          open = _props$systemNav$stat.open,
          docked = _props$systemNav$stat.docked;

      var sidebarItems = _appLoader2.default.map(function (app) {

        var item = {
          title: app.name,
          slug: app.slug,
          to: app.getRootPath()
        };

        try {
          item.icon = app.icons.taskbar.value;
        } catch (error) {
          item.icon = 'window-maximize';
        }

        return item;
      });
      var styles = {
        sidebar: {
          overflow: 'visible'
        }
      };

      var sidebarContent = _react2.default.createElement(_SystemNav2.default, { items: sidebarItems, style: { height: '100%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      });

      return _react2.default.createElement(_reactSidebar2.default, {
        styles: styles,
        sidebar: sidebarContent,
        open: open,
        docked: docked,
        shadow: !docked && open,
        onSetOpen: this.onSetopen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, this.props.children);
    }
  }]);

  return SystemNav;
}(_react.Component);

exports.default = SystemNav;


SystemNav.propTypes = propTypes;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/components/SystemNav/SystemNav.container.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/components/SystemNav/SystemNav.container.js"); } } })();

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluerainClientServices = __webpack_require__(556);

var _SystemNav = __webpack_require__(706);

var _SystemNav2 = _interopRequireDefault(_SystemNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _bluerainClientServices.withSystemNav)(_SystemNav2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/components/SystemNav/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/components/SystemNav/index.js"); } } })();

/***/ }),

/***/ 708:
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

var _bluerainClientServices = __webpack_require__(556);

var _withData = __webpack_require__(711);

var _withData2 = _interopRequireDefault(_withData);

var _reactRedux = __webpack_require__(717);

var _SystemNav = __webpack_require__(707);

var _SystemNav2 = _interopRequireDefault(_SystemNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/umair/Projects/bluerain-next/layouts/Layout.js';
//import './system.css';
//import 'bluerain-bootstrap-theme/dist/css/layouts/system-layout.css';


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
          lineNumber: 40
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/layouts/system-layout.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement('div', { className: 'system-layout', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_bluerainClientServices.LoadingBar, { style: loadingBarStyle, showFastActions: true, progressIncrease: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_bluerainClientServices.Notifications, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement('div', { className: 'system-body', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, this.props.children)));
    }
  }]);

  return Layout;
}(_react2.default.Component);

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
exports.default = Layout;

// make a connection of your component with the store
// const mapStateToProps = (state) => {
//   return {
//     showFlashBanner: state.flashBanner.show
//   };
// };
// const FilterLayout = connect(
//   mapStateToProps,
// )(Layout);

// export default withData(withSystemNav(FilterLayout));

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/layouts/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/layouts/Layout.js"); } } })();

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _apolloClient = __webpack_require__(586);

var _apolloClient2 = _interopRequireDefault(_apolloClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import fetch from 'isomorphic-fetch'

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
// if (!process.browser) {
//   ////global.fetch = fetch
// }

// import { ApolloClient, createNetworkInterface } from 'react-apollo'
function create() {
  var networkInterface = (0, _apolloClient.createNetworkInterface)({
    uri: 'http://localhost:8000/graphql',
    opts: {
      credentials: 'same-origin'
    }
  });
  networkInterface.use([{
    applyMiddleware: function applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}; // Create the header object if needed.
      }
      // get the authentication token from local storage if it exists
      var token = localStorage.getItem('sessionToken');
      req.options.headers.Authorization = token ? '' + token : null;
      next();
    }
  }]);
  return new _apolloClient2.default({
    //ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: networkInterface
  });
}

function initApollo() {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create();
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create();
  }

  return apolloClient;
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/lib/initApollo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/lib/initApollo.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initRedux;

var _redux = __webpack_require__(564);

var _reduxThunk = __webpack_require__(820);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _bluerainClientServices = __webpack_require__(556);

var _AppBar = __webpack_require__(712);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _launcher = __webpack_require__(713);

var _launcher2 = _interopRequireDefault(_launcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reduxStore = null;

// Get the Redux DevTools extension and fallback to a no-op function


// Importing reducers
var devtools = function devtools(f) {
  return f;
};
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

function create(apollo) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _redux.createStore)((0, _redux.combineReducers)({ // Setup reducers
    flashBanner: _bluerainClientServices.flashBannerReducers,
    loadingBar: _bluerainClientServices.loadingBarReducer,
    launcher: _launcher2.default,
    bluerain: _bluerainClientServices.reducers,
    appBar: _AppBar2.default,

    apollo: apollo.reducer()
  }), initialState, // Hydrate the store with server-side data
  (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), (0, _redux.applyMiddleware)(apollo.middleware()), // Add additional middleware here
  devtools));
}

function initRedux(apollo, initialState) {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(apollo, initialState);
  }

  // Reuse store on the client-side
  if (!reduxStore) {
    reduxStore = create(apollo, initialState);
  }

  return reduxStore;
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/lib/initRedux.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/lib/initRedux.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(73);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(84);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(694);

var _initApollo = __webpack_require__(709);

var _initApollo2 = _interopRequireDefault(_initApollo);

var _initRedux = __webpack_require__(710);

var _initRedux2 = _interopRequireDefault(_initRedux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/umair/Projects/bluerain-next/lib/withData.js';


// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

exports.default = function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    (0, _inherits3.default)(WithData, _React$Component);

    (0, _createClass3.default)(WithData, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo, redux, url, state;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverState = {};

                  // Evaluate the composed component's getInitialProps()

                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:

                  // Run all GraphQL queries in the component tree
                  // and extract the resulting data
                  if (!process.browser) {
                    console.log('in !process.browser');
                    apollo = (0, _initApollo2.default)();
                    redux = (0, _initRedux2.default)(apollo);
                    // Provide the `url` prop data in case a GraphQL query uses it

                    url = { query: ctx.query, pathname: ctx.pathname

                      /*try {
                        // Run all GraphQL queries
                        await getDataFromTree(
                          // No need to use the Redux Provider
                          // because Apollo sets up the store for us
                          <ApolloProvider client={apollo} store={redux}>
                            <ComposedComponent url={url} {...composedInitialProps} />
                          </ApolloProvider>
                        )
                      } catch (error) {
                        // Prevent Apollo Client GraphQL errors from crashing SSR.
                        // Handle them in components via the data.error prop:
                        // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
                      }*/

                      // Extract query data from the store
                    };
                    state = redux.getState();

                    // No need to include other initial Redux state because when it
                    // initialises on the client-side it'll create it again anyway

                    serverState = {
                      apollo: { // Only include the Apollo data state
                        data: state.apollo.data
                      }
                    };
                  }

                  return _context.abrupt('return', (0, _extends3.default)({
                    serverState: serverState
                  }, composedInitialProps));

                case 8:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithData(props) {
      (0, _classCallCheck3.default)(this, WithData);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithData.__proto__ || (0, _getPrototypeOf2.default)(WithData)).call(this, props));

      _this.apollo = (0, _initApollo2.default)();
      _this.redux = (0, _initRedux2.default)(_this.apollo, _this.props.serverState);
      return _this;
    }

    (0, _createClass3.default)(WithData, [{
      key: 'render',
      value: function render() {
        return (
          // No need to use the Redux Provider
          // because Apollo sets up the store for us
          _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.apollo, store: this.redux, __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          })))
        );
      }
    }]);

    return WithData;
  }(_react2.default.Component), _class.displayName = 'WithData(' + getComponentDisplayName(ComposedComponent) + ')', _class.propTypes = {
    serverState: _propTypes2.default.object.isRequired
  }, _temp;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/lib/withData.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/lib/withData.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Haris on 3/31/17.
 */

var initialState = {
  show: null
};

var AppBarReduceres = function AppBarReduceres() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case 'SHOW_APP_BAR':
      return (0, _extends3.default)({}, state, {
        show: action.show
      });

    default:
      return state;
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/redux/reducers/AppBar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/redux/reducers/AppBar.js"); } } })();

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  filter: null,
  searchQuery: '',
  view: {
    viewAsGrid: true,
    viewAsList: false
  }
};

var launcherReducers = function launcherReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case 'SET_VIEW_AS':
      return (0, _extends3.default)({}, state, {
        view: {
          viewAsGrid: action.viewAsGrid,
          viewAsList: action.viewAsList
        }
      });

    case 'SET_FILTER':
      return (0, _extends3.default)({}, state, {
        filter: action.filter
      });

    case 'SET_SEARCH_QUERY':
      return (0, _extends3.default)({}, state, {
        searchQuery: action.searchQuery
      });

    default:
      return state;
  }
};

exports.default = launcherReducers;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/redux/reducers/launcher.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/redux/reducers/launcher.js"); } } })();

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const regex = /bluerain-app\-\w+\/package\.json$/;
// const regex = /bluerain-app\-\w+\/lib\/(index\.js)$/;
// const regex = /bluerain-app-\w+\/lib\/index.js/;
// const req = require.context('../../node_modules', true, regex);

// console.log('found apps', req.keys());

// let deviceExplorar = require('bluerain-app-device-explorer');
// let helloWorldApp = require('bluerain-app-hello-world');
// let flowApp = require('bluerain-app-flows');

// if (deviceExplorar.default) {
//   deviceExplorar = deviceExplorar.default;
// }
// if (helloWorldApp.default) {
//   helloWorldApp = helloWorldApp.default;
// }
// if (flowApp.default) {npm 
//   flowApp = flowApp.default;
// }

var apps = [
  // deviceExplorar,
  // helloWorldApp
];

module.exports = apps;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/umair/Projects/bluerain-next/server/appLoader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/umair/Projects/bluerain-next/server/appLoader.js"); } } })();

/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(621);


/***/ })

},[828]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2NhOGI4ZjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBEcmF3ZXIvQXBwRHJhd2VyLmNvbXBvbmVudC5qcz9jYThiOGY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3lzdGVtTmF2L1N5c3RlbU5hdi5jb21wb25lbnQuanM/Y2E4YjhmNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N5c3RlbU5hdi9TeXN0ZW1OYXYuY29udGFpbmVyLmpzP2NhOGI4ZjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TeXN0ZW1OYXYvaW5kZXguanM/Y2E4YjhmNSIsIndlYnBhY2s6Ly8vLi9sYXlvdXRzL0xheW91dC5qcz9jYThiOGY1Iiwid2VicGFjazovLy8uL2xpYi9pbml0QXBvbGxvLmpzP2NhOGI4ZjUiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXRSZWR1eC5qcz9jYThiOGY1Iiwid2VicGFjazovLy8uL2xpYi93aXRoRGF0YS5qcz9iNWI1MTQ4Iiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL0FwcEJhci5qcz9iNWI1MTQ4Iiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2xhdW5jaGVyLmpzP2I1YjUxNDgiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2FwcExvYWRlci5qcz9iNWI1MTQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgU2l0ZUdyaWRXaWRnZXQgZnJvbSAnLi4vY29tcG9uZW50cy9TaXRlL1NpdGVzR3JpZC9TaXRlc0dyaWQuY29udGFpbmVyJztcbi8vIGltcG9ydCBBYnNvbHV0ZUNlbnRlckxheW91dCBmcm9tICcuLi9sYXlvdXRzL0Fic29sdXRlQ2VudGVyTGF5b3V0JztcbmltcG9ydCBBcHBEcmF3ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBEcmF3ZXIvQXBwRHJhd2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0Jztcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+ICh7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdQcm9wcyBpbiBpbmRleCBwYWdlIGlzIDogJywgdGhpcy5wcm9wcyk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICd1cmwoL3N0YXRpYy9hcHAtZHJhd2VyLWJhY2tncm91bmQuanBnKSB0b3AgcmlnaHQgbm8tcmVwZWF0IGZpeGVkJyxcbiAgICAgIGhlaWdodDogJzUwMHZoJyxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBzdHlsZT17YmFja2dyb3VuZH0gPlxuICAgICAgICA8QXBwRHJhd2VyIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCIvKipcbiAqIENyZWF0ZWQgYnkgc2FhZCBiaW4gc2FlZWQgb24gMy8yLzE3LlxuICovXG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFNlYXJjaEJhckNvbXBvbmVudCBmcm9tICdibHVlcmFpbi11aS9saWIvc2VhcmNoQmFyL1NlYXJjaEJhci5jb21wb25lbnQnO1xuLy8gaW1wb3J0IEljb25Db21wb25lbnQgZnJvbSAnYmx1ZXJhaW4tdWkvbGliL0ljb24vSWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgaW5jbHVkZXMgZnJvbSAnbG9kYXNoL2luY2x1ZGVzJztcbmltcG9ydCBsb3dlckNhc2UgZnJvbSAnbG9kYXNoL2xvd2VyQ2FzZSc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2xvZGFzaC9maWx0ZXInO1xuaW1wb3J0IHsgc2hvd0ZsYXNoQmFubmVyICB9IGZyb20gJ2JsdWVyYWluLWNsaWVudC1zZXJ2aWNlcyc7XG4vLyBpbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vcmVkdXgvc3RvcmUnO1xuLy8gaW1wb3J0IGFwcHMgZnJvbSAnLi4vLi4vc2VydmVyL2FwcExvYWRlcic7XG4vL2ltcG9ydCAnLi9BcHBEcmF3ZXIuY3NzJztcbi8vIGltcG9ydCB7IERFViB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnO1xuLy8gcmVkdXggc3RvcmVcbi8vaW1wb3J0IHsgc2V0Vmlld0FzLCBzZXRGaWx0ZXIsIHNldFNlYXJjaCB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5jb25zdCBwcm9wVHlwZXMgPSB7XG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG59O1xuXG5jbGFzcyBBcHBEcmF3ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhcHBzOiBbXSxcbiAgICAgIGFsbEFwcHM6IFtdLFxuICAgICAgc2VhcmNoUXVlcnk6ICcnLC8vc3RvcmUuZ2V0U3RhdGUoKS5sYXVuY2hlci5zZWFyY2hRdWVyeSxcbiAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgLy8gZmlsdGVyOiBzdG9yZS5nZXRTdGF0ZSgpLmxhdW5jaGVyLmZpbHRlciA/IHN0b3JlLmdldFN0YXRlKCkubGF1bmNoZXIuZmlsdGVyIDogJ05vbmUnLFxuICAgICAgZmlsdGVyOiAnTm9uZScsXG4gICAgICB2aWV3QXNHcmlkOiB0cnVlLC8vc3RvcmUuZ2V0U3RhdGUoKS5sYXVuY2hlci52aWV3LnZpZXdBc0dyaWQsXG4gICAgICB2aWV3QXNMaXN0OiBmYWxzZS8vc3RvcmUuZ2V0U3RhdGUoKS5sYXVuY2hlci52aWV3LnZpZXdBc0xpc3QsXG4gICAgfTtcbiAgICAvLyB0aGlzLnByaW50R3JpZFZpZXcgPSB0aGlzLnByaW50R3JpZFZpZXcuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLnByaW50TGlzdFZpZXcgPSB0aGlzLnByaW50TGlzdFZpZXcuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmhhbmRsZVNlYXJjaCA9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5oYW5kbGVWaWV3QXNHcmlkID0gdGhpcy5oYW5kbGVWaWV3QXNHcmlkLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5oYW5kbGVWaWV3QXNMaXN0ID0gdGhpcy5oYW5kbGVWaWV3QXNMaXN0LmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5oYW5kbGVGaWx0ZXIgPSB0aGlzLmhhbmRsZUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMucHJpbnRJY29ucyA9IHRoaXMucHJpbnRJY29ucy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAvLyAgIC8vIGRvIGxvbmcgcnVubmluZyBzdHVmZlxuICAvLyAgIGNvbnN0IGFwcHNEeW5hbWljQ2F0ZWdvcmllcyA9IFtdO1xuICAvLyAgIGxldCBhcHBzQXJyYXkgPSBbXTtcbiAgLy8gICBjb25zdCBjYXRlZ29yeUxpc3QgPSBbXTtcbiAgLy8gICBpZiAoREVWKSB7XG4gIC8vICAgICBjb25zdCBhcHBOYW1lcyA9IFsnVGhpbmdzJywgJ1BsYWNlcycsICdHcm91cHMnLCAnUmVwb3J0cycsICdEYXNoYm9hcmRzJywgJ0RldmVsb3BlcnMnLCAnTGVhZGVyYm9hcmQnLCAnRmxlZXQnLCAnU2NoZWR1bGVzJywgJ1NjZW5lcycsICdSdWxlcycsICdBcHAgU3RvcmUnLCAnU3Vic2NyaXB0aW9uJywgJ1NldHRpbmdzJ107XG4gIC8vICAgICBjb25zdCBhcHBJY29ucyA9IFsnYmx1ZXRvb3RoJywgJ2Jvb2snLCAndXNlcnMnLCAnZmxhZycsICd0YWNob21ldGVyJywgJ2xhcHRvcCcsICdncmFkdWF0aW9uLWNhcCcsICdjYWxlbmRhcicsICdjb21tZW50aW5nJywgJ2NvbXBhc3MnLCAnY2FtZXJhJywgJ2JvbHQnLCAnYm9tYicsICdjb2ZmZWUnXTtcbiAgLy8gICAgIGNvbnN0IGFwcENhdGVnb3JpZXMgPSBbJ2Fzc2V0cycsICdhc3NldHMnLCAnYXNzZXRzJywgJ2FuYWx5dGljcycsICdhbmFseXRpY3MnLCAnY29uZmlndXJhdGlvbicsICdhbmFseXRpY3MnLCAnYXBwcycsICdhdXRvbWF0aW9uJywgJ2F1dG9tYXRpb24nLCAnYXV0b21hdGlvbicsICdhcHBzJywgJ2NvbmZpZ3VyYXRpb24nLCAnY29uZmlndXJhdGlvbiddO1xuICAvLyAgICAgY29uc3QgYXBwQ29sb3JzID0gWycjRjIwMDAwJywgJyNGOTAwNkInLCAnI0QxMDBEMCcsICcjOUQwMEQyJywgJyM2QzU5Q0UnLCAnIzc4NUFGRScsICcjMDBCNEZCJywgJyMwMEQ5RTgnLCAnIzAwQUQ5QScsICcjMDBDQjM0JywgJyNDRkY3NDUnLCAnI0ZGQzUwMCcsICcjRkY3MjI5JywgJyM2NzY3NjcnXTtcbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwTmFtZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgLy8gICAgICAgY29uc3Qgb2JqID0ge1xuICAvLyAgICAgICAgIG5hbWU6IGFwcE5hbWVzW2ldLFxuICAvLyAgICAgICAgIGNhdGVnb3J5OiBhcHBDYXRlZ29yaWVzW2ldLFxuICAvLyAgICAgICAgIGljb25zOiB7XG4gIC8vICAgICAgICAgICBuYW1lOiBhcHBJY29uc1tpXSxcbiAgLy8gICAgICAgICAgIGJhY2tncm91bmRDb2xvcnM6IFthcHBDb2xvcnNbaV0sICcjZjJmMmYyJ10sXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICByb3V0ZXM6IHtcbiAgLy8gICAgICAgICAgIHBhdGg6IGkgJSAyID09PSAwID8gJ2RldmljZS1leHBsb3JlcicgOiAnaGVsbG8td29ybGQnLFxuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgIH07XG4gIC8vICAgICAgIGFwcHNBcnJheS5wdXNoKG9iaik7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIC8vIEFzc2lnbmluZyBjYXRlZ29yaWVzIHRvIG9yaWdpbmFsIGFwcHNcbiAgLy8gICBhcHBzLmZvckVhY2goYXBwID0+IHtcbiAgLy8gICAgIGNvbnN0IG5ld0FwcCA9IGFwcDtcbiAgLy8gICAgIG5ld0FwcC5jYXRlZ29yeSA9ICdhcHBzJztcbiAgLy8gICAgIGlmIChuZXdBcHAubmFtZSA9PT0gJ0Zsb3dzJykge1xuICAvLyAgICAgICAvLyBjb25zb2xlLmxvZygnZ29pbmcgdG8gY2hhbmdlIHRoZSBpY29uIHNyYycpO1xuICAvLyAgICAgICBuZXdBcHAucG5nID0gJy9pY29uLWZsb3ctYXBwLnN2Zyc7XG4gIC8vICAgICB9XG4gIC8vICAgICBhcHBzQXJyYXkucHVzaChuZXdBcHApO1xuICAvLyAgIH0pO1xuICAvLyAgIC8vIEZpbmRpbmcgdW5pcXVlIGNhdGVnb3JpZXNcbiAgLy8gICBhcHBzQXJyYXkuZm9yRWFjaChhcHAgPT4ge1xuICAvLyAgICAgYXBwc0R5bmFtaWNDYXRlZ29yaWVzLnB1c2goYXBwLmNhdGVnb3J5KTtcbiAgLy8gICB9KTtcbiAgLy8gICBhcHBzRHluYW1pY0NhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gIC8vICAgICBpZiAoIWluY2x1ZGVzKGNhdGVnb3J5TGlzdCwgY2F0ZWdvcnkpKSB7XG4gIC8vICAgICAgIGNhdGVnb3J5TGlzdC5wdXNoKGNhdGVnb3J5KTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gICAvLyBIYW5kbGluZyBGaWx0ZXJzXG4gIC8vICAgY29uc3QgYWxsQXBwc0FycmF5ID0gYXBwc0FycmF5O1xuICAvLyAgIGNvbnN0IGZpbHRlclZhbHVlID0gc3RvcmUuZ2V0U3RhdGUoKS5sYXVuY2hlci5maWx0ZXI7XG4gIC8vICAgaWYgKGZpbHRlclZhbHVlICYmIGZpbHRlclZhbHVlICE9PSAnbm9uZScpIHtcbiAgLy8gICAgIGFwcHNBcnJheSA9IGZpbHRlcihhcHBzQXJyYXksIHsgY2F0ZWdvcnk6IGZpbHRlclZhbHVlIH0pO1xuICAvLyAgIH1cbiAgLy8gICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgIGFwcHM6IGFwcHNBcnJheSxcbiAgLy8gICAgIGFsbEFwcHM6IGFsbEFwcHNBcnJheSxcbiAgLy8gICAgIGNhdGVnb3JpZXM6IGNhdGVnb3J5TGlzdCxcbiAgLy8gICAgIGZpbHRlcjogZmlsdGVyVmFsdWUgfHwgJ05vbmUnLFxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gaGFuZGxlU2VhcmNoKGV2ZW50KSB7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFF1ZXJ5OiBsb3dlckNhc2UoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KTtcbiAgLy8gICBzdG9yZS5kaXNwYXRjaChzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gIC8vIH1cblxuICAvLyBoYW5kbGVWaWV3QXNHcmlkKCkge1xuICAvLyAgIGNvbnN0IHsgdmlld0FzR3JpZCwgdmlld0FzTGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgLy8gICBpZiAoIXZpZXdBc0dyaWQpIHtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gIC8vICAgICAgIHZpZXdBc0dyaWQ6ICFwcmV2U3RhdGUudmlld0FzR3JpZCxcbiAgLy8gICAgICAgdmlld0FzTGlzdDogIXByZXZTdGF0ZS52aWV3QXNMaXN0LFxuICAvLyAgICAgfSkpO1xuICAvLyAgICAgc3RvcmUuZGlzcGF0Y2goc2V0Vmlld0FzKCF2aWV3QXNHcmlkLCAhdmlld0FzTGlzdCkpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIGhhbmRsZVZpZXdBc0xpc3QoKSB7XG4gIC8vICAgY29uc3QgeyB2aWV3QXNMaXN0LCB2aWV3QXNHcmlkIH0gPSB0aGlzLnN0YXRlO1xuICAvLyAgIGlmICghdmlld0FzTGlzdCkge1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgLy8gICAgICAgdmlld0FzTGlzdDogIXByZXZTdGF0ZS52aWV3QXNMaXN0LFxuICAvLyAgICAgICB2aWV3QXNHcmlkOiAhcHJldlN0YXRlLnZpZXdBc0dyaWQsXG4gIC8vICAgICB9KSk7XG4gIC8vICAgICBzdG9yZS5kaXNwYXRjaChzZXRWaWV3QXMoIXZpZXdBc0dyaWQsICF2aWV3QXNMaXN0KSk7XG4gIC8vICAgfVxuICAvLyAgIC8vIHN0b3JlLmRpc3BhdGNoKHNvY2tldENvbm5lY3RlZCgpKTtcbiAgLy8gICAvLyB0aGlzLnByb3BzLnNob3dMb2FkaW5nKCk7XG4gIC8vICAgLy8gY29uc29sZS5sb2coJ1Byb3BzIGluIGluZGV4IHBhZ2UgaXMgOiAnLCB0aGlzLnByb3BzKTtcbiAgLy8gfVxuXG4gIC8vIGhhbmRsZUZpbHRlcih2YWx1ZSkge1xuICAvLyAgIGNvbnN0IHsgYWxsQXBwcyB9ID0gdGhpcy5zdGF0ZTtcbiAgLy8gICBpZiAodmFsdWUgPT09ICdub25lJykge1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGFwcHM6IGFsbEFwcHMgfSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGNvbnN0IGFwcHNBcnJheSA9IGZpbHRlcihhbGxBcHBzLCB7IGNhdGVnb3J5OiB2YWx1ZSB9KTtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBzOiBhcHBzQXJyYXkgfSk7XG4gIC8vICAgfVxuICAvLyAgIHN0b3JlLmRpc3BhdGNoKHNldEZpbHRlcih2YWx1ZSkpO1xuICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXI6IHZhbHVlIH0pO1xuICAvLyB9XG5cbiAgcHJpbnRJY29ucygpIHtcbiAgICBjb25zdCB7IGFwcHMsIHNlYXJjaFF1ZXJ5LCB2aWV3QXNMaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFwcHNBcnJheSA9IFtdO1xuICAgIGlmIChzZWFyY2hRdWVyeS5sZW5ndGggIT09IDApIHtcbiAgICAgIGFwcHMuZm9yRWFjaChhcHAgPT4ge1xuICAgICAgICBpZiAoaW5jbHVkZXMobG93ZXJDYXNlKGFwcC5uYW1lKSwgc2VhcmNoUXVlcnkpKSB7XG4gICAgICAgICAgYXBwc0FycmF5LnB1c2goYXBwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcHMuZm9yRWFjaChhcHAgPT4gYXBwc0FycmF5LnB1c2goYXBwKSk7XG4gICAgfVxuICAgIGlmICh2aWV3QXNMaXN0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhcHAtZHJhd2VyLWljb25zLXJvd1wiPlxuICAgICAgICAgIHt0aGlzLnByaW50TGlzdFZpZXcoYXBwc0FycmF5KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYXBwLWRyYXdlci1pY29ucy1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgb2Zmc2V0LWxnLTFcIj5cbiAgICAgICAgICB7dGhpcy5wcmludEdyaWRWaWV3KGFwcHNBcnJheSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHByaW50TGlzdFZpZXcoYXBwc0FycmF5KSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWRBcnJheSA9IGZpbHRlcihhcHBzQXJyYXksIHsgY2F0ZWdvcnkgfSk7XG4gICAgICBpZiAoZmlsdGVyZWRBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBvZmZzZXQtbGctMVwiIGtleT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPjxzdHJvbmc+e2NhcGl0YWxpemVGaXJzdExldHRlcihjYXRlZ29yeSl9PC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMucHJpbnRHcmlkVmlldyhmaWx0ZXJlZEFycmF5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBwcmludEdyaWRWaWV3KGFwcHNBcnJheSkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gMTAwMDsvLyBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHJldHVybiBhcHBzQXJyYXkubWFwKGFwcCA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1kcmF3ZXItaWNvblwiIGtleT17YXBwLm5hbWV9PlxuICAgICAgICAgIDxMaW5rIHRvPXtgYXBwLyR7YXBwLnJvdXRlcy5wYXRofWB9ID5cbiAgICAgICAgICAgIDxJY29uQ29tcG9uZW50XG4gICAgICAgICAgICAgIG5hbWU9e2FwcC5pY29ucy5uYW1lfVxuICAgICAgICAgICAgICBzaGFkb3c9eycyMHB4J31cbiAgICAgICAgICAgICAgdGV4dD17YXBwLm5hbWV9IHRleHRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9ycz17YXBwLmljb25zLmJhY2tncm91bmRDb2xvcnN9XG4gICAgICAgICAgICAgIHBuZz17YXBwLnBuZ31cbiAgICAgICAgICAgICAgc2l6ZT17d2luZG93V2lkdGggPCA1MDAgPyAnMTAwcHgnIDogJzEyMHB4J31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2aWV3QXNHcmlkLCB2aWV3QXNMaXN0LCBmaWx0ZXIsIHNlYXJjaFF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0xMDAwOy8vIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7O1xuICAgIGNvbnN0IHZpZXdBc1N0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjIpJyxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvQXBwRHJhd2VyLmNzc1wiIC8+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2JsdWVyYWluLWJvb3RzdHJhcC10aGVtZS5jc3NcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdG9wLWJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLWxnLTUgb2Zmc2V0LWxnLTEgY29sLXhzLSR7d2luZG93V2lkdGggPCA1MDAgPyAnMTInIDogJzYnfSBjb2wtc20tNiB0b3AtYmFyLWZpbHRlcnNgfT5cbiAgICAgICAgICAgIFZpZXcgQXM6Jm5ic3A7XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInZpZXctYXNcIiBzdHlsZT17dmlld0FzTGlzdCA/IHZpZXdBc1N0eWxlIDogbnVsbH0gb25DbGljaz17dGhpcy5oYW5kbGVWaWV3QXNMaXN0fT5MaXN0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInZpZXctYXNcIiBzdHlsZT17dmlld0FzR3JpZCA/IHZpZXdBc1N0eWxlIDogbnVsbH0gb25DbGljaz17dGhpcy5oYW5kbGVWaWV3QXNHcmlkfT5HcmlkPC9idXR0b24+ICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICA8c3Bhbj5GaWx0ZXJzOiAmbmJzcDt7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGZpbHRlcil9PC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRmlsdGVyKCdub25lJyl9Pk5vbmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRmlsdGVyKCdhc3NldHMnKX0+QXNzZXRzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUZpbHRlcignYW5hbHl0aWNzJyl9PkFuYWx5dGljczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVGaWx0ZXIoJ2NvbmZpZ3VyYXRpb24nKX0+Q29uZmlndXJhdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVGaWx0ZXIoJ2FwcHMnKX0+QXBwczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVGaWx0ZXIoJ2F1dG9tYXRpb24nKX0+QXV0b21hdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLWxnLTMgb2Zmc2V0LWxnLTEgY29sLXhzLSR7d2luZG93V2lkdGggPCA1MDAgPyAnMTInIDogJzYnfSBjb2wtc20tNWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgc2VhcmNoXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaH0gdmFsdWU9e3NlYXJjaFF1ZXJ5IHx8ICcnfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlLi4uXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIC8vdGhpcy5wcmludEljb25zKClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5BcHBEcmF3ZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQXBwRHJhd2VyLmRlZmF1dFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBEcmF3ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FwcERyYXdlci9BcHBEcmF3ZXIuY29tcG9uZW50LmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuLy8gaW1wb3J0IHsgSWNvbiB9IGZyb20gJ3JlYWN0LWZhJztcbmltcG9ydCB7IERyb3Bkb3duLCBEcm9wZG93blRvZ2dsZSwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW0gfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSAncmVhY3QtdG9vbHRpcCc7XG5pbXBvcnQgeyB3aXRoU29ja2V0IH0gZnJvbSAnYmx1ZXJhaW4tY2xpZW50LXNlcnZpY2VzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBsaW5rVG9Vc2VyUHJvZmlsZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBsaW5rVG9Vc2VyUHJvZmlsZTogJy91c2VyJ1xufTtcblxubGV0IGltZ1NyYztcblxuY2xhc3MgU3lzdGVtTmF2Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJvcGRvd25PcGVuOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBnZXREcm9wRG93bk1lbnUoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5zZXNzaW9uVG9rZW4pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxEcm9wZG93biB0YWc9XCJsaVwiIGlzT3Blbj17dGhpcy5zdGF0ZS5kcm9wZG93bk9wZW59IHRvZ2dsZT17dGhpcy50b2dnbGV9IGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3B1cCBzeXN0ZW0tZHJvcGRvd25cIj5cbiAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgdGFnPVwiYVwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaWQ9XCJzdXBwb3J0ZWRDb250ZW50RHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWl0ZW0taWNvblwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nU3JjfSBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtaXRlbS10ZXh0XCI+XG4gICAgICAgICAgICAgIEFiZHVsIFJlaG1hblxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG4gICAgICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9XCJzeXN0ZW0tZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cInN1cHBvcnRlZENvbnRlbnREcm9wZG93blwiPlxuICAgICAgICAgICAgey8qIDxEcm9wZG93bkl0ZW0gdGFnPVwiYVwiIGhyZWY9XCIjXCI+TXkgcHJvZmlsZTwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCIgLz4qL31cbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gdGFnPVwiYVwiIGhyZWY9XCIvbG9nb3V0XCI+TG9nIG91dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICA8aW1nIHNyYz17aW1nU3JjfSBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRyb3Bkb3duT3BlbjogIXRoaXMuc3RhdGUuZHJvcGRvd25PcGVuXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVySXRlbShpdGVtKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17aXRlbS5zbHVnfSBkYXRhLXRpcD17aXRlbS50aXRsZX0gZGF0YS1mb3I9XCJzeXN0ZW0tbmF2XCIgPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHRvPXtpdGVtLnRvfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtaXRlbS1pY29uXCI+XG4gICAgICAgICAgICB7Lyo8SWNvbiBuYW1lPXtpdGVtLmljb259IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+Ki99XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1pdGVtLXRleHRcIj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuLXNtLXVwXCI+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCB7IGxpbmtUb1VzZXJQcm9maWxlLCBpdGVtcywgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UucHJvZmlsZVBpY3R1cmUpIHtcbiAgICAgIGltZ1NyYyA9IGxvY2FsU3RvcmFnZS5wcm9maWxlUGljdHVyZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1nU3JjID0gJ2h0dHBzOi8vcGluZ2VuZG8uZ2l0aHViLmlvL3BpbmdlbmRvLWJvb3RzdHJhcC9hc3NldHMvdXNlcl9wbGFjZWhvbGRlci5wbmcnO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzeXN0ZW0tbmF2XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1mdWxsIG5hdmJhci1kYXJrIG9ubHktaWNvbnMgc3lzdGVtLWRyYXdlclwiPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIHRvPVwiL1wiID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV2cmlzLWxvZ29cIj5NZXZyaXM8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhciBuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgdG89XCIvYXBwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWl0ZW0taWNvblwiPlxuICAgICAgICAgICAgICAgICAgey8qPEljb24gbmFtZT1cInJvY2tldFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+Ki99XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1pdGVtLXRleHRcIj5MYXVuY2hlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXNlcGFyYXRvclwiIC8+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhciBuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpdGVtcy5tYXAoU3lzdGVtTmF2Q29tcG9uZW50LnJlbmRlckl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXNwYWNlclwiIC8+XG5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtcGx1Z1wiIC8+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BzdGF0dXMtaWNvbiBmYSBmYS1jaXJjbGUgdGV4dC0ke3RoaXMucHJvcHMuaXNDb25uZWN0ZWQgPyAnc3VjY2VzcycgOiAnZGFuZ2VyJyB9YH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAge3RoaXMuZ2V0RHJvcERvd25NZW51KCl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxSZWFjdFRvb2x0aXAgaWQ9XCJzeXN0ZW0tbmF2XCIgcGxhY2U9XCJsZWZ0XCIgZWZmZWN0PVwic29saWRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TeXN0ZW1OYXZDb21wb25lbnQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuU3lzdGVtTmF2Q29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNvY2tldChTeXN0ZW1OYXZDb21wb25lbnQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TeXN0ZW1OYXYvU3lzdGVtTmF2LmNvbXBvbmVudC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICdyZWFjdC1zaWRlYmFyJztcblxuaW1wb3J0IFN5c3RlbU5hdkNvbXBvbmVudCBmcm9tICcuL1N5c3RlbU5hdi5jb21wb25lbnQnO1xuaW1wb3J0IGFwcHMgZnJvbSAnLi4vLi4vc2VydmVyL2FwcExvYWRlcic7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICBdKSxcbiAgc3lzdGVtTmF2OiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFjdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc3RhdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3lzdGVtTmF2IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLm9uU2V0b3BlbiA9IHRoaXMub25TZXRvcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tZWRpYVF1ZXJ5Q2hhbmdlZCA9IHRoaXMubWVkaWFRdWVyeUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogODAwcHgpJyk7XG4gICAgbXFsLmFkZExpc3RlbmVyKHRoaXMubWVkaWFRdWVyeUNoYW5nZWQpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1xbCB9KTtcbiAgICBjb25zdCBkb2NrZWQgPSBtcWwubWF0Y2hlcztcbiAgICBjb25zdCB7IGRvY2ssIHVuZG9jayB9ID0gdGhpcy5wcm9wcy5zeXN0ZW1OYXYuYWN0aW9ucztcblxuICAgIGlmIChkb2NrZWQpIHtcbiAgICAgIGRvY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5kb2NrKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zdGF0ZS5tcWwucmVtb3ZlTGlzdGVuZXIodGhpcy5tZWRpYVF1ZXJ5Q2hhbmdlZC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG9uU2V0b3Blbihpc09wZW4pIHtcbiAgICBjb25zdCB7IG9wZW4sIGNsb3NlIH0gPSB0aGlzLnByb3BzLnN5c3RlbU5hdi5hY3Rpb25zO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgb3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1lZGlhUXVlcnlDaGFuZ2VkKCkge1xuICAgIGNvbnN0IGRvY2tlZCA9IHRoaXMuc3RhdGUubXFsLm1hdGNoZXM7XG4gICAgY29uc3QgeyBkb2NrLCB1bmRvY2sgfSA9IHRoaXMucHJvcHMuc3lzdGVtTmF2LmFjdGlvbnM7XG5cbiAgICBpZiAoZG9ja2VkKSB7XG4gICAgICBkb2NrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuZG9jaygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4sIGRvY2tlZCB9ID0gdGhpcy5wcm9wcy5zeXN0ZW1OYXYuc3RhdGU7XG5cbiAgICBjb25zdCBzaWRlYmFySXRlbXMgPSBhcHBzLm1hcCgoYXBwKSA9PiB7XG5cbiAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgIHRpdGxlOiBhcHAubmFtZSxcbiAgICAgICAgc2x1ZzogYXBwLnNsdWcsXG4gICAgICAgIHRvOiBhcHAuZ2V0Um9vdFBhdGgoKVxuICAgICAgfTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgaXRlbS5pY29uID0gYXBwLmljb25zLnRhc2tiYXIudmFsdWU7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpdGVtLmljb24gPSAnd2luZG93LW1heGltaXplJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgc2lkZWJhcjoge1xuICAgICAgICBvdmVyZmxvdzogJ3Zpc2libGUnXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNpZGViYXJDb250ZW50ID0gPFN5c3RlbU5hdkNvbXBvbmVudCBpdGVtcz17c2lkZWJhckl0ZW1zfSBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fSAvPjtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2lkZWJhclxuICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgc2lkZWJhcj17c2lkZWJhckNvbnRlbnR9XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIGRvY2tlZD17ZG9ja2VkfVxuICAgICAgICBzaGFkb3c9eyFkb2NrZWQgJiYgb3Blbn1cbiAgICAgICAgb25TZXRPcGVuPXt0aGlzLm9uU2V0b3Blbn1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1NpZGViYXI+XG4gICAgKTtcbiAgfVxufVxuXG5TeXN0ZW1OYXYucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TeXN0ZW1OYXYvU3lzdGVtTmF2LmNvbnRhaW5lci5qcyIsImltcG9ydCB7IHdpdGhTeXN0ZW1OYXYgfSBmcm9tICdibHVlcmFpbi1jbGllbnQtc2VydmljZXMnO1xuaW1wb3J0IFN5c3RlbU5hdiBmcm9tICcuL1N5c3RlbU5hdi5jb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3lzdGVtTmF2KFN5c3RlbU5hdik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1N5c3RlbU5hdi9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zLCB3aXRoU3lzdGVtTmF2LCBGbGFzaEJhbm5lciwgTG9hZGluZ0JhciB9IGZyb20gJ2JsdWVyYWluLWNsaWVudC1zZXJ2aWNlcyc7XG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vbGliL3dpdGhEYXRhJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4Jztcbi8vaW1wb3J0ICcuL3N5c3RlbS5jc3MnO1xuLy9pbXBvcnQgJ2JsdWVyYWluLWJvb3RzdHJhcC10aGVtZS9kaXN0L2Nzcy9sYXlvdXRzL3N5c3RlbS1sYXlvdXQuY3NzJztcbmltcG9ydCBTeXN0ZW1OYXYgZnJvbSAnLi4vY29tcG9uZW50cy9TeXN0ZW1OYXYnO1xuXG5cbmNvbnN0IGxvYWRpbmdCYXJTdHlsZSA9IHtcbiAgekluZGV4OiAnOTk5OTk5OTk5JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI0IxMTQ5MicsIC8vIGxpZ2h0XG4gIC8vIGJhY2tncm91bmRDb2xvcjogJyM4QzAwNkUnLCAvLyBkYXJrXG59O1xuXG4gY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gY29uc29sZS5sb2coJ1N5c3RlbSBMYXlvdXQgOjogUHJvcHMgOjogJywgcHJvcHMpO1xuICAgIC8vIFNldCB0aGUgc3RhdGUgb2YgdGhlIGZsYXNoIGJhbm5lciBwYXNzZWQgYnkgc3RvcmVcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvdzogcHJvcHMuc2hvd0ZsYXNoQmFubmVyLFxuICAgIH1cbiAgfVxuICAvLyBJZiBhbnkgY2hhbmdlIG1hZGUgdG8gZmxhc2ggYmFubmVyLCBJdCB3aWxsIGNoYW5nZSB0aGUgc3RhdGUgb2YgdGhlIGZsYXNoIGJhbm5lclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvdzogbmV4dFByb3BzLnNob3dGbGFzaEJhbm5lclxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2hvdyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIC8vIGNvbnN0IGRpc2FibGVTeXN0ZW1OYXYgPSB0aGlzLnByb3BzLnN5c3RlbU5hdi5zdGF0ZS5kaXNhYmxlZDtcbiAgICAvL2NvbnN0IGxvY2F0aW9uID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZTtcblxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9sYXlvdXRzL3N5c3RlbS1sYXlvdXQuY3NzXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzeXN0ZW0tbGF5b3V0XCI+XG4gICAgICAgICAgPExvYWRpbmdCYXIgc3R5bGU9e2xvYWRpbmdCYXJTdHlsZX0gc2hvd0Zhc3RBY3Rpb25zIHByb2dyZXNzSW5jcmVhc2U9ezN9IC8+XG4gICAgICAgICAgPE5vdGlmaWNhdGlvbnMgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN5c3RlbS1ib2R5XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgc2hvd05hdjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dGbGFzaEJhbm5lcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dBcHBCYXI6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5MYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuICBzaG93TmF2OiB0cnVlLFxuICBzaG93Rmxhc2hCYW5uZXI6IGZhbHNlLFxuICBzaG93QXBwQmFyOiBmYWxzZSxcbn07XG4gZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG4vLyBtYWtlIGEgY29ubmVjdGlvbiBvZiB5b3VyIGNvbXBvbmVudCB3aXRoIHRoZSBzdG9yZVxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgc2hvd0ZsYXNoQmFubmVyOiBzdGF0ZS5mbGFzaEJhbm5lci5zaG93XG4vLyAgIH07XG4vLyB9O1xuLy8gY29uc3QgRmlsdGVyTGF5b3V0ID0gY29ubmVjdChcbi8vICAgbWFwU3RhdGVUb1Byb3BzLFxuLy8gKShMYXlvdXQpO1xuXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoRGF0YSh3aXRoU3lzdGVtTmF2KEZpbHRlckxheW91dCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGF5b3V0cy9MYXlvdXQuanMiLCIvLyBpbXBvcnQgeyBBcG9sbG9DbGllbnQsIGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgQXBvbGxvQ2xpZW50LCB7IGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdhcG9sbG8tY2xpZW50Jztcbi8vaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmxldCBhcG9sbG9DbGllbnQgPSBudWxsXG5cbi8vIFBvbHlmaWxsIGZldGNoKCkgb24gdGhlIHNlcnZlciAodXNlZCBieSBhcG9sbG8tY2xpZW50KVxuLy8gaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbi8vICAgLy8vL2dsb2JhbC5mZXRjaCA9IGZldGNoXG4vLyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZSAoKSB7XG4gIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBjcmVhdGVOZXR3b3JrSW50ZXJmYWNlKHtcbiAgICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvZ3JhcGhxbCcsXG4gICAgb3B0czoge1xuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9XG4gIH0pXG4gIG5ldHdvcmtJbnRlcmZhY2UudXNlKFt7XG4gICAgYXBwbHlNaWRkbGV3YXJlKHJlcSwgbmV4dCkge1xuICAgICAgaWYgKCFyZXEub3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHJlcS5vcHRpb25zLmhlYWRlcnMgPSB7fTsgIC8vIENyZWF0ZSB0aGUgaGVhZGVyIG9iamVjdCBpZiBuZWVkZWQuXG4gICAgICB9XG4gICAgICAvLyBnZXQgdGhlIGF1dGhlbnRpY2F0aW9uIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZSBpZiBpdCBleGlzdHNcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb25Ub2tlbicpO1xuICAgICAgcmVxLm9wdGlvbnMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gdG9rZW4gPyBgJHt0b2tlbn1gIDogbnVsbDtcbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIC8vc3NyTW9kZTogIXByb2Nlc3MuYnJvd3NlciwgLy8gRGlzYWJsZXMgZm9yY2VGZXRjaCBvbiB0aGUgc2VydmVyIChzbyBxdWVyaWVzIGFyZSBvbmx5IHJ1biBvbmNlKVxuICAgIG5ldHdvcmtJbnRlcmZhY2VcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEFwb2xsbyAoKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgY2xpZW50IGZvciBldmVyeSBzZXJ2ZXItc2lkZSByZXF1ZXN0IHNvIHRoYXQgZGF0YVxuICAvLyBpc24ndCBzaGFyZWQgYmV0d2VlbiBjb25uZWN0aW9ucyAod2hpY2ggd291bGQgYmUgYmFkKVxuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBjcmVhdGUoKVxuICB9XG5cbiAgLy8gUmV1c2UgY2xpZW50IG9uIHRoZSBjbGllbnQtc2lkZVxuICBpZiAoIWFwb2xsb0NsaWVudCkge1xuICAgIGFwb2xsb0NsaWVudCA9IGNyZWF0ZSgpXG4gIH1cblxuICByZXR1cm4gYXBvbGxvQ2xpZW50XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5pdEFwb2xsby5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByZWR1Y2VycywgZmxhc2hCYW5uZXJSZWR1Y2VycywgbG9hZGluZ0JhclJlZHVjZXIgfSBmcm9tICdibHVlcmFpbi1jbGllbnQtc2VydmljZXMnO1xuaW1wb3J0IEFwcEJhclJlZHVjZXJlcyBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9BcHBCYXInO1xuXG4vLyBJbXBvcnRpbmcgcmVkdWNlcnNcbmltcG9ydCBsYXVuY2hlclJlZHVjZXJzIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2xhdW5jaGVyJztcblxuXG5sZXQgcmVkdXhTdG9yZSA9IG51bGxcblxuLy8gR2V0IHRoZSBSZWR1eCBEZXZUb29scyBleHRlbnNpb24gYW5kIGZhbGxiYWNrIHRvIGEgbm8tb3AgZnVuY3Rpb25cbmxldCBkZXZ0b29scyA9IGYgPT4gZlxuaWYgKHByb2Nlc3MuYnJvd3NlciAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXykge1xuICBkZXZ0b29scyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKClcbn1cblxuZnVuY3Rpb24gY3JlYXRlIChhcG9sbG8sIGluaXRpYWxTdGF0ZSA9IHt9KSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICBjb21iaW5lUmVkdWNlcnMoeyAvLyBTZXR1cCByZWR1Y2Vyc1xuICAgICAgZmxhc2hCYW5uZXI6IGZsYXNoQmFubmVyUmVkdWNlcnMsXG4gICAgbG9hZGluZ0JhcjogbG9hZGluZ0JhclJlZHVjZXIsXG4gICAgbGF1bmNoZXI6IGxhdW5jaGVyUmVkdWNlcnMsXG4gICAgYmx1ZXJhaW46IHJlZHVjZXJzLFxuICAgIGFwcEJhcjogQXBwQmFyUmVkdWNlcmVzLFxuICAgIFxuICAgICAgYXBvbGxvOiBhcG9sbG8ucmVkdWNlcigpXG4gICAgfSksXG4gICAgaW5pdGlhbFN0YXRlLCAvLyBIeWRyYXRlIHRoZSBzdG9yZSB3aXRoIHNlcnZlci1zaWRlIGRhdGFcbiAgICBjb21wb3NlKFxuICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcbiAgICAgIGFwcGx5TWlkZGxld2FyZShhcG9sbG8ubWlkZGxld2FyZSgpKSwgLy8gQWRkIGFkZGl0aW9uYWwgbWlkZGxld2FyZSBoZXJlXG4gICAgICBkZXZ0b29sc1xuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0UmVkdXggKGFwb2xsbywgaW5pdGlhbFN0YXRlKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgc3RvcmUgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShhcG9sbG8sIGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIC8vIFJldXNlIHN0b3JlIG9uIHRoZSBjbGllbnQtc2lkZVxuICBpZiAoIXJlZHV4U3RvcmUpIHtcbiAgICByZWR1eFN0b3JlID0gY3JlYXRlKGFwb2xsbywgaW5pdGlhbFN0YXRlKVxuICB9XG5cbiAgcmV0dXJuIHJlZHV4U3RvcmVcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbml0UmVkdXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciwgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGluaXRBcG9sbG8gZnJvbSAnLi9pbml0QXBvbGxvJ1xuaW1wb3J0IGluaXRSZWR1eCBmcm9tICcuL2luaXRSZWR1eCdcblxuLy8gR2V0cyB0aGUgZGlzcGxheSBuYW1lIG9mIGEgSlNYIGNvbXBvbmVudCBmb3IgZGV2IHRvb2xzXG5mdW5jdGlvbiBnZXRDb21wb25lbnREaXNwbGF5TmFtZSAoQ29tcG9uZW50KSB7XG4gIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvc2VkQ29tcG9uZW50ID0+IHtcbiAgcmV0dXJuIGNsYXNzIFdpdGhEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBgV2l0aERhdGEoJHtnZXRDb21wb25lbnREaXNwbGF5TmFtZShDb21wb3NlZENvbXBvbmVudCl9KWBcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgc2VydmVyU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKGN0eCkge1xuICAgICAgbGV0IHNlcnZlclN0YXRlID0ge31cblxuICAgICAgLy8gRXZhbHVhdGUgdGhlIGNvbXBvc2VkIGNvbXBvbmVudCdzIGdldEluaXRpYWxQcm9wcygpXG4gICAgICBsZXQgY29tcG9zZWRJbml0aWFsUHJvcHMgPSB7fVxuICAgICAgaWYgKENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBjb21wb3NlZEluaXRpYWxQcm9wcyA9IGF3YWl0IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gICAgICB9XG5cbiAgICAgIC8vIFJ1biBhbGwgR3JhcGhRTCBxdWVyaWVzIGluIHRoZSBjb21wb25lbnQgdHJlZVxuICAgICAgLy8gYW5kIGV4dHJhY3QgdGhlIHJlc3VsdGluZyBkYXRhXG4gICAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gIXByb2Nlc3MuYnJvd3NlcicpO1xuICAgICAgICBjb25zdCBhcG9sbG8gPSBpbml0QXBvbGxvKClcbiAgICAgICAgY29uc3QgcmVkdXggPSBpbml0UmVkdXgoYXBvbGxvKVxuICAgICAgICAvLyBQcm92aWRlIHRoZSBgdXJsYCBwcm9wIGRhdGEgaW4gY2FzZSBhIEdyYXBoUUwgcXVlcnkgdXNlcyBpdFxuICAgICAgICBjb25zdCB1cmwgPSB7cXVlcnk6IGN0eC5xdWVyeSwgcGF0aG5hbWU6IGN0eC5wYXRobmFtZX1cblxuICAgICAgICAvKnRyeSB7XG4gICAgICAgICAgLy8gUnVuIGFsbCBHcmFwaFFMIHF1ZXJpZXNcbiAgICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoXG4gICAgICAgICAgICAvLyBObyBuZWVkIHRvIHVzZSB0aGUgUmVkdXggUHJvdmlkZXJcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgQXBvbGxvIHNldHMgdXAgdGhlIHN0b3JlIGZvciB1c1xuICAgICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfSBzdG9yZT17cmVkdXh9PlxuICAgICAgICAgICAgICA8Q29tcG9zZWRDb21wb25lbnQgdXJsPXt1cmx9IHsuLi5jb21wb3NlZEluaXRpYWxQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIFByZXZlbnQgQXBvbGxvIENsaWVudCBHcmFwaFFMIGVycm9ycyBmcm9tIGNyYXNoaW5nIFNTUi5cbiAgICAgICAgICAvLyBIYW5kbGUgdGhlbSBpbiBjb21wb25lbnRzIHZpYSB0aGUgZGF0YS5lcnJvciBwcm9wOlxuICAgICAgICAgIC8vIGh0dHA6Ly9kZXYuYXBvbGxvZGF0YS5jb20vcmVhY3QvYXBpLXF1ZXJpZXMuaHRtbCNncmFwaHFsLXF1ZXJ5LWRhdGEtZXJyb3JcbiAgICAgICAgfSovXG5cbiAgICAgICAgLy8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIHN0b3JlXG4gICAgICAgIGNvbnN0IHN0YXRlID0gcmVkdXguZ2V0U3RhdGUoKVxuXG4gICAgICAgIC8vIE5vIG5lZWQgdG8gaW5jbHVkZSBvdGhlciBpbml0aWFsIFJlZHV4IHN0YXRlIGJlY2F1c2Ugd2hlbiBpdFxuICAgICAgICAvLyBpbml0aWFsaXNlcyBvbiB0aGUgY2xpZW50LXNpZGUgaXQnbGwgY3JlYXRlIGl0IGFnYWluIGFueXdheVxuICAgICAgICBzZXJ2ZXJTdGF0ZSA9IHtcbiAgICAgICAgICBhcG9sbG86IHsgLy8gT25seSBpbmNsdWRlIHRoZSBBcG9sbG8gZGF0YSBzdGF0ZVxuICAgICAgICAgICAgZGF0YTogc3RhdGUuYXBvbGxvLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VydmVyU3RhdGUsXG4gICAgICAgIC4uLmNvbXBvc2VkSW5pdGlhbFByb3BzXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMuYXBvbGxvID0gaW5pdEFwb2xsbygpXG4gICAgICB0aGlzLnJlZHV4ID0gaW5pdFJlZHV4KHRoaXMuYXBvbGxvLCB0aGlzLnByb3BzLnNlcnZlclN0YXRlKVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAvLyBObyBuZWVkIHRvIHVzZSB0aGUgUmVkdXggUHJvdmlkZXJcbiAgICAgICAgLy8gYmVjYXVzZSBBcG9sbG8gc2V0cyB1cCB0aGUgc3RvcmUgZm9yIHVzXG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e3RoaXMuYXBvbGxvfSBzdG9yZT17dGhpcy5yZWR1eH0+XG4gICAgICAgICAgPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3dpdGhEYXRhLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEhhcmlzIG9uIDMvMzEvMTcuXG4gKi9cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzaG93OiBudWxsLFxufTtcblxuY29uc3QgQXBwQmFyUmVkdWNlcmVzID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0hPV19BUFBfQkFSJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaG93OiBhY3Rpb24uc2hvd1xuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9yZWR1Y2Vycy9BcHBCYXIuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGZpbHRlcjogbnVsbCxcbiAgc2VhcmNoUXVlcnk6ICcnLFxuICB2aWV3OiB7XG4gICAgdmlld0FzR3JpZDogdHJ1ZSxcbiAgICB2aWV3QXNMaXN0OiBmYWxzZSxcbiAgfVxufTtcblxuY29uc3QgbGF1bmNoZXJSZWR1Y2VycyA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NFVF9WSUVXX0FTJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aWV3OiB7XG4gICAgICAgICAgdmlld0FzR3JpZDogYWN0aW9uLnZpZXdBc0dyaWQsXG4gICAgICAgICAgdmlld0FzTGlzdDogYWN0aW9uLnZpZXdBc0xpc3QsXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICBjYXNlICdTRVRfRklMVEVSJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXI6IGFjdGlvbi5maWx0ZXJcbiAgICAgIH07XG5cbiAgICBjYXNlICdTRVRfU0VBUkNIX1FVRVJZJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWFyY2hRdWVyeTogYWN0aW9uLnNlYXJjaFF1ZXJ5XG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGF1bmNoZXJSZWR1Y2VycztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHV4L3JlZHVjZXJzL2xhdW5jaGVyLmpzIiwiXG4vLyBjb25zdCByZWdleCA9IC9ibHVlcmFpbi1hcHBcXC1cXHcrXFwvcGFja2FnZVxcLmpzb24kLztcbi8vIGNvbnN0IHJlZ2V4ID0gL2JsdWVyYWluLWFwcFxcLVxcdytcXC9saWJcXC8oaW5kZXhcXC5qcykkLztcbi8vIGNvbnN0IHJlZ2V4ID0gL2JsdWVyYWluLWFwcC1cXHcrXFwvbGliXFwvaW5kZXguanMvO1xuLy8gY29uc3QgcmVxID0gcmVxdWlyZS5jb250ZXh0KCcuLi8uLi9ub2RlX21vZHVsZXMnLCB0cnVlLCByZWdleCk7XG5cbi8vIGNvbnNvbGUubG9nKCdmb3VuZCBhcHBzJywgcmVxLmtleXMoKSk7XG5cbi8vIGxldCBkZXZpY2VFeHBsb3JhciA9IHJlcXVpcmUoJ2JsdWVyYWluLWFwcC1kZXZpY2UtZXhwbG9yZXInKTtcbi8vIGxldCBoZWxsb1dvcmxkQXBwID0gcmVxdWlyZSgnYmx1ZXJhaW4tYXBwLWhlbGxvLXdvcmxkJyk7XG4vLyBsZXQgZmxvd0FwcCA9IHJlcXVpcmUoJ2JsdWVyYWluLWFwcC1mbG93cycpO1xuXG4vLyBpZiAoZGV2aWNlRXhwbG9yYXIuZGVmYXVsdCkge1xuLy8gICBkZXZpY2VFeHBsb3JhciA9IGRldmljZUV4cGxvcmFyLmRlZmF1bHQ7XG4vLyB9XG4vLyBpZiAoaGVsbG9Xb3JsZEFwcC5kZWZhdWx0KSB7XG4vLyAgIGhlbGxvV29ybGRBcHAgPSBoZWxsb1dvcmxkQXBwLmRlZmF1bHQ7XG4vLyB9XG4vLyBpZiAoZmxvd0FwcC5kZWZhdWx0KSB7bnBtIFxuLy8gICBmbG93QXBwID0gZmxvd0FwcC5kZWZhdWx0O1xuLy8gfVxuXG5jb25zdCBhcHBzID0gW1xuIC8vIGRldmljZUV4cGxvcmFyLFxuICAvLyBoZWxsb1dvcmxkQXBwXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvYXBwTG9hZGVyLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFKQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFFQTtBQUhBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUlBO0FBSkE7QUFBQTtBQVhBO0FBRUE7QUFnQkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7O0FBWEE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFtQkE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU5BO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7OztBQU1BO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFOQTtBQVdBO0FBWEE7QUFDQTtBQVdBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBRkE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQVdBO0FBWEE7Ozs7OztBQTNOQTtBQUNBO0FBd09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hRQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFKQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7Ozs7O0FBT0E7QUFBQTtBQUNBO0FBQUE7Ozs7QUFrQkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUlBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBS0E7QUFMQTtBQVFBO0FBQUE7QUFHQTtBQUhBOzs7OztBQTVEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7QUExREE7QUFDQTtBQStHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQU5BO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTs7OztBQUdBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTs7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQUE7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFNQTtBQUpBO0FBREE7QUFDQTtBQUlBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQU5BO0FBUUE7QUFSQTtBQUNBOzs7OztBQTdFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBd0ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdHQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7O0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFGQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUhBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQTlCQTtBQUNBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBRUE7QUFKQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVdBO0FBQ0E7QUFFQTs7QUFJQTtBQUhBO0FBRkE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQVZBOztBQVlBO0FBRUE7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQVBBO0FBV0E7QUFLQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFEQTtBQUFBO0FBTUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFYQTtBQUNBO0FBVUE7QUFYQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWUE7QUFDQTtBQURBO0FBWkE7QUFDQTtBQWNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBTkE7QUFDQTtBQXFCQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFsQkE7QUFMQTtBQUNBO0FBeUJBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBREE7QUFBQTtBQTdDQTtBQUNBOztBQURBO0FBb0RBO0FBQ0E7QUFyREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXlEQTtBQXpEQTtBQUNBO0FBd0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUE3REE7QUFDQTs7QUFEQTtBQWdFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFHQTtBQUhBO0FBQUE7O0FBcEVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBSkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUVBOztBQVpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBRUE7QUFDQTs7QUFFQTtBQUFBO0FBREE7QUFIQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFDQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        