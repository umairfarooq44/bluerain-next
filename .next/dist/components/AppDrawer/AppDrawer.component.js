'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('bluerain-ui/lib/Icon/Icon.component');

var _Icon2 = _interopRequireDefault(_Icon);

var _reactRouter = require('react-router');

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _lowerCase = require('lodash/lowerCase');

var _lowerCase2 = _interopRequireDefault(_lowerCase);

var _filter = require('lodash/filter');

var _filter2 = _interopRequireDefault(_filter);

var _bluerainClientServices = require('bluerain-client-services');

require('./AppDrawer.css');

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