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
import * as React from 'react';
import {PureComponent} from 'react';
import './button.scss'
import {isUndefined} from "util";

export interface orderProps {
    text?:string,//文字
    value?:boolean,//默认值
    fontSize?:number,//字体大小
    fontColor?:string,//字体颜色
    onClick?:(value:boolean)=>void//点击事件
}

class ButtonComponent extends PureComponent <orderProps, any> {
    constructor(props){
        super(props)
        this.state={
            actived:false
        }
       this.handleClick=this.handleClick.bind(this)
    }
    isButtonActived(state,value){

        if(typeof(value) == "undefined"){
           return state.actived?'button button-actived' :'button '
        }else {
           return  value?'button button-actived' :'button'
        }

    }
    handleClick(value,onClick){
        if(typeof(value) == "undefined"){
            onClick(this.state);
            this.setState((prevState)=>{return {
                actived:!prevState.actived
            }})
        }else {
            onClick(!value);
        }
    }
    render() {
        const {text='按钮',value,fontSize=24,fontColor='#697f6a',onClick=()=>{}}=this.props
        return (
            <div className="div1">
                <button className={this.isButtonActived(this.state,value)} onClick={()=>{
                    this.handleClick(value,onClick)
                }}></button>
                <h3 style={{font:fontSize, color:fontColor}}>{text}</h3>
            </div>

        )
    }
}

export default ButtonComponent