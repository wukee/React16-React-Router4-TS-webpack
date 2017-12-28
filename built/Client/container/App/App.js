/**
 * Created by whisper on 2016/11/11
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const SliderComponent_1 = require("../../component/NavBarContainer/SliderComponent");
const ContentContainer_1 = require("../content/ContentContainer");
const react_router_dom_1 = require("react-router-dom");
require("./App.scss");
class App extends react_1.PureComponent {
    render() {
        return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: '/', render: () => {
                    return (react_1.default.createElement("div", null,
                        react_1.default.createElement(SliderComponent_1.default, null),
                        react_1.default.createElement(ContentContainer_1.default, null)));
                } })));
    }
}
exports.default = (App);
//# sourceMappingURL=App.js.map