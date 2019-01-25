import React, { Component } from 'react'
import List from './list'
import './index.css'
class Content extends Component{
    render() {
        return (<div className="content">
            <List title="正在进行" todo={this.props.todo} status="working"/>
            <List title="已经完成" todo={this.props.todo} status="finished"/>
        </div>)
    }
}

export default Content