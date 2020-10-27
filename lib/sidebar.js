"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      type = _ref.type,
      id = _ref.id,
      offsetTop = _ref.offsetTop,
      minWidth = _ref.minWidth;
  _react.default.useEffect(function () {
    var $ = require('jquery');
    var z = $("#staticdynamic"),
        x = window.matchMedia("(min-width: ".concat(minWidth, "px)"));
    var lastScroll = $(window).scrollTop(),
        last = offsetTop,
        t;
    var onScroll = function onScroll() {
      if (type == 'bottom' && Number($("#dynamic").outerHeight()) > Number($(window).outerHeight() - offsetTop)) {
        var eh = Number($("#dynamic").outerHeight()),
            a = Number($("#static").offset().top),
            st = Number($(window).scrollTop());
        if (st + offsetTop >= a && a + eh < Number($("#".concat(id)).outerHeight())) {
          t = Math.round(last - (st - lastScroll));
          if (st - lastScroll > 0) {
            if (t < Math.round($(window).outerHeight() - eh)) {
              t = Math.round($(window).outerHeight() - eh);
            } else if (t > offsetTop) {
              t = offsetTop;
            }
          }
          else {
              if (t < Math.round($(window).outerHeight() - eh)) {
                t = Math.round($(window).outerHeight() - eh);
              } else if (t > offsetTop) {
                t = offsetTop;
              }
            }

          $("#dynamic").attr("style", "z-index:1;position:fixed;top:" + t + "px;width:" + $("#dynamic").outerWidth() + "px;");
        } else {
          t = 84;
          $("#dynamic").attr("style", "position:relative;z-index:1");
        }
        last = t;
        lastScroll = st;
      } else {
        z.attr("style", "z-index:1;position:sticky;top:84px;width:" + $("#dynamic").outerWidth() + "px;");
      }
    };
    var onResize = function onResize() {
      window.removeEventListener('scroll', onScroll);

      if (x.matches) {
        window.addEventListener('scroll', onScroll);
      } else {
        $("#dynamic").attr("style", "position:relative;z-index:1");
      }
    };
    onResize();
    window.addEventListener('resize', onResize);
    return function () {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, [id, minWidth, offsetTop]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "staticdynamic"
  }, /*#__PURE__*/_react.default.createElement("div", {
    key: "static",
    id: "static"
  }), /*#__PURE__*/_react.default.createElement("div", {
    key: "dynamic",
    id: "dynamic"
  }, children));
};
Sidebar.defaultProps = {
  type: 'bottom',
  offsetTop: 84,
  minWidth: 960
};
exports.default = Sidebar;
