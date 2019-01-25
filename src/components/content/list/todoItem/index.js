import React, { Component } from 'react'
import './index.css'

class ToDoItem extends Component {
    checkboxCheck = () => {
        this.props.item.status === 'working' && this.props.checkboxCheck(this.props.item.id)
    }
    clickDelete = () => {
        this.props.clickDelete(this.props.item.id)
    }
    render() {
        return (<div className={'ToDoItem' + (this.props.item.status === 'finished' ? ' ToDoItem-finish' : '')}>
           <input type="checkbox" onChange={this.checkboxCheck} checked={this.props.item.status === 'finished'} ></input>
           <p>{this.props.item.text}</p>
           <span onClick={this.clickDelete}>-</span> 
        </div>)
    }
}

export default ToDoItem 