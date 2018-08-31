/**
 *
 * TopologySvg.js 文件作用
 * @author Administrator<353486474@QQ.COM>
 * @date 2018/5/9
 *
 * @内容 作用
 * @内容 作用
 */

'use strict';
import * as React from 'react';
import {PureComponent} from 'react';
import Svg from '../../asset/imgs/NSS4320-52TF.png';
import HoverInfoComp from '../../component/HoverInfoComp/HoverInfoComp';

class TopologySvg extends React.PureComponent <any, any> {
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
        return(
            <div style={{width:600,height:480}}>
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
                <svg  style={{width:'100%' ,height:'100%', position:'relative', top:'-100px'}} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                    <image xlinkHref={Svg}  x="0" y="0" width="640" height="480"/>

                    <g id='port_up' strokeWidth="0" stroke="red" fill="#fff" fillOpacity='0' onMouseLeave={this.mouseOut}>
                        {data.map((item,index)=>{
                            const position=[
                                            {ip:'port_1', y:306,    x:33.16462},
                                            {ip:'port_2', y:289.5,  x:33},
                                            {ip:'port_3', y:306,    x:52.66462},
                                            {ip:'port_4', y:289.5,  x:52.5},
                                            {ip:'port_5', y:306,    x:72.16462},
                                            {ip:'port_6', y:289.5,  x:71.5},
                                            {ip:'port_7', y:306,    x:91.328284},
                                            {ip:'port_8', y:289.5,  x:91},
                                            {ip:'port_9', y:306,    x:110.328156},
                                            {ip:'port_10', y:289.5, x:110},
                                            {ip:'port_11', y:306,   x:129.661371},
                                            {ip:'port_12', y:289.5, x:129.5},
                                            {ip:'port_13', y:306,   x:159},
                                            {ip:'port_14', y:289.5, x:158.661371},
                                            {ip:'port_15', y:306,   x:178.5},
                                            {ip:'port_16', y:289.5, x:178.161371},
                                            {ip:'port_17', y:306,   x:197.5},
                                            {ip:'port_18', y:289.5, x:197.661371},
                                            {ip:'port_19', y:306,   x:217},
                                            {ip:'port_20', y:289.5, x:217.161371},
                                            {ip:'port_21', y:305.5, x:236.661371},
                                            {ip:'port_22', y:289.5, x:236.661371},
                                            {ip:'port_23', y:305.5, x:255.661371},
                                            {ip:'port_24', y:289.5, x:255.661371},
                                            {ip:'port_25', y:305.5, x:285.494668},
                                            {ip:'port_26', y:289.5, x:284.994668},
                                            {ip:'port_27', y:305.5, x:304.494683},
                                            {ip:'port_28', y:289.5, x:304.494683},
                                            {ip:'port_29', y:305.5, x:323.828061},
                                            {ip:'port_30', y:289.5, x:323.828061},
                                            {ip:'port_31', y:305.5, x:343.494755},
                                            {ip:'port_32', y:289.5, x:343.494755},
                                            {ip:'port_33', y:305.5, x:362.994765},
                                            {ip:'port_34', y:289,   x:362.994765},
                                            {ip:'port_35', y:305.5, x:382.161384},
                                            {ip:'port_36', y:289,   x:382.161384},
                                            {ip:'port_37', y:305.5, x:411.5},
                                            {ip:'port_38', y:289,   x:411.660757},
                                            {ip:'port_39', y:305.5, x:431},
                                            {ip:'port_40', y:289,   x:431.160342},
                                            {ip:'port_41', y:305.5, x:450.5},
                                            {ip:'port_42', y:289,   x:450.659925},
                                            {ip:'port_43', y:305,   x:470},
                                            {ip:'port_44', y:289,   x:470.159514},
                                            {ip:'port_45', y:305,   x:489},
                                            {ip:'port_46', y:289,   x:489.159107},
                                            {ip:'port_47', y:305,   x:508.5},
                                            {ip:'port_48', y:289,   x:508.65869},
                                            ];
                            let dx=position[index].x  +10;
                            let dy=position[index].y -90;
                            return <rect key={index} width='16' height='10'
                                         x={position[index].x}
                                         y={position[index].y}

                                    onMouseEnter={(e)=>{
                                        this.setState({
                                                detailShow:'block',
                                                x:dx,
                                                y:dy,
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

export default TopologySvg