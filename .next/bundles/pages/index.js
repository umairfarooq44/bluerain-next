
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

var _AppDrawer = __webpack_require__(606);

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

/***/ 570:
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/umair/Projects/bluerain-next/components/AppDrawer/AppDrawer.css Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| .app-drawer-icon{\n|   float: left;\n|   margin: 16px;");

/***/ }),

/***/ 606:
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

var _Icon = __webpack_require__(572);

var _Icon2 = _interopRequireDefault(_Icon);

var _reactRouter = __webpack_require__(619);

var _includes = __webpack_require__(597);

var _includes2 = _interopRequireDefault(_includes);

var _lowerCase = __webpack_require__(599);

var _lowerCase2 = _interopRequireDefault(_lowerCase);

var _filter = __webpack_require__(596);

var _filter2 = _interopRequireDefault(_filter);

var _bluerainClientServices = __webpack_require__(571);

__webpack_require__(570);

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

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(569);


/***/ })

},[626]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2U4NWVmYmQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBEcmF3ZXIvQXBwRHJhd2VyLmNvbXBvbmVudC5qcz9lODVlZmJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgU2l0ZUdyaWRXaWRnZXQgZnJvbSAnLi4vY29tcG9uZW50cy9TaXRlL1NpdGVzR3JpZC9TaXRlc0dyaWQuY29udGFpbmVyJztcbi8vIGltcG9ydCBBYnNvbHV0ZUNlbnRlckxheW91dCBmcm9tICcuLi9sYXlvdXRzL0Fic29sdXRlQ2VudGVyTGF5b3V0JztcbmltcG9ydCBBcHBEcmF3ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBEcmF3ZXIvQXBwRHJhd2VyLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiAoe1xuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnUHJvcHMgaW4gaW5kZXggcGFnZSBpcyA6ICcsIHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiAndXJsKC9hcHAtZHJhd2VyLWJhY2tncm91bmQuanBnKSB0b3AgcmlnaHQgbm8tcmVwZWF0IGZpeGVkJyxcbiAgICAgIGhlaWdodDogJzUwMHZoJyxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtiYWNrZ3JvdW5kfSA+XG4gICAgICAgIDxBcHBEcmF3ZXIgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCIvKipcbiAqIENyZWF0ZWQgYnkgc2FhZCBiaW4gc2FlZWQgb24gMy8yLzE3LlxuICovXG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFNlYXJjaEJhckNvbXBvbmVudCBmcm9tICdibHVlcmFpbi11aS9saWIvc2VhcmNoQmFyL1NlYXJjaEJhci5jb21wb25lbnQnO1xuaW1wb3J0IEljb25Db21wb25lbnQgZnJvbSAnYmx1ZXJhaW4tdWkvbGliL0ljb24vSWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgaW5jbHVkZXMgZnJvbSAnbG9kYXNoL2luY2x1ZGVzJztcbmltcG9ydCBsb3dlckNhc2UgZnJvbSAnbG9kYXNoL2xvd2VyQ2FzZSc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2xvZGFzaC9maWx0ZXInO1xuaW1wb3J0IHsgc2hvd0ZsYXNoQmFubmVyICB9IGZyb20gJ2JsdWVyYWluLWNsaWVudC1zZXJ2aWNlcyc7XG4vLyBpbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vcmVkdXgvc3RvcmUnO1xuLy8gaW1wb3J0IGFwcHMgZnJvbSAnLi4vLi4vc2VydmVyL2FwcExvYWRlcic7XG5pbXBvcnQgJy4vQXBwRHJhd2VyLmNzcyc7XG4vLyBpbXBvcnQgeyBERVYgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJztcbi8vIHJlZHV4IHN0b3JlXG4vL2ltcG9ydCB7IHNldFZpZXdBcywgc2V0RmlsdGVyLCBzZXRTZWFyY2ggfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcblxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuY29uc3QgcHJvcFR5cGVzID0ge1xufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xufTtcblxuY2xhc3MgQXBwRHJhd2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYXBwczogW10sXG4gICAgICBhbGxBcHBzOiBbXSxcbiAgICAgIHNlYXJjaFF1ZXJ5OiBzdG9yZS5nZXRTdGF0ZSgpLmxhdW5jaGVyLnNlYXJjaFF1ZXJ5LFxuICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAvLyBmaWx0ZXI6IHN0b3JlLmdldFN0YXRlKCkubGF1bmNoZXIuZmlsdGVyID8gc3RvcmUuZ2V0U3RhdGUoKS5sYXVuY2hlci5maWx0ZXIgOiAnTm9uZScsXG4gICAgICBmaWx0ZXI6ICdOb25lJyxcbiAgICAgIHZpZXdBc0dyaWQ6IHN0b3JlLmdldFN0YXRlKCkubGF1bmNoZXIudmlldy52aWV3QXNHcmlkLFxuICAgICAgdmlld0FzTGlzdDogc3RvcmUuZ2V0U3RhdGUoKS5sYXVuY2hlci52aWV3LnZpZXdBc0xpc3QsXG4gICAgfTtcbiAgICB0aGlzLnByaW50R3JpZFZpZXcgPSB0aGlzLnByaW50R3JpZFZpZXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByaW50TGlzdFZpZXcgPSB0aGlzLnByaW50TGlzdFZpZXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNlYXJjaCA9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVWaWV3QXNHcmlkID0gdGhpcy5oYW5kbGVWaWV3QXNHcmlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVWaWV3QXNMaXN0ID0gdGhpcy5oYW5kbGVWaWV3QXNMaXN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIgPSB0aGlzLmhhbmRsZUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJpbnRJY29ucyA9IHRoaXMucHJpbnRJY29ucy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vIGRvIGxvbmcgcnVubmluZyBzdHVmZlxuICAgIGNvbnN0IGFwcHNEeW5hbWljQ2F0ZWdvcmllcyA9IFtdO1xuICAgIGxldCBhcHBzQXJyYXkgPSBbXTtcbiAgICBjb25zdCBjYXRlZ29yeUxpc3QgPSBbXTtcbiAgICBpZiAoREVWKSB7XG4gICAgICBjb25zdCBhcHBOYW1lcyA9IFsnVGhpbmdzJywgJ1BsYWNlcycsICdHcm91cHMnLCAnUmVwb3J0cycsICdEYXNoYm9hcmRzJywgJ0RldmVsb3BlcnMnLCAnTGVhZGVyYm9hcmQnLCAnRmxlZXQnLCAnU2NoZWR1bGVzJywgJ1NjZW5lcycsICdSdWxlcycsICdBcHAgU3RvcmUnLCAnU3Vic2NyaXB0aW9uJywgJ1NldHRpbmdzJ107XG4gICAgICBjb25zdCBhcHBJY29ucyA9IFsnYmx1ZXRvb3RoJywgJ2Jvb2snLCAndXNlcnMnLCAnZmxhZycsICd0YWNob21ldGVyJywgJ2xhcHRvcCcsICdncmFkdWF0aW9uLWNhcCcsICdjYWxlbmRhcicsICdjb21tZW50aW5nJywgJ2NvbXBhc3MnLCAnY2FtZXJhJywgJ2JvbHQnLCAnYm9tYicsICdjb2ZmZWUnXTtcbiAgICAgIGNvbnN0IGFwcENhdGVnb3JpZXMgPSBbJ2Fzc2V0cycsICdhc3NldHMnLCAnYXNzZXRzJywgJ2FuYWx5dGljcycsICdhbmFseXRpY3MnLCAnY29uZmlndXJhdGlvbicsICdhbmFseXRpY3MnLCAnYXBwcycsICdhdXRvbWF0aW9uJywgJ2F1dG9tYXRpb24nLCAnYXV0b21hdGlvbicsICdhcHBzJywgJ2NvbmZpZ3VyYXRpb24nLCAnY29uZmlndXJhdGlvbiddO1xuICAgICAgY29uc3QgYXBwQ29sb3JzID0gWycjRjIwMDAwJywgJyNGOTAwNkInLCAnI0QxMDBEMCcsICcjOUQwMEQyJywgJyM2QzU5Q0UnLCAnIzc4NUFGRScsICcjMDBCNEZCJywgJyMwMEQ5RTgnLCAnIzAwQUQ5QScsICcjMDBDQjM0JywgJyNDRkY3NDUnLCAnI0ZGQzUwMCcsICcjRkY3MjI5JywgJyM2NzY3NjcnXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwTmFtZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgIG5hbWU6IGFwcE5hbWVzW2ldLFxuICAgICAgICAgIGNhdGVnb3J5OiBhcHBDYXRlZ29yaWVzW2ldLFxuICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICBuYW1lOiBhcHBJY29uc1tpXSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcnM6IFthcHBDb2xvcnNbaV0sICcjZjJmMmYyJ10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByb3V0ZXM6IHtcbiAgICAgICAgICAgIHBhdGg6IGkgJSAyID09PSAwID8gJ2RldmljZS1leHBsb3JlcicgOiAnaGVsbG8td29ybGQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGFwcHNBcnJheS5wdXNoKG9iaik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFzc2lnbmluZyBjYXRlZ29yaWVzIHRvIG9yaWdpbmFsIGFwcHNcbiAgICBhcHBzLmZvckVhY2goYXBwID0+IHtcbiAgICAgIGNvbnN0IG5ld0FwcCA9IGFwcDtcbiAgICAgIG5ld0FwcC5jYXRlZ29yeSA9ICdhcHBzJztcbiAgICAgIGlmIChuZXdBcHAubmFtZSA9PT0gJ0Zsb3dzJykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZ29pbmcgdG8gY2hhbmdlIHRoZSBpY29uIHNyYycpO1xuICAgICAgICBuZXdBcHAucG5nID0gJy9pY29uLWZsb3ctYXBwLnN2Zyc7XG4gICAgICB9XG4gICAgICBhcHBzQXJyYXkucHVzaChuZXdBcHApO1xuICAgIH0pO1xuICAgIC8vIEZpbmRpbmcgdW5pcXVlIGNhdGVnb3JpZXNcbiAgICBhcHBzQXJyYXkuZm9yRWFjaChhcHAgPT4ge1xuICAgICAgYXBwc0R5bmFtaWNDYXRlZ29yaWVzLnB1c2goYXBwLmNhdGVnb3J5KTtcbiAgICB9KTtcbiAgICBhcHBzRHluYW1pY0NhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICBpZiAoIWluY2x1ZGVzKGNhdGVnb3J5TGlzdCwgY2F0ZWdvcnkpKSB7XG4gICAgICAgIGNhdGVnb3J5TGlzdC5wdXNoKGNhdGVnb3J5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBIYW5kbGluZyBGaWx0ZXJzXG4gICAgY29uc3QgYWxsQXBwc0FycmF5ID0gYXBwc0FycmF5O1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gc3RvcmUuZ2V0U3RhdGUoKS5sYXVuY2hlci5maWx0ZXI7XG4gICAgaWYgKGZpbHRlclZhbHVlICYmIGZpbHRlclZhbHVlICE9PSAnbm9uZScpIHtcbiAgICAgIGFwcHNBcnJheSA9IGZpbHRlcihhcHBzQXJyYXksIHsgY2F0ZWdvcnk6IGZpbHRlclZhbHVlIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFwcHM6IGFwcHNBcnJheSxcbiAgICAgIGFsbEFwcHM6IGFsbEFwcHNBcnJheSxcbiAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3J5TGlzdCxcbiAgICAgIGZpbHRlcjogZmlsdGVyVmFsdWUgfHwgJ05vbmUnLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gaGFuZGxlU2VhcmNoKGV2ZW50KSB7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFF1ZXJ5OiBsb3dlckNhc2UoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KTtcbiAgLy8gICBzdG9yZS5kaXNwYXRjaChzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gIC8vIH1cblxuICAvLyBoYW5kbGVWaWV3QXNHcmlkKCkge1xuICAvLyAgIGNvbnN0IHsgdmlld0FzR3JpZCwgdmlld0FzTGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgLy8gICBpZiAoIXZpZXdBc0dyaWQpIHtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gIC8vICAgICAgIHZpZXdBc0dyaWQ6ICFwcmV2U3RhdGUudmlld0FzR3JpZCxcbiAgLy8gICAgICAgdmlld0FzTGlzdDogIXByZXZTdGF0ZS52aWV3QXNMaXN0LFxuICAvLyAgICAgfSkpO1xuICAvLyAgICAgc3RvcmUuZGlzcGF0Y2goc2V0Vmlld0FzKCF2aWV3QXNHcmlkLCAhdmlld0FzTGlzdCkpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIGhhbmRsZVZpZXdBc0xpc3QoKSB7XG4gIC8vICAgY29uc3QgeyB2aWV3QXNMaXN0LCB2aWV3QXNHcmlkIH0gPSB0aGlzLnN0YXRlO1xuICAvLyAgIGlmICghdmlld0FzTGlzdCkge1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgLy8gICAgICAgdmlld0FzTGlzdDogIXByZXZTdGF0ZS52aWV3QXNMaXN0LFxuICAvLyAgICAgICB2aWV3QXNHcmlkOiAhcHJldlN0YXRlLnZpZXdBc0dyaWQsXG4gIC8vICAgICB9KSk7XG4gIC8vICAgICBzdG9yZS5kaXNwYXRjaChzZXRWaWV3QXMoIXZpZXdBc0dyaWQsICF2aWV3QXNMaXN0KSk7XG4gIC8vICAgfVxuICAvLyAgIC8vIHN0b3JlLmRpc3BhdGNoKHNvY2tldENvbm5lY3RlZCgpKTtcbiAgLy8gICAvLyB0aGlzLnByb3BzLnNob3dMb2FkaW5nKCk7XG4gIC8vICAgLy8gY29uc29sZS5sb2coJ1Byb3BzIGluIGluZGV4IHBhZ2UgaXMgOiAnLCB0aGlzLnByb3BzKTtcbiAgLy8gfVxuXG4gIC8vIGhhbmRsZUZpbHRlcih2YWx1ZSkge1xuICAvLyAgIGNvbnN0IHsgYWxsQXBwcyB9ID0gdGhpcy5zdGF0ZTtcbiAgLy8gICBpZiAodmFsdWUgPT09ICdub25lJykge1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGFwcHM6IGFsbEFwcHMgfSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGNvbnN0IGFwcHNBcnJheSA9IGZpbHRlcihhbGxBcHBzLCB7IGNhdGVnb3J5OiB2YWx1ZSB9KTtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBzOiBhcHBzQXJyYXkgfSk7XG4gIC8vICAgfVxuICAvLyAgIHN0b3JlLmRpc3BhdGNoKHNldEZpbHRlcih2YWx1ZSkpO1xuICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXI6IHZhbHVlIH0pO1xuICAvLyB9XG5cbiAgcHJpbnRJY29ucygpIHtcbiAgICBjb25zdCB7IGFwcHMsIHNlYXJjaFF1ZXJ5LCB2aWV3QXNMaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFwcHNBcnJheSA9IFtdO1xuICAgIGlmIChzZWFyY2hRdWVyeS5sZW5ndGggIT09IDApIHtcbiAgICAgIGFwcHMuZm9yRWFjaChhcHAgPT4ge1xuICAgICAgICBpZiAoaW5jbHVkZXMobG93ZXJDYXNlKGFwcC5uYW1lKSwgc2VhcmNoUXVlcnkpKSB7XG4gICAgICAgICAgYXBwc0FycmF5LnB1c2goYXBwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcHMuZm9yRWFjaChhcHAgPT4gYXBwc0FycmF5LnB1c2goYXBwKSk7XG4gICAgfVxuICAgIGlmICh2aWV3QXNMaXN0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhcHAtZHJhd2VyLWljb25zLXJvd1wiPlxuICAgICAgICAgIHt0aGlzLnByaW50TGlzdFZpZXcoYXBwc0FycmF5KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYXBwLWRyYXdlci1pY29ucy1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgb2Zmc2V0LWxnLTFcIj5cbiAgICAgICAgICB7dGhpcy5wcmludEdyaWRWaWV3KGFwcHNBcnJheSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHByaW50TGlzdFZpZXcoYXBwc0FycmF5KSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWRBcnJheSA9IGZpbHRlcihhcHBzQXJyYXksIHsgY2F0ZWdvcnkgfSk7XG4gICAgICBpZiAoZmlsdGVyZWRBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBvZmZzZXQtbGctMVwiIGtleT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPjxzdHJvbmc+e2NhcGl0YWxpemVGaXJzdExldHRlcihjYXRlZ29yeSl9PC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMucHJpbnRHcmlkVmlldyhmaWx0ZXJlZEFycmF5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBwcmludEdyaWRWaWV3KGFwcHNBcnJheSkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICByZXR1cm4gYXBwc0FycmF5Lm1hcChhcHAgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtZHJhd2VyLWljb25cIiBrZXk9e2FwcC5uYW1lfT5cbiAgICAgICAgICA8TGluayB0bz17YGFwcC8ke2FwcC5yb3V0ZXMucGF0aH1gfSA+XG4gICAgICAgICAgICA8SWNvbkNvbXBvbmVudFxuICAgICAgICAgICAgICBuYW1lPXthcHAuaWNvbnMubmFtZX1cbiAgICAgICAgICAgICAgc2hhZG93PXsnMjBweCd9XG4gICAgICAgICAgICAgIHRleHQ9e2FwcC5uYW1lfSB0ZXh0Q29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcnM9e2FwcC5pY29ucy5iYWNrZ3JvdW5kQ29sb3JzfVxuICAgICAgICAgICAgICBwbmc9e2FwcC5wbmd9XG4gICAgICAgICAgICAgIHNpemU9e3dpbmRvd1dpZHRoIDwgNTAwID8gJzEwMHB4JyA6ICcxMjBweCd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmlld0FzR3JpZCwgdmlld0FzTGlzdCwgZmlsdGVyLCBzZWFyY2hRdWVyeSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDs7XG4gICAgY29uc3Qgdmlld0FzU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMiknLFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRvcC1iYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC1sZy01IG9mZnNldC1sZy0xIGNvbC14cy0ke3dpbmRvd1dpZHRoIDwgNTAwID8gJzEyJyA6ICc2J30gY29sLXNtLTYgdG9wLWJhci1maWx0ZXJzYH0+XG4gICAgICAgICAgICBWaWV3IEFzOiZuYnNwO1xuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aWV3LWFzXCIgc3R5bGU9e3ZpZXdBc0xpc3QgPyB2aWV3QXNTdHlsZSA6IG51bGx9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVmlld0FzTGlzdH0+TGlzdDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aWV3LWFzXCIgc3R5bGU9e3ZpZXdBc0dyaWQgPyB2aWV3QXNTdHlsZSA6IG51bGx9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVmlld0FzR3JpZH0+R3JpZDwvYnV0dG9uPiAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgPHNwYW4+RmlsdGVyczogJm5ic3A7e2NhcGl0YWxpemVGaXJzdExldHRlcihmaWx0ZXIpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUZpbHRlcignbm9uZScpfT5Ob25lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUZpbHRlcignYXNzZXRzJyl9PkFzc2V0czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVGaWx0ZXIoJ2FuYWx5dGljcycpfT5BbmFseXRpY3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRmlsdGVyKCdjb25maWd1cmF0aW9uJyl9PkNvbmZpZ3VyYXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRmlsdGVyKCdhcHBzJyl9PkFwcHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRmlsdGVyKCdhdXRvbWF0aW9uJyl9PkF1dG9tYXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC1sZy0zIG9mZnNldC1sZy0xIGNvbC14cy0ke3dpbmRvd1dpZHRoIDwgNTAwID8gJzEyJyA6ICc2J30gY29sLXNtLTVgfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2h9IHZhbHVlPXtzZWFyY2hRdWVyeSB8fCAnJ30gcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZS4uLlwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByaW50SWNvbnMoKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFwcERyYXdlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5BcHBEcmF3ZXIuZGVmYXV0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcERyYXdlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBwRHJhd2VyL0FwcERyYXdlci5jb21wb25lbnQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7OztBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUVBO0FBSEE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBO0FBVkE7QUFFQTtBQWNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBZEE7Ozs7QUFJQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTs7QUFJQTtBQUFBO0FBUEE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU5BO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7OztBQU1BO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFOQTtBQVdBO0FBWEE7QUFDQTtBQVdBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBRkE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBS0E7QUFMQTtBQVNBOzs7OztBQWhPQTtBQUNBO0FBa09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        