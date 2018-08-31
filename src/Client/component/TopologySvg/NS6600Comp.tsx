/**
 *
 * NS6600Comp.js 文件作用
 * @author wuke<120907221@QQ.COM>
 * @date 2018/5/16
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
import * as React from 'react';
import {PureComponent} from 'react';
import NS6600 from '../../asset/imgs/NSS6600.png';
import HoverInfoComp from '../../component/HoverInfoComp/HoverInfoComp';

class NS6600Comp extends React.PureComponent <any, any> {
    constructor(props){
        super(props);
        this.state={
            detailShow:'none',
            x:0,
            y:0,
            id:'',
            upstream:'',
            downstream:'',
            position:'',
            status:''
        }
        this.mouseOut = this.mouseOut.bind(this)
    }

    mouseOut(){
        this.setState({
            detailShow:'none',
        })
    }

    render(){
        const data =[
            {
                id:'port_1',
                status:"运行中",
                upstream:'1M',
                downstream:'1M',
                position:'UT-1'
            },
            {
                id:'port_2',
                status:"关闭",
                upstream:'1M',
                downstream:'1M',
                position:'UT-2'
            },
            {
                id:'port_3',
                status:"运行中",
                upstream:'1M',
                downstream:'1M',
                position:'UT-3'
            },
            {
                id:'port_4',
                status:"运行中",
                upstream:'1M',
                downstream:'1M',
                position:'UT-4'
            },
            {
                id:'port_5',
                status:"关闭",
                upstream:'1M',
                downstream:'1M',
                position:'UT-4'
            },
            {
                id:'port_6',
                status:"运行中",
                upstream:'1M',
                downstream:'1M',
                position:'UT-4'
            },
            {
                id:'port_7',
                status:"运行中",
                upstream:'1M',
                downstream:'1M',
                position:'UT-4'
            },
            {
                id:'port_8',
                status:"关闭",
                upstream:'1M',
                downstream:'1M',
                position:'UT-4'
            }
        ];
        const portInfo=[
            { id:"1", height:"11", width:"16", y:"209.833081", x:"79.831655"},
            { id:"2", height:"11", width:"16", y:"192.5", x:"79.833371"},
            { id:"3", height:"11", width:"16", y:"209.833081", x:"97.498063"},
            { id:"4", height:"11", width:"16", y:"192.5", x:"97.499837"},
            { id:"5", height:"11", width:"16", y:"209.833081", x:"114.831143"},
            { id:"6", height:"11", width:"16", y:"192.5", x:"115.166303"},
            { id:"7", height:"11", width:"16", y:"209.833081", x:"132.164223"},
            { id:"8", height:"11", width:"16", y:"192.5", x:"132.499421"},
            { id:"9", height:"11", width:"16", y:"209.833081", x:"149.497302"},
            { id:"10", height:"11", width:"16", y:"192.5", x:"149.999216"},
            { id:"11", height:"11", width:"16", y:"209.833081", x:"167.16371"},
            { id:"12", height:"11", width:"16", y:"192.5", x:"167.499005"},
            { id:"13", height:"11", width:"16", y:"209.833081", x:"189.163388"},
            { id:"14", height:"11", width:"16", y:"192.5", x:"189.49826"},
            { id:"15", height:"11", width:"16", y:"209.833081", x:"206.829797"},
            { id:"16", height:"11", width:"16", y:"192.5", x:"207.164364"},
            { id:"17", height:"11", width:"16", y:"209.833081", x:"224.496205"},
            { id:"18", height:"11", width:"16", y:"192.5", x:"224.497141"},
            { id:"19", height:"11", width:"16", y:"209.833081", x:"241.829284"},
            { id:"20", height:"11", width:"16", y:"192.5", x:"241.829912"},
            { id:"21", height:"11", width:"16", y:"209.833081", x:"259.162368"},
            { id:"22", height:"11", width:"16", y:"192.5", x:"259.162683"},
            { id:"23", height:"11", width:"16", y:"209.833081", x:"276.49545"},
            { id:"24", height:"11", width:"16", y:"192.5", x:"276.495444"},
            { id:"25", height:"11", width:"16", y:"209.833081", x:"298.495129"},
            { id:"26", height:"11", width:"16", y:"192.5", x:"298.495122"},
            { id:"27", height:"11", width:"16", y:"209.833081", x:"315.828208"},
            { id:"28", height:"11", width:"16", y:"192.5", x:"315.828202"},
            { id:"29", height:"11", width:"16", y:"209.833081", x:"333.161288"},
            { id:"30", height:"11", width:"16", y:"192.5", x:"333.161281"},
            { id:"31", height:"11", width:"16", y:"209.833081", x:"350.494368"},
            { id:"32", height:"11", width:"16", y:"192.5", x:"350.494361"},
            { id:"33", height:"11", width:"16", y:"209.833081", x:"367.827451"},
            { id:"34", height:"11", width:"16", y:"192.5", x:"367.827441"},
            { id:"35", height:"11", width:"16", y:"209.83308", x:"385.160594"},
            { id:"36", height:"11", width:"16", y:"192.5", x:"385.16052"},
            { id:"37", height:"11", width:"16", y:"209.499752", x:"408.214267"},
            { id:"38", height:"11", width:"16", y:"192.5", x:"408.160125"},
            { id:"39", height:"11", width:"16", y:"209.499752", x:"425.547347"},
            { id:"40", height:"11", width:"16", y:"192.5", x:"425.493204"},
            { id:"41", height:"11", width:"16", y:"209.499752", x:"442.880427"},
            { id:"42", height:"11", width:"16", y:"192.5", x:"442.826284"},
            { id:"43", height:"11", width:"16", y:"209.499752", x:"460.492683"},
            { id:"44", height:"11", width:"16", y:"192.5", x:"460.159364"},
            { id:"45", height:"11", width:"16", y:"209.499752", x:"477.825775"},
            { id:"46", height:"11", width:"16", y:"192.5", x:"477.492444"},
            { id:"47", height:"11", width:"16", y:"209.499752", x:"495.158859"},
            { id:"48", height:"11", width:"16", y:"192.5", x:"494.825523"},

            { id:"LPU1_1", height:"9", width:"15", y:"262.496279", x:"294.19666"},
            { id:"LPU1_2", height:"9", width:"15", y:"247.832524", x:"294.16179"},
            { id:"LPU1_3", height:"9", width:"15", y:"262.496266", x:"310.860134"},
            { id:"LPU1_4", height:"9", width:"15", y:"247.832524", x:"311.161541"},
            { id:"LPU1_5", height:"9", width:"15", y:"262.496279", x:"327.856876"},
            { id:"LPU1_6", height:"9", width:"15", y:"247.832524", x:"328.161293"},
            { id:"LPU1_7", height:"9", width:"15", y:"262.496279", x:"344.853616"},
            { id:"LPU1_8", height:"9", width:"15", y:"247.832524", x:"345.161046"},
            { id:"LPU1_9", height:"9", width:"15", y:"262.16301", x:"361.85036"},
            { id:"LPU1_10", height:"9", width:"15", y:"247.832524", x:"361.827469"},
            { id:"LPU1_11", height:"9", width:"15", y:"262.162992", x:"378.513827"},
            { id:"LPU1_12", height:"9", width:"15", y:"247.832524", x:"378.827218"},
            { id:"LPU1_13", height:"9", width:"15", y:"262.162992", x:"406.175192"},
            { id:"LPU1_14", height:"9", width:"15", y:"247.499196", x:"406.160152"},
            { id:"LPU1_15", height:"9", width:"15", y:"262.162997", x:"422.838666"},
            { id:"LPU1_16", height:"9", width:"15", y:"247.499196", x:"423.159905"},
            { id:"LPU1_17", height:"9", width:"15", y:"262.162997", x:"439.835406"},
            { id:"LPU1_18", height:"9", width:"15", y:"247.499195", x:"439.826387"},
            { id:"LPU1_19", height:"9", width:"15", y:"262.16301", x:"456.83215"},
            { id:"LPU1_20", height:"9", width:"15", y:"247.499196", x:"456.826139"},
            { id:"LPU1_21", height:"9", width:"15", y:"262.162997", x:"473.828889"},
            { id:"LPU1_22", height:"9", width:"15", y:"247.499195", x:"473.825887"},
            { id:"LPU1_23", height:"9", width:"15", y:"262.16301", x:"490.492366"},
            { id:"LPU1_24", height:"9", width:"15", y:"247.165867", x:"490.825643"},

            { id:"LPU2_1", height:"9", width:"15", y:"316.152671", x:"294.529944"},
            { id:"LPU2_2", height:"9", width:"15", y:"301.155545", x:"294.196666"},
            { id:"LPU2_3", height:"9", width:"15", y:"316.152671", x:"311.193416"},
            { id:"LPU2_4", height:"9", width:"15", y:"301.488789", x:"311.193408"},
            { id:"LPU2_5", height:"9", width:"15", y:"316.152671", x:"328.190158"},
            { id:"LPU2_6", height:"9", width:"15", y:"301.488789", x:"328.190148"},
            { id:"LPU2_7", height:"9", width:"15", y:"316.152671", x:"344.853633"},
            { id:"LPU2_8", height:"9", width:"15", y:"301.488806", x:"344.853623"},
            { id:"LPU2_9", height:"9", width:"15", y:"316.152689", x:"361.850369"},
            { id:"LPU2_10", height:"9", width:"15", y:"301.488789", x:"361.850363"},
            { id:"LPU2_11", height:"9", width:"15", y:"316.152671", x:"378.513842"},
            { id:"LPU2_12", height:"9", width:"15", y:"301.488802", x:"378.513838"},
            { id:"LPU2_13", height:"9", width:"15", y:"316.152671", x:"405.841937"},
            { id:"LPU2_14", height:"9", width:"15", y:"301.155545", x:"405.84193"},
            { id:"LPU2_15", height:"9", width:"15", y:"316.152689", x:"422.838677"},
            { id:"LPU2_16", height:"9", width:"15", y:"301.155537", x:"422.838673"},
            { id:"LPU2_17", height:"9", width:"15", y:"316.152689", x:"439.835421"},
            { id:"LPU2_18", height:"9", width:"15", y:"301.15555", x:"439.83541"},
            { id:"LPU2_19", height:"9", width:"15", y:"316.152671", x:"456.498896"},
            { id:"LPU2_20", height:"9", width:"15", y:"301.15555", x:"456.832159"},
            { id:"LPU2_21", height:"9", width:"15", y:"316.152671", x:"473.162369"},
            { id:"LPU2_22", height:"9", width:"15", y:"301.155545", x:"473.495622"},
            { id:"LPU2_23", height:"9", width:"15", y:"316.152671", x:"490.159107"},
            { id:"LPU2_24", height:"9", width:"15", y:"301.155545", x:"490.159105"},
        ]
        return(
            <div style={{width:600,height:408}}>
                <HoverInfoComp
                    id={this.state.id}
                    upstream={this.state.upstream}
                    downstream={this.state.downstream}
                    position={this.state.position}
                    status={this.state.status}
                    dx={this.state.x}
                    dy={this.state.y}
                    detailShow={this.state.detailShow}
                />
                <svg style={{width:'70%' ,height:'70%'}} viewBox="0 0 640 408" xmlns="http://www.w3.org/2000/svg">
                    <image xlinkHref={NS6600}  x="-0.5" y="0" width="640" height="408"/>

                    <g strokeWidth="0" stroke="red" fill="#fff" fillOpacity='0' onMouseLeave={this.mouseOut}>
                        {data.map((item,index)=>{
                            return <rect key={index}
                                         x={portInfo[index].x}
                                         y={portInfo[index].y}
                                         width={portInfo[index].width}
                                         height={portInfo[index].height}
                                         onMouseEnter={(e)=>{
                                             this.setState({
                                                 detailShow:'block',
                                                 x:e.pageX,
                                                 y:e.pageY,
                                                 id:item.id,
                                                 upstream:item.upstream,
                                                 downstream:item.downstream,
                                                 position:item.position,
                                                 status:item.status,
                                             })
                                             e.preventDefault();
                                             e.stopPropagation();
                                         }}
                            />
                        })}
                    </g>
                </svg>
            </div>

        )
    }
}


export default (NS6600Comp)