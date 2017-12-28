/**
 * Created by hurong on 2016/12/10.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./Slider.scss");
const antd_1 = require("antd");
const SubMenu = antd_1.Menu.SubMenu;
class SliderComponent extends react_1.PureComponent {
    render() {
        console.log('SliderComponent' + 'rendering');
        return (react_1.default.createElement("div", { className: "sidebar", "data-color": "orange", "data-image": "assets/img/sidebar-5.jpg" },
            react_1.default.createElement("div", { className: "sidebar-wrapper" },
                react_1.default.createElement("div", { className: "logo" },
                    react_1.default.createElement("a", { href: "https://github.com/whisperfairy/", className: "simple-text" }, "Whisper Fairy")),
                react_1.default.createElement(antd_1.Menu, { mode: "inline" },
                    react_1.default.createElement(SubMenu, { key: "sub1", title: react_1.default.createElement("span", null,
                            react_1.default.createElement(antd_1.Icon, { type: "mail" }),
                            react_1.default.createElement("span", null, "\u7528\u7535\u7BA1\u7406")) },
                        react_1.default.createElement(antd_1.Menu.Item, { key: "1" }, "Option 1"),
                        react_1.default.createElement(antd_1.Menu.Item, { key: "2" }, "Option 2"),
                        react_1.default.createElement(antd_1.Menu.Item, { key: "3" }, "Option 3"),
                        react_1.default.createElement(antd_1.Menu.Item, { key: "4" }, "Option 4")),
                    react_1.default.createElement(SubMenu, { key: "sub2", title: react_1.default.createElement("span", null,
                            react_1.default.createElement(antd_1.Icon, { type: "appstore" }),
                            react_1.default.createElement("span", null, "\u4F9B\u6C34\u7BA1\u7406")) },
                        react_1.default.createElement(antd_1.Menu.Item, { key: "5" }, "Option 5"),
                        react_1.default.createElement(antd_1.Menu.Item, { key: "6" }, "Option 6"),
                        react_1.default.createElement(SubMenu, { key: "sub3", title: "Submenu" },
                            react_1.default.createElement(antd_1.Menu.Item, { key: "7" }, "Option 7"),
                            react_1.default.createElement(antd_1.Menu.Item, { key: "8" }, "Option 8"))),
                    react_1.default.createElement(SubMenu, { key: "sub4", title: react_1.default.createElement("span", null,
                            react_1.default.createElement(antd_1.Icon, { type: "setting" }),
                            react_1.default.createElement("span", null, "\u4F9B\u6696\u7BA1\u7406")) },
                        react_1.default.createElement(antd_1.Menu.Item, { key: "9" }, "Option 9"),
                        react_1.default.createElement(antd_1.Menu.Item, { key: "10" }, "Option 10"),
                        react_1.default.createElement(antd_1.Menu.Item, { key: "11" }, "Option 11"),
                        react_1.default.createElement(antd_1.Menu.Item, { key: "12" }, "Option 12")))),
            react_1.default.createElement("div", { className: "slider-background" })));
    }
}
SliderComponent.displayName = 'SliderComponent';
exports.default = SliderComponent;
//# sourceMappingURL=SliderComponent.js.map