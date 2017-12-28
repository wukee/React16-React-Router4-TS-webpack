/**
 *
 * button.js 文件作用
 * @author Administrator<353486474@QQ.COM>
 * @date 2017/11/2
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
require("./button.scss");
class ButtonComponent extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            actived: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    isButtonActived(state, value) {
        if (typeof (value) == "undefined") {
            return state.actived ? 'button button-actived' : 'button ';
        }
        else {
            return value ? 'button button-actived' : 'button';
        }
    }
    handleClick(value, onClick) {
        if (typeof (value) == "undefined") {
            onClick(this.state);
            this.setState((prevState) => {
                return {
                    actived: !prevState.actived
                };
            });
        }
        else {
            onClick(!value);
        }
    }
    render() {
        const { text = '按钮', value, fontSize = 24, fontColor = '#697f6a', onClick = () => { } } = this.props;
        return (React.createElement("div", { className: "div1" },
            React.createElement("button", { className: this.isButtonActived(this.state, value), onClick: () => {
                    this.handleClick(value, onClick);
                } }),
            React.createElement("h3", { style: { font: fontSize, color: fontColor } }, text)));
    }
}
exports.default = ButtonComponent;
//# sourceMappingURL=button.js.map