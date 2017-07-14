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

var _bluerainClientServices = require('bluerain-client-services');

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _reactRedux = require('react-redux');

var _SystemNav = require('../components/SystemNav');

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