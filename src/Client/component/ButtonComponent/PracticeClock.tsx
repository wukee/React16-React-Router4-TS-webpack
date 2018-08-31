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
import * as React from 'react';
import {PureComponent} from 'react';

interface orderProps {
//TypeScript中的泛型
}
class Clock extends PureComponent <orderProps, any> {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        setInterval(
            () => this.tick(),
            1000
        )
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
        return (
            <div>
                <h1><strong>Hello,React!</strong></h1>
                <h2><strong>It is {this.state.date.toLocaleTimeString()}.</strong></h2>
            </div>
        );
    }
}

export default (Clock)