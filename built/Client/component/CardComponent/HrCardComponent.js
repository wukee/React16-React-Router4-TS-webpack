/**
 *
 * HrCardComponent.scss 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2016/12/10
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./_cards.scss");
const HrCardComponent = () => {
    return (react_1.default.createElement("div", { className: "card card-product" },
        react_1.default.createElement("div", { className: "card-image" },
            react_1.default.createElement("a", { href: "#pablo" },
                react_1.default.createElement("img", { className: "img", src: "../assets/img/card-2.jpeg" })),
            react_1.default.createElement("div", { className: "ripple-container" })),
        react_1.default.createElement("div", { className: "card-content" },
            react_1.default.createElement("div", { className: "card-actions" },
                react_1.default.createElement("button", { type: "button", className: "btn btn-danger btn-simple fix-broken-card" },
                    react_1.default.createElement("i", { className: "material-icons" }, "build"),
                    " Fix Header!"),
                react_1.default.createElement("button", { type: "button", className: "btn btn-default btn-simple", "data-placement": "bottom", title: "", "data-original-title": "View" },
                    react_1.default.createElement("i", { className: "material-icons" }, "art_track")),
                react_1.default.createElement("button", { type: "button", className: "btn btn-success btn-simple", "data-placement": "bottom", title: "", "data-original-title": "Edit" },
                    react_1.default.createElement("i", { className: "material-icons" }, "edit")),
                react_1.default.createElement("button", { type: "button", className: "btn btn-danger btn-simple", "data-placement": "bottom", title: "", "data-original-title": "Remove" },
                    react_1.default.createElement("i", { className: "material-icons" }, "close"))),
            react_1.default.createElement("h4", { className: "card-title" },
                react_1.default.createElement("a", { href: "#pablo" }, "Cozy 5 Stars Apartment")),
            react_1.default.createElement("div", { className: "card-description" }, "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.")),
        react_1.default.createElement("div", { className: "card-footer" },
            react_1.default.createElement("div", { className: "price" },
                react_1.default.createElement("h4", null, "$899/night")),
            react_1.default.createElement("div", { className: "stats pull-right" },
                react_1.default.createElement("p", { className: "category" },
                    react_1.default.createElement("i", { className: "material-icons" }, "place"),
                    " Barcelona, Spain")))));
};
exports.default = HrCardComponent;
//# sourceMappingURL=HrCardComponent.js.map