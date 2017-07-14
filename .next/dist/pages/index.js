'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppDrawer = require('../components/AppDrawer/AppDrawer.component');

var _AppDrawer2 = _interopRequireDefault(_AppDrawer);

var _Layout = require('../layouts/Layout');

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