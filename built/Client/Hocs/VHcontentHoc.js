/**
 *
 * VHcontentHoc.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/21
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
function VHcontentHoc() {
    return function (Comp) {
        return class VHcontentHocComponent extends react_1.PureComponent {
            render() {
                return (React.createElement("div", { style: { height: '100vh', width: "100%", padding: '30px' } },
                    React.createElement(Comp, Object.assign({}, this.props))));
            }
        };
    };
}
exports.VHcontentHoc = VHcontentHoc;
//# sourceMappingURL=VHcontentHoc.js.map