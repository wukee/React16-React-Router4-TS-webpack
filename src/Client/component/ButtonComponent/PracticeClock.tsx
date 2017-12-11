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
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default (Clock)