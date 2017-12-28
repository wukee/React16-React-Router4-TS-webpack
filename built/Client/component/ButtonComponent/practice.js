/**
 *
 * Practice.js 文件作用
 * @author Administrator<353486474@QQ.COM>
 * @date 2017/11/10
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const antd_1 = require("antd");
const TabPane = antd_1.Tabs.TabPane;
class Content1 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // 注意，props放在此处子组件更新不同步，初始化在实例创建时才会调用一次，
            // 实例创建完后就不会再调用，父组件的props就无法传入子组件；
            //text:"rely To:" +this.props.selectName,
            inputText: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ inputText: event.target.value });
    }
    handleSubmit() {
        //正确做法是在具体调用的时候在调用父组件的props
        console.log("rely To:" + this.props.selectName + "\n" + this.state.inputText);
    }
    render() {
        return React.createElement("div", null,
            React.createElement("textarea", { onChange: this.handleChange, placeholder: "please enter" }),
            React.createElement("button", { onClick: this.handleSubmit }, "\u63D0\u4EA4"));
    }
}
class Comments extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: ['Tom', 'jake', 'Hooke', 'Rose'],
            selectName: ''
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(event) {
        this.setState({ selectName: event.target.value });
    }
    render() {
        var options = [];
        for (let option in this.state.name) {
            options.push(React.createElement("option", { value: this.state.name[option] }, this.state.name[option]));
        }
        return React.createElement("div", null,
            React.createElement("select", { onChange: this.handleSelect }, options),
            React.createElement(Content1, { selectName: this.state.selectName }),
            React.createElement(Welcome, { name: 'wuke' }),
            React.createElement(Comment, { date: comment.date, text: comment.text, author: comment.author }),
            React.createElement("br", null),
            React.createElement(Color, null),
            React.createElement("br", null),
            React.createElement(PassWord, null),
            React.createElement("br", null),
            React.createElement(SubmitForm, null),
            React.createElement("br", null),
            React.createElement(CardForm, null),
            React.createElement("br", null),
            React.createElement(Blong, { posts: posts }),
            React.createElement("br", null),
            React.createElement(MyComponents.DatePicker, { color: 'blue' }),
            React.createElement("br", null),
            React.createElement(TodoList, null),
            React.createElement("br", null),
            React.createElement(NameForm, null));
    }
}
const Welcome = (props) => {
    return React.createElement("h1", null,
        "Hello,",
        props.name);
};
function formatDate(date) {
    return date.toLocaleDateString();
}
const Avatar = (props) => {
    return (React.createElement("img", { className: "Avatar", src: props.userPicture.avatarUrl, alt: props.userPicture.name }));
};
const UserInfo = (props) => {
    return (React.createElement("div", { className: "UserInfo" },
        React.createElement(Avatar, { userPicture: props.userPicture }),
        React.createElement("div", { className: "UserInfo-name" }, props.userPicture.name)));
};
const Comment = (props) => {
    return (React.createElement("div", { className: "Comment" },
        React.createElement(UserInfo, { userPicture: props.author }),
        React.createElement("div", { className: "Comment-text" }, props.text),
        React.createElement("div", { className: "Comment-date" }, formatDate(props.date))));
};
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
    }
};
//React 事件应用
class Color extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: '#FFFFFF'
        };
        this.handleWheel = this.handleWheel.bind(this);
    }
    handleWheel(event) {
        let newColor = (parseInt(this.state.backgroundColor.substr(1), 16) +
            event.deltaY * 997).toString(16);
        newColor = '#' + newColor.substr(newColor.length - 6).toUpperCase();
        this.setState({
            backgroundColor: newColor
        });
    }
    render() {
        console.log(this.state);
        return React.createElement("div", { onWheel: this.handleWheel, style: this.state },
            React.createElement("h2", null, "ColorChange"));
    }
}
class PassWord extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleKeyPress(event) {
        this.setState({
            password: this.state.password + event.which
        });
        console.log(this.state);
    }
    handleChange(event) {
        event.target.value = '';
    }
    render() {
        return React.createElement("div", null,
            React.createElement("input", { onKeyPress: this.handleKeyPress, onChange: this.handleChange }),
            React.createElement("p", { style: { display: this.state.password.indexOf('495051') >= 0 ? 'inline' : 'none' } }, "You got it!"));
    }
}
class SubmitForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hello: 'Hello,Hooke!'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            hello: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.hello);
    }
    render() {
        return React.createElement("form", { onSubmit: this.handleSubmit },
            React.createElement("input", { type: "text", value: this.state.hello, onChange: this.handleChange }),
            React.createElement("br", null),
            React.createElement("button", { type: "submit" }, "\u63D0\u4EA4"));
    }
}
const CardForm = (props) => {
    const operations = React.createElement(antd_1.Button, null, "Extra Action");
    return (React.createElement(antd_1.Tabs, { tabBarExtraContent: operations, type: "card" },
        React.createElement(TabPane, { tab: "基本信息", key: "1" }, "\u57FA\u672C\u4FE1\u606F"),
        React.createElement(TabPane, { tab: "教育经历", key: "2" }, "\u6559\u80B2\u7ECF\u5386"),
        React.createElement(TabPane, { tab: "工作经历", key: "3" }, "\u5DE5\u4F5C\u65F6\u95F4"),
        React.createElement(TabPane, { tab: "家庭背景", key: "4" }, "\u5BB6\u5EAD\u80CC\u666F"),
        React.createElement(TabPane, { tab: "证书管理", key: "5" }, "\u8BC1\u4E66\u7BA1\u7406"),
        React.createElement(TabPane, { tab: "培训经历", key: "6" }, "\u57F9\u8BAD\u7ECF\u5386"),
        React.createElement(TabPane, { tab: "合同及协议管理", key: "7" }, "\u5408\u540C\u53CA\u534F\u8BAE\u7BA1\u7406"),
        React.createElement(TabPane, { tab: "职务变化", key: "8" }, "\u804C\u52A1\u53D8\u5316"),
        React.createElement(TabPane, { tab: "技术成果", key: "9" }, "\u6280\u672F\u6210\u679C"),
        React.createElement(TabPane, { tab: "项目经历", key: "10" }, "\u9879\u76EE\u7ECF\u5386"),
        React.createElement(TabPane, { tab: "发表论文", key: "11" }, "\u53D1\u8868\u8BBA\u6587")));
};
const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];
const Blong = (props) => {
    const sidebar = (React.createElement("ul", null, props.posts.map((item) => React.createElement("li", { key: item.id }, item.title))));
    const content = props.posts.map((item) => React.createElement("div", { key: item.id },
        React.createElement("h3", null, item.title),
        React.createElement("p", null, item.content)));
    return (React.createElement("div", null,
        sidebar,
        React.createElement("hr", null),
        content));
};
const MyComponents = {
    DatePicker: function DatePicker(props) {
        return React.createElement("div", null,
            "Imagine a ",
            props.color,
            " datepicker here.");
    }
};
const Item = (props) => {
    return React.createElement("li", null, props.message);
};
const TodoList = (props) => {
    const todos = ['wuke', 'Hooke', 'jake', 'rose'];
    return React.createElement("ul", null, todos.map((item, index) => React.createElement(Item, { key: index, message: item })));
};
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.value);
        event.preventDefault();
    }
    render() {
        return (React.createElement("form", { onSubmit: this.handleSubmit },
            React.createElement("label", null,
                "Name:",
                React.createElement("input", { type: "text", ref: (input) => this.input = input })),
            React.createElement("input", { type: "submit", value: "Submit" })));
    }
}
exports.default = (Comments);
//# sourceMappingURL=Practice.js.map