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
import { Carousel,Row,Col,Tabs,Button } from 'antd';
import {render} from "react-dom";
import './Practice.scss'

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
        //正确做法是在具体调用的时候再调用父组件的props
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
            options.push(<option value={this.state.name[option]} key={option}>{this.state.name[option]}</option>)
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
            <Color/>
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
            <br/>
            <Foo name='React组件---2018.3'>props.children的用法</Foo>
            <br/>
            <Clock></Clock>
            <br/>
            <CommentBox box={node}></CommentBox>
            <br/>
            <Comp></Comp>
            <br/>
            <Showhide></Showhide>
            <br/>
            <MyClock></MyClock>
            <br/>
            <List></List>
            <br/>
            <SliderImage></SliderImage>
            <br/>
            <TextColor></TextColor>
            <br/>
            {/*<HoverInfoComp x={500} id={123} name={"niaho"}></HoverInfoComp>*/}
            {/*<br/>*/}
            {/*<Grid></Grid>*/}
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
            backgroundColor: '#ffcecf'
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
            hello:'请输入你的名字!'
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
                <input list="Name" defaultValue={this.state.hello} onChange={this.handleChange}/>
                <datalist id="Name">
                    <option value="吴柯"></option>
                    <option value="吴京"></option>
                    <option value="吴奇隆"></option>
                    <option value="吴彦祖"></option>
                    <option value="吴尊"></option>
                    <option value="吴克羣"></option>
                    <option value="吴亦凡"></option>
                </datalist>
                <br/>
                <button type="submit">提交</button>
            </form>
    }
}

const CardForm: React.SFC<any>=(props)=>{
    const TabPane = Tabs.TabPane;
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

//React 复习          (2018.3.13)
// const element = <h1>函数式组件</h1>  //React 能代表DOM标签也可以代表用户定义的组件
//const element = <Welcome name="Sara" />;
function Foo(props){
    return <div>
        <h1>Hello,{props.name}</h1>
            <h2>{props.children}</h2>
          </div>

}
class Clock extends React.Component <any, any> {
    constructor(props){
        super(props);
        this.state = {date:new Date()}; //唯一可以分配 this.state 的地方是构造函数。(初始化sate)
    }
    componentDidMount(){
        setInterval(
            ()=>this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        // clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }
    render(){
        return (
            <h1>时间组件：{this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}.</h1>
        )
    }
}

class CommentForm extends React.Component<any,any>{
    render(){
        return(
            <div>
                <div>{this.props.author}</div>
                {/*此处理解：为CommentForm组件添加了一个author属性,React所有属性都在props里*/}
                <div>{this.props.children}</div>
            </div>
        )
    }
}

class CommentList extends React.Component<any,any>{
    render(){
        //console.log(this.props.message);
        let commentNode = this.props.message.map((Item,index)=>{  //注意上面没有props参数时，用this.props;
            return <CommentForm key={index} author={Item.author}>{Item.body}</CommentForm>
        })
        return(
            <div>
                {commentNode}
            </div>
        )
    }
}

// class Form extends React.Component{
//
//     handSubmit(e){
//         e.preventDefault();  //阻止事件冒泡
//         const author = this.refs.author.getDOMNode().value.trim();
//         const body = this.refs.body.getDOMNode().value.trim();
//         const form = this.refs.form.getDOMNode();
//         console.log(author,body);
//         form.reset();
//     }
//     render(){
//         return(
//             <form ref='form' onSubmit={e => {this.handSubmit(e)}}>
//                 <input type="text" placeholder="You Name" ref="author"/>
//                 <br/>
//                 <input type="text" placeholder="Input your comment" ref="body"/>
//                 <br/>
//                 <input type="submit" value="Add Comment" />
//             </form>
//         )
//     }
// }

const node=[
    { author:'liming', body:'React渲染列表'},
    { author:'wuke', body:'React渲染列表2'},
    { author:'Hooke', body:'React渲染列表3'}
    ];

class CommentBox extends React.Component<any,any>{
    constructor(props){
        super(props);
        this.state={
            value:props.box
        };
    }
    render(){
        return(
            <div>
                <CommentList message={this.state.value}></CommentList>  {/*node是通过message属性传的*/}

            </div>
        )
    }
}
//智能社React
class Comp extends React.Component<any,any>{
    constructor(...args){
        super(...args); //超类，父类
        this.state = {value:''};

        this.fn = this.fn.bind(this)  //也可以在事件中直接绑定
    }

    fn(ev){
        this.setState({
            value:ev.target.value
        })
    }
    render(){
        return <div>
            <input type='text' onChange={this.fn}/>
            <span> 你的输入为：{this.state.value}</span>
        </div>
    }
}

class Showhide extends React.Component<any,any>{
    constructor(...args){
        super(...args);
        this.state = {display:'none'};
    }
    fn(){
        this.setState({
            display:this.state.display=='block'?'none':'block'
        })
    }
    render(){
        return<div>
            <input type="button" value='显示隐藏' onClick={this.fn.bind(this)}/>
            <div className='box' style={{display:this.state.display}}>I LOVE YOU!</div>
            {/*注意style本来就是一个JSON数据，所以用两个{{}}*/}
        </div>
    }
}

const HoverInfoComp: React.SFC<any> = (props) => {
    return (
        <div className="hoverInfo" style={{left:props.x,top:props.y}}>
        <Row className="hoverInfo_Row" gutter={12}>
            <Col className="hoverInfo_Col" span={14}>ID：</Col>
            <Col className="hoverInfo_Col" span={16} offset={10}>{props.id}</Col>
        </Row>
        <Row className="hoverInfo_Row" gutter={8}>
            <Col className="hoverInfo_Col" span={8}>名称：</Col>
            <Col className="hoverInfo_Col" span={16}>{props.name}</Col>
        </Row>
        <Row className="hoverInfo_Row" gutter={8}>
            <Col className="hoverInfo_Col" span={10}>上行流量：</Col>
            <Col className="hoverInfo_Col" span={16}>{props.type}</Col>
        </Row>
        <Row className="hoverInfo_Row" gutter={8}>
            <Col className="hoverInfo_Col" span={10}>下行流量：</Col>
            <Col className="hoverInfo_Col" span={16}>{props.position}</Col>
        </Row>
        <Row className="hoverInfo_Row" gutter={8}>
            <Col className="hoverInfo_Col" span={8}>状态：</Col>
            <Col className="hoverInfo_Col" span={16}>{props.status}</Col>
        </Row>
    </div>
    )
}

class MyClock extends React.Component<any,any>{
    constructor(...args){
        super(...args);
        this.state = {h:0,m:0,s:0};

        setInterval(() => this.tick(),
            1000)
    }
    componentDidMount(){
        this.tick()
       }

    tick(){
        let oDate = new Date();
        this.setState({
            h:oDate.getHours(),
            m:oDate.getMinutes(),
            s:oDate.getSeconds()
        })
    }
    render(){
        return <div>
            <strong>时钟 <span>{this.state.h}:</span>
            <span>{this.state.m}:</span>
            <span>{this.state.s}</span></strong>
        </div>
    }
}

class LiForm extends React.Component<any,any>{
    constructor(...args){
        super(...args);
    }
    render(){
        return <li>{this.props.value}</li>
    }
}
class List extends React.Component<any,any>{
    constructor(...args){
        super(...args);
        this.state = {arr:[1,2,3,4,5]};
    };
    add(){
        this.setState((prevState)=>{
            return {arr :this.state.arr.concat([Math.floor(Math.random()*100)])}
        })
    };
    delete(){
        this.state.arr.splice(this.state.arr.length-1,1);
        this.setState((prevState)=>{
            return this.state.arr
        });
    };

    render(){
        let result = this.state.arr.map((item,index)=>{
            return <LiForm value={item} key={index}/> });

        return <ul>
            <input type="button" value='AddList' onClick={this.add.bind(this)}/> &nbsp; &nbsp;
            <input type="button" value='DeleteList' onClick={this.delete.bind(this)}/>
            {result}
        </ul>
    }

}

//Ant Design 应用
const SliderImage:React.SFC<any>=(props) =>{
    return <div>
        <div className="card">
            <Carousel autoplay>
                <div className="img1"><h3>灌篮</h3></div>
                <div className="img2"><h3>晚霞</h3></div>
                <div className="img3"><h3>星空</h3></div>
                <div className="img4"><h3>图书馆</h3></div>
            </Carousel>
        </div>
    </div>
}

class TextColor extends React.Component<any,any>{
    constructor(...args){
        super(...args);
        this.state= {color:'#57cc51'};
    }
    fn(){
        /*
        this.setState({
        color:this.state.color =="#57cc51"?'red':'#57cc51'
        })
        */
        this.setState((prevState)=>{   //新的写法
           return {color:this.state.color =="#57cc51"?'red':'#57cc51'}
        })
    }
    render(){
        return <div>
            <input type='button' value='Color' onClick={this.fn.bind(this)}/> &nbsp;
            <span style={{color:this.state.color}}>改变颜色</span>
        </div>
    }
}
const Grid:React.SFC<any>=(props) =>{
    return <div className='gridStyle'>
            <Row gutter={16}>
                <Col span={10}>ID:</Col>
                <Col span={10}>ID2:</Col>
            </Row >
            <Row gutter={16}>
                <Col span={6}>Name:</Col>
            </Row>
            <Row>
                <Col span={6}>Position:</Col>
            </Row>
            <Row>
                <Col span={6}>Status:</Col>
            </Row>
        </div>
}

export default (Comments)