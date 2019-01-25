import React, { Component } from 'react'
import Search from './search'
import './index.css'
class Header extends Component {
    render() {
        return (<div className="header">
            <div className="header-content">
                <div className="header-title">ToDoList</div>
                <Search enterPress={this.props.todo.add}/>
            </div>
        </div>)
    }
}

export default Header