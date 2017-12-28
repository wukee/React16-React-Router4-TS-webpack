/**
 *
 * my.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/3
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
function mapStatetoProps(state, ownProps) {
    return {};
}
function mapDispatchtoProps(dispatch) {
    //return bindActionCreators({
    //
    //}, dispatch)
    return {};
}
function Hoc(a) {
    return function (Comp) {
        class myComponent extends react_1.PureComponent {
            render() {
                return (React.createElement(Comp, null));
            }
        }
        return react_redux_1.connect(mapStatetoProps, mapDispatchtoProps)(myComponent);
    };
}
exports.Hoc = Hoc;
//# sourceMappingURL=my.js.map