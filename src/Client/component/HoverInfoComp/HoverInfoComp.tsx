/**
 *
 * HoverInfoComp.js 文件作用
 * @author wuke<120907221@QQ.COM>
 * @date 2018/5/10
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
import * as React from 'react';
import {PureComponent} from 'react';
import {Row,Col} from 'antd';
import './HoverInfoComp.scss';

interface hoverItem{
    id?:string,
    position?:string,
    upstream?:string,
    downstream?:string,
    status?:string,
    dx?:number,
    dy?:number,
    detailShow?:string
}

const HoverInfoComp: React.SFC<hoverItem> = (props) => {
    return (
        <div className="hoverInfo" style={{left:props.dx,top:props.dy,display:props.detailShow}}>
            <p>ID : {props.id}</p>
            <p>位置 :  {props.position}</p>
            <p>状态 :  <span style={{color:props.status=="运行中"?"#6ecc59":"#f69c8d"}}>{props.status}</span></p>
            <p>上行流量 :  {props.upstream}</p>
            <p>下行流量 :  {props.downstream}</p>
        </div>
    )
}

export default (HoverInfoComp)