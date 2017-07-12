webpackHotUpdate(0,{

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _tinycolor = __webpack_require__(626);

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _reactFa = __webpack_require__(625);

var _reactFa2 = _interopRequireDefault(_reactFa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by saad bin saeed on 2/28/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var IconComponent = function (_React$Component) {
    _inherits(IconComponent, _React$Component);

    function IconComponent() {
        _classCallCheck(this, IconComponent);

        return _possibleConstructorReturn(this, (IconComponent.__proto__ || Object.getPrototypeOf(IconComponent)).apply(this, arguments));
    }

    _createClass(IconComponent, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                name = _props.name,
                size = _props.size,
                color = _props.color,
                backgroundColors = _props.backgroundColors,
                gradient = _props.gradient,
                src = _props.src,
                png = _props.png,
                shadow = _props.shadow,
                textColor = _props.textColor,
                text = _props.text;


            var backgroundHexColor = void 0,
                iconGradient = 'linear-gradient(to right,';

            var iconHexColor = '' + ('#' + (0, _tinycolor2.default)(color).toHex());

            var iconParent = {
                textAlign: "center",
                width: size,
                color: '#' + (0, _tinycolor2.default)(textColor).toHex(),
                fontSize: parseInt(size.slice(0, -2)) / 8 + 'px'
            };

            var iconStyle = {
                width: size,
                height: size,
                borderRadius: '10px',
                color: iconHexColor,
                // display: "inline-block",
                textAlign: "center",
                marginBottom: "7px"
            };
            if (shadow) {
                iconStyle.boxShadow = 'rgba(0,0,0,0.6) 0 0 ' + shadow;
            }
            if (png) {
                iconStyle.background = '' + ('url(' + png + ')');
                iconStyle.backgroundSize = size;
                return _react2.default.createElement(
                    'div',
                    { style: iconParent },
                    _react2.default.createElement('div', { style: iconStyle }),
                    _react2.default.createElement(
                        'span',
                        null,
                        text
                    )
                );
            }
            if (src) {
                iconStyle.background = '' + ('url(' + src + ')');
            } else {
                if (gradient) {
                    backgroundColors.forEach(function (color) {
                        iconGradient += color;
                        iconGradient += ',';
                    });
                    iconGradient = iconGradient.substring(0, iconGradient.length - 1);
                    iconGradient += ')';
                } else {
                    backgroundHexColor = '' + ('#' + (0, _tinycolor2.default)(backgroundColors[0]).toHex());
                }
                iconStyle.background = gradient ? iconGradient : backgroundHexColor;
            }
            var icon = {
                padding: parseInt(size.slice(0, -2)) / 6 + 2 + 'px 0px'
            };
            return _react2.default.createElement(
                'div',
                { style: iconParent },
                _react2.default.createElement(
                    'div',
                    { style: iconStyle },
                    _react2.default.createElement(_reactFa2.default, { size: '5x', style: icon, name: name })
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    text
                )
            );
        }
    }]);

    return IconComponent;
}(_react2.default.Component);

IconComponent.propTypes = {
    name: _react.PropTypes.string,
    size: _react.PropTypes.string,
    color: _react.PropTypes.string,
    backgroundColors: _react.PropTypes.array,
    gradient: _react.PropTypes.bool,
    src: _react.PropTypes.string,
    shadow: _react.PropTypes.string,
    textColor: _react.PropTypes.string
};
IconComponent.defaultProps = {
    name: 'cube',
    size: '120px',
    color: 'white',
    backgroundColors: ['#F9006B', 'yellow'],
    gradient: false,
    src: null,
    shadow: null,
    textColor: 'black'

};
exports.default = IconComponent;

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('../fonts/fontawesome-webfont.eot?v=4.7.0');\n  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('../fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n.fa-slack:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon:before {\n  content: \"\\f1b1\";\n}\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.fa-history:before {\n  content: \"\\f1da\";\n}\n.fa-circle-thin:before {\n  content: \"\\f1db\";\n}\n.fa-header:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart:before {\n  content: \"\\f200\";\n}\n.fa-line-chart:before {\n  content: \"\\f201\";\n}\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n.fa-bus:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n.fa-cc:before {\n  content: \"\\f20a\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.fa-diamond:before {\n  content: \"\\f219\";\n}\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n.fa-venus:before {\n  content: \"\\f221\";\n}\n.fa-mars:before {\n  content: \"\\f222\";\n}\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n.fa-genderless:before {\n  content: \"\\f22d\";\n}\n.fa-facebook-official:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n.fa-server:before {\n  content: \"\\f233\";\n}\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\";\n}\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n.fa-train:before {\n  content: \"\\f238\";\n}\n.fa-subway:before {\n  content: \"\\f239\";\n}\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\f23b\";\n}\n.fa-optin-monster:before {\n  content: \"\\f23c\";\n}\n.fa-opencart:before {\n  content: \"\\f23d\";\n}\n.fa-expeditedssl:before {\n  content: \"\\f23e\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\f240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\f241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\f242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\f243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\f244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\f245\";\n}\n.fa-i-cursor:before {\n  content: \"\\f246\";\n}\n.fa-object-group:before {\n  content: \"\\f247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\f248\";\n}\n.fa-sticky-note:before {\n  content: \"\\f249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\f24a\";\n}\n.fa-cc-jcb:before {\n  content: \"\\f24b\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n.fa-clone:before {\n  content: \"\\f24d\";\n}\n.fa-balance-scale:before {\n  content: \"\\f24e\";\n}\n.fa-hourglass-o:before {\n  content: \"\\f250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\f251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\f252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\f253\";\n}\n.fa-hourglass:before {\n  content: \"\\f254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\f255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\f256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\f257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\f258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\f259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\f25a\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\f25b\";\n}\n.fa-trademark:before {\n  content: \"\\f25c\";\n}\n.fa-registered:before {\n  content: \"\\f25d\";\n}\n.fa-creative-commons:before {\n  content: \"\\f25e\";\n}\n.fa-gg:before {\n  content: \"\\f260\";\n}\n.fa-gg-circle:before {\n  content: \"\\f261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\f262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\f263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n.fa-get-pocket:before {\n  content: \"\\f265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\f266\";\n}\n.fa-safari:before {\n  content: \"\\f267\";\n}\n.fa-chrome:before {\n  content: \"\\f268\";\n}\n.fa-firefox:before {\n  content: \"\\f269\";\n}\n.fa-opera:before {\n  content: \"\\f26a\";\n}\n.fa-internet-explorer:before {\n  content: \"\\f26b\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\f26c\";\n}\n.fa-contao:before {\n  content: \"\\f26d\";\n}\n.fa-500px:before {\n  content: \"\\f26e\";\n}\n.fa-amazon:before {\n  content: \"\\f270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\f271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\f272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\f273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\f274\";\n}\n.fa-industry:before {\n  content: \"\\f275\";\n}\n.fa-map-pin:before {\n  content: \"\\f276\";\n}\n.fa-map-signs:before {\n  content: \"\\f277\";\n}\n.fa-map-o:before {\n  content: \"\\f278\";\n}\n.fa-map:before {\n  content: \"\\f279\";\n}\n.fa-commenting:before {\n  content: \"\\f27a\";\n}\n.fa-commenting-o:before {\n  content: \"\\f27b\";\n}\n.fa-houzz:before {\n  content: \"\\f27c\";\n}\n.fa-vimeo:before {\n  content: \"\\f27d\";\n}\n.fa-black-tie:before {\n  content: \"\\f27e\";\n}\n.fa-fonticons:before {\n  content: \"\\f280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\f281\";\n}\n.fa-edge:before {\n  content: \"\\f282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\f283\";\n}\n.fa-codiepie:before {\n  content: \"\\f284\";\n}\n.fa-modx:before {\n  content: \"\\f285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\f286\";\n}\n.fa-usb:before {\n  content: \"\\f287\";\n}\n.fa-product-hunt:before {\n  content: \"\\f288\";\n}\n.fa-mixcloud:before {\n  content: \"\\f289\";\n}\n.fa-scribd:before {\n  content: \"\\f28a\";\n}\n.fa-pause-circle:before {\n  content: \"\\f28b\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\f28c\";\n}\n.fa-stop-circle:before {\n  content: \"\\f28d\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\f28e\";\n}\n.fa-shopping-bag:before {\n  content: \"\\f290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\f291\";\n}\n.fa-hashtag:before {\n  content: \"\\f292\";\n}\n.fa-bluetooth:before {\n  content: \"\\f293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\f294\";\n}\n.fa-percent:before {\n  content: \"\\f295\";\n}\n.fa-gitlab:before {\n  content: \"\\f296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\f297\";\n}\n.fa-wpforms:before {\n  content: \"\\f298\";\n}\n.fa-envira:before {\n  content: \"\\f299\";\n}\n.fa-universal-access:before {\n  content: \"\\f29a\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\f29b\";\n}\n.fa-question-circle-o:before {\n  content: \"\\f29c\";\n}\n.fa-blind:before {\n  content: \"\\f29d\";\n}\n.fa-audio-description:before {\n  content: \"\\f29e\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\f2a0\";\n}\n.fa-braille:before {\n  content: \"\\f2a1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\f2a4\";\n}\n.fa-glide:before {\n  content: \"\\f2a5\";\n}\n.fa-glide-g:before {\n  content: \"\\f2a6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\f2a7\";\n}\n.fa-low-vision:before {\n  content: \"\\f2a8\";\n}\n.fa-viadeo:before {\n  content: \"\\f2a9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\f2aa\";\n}\n.fa-snapchat:before {\n  content: \"\\f2ab\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\";\n}\n.fa-snapchat-square:before {\n  content: \"\\f2ad\";\n}\n.fa-pied-piper:before {\n  content: \"\\f2ae\";\n}\n.fa-first-order:before {\n  content: \"\\f2b0\";\n}\n.fa-yoast:before {\n  content: \"\\f2b1\";\n}\n.fa-themeisle:before {\n  content: \"\\f2b2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\f2b3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\f2b4\";\n}\n.fa-handshake-o:before {\n  content: \"\\f2b5\";\n}\n.fa-envelope-open:before {\n  content: \"\\f2b6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\f2b7\";\n}\n.fa-linode:before {\n  content: \"\\f2b8\";\n}\n.fa-address-book:before {\n  content: \"\\f2b9\";\n}\n.fa-address-book-o:before {\n  content: \"\\f2ba\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\f2bb\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\f2bc\";\n}\n.fa-user-circle:before {\n  content: \"\\f2bd\";\n}\n.fa-user-circle-o:before {\n  content: \"\\f2be\";\n}\n.fa-user-o:before {\n  content: \"\\f2c0\";\n}\n.fa-id-badge:before {\n  content: \"\\f2c1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\f2c2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\f2c3\";\n}\n.fa-quora:before {\n  content: \"\\f2c4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\f2c5\";\n}\n.fa-telegram:before {\n  content: \"\\f2c6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\f2c7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\f2c9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\";\n}\n.fa-shower:before {\n  content: \"\\f2cc\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\f2cd\";\n}\n.fa-podcast:before {\n  content: \"\\f2ce\";\n}\n.fa-window-maximize:before {\n  content: \"\\f2d0\";\n}\n.fa-window-minimize:before {\n  content: \"\\f2d1\";\n}\n.fa-window-restore:before {\n  content: \"\\f2d2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\f2d3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\f2d4\";\n}\n.fa-bandcamp:before {\n  content: \"\\f2d5\";\n}\n.fa-grav:before {\n  content: \"\\f2d6\";\n}\n.fa-etsy:before {\n  content: \"\\f2d7\";\n}\n.fa-imdb:before {\n  content: \"\\f2d8\";\n}\n.fa-ravelry:before {\n  content: \"\\f2d9\";\n}\n.fa-eercast:before {\n  content: \"\\f2da\";\n}\n.fa-microchip:before {\n  content: \"\\f2db\";\n}\n.fa-snowflake-o:before {\n  content: \"\\f2dc\";\n}\n.fa-superpowers:before {\n  content: \"\\f2dd\";\n}\n.fa-wpexplorer:before {\n  content: \"\\f2de\";\n}\n.fa-meetup:before {\n  content: \"\\f2e0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n";

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 */



Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(84);

var _propTypes2 = _interopRequireDefault(_propTypes);

var Icon = (function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    _get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var Component = _props.Component;
      var name = _props.name;
      var size = _props.size;
      var rotate = _props.rotate;
      var flip = _props.flip;
      var spin = _props.spin;
      var fixedWidth = _props.fixedWidth;
      var stack = _props.stack;
      var inverse = _props.inverse;
      var pulse = _props.pulse;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['Component', 'name', 'size', 'rotate', 'flip', 'spin', 'fixedWidth', 'stack', 'inverse', 'pulse', 'className']);

      var classNames = 'fa fa-' + name;
      if (size) {
        classNames = classNames + ' fa-' + size;
      }
      if (rotate) {
        classNames = classNames + ' fa-rotate-' + rotate;
      }
      if (flip) {
        classNames = classNames + ' fa-flip-' + flip;
      }
      if (fixedWidth) {
        classNames = classNames + ' fa-fw';
      }
      if (spin) {
        classNames = classNames + ' fa-spin';
      }
      if (pulse) {
        classNames = classNames + ' fa-pulse';
      }

      if (stack) {
        classNames = classNames + ' fa-stack-' + stack;
      }
      if (inverse) {
        classNames = classNames + ' fa-inverse';
      }

      if (className) {
        classNames = classNames + ' ' + className;
      }
      return _react2['default'].createElement(Component, _extends({}, props, { className: classNames }));
    }
  }], [{
    key: 'propTypes',
    value: {
      name: _propTypes2['default'].string.isRequired,
      className: _propTypes2['default'].string,
      size: _propTypes2['default'].oneOf(['lg', '2x', '3x', '4x', '5x']),
      rotate: _propTypes2['default'].oneOf(['45', '90', '135', '180', '225', '270', '315']),
      flip: _propTypes2['default'].oneOf(['horizontal', 'vertical']),
      fixedWidth: _propTypes2['default'].bool,
      spin: _propTypes2['default'].bool,
      pulse: _propTypes2['default'].bool,
      stack: _propTypes2['default'].oneOf(['1x', '2x']),
      inverse: _propTypes2['default'].bool,
      Component: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].func])
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      Component: 'span'
    },
    enumerable: true
  }]);

  return Icon;
})(_react2['default'].Component);

exports['default'] = Icon;
module.exports = exports['default'];


/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 */



Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(84);

var _propTypes2 = _interopRequireDefault(_propTypes);

var IconStack = (function (_React$Component) {
  _inherits(IconStack, _React$Component);

  function IconStack() {
    _classCallCheck(this, IconStack);

    _get(Object.getPrototypeOf(IconStack.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(IconStack, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var size = _props.size;
      var children = _props.children;

      var props = _objectWithoutProperties(_props, ['className', 'size', 'children']);

      var classNames = ['fa-stack'];

      if (size) {
        classNames.push('fa-' + size);
      }

      if (className) {
        classNames.push(className);
      }

      var iconStackClassName = classNames.join(' ');

      return _react2['default'].createElement(
        'span',
        _extends({}, props, { className: iconStackClassName }),
        children
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      className: _propTypes2['default'].string,
      size: _propTypes2['default'].oneOf(['lg', '2x', '3x', '4x', '5x']),
      children: _propTypes2['default'].node.isRequired
    },
    enumerable: true
  }]);

  return IconStack;
})(_react2['default'].Component);

exports['default'] = IconStack;
module.exports = exports['default'];


/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 */



Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

__webpack_require__(622);

var _Icon = __webpack_require__(623);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconStack = __webpack_require__(624);

var _IconStack2 = _interopRequireDefault(_IconStack);

exports['default'] = _Icon2['default'];
exports.Icon = _Icon2['default'];
exports.IconStack = _IconStack2['default'];


/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if (typeof module !== "undefined" && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {return tinycolor;}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {
    window.tinycolor = tinycolor;
}

})(Math);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNzkxNDRlYzRjM2VmZmFiNzgwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vfi9ibHVlcmFpbi11aS9saWIvSWNvbi9JY29uLmNvbXBvbmVudC5qcz81YTMyIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUuY3NzP2Y0NjYiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1mYS9saWIvSWNvbi5qcz9kZjQ1Iiwid2VicGFjazovLy8uL34vcmVhY3QtZmEvbGliL0ljb25TdGFjay5qcz9jMWM0Iiwid2VicGFjazovLy8uL34vcmVhY3QtZmEvbGliL2luZGV4LmpzPzlkYjciLCJ3ZWJwYWNrOi8vLy4vfi90aW55Y29sb3IyL3Rpbnljb2xvci5qcz9hN2ZlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdGlueWNvbG9yID0gcmVxdWlyZSgndGlueWNvbG9yMicpO1xuXG52YXIgX3Rpbnljb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW55Y29sb3IpO1xuXG52YXIgX3JlYWN0RmEgPSByZXF1aXJlKCdyZWFjdC1mYScpO1xuXG52YXIgX3JlYWN0RmEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RGYSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDcmVhdGVkIGJ5IHNhYWQgYmluIHNhZWVkIG9uIDIvMjgvMTcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIEljb25Db21wb25lbnQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhJY29uQ29tcG9uZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEljb25Db21wb25lbnQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJY29uQ29tcG9uZW50KTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEljb25Db21wb25lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihJY29uQ29tcG9uZW50KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEljb25Db21wb25lbnQsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBuYW1lID0gX3Byb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgc2l6ZSA9IF9wcm9wcy5zaXplLFxuICAgICAgICAgICAgICAgIGNvbG9yID0gX3Byb3BzLmNvbG9yLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcnMgPSBfcHJvcHMuYmFja2dyb3VuZENvbG9ycyxcbiAgICAgICAgICAgICAgICBncmFkaWVudCA9IF9wcm9wcy5ncmFkaWVudCxcbiAgICAgICAgICAgICAgICBzcmMgPSBfcHJvcHMuc3JjLFxuICAgICAgICAgICAgICAgIHBuZyA9IF9wcm9wcy5wbmcsXG4gICAgICAgICAgICAgICAgc2hhZG93ID0gX3Byb3BzLnNoYWRvdyxcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3IgPSBfcHJvcHMudGV4dENvbG9yLFxuICAgICAgICAgICAgICAgIHRleHQgPSBfcHJvcHMudGV4dDtcblxuXG4gICAgICAgICAgICB2YXIgYmFja2dyb3VuZEhleENvbG9yID0gdm9pZCAwLFxuICAgICAgICAgICAgICAgIGljb25HcmFkaWVudCA9ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsJztcblxuICAgICAgICAgICAgdmFyIGljb25IZXhDb2xvciA9ICcnICsgKCcjJyArICgwLCBfdGlueWNvbG9yMi5kZWZhdWx0KShjb2xvcikudG9IZXgoKSk7XG5cbiAgICAgICAgICAgIHZhciBpY29uUGFyZW50ID0ge1xuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMnICsgKDAsIF90aW55Y29sb3IyLmRlZmF1bHQpKHRleHRDb2xvcikudG9IZXgoKSxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogcGFyc2VJbnQoc2l6ZS5zbGljZSgwLCAtMikpIC8gOCArICdweCdcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBpY29uU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBpY29uSGV4Q29sb3IsXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjdweFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHNoYWRvdykge1xuICAgICAgICAgICAgICAgIGljb25TdHlsZS5ib3hTaGFkb3cgPSAncmdiYSgwLDAsMCwwLjYpIDAgMCAnICsgc2hhZG93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBuZykge1xuICAgICAgICAgICAgICAgIGljb25TdHlsZS5iYWNrZ3JvdW5kID0gJycgKyAoJ3VybCgnICsgcG5nICsgJyknKTtcbiAgICAgICAgICAgICAgICBpY29uU3R5bGUuYmFja2dyb3VuZFNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IGljb25QYXJlbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgc3R5bGU6IGljb25TdHlsZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgICAgICBpY29uU3R5bGUuYmFja2dyb3VuZCA9ICcnICsgKCd1cmwoJyArIHNyYyArICcpJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChncmFkaWVudCkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JzLmZvckVhY2goZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uR3JhZGllbnQgKz0gY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uR3JhZGllbnQgKz0gJywnO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkdyYWRpZW50ID0gaWNvbkdyYWRpZW50LnN1YnN0cmluZygwLCBpY29uR3JhZGllbnQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGljb25HcmFkaWVudCArPSAnKSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEhleENvbG9yID0gJycgKyAoJyMnICsgKDAsIF90aW55Y29sb3IyLmRlZmF1bHQpKGJhY2tncm91bmRDb2xvcnNbMF0pLnRvSGV4KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpY29uU3R5bGUuYmFja2dyb3VuZCA9IGdyYWRpZW50ID8gaWNvbkdyYWRpZW50IDogYmFja2dyb3VuZEhleENvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGljb24gPSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogcGFyc2VJbnQoc2l6ZS5zbGljZSgwLCAtMikpIC8gNiArIDIgKyAncHggMHB4J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiBpY29uUGFyZW50IH0sXG4gICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBpY29uU3R5bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0RmEyLmRlZmF1bHQsIHsgc2l6ZTogJzV4Jywgc3R5bGU6IGljb24sIG5hbWU6IG5hbWUgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEljb25Db21wb25lbnQ7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5JY29uQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvcjogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgYmFja2dyb3VuZENvbG9yczogX3JlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICBncmFkaWVudDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHNyYzogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2hhZG93OiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0ZXh0Q29sb3I6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuSWNvbkNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbmFtZTogJ2N1YmUnLFxuICAgIHNpemU6ICcxMjBweCcsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZENvbG9yczogWycjRjkwMDZCJywgJ3llbGxvdyddLFxuICAgIGdyYWRpZW50OiBmYWxzZSxcbiAgICBzcmM6IG51bGwsXG4gICAgc2hhZG93OiBudWxsLFxuICAgIHRleHRDb2xvcjogJ2JsYWNrJ1xuXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gSWNvbkNvbXBvbmVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmx1ZXJhaW4tdWkvbGliL0ljb24vSWNvbi5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDYyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyohXFxuICogIEZvbnQgQXdlc29tZSA0LjcuMCBieSBAZGF2ZWdhbmR5IC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvIC0gQGZvbnRhd2Vzb21lXFxuICogIExpY2Vuc2UgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW8vbGljZW5zZSAoRm9udDogU0lMIE9GTCAxLjEsIENTUzogTUlUIExpY2Vuc2UpXFxuICovXFxuLyogRk9OVCBQQVRIXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90P3Y9NC43LjAnKTtcXG4gIHNyYzogdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LmVvdD8jaWVmaXgmdj00LjcuMCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmYyP3Y9NC43LjAnKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmP3Y9NC43LjAnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LnR0Zj92PTQuNy4wJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnP3Y9NC43LjAjZm9udGF3ZXNvbWVyZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi5mYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuLyogbWFrZXMgdGhlIGZvbnQgMzMlIGxhcmdlciByZWxhdGl2ZSB0byB0aGUgaWNvbiBjb250YWluZXIgKi9cXG4uZmEtbGcge1xcbiAgZm9udC1zaXplOiAxLjMzMzMzMzMzZW07XFxuICBsaW5lLWhlaWdodDogMC43NWVtO1xcbiAgdmVydGljYWwtYWxpZ246IC0xNSU7XFxufVxcbi5mYS0yeCB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuLmZhLTN4IHtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG4uZmEtNHgge1xcbiAgZm9udC1zaXplOiA0ZW07XFxufVxcbi5mYS01eCB7XFxuICBmb250LXNpemU6IDVlbTtcXG59XFxuLmZhLWZ3IHtcXG4gIHdpZHRoOiAxLjI4NTcxNDI5ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mYS11bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tbGVmdDogMi4xNDI4NTcxNGVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4uZmEtdWwgPiBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mYS1saSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMi4xNDI4NTcxNGVtO1xcbiAgd2lkdGg6IDIuMTQyODU3MTRlbTtcXG4gIHRvcDogMC4xNDI4NTcxNGVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZmEtbGkuZmEtbGcge1xcbiAgbGVmdDogLTEuODU3MTQyODZlbTtcXG59XFxuLmZhLWJvcmRlciB7XFxuICBwYWRkaW5nOiAuMmVtIC4yNWVtIC4xNWVtO1xcbiAgYm9yZGVyOiBzb2xpZCAwLjA4ZW0gI2VlZWVlZTtcXG4gIGJvcmRlci1yYWRpdXM6IC4xZW07XFxufVxcbi5mYS1wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5mYS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLmZhLmZhLXB1bGwtbGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IC4zZW07XFxufVxcbi5mYS5mYS1wdWxsLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAuM2VtO1xcbn1cXG4vKiBEZXByZWNhdGVkIGFzIG9mIDQuNC4wICovXFxuLnB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4ucHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uZmEucHVsbC1sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogLjNlbTtcXG59XFxuLmZhLnB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IC4zZW07XFxufVxcbi5mYS1zcGluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXG4gIGFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcbi5mYS1wdWxzZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXG4gIGFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuLmZhLXJvdGF0ZS05MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG4uZmEtcm90YXRlLTE4MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MilcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4uZmEtcm90YXRlLTI3MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MylcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG4uZmEtZmxpcC1ob3Jpem9udGFsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbn1cXG4uZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG59XFxuOnJvb3QgLmZhLXJvdGF0ZS05MCxcXG46cm9vdCAuZmEtcm90YXRlLTE4MCxcXG46cm9vdCAuZmEtcm90YXRlLTI3MCxcXG46cm9vdCAuZmEtZmxpcC1ob3Jpem9udGFsLFxcbjpyb290IC5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIGZpbHRlcjogbm9uZTtcXG59XFxuLmZhLXN0YWNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uZmEtc3RhY2stMXgsXFxuLmZhLXN0YWNrLTJ4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZhLXN0YWNrLTF4IHtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG4uZmEtc3RhY2stMngge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcbi5mYS1pbnZlcnNlIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4vKiBGb250IEF3ZXNvbWUgdXNlcyB0aGUgVW5pY29kZSBQcml2YXRlIFVzZSBBcmVhIChQVUEpIHRvIGVuc3VyZSBzY3JlZW5cXG4gICByZWFkZXJzIGRvIG5vdCByZWFkIG9mZiByYW5kb20gY2hhcmFjdGVycyB0aGF0IHJlcHJlc2VudCBpY29ucyAqL1xcbi5mYS1nbGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAwXFxcIjtcXG59XFxuLmZhLW11c2ljOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDFcXFwiO1xcbn1cXG4uZmEtc2VhcmNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4uZmEtZW52ZWxvcGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAzXFxcIjtcXG59XFxuLmZhLWhlYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDRcXFwiO1xcbn1cXG4uZmEtc3RhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA1XFxcIjtcXG59XFxuLmZhLXN0YXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA2XFxcIjtcXG59XFxuLmZhLXVzZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwN1xcXCI7XFxufVxcbi5mYS1maWxtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4uZmEtdGgtbGFyZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOVxcXCI7XFxufVxcbi5mYS10aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBhXFxcIjtcXG59XFxuLmZhLXRoLWxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYlxcXCI7XFxufVxcbi5mYS1jaGVjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBjXFxcIjtcXG59XFxuLmZhLXJlbW92ZTpiZWZvcmUsXFxuLmZhLWNsb3NlOmJlZm9yZSxcXG4uZmEtdGltZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi5mYS1zZWFyY2gtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBlXFxcIjtcXG59XFxuLmZhLXNlYXJjaC1taW51czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEwXFxcIjtcXG59XFxuLmZhLXBvd2VyLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDExXFxcIjtcXG59XFxuLmZhLXNpZ25hbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEyXFxcIjtcXG59XFxuLmZhLWdlYXI6YmVmb3JlLFxcbi5mYS1jb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7XFxufVxcbi5mYS10cmFzaC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4uZmEtaG9tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLmZhLWZpbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE2XFxcIjtcXG59XFxuLmZhLWNsb2NrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi5mYS1yb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMThcXFwiO1xcbn1cXG4uZmEtZG93bmxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi5mYS1hcnJvdy1jaXJjbGUtby1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLW8tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi5mYS1pbmJveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLmZhLXBsYXktY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZFxcXCI7XFxufVxcbi5mYS1yb3RhdGUtcmlnaHQ6YmVmb3JlLFxcbi5mYS1yZXBlYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi5mYS1yZWZyZXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjFcXFwiO1xcbn1cXG4uZmEtbGlzdC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyMlxcXCI7XFxufVxcbi5mYS1sb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjNcXFwiO1xcbn1cXG4uZmEtZmxhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI0XFxcIjtcXG59XFxuLmZhLWhlYWRwaG9uZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNVxcXCI7XFxufVxcbi5mYS12b2x1bWUtb2ZmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjZcXFwiO1xcbn1cXG4uZmEtdm9sdW1lLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyN1xcXCI7XFxufVxcbi5mYS12b2x1bWUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi5mYS1xcmNvZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOVxcXCI7XFxufVxcbi5mYS1iYXJjb2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmFcXFwiO1xcbn1cXG4uZmEtdGFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmJcXFwiO1xcbn1cXG4uZmEtdGFnczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJjXFxcIjtcXG59XFxuLmZhLWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZFxcXCI7XFxufVxcbi5mYS1ib29rbWFyazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJlXFxcIjtcXG59XFxuLmZhLXByaW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmZcXFwiO1xcbn1cXG4uZmEtY2FtZXJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzBcXFwiO1xcbn1cXG4uZmEtZm9udDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDMxXFxcIjtcXG59XFxuLmZhLWJvbGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzMlxcXCI7XFxufVxcbi5mYS1pdGFsaWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzM1xcXCI7XFxufVxcbi5mYS10ZXh0LWhlaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM0XFxcIjtcXG59XFxuLmZhLXRleHQtd2lkdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzNVxcXCI7XFxufVxcbi5mYS1hbGlnbi1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzZcXFwiO1xcbn1cXG4uZmEtYWxpZ24tY2VudGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzdcXFwiO1xcbn1cXG4uZmEtYWxpZ24tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzOFxcXCI7XFxufVxcbi5mYS1hbGlnbi1qdXN0aWZ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzlcXFwiO1xcbn1cXG4uZmEtbGlzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDNhXFxcIjtcXG59XFxuLmZhLWRlZGVudDpiZWZvcmUsXFxuLmZhLW91dGRlbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzYlxcXCI7XFxufVxcbi5mYS1pbmRlbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzY1xcXCI7XFxufVxcbi5mYS12aWRlby1jYW1lcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzZFxcXCI7XFxufVxcbi5mYS1waG90bzpiZWZvcmUsXFxuLmZhLWltYWdlOmJlZm9yZSxcXG4uZmEtcGljdHVyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2VcXFwiO1xcbn1cXG4uZmEtcGVuY2lsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDBcXFwiO1xcbn1cXG4uZmEtbWFwLW1hcmtlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQxXFxcIjtcXG59XFxuLmZhLWFkanVzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQyXFxcIjtcXG59XFxuLmZhLXRpbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0M1xcXCI7XFxufVxcbi5mYS1lZGl0OmJlZm9yZSxcXG4uZmEtcGVuY2lsLXNxdWFyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDRcXFwiO1xcbn1cXG4uZmEtc2hhcmUtc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0NVxcXCI7XFxufVxcbi5mYS1jaGVjay1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQ2XFxcIjtcXG59XFxuLmZhLWFycm93czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQ3XFxcIjtcXG59XFxuLmZhLXN0ZXAtYmFja3dhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0OFxcXCI7XFxufVxcbi5mYS1mYXN0LWJhY2t3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDlcXFwiO1xcbn1cXG4uZmEtYmFja3dhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0YVxcXCI7XFxufVxcbi5mYS1wbGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNGJcXFwiO1xcbn1cXG4uZmEtcGF1c2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0Y1xcXCI7XFxufVxcbi5mYS1zdG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNGRcXFwiO1xcbn1cXG4uZmEtZm9yd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRlXFxcIjtcXG59XFxuLmZhLWZhc3QtZm9yd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjtcXG59XFxuLmZhLXN0ZXAtZm9yd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUxXFxcIjtcXG59XFxuLmZhLWVqZWN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTJcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTNcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU0XFxcIjtcXG59XFxuLmZhLXBsdXMtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTVcXFwiO1xcbn1cXG4uZmEtbWludXMtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4uZmEtdGltZXMtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTdcXFwiO1xcbn1cXG4uZmEtY2hlY2stY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNThcXFwiO1xcbn1cXG4uZmEtcXVlc3Rpb24tY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTlcXFwiO1xcbn1cXG4uZmEtaW5mby1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1YVxcXCI7XFxufVxcbi5mYS1jcm9zc2hhaXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNWJcXFwiO1xcbn1cXG4uZmEtdGltZXMtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1Y1xcXCI7XFxufVxcbi5mYS1jaGVjay1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDVkXFxcIjtcXG59XFxuLmZhLWJhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDVlXFxcIjtcXG59XFxuLmZhLWFycm93LWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2MFxcXCI7XFxufVxcbi5mYS1hcnJvdy1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYxXFxcIjtcXG59XFxuLmZhLWFycm93LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjJcXFwiO1xcbn1cXG4uZmEtYXJyb3ctZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLmZhLW1haWwtZm9yd2FyZDpiZWZvcmUsXFxuLmZhLXNoYXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjRcXFwiO1xcbn1cXG4uZmEtZXhwYW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjVcXFwiO1xcbn1cXG4uZmEtY29tcHJlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2NlxcXCI7XFxufVxcbi5mYS1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjdcXFwiO1xcbn1cXG4uZmEtbWludXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2OFxcXCI7XFxufVxcbi5mYS1hc3RlcmlzazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY5XFxcIjtcXG59XFxuLmZhLWV4Y2xhbWF0aW9uLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDZhXFxcIjtcXG59XFxuLmZhLWdpZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2YlxcXCI7XFxufVxcbi5mYS1sZWFmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNmNcXFwiO1xcbn1cXG4uZmEtZmlyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDZkXFxcIjtcXG59XFxuLmZhLWV5ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDZlXFxcIjtcXG59XFxuLmZhLWV5ZS1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDcwXFxcIjtcXG59XFxuLmZhLXdhcm5pbmc6YmVmb3JlLFxcbi5mYS1leGNsYW1hdGlvbi10cmlhbmdsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDcxXFxcIjtcXG59XFxuLmZhLXBsYW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzJcXFwiO1xcbn1cXG4uZmEtY2FsZW5kYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3M1xcXCI7XFxufVxcbi5mYS1yYW5kb206YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NFxcXCI7XFxufVxcbi5mYS1jb21tZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzVcXFwiO1xcbn1cXG4uZmEtbWFnbmV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc3XFxcIjtcXG59XFxuLmZhLWNoZXZyb24tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc4XFxcIjtcXG59XFxuLmZhLXJldHdlZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3OVxcXCI7XFxufVxcbi5mYS1zaG9wcGluZy1jYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwN2FcXFwiO1xcbn1cXG4uZmEtZm9sZGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwN2JcXFwiO1xcbn1cXG4uZmEtZm9sZGVyLW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3Y1xcXCI7XFxufVxcbi5mYS1hcnJvd3MtdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDdkXFxcIjtcXG59XFxuLmZhLWFycm93cy1oOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwN2VcXFwiO1xcbn1cXG4uZmEtYmFyLWNoYXJ0LW86YmVmb3JlLFxcbi5mYS1iYXItY2hhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4MFxcXCI7XFxufVxcbi5mYS10d2l0dGVyLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgxXFxcIjtcXG59XFxuLmZhLWZhY2Vib29rLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgyXFxcIjtcXG59XFxuLmZhLWNhbWVyYS1yZXRybzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgzXFxcIjtcXG59XFxuLmZhLWtleTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg0XFxcIjtcXG59XFxuLmZhLWdlYXJzOmJlZm9yZSxcXG4uZmEtY29nczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg1XFxcIjtcXG59XFxuLmZhLWNvbW1lbnRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODZcXFwiO1xcbn1cXG4uZmEtdGh1bWJzLW8tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4N1xcXCI7XFxufVxcbi5mYS10aHVtYnMtby1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODhcXFwiO1xcbn1cXG4uZmEtc3Rhci1oYWxmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODlcXFwiO1xcbn1cXG4uZmEtaGVhcnQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDhhXFxcIjtcXG59XFxuLmZhLXNpZ24tb3V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOGJcXFwiO1xcbn1cXG4uZmEtbGlua2VkaW4tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOGNcXFwiO1xcbn1cXG4uZmEtdGh1bWItdGFjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDhkXFxcIjtcXG59XFxuLmZhLWV4dGVybmFsLWxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4ZVxcXCI7XFxufVxcbi5mYS1zaWduLWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTBcXFwiO1xcbn1cXG4uZmEtdHJvcGh5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTFcXFwiO1xcbn1cXG4uZmEtZ2l0aHViLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDkyXFxcIjtcXG59XFxuLmZhLXVwbG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDkzXFxcIjtcXG59XFxuLmZhLWxlbW9uLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5NFxcXCI7XFxufVxcbi5mYS1waG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk1XFxcIjtcXG59XFxuLmZhLXNxdWFyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTZcXFwiO1xcbn1cXG4uZmEtYm9va21hcmstbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk3XFxcIjtcXG59XFxuLmZhLXBob25lLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk4XFxcIjtcXG59XFxuLmZhLXR3aXR0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5OVxcXCI7XFxufVxcbi5mYS1mYWNlYm9vay1mOmJlZm9yZSxcXG4uZmEtZmFjZWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5YVxcXCI7XFxufVxcbi5mYS1naXRodWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5YlxcXCI7XFxufVxcbi5mYS11bmxvY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5Y1xcXCI7XFxufVxcbi5mYS1jcmVkaXQtY2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDlkXFxcIjtcXG59XFxuLmZhLWZlZWQ6YmVmb3JlLFxcbi5mYS1yc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZVxcXCI7XFxufVxcbi5mYS1oZGQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGEwXFxcIjtcXG59XFxuLmZhLWJ1bGxob3JuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTFcXFwiO1xcbn1cXG4uZmEtYmVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGYzXFxcIjtcXG59XFxuLmZhLWNlcnRpZmljYXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTNcXFwiO1xcbn1cXG4uZmEtaGFuZC1vLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTRcXFwiO1xcbn1cXG4uZmEtaGFuZC1vLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNVxcXCI7XFxufVxcbi5mYS1oYW5kLW8tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNlxcXCI7XFxufVxcbi5mYS1oYW5kLW8tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE3XFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYThcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTlcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWFcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhYlxcXCI7XFxufVxcbi5mYS1nbG9iZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFjXFxcIjtcXG59XFxuLmZhLXdyZW5jaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFkXFxcIjtcXG59XFxuLmZhLXRhc2tzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWVcXFwiO1xcbn1cXG4uZmEtZmlsdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjBcXFwiO1xcbn1cXG4uZmEtYnJpZWZjYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjFcXFwiO1xcbn1cXG4uZmEtYXJyb3dzLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGIyXFxcIjtcXG59XFxuLmZhLWdyb3VwOmJlZm9yZSxcXG4uZmEtdXNlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjMFxcXCI7XFxufVxcbi5mYS1jaGFpbjpiZWZvcmUsXFxuLmZhLWxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjMVxcXCI7XFxufVxcbi5mYS1jbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGMyXFxcIjtcXG59XFxuLmZhLWZsYXNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzNcXFwiO1xcbn1cXG4uZmEtY3V0OmJlZm9yZSxcXG4uZmEtc2Npc3NvcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjNFxcXCI7XFxufVxcbi5mYS1jb3B5OmJlZm9yZSxcXG4uZmEtZmlsZXMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM1XFxcIjtcXG59XFxuLmZhLXBhcGVyY2xpcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM2XFxcIjtcXG59XFxuLmZhLXNhdmU6YmVmb3JlLFxcbi5mYS1mbG9wcHktbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM3XFxcIjtcXG59XFxuLmZhLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM4XFxcIjtcXG59XFxuLmZhLW5hdmljb246YmVmb3JlLFxcbi5mYS1yZW9yZGVyOmJlZm9yZSxcXG4uZmEtYmFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM5XFxcIjtcXG59XFxuLmZhLWxpc3QtdWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjYVxcXCI7XFxufVxcbi5mYS1saXN0LW9sOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwY2JcXFwiO1xcbn1cXG4uZmEtc3RyaWtldGhyb3VnaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNjXFxcIjtcXG59XFxuLmZhLXVuZGVybGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNkXFxcIjtcXG59XFxuLmZhLXRhYmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwY2VcXFwiO1xcbn1cXG4uZmEtbWFnaWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkMFxcXCI7XFxufVxcbi5mYS10cnVjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQxXFxcIjtcXG59XFxuLmZhLXBpbnRlcmVzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQyXFxcIjtcXG59XFxuLmZhLXBpbnRlcmVzdC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkM1xcXCI7XFxufVxcbi5mYS1nb29nbGUtcGx1cy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkNFxcXCI7XFxufVxcbi5mYS1nb29nbGUtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ1XFxcIjtcXG59XFxuLmZhLW1vbmV5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDZcXFwiO1xcbn1cXG4uZmEtY2FyZXQtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ3XFxcIjtcXG59XFxuLmZhLWNhcmV0LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDhcXFwiO1xcbn1cXG4uZmEtY2FyZXQtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ5XFxcIjtcXG59XFxuLmZhLWNhcmV0LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGFcXFwiO1xcbn1cXG4uZmEtY29sdW1uczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGRiXFxcIjtcXG59XFxuLmZhLXVuc29ydGVkOmJlZm9yZSxcXG4uZmEtc29ydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGRjXFxcIjtcXG59XFxuLmZhLXNvcnQtZG93bjpiZWZvcmUsXFxuLmZhLXNvcnQtZGVzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGRkXFxcIjtcXG59XFxuLmZhLXNvcnQtdXA6YmVmb3JlLFxcbi5mYS1zb3J0LWFzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGRlXFxcIjtcXG59XFxuLmZhLWVudmVsb3BlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTBcXFwiO1xcbn1cXG4uZmEtbGlua2VkaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMVxcXCI7XFxufVxcbi5mYS1yb3RhdGUtbGVmdDpiZWZvcmUsXFxuLmZhLXVuZG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMlxcXCI7XFxufVxcbi5mYS1sZWdhbDpiZWZvcmUsXFxuLmZhLWdhdmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTNcXFwiO1xcbn1cXG4uZmEtZGFzaGJvYXJkOmJlZm9yZSxcXG4uZmEtdGFjaG9tZXRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGU0XFxcIjtcXG59XFxuLmZhLWNvbW1lbnQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGU1XFxcIjtcXG59XFxuLmZhLWNvbW1lbnRzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlNlxcXCI7XFxufVxcbi5mYS1mbGFzaDpiZWZvcmUsXFxuLmZhLWJvbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlN1xcXCI7XFxufVxcbi5mYS1zaXRlbWFwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZThcXFwiO1xcbn1cXG4uZmEtdW1icmVsbGE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlOVxcXCI7XFxufVxcbi5mYS1wYXN0ZTpiZWZvcmUsXFxuLmZhLWNsaXBib2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGVhXFxcIjtcXG59XFxuLmZhLWxpZ2h0YnVsYi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZWJcXFwiO1xcbn1cXG4uZmEtZXhjaGFuZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlY1xcXCI7XFxufVxcbi5mYS1jbG91ZC1kb3dubG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGVkXFxcIjtcXG59XFxuLmZhLWNsb3VkLXVwbG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGVlXFxcIjtcXG59XFxuLmZhLXVzZXItbWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBmMFxcXCI7XFxufVxcbi5mYS1zdGV0aG9zY29wZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGYxXFxcIjtcXG59XFxuLmZhLXN1aXRjYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZjJcXFwiO1xcbn1cXG4uZmEtYmVsbC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTJcXFwiO1xcbn1cXG4uZmEtY29mZmVlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZjRcXFwiO1xcbn1cXG4uZmEtY3V0bGVyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGY1XFxcIjtcXG59XFxuLmZhLWZpbGUtdGV4dC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZjZcXFwiO1xcbn1cXG4uZmEtYnVpbGRpbmctbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGY3XFxcIjtcXG59XFxuLmZhLWhvc3BpdGFsLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBmOFxcXCI7XFxufVxcbi5mYS1hbWJ1bGFuY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBmOVxcXCI7XFxufVxcbi5mYS1tZWRraXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBmYVxcXCI7XFxufVxcbi5mYS1maWdodGVyLWpldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGZiXFxcIjtcXG59XFxuLmZhLWJlZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBmY1xcXCI7XFxufVxcbi5mYS1oLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGZkXFxcIjtcXG59XFxuLmZhLXBsdXMtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZmVcXFwiO1xcbn1cXG4uZmEtYW5nbGUtZG91YmxlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwMFxcXCI7XFxufVxcbi5mYS1hbmdsZS1kb3VibGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwMVxcXCI7XFxufVxcbi5mYS1hbmdsZS1kb3VibGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwMlxcXCI7XFxufVxcbi5mYS1hbmdsZS1kb3VibGUtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTAzXFxcIjtcXG59XFxuLmZhLWFuZ2xlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwNFxcXCI7XFxufVxcbi5mYS1hbmdsZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTA1XFxcIjtcXG59XFxuLmZhLWFuZ2xlLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMDZcXFwiO1xcbn1cXG4uZmEtYW5nbGUtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTA3XFxcIjtcXG59XFxuLmZhLWRlc2t0b3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwOFxcXCI7XFxufVxcbi5mYS1sYXB0b3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwOVxcXCI7XFxufVxcbi5mYS10YWJsZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwYVxcXCI7XFxufVxcbi5mYS1tb2JpbGUtcGhvbmU6YmVmb3JlLFxcbi5mYS1tb2JpbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwYlxcXCI7XFxufVxcbi5mYS1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTBjXFxcIjtcXG59XFxuLmZhLXF1b3RlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwZFxcXCI7XFxufVxcbi5mYS1xdW90ZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTBlXFxcIjtcXG59XFxuLmZhLXNwaW5uZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjExMFxcXCI7XFxufVxcbi5mYS1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjExMVxcXCI7XFxufVxcbi5mYS1tYWlsLXJlcGx5OmJlZm9yZSxcXG4uZmEtcmVwbHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjExMlxcXCI7XFxufVxcbi5mYS1naXRodWItYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMTNcXFwiO1xcbn1cXG4uZmEtZm9sZGVyLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjExNFxcXCI7XFxufVxcbi5mYS1mb2xkZXItb3Blbi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMTVcXFwiO1xcbn1cXG4uZmEtc21pbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTE4XFxcIjtcXG59XFxuLmZhLWZyb3duLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjExOVxcXCI7XFxufVxcbi5mYS1tZWgtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTFhXFxcIjtcXG59XFxuLmZhLWdhbWVwYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjExYlxcXCI7XFxufVxcbi5mYS1rZXlib2FyZC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMWNcXFwiO1xcbn1cXG4uZmEtZmxhZy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMWRcXFwiO1xcbn1cXG4uZmEtZmxhZy1jaGVja2VyZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjExZVxcXCI7XFxufVxcbi5mYS10ZXJtaW5hbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTIwXFxcIjtcXG59XFxuLmZhLWNvZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyMVxcXCI7XFxufVxcbi5mYS1tYWlsLXJlcGx5LWFsbDpiZWZvcmUsXFxuLmZhLXJlcGx5LWFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTIyXFxcIjtcXG59XFxuLmZhLXN0YXItaGFsZi1lbXB0eTpiZWZvcmUsXFxuLmZhLXN0YXItaGFsZi1mdWxsOmJlZm9yZSxcXG4uZmEtc3Rhci1oYWxmLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyM1xcXCI7XFxufVxcbi5mYS1sb2NhdGlvbi1hcnJvdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTI0XFxcIjtcXG59XFxuLmZhLWNyb3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyNVxcXCI7XFxufVxcbi5mYS1jb2RlLWZvcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyNlxcXCI7XFxufVxcbi5mYS11bmxpbms6YmVmb3JlLFxcbi5mYS1jaGFpbi1icm9rZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyN1xcXCI7XFxufVxcbi5mYS1xdWVzdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTI4XFxcIjtcXG59XFxuLmZhLWluZm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyOVxcXCI7XFxufVxcbi5mYS1leGNsYW1hdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTJhXFxcIjtcXG59XFxuLmZhLXN1cGVyc2NyaXB0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMmJcXFwiO1xcbn1cXG4uZmEtc3Vic2NyaXB0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMmNcXFwiO1xcbn1cXG4uZmEtZXJhc2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMmRcXFwiO1xcbn1cXG4uZmEtcHV6emxlLXBpZWNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMmVcXFwiO1xcbn1cXG4uZmEtbWljcm9waG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTMwXFxcIjtcXG59XFxuLmZhLW1pY3JvcGhvbmUtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzMVxcXCI7XFxufVxcbi5mYS1zaGllbGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzMlxcXCI7XFxufVxcbi5mYS1jYWxlbmRhci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMzNcXFwiO1xcbn1cXG4uZmEtZmlyZS1leHRpbmd1aXNoZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzNFxcXCI7XFxufVxcbi5mYS1yb2NrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzNVxcXCI7XFxufVxcbi5mYS1tYXhjZG46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzNlxcXCI7XFxufVxcbi5mYS1jaGV2cm9uLWNpcmNsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMzdcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi1jaXJjbGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzOFxcXCI7XFxufVxcbi5mYS1jaGV2cm9uLWNpcmNsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTM5XFxcIjtcXG59XFxuLmZhLWNoZXZyb24tY2lyY2xlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzYVxcXCI7XFxufVxcbi5mYS1odG1sNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTNiXFxcIjtcXG59XFxuLmZhLWNzczM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzY1xcXCI7XFxufVxcbi5mYS1hbmNob3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzZFxcXCI7XFxufVxcbi5mYS11bmxvY2stYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxM2VcXFwiO1xcbn1cXG4uZmEtYnVsbHNleWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE0MFxcXCI7XFxufVxcbi5mYS1lbGxpcHNpcy1oOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNDFcXFwiO1xcbn1cXG4uZmEtZWxsaXBzaXMtdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTQyXFxcIjtcXG59XFxuLmZhLXJzcy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE0M1xcXCI7XFxufVxcbi5mYS1wbGF5LWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTQ0XFxcIjtcXG59XFxuLmZhLXRpY2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTQ1XFxcIjtcXG59XFxuLmZhLW1pbnVzLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTQ2XFxcIjtcXG59XFxuLmZhLW1pbnVzLXNxdWFyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNDdcXFwiO1xcbn1cXG4uZmEtbGV2ZWwtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE0OFxcXCI7XFxufVxcbi5mYS1sZXZlbC1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNDlcXFwiO1xcbn1cXG4uZmEtY2hlY2stc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNGFcXFwiO1xcbn1cXG4uZmEtcGVuY2lsLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTRiXFxcIjtcXG59XFxuLmZhLWV4dGVybmFsLWxpbmstc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNGNcXFwiO1xcbn1cXG4uZmEtc2hhcmUtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNGRcXFwiO1xcbn1cXG4uZmEtY29tcGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTRlXFxcIjtcXG59XFxuLmZhLXRvZ2dsZS1kb3duOmJlZm9yZSxcXG4uZmEtY2FyZXQtc3F1YXJlLW8tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTUwXFxcIjtcXG59XFxuLmZhLXRvZ2dsZS11cDpiZWZvcmUsXFxuLmZhLWNhcmV0LXNxdWFyZS1vLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNTFcXFwiO1xcbn1cXG4uZmEtdG9nZ2xlLXJpZ2h0OmJlZm9yZSxcXG4uZmEtY2FyZXQtc3F1YXJlLW8tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1MlxcXCI7XFxufVxcbi5mYS1ldXJvOmJlZm9yZSxcXG4uZmEtZXVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNTNcXFwiO1xcbn1cXG4uZmEtZ2JwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNTRcXFwiO1xcbn1cXG4uZmEtZG9sbGFyOmJlZm9yZSxcXG4uZmEtdXNkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNTVcXFwiO1xcbn1cXG4uZmEtcnVwZWU6YmVmb3JlLFxcbi5mYS1pbnI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1NlxcXCI7XFxufVxcbi5mYS1jbnk6YmVmb3JlLFxcbi5mYS1ybWI6YmVmb3JlLFxcbi5mYS15ZW46YmVmb3JlLFxcbi5mYS1qcHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1N1xcXCI7XFxufVxcbi5mYS1ydWJsZTpiZWZvcmUsXFxuLmZhLXJvdWJsZTpiZWZvcmUsXFxuLmZhLXJ1YjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTU4XFxcIjtcXG59XFxuLmZhLXdvbjpiZWZvcmUsXFxuLmZhLWtydzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTU5XFxcIjtcXG59XFxuLmZhLWJpdGNvaW46YmVmb3JlLFxcbi5mYS1idGM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1YVxcXCI7XFxufVxcbi5mYS1maWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNWJcXFwiO1xcbn1cXG4uZmEtZmlsZS10ZXh0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNWNcXFwiO1xcbn1cXG4uZmEtc29ydC1hbHBoYS1hc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1ZFxcXCI7XFxufVxcbi5mYS1zb3J0LWFscGhhLWRlc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1ZVxcXCI7XFxufVxcbi5mYS1zb3J0LWFtb3VudC1hc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2MFxcXCI7XFxufVxcbi5mYS1zb3J0LWFtb3VudC1kZXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNjFcXFwiO1xcbn1cXG4uZmEtc29ydC1udW1lcmljLWFzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTYyXFxcIjtcXG59XFxuLmZhLXNvcnQtbnVtZXJpYy1kZXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNjNcXFwiO1xcbn1cXG4uZmEtdGh1bWJzLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNjRcXFwiO1xcbn1cXG4uZmEtdGh1bWJzLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2NVxcXCI7XFxufVxcbi5mYS15b3V0dWJlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTY2XFxcIjtcXG59XFxuLmZhLXlvdXR1YmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2N1xcXCI7XFxufVxcbi5mYS14aW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNjhcXFwiO1xcbn1cXG4uZmEteGluZy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2OVxcXCI7XFxufVxcbi5mYS15b3V0dWJlLXBsYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2YVxcXCI7XFxufVxcbi5mYS1kcm9wYm94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNmJcXFwiO1xcbn1cXG4uZmEtc3RhY2stb3ZlcmZsb3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2Y1xcXCI7XFxufVxcbi5mYS1pbnN0YWdyYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2ZFxcXCI7XFxufVxcbi5mYS1mbGlja3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2ZVxcXCI7XFxufVxcbi5mYS1hZG46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3MFxcXCI7XFxufVxcbi5mYS1iaXRidWNrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3MVxcXCI7XFxufVxcbi5mYS1iaXRidWNrZXQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNzJcXFwiO1xcbn1cXG4uZmEtdHVtYmxyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNzNcXFwiO1xcbn1cXG4uZmEtdHVtYmxyLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTc0XFxcIjtcXG59XFxuLmZhLWxvbmctYXJyb3ctZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTc1XFxcIjtcXG59XFxuLmZhLWxvbmctYXJyb3ctdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3NlxcXCI7XFxufVxcbi5mYS1sb25nLWFycm93LWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3N1xcXCI7XFxufVxcbi5mYS1sb25nLWFycm93LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNzhcXFwiO1xcbn1cXG4uZmEtYXBwbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3OVxcXCI7XFxufVxcbi5mYS13aW5kb3dzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxN2FcXFwiO1xcbn1cXG4uZmEtYW5kcm9pZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTdiXFxcIjtcXG59XFxuLmZhLWxpbnV4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxN2NcXFwiO1xcbn1cXG4uZmEtZHJpYmJibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3ZFxcXCI7XFxufVxcbi5mYS1za3lwZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTdlXFxcIjtcXG59XFxuLmZhLWZvdXJzcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4MFxcXCI7XFxufVxcbi5mYS10cmVsbG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4MVxcXCI7XFxufVxcbi5mYS1mZW1hbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4MlxcXCI7XFxufVxcbi5mYS1tYWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODNcXFwiO1xcbn1cXG4uZmEtZ2l0dGlwOmJlZm9yZSxcXG4uZmEtZ3JhdGlwYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4NFxcXCI7XFxufVxcbi5mYS1zdW4tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTg1XFxcIjtcXG59XFxuLmZhLW1vb24tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTg2XFxcIjtcXG59XFxuLmZhLWFyY2hpdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4N1xcXCI7XFxufVxcbi5mYS1idWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4OFxcXCI7XFxufVxcbi5mYS12azpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTg5XFxcIjtcXG59XFxuLmZhLXdlaWJvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOGFcXFwiO1xcbn1cXG4uZmEtcmVucmVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOGJcXFwiO1xcbn1cXG4uZmEtcGFnZWxpbmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOGNcXFwiO1xcbn1cXG4uZmEtc3RhY2stZXhjaGFuZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4ZFxcXCI7XFxufVxcbi5mYS1hcnJvdy1jaXJjbGUtby1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMThlXFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS1vLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5MFxcXCI7XFxufVxcbi5mYS10b2dnbGUtbGVmdDpiZWZvcmUsXFxuLmZhLWNhcmV0LXNxdWFyZS1vLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5MVxcXCI7XFxufVxcbi5mYS1kb3QtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5MlxcXCI7XFxufVxcbi5mYS13aGVlbGNoYWlyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOTNcXFwiO1xcbn1cXG4uZmEtdmltZW8tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOTRcXFwiO1xcbn1cXG4uZmEtdHVya2lzaC1saXJhOmJlZm9yZSxcXG4uZmEtdHJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOTVcXFwiO1xcbn1cXG4uZmEtcGx1cy1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTk2XFxcIjtcXG59XFxuLmZhLXNwYWNlLXNodXR0bGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5N1xcXCI7XFxufVxcbi5mYS1zbGFjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTk4XFxcIjtcXG59XFxuLmZhLWVudmVsb3BlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTk5XFxcIjtcXG59XFxuLmZhLXdvcmRwcmVzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTlhXFxcIjtcXG59XFxuLmZhLW9wZW5pZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTliXFxcIjtcXG59XFxuLmZhLWluc3RpdHV0aW9uOmJlZm9yZSxcXG4uZmEtYmFuazpiZWZvcmUsXFxuLmZhLXVuaXZlcnNpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5Y1xcXCI7XFxufVxcbi5mYS1tb3J0YXItYm9hcmQ6YmVmb3JlLFxcbi5mYS1ncmFkdWF0aW9uLWNhcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTlkXFxcIjtcXG59XFxuLmZhLXlhaG9vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOWVcXFwiO1xcbn1cXG4uZmEtZ29vZ2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYTBcXFwiO1xcbn1cXG4uZmEtcmVkZGl0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYTFcXFwiO1xcbn1cXG4uZmEtcmVkZGl0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWEyXFxcIjtcXG59XFxuLmZhLXN0dW1ibGV1cG9uLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWEzXFxcIjtcXG59XFxuLmZhLXN0dW1ibGV1cG9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYTRcXFwiO1xcbn1cXG4uZmEtZGVsaWNpb3VzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYTVcXFwiO1xcbn1cXG4uZmEtZGlnZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWE2XFxcIjtcXG59XFxuLmZhLXBpZWQtcGlwZXItcHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFhN1xcXCI7XFxufVxcbi5mYS1waWVkLXBpcGVyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWE4XFxcIjtcXG59XFxuLmZhLWRydXBhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWE5XFxcIjtcXG59XFxuLmZhLWpvb21sYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWFhXFxcIjtcXG59XFxuLmZhLWxhbmd1YWdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYWJcXFwiO1xcbn1cXG4uZmEtZmF4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYWNcXFwiO1xcbn1cXG4uZmEtYnVpbGRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFhZFxcXCI7XFxufVxcbi5mYS1jaGlsZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWFlXFxcIjtcXG59XFxuLmZhLXBhdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWIwXFxcIjtcXG59XFxuLmZhLXNwb29uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYjFcXFwiO1xcbn1cXG4uZmEtY3ViZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWIyXFxcIjtcXG59XFxuLmZhLWN1YmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYjNcXFwiO1xcbn1cXG4uZmEtYmVoYW5jZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWI0XFxcIjtcXG59XFxuLmZhLWJlaGFuY2Utc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYjVcXFwiO1xcbn1cXG4uZmEtc3RlYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiNlxcXCI7XFxufVxcbi5mYS1zdGVhbS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiN1xcXCI7XFxufVxcbi5mYS1yZWN5Y2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYjhcXFwiO1xcbn1cXG4uZmEtYXV0b21vYmlsZTpiZWZvcmUsXFxuLmZhLWNhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWI5XFxcIjtcXG59XFxuLmZhLWNhYjpiZWZvcmUsXFxuLmZhLXRheGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiYVxcXCI7XFxufVxcbi5mYS10cmVlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYmJcXFwiO1xcbn1cXG4uZmEtc3BvdGlmeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWJjXFxcIjtcXG59XFxuLmZhLWRldmlhbnRhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiZFxcXCI7XFxufVxcbi5mYS1zb3VuZGNsb3VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYmVcXFwiO1xcbn1cXG4uZmEtZGF0YWJhc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFjMFxcXCI7XFxufVxcbi5mYS1maWxlLXBkZi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzFcXFwiO1xcbn1cXG4uZmEtZmlsZS13b3JkLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFjMlxcXCI7XFxufVxcbi5mYS1maWxlLWV4Y2VsLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFjM1xcXCI7XFxufVxcbi5mYS1maWxlLXBvd2VycG9pbnQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWM0XFxcIjtcXG59XFxuLmZhLWZpbGUtcGhvdG8tbzpiZWZvcmUsXFxuLmZhLWZpbGUtcGljdHVyZS1vOmJlZm9yZSxcXG4uZmEtZmlsZS1pbWFnZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzVcXFwiO1xcbn1cXG4uZmEtZmlsZS16aXAtbzpiZWZvcmUsXFxuLmZhLWZpbGUtYXJjaGl2ZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzZcXFwiO1xcbn1cXG4uZmEtZmlsZS1zb3VuZC1vOmJlZm9yZSxcXG4uZmEtZmlsZS1hdWRpby1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzdcXFwiO1xcbn1cXG4uZmEtZmlsZS1tb3ZpZS1vOmJlZm9yZSxcXG4uZmEtZmlsZS12aWRlby1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzhcXFwiO1xcbn1cXG4uZmEtZmlsZS1jb2RlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFjOVxcXCI7XFxufVxcbi5mYS12aW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxY2FcXFwiO1xcbn1cXG4uZmEtY29kZXBlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWNiXFxcIjtcXG59XFxuLmZhLWpzZmlkZGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxY2NcXFwiO1xcbn1cXG4uZmEtbGlmZS1ib3V5OmJlZm9yZSxcXG4uZmEtbGlmZS1idW95OmJlZm9yZSxcXG4uZmEtbGlmZS1zYXZlcjpiZWZvcmUsXFxuLmZhLXN1cHBvcnQ6YmVmb3JlLFxcbi5mYS1saWZlLXJpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFjZFxcXCI7XFxufVxcbi5mYS1jaXJjbGUtby1ub3RjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWNlXFxcIjtcXG59XFxuLmZhLXJhOmJlZm9yZSxcXG4uZmEtcmVzaXN0YW5jZTpiZWZvcmUsXFxuLmZhLXJlYmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZDBcXFwiO1xcbn1cXG4uZmEtZ2U6YmVmb3JlLFxcbi5mYS1lbXBpcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFkMVxcXCI7XFxufVxcbi5mYS1naXQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZDJcXFwiO1xcbn1cXG4uZmEtZ2l0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZDNcXFwiO1xcbn1cXG4uZmEteS1jb21iaW5hdG9yLXNxdWFyZTpiZWZvcmUsXFxuLmZhLXljLXNxdWFyZTpiZWZvcmUsXFxuLmZhLWhhY2tlci1uZXdzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZDRcXFwiO1xcbn1cXG4uZmEtdGVuY2VudC13ZWlibzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWQ1XFxcIjtcXG59XFxuLmZhLXFxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZDZcXFwiO1xcbn1cXG4uZmEtd2VjaGF0OmJlZm9yZSxcXG4uZmEtd2VpeGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZDdcXFwiO1xcbn1cXG4uZmEtc2VuZDpiZWZvcmUsXFxuLmZhLXBhcGVyLXBsYW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZDhcXFwiO1xcbn1cXG4uZmEtc2VuZC1vOmJlZm9yZSxcXG4uZmEtcGFwZXItcGxhbmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWQ5XFxcIjtcXG59XFxuLmZhLWhpc3Rvcnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFkYVxcXCI7XFxufVxcbi5mYS1jaXJjbGUtdGhpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWRiXFxcIjtcXG59XFxuLmZhLWhlYWRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWRjXFxcIjtcXG59XFxuLmZhLXBhcmFncmFwaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWRkXFxcIjtcXG59XFxuLmZhLXNsaWRlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFkZVxcXCI7XFxufVxcbi5mYS1zaGFyZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlMFxcXCI7XFxufVxcbi5mYS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZTFcXFwiO1xcbn1cXG4uZmEtYm9tYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWUyXFxcIjtcXG59XFxuLmZhLXNvY2Nlci1iYWxsLW86YmVmb3JlLFxcbi5mYS1mdXRib2wtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWUzXFxcIjtcXG59XFxuLmZhLXR0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWU0XFxcIjtcXG59XFxuLmZhLWJpbm9jdWxhcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlNVxcXCI7XFxufVxcbi5mYS1wbHVnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZTZcXFwiO1xcbn1cXG4uZmEtc2xpZGVzaGFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWU3XFxcIjtcXG59XFxuLmZhLXR3aXRjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWU4XFxcIjtcXG59XFxuLmZhLXllbHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlOVxcXCI7XFxufVxcbi5mYS1uZXdzcGFwZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWVhXFxcIjtcXG59XFxuLmZhLXdpZmk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlYlxcXCI7XFxufVxcbi5mYS1jYWxjdWxhdG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZWNcXFwiO1xcbn1cXG4uZmEtcGF5cGFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZWRcXFwiO1xcbn1cXG4uZmEtZ29vZ2xlLXdhbGxldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWVlXFxcIjtcXG59XFxuLmZhLWNjLXZpc2E6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmMFxcXCI7XFxufVxcbi5mYS1jYy1tYXN0ZXJjYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZjFcXFwiO1xcbn1cXG4uZmEtY2MtZGlzY292ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmMlxcXCI7XFxufVxcbi5mYS1jYy1hbWV4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZjNcXFwiO1xcbn1cXG4uZmEtY2MtcGF5cGFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZjRcXFwiO1xcbn1cXG4uZmEtY2Mtc3RyaXBlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZjVcXFwiO1xcbn1cXG4uZmEtYmVsbC1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWY2XFxcIjtcXG59XFxuLmZhLWJlbGwtc2xhc2gtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWY3XFxcIjtcXG59XFxuLmZhLXRyYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZjhcXFwiO1xcbn1cXG4uZmEtY29weXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZjlcXFwiO1xcbn1cXG4uZmEtYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmYVxcXCI7XFxufVxcbi5mYS1leWVkcm9wcGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZmJcXFwiO1xcbn1cXG4uZmEtcGFpbnQtYnJ1c2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmY1xcXCI7XFxufVxcbi5mYS1iaXJ0aGRheS1jYWtlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZmRcXFwiO1xcbn1cXG4uZmEtYXJlYS1jaGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWZlXFxcIjtcXG59XFxuLmZhLXBpZS1jaGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjAwXFxcIjtcXG59XFxuLmZhLWxpbmUtY2hhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIwMVxcXCI7XFxufVxcbi5mYS1sYXN0Zm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIwMlxcXCI7XFxufVxcbi5mYS1sYXN0Zm0tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMDNcXFwiO1xcbn1cXG4uZmEtdG9nZ2xlLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjA0XFxcIjtcXG59XFxuLmZhLXRvZ2dsZS1vbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjA1XFxcIjtcXG59XFxuLmZhLWJpY3ljbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIwNlxcXCI7XFxufVxcbi5mYS1idXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIwN1xcXCI7XFxufVxcbi5mYS1pb3hob3N0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMDhcXFwiO1xcbn1cXG4uZmEtYW5nZWxsaXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMDlcXFwiO1xcbn1cXG4uZmEtY2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIwYVxcXCI7XFxufVxcbi5mYS1zaGVrZWw6YmVmb3JlLFxcbi5mYS1zaGVxZWw6YmVmb3JlLFxcbi5mYS1pbHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIwYlxcXCI7XFxufVxcbi5mYS1tZWFucGF0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjBjXFxcIjtcXG59XFxuLmZhLWJ1eXNlbGxhZHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIwZFxcXCI7XFxufVxcbi5mYS1jb25uZWN0ZGV2ZWxvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjBlXFxcIjtcXG59XFxuLmZhLWRhc2hjdWJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMTBcXFwiO1xcbn1cXG4uZmEtZm9ydW1iZWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxMVxcXCI7XFxufVxcbi5mYS1sZWFucHViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMTJcXFwiO1xcbn1cXG4uZmEtc2VsbHN5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMTNcXFwiO1xcbn1cXG4uZmEtc2hpcnRzaW5idWxrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMTRcXFwiO1xcbn1cXG4uZmEtc2ltcGx5YnVpbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxNVxcXCI7XFxufVxcbi5mYS1za3lhdGxhczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjE2XFxcIjtcXG59XFxuLmZhLWNhcnQtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjE3XFxcIjtcXG59XFxuLmZhLWNhcnQtYXJyb3ctZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjE4XFxcIjtcXG59XFxuLmZhLWRpYW1vbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxOVxcXCI7XFxufVxcbi5mYS1zaGlwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMWFcXFwiO1xcbn1cXG4uZmEtdXNlci1zZWNyZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxYlxcXCI7XFxufVxcbi5mYS1tb3RvcmN5Y2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMWNcXFwiO1xcbn1cXG4uZmEtc3RyZWV0LXZpZXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxZFxcXCI7XFxufVxcbi5mYS1oZWFydGJlYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxZVxcXCI7XFxufVxcbi5mYS12ZW51czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjIxXFxcIjtcXG59XFxuLmZhLW1hcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIyMlxcXCI7XFxufVxcbi5mYS1tZXJjdXJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMjNcXFwiO1xcbn1cXG4uZmEtaW50ZXJzZXg6YmVmb3JlLFxcbi5mYS10cmFuc2dlbmRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjI0XFxcIjtcXG59XFxuLmZhLXRyYW5zZ2VuZGVyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjI1XFxcIjtcXG59XFxuLmZhLXZlbnVzLWRvdWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjI2XFxcIjtcXG59XFxuLmZhLW1hcnMtZG91YmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMjdcXFwiO1xcbn1cXG4uZmEtdmVudXMtbWFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjI4XFxcIjtcXG59XFxuLmZhLW1hcnMtc3Ryb2tlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMjlcXFwiO1xcbn1cXG4uZmEtbWFycy1zdHJva2UtdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjJhXFxcIjtcXG59XFxuLmZhLW1hcnMtc3Ryb2tlLWg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIyYlxcXCI7XFxufVxcbi5mYS1uZXV0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIyY1xcXCI7XFxufVxcbi5mYS1nZW5kZXJsZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMmRcXFwiO1xcbn1cXG4uZmEtZmFjZWJvb2stb2ZmaWNpYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzMFxcXCI7XFxufVxcbi5mYS1waW50ZXJlc3QtcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjMxXFxcIjtcXG59XFxuLmZhLXdoYXRzYXBwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMzJcXFwiO1xcbn1cXG4uZmEtc2VydmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMzNcXFwiO1xcbn1cXG4uZmEtdXNlci1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMzRcXFwiO1xcbn1cXG4uZmEtdXNlci10aW1lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjM1XFxcIjtcXG59XFxuLmZhLWhvdGVsOmJlZm9yZSxcXG4uZmEtYmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMzZcXFwiO1xcbn1cXG4uZmEtdmlhY29pbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjM3XFxcIjtcXG59XFxuLmZhLXRyYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMzhcXFwiO1xcbn1cXG4uZmEtc3Vid2F5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMzlcXFwiO1xcbn1cXG4uZmEtbWVkaXVtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyM2FcXFwiO1xcbn1cXG4uZmEteWM6YmVmb3JlLFxcbi5mYS15LWNvbWJpbmF0b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzYlxcXCI7XFxufVxcbi5mYS1vcHRpbi1tb25zdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyM2NcXFwiO1xcbn1cXG4uZmEtb3BlbmNhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzZFxcXCI7XFxufVxcbi5mYS1leHBlZGl0ZWRzc2w6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzZVxcXCI7XFxufVxcbi5mYS1iYXR0ZXJ5LTQ6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5OmJlZm9yZSxcXG4uZmEtYmF0dGVyeS1mdWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNDBcXFwiO1xcbn1cXG4uZmEtYmF0dGVyeS0zOmJlZm9yZSxcXG4uZmEtYmF0dGVyeS10aHJlZS1xdWFydGVyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjQxXFxcIjtcXG59XFxuLmZhLWJhdHRlcnktMjpiZWZvcmUsXFxuLmZhLWJhdHRlcnktaGFsZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjQyXFxcIjtcXG59XFxuLmZhLWJhdHRlcnktMTpiZWZvcmUsXFxuLmZhLWJhdHRlcnktcXVhcnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjQzXFxcIjtcXG59XFxuLmZhLWJhdHRlcnktMDpiZWZvcmUsXFxuLmZhLWJhdHRlcnktZW1wdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0NFxcXCI7XFxufVxcbi5mYS1tb3VzZS1wb2ludGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNDVcXFwiO1xcbn1cXG4uZmEtaS1jdXJzb3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0NlxcXCI7XFxufVxcbi5mYS1vYmplY3QtZ3JvdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0N1xcXCI7XFxufVxcbi5mYS1vYmplY3QtdW5ncm91cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjQ4XFxcIjtcXG59XFxuLmZhLXN0aWNreS1ub3RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNDlcXFwiO1xcbn1cXG4uZmEtc3RpY2t5LW5vdGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjRhXFxcIjtcXG59XFxuLmZhLWNjLWpjYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjRiXFxcIjtcXG59XFxuLmZhLWNjLWRpbmVycy1jbHViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNGNcXFwiO1xcbn1cXG4uZmEtY2xvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0ZFxcXCI7XFxufVxcbi5mYS1iYWxhbmNlLXNjYWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNGVcXFwiO1xcbn1cXG4uZmEtaG91cmdsYXNzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1MFxcXCI7XFxufVxcbi5mYS1ob3VyZ2xhc3MtMTpiZWZvcmUsXFxuLmZhLWhvdXJnbGFzcy1zdGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjUxXFxcIjtcXG59XFxuLmZhLWhvdXJnbGFzcy0yOmJlZm9yZSxcXG4uZmEtaG91cmdsYXNzLWhhbGY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1MlxcXCI7XFxufVxcbi5mYS1ob3VyZ2xhc3MtMzpiZWZvcmUsXFxuLmZhLWhvdXJnbGFzcy1lbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1M1xcXCI7XFxufVxcbi5mYS1ob3VyZ2xhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1NFxcXCI7XFxufVxcbi5mYS1oYW5kLWdyYWItbzpiZWZvcmUsXFxuLmZhLWhhbmQtcm9jay1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNTVcXFwiO1xcbn1cXG4uZmEtaGFuZC1zdG9wLW86YmVmb3JlLFxcbi5mYS1oYW5kLXBhcGVyLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1NlxcXCI7XFxufVxcbi5mYS1oYW5kLXNjaXNzb3JzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1N1xcXCI7XFxufVxcbi5mYS1oYW5kLWxpemFyZC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNThcXFwiO1xcbn1cXG4uZmEtaGFuZC1zcG9jay1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNTlcXFwiO1xcbn1cXG4uZmEtaGFuZC1wb2ludGVyLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1YVxcXCI7XFxufVxcbi5mYS1oYW5kLXBlYWNlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1YlxcXCI7XFxufVxcbi5mYS10cmFkZW1hcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1Y1xcXCI7XFxufVxcbi5mYS1yZWdpc3RlcmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNWRcXFwiO1xcbn1cXG4uZmEtY3JlYXRpdmUtY29tbW9uczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjVlXFxcIjtcXG59XFxuLmZhLWdnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNjBcXFwiO1xcbn1cXG4uZmEtZ2ctY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNjFcXFwiO1xcbn1cXG4uZmEtdHJpcGFkdmlzb3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2MlxcXCI7XFxufVxcbi5mYS1vZG5va2xhc3NuaWtpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNjNcXFwiO1xcbn1cXG4uZmEtb2Rub2tsYXNzbmlraS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2NFxcXCI7XFxufVxcbi5mYS1nZXQtcG9ja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNjVcXFwiO1xcbn1cXG4uZmEtd2lraXBlZGlhLXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2NlxcXCI7XFxufVxcbi5mYS1zYWZhcmk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2N1xcXCI7XFxufVxcbi5mYS1jaHJvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2OFxcXCI7XFxufVxcbi5mYS1maXJlZm94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNjlcXFwiO1xcbn1cXG4uZmEtb3BlcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2YVxcXCI7XFxufVxcbi5mYS1pbnRlcm5ldC1leHBsb3JlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjZiXFxcIjtcXG59XFxuLmZhLXR2OmJlZm9yZSxcXG4uZmEtdGVsZXZpc2lvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjZjXFxcIjtcXG59XFxuLmZhLWNvbnRhbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjZkXFxcIjtcXG59XFxuLmZhLTUwMHB4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNmVcXFwiO1xcbn1cXG4uZmEtYW1hem9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNzBcXFwiO1xcbn1cXG4uZmEtY2FsZW5kYXItcGx1cy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNzFcXFwiO1xcbn1cXG4uZmEtY2FsZW5kYXItbWludXMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjcyXFxcIjtcXG59XFxuLmZhLWNhbGVuZGFyLXRpbWVzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI3M1xcXCI7XFxufVxcbi5mYS1jYWxlbmRhci1jaGVjay1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNzRcXFwiO1xcbn1cXG4uZmEtaW5kdXN0cnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI3NVxcXCI7XFxufVxcbi5mYS1tYXAtcGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNzZcXFwiO1xcbn1cXG4uZmEtbWFwLXNpZ25zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNzdcXFwiO1xcbn1cXG4uZmEtbWFwLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI3OFxcXCI7XFxufVxcbi5mYS1tYXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI3OVxcXCI7XFxufVxcbi5mYS1jb21tZW50aW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyN2FcXFwiO1xcbn1cXG4uZmEtY29tbWVudGluZy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyN2JcXFwiO1xcbn1cXG4uZmEtaG91eno6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI3Y1xcXCI7XFxufVxcbi5mYS12aW1lbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjdkXFxcIjtcXG59XFxuLmZhLWJsYWNrLXRpZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjdlXFxcIjtcXG59XFxuLmZhLWZvbnRpY29uczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjgwXFxcIjtcXG59XFxuLmZhLXJlZGRpdC1hbGllbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjgxXFxcIjtcXG59XFxuLmZhLWVkZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4MlxcXCI7XFxufVxcbi5mYS1jcmVkaXQtY2FyZC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4M1xcXCI7XFxufVxcbi5mYS1jb2RpZXBpZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjg0XFxcIjtcXG59XFxuLmZhLW1vZHg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4NVxcXCI7XFxufVxcbi5mYS1mb3J0LWF3ZXNvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4NlxcXCI7XFxufVxcbi5mYS11c2I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4N1xcXCI7XFxufVxcbi5mYS1wcm9kdWN0LWh1bnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4OFxcXCI7XFxufVxcbi5mYS1taXhjbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjg5XFxcIjtcXG59XFxuLmZhLXNjcmliZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjhhXFxcIjtcXG59XFxuLmZhLXBhdXNlLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjhiXFxcIjtcXG59XFxuLmZhLXBhdXNlLWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOGNcXFwiO1xcbn1cXG4uZmEtc3RvcC1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4ZFxcXCI7XFxufVxcbi5mYS1zdG9wLWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOGVcXFwiO1xcbn1cXG4uZmEtc2hvcHBpbmctYmFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOTBcXFwiO1xcbn1cXG4uZmEtc2hvcHBpbmctYmFza2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOTFcXFwiO1xcbn1cXG4uZmEtaGFzaHRhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjkyXFxcIjtcXG59XFxuLmZhLWJsdWV0b290aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjkzXFxcIjtcXG59XFxuLmZhLWJsdWV0b290aC1iOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOTRcXFwiO1xcbn1cXG4uZmEtcGVyY2VudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjk1XFxcIjtcXG59XFxuLmZhLWdpdGxhYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjk2XFxcIjtcXG59XFxuLmZhLXdwYmVnaW5uZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI5N1xcXCI7XFxufVxcbi5mYS13cGZvcm1zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOThcXFwiO1xcbn1cXG4uZmEtZW52aXJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOTlcXFwiO1xcbn1cXG4uZmEtdW5pdmVyc2FsLWFjY2VzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjlhXFxcIjtcXG59XFxuLmZhLXdoZWVsY2hhaXItYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOWJcXFwiO1xcbn1cXG4uZmEtcXVlc3Rpb24tY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI5Y1xcXCI7XFxufVxcbi5mYS1ibGluZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjlkXFxcIjtcXG59XFxuLmZhLWF1ZGlvLWRlc2NyaXB0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOWVcXFwiO1xcbn1cXG4uZmEtdm9sdW1lLWNvbnRyb2wtcGhvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhMFxcXCI7XFxufVxcbi5mYS1icmFpbGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYTFcXFwiO1xcbn1cXG4uZmEtYXNzaXN0aXZlLWxpc3RlbmluZy1zeXN0ZW1zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYTJcXFwiO1xcbn1cXG4uZmEtYXNsLWludGVycHJldGluZzpiZWZvcmUsXFxuLmZhLWFtZXJpY2FuLXNpZ24tbGFuZ3VhZ2UtaW50ZXJwcmV0aW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYTNcXFwiO1xcbn1cXG4uZmEtZGVhZm5lc3M6YmVmb3JlLFxcbi5mYS1oYXJkLW9mLWhlYXJpbmc6YmVmb3JlLFxcbi5mYS1kZWFmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYTRcXFwiO1xcbn1cXG4uZmEtZ2xpZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhNVxcXCI7XFxufVxcbi5mYS1nbGlkZS1nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYTZcXFwiO1xcbn1cXG4uZmEtc2lnbmluZzpiZWZvcmUsXFxuLmZhLXNpZ24tbGFuZ3VhZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhN1xcXCI7XFxufVxcbi5mYS1sb3ctdmlzaW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYThcXFwiO1xcbn1cXG4uZmEtdmlhZGVvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYTlcXFwiO1xcbn1cXG4uZmEtdmlhZGVvLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmFhXFxcIjtcXG59XFxuLmZhLXNuYXBjaGF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYWJcXFwiO1xcbn1cXG4uZmEtc25hcGNoYXQtZ2hvc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhY1xcXCI7XFxufVxcbi5mYS1zbmFwY2hhdC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhZFxcXCI7XFxufVxcbi5mYS1waWVkLXBpcGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYWVcXFwiO1xcbn1cXG4uZmEtZmlyc3Qtb3JkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJiMFxcXCI7XFxufVxcbi5mYS15b2FzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmIxXFxcIjtcXG59XFxuLmZhLXRoZW1laXNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmIyXFxcIjtcXG59XFxuLmZhLWdvb2dsZS1wbHVzLWNpcmNsZTpiZWZvcmUsXFxuLmZhLWdvb2dsZS1wbHVzLW9mZmljaWFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYjNcXFwiO1xcbn1cXG4uZmEtZmE6YmVmb3JlLFxcbi5mYS1mb250LWF3ZXNvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJiNFxcXCI7XFxufVxcbi5mYS1oYW5kc2hha2UtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmI1XFxcIjtcXG59XFxuLmZhLWVudmVsb3BlLW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJiNlxcXCI7XFxufVxcbi5mYS1lbnZlbG9wZS1vcGVuLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJiN1xcXCI7XFxufVxcbi5mYS1saW5vZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJiOFxcXCI7XFxufVxcbi5mYS1hZGRyZXNzLWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJiOVxcXCI7XFxufVxcbi5mYS1hZGRyZXNzLWJvb2stbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmJhXFxcIjtcXG59XFxuLmZhLXZjYXJkOmJlZm9yZSxcXG4uZmEtYWRkcmVzcy1jYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYmJcXFwiO1xcbn1cXG4uZmEtdmNhcmQtbzpiZWZvcmUsXFxuLmZhLWFkZHJlc3MtY2FyZC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYmNcXFwiO1xcbn1cXG4uZmEtdXNlci1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJiZFxcXCI7XFxufVxcbi5mYS11c2VyLWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYmVcXFwiO1xcbn1cXG4uZmEtdXNlci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYzBcXFwiO1xcbn1cXG4uZmEtaWQtYmFkZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJjMVxcXCI7XFxufVxcbi5mYS1kcml2ZXJzLWxpY2Vuc2U6YmVmb3JlLFxcbi5mYS1pZC1jYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYzJcXFwiO1xcbn1cXG4uZmEtZHJpdmVycy1saWNlbnNlLW86YmVmb3JlLFxcbi5mYS1pZC1jYXJkLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJjM1xcXCI7XFxufVxcbi5mYS1xdW9yYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmM0XFxcIjtcXG59XFxuLmZhLWZyZWUtY29kZS1jYW1wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYzVcXFwiO1xcbn1cXG4uZmEtdGVsZWdyYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJjNlxcXCI7XFxufVxcbi5mYS10aGVybW9tZXRlci00OmJlZm9yZSxcXG4uZmEtdGhlcm1vbWV0ZXI6YmVmb3JlLFxcbi5mYS10aGVybW9tZXRlci1mdWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYzdcXFwiO1xcbn1cXG4uZmEtdGhlcm1vbWV0ZXItMzpiZWZvcmUsXFxuLmZhLXRoZXJtb21ldGVyLXRocmVlLXF1YXJ0ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYzhcXFwiO1xcbn1cXG4uZmEtdGhlcm1vbWV0ZXItMjpiZWZvcmUsXFxuLmZhLXRoZXJtb21ldGVyLWhhbGY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJjOVxcXCI7XFxufVxcbi5mYS10aGVybW9tZXRlci0xOmJlZm9yZSxcXG4uZmEtdGhlcm1vbWV0ZXItcXVhcnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmNhXFxcIjtcXG59XFxuLmZhLXRoZXJtb21ldGVyLTA6YmVmb3JlLFxcbi5mYS10aGVybW9tZXRlci1lbXB0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmNiXFxcIjtcXG59XFxuLmZhLXNob3dlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmNjXFxcIjtcXG59XFxuLmZhLWJhdGh0dWI6YmVmb3JlLFxcbi5mYS1zMTU6YmVmb3JlLFxcbi5mYS1iYXRoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyY2RcXFwiO1xcbn1cXG4uZmEtcG9kY2FzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmNlXFxcIjtcXG59XFxuLmZhLXdpbmRvdy1tYXhpbWl6ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmQwXFxcIjtcXG59XFxuLmZhLXdpbmRvdy1taW5pbWl6ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmQxXFxcIjtcXG59XFxuLmZhLXdpbmRvdy1yZXN0b3JlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZDJcXFwiO1xcbn1cXG4uZmEtdGltZXMtcmVjdGFuZ2xlOmJlZm9yZSxcXG4uZmEtd2luZG93LWNsb3NlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZDNcXFwiO1xcbn1cXG4uZmEtdGltZXMtcmVjdGFuZ2xlLW86YmVmb3JlLFxcbi5mYS13aW5kb3ctY2xvc2UtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmQ0XFxcIjtcXG59XFxuLmZhLWJhbmRjYW1wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZDVcXFwiO1xcbn1cXG4uZmEtZ3JhdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmQ2XFxcIjtcXG59XFxuLmZhLWV0c3k6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJkN1xcXCI7XFxufVxcbi5mYS1pbWRiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZDhcXFwiO1xcbn1cXG4uZmEtcmF2ZWxyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmQ5XFxcIjtcXG59XFxuLmZhLWVlcmNhc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJkYVxcXCI7XFxufVxcbi5mYS1taWNyb2NoaXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJkYlxcXCI7XFxufVxcbi5mYS1zbm93Zmxha2UtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmRjXFxcIjtcXG59XFxuLmZhLXN1cGVycG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZGRcXFwiO1xcbn1cXG4uZmEtd3BleHBsb3JlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmRlXFxcIjtcXG59XFxuLmZhLW1lZXR1cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmUwXFxcIjtcXG59XFxuLnNyLW9ubHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLFxcbi5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGNsaXA6IGF1dG87XFxufVxcblwiXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5jc3MiLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgQW5kcmV5IFBvcHAgPDhtYXlkYXlAZ21haWwuY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGRlc2MgPSBwYXJlbnQgPSB1bmRlZmluZWQ7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgSWNvbiA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoSWNvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSWNvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSWNvbik7XG5cbiAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihJY29uLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSWNvbiwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBDb21wb25lbnQgPSBfcHJvcHMuQ29tcG9uZW50O1xuICAgICAgdmFyIG5hbWUgPSBfcHJvcHMubmFtZTtcbiAgICAgIHZhciBzaXplID0gX3Byb3BzLnNpemU7XG4gICAgICB2YXIgcm90YXRlID0gX3Byb3BzLnJvdGF0ZTtcbiAgICAgIHZhciBmbGlwID0gX3Byb3BzLmZsaXA7XG4gICAgICB2YXIgc3BpbiA9IF9wcm9wcy5zcGluO1xuICAgICAgdmFyIGZpeGVkV2lkdGggPSBfcHJvcHMuZml4ZWRXaWR0aDtcbiAgICAgIHZhciBzdGFjayA9IF9wcm9wcy5zdGFjaztcbiAgICAgIHZhciBpbnZlcnNlID0gX3Byb3BzLmludmVyc2U7XG4gICAgICB2YXIgcHVsc2UgPSBfcHJvcHMucHVsc2U7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcblxuICAgICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydDb21wb25lbnQnLCAnbmFtZScsICdzaXplJywgJ3JvdGF0ZScsICdmbGlwJywgJ3NwaW4nLCAnZml4ZWRXaWR0aCcsICdzdGFjaycsICdpbnZlcnNlJywgJ3B1bHNlJywgJ2NsYXNzTmFtZSddKTtcblxuICAgICAgdmFyIGNsYXNzTmFtZXMgPSAnZmEgZmEtJyArIG5hbWU7XG4gICAgICBpZiAoc2l6ZSkge1xuICAgICAgICBjbGFzc05hbWVzID0gY2xhc3NOYW1lcyArICcgZmEtJyArIHNpemU7XG4gICAgICB9XG4gICAgICBpZiAocm90YXRlKSB7XG4gICAgICAgIGNsYXNzTmFtZXMgPSBjbGFzc05hbWVzICsgJyBmYS1yb3RhdGUtJyArIHJvdGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChmbGlwKSB7XG4gICAgICAgIGNsYXNzTmFtZXMgPSBjbGFzc05hbWVzICsgJyBmYS1mbGlwLScgKyBmbGlwO1xuICAgICAgfVxuICAgICAgaWYgKGZpeGVkV2lkdGgpIHtcbiAgICAgICAgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMgKyAnIGZhLWZ3JztcbiAgICAgIH1cbiAgICAgIGlmIChzcGluKSB7XG4gICAgICAgIGNsYXNzTmFtZXMgPSBjbGFzc05hbWVzICsgJyBmYS1zcGluJztcbiAgICAgIH1cbiAgICAgIGlmIChwdWxzZSkge1xuICAgICAgICBjbGFzc05hbWVzID0gY2xhc3NOYW1lcyArICcgZmEtcHVsc2UnO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhY2spIHtcbiAgICAgICAgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMgKyAnIGZhLXN0YWNrLScgKyBzdGFjaztcbiAgICAgIH1cbiAgICAgIGlmIChpbnZlcnNlKSB7XG4gICAgICAgIGNsYXNzTmFtZXMgPSBjbGFzc05hbWVzICsgJyBmYS1pbnZlcnNlJztcbiAgICAgIH1cblxuICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICBjbGFzc05hbWVzID0gY2xhc3NOYW1lcyArICcgJyArIGNsYXNzTmFtZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMgfSkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAncHJvcFR5cGVzJyxcbiAgICB2YWx1ZToge1xuICAgICAgbmFtZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGNsYXNzTmFtZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcsXG4gICAgICBzaXplOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9uZU9mKFsnbGcnLCAnMngnLCAnM3gnLCAnNHgnLCAnNXgnXSksXG4gICAgICByb3RhdGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub25lT2YoWyc0NScsICc5MCcsICcxMzUnLCAnMTgwJywgJzIyNScsICcyNzAnLCAnMzE1J10pLFxuICAgICAgZmxpcDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnXSksXG4gICAgICBmaXhlZFdpZHRoOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2wsXG4gICAgICBzcGluOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2wsXG4gICAgICBwdWxzZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuICAgICAgc3RhY2s6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub25lT2YoWycxeCcsICcyeCddKSxcbiAgICAgIGludmVyc2U6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbCxcbiAgICAgIENvbXBvbmVudDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vbmVPZlR5cGUoW19wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLCBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmNdKVxuICAgIH0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9LCB7XG4gICAga2V5OiAnZGVmYXVsdFByb3BzJyxcbiAgICB2YWx1ZToge1xuICAgICAgQ29tcG9uZW50OiAnc3BhbidcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfV0pO1xuXG4gIHJldHVybiBJY29uO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEljb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mYS9saWIvSWNvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBBbmRyZXkgUG9wcCA8OG1heWRheUBnbWFpbC5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBJY29uU3RhY2sgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEljb25TdGFjaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSWNvblN0YWNrKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJY29uU3RhY2spO1xuXG4gICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoSWNvblN0YWNrLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSWNvblN0YWNrLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgICB2YXIgc2l6ZSA9IF9wcm9wcy5zaXplO1xuICAgICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuXG4gICAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NsYXNzTmFtZScsICdzaXplJywgJ2NoaWxkcmVuJ10pO1xuXG4gICAgICB2YXIgY2xhc3NOYW1lcyA9IFsnZmEtc3RhY2snXTtcblxuICAgICAgaWYgKHNpemUpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdmYS0nICsgc2l6ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpY29uU3RhY2tDbGFzc05hbWUgPSBjbGFzc05hbWVzLmpvaW4oJyAnKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywgeyBjbGFzc05hbWU6IGljb25TdGFja0NsYXNzTmFtZSB9KSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdwcm9wVHlwZXMnLFxuICAgIHZhbHVlOiB7XG4gICAgICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLFxuICAgICAgc2l6ZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vbmVPZihbJ2xnJywgJzJ4JywgJzN4JywgJzR4JywgJzV4J10pLFxuICAgICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubm9kZS5pc1JlcXVpcmVkXG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH1dKTtcblxuICByZXR1cm4gSWNvblN0YWNrO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEljb25TdGFjaztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWZhL2xpYi9JY29uU3RhY2suanNcbi8vIG1vZHVsZSBpZCA9IDYyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgQW5kcmV5IFBvcHAgPDhtYXlkYXlAZ21haWwuY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxucmVxdWlyZSgnZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUuY3NzJyk7XG5cbnZhciBfSWNvbiA9IHJlcXVpcmUoJy4vSWNvbicpO1xuXG52YXIgX0ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSWNvbik7XG5cbnZhciBfSWNvblN0YWNrID0gcmVxdWlyZSgnLi9JY29uU3RhY2snKTtcblxudmFyIF9JY29uU3RhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSWNvblN0YWNrKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gX0ljb24yWydkZWZhdWx0J107XG5leHBvcnRzLkljb24gPSBfSWNvbjJbJ2RlZmF1bHQnXTtcbmV4cG9ydHMuSWNvblN0YWNrID0gX0ljb25TdGFjazJbJ2RlZmF1bHQnXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mYS9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaW55Q29sb3IgdjEuNC4xXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmdyaW5zL1RpbnlDb2xvclxuLy8gQnJpYW4gR3JpbnN0ZWFkLCBNSVQgTGljZW5zZVxuXG4oZnVuY3Rpb24oTWF0aCkge1xuXG52YXIgdHJpbUxlZnQgPSAvXlxccysvLFxuICAgIHRyaW1SaWdodCA9IC9cXHMrJC8sXG4gICAgdGlueUNvdW50ZXIgPSAwLFxuICAgIG1hdGhSb3VuZCA9IE1hdGgucm91bmQsXG4gICAgbWF0aE1pbiA9IE1hdGgubWluLFxuICAgIG1hdGhNYXggPSBNYXRoLm1heCxcbiAgICBtYXRoUmFuZG9tID0gTWF0aC5yYW5kb207XG5cbmZ1bmN0aW9uIHRpbnljb2xvciAoY29sb3IsIG9wdHMpIHtcblxuICAgIGNvbG9yID0gKGNvbG9yKSA/IGNvbG9yIDogJyc7XG4gICAgb3B0cyA9IG9wdHMgfHwgeyB9O1xuXG4gICAgLy8gSWYgaW5wdXQgaXMgYWxyZWFkeSBhIHRpbnljb2xvciwgcmV0dXJuIGl0c2VsZlxuICAgIGlmIChjb2xvciBpbnN0YW5jZW9mIHRpbnljb2xvcikge1xuICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG4gICAgLy8gSWYgd2UgYXJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBjYWxsIHVzaW5nIG5ldyBpbnN0ZWFkXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIHRpbnljb2xvcikpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aW55Y29sb3IoY29sb3IsIG9wdHMpO1xuICAgIH1cblxuICAgIHZhciByZ2IgPSBpbnB1dFRvUkdCKGNvbG9yKTtcbiAgICB0aGlzLl9vcmlnaW5hbElucHV0ID0gY29sb3IsXG4gICAgdGhpcy5fciA9IHJnYi5yLFxuICAgIHRoaXMuX2cgPSByZ2IuZyxcbiAgICB0aGlzLl9iID0gcmdiLmIsXG4gICAgdGhpcy5fYSA9IHJnYi5hLFxuICAgIHRoaXMuX3JvdW5kQSA9IG1hdGhSb3VuZCgxMDAqdGhpcy5fYSkgLyAxMDAsXG4gICAgdGhpcy5fZm9ybWF0ID0gb3B0cy5mb3JtYXQgfHwgcmdiLmZvcm1hdDtcbiAgICB0aGlzLl9ncmFkaWVudFR5cGUgPSBvcHRzLmdyYWRpZW50VHlwZTtcblxuICAgIC8vIERvbid0IGxldCB0aGUgcmFuZ2Ugb2YgWzAsMjU1XSBjb21lIGJhY2sgaW4gWzAsMV0uXG4gICAgLy8gUG90ZW50aWFsbHkgbG9zZSBhIGxpdHRsZSBiaXQgb2YgcHJlY2lzaW9uIGhlcmUsIGJ1dCB3aWxsIGZpeCBpc3N1ZXMgd2hlcmVcbiAgICAvLyAuNSBnZXRzIGludGVycHJldGVkIGFzIGhhbGYgb2YgdGhlIHRvdGFsLCBpbnN0ZWFkIG9mIGhhbGYgb2YgMVxuICAgIC8vIElmIGl0IHdhcyBzdXBwb3NlZCB0byBiZSAxMjgsIHRoaXMgd2FzIGFscmVhZHkgdGFrZW4gY2FyZSBvZiBieSBgaW5wdXRUb1JnYmBcbiAgICBpZiAodGhpcy5fciA8IDEpIHsgdGhpcy5fciA9IG1hdGhSb3VuZCh0aGlzLl9yKTsgfVxuICAgIGlmICh0aGlzLl9nIDwgMSkgeyB0aGlzLl9nID0gbWF0aFJvdW5kKHRoaXMuX2cpOyB9XG4gICAgaWYgKHRoaXMuX2IgPCAxKSB7IHRoaXMuX2IgPSBtYXRoUm91bmQodGhpcy5fYik7IH1cblxuICAgIHRoaXMuX29rID0gcmdiLm9rO1xuICAgIHRoaXMuX3RjX2lkID0gdGlueUNvdW50ZXIrKztcbn1cblxudGlueWNvbG9yLnByb3RvdHlwZSA9IHtcbiAgICBpc0Rhcms6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCcmlnaHRuZXNzKCkgPCAxMjg7XG4gICAgfSxcbiAgICBpc0xpZ2h0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzRGFyaygpO1xuICAgIH0sXG4gICAgaXNWYWxpZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vaztcbiAgICB9LFxuICAgIGdldE9yaWdpbmFsSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbmFsSW5wdXQ7XG4gICAgfSxcbiAgICBnZXRGb3JtYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICAgIH0sXG4gICAgZ2V0QWxwaGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYTtcbiAgICB9LFxuICAgIGdldEJyaWdodG5lc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL2h0dHA6Ly93d3cudzMub3JnL1RSL0FFUlQjY29sb3ItY29udHJhc3RcbiAgICAgICAgdmFyIHJnYiA9IHRoaXMudG9SZ2IoKTtcbiAgICAgICAgcmV0dXJuIChyZ2IuciAqIDI5OSArIHJnYi5nICogNTg3ICsgcmdiLmIgKiAxMTQpIC8gMTAwMDtcbiAgICB9LFxuICAgIGdldEx1bWluYW5jZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vaHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuICAgICAgICB2YXIgcmdiID0gdGhpcy50b1JnYigpO1xuICAgICAgICB2YXIgUnNSR0IsIEdzUkdCLCBCc1JHQiwgUiwgRywgQjtcbiAgICAgICAgUnNSR0IgPSByZ2Iuci8yNTU7XG4gICAgICAgIEdzUkdCID0gcmdiLmcvMjU1O1xuICAgICAgICBCc1JHQiA9IHJnYi5iLzI1NTtcblxuICAgICAgICBpZiAoUnNSR0IgPD0gMC4wMzkyOCkge1IgPSBSc1JHQiAvIDEyLjkyO30gZWxzZSB7UiA9IE1hdGgucG93KCgoUnNSR0IgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7fVxuICAgICAgICBpZiAoR3NSR0IgPD0gMC4wMzkyOCkge0cgPSBHc1JHQiAvIDEyLjkyO30gZWxzZSB7RyA9IE1hdGgucG93KCgoR3NSR0IgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7fVxuICAgICAgICBpZiAoQnNSR0IgPD0gMC4wMzkyOCkge0IgPSBCc1JHQiAvIDEyLjkyO30gZWxzZSB7QiA9IE1hdGgucG93KCgoQnNSR0IgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7fVxuICAgICAgICByZXR1cm4gKDAuMjEyNiAqIFIpICsgKDAuNzE1MiAqIEcpICsgKDAuMDcyMiAqIEIpO1xuICAgIH0sXG4gICAgc2V0QWxwaGE6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2EgPSBib3VuZEFscGhhKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fcm91bmRBID0gbWF0aFJvdW5kKDEwMCp0aGlzLl9hKSAvIDEwMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB0b0hzdjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoc3YgPSByZ2JUb0hzdih0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iKTtcbiAgICAgICAgcmV0dXJuIHsgaDogaHN2LmggKiAzNjAsIHM6IGhzdi5zLCB2OiBoc3YudiwgYTogdGhpcy5fYSB9O1xuICAgIH0sXG4gICAgdG9Ic3ZTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaHN2ID0gcmdiVG9Ic3YodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYik7XG4gICAgICAgIHZhciBoID0gbWF0aFJvdW5kKGhzdi5oICogMzYwKSwgcyA9IG1hdGhSb3VuZChoc3YucyAqIDEwMCksIHYgPSBtYXRoUm91bmQoaHN2LnYgKiAxMDApO1xuICAgICAgICByZXR1cm4gKHRoaXMuX2EgPT0gMSkgP1xuICAgICAgICAgIFwiaHN2KFwiICArIGggKyBcIiwgXCIgKyBzICsgXCIlLCBcIiArIHYgKyBcIiUpXCIgOlxuICAgICAgICAgIFwiaHN2YShcIiArIGggKyBcIiwgXCIgKyBzICsgXCIlLCBcIiArIHYgKyBcIiUsIFwiKyB0aGlzLl9yb3VuZEEgKyBcIilcIjtcbiAgICB9LFxuICAgIHRvSHNsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhzbCA9IHJnYlRvSHNsKHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IpO1xuICAgICAgICByZXR1cm4geyBoOiBoc2wuaCAqIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sLCBhOiB0aGlzLl9hIH07XG4gICAgfSxcbiAgICB0b0hzbFN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoc2wgPSByZ2JUb0hzbCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iKTtcbiAgICAgICAgdmFyIGggPSBtYXRoUm91bmQoaHNsLmggKiAzNjApLCBzID0gbWF0aFJvdW5kKGhzbC5zICogMTAwKSwgbCA9IG1hdGhSb3VuZChoc2wubCAqIDEwMCk7XG4gICAgICAgIHJldHVybiAodGhpcy5fYSA9PSAxKSA/XG4gICAgICAgICAgXCJoc2woXCIgICsgaCArIFwiLCBcIiArIHMgKyBcIiUsIFwiICsgbCArIFwiJSlcIiA6XG4gICAgICAgICAgXCJoc2xhKFwiICsgaCArIFwiLCBcIiArIHMgKyBcIiUsIFwiICsgbCArIFwiJSwgXCIrIHRoaXMuX3JvdW5kQSArIFwiKVwiO1xuICAgIH0sXG4gICAgdG9IZXg6IGZ1bmN0aW9uKGFsbG93M0NoYXIpIHtcbiAgICAgICAgcmV0dXJuIHJnYlRvSGV4KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IsIGFsbG93M0NoYXIpO1xuICAgIH0sXG4gICAgdG9IZXhTdHJpbmc6IGZ1bmN0aW9uKGFsbG93M0NoYXIpIHtcbiAgICAgICAgcmV0dXJuICcjJyArIHRoaXMudG9IZXgoYWxsb3czQ2hhcik7XG4gICAgfSxcbiAgICB0b0hleDg6IGZ1bmN0aW9uKGFsbG93NENoYXIpIHtcbiAgICAgICAgcmV0dXJuIHJnYmFUb0hleCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCB0aGlzLl9hLCBhbGxvdzRDaGFyKTtcbiAgICB9LFxuICAgIHRvSGV4OFN0cmluZzogZnVuY3Rpb24oYWxsb3c0Q2hhcikge1xuICAgICAgICByZXR1cm4gJyMnICsgdGhpcy50b0hleDgoYWxsb3c0Q2hhcik7XG4gICAgfSxcbiAgICB0b1JnYjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7IHI6IG1hdGhSb3VuZCh0aGlzLl9yKSwgZzogbWF0aFJvdW5kKHRoaXMuX2cpLCBiOiBtYXRoUm91bmQodGhpcy5fYiksIGE6IHRoaXMuX2EgfTtcbiAgICB9LFxuICAgIHRvUmdiU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9hID09IDEpID9cbiAgICAgICAgICBcInJnYihcIiAgKyBtYXRoUm91bmQodGhpcy5fcikgKyBcIiwgXCIgKyBtYXRoUm91bmQodGhpcy5fZykgKyBcIiwgXCIgKyBtYXRoUm91bmQodGhpcy5fYikgKyBcIilcIiA6XG4gICAgICAgICAgXCJyZ2JhKFwiICsgbWF0aFJvdW5kKHRoaXMuX3IpICsgXCIsIFwiICsgbWF0aFJvdW5kKHRoaXMuX2cpICsgXCIsIFwiICsgbWF0aFJvdW5kKHRoaXMuX2IpICsgXCIsIFwiICsgdGhpcy5fcm91bmRBICsgXCIpXCI7XG4gICAgfSxcbiAgICB0b1BlcmNlbnRhZ2VSZ2I6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4geyByOiBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9yLCAyNTUpICogMTAwKSArIFwiJVwiLCBnOiBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9nLCAyNTUpICogMTAwKSArIFwiJVwiLCBiOiBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9iLCAyNTUpICogMTAwKSArIFwiJVwiLCBhOiB0aGlzLl9hIH07XG4gICAgfSxcbiAgICB0b1BlcmNlbnRhZ2VSZ2JTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2EgPT0gMSkgP1xuICAgICAgICAgIFwicmdiKFwiICArIG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX3IsIDI1NSkgKiAxMDApICsgXCIlLCBcIiArIG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX2csIDI1NSkgKiAxMDApICsgXCIlLCBcIiArIG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX2IsIDI1NSkgKiAxMDApICsgXCIlKVwiIDpcbiAgICAgICAgICBcInJnYmEoXCIgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9yLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9nLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9iLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyB0aGlzLl9yb3VuZEEgKyBcIilcIjtcbiAgICB9LFxuICAgIHRvTmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9hID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2EgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGV4TmFtZXNbcmdiVG9IZXgodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdHJ1ZSldIHx8IGZhbHNlO1xuICAgIH0sXG4gICAgdG9GaWx0ZXI6IGZ1bmN0aW9uKHNlY29uZENvbG9yKSB7XG4gICAgICAgIHZhciBoZXg4U3RyaW5nID0gJyMnICsgcmdiYVRvQXJnYkhleCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCB0aGlzLl9hKTtcbiAgICAgICAgdmFyIHNlY29uZEhleDhTdHJpbmcgPSBoZXg4U3RyaW5nO1xuICAgICAgICB2YXIgZ3JhZGllbnRUeXBlID0gdGhpcy5fZ3JhZGllbnRUeXBlID8gXCJHcmFkaWVudFR5cGUgPSAxLCBcIiA6IFwiXCI7XG5cbiAgICAgICAgaWYgKHNlY29uZENvbG9yKSB7XG4gICAgICAgICAgICB2YXIgcyA9IHRpbnljb2xvcihzZWNvbmRDb2xvcik7XG4gICAgICAgICAgICBzZWNvbmRIZXg4U3RyaW5nID0gJyMnICsgcmdiYVRvQXJnYkhleChzLl9yLCBzLl9nLCBzLl9iLCBzLl9hKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChcIitncmFkaWVudFR5cGUrXCJzdGFydENvbG9yc3RyPVwiK2hleDhTdHJpbmcrXCIsZW5kQ29sb3JzdHI9XCIrc2Vjb25kSGV4OFN0cmluZytcIilcIjtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbihmb3JtYXQpIHtcbiAgICAgICAgdmFyIGZvcm1hdFNldCA9ICEhZm9ybWF0O1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgdGhpcy5fZm9ybWF0O1xuXG4gICAgICAgIHZhciBmb3JtYXR0ZWRTdHJpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIGhhc0FscGhhID0gdGhpcy5fYSA8IDEgJiYgdGhpcy5fYSA+PSAwO1xuICAgICAgICB2YXIgbmVlZHNBbHBoYUZvcm1hdCA9ICFmb3JtYXRTZXQgJiYgaGFzQWxwaGEgJiYgKGZvcm1hdCA9PT0gXCJoZXhcIiB8fCBmb3JtYXQgPT09IFwiaGV4NlwiIHx8IGZvcm1hdCA9PT0gXCJoZXgzXCIgfHwgZm9ybWF0ID09PSBcImhleDRcIiB8fCBmb3JtYXQgPT09IFwiaGV4OFwiIHx8IGZvcm1hdCA9PT0gXCJuYW1lXCIpO1xuXG4gICAgICAgIGlmIChuZWVkc0FscGhhRm9ybWF0KSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIFwidHJhbnNwYXJlbnRcIiwgYWxsIG90aGVyIG5vbi1hbHBoYSBmb3JtYXRzXG4gICAgICAgICAgICAvLyB3aWxsIHJldHVybiByZ2JhIHdoZW4gdGhlcmUgaXMgdHJhbnNwYXJlbmN5LlxuICAgICAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJuYW1lXCIgJiYgdGhpcy5fYSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTmFtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9SZ2JTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcInJnYlwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvUmdiU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJwcmdiXCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9QZXJjZW50YWdlUmdiU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJoZXhcIiB8fCBmb3JtYXQgPT09IFwiaGV4NlwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJoZXgzXCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9IZXhTdHJpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJoZXg0XCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9IZXg4U3RyaW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaGV4OFwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4OFN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwibmFtZVwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvTmFtZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaHNsXCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9Ic2xTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhzdlwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSHN2U3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkU3RyaW5nIHx8IHRoaXMudG9IZXhTdHJpbmcoKTtcbiAgICB9LFxuICAgIGNsb25lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRpbnljb2xvcih0aGlzLnRvU3RyaW5nKCkpO1xuICAgIH0sXG5cbiAgICBfYXBwbHlNb2RpZmljYXRpb246IGZ1bmN0aW9uKGZuLCBhcmdzKSB7XG4gICAgICAgIHZhciBjb2xvciA9IGZuLmFwcGx5KG51bGwsIFt0aGlzXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmdzKSkpO1xuICAgICAgICB0aGlzLl9yID0gY29sb3IuX3I7XG4gICAgICAgIHRoaXMuX2cgPSBjb2xvci5fZztcbiAgICAgICAgdGhpcy5fYiA9IGNvbG9yLl9iO1xuICAgICAgICB0aGlzLnNldEFscGhhKGNvbG9yLl9hKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBsaWdodGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGxpZ2h0ZW4sIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBicmlnaHRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihicmlnaHRlbiwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGRhcmtlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihkYXJrZW4sIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBkZXNhdHVyYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGRlc2F0dXJhdGUsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBzYXR1cmF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihzYXR1cmF0ZSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGdyZXlzY2FsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihncmV5c2NhbGUsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBzcGluOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKHNwaW4sIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIF9hcHBseUNvbWJpbmF0aW9uOiBmdW5jdGlvbihmbiwgYXJncykge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgW3RoaXNdLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3MpKSk7XG4gICAgfSxcbiAgICBhbmFsb2dvdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihhbmFsb2dvdXMsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBjb21wbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oY29tcGxlbWVudCwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIG1vbm9jaHJvbWF0aWM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihtb25vY2hyb21hdGljLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc3BsaXRjb21wbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oc3BsaXRjb21wbGVtZW50LCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgdHJpYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbih0cmlhZCwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHRldHJhZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKHRldHJhZCwgYXJndW1lbnRzKTtcbiAgICB9XG59O1xuXG4vLyBJZiBpbnB1dCBpcyBhbiBvYmplY3QsIGZvcmNlIDEgaW50byBcIjEuMFwiIHRvIGhhbmRsZSByYXRpb3MgcHJvcGVybHlcbi8vIFN0cmluZyBpbnB1dCByZXF1aXJlcyBcIjEuMFwiIGFzIGlucHV0LCBzbyAxIHdpbGwgYmUgdHJlYXRlZCBhcyAxXG50aW55Y29sb3IuZnJvbVJhdGlvID0gZnVuY3Rpb24oY29sb3IsIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIGNvbG9yID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdmFyIG5ld0NvbG9yID0ge307XG4gICAgICAgIGZvciAodmFyIGkgaW4gY29sb3IpIHtcbiAgICAgICAgICAgIGlmIChjb2xvci5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBcImFcIikge1xuICAgICAgICAgICAgICAgICAgICBuZXdDb2xvcltpXSA9IGNvbG9yW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29sb3JbaV0gPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29sb3IgPSBuZXdDb2xvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGlueWNvbG9yKGNvbG9yLCBvcHRzKTtcbn07XG5cbi8vIEdpdmVuIGEgc3RyaW5nIG9yIG9iamVjdCwgY29udmVydCB0aGF0IGlucHV0IHRvIFJHQlxuLy8gUG9zc2libGUgc3RyaW5nIGlucHV0czpcbi8vXG4vLyAgICAgXCJyZWRcIlxuLy8gICAgIFwiI2YwMFwiIG9yIFwiZjAwXCJcbi8vICAgICBcIiNmZjAwMDBcIiBvciBcImZmMDAwMFwiXG4vLyAgICAgXCIjZmYwMDAwMDBcIiBvciBcImZmMDAwMDAwXCJcbi8vICAgICBcInJnYiAyNTUgMCAwXCIgb3IgXCJyZ2IgKDI1NSwgMCwgMClcIlxuLy8gICAgIFwicmdiIDEuMCAwIDBcIiBvciBcInJnYiAoMSwgMCwgMClcIlxuLy8gICAgIFwicmdiYSAoMjU1LCAwLCAwLCAxKVwiIG9yIFwicmdiYSAyNTUsIDAsIDAsIDFcIlxuLy8gICAgIFwicmdiYSAoMS4wLCAwLCAwLCAxKVwiIG9yIFwicmdiYSAxLjAsIDAsIDAsIDFcIlxuLy8gICAgIFwiaHNsKDAsIDEwMCUsIDUwJSlcIiBvciBcImhzbCAwIDEwMCUgNTAlXCJcbi8vICAgICBcImhzbGEoMCwgMTAwJSwgNTAlLCAxKVwiIG9yIFwiaHNsYSAwIDEwMCUgNTAlLCAxXCJcbi8vICAgICBcImhzdigwLCAxMDAlLCAxMDAlKVwiIG9yIFwiaHN2IDAgMTAwJSAxMDAlXCJcbi8vXG5mdW5jdGlvbiBpbnB1dFRvUkdCKGNvbG9yKSB7XG5cbiAgICB2YXIgcmdiID0geyByOiAwLCBnOiAwLCBiOiAwIH07XG4gICAgdmFyIGEgPSAxO1xuICAgIHZhciBzID0gbnVsbDtcbiAgICB2YXIgdiA9IG51bGw7XG4gICAgdmFyIGwgPSBudWxsO1xuICAgIHZhciBvayA9IGZhbHNlO1xuICAgIHZhciBmb3JtYXQgPSBmYWxzZTtcblxuICAgIGlmICh0eXBlb2YgY29sb3IgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb2xvciA9IHN0cmluZ0lucHV0VG9PYmplY3QoY29sb3IpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29sb3IgPT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZiAoaXNWYWxpZENTU1VuaXQoY29sb3IucikgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IuZykgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IuYikpIHtcbiAgICAgICAgICAgIHJnYiA9IHJnYlRvUmdiKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xuICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgZm9ybWF0ID0gU3RyaW5nKGNvbG9yLnIpLnN1YnN0cigtMSkgPT09IFwiJVwiID8gXCJwcmdiXCIgOiBcInJnYlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVmFsaWRDU1NVbml0KGNvbG9yLmgpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLnMpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLnYpKSB7XG4gICAgICAgICAgICBzID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci5zKTtcbiAgICAgICAgICAgIHYgPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yLnYpO1xuICAgICAgICAgICAgcmdiID0gaHN2VG9SZ2IoY29sb3IuaCwgcywgdik7XG4gICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICBmb3JtYXQgPSBcImhzdlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVmFsaWRDU1NVbml0KGNvbG9yLmgpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLnMpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLmwpKSB7XG4gICAgICAgICAgICBzID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci5zKTtcbiAgICAgICAgICAgIGwgPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yLmwpO1xuICAgICAgICAgICAgcmdiID0gaHNsVG9SZ2IoY29sb3IuaCwgcywgbCk7XG4gICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICBmb3JtYXQgPSBcImhzbFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbG9yLmhhc093blByb3BlcnR5KFwiYVwiKSkge1xuICAgICAgICAgICAgYSA9IGNvbG9yLmE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhID0gYm91bmRBbHBoYShhKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9rOiBvayxcbiAgICAgICAgZm9ybWF0OiBjb2xvci5mb3JtYXQgfHwgZm9ybWF0LFxuICAgICAgICByOiBtYXRoTWluKDI1NSwgbWF0aE1heChyZ2IuciwgMCkpLFxuICAgICAgICBnOiBtYXRoTWluKDI1NSwgbWF0aE1heChyZ2IuZywgMCkpLFxuICAgICAgICBiOiBtYXRoTWluKDI1NSwgbWF0aE1heChyZ2IuYiwgMCkpLFxuICAgICAgICBhOiBhXG4gICAgfTtcbn1cblxuXG4vLyBDb252ZXJzaW9uIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gYHJnYlRvSHNsYCwgYHJnYlRvSHN2YCwgYGhzbFRvUmdiYCwgYGhzdlRvUmdiYCBtb2RpZmllZCBmcm9tOlxuLy8gPGh0dHA6Ly9tamlqYWNrc29uLmNvbS8yMDA4LzAyL3JnYi10by1oc2wtYW5kLXJnYi10by1oc3YtY29sb3ItbW9kZWwtY29udmVyc2lvbi1hbGdvcml0aG1zLWluLWphdmFzY3JpcHQ+XG5cbi8vIGByZ2JUb1JnYmBcbi8vIEhhbmRsZSBib3VuZHMgLyBwZXJjZW50YWdlIGNoZWNraW5nIHRvIGNvbmZvcm0gdG8gQ1NTIGNvbG9yIHNwZWNcbi8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLz5cbi8vICpBc3N1bWVzOiogciwgZywgYiBpbiBbMCwgMjU1XSBvciBbMCwgMV1cbi8vICpSZXR1cm5zOiogeyByLCBnLCBiIH0gaW4gWzAsIDI1NV1cbmZ1bmN0aW9uIHJnYlRvUmdiKHIsIGcsIGIpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHI6IGJvdW5kMDEociwgMjU1KSAqIDI1NSxcbiAgICAgICAgZzogYm91bmQwMShnLCAyNTUpICogMjU1LFxuICAgICAgICBiOiBib3VuZDAxKGIsIDI1NSkgKiAyNTVcbiAgICB9O1xufVxuXG4vLyBgcmdiVG9Ic2xgXG4vLyBDb252ZXJ0cyBhbiBSR0IgY29sb3IgdmFsdWUgdG8gSFNMLlxuLy8gKkFzc3VtZXM6KiByLCBnLCBhbmQgYiBhcmUgY29udGFpbmVkIGluIFswLCAyNTVdIG9yIFswLCAxXVxuLy8gKlJldHVybnM6KiB7IGgsIHMsIGwgfSBpbiBbMCwxXVxuZnVuY3Rpb24gcmdiVG9Ic2wociwgZywgYikge1xuXG4gICAgciA9IGJvdW5kMDEociwgMjU1KTtcbiAgICBnID0gYm91bmQwMShnLCAyNTUpO1xuICAgIGIgPSBib3VuZDAxKGIsIDI1NSk7XG5cbiAgICB2YXIgbWF4ID0gbWF0aE1heChyLCBnLCBiKSwgbWluID0gbWF0aE1pbihyLCBnLCBiKTtcbiAgICB2YXIgaCwgcywgbCA9IChtYXggKyBtaW4pIC8gMjtcblxuICAgIGlmKG1heCA9PSBtaW4pIHtcbiAgICAgICAgaCA9IHMgPSAwOyAvLyBhY2hyb21hdGljXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZCA9IG1heCAtIG1pbjtcbiAgICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xuICAgICAgICBzd2l0Y2gobWF4KSB7XG4gICAgICAgICAgICBjYXNlIHI6IGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGc6IGggPSAoYiAtIHIpIC8gZCArIDI7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBiOiBoID0gKHIgLSBnKSAvIGQgKyA0OyBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGggLz0gNjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBoOiBoLCBzOiBzLCBsOiBsIH07XG59XG5cbi8vIGBoc2xUb1JnYmBcbi8vIENvbnZlcnRzIGFuIEhTTCBjb2xvciB2YWx1ZSB0byBSR0IuXG4vLyAqQXNzdW1lczoqIGggaXMgY29udGFpbmVkIGluIFswLCAxXSBvciBbMCwgMzYwXSBhbmQgcyBhbmQgbCBhcmUgY29udGFpbmVkIFswLCAxXSBvciBbMCwgMTAwXVxuLy8gKlJldHVybnM6KiB7IHIsIGcsIGIgfSBpbiB0aGUgc2V0IFswLCAyNTVdXG5mdW5jdGlvbiBoc2xUb1JnYihoLCBzLCBsKSB7XG4gICAgdmFyIHIsIGcsIGI7XG5cbiAgICBoID0gYm91bmQwMShoLCAzNjApO1xuICAgIHMgPSBib3VuZDAxKHMsIDEwMCk7XG4gICAgbCA9IGJvdW5kMDEobCwgMTAwKTtcblxuICAgIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgICAgICBpZih0IDwgMCkgdCArPSAxO1xuICAgICAgICBpZih0ID4gMSkgdCAtPSAxO1xuICAgICAgICBpZih0IDwgMS82KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcbiAgICAgICAgaWYodCA8IDEvMikgcmV0dXJuIHE7XG4gICAgICAgIGlmKHQgPCAyLzMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyLzMgLSB0KSAqIDY7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cblxuICAgIGlmKHMgPT09IDApIHtcbiAgICAgICAgciA9IGcgPSBiID0gbDsgLy8gYWNocm9tYXRpY1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICB2YXIgcCA9IDIgKiBsIC0gcTtcbiAgICAgICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEvMyk7XG4gICAgICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgICAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMS8zKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByOiByICogMjU1LCBnOiBnICogMjU1LCBiOiBiICogMjU1IH07XG59XG5cbi8vIGByZ2JUb0hzdmBcbi8vIENvbnZlcnRzIGFuIFJHQiBjb2xvciB2YWx1ZSB0byBIU1Zcbi8vICpBc3N1bWVzOiogciwgZywgYW5kIGIgYXJlIGNvbnRhaW5lZCBpbiB0aGUgc2V0IFswLCAyNTVdIG9yIFswLCAxXVxuLy8gKlJldHVybnM6KiB7IGgsIHMsIHYgfSBpbiBbMCwxXVxuZnVuY3Rpb24gcmdiVG9Ic3YociwgZywgYikge1xuXG4gICAgciA9IGJvdW5kMDEociwgMjU1KTtcbiAgICBnID0gYm91bmQwMShnLCAyNTUpO1xuICAgIGIgPSBib3VuZDAxKGIsIDI1NSk7XG5cbiAgICB2YXIgbWF4ID0gbWF0aE1heChyLCBnLCBiKSwgbWluID0gbWF0aE1pbihyLCBnLCBiKTtcbiAgICB2YXIgaCwgcywgdiA9IG1heDtcblxuICAgIHZhciBkID0gbWF4IC0gbWluO1xuICAgIHMgPSBtYXggPT09IDAgPyAwIDogZCAvIG1heDtcblxuICAgIGlmKG1heCA9PSBtaW4pIHtcbiAgICAgICAgaCA9IDA7IC8vIGFjaHJvbWF0aWNcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaChtYXgpIHtcbiAgICAgICAgICAgIGNhc2UgcjogaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZzogaCA9IChiIC0gcikgLyBkICsgMjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGI6IGggPSAociAtIGcpIC8gZCArIDQ7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGggLz0gNjtcbiAgICB9XG4gICAgcmV0dXJuIHsgaDogaCwgczogcywgdjogdiB9O1xufVxuXG4vLyBgaHN2VG9SZ2JgXG4vLyBDb252ZXJ0cyBhbiBIU1YgY29sb3IgdmFsdWUgdG8gUkdCLlxuLy8gKkFzc3VtZXM6KiBoIGlzIGNvbnRhaW5lZCBpbiBbMCwgMV0gb3IgWzAsIDM2MF0gYW5kIHMgYW5kIHYgYXJlIGNvbnRhaW5lZCBpbiBbMCwgMV0gb3IgWzAsIDEwMF1cbi8vICpSZXR1cm5zOiogeyByLCBnLCBiIH0gaW4gdGhlIHNldCBbMCwgMjU1XVxuIGZ1bmN0aW9uIGhzdlRvUmdiKGgsIHMsIHYpIHtcblxuICAgIGggPSBib3VuZDAxKGgsIDM2MCkgKiA2O1xuICAgIHMgPSBib3VuZDAxKHMsIDEwMCk7XG4gICAgdiA9IGJvdW5kMDEodiwgMTAwKTtcblxuICAgIHZhciBpID0gTWF0aC5mbG9vcihoKSxcbiAgICAgICAgZiA9IGggLSBpLFxuICAgICAgICBwID0gdiAqICgxIC0gcyksXG4gICAgICAgIHEgPSB2ICogKDEgLSBmICogcyksXG4gICAgICAgIHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyksXG4gICAgICAgIG1vZCA9IGkgJSA2LFxuICAgICAgICByID0gW3YsIHEsIHAsIHAsIHQsIHZdW21vZF0sXG4gICAgICAgIGcgPSBbdCwgdiwgdiwgcSwgcCwgcF1bbW9kXSxcbiAgICAgICAgYiA9IFtwLCBwLCB0LCB2LCB2LCBxXVttb2RdO1xuXG4gICAgcmV0dXJuIHsgcjogciAqIDI1NSwgZzogZyAqIDI1NSwgYjogYiAqIDI1NSB9O1xufVxuXG4vLyBgcmdiVG9IZXhgXG4vLyBDb252ZXJ0cyBhbiBSR0IgY29sb3IgdG8gaGV4XG4vLyBBc3N1bWVzIHIsIGcsIGFuZCBiIGFyZSBjb250YWluZWQgaW4gdGhlIHNldCBbMCwgMjU1XVxuLy8gUmV0dXJucyBhIDMgb3IgNiBjaGFyYWN0ZXIgaGV4XG5mdW5jdGlvbiByZ2JUb0hleChyLCBnLCBiLCBhbGxvdzNDaGFyKSB7XG5cbiAgICB2YXIgaGV4ID0gW1xuICAgICAgICBwYWQyKG1hdGhSb3VuZChyKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChnKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChiKS50b1N0cmluZygxNikpXG4gICAgXTtcblxuICAgIC8vIFJldHVybiBhIDMgY2hhcmFjdGVyIGhleCBpZiBwb3NzaWJsZVxuICAgIGlmIChhbGxvdzNDaGFyICYmIGhleFswXS5jaGFyQXQoMCkgPT0gaGV4WzBdLmNoYXJBdCgxKSAmJiBoZXhbMV0uY2hhckF0KDApID09IGhleFsxXS5jaGFyQXQoMSkgJiYgaGV4WzJdLmNoYXJBdCgwKSA9PSBoZXhbMl0uY2hhckF0KDEpKSB7XG4gICAgICAgIHJldHVybiBoZXhbMF0uY2hhckF0KDApICsgaGV4WzFdLmNoYXJBdCgwKSArIGhleFsyXS5jaGFyQXQoMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhleC5qb2luKFwiXCIpO1xufVxuXG4vLyBgcmdiYVRvSGV4YFxuLy8gQ29udmVydHMgYW4gUkdCQSBjb2xvciBwbHVzIGFscGhhIHRyYW5zcGFyZW5jeSB0byBoZXhcbi8vIEFzc3VtZXMgciwgZywgYiBhcmUgY29udGFpbmVkIGluIHRoZSBzZXQgWzAsIDI1NV0gYW5kXG4vLyBhIGluIFswLCAxXS4gUmV0dXJucyBhIDQgb3IgOCBjaGFyYWN0ZXIgcmdiYSBoZXhcbmZ1bmN0aW9uIHJnYmFUb0hleChyLCBnLCBiLCBhLCBhbGxvdzRDaGFyKSB7XG5cbiAgICB2YXIgaGV4ID0gW1xuICAgICAgICBwYWQyKG1hdGhSb3VuZChyKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChnKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChiKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKGNvbnZlcnREZWNpbWFsVG9IZXgoYSkpXG4gICAgXTtcblxuICAgIC8vIFJldHVybiBhIDQgY2hhcmFjdGVyIGhleCBpZiBwb3NzaWJsZVxuICAgIGlmIChhbGxvdzRDaGFyICYmIGhleFswXS5jaGFyQXQoMCkgPT0gaGV4WzBdLmNoYXJBdCgxKSAmJiBoZXhbMV0uY2hhckF0KDApID09IGhleFsxXS5jaGFyQXQoMSkgJiYgaGV4WzJdLmNoYXJBdCgwKSA9PSBoZXhbMl0uY2hhckF0KDEpICYmIGhleFszXS5jaGFyQXQoMCkgPT0gaGV4WzNdLmNoYXJBdCgxKSkge1xuICAgICAgICByZXR1cm4gaGV4WzBdLmNoYXJBdCgwKSArIGhleFsxXS5jaGFyQXQoMCkgKyBoZXhbMl0uY2hhckF0KDApICsgaGV4WzNdLmNoYXJBdCgwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGV4LmpvaW4oXCJcIik7XG59XG5cbi8vIGByZ2JhVG9BcmdiSGV4YFxuLy8gQ29udmVydHMgYW4gUkdCQSBjb2xvciB0byBhbiBBUkdCIEhleDggc3RyaW5nXG4vLyBSYXJlbHkgdXNlZCwgYnV0IHJlcXVpcmVkIGZvciBcInRvRmlsdGVyKClcIlxuZnVuY3Rpb24gcmdiYVRvQXJnYkhleChyLCBnLCBiLCBhKSB7XG5cbiAgICB2YXIgaGV4ID0gW1xuICAgICAgICBwYWQyKGNvbnZlcnREZWNpbWFsVG9IZXgoYSkpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChyKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChnKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChiKS50b1N0cmluZygxNikpXG4gICAgXTtcblxuICAgIHJldHVybiBoZXguam9pbihcIlwiKTtcbn1cblxuLy8gYGVxdWFsc2Bcbi8vIENhbiBiZSBjYWxsZWQgd2l0aCBhbnkgdGlueWNvbG9yIGlucHV0XG50aW55Y29sb3IuZXF1YWxzID0gZnVuY3Rpb24gKGNvbG9yMSwgY29sb3IyKSB7XG4gICAgaWYgKCFjb2xvcjEgfHwgIWNvbG9yMikgeyByZXR1cm4gZmFsc2U7IH1cbiAgICByZXR1cm4gdGlueWNvbG9yKGNvbG9yMSkudG9SZ2JTdHJpbmcoKSA9PSB0aW55Y29sb3IoY29sb3IyKS50b1JnYlN0cmluZygpO1xufTtcblxudGlueWNvbG9yLnJhbmRvbSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aW55Y29sb3IuZnJvbVJhdGlvKHtcbiAgICAgICAgcjogbWF0aFJhbmRvbSgpLFxuICAgICAgICBnOiBtYXRoUmFuZG9tKCksXG4gICAgICAgIGI6IG1hdGhSYW5kb20oKVxuICAgIH0pO1xufTtcblxuXG4vLyBNb2RpZmljYXRpb24gRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGFua3MgdG8gbGVzcy5qcyBmb3Igc29tZSBvZiB0aGUgYmFzaWNzIGhlcmVcbi8vIDxodHRwczovL2dpdGh1Yi5jb20vY2xvdWRoZWFkL2xlc3MuanMvYmxvYi9tYXN0ZXIvbGliL2xlc3MvZnVuY3Rpb25zLmpzPlxuXG5mdW5jdGlvbiBkZXNhdHVyYXRlKGNvbG9yLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDEwKTtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIGhzbC5zIC09IGFtb3VudCAvIDEwMDtcbiAgICBoc2wucyA9IGNsYW1wMDEoaHNsLnMpO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuZnVuY3Rpb24gc2F0dXJhdGUoY29sb3IsIGFtb3VudCkge1xuICAgIGFtb3VudCA9IChhbW91bnQgPT09IDApID8gMCA6IChhbW91bnQgfHwgMTApO1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgaHNsLnMgKz0gYW1vdW50IC8gMTAwO1xuICAgIGhzbC5zID0gY2xhbXAwMShoc2wucyk7XG4gICAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuXG5mdW5jdGlvbiBncmV5c2NhbGUoY29sb3IpIHtcbiAgICByZXR1cm4gdGlueWNvbG9yKGNvbG9yKS5kZXNhdHVyYXRlKDEwMCk7XG59XG5cbmZ1bmN0aW9uIGxpZ2h0ZW4gKGNvbG9yLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDEwKTtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIGhzbC5sICs9IGFtb3VudCAvIDEwMDtcbiAgICBoc2wubCA9IGNsYW1wMDEoaHNsLmwpO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuZnVuY3Rpb24gYnJpZ2h0ZW4oY29sb3IsIGFtb3VudCkge1xuICAgIGFtb3VudCA9IChhbW91bnQgPT09IDApID8gMCA6IChhbW91bnQgfHwgMTApO1xuICAgIHZhciByZ2IgPSB0aW55Y29sb3IoY29sb3IpLnRvUmdiKCk7XG4gICAgcmdiLnIgPSBtYXRoTWF4KDAsIG1hdGhNaW4oMjU1LCByZ2IuciAtIG1hdGhSb3VuZCgyNTUgKiAtIChhbW91bnQgLyAxMDApKSkpO1xuICAgIHJnYi5nID0gbWF0aE1heCgwLCBtYXRoTWluKDI1NSwgcmdiLmcgLSBtYXRoUm91bmQoMjU1ICogLSAoYW1vdW50IC8gMTAwKSkpKTtcbiAgICByZ2IuYiA9IG1hdGhNYXgoMCwgbWF0aE1pbigyNTUsIHJnYi5iIC0gbWF0aFJvdW5kKDI1NSAqIC0gKGFtb3VudCAvIDEwMCkpKSk7XG4gICAgcmV0dXJuIHRpbnljb2xvcihyZ2IpO1xufVxuXG5mdW5jdGlvbiBkYXJrZW4gKGNvbG9yLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDEwKTtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIGhzbC5sIC09IGFtb3VudCAvIDEwMDtcbiAgICBoc2wubCA9IGNsYW1wMDEoaHNsLmwpO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuLy8gU3BpbiB0YWtlcyBhIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGFtb3VudCB3aXRoaW4gWy0zNjAsIDM2MF0gaW5kaWNhdGluZyB0aGUgY2hhbmdlIG9mIGh1ZS5cbi8vIFZhbHVlcyBvdXRzaWRlIG9mIHRoaXMgcmFuZ2Ugd2lsbCBiZSB3cmFwcGVkIGludG8gdGhpcyByYW5nZS5cbmZ1bmN0aW9uIHNwaW4oY29sb3IsIGFtb3VudCkge1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgdmFyIGh1ZSA9IChoc2wuaCArIGFtb3VudCkgJSAzNjA7XG4gICAgaHNsLmggPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuLy8gQ29tYmluYXRpb24gRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoYW5rcyB0byBqUXVlcnkgeENvbG9yIGZvciBzb21lIG9mIHRoZSBpZGVhcyBiZWhpbmQgdGhlc2Vcbi8vIDxodHRwczovL2dpdGh1Yi5jb20vaW5mdXNpb24valF1ZXJ5LXhjb2xvci9ibG9iL21hc3Rlci9qcXVlcnkueGNvbG9yLmpzPlxuXG5mdW5jdGlvbiBjb21wbGVtZW50KGNvbG9yKSB7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICBoc2wuaCA9IChoc2wuaCArIDE4MCkgJSAzNjA7XG4gICAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuXG5mdW5jdGlvbiB0cmlhZChjb2xvcikge1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgdmFyIGggPSBoc2wuaDtcbiAgICByZXR1cm4gW1xuICAgICAgICB0aW55Y29sb3IoY29sb3IpLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDEyMCkgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyAyNDApICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSlcbiAgICBdO1xufVxuXG5mdW5jdGlvbiB0ZXRyYWQoY29sb3IpIHtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIHZhciBoID0gaHNsLmg7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgdGlueWNvbG9yKGNvbG9yKSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyA5MCkgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyAxODApICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgMjcwKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gc3BsaXRjb21wbGVtZW50KGNvbG9yKSB7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICB2YXIgaCA9IGhzbC5oO1xuICAgIHJldHVybiBbXG4gICAgICAgIHRpbnljb2xvcihjb2xvciksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgNzIpICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmx9KSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyAyMTYpICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmx9KVxuICAgIF07XG59XG5cbmZ1bmN0aW9uIGFuYWxvZ291cyhjb2xvciwgcmVzdWx0cywgc2xpY2VzKSB7XG4gICAgcmVzdWx0cyA9IHJlc3VsdHMgfHwgNjtcbiAgICBzbGljZXMgPSBzbGljZXMgfHwgMzA7XG5cbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIHZhciBwYXJ0ID0gMzYwIC8gc2xpY2VzO1xuICAgIHZhciByZXQgPSBbdGlueWNvbG9yKGNvbG9yKV07XG5cbiAgICBmb3IgKGhzbC5oID0gKChoc2wuaCAtIChwYXJ0ICogcmVzdWx0cyA+PiAxKSkgKyA3MjApICUgMzYwOyAtLXJlc3VsdHM7ICkge1xuICAgICAgICBoc2wuaCA9IChoc2wuaCArIHBhcnQpICUgMzYwO1xuICAgICAgICByZXQucHVzaCh0aW55Y29sb3IoaHNsKSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG1vbm9jaHJvbWF0aWMoY29sb3IsIHJlc3VsdHMpIHtcbiAgICByZXN1bHRzID0gcmVzdWx0cyB8fCA2O1xuICAgIHZhciBoc3YgPSB0aW55Y29sb3IoY29sb3IpLnRvSHN2KCk7XG4gICAgdmFyIGggPSBoc3YuaCwgcyA9IGhzdi5zLCB2ID0gaHN2LnY7XG4gICAgdmFyIHJldCA9IFtdO1xuICAgIHZhciBtb2RpZmljYXRpb24gPSAxIC8gcmVzdWx0cztcblxuICAgIHdoaWxlIChyZXN1bHRzLS0pIHtcbiAgICAgICAgcmV0LnB1c2godGlueWNvbG9yKHsgaDogaCwgczogcywgdjogdn0pKTtcbiAgICAgICAgdiA9ICh2ICsgbW9kaWZpY2F0aW9uKSAlIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbn1cblxuLy8gVXRpbGl0eSBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG50aW55Y29sb3IubWl4ID0gZnVuY3Rpb24oY29sb3IxLCBjb2xvcjIsIGFtb3VudCkge1xuICAgIGFtb3VudCA9IChhbW91bnQgPT09IDApID8gMCA6IChhbW91bnQgfHwgNTApO1xuXG4gICAgdmFyIHJnYjEgPSB0aW55Y29sb3IoY29sb3IxKS50b1JnYigpO1xuICAgIHZhciByZ2IyID0gdGlueWNvbG9yKGNvbG9yMikudG9SZ2IoKTtcblxuICAgIHZhciBwID0gYW1vdW50IC8gMTAwO1xuXG4gICAgdmFyIHJnYmEgPSB7XG4gICAgICAgIHI6ICgocmdiMi5yIC0gcmdiMS5yKSAqIHApICsgcmdiMS5yLFxuICAgICAgICBnOiAoKHJnYjIuZyAtIHJnYjEuZykgKiBwKSArIHJnYjEuZyxcbiAgICAgICAgYjogKChyZ2IyLmIgLSByZ2IxLmIpICogcCkgKyByZ2IxLmIsXG4gICAgICAgIGE6ICgocmdiMi5hIC0gcmdiMS5hKSAqIHApICsgcmdiMS5hXG4gICAgfTtcblxuICAgIHJldHVybiB0aW55Y29sb3IocmdiYSk7XG59O1xuXG5cbi8vIFJlYWRhYmlsaXR5IEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyA8aHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNjb250cmFzdC1yYXRpb2RlZiAoV0NBRyBWZXJzaW9uIDIpXG5cbi8vIGBjb250cmFzdGBcbi8vIEFuYWx5emUgdGhlIDIgY29sb3JzIGFuZCByZXR1cm5zIHRoZSBjb2xvciBjb250cmFzdCBkZWZpbmVkIGJ5IChXQ0FHIFZlcnNpb24gMilcbnRpbnljb2xvci5yZWFkYWJpbGl0eSA9IGZ1bmN0aW9uKGNvbG9yMSwgY29sb3IyKSB7XG4gICAgdmFyIGMxID0gdGlueWNvbG9yKGNvbG9yMSk7XG4gICAgdmFyIGMyID0gdGlueWNvbG9yKGNvbG9yMik7XG4gICAgcmV0dXJuIChNYXRoLm1heChjMS5nZXRMdW1pbmFuY2UoKSxjMi5nZXRMdW1pbmFuY2UoKSkrMC4wNSkgLyAoTWF0aC5taW4oYzEuZ2V0THVtaW5hbmNlKCksYzIuZ2V0THVtaW5hbmNlKCkpKzAuMDUpO1xufTtcblxuLy8gYGlzUmVhZGFibGVgXG4vLyBFbnN1cmUgdGhhdCBmb3JlZ3JvdW5kIGFuZCBiYWNrZ3JvdW5kIGNvbG9yIGNvbWJpbmF0aW9ucyBtZWV0IFdDQUcyIGd1aWRlbGluZXMuXG4vLyBUaGUgdGhpcmQgYXJndW1lbnQgaXMgYW4gb3B0aW9uYWwgT2JqZWN0LlxuLy8gICAgICB0aGUgJ2xldmVsJyBwcm9wZXJ0eSBzdGF0ZXMgJ0FBJyBvciAnQUFBJyAtIGlmIG1pc3Npbmcgb3IgaW52YWxpZCwgaXQgZGVmYXVsdHMgdG8gJ0FBJztcbi8vICAgICAgdGhlICdzaXplJyBwcm9wZXJ0eSBzdGF0ZXMgJ2xhcmdlJyBvciAnc21hbGwnIC0gaWYgbWlzc2luZyBvciBpbnZhbGlkLCBpdCBkZWZhdWx0cyB0byAnc21hbGwnLlxuLy8gSWYgdGhlIGVudGlyZSBvYmplY3QgaXMgYWJzZW50LCBpc1JlYWRhYmxlIGRlZmF1bHRzIHRvIHtsZXZlbDpcIkFBXCIsc2l6ZTpcInNtYWxsXCJ9LlxuXG4vLyAqRXhhbXBsZSpcbi8vICAgIHRpbnljb2xvci5pc1JlYWRhYmxlKFwiIzAwMFwiLCBcIiMxMTFcIikgPT4gZmFsc2Vcbi8vICAgIHRpbnljb2xvci5pc1JlYWRhYmxlKFwiIzAwMFwiLCBcIiMxMTFcIix7bGV2ZWw6XCJBQVwiLHNpemU6XCJsYXJnZVwifSkgPT4gZmFsc2VcbnRpbnljb2xvci5pc1JlYWRhYmxlID0gZnVuY3Rpb24oY29sb3IxLCBjb2xvcjIsIHdjYWcyKSB7XG4gICAgdmFyIHJlYWRhYmlsaXR5ID0gdGlueWNvbG9yLnJlYWRhYmlsaXR5KGNvbG9yMSwgY29sb3IyKTtcbiAgICB2YXIgd2NhZzJQYXJtcywgb3V0O1xuXG4gICAgb3V0ID0gZmFsc2U7XG5cbiAgICB3Y2FnMlBhcm1zID0gdmFsaWRhdGVXQ0FHMlBhcm1zKHdjYWcyKTtcbiAgICBzd2l0Y2ggKHdjYWcyUGFybXMubGV2ZWwgKyB3Y2FnMlBhcm1zLnNpemUpIHtcbiAgICAgICAgY2FzZSBcIkFBc21hbGxcIjpcbiAgICAgICAgY2FzZSBcIkFBQWxhcmdlXCI6XG4gICAgICAgICAgICBvdXQgPSByZWFkYWJpbGl0eSA+PSA0LjU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFBbGFyZ2VcIjpcbiAgICAgICAgICAgIG91dCA9IHJlYWRhYmlsaXR5ID49IDM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFBQXNtYWxsXCI6XG4gICAgICAgICAgICBvdXQgPSByZWFkYWJpbGl0eSA+PSA3O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG5cbn07XG5cbi8vIGBtb3N0UmVhZGFibGVgXG4vLyBHaXZlbiBhIGJhc2UgY29sb3IgYW5kIGEgbGlzdCBvZiBwb3NzaWJsZSBmb3JlZ3JvdW5kIG9yIGJhY2tncm91bmRcbi8vIGNvbG9ycyBmb3IgdGhhdCBiYXNlLCByZXR1cm5zIHRoZSBtb3N0IHJlYWRhYmxlIGNvbG9yLlxuLy8gT3B0aW9uYWxseSByZXR1cm5zIEJsYWNrIG9yIFdoaXRlIGlmIHRoZSBtb3N0IHJlYWRhYmxlIGNvbG9yIGlzIHVucmVhZGFibGUuXG4vLyAqRXhhbXBsZSpcbi8vICAgIHRpbnljb2xvci5tb3N0UmVhZGFibGUodGlueWNvbG9yLm1vc3RSZWFkYWJsZShcIiMxMjNcIiwgW1wiIzEyNFwiLCBcIiMxMjVcIl0se2luY2x1ZGVGYWxsYmFja0NvbG9yczpmYWxzZX0pLnRvSGV4U3RyaW5nKCk7IC8vIFwiIzExMjI1NVwiXG4vLyAgICB0aW55Y29sb3IubW9zdFJlYWRhYmxlKHRpbnljb2xvci5tb3N0UmVhZGFibGUoXCIjMTIzXCIsIFtcIiMxMjRcIiwgXCIjMTI1XCJdLHtpbmNsdWRlRmFsbGJhY2tDb2xvcnM6dHJ1ZX0pLnRvSGV4U3RyaW5nKCk7ICAvLyBcIiNmZmZmZmZcIlxuLy8gICAgdGlueWNvbG9yLm1vc3RSZWFkYWJsZShcIiNhODAxNWFcIiwgW1wiI2ZhZjNmM1wiXSx7aW5jbHVkZUZhbGxiYWNrQ29sb3JzOnRydWUsbGV2ZWw6XCJBQUFcIixzaXplOlwibGFyZ2VcIn0pLnRvSGV4U3RyaW5nKCk7IC8vIFwiI2ZhZjNmM1wiXG4vLyAgICB0aW55Y29sb3IubW9zdFJlYWRhYmxlKFwiI2E4MDE1YVwiLCBbXCIjZmFmM2YzXCJdLHtpbmNsdWRlRmFsbGJhY2tDb2xvcnM6dHJ1ZSxsZXZlbDpcIkFBQVwiLHNpemU6XCJzbWFsbFwifSkudG9IZXhTdHJpbmcoKTsgLy8gXCIjZmZmZmZmXCJcbnRpbnljb2xvci5tb3N0UmVhZGFibGUgPSBmdW5jdGlvbihiYXNlQ29sb3IsIGNvbG9yTGlzdCwgYXJncykge1xuICAgIHZhciBiZXN0Q29sb3IgPSBudWxsO1xuICAgIHZhciBiZXN0U2NvcmUgPSAwO1xuICAgIHZhciByZWFkYWJpbGl0eTtcbiAgICB2YXIgaW5jbHVkZUZhbGxiYWNrQ29sb3JzLCBsZXZlbCwgc2l6ZSA7XG4gICAgYXJncyA9IGFyZ3MgfHwge307XG4gICAgaW5jbHVkZUZhbGxiYWNrQ29sb3JzID0gYXJncy5pbmNsdWRlRmFsbGJhY2tDb2xvcnMgO1xuICAgIGxldmVsID0gYXJncy5sZXZlbDtcbiAgICBzaXplID0gYXJncy5zaXplO1xuXG4gICAgZm9yICh2YXIgaT0gMDsgaSA8IGNvbG9yTGlzdC5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgcmVhZGFiaWxpdHkgPSB0aW55Y29sb3IucmVhZGFiaWxpdHkoYmFzZUNvbG9yLCBjb2xvckxpc3RbaV0pO1xuICAgICAgICBpZiAocmVhZGFiaWxpdHkgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICAgIGJlc3RTY29yZSA9IHJlYWRhYmlsaXR5O1xuICAgICAgICAgICAgYmVzdENvbG9yID0gdGlueWNvbG9yKGNvbG9yTGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGlueWNvbG9yLmlzUmVhZGFibGUoYmFzZUNvbG9yLCBiZXN0Q29sb3IsIHtcImxldmVsXCI6bGV2ZWwsXCJzaXplXCI6c2l6ZX0pIHx8ICFpbmNsdWRlRmFsbGJhY2tDb2xvcnMpIHtcbiAgICAgICAgcmV0dXJuIGJlc3RDb2xvcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFyZ3MuaW5jbHVkZUZhbGxiYWNrQ29sb3JzPWZhbHNlO1xuICAgICAgICByZXR1cm4gdGlueWNvbG9yLm1vc3RSZWFkYWJsZShiYXNlQ29sb3IsW1wiI2ZmZlwiLCBcIiMwMDBcIl0sYXJncyk7XG4gICAgfVxufTtcblxuXG4vLyBCaWcgTGlzdCBvZiBDb2xvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvI3N2Zy1jb2xvcj5cbnZhciBuYW1lcyA9IHRpbnljb2xvci5uYW1lcyA9IHtcbiAgICBhbGljZWJsdWU6IFwiZjBmOGZmXCIsXG4gICAgYW50aXF1ZXdoaXRlOiBcImZhZWJkN1wiLFxuICAgIGFxdWE6IFwiMGZmXCIsXG4gICAgYXF1YW1hcmluZTogXCI3ZmZmZDRcIixcbiAgICBhenVyZTogXCJmMGZmZmZcIixcbiAgICBiZWlnZTogXCJmNWY1ZGNcIixcbiAgICBiaXNxdWU6IFwiZmZlNGM0XCIsXG4gICAgYmxhY2s6IFwiMDAwXCIsXG4gICAgYmxhbmNoZWRhbG1vbmQ6IFwiZmZlYmNkXCIsXG4gICAgYmx1ZTogXCIwMGZcIixcbiAgICBibHVldmlvbGV0OiBcIjhhMmJlMlwiLFxuICAgIGJyb3duOiBcImE1MmEyYVwiLFxuICAgIGJ1cmx5d29vZDogXCJkZWI4ODdcIixcbiAgICBidXJudHNpZW5uYTogXCJlYTdlNWRcIixcbiAgICBjYWRldGJsdWU6IFwiNWY5ZWEwXCIsXG4gICAgY2hhcnRyZXVzZTogXCI3ZmZmMDBcIixcbiAgICBjaG9jb2xhdGU6IFwiZDI2OTFlXCIsXG4gICAgY29yYWw6IFwiZmY3ZjUwXCIsXG4gICAgY29ybmZsb3dlcmJsdWU6IFwiNjQ5NWVkXCIsXG4gICAgY29ybnNpbGs6IFwiZmZmOGRjXCIsXG4gICAgY3JpbXNvbjogXCJkYzE0M2NcIixcbiAgICBjeWFuOiBcIjBmZlwiLFxuICAgIGRhcmtibHVlOiBcIjAwMDA4YlwiLFxuICAgIGRhcmtjeWFuOiBcIjAwOGI4YlwiLFxuICAgIGRhcmtnb2xkZW5yb2Q6IFwiYjg4NjBiXCIsXG4gICAgZGFya2dyYXk6IFwiYTlhOWE5XCIsXG4gICAgZGFya2dyZWVuOiBcIjAwNjQwMFwiLFxuICAgIGRhcmtncmV5OiBcImE5YTlhOVwiLFxuICAgIGRhcmtraGFraTogXCJiZGI3NmJcIixcbiAgICBkYXJrbWFnZW50YTogXCI4YjAwOGJcIixcbiAgICBkYXJrb2xpdmVncmVlbjogXCI1NTZiMmZcIixcbiAgICBkYXJrb3JhbmdlOiBcImZmOGMwMFwiLFxuICAgIGRhcmtvcmNoaWQ6IFwiOTkzMmNjXCIsXG4gICAgZGFya3JlZDogXCI4YjAwMDBcIixcbiAgICBkYXJrc2FsbW9uOiBcImU5OTY3YVwiLFxuICAgIGRhcmtzZWFncmVlbjogXCI4ZmJjOGZcIixcbiAgICBkYXJrc2xhdGVibHVlOiBcIjQ4M2Q4YlwiLFxuICAgIGRhcmtzbGF0ZWdyYXk6IFwiMmY0ZjRmXCIsXG4gICAgZGFya3NsYXRlZ3JleTogXCIyZjRmNGZcIixcbiAgICBkYXJrdHVycXVvaXNlOiBcIjAwY2VkMVwiLFxuICAgIGRhcmt2aW9sZXQ6IFwiOTQwMGQzXCIsXG4gICAgZGVlcHBpbms6IFwiZmYxNDkzXCIsXG4gICAgZGVlcHNreWJsdWU6IFwiMDBiZmZmXCIsXG4gICAgZGltZ3JheTogXCI2OTY5NjlcIixcbiAgICBkaW1ncmV5OiBcIjY5Njk2OVwiLFxuICAgIGRvZGdlcmJsdWU6IFwiMWU5MGZmXCIsXG4gICAgZmlyZWJyaWNrOiBcImIyMjIyMlwiLFxuICAgIGZsb3JhbHdoaXRlOiBcImZmZmFmMFwiLFxuICAgIGZvcmVzdGdyZWVuOiBcIjIyOGIyMlwiLFxuICAgIGZ1Y2hzaWE6IFwiZjBmXCIsXG4gICAgZ2FpbnNib3JvOiBcImRjZGNkY1wiLFxuICAgIGdob3N0d2hpdGU6IFwiZjhmOGZmXCIsXG4gICAgZ29sZDogXCJmZmQ3MDBcIixcbiAgICBnb2xkZW5yb2Q6IFwiZGFhNTIwXCIsXG4gICAgZ3JheTogXCI4MDgwODBcIixcbiAgICBncmVlbjogXCIwMDgwMDBcIixcbiAgICBncmVlbnllbGxvdzogXCJhZGZmMmZcIixcbiAgICBncmV5OiBcIjgwODA4MFwiLFxuICAgIGhvbmV5ZGV3OiBcImYwZmZmMFwiLFxuICAgIGhvdHBpbms6IFwiZmY2OWI0XCIsXG4gICAgaW5kaWFucmVkOiBcImNkNWM1Y1wiLFxuICAgIGluZGlnbzogXCI0YjAwODJcIixcbiAgICBpdm9yeTogXCJmZmZmZjBcIixcbiAgICBraGFraTogXCJmMGU2OGNcIixcbiAgICBsYXZlbmRlcjogXCJlNmU2ZmFcIixcbiAgICBsYXZlbmRlcmJsdXNoOiBcImZmZjBmNVwiLFxuICAgIGxhd25ncmVlbjogXCI3Y2ZjMDBcIixcbiAgICBsZW1vbmNoaWZmb246IFwiZmZmYWNkXCIsXG4gICAgbGlnaHRibHVlOiBcImFkZDhlNlwiLFxuICAgIGxpZ2h0Y29yYWw6IFwiZjA4MDgwXCIsXG4gICAgbGlnaHRjeWFuOiBcImUwZmZmZlwiLFxuICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiBcImZhZmFkMlwiLFxuICAgIGxpZ2h0Z3JheTogXCJkM2QzZDNcIixcbiAgICBsaWdodGdyZWVuOiBcIjkwZWU5MFwiLFxuICAgIGxpZ2h0Z3JleTogXCJkM2QzZDNcIixcbiAgICBsaWdodHBpbms6IFwiZmZiNmMxXCIsXG4gICAgbGlnaHRzYWxtb246IFwiZmZhMDdhXCIsXG4gICAgbGlnaHRzZWFncmVlbjogXCIyMGIyYWFcIixcbiAgICBsaWdodHNreWJsdWU6IFwiODdjZWZhXCIsXG4gICAgbGlnaHRzbGF0ZWdyYXk6IFwiNzg5XCIsXG4gICAgbGlnaHRzbGF0ZWdyZXk6IFwiNzg5XCIsXG4gICAgbGlnaHRzdGVlbGJsdWU6IFwiYjBjNGRlXCIsXG4gICAgbGlnaHR5ZWxsb3c6IFwiZmZmZmUwXCIsXG4gICAgbGltZTogXCIwZjBcIixcbiAgICBsaW1lZ3JlZW46IFwiMzJjZDMyXCIsXG4gICAgbGluZW46IFwiZmFmMGU2XCIsXG4gICAgbWFnZW50YTogXCJmMGZcIixcbiAgICBtYXJvb246IFwiODAwMDAwXCIsXG4gICAgbWVkaXVtYXF1YW1hcmluZTogXCI2NmNkYWFcIixcbiAgICBtZWRpdW1ibHVlOiBcIjAwMDBjZFwiLFxuICAgIG1lZGl1bW9yY2hpZDogXCJiYTU1ZDNcIixcbiAgICBtZWRpdW1wdXJwbGU6IFwiOTM3MGRiXCIsXG4gICAgbWVkaXVtc2VhZ3JlZW46IFwiM2NiMzcxXCIsXG4gICAgbWVkaXVtc2xhdGVibHVlOiBcIjdiNjhlZVwiLFxuICAgIG1lZGl1bXNwcmluZ2dyZWVuOiBcIjAwZmE5YVwiLFxuICAgIG1lZGl1bXR1cnF1b2lzZTogXCI0OGQxY2NcIixcbiAgICBtZWRpdW12aW9sZXRyZWQ6IFwiYzcxNTg1XCIsXG4gICAgbWlkbmlnaHRibHVlOiBcIjE5MTk3MFwiLFxuICAgIG1pbnRjcmVhbTogXCJmNWZmZmFcIixcbiAgICBtaXN0eXJvc2U6IFwiZmZlNGUxXCIsXG4gICAgbW9jY2FzaW46IFwiZmZlNGI1XCIsXG4gICAgbmF2YWpvd2hpdGU6IFwiZmZkZWFkXCIsXG4gICAgbmF2eTogXCIwMDAwODBcIixcbiAgICBvbGRsYWNlOiBcImZkZjVlNlwiLFxuICAgIG9saXZlOiBcIjgwODAwMFwiLFxuICAgIG9saXZlZHJhYjogXCI2YjhlMjNcIixcbiAgICBvcmFuZ2U6IFwiZmZhNTAwXCIsXG4gICAgb3JhbmdlcmVkOiBcImZmNDUwMFwiLFxuICAgIG9yY2hpZDogXCJkYTcwZDZcIixcbiAgICBwYWxlZ29sZGVucm9kOiBcImVlZThhYVwiLFxuICAgIHBhbGVncmVlbjogXCI5OGZiOThcIixcbiAgICBwYWxldHVycXVvaXNlOiBcImFmZWVlZVwiLFxuICAgIHBhbGV2aW9sZXRyZWQ6IFwiZGI3MDkzXCIsXG4gICAgcGFwYXlhd2hpcDogXCJmZmVmZDVcIixcbiAgICBwZWFjaHB1ZmY6IFwiZmZkYWI5XCIsXG4gICAgcGVydTogXCJjZDg1M2ZcIixcbiAgICBwaW5rOiBcImZmYzBjYlwiLFxuICAgIHBsdW06IFwiZGRhMGRkXCIsXG4gICAgcG93ZGVyYmx1ZTogXCJiMGUwZTZcIixcbiAgICBwdXJwbGU6IFwiODAwMDgwXCIsXG4gICAgcmViZWNjYXB1cnBsZTogXCI2NjMzOTlcIixcbiAgICByZWQ6IFwiZjAwXCIsXG4gICAgcm9zeWJyb3duOiBcImJjOGY4ZlwiLFxuICAgIHJveWFsYmx1ZTogXCI0MTY5ZTFcIixcbiAgICBzYWRkbGVicm93bjogXCI4YjQ1MTNcIixcbiAgICBzYWxtb246IFwiZmE4MDcyXCIsXG4gICAgc2FuZHlicm93bjogXCJmNGE0NjBcIixcbiAgICBzZWFncmVlbjogXCIyZThiNTdcIixcbiAgICBzZWFzaGVsbDogXCJmZmY1ZWVcIixcbiAgICBzaWVubmE6IFwiYTA1MjJkXCIsXG4gICAgc2lsdmVyOiBcImMwYzBjMFwiLFxuICAgIHNreWJsdWU6IFwiODdjZWViXCIsXG4gICAgc2xhdGVibHVlOiBcIjZhNWFjZFwiLFxuICAgIHNsYXRlZ3JheTogXCI3MDgwOTBcIixcbiAgICBzbGF0ZWdyZXk6IFwiNzA4MDkwXCIsXG4gICAgc25vdzogXCJmZmZhZmFcIixcbiAgICBzcHJpbmdncmVlbjogXCIwMGZmN2ZcIixcbiAgICBzdGVlbGJsdWU6IFwiNDY4MmI0XCIsXG4gICAgdGFuOiBcImQyYjQ4Y1wiLFxuICAgIHRlYWw6IFwiMDA4MDgwXCIsXG4gICAgdGhpc3RsZTogXCJkOGJmZDhcIixcbiAgICB0b21hdG86IFwiZmY2MzQ3XCIsXG4gICAgdHVycXVvaXNlOiBcIjQwZTBkMFwiLFxuICAgIHZpb2xldDogXCJlZTgyZWVcIixcbiAgICB3aGVhdDogXCJmNWRlYjNcIixcbiAgICB3aGl0ZTogXCJmZmZcIixcbiAgICB3aGl0ZXNtb2tlOiBcImY1ZjVmNVwiLFxuICAgIHllbGxvdzogXCJmZjBcIixcbiAgICB5ZWxsb3dncmVlbjogXCI5YWNkMzJcIlxufTtcblxuLy8gTWFrZSBpdCBlYXN5IHRvIGFjY2VzcyBjb2xvcnMgdmlhIGBoZXhOYW1lc1toZXhdYFxudmFyIGhleE5hbWVzID0gdGlueWNvbG9yLmhleE5hbWVzID0gZmxpcChuYW1lcyk7XG5cblxuLy8gVXRpbGl0aWVzXG4vLyAtLS0tLS0tLS1cblxuLy8gYHsgJ25hbWUxJzogJ3ZhbDEnIH1gIGJlY29tZXMgYHsgJ3ZhbDEnOiAnbmFtZTEnIH1gXG5mdW5jdGlvbiBmbGlwKG8pIHtcbiAgICB2YXIgZmxpcHBlZCA9IHsgfTtcbiAgICBmb3IgKHZhciBpIGluIG8pIHtcbiAgICAgICAgaWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIGZsaXBwZWRbb1tpXV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmbGlwcGVkO1xufVxuXG4vLyBSZXR1cm4gYSB2YWxpZCBhbHBoYSB2YWx1ZSBbMCwxXSB3aXRoIGFsbCBpbnZhbGlkIHZhbHVlcyBiZWluZyBzZXQgdG8gMVxuZnVuY3Rpb24gYm91bmRBbHBoYShhKSB7XG4gICAgYSA9IHBhcnNlRmxvYXQoYSk7XG5cbiAgICBpZiAoaXNOYU4oYSkgfHwgYSA8IDAgfHwgYSA+IDEpIHtcbiAgICAgICAgYSA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbi8vIFRha2UgaW5wdXQgZnJvbSBbMCwgbl0gYW5kIHJldHVybiBpdCBhcyBbMCwgMV1cbmZ1bmN0aW9uIGJvdW5kMDEobiwgbWF4KSB7XG4gICAgaWYgKGlzT25lUG9pbnRaZXJvKG4pKSB7IG4gPSBcIjEwMCVcIjsgfVxuXG4gICAgdmFyIHByb2Nlc3NQZXJjZW50ID0gaXNQZXJjZW50YWdlKG4pO1xuICAgIG4gPSBtYXRoTWluKG1heCwgbWF0aE1heCgwLCBwYXJzZUZsb2F0KG4pKSk7XG5cbiAgICAvLyBBdXRvbWF0aWNhbGx5IGNvbnZlcnQgcGVyY2VudGFnZSBpbnRvIG51bWJlclxuICAgIGlmIChwcm9jZXNzUGVyY2VudCkge1xuICAgICAgICBuID0gcGFyc2VJbnQobiAqIG1heCwgMTApIC8gMTAwO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBmbG9hdGluZyBwb2ludCByb3VuZGluZyBlcnJvcnNcbiAgICBpZiAoKE1hdGguYWJzKG4gLSBtYXgpIDwgMC4wMDAwMDEpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgaW50byBbMCwgMV0gcmFuZ2UgaWYgaXQgaXNuJ3QgYWxyZWFkeVxuICAgIHJldHVybiAobiAlIG1heCkgLyBwYXJzZUZsb2F0KG1heCk7XG59XG5cbi8vIEZvcmNlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMVxuZnVuY3Rpb24gY2xhbXAwMSh2YWwpIHtcbiAgICByZXR1cm4gbWF0aE1pbigxLCBtYXRoTWF4KDAsIHZhbCkpO1xufVxuXG4vLyBQYXJzZSBhIGJhc2UtMTYgaGV4IHZhbHVlIGludG8gYSBiYXNlLTEwIGludGVnZXJcbmZ1bmN0aW9uIHBhcnNlSW50RnJvbUhleCh2YWwpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsLCAxNik7XG59XG5cbi8vIE5lZWQgdG8gaGFuZGxlIDEuMCBhcyAxMDAlLCBzaW5jZSBvbmNlIGl0IGlzIGEgbnVtYmVyLCB0aGVyZSBpcyBubyBkaWZmZXJlbmNlIGJldHdlZW4gaXQgYW5kIDFcbi8vIDxodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc0MjIwNzIvamF2YXNjcmlwdC1ob3ctdG8tZGV0ZWN0LW51bWJlci1hcy1hLWRlY2ltYWwtaW5jbHVkaW5nLTEtMD5cbmZ1bmN0aW9uIGlzT25lUG9pbnRaZXJvKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT0gXCJzdHJpbmdcIiAmJiBuLmluZGV4T2YoJy4nKSAhPSAtMSAmJiBwYXJzZUZsb2F0KG4pID09PSAxO1xufVxuXG4vLyBDaGVjayB0byBzZWUgaWYgc3RyaW5nIHBhc3NlZCBpbiBpcyBhIHBlcmNlbnRhZ2VcbmZ1bmN0aW9uIGlzUGVyY2VudGFnZShuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuID09PSBcInN0cmluZ1wiICYmIG4uaW5kZXhPZignJScpICE9IC0xO1xufVxuXG4vLyBGb3JjZSBhIGhleCB2YWx1ZSB0byBoYXZlIDIgY2hhcmFjdGVyc1xuZnVuY3Rpb24gcGFkMihjKSB7XG4gICAgcmV0dXJuIGMubGVuZ3RoID09IDEgPyAnMCcgKyBjIDogJycgKyBjO1xufVxuXG4vLyBSZXBsYWNlIGEgZGVjaW1hbCB3aXRoIGl0J3MgcGVyY2VudGFnZSB2YWx1ZVxuZnVuY3Rpb24gY29udmVydFRvUGVyY2VudGFnZShuKSB7XG4gICAgaWYgKG4gPD0gMSkge1xuICAgICAgICBuID0gKG4gKiAxMDApICsgXCIlXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIG47XG59XG5cbi8vIENvbnZlcnRzIGEgZGVjaW1hbCB0byBhIGhleCB2YWx1ZVxuZnVuY3Rpb24gY29udmVydERlY2ltYWxUb0hleChkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQocGFyc2VGbG9hdChkKSAqIDI1NSkudG9TdHJpbmcoMTYpO1xufVxuLy8gQ29udmVydHMgYSBoZXggdmFsdWUgdG8gYSBkZWNpbWFsXG5mdW5jdGlvbiBjb252ZXJ0SGV4VG9EZWNpbWFsKGgpIHtcbiAgICByZXR1cm4gKHBhcnNlSW50RnJvbUhleChoKSAvIDI1NSk7XG59XG5cbnZhciBtYXRjaGVycyA9IChmdW5jdGlvbigpIHtcblxuICAgIC8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXZhbHVlcy8jaW50ZWdlcnM+XG4gICAgdmFyIENTU19JTlRFR0VSID0gXCJbLVxcXFwrXT9cXFxcZCslP1wiO1xuXG4gICAgLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtdmFsdWVzLyNudW1iZXItdmFsdWU+XG4gICAgdmFyIENTU19OVU1CRVIgPSBcIlstXFxcXCtdP1xcXFxkKlxcXFwuXFxcXGQrJT9cIjtcblxuICAgIC8vIEFsbG93IHBvc2l0aXZlL25lZ2F0aXZlIGludGVnZXIvbnVtYmVyLiAgRG9uJ3QgY2FwdHVyZSB0aGUgZWl0aGVyL29yLCBqdXN0IHRoZSBlbnRpcmUgb3V0Y29tZS5cbiAgICB2YXIgQ1NTX1VOSVQgPSBcIig/OlwiICsgQ1NTX05VTUJFUiArIFwiKXwoPzpcIiArIENTU19JTlRFR0VSICsgXCIpXCI7XG5cbiAgICAvLyBBY3R1YWwgbWF0Y2hpbmcuXG4gICAgLy8gUGFyZW50aGVzZXMgYW5kIGNvbW1hcyBhcmUgb3B0aW9uYWwsIGJ1dCBub3QgcmVxdWlyZWQuXG4gICAgLy8gV2hpdGVzcGFjZSBjYW4gdGFrZSB0aGUgcGxhY2Ugb2YgY29tbWFzIG9yIG9wZW5pbmcgcGFyZW5cbiAgICB2YXIgUEVSTUlTU0lWRV9NQVRDSDMgPSBcIltcXFxcc3xcXFxcKF0rKFwiICsgQ1NTX1VOSVQgKyBcIilbLHxcXFxcc10rKFwiICsgQ1NTX1VOSVQgKyBcIilbLHxcXFxcc10rKFwiICsgQ1NTX1VOSVQgKyBcIilcXFxccypcXFxcKT9cIjtcbiAgICB2YXIgUEVSTUlTU0lWRV9NQVRDSDQgPSBcIltcXFxcc3xcXFxcKF0rKFwiICsgQ1NTX1VOSVQgKyBcIilbLHxcXFxcc10rKFwiICsgQ1NTX1VOSVQgKyBcIilbLHxcXFxcc10rKFwiICsgQ1NTX1VOSVQgKyBcIilbLHxcXFxcc10rKFwiICsgQ1NTX1VOSVQgKyBcIilcXFxccypcXFxcKT9cIjtcblxuICAgIHJldHVybiB7XG4gICAgICAgIENTU19VTklUOiBuZXcgUmVnRXhwKENTU19VTklUKSxcbiAgICAgICAgcmdiOiBuZXcgUmVnRXhwKFwicmdiXCIgKyBQRVJNSVNTSVZFX01BVENIMyksXG4gICAgICAgIHJnYmE6IG5ldyBSZWdFeHAoXCJyZ2JhXCIgKyBQRVJNSVNTSVZFX01BVENINCksXG4gICAgICAgIGhzbDogbmV3IFJlZ0V4cChcImhzbFwiICsgUEVSTUlTU0lWRV9NQVRDSDMpLFxuICAgICAgICBoc2xhOiBuZXcgUmVnRXhwKFwiaHNsYVwiICsgUEVSTUlTU0lWRV9NQVRDSDQpLFxuICAgICAgICBoc3Y6IG5ldyBSZWdFeHAoXCJoc3ZcIiArIFBFUk1JU1NJVkVfTUFUQ0gzKSxcbiAgICAgICAgaHN2YTogbmV3IFJlZ0V4cChcImhzdmFcIiArIFBFUk1JU1NJVkVfTUFUQ0g0KSxcbiAgICAgICAgaGV4MzogL14jPyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLFxuICAgICAgICBoZXg2OiAvXiM/KFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC8sXG4gICAgICAgIGhleDQ6IC9eIz8oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8sXG4gICAgICAgIGhleDg6IC9eIz8oWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC9cbiAgICB9O1xufSkoKTtcblxuLy8gYGlzVmFsaWRDU1NVbml0YFxuLy8gVGFrZSBpbiBhIHNpbmdsZSBzdHJpbmcgLyBudW1iZXIgYW5kIGNoZWNrIHRvIHNlZSBpZiBpdCBsb29rcyBsaWtlIGEgQ1NTIHVuaXRcbi8vIChzZWUgYG1hdGNoZXJzYCBhYm92ZSBmb3IgZGVmaW5pdGlvbikuXG5mdW5jdGlvbiBpc1ZhbGlkQ1NTVW5pdChjb2xvcikge1xuICAgIHJldHVybiAhIW1hdGNoZXJzLkNTU19VTklULmV4ZWMoY29sb3IpO1xufVxuXG4vLyBgc3RyaW5nSW5wdXRUb09iamVjdGBcbi8vIFBlcm1pc3NpdmUgc3RyaW5nIHBhcnNpbmcuICBUYWtlIGluIGEgbnVtYmVyIG9mIGZvcm1hdHMsIGFuZCBvdXRwdXQgYW4gb2JqZWN0XG4vLyBiYXNlZCBvbiBkZXRlY3RlZCBmb3JtYXQuICBSZXR1cm5zIGB7IHIsIGcsIGIgfWAgb3IgYHsgaCwgcywgbCB9YCBvciBgeyBoLCBzLCB2fWBcbmZ1bmN0aW9uIHN0cmluZ0lucHV0VG9PYmplY3QoY29sb3IpIHtcblxuICAgIGNvbG9yID0gY29sb3IucmVwbGFjZSh0cmltTGVmdCwnJykucmVwbGFjZSh0cmltUmlnaHQsICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBuYW1lZCA9IGZhbHNlO1xuICAgIGlmIChuYW1lc1tjb2xvcl0pIHtcbiAgICAgICAgY29sb3IgPSBuYW1lc1tjb2xvcl07XG4gICAgICAgIG5hbWVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29sb3IgPT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICByZXR1cm4geyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwLCBmb3JtYXQ6IFwibmFtZVwiIH07XG4gICAgfVxuXG4gICAgLy8gVHJ5IHRvIG1hdGNoIHN0cmluZyBpbnB1dCB1c2luZyByZWd1bGFyIGV4cHJlc3Npb25zLlxuICAgIC8vIEtlZXAgbW9zdCBvZiB0aGUgbnVtYmVyIGJvdW5kaW5nIG91dCBvZiB0aGlzIGZ1bmN0aW9uIC0gZG9uJ3Qgd29ycnkgYWJvdXQgWzAsMV0gb3IgWzAsMTAwXSBvciBbMCwzNjBdXG4gICAgLy8gSnVzdCByZXR1cm4gYW4gb2JqZWN0IGFuZCBsZXQgdGhlIGNvbnZlcnNpb24gZnVuY3Rpb25zIGhhbmRsZSB0aGF0LlxuICAgIC8vIFRoaXMgd2F5IHRoZSByZXN1bHQgd2lsbCBiZSB0aGUgc2FtZSB3aGV0aGVyIHRoZSB0aW55Y29sb3IgaXMgaW5pdGlhbGl6ZWQgd2l0aCBzdHJpbmcgb3Igb2JqZWN0LlxuICAgIHZhciBtYXRjaDtcbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMucmdiLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyByOiBtYXRjaFsxXSwgZzogbWF0Y2hbMl0sIGI6IG1hdGNoWzNdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5yZ2JhLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyByOiBtYXRjaFsxXSwgZzogbWF0Y2hbMl0sIGI6IG1hdGNoWzNdLCBhOiBtYXRjaFs0XSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaHNsLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIGw6IG1hdGNoWzNdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oc2xhLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIGw6IG1hdGNoWzNdLCBhOiBtYXRjaFs0XSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaHN2LmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIHY6IG1hdGNoWzNdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oc3ZhLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIHY6IG1hdGNoWzNdLCBhOiBtYXRjaFs0XSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaGV4OC5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSksXG4gICAgICAgICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0pLFxuICAgICAgICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdKSxcbiAgICAgICAgICAgIGE6IGNvbnZlcnRIZXhUb0RlY2ltYWwobWF0Y2hbNF0pLFxuICAgICAgICAgICAgZm9ybWF0OiBuYW1lZCA/IFwibmFtZVwiIDogXCJoZXg4XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhleDYuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0pLFxuICAgICAgICAgICAgZzogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gXCJuYW1lXCIgOiBcImhleFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oZXg0LmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzFdICsgJycgKyBtYXRjaFsxXSksXG4gICAgICAgICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0gKyAnJyArIG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSArICcnICsgbWF0Y2hbM10pLFxuICAgICAgICAgICAgYTogY29udmVydEhleFRvRGVjaW1hbChtYXRjaFs0XSArICcnICsgbWF0Y2hbNF0pLFxuICAgICAgICAgICAgZm9ybWF0OiBuYW1lZCA/IFwibmFtZVwiIDogXCJoZXg4XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhleDMuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0gKyAnJyArIG1hdGNoWzFdKSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50RnJvbUhleChtYXRjaFsyXSArICcnICsgbWF0Y2hbMl0pLFxuICAgICAgICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdICsgJycgKyBtYXRjaFszXSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gXCJuYW1lXCIgOiBcImhleFwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdDQUcyUGFybXMocGFybXMpIHtcbiAgICAvLyByZXR1cm4gdmFsaWQgV0NBRzIgcGFybXMgZm9yIGlzUmVhZGFibGUuXG4gICAgLy8gSWYgaW5wdXQgcGFybXMgYXJlIGludmFsaWQsIHJldHVybiB7XCJsZXZlbFwiOlwiQUFcIiwgXCJzaXplXCI6XCJzbWFsbFwifVxuICAgIHZhciBsZXZlbCwgc2l6ZTtcbiAgICBwYXJtcyA9IHBhcm1zIHx8IHtcImxldmVsXCI6XCJBQVwiLCBcInNpemVcIjpcInNtYWxsXCJ9O1xuICAgIGxldmVsID0gKHBhcm1zLmxldmVsIHx8IFwiQUFcIikudG9VcHBlckNhc2UoKTtcbiAgICBzaXplID0gKHBhcm1zLnNpemUgfHwgXCJzbWFsbFwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChsZXZlbCAhPT0gXCJBQVwiICYmIGxldmVsICE9PSBcIkFBQVwiKSB7XG4gICAgICAgIGxldmVsID0gXCJBQVwiO1xuICAgIH1cbiAgICBpZiAoc2l6ZSAhPT0gXCJzbWFsbFwiICYmIHNpemUgIT09IFwibGFyZ2VcIikge1xuICAgICAgICBzaXplID0gXCJzbWFsbFwiO1xuICAgIH1cbiAgICByZXR1cm4ge1wibGV2ZWxcIjpsZXZlbCwgXCJzaXplXCI6c2l6ZX07XG59XG5cbi8vIE5vZGU6IEV4cG9ydCBmdW5jdGlvblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHRpbnljb2xvcjtcbn1cbi8vIEFNRC9yZXF1aXJlanM6IERlZmluZSB0aGUgbW9kdWxlXG5lbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24gKCkge3JldHVybiB0aW55Y29sb3I7fSk7XG59XG4vLyBCcm93c2VyOiBFeHBvc2UgdG8gd2luZG93XG5lbHNlIHtcbiAgICB3aW5kb3cudGlueWNvbG9yID0gdGlueWNvbG9yO1xufVxuXG59KShNYXRoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW55Y29sb3IyL3Rpbnljb2xvci5qc1xuLy8gbW9kdWxlIGlkID0gNjI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeEpBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9