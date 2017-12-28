/**
 *
 * PracticeClock.js 文件作用
 * @author Administrator<353486474@QQ.COM>
 * @date 2017/11/10
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
class Clock extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        // clearInterval(this.time)
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Hello, world!"),
            React.createElement("h2", null,
                "It is ",
                this.state.date.toLocaleTimeString(),
                ".")));
    }
}
exports.default = (Clock);
//# sourceMappingURL=PracticeClock.js.map