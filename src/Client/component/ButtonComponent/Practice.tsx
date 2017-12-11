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
import * as React from 'react';
import {PureComponent} from 'react';
import { Tabs,Button } from 'antd';
const TabPane = Tabs.TabPane;

interface orderProps {
}

class Content1 extends React.PureComponent<any,any>{
    constructor(props){
        super(props);
        this.state={
            // 注意，props放在此处子组件更新不同步，初始化在实例创建时才会调用一次，
            // 实例创建完后就不会再调用，父组件的props就无法传入子组件；
            //text:"rely To:" +this.props.selectName,
            inputText:"",
        };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({inputText:event.target.value});
    }
    handleSubmit(){
        //正确做法是在具体调用的时候在调用父组件的props
        console.log("rely To:" +this.props.selectName +"\n" + this.state.inputText);
    }

    render(){
        return <div>
            <textarea onChange={this.handleChange} placeholder="please enter"></textarea>
            <button onClick={this.handleSubmit}>提交</button>
        </div>
    }
}
class Comments extends React.PureComponent<any,any>{
    constructor(props){
        super(props);
        this.state={
            name: ['Tom','jake','Hooke','Rose'],
            selectName: ''
        }
        this.handleSelect=this.handleSelect.bind(this)
    }

    handleSelect(event){
        this.setState({selectName:event.target.value})
    }

    render(){
        var options=[];
        for (let option in this.state.name){
            options.push(<option value={this.state.name[option]}>{this.state.name[option]}</option>)
        }
        return <div>
            <select onChange={this.handleSelect}>
                {options}
            </select>
            <Content1 selectName={this.state.selectName}></Content1>

            <Welcome name='wuke'></Welcome>
            <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author} />
            <br/>
            <Color></Color>
            <br/>
            <PassWord></PassWord>
            <br/>
            <SubmitForm></SubmitForm>
            <br/>
            <CardForm></CardForm>
            <br/>
            <Blong posts={posts}></Blong>
            <br/>
            <MyComponents.DatePicker color = 'blue'/>
            <br/>
            <TodoList></TodoList>
            <br/>
            <NameForm></NameForm>
        </div>
    }
}

const Welcome:React.SFC<any>=(props)=>{
    return <h1>Hello,{props.name}</h1>
}

function formatDate(date) {
    return date.toLocaleDateString();
}
const Avatar:React.SFC<any>=(props)=>{
    return (
        <img className="Avatar"
             src={props.userPicture.avatarUrl}
             alt={props.userPicture.name} />
    )
}
const UserInfo:React.SFC<any>=(props)=>{
    return (
        <div className="UserInfo">
        <Avatar userPicture={props.userPicture}/>
        <div className="UserInfo-name">
            {props.userPicture.name}
        </div>
    </div>
    );
}

const Comment:React.SFC<any>=(props)=>{
    return (
        <div className="Comment">
            <UserInfo userPicture={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
        // avatarUrl:'http://2e.zol-img.com.cn/product/101/82/ceY6hG2jeNiGo.jpg'
    }
};

//React 事件应用
class Color extends React.PureComponent<any,any>{
    constructor(props){
        super(props);
        this.state={
            backgroundColor: '#FFFFFF'
        }
        this.handleWheel=this.handleWheel.bind(this)
    }

    handleWheel(event){
        let newColor=(parseInt(this.state.backgroundColor.substr(1),16) +
        event.deltaY*997).toString(16);
        newColor='#'+ newColor.substr(newColor.length - 6).toUpperCase();
        this.setState({
            backgroundColor:newColor
        })
    }
    render(){
        console.log(this.state)
        return <div onWheel={this.handleWheel} style={this.state}>
            <h2>ColorChange</h2>
        </div>
    }
}

class PassWord extends React.PureComponent<any,any>{
    constructor(props){
        super(props);
        this.state={
            password:''
        }
        this.handleKeyPress=this.handleKeyPress.bind(this)
    }
    handleKeyPress(event){
        this.setState({
            password:this.state.password + event.which
        });
        console.log(this.state)
    }
    handleChange(event){
        event.target.value='';
    }
    render(){
        return <div>
            <input onKeyPress={this.handleKeyPress} onChange={this.handleChange}/>
            {/*495051对应event.which编码的123，在此选择p标签的样式*/}
        <p style={{display:this.state.password.indexOf('495051')>=0 ? 'inline':'none'}}>You got it!</p>
        </div>
    }
}

class SubmitForm extends React.PureComponent<any,any>{
    constructor(props){
        super(props);
        this.state={
            hello:'Hello,Hooke!'
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            hello:event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        alert(this.state.hello)
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.hello} onChange={this.handleChange}/>
                <br/>
                <button type="submit">提交</button>
            </form>
    }
}

const CardForm: React.SFC<any>=(props)=>{
    const operations = <Button>Extra Action</Button>;
    return(
        <Tabs tabBarExtraContent={operations} type="card">
            <TabPane tab="基本信息" key="1">基本信息</TabPane>
            <TabPane tab="教育经历" key="2">教育经历</TabPane>
            <TabPane tab="工作经历" key="3">工作时间</TabPane>
            <TabPane tab="家庭背景" key="4">家庭背景</TabPane>
            <TabPane tab="证书管理" key="5">证书管理</TabPane>
            <TabPane tab="培训经历" key="6">培训经历</TabPane>
            <TabPane tab="合同及协议管理" key="7">合同及协议管理</TabPane>
            <TabPane tab="职务变化" key="8">职务变化</TabPane>
            <TabPane tab="技术成果" key="9">技术成果</TabPane>
            <TabPane tab="项目经历" key="10">项目经历</TabPane>
            <TabPane tab="发表论文" key="11">发表论文</TabPane>
        </Tabs>
    )
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
const Blong:React.SFC<any>=(props) =>{
    const sidebar=(
        <ul>
            {props.posts.map((item)=>
             <li key={item.id}>
                {item.title}
                </li>
                )}
        </ul>
    );
    const content=props.posts.map((item)=>
        <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
        </div>
    )

    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}

const MyComponents = {
    DatePicker: function DatePicker(props) {
        return <div>Imagine a {props.color} datepicker here.</div>;
    }
}

const Item = (props)=>{
    return <li>{props.message}</li>
}
const TodoList = (props)=>{
    const todos=['wuke','Hooke','jake','rose'];
    return <ul>
        {todos.map((item,index)=><Item key={index} message={item}/>)}
    </ul>
}

class NameForm extends React.Component {
    input:HTMLInputElement;
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={(input) => this.input = input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}



export default (Comments)