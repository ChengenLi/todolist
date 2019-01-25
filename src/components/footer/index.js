import React, { Component } from 'react'
import './index.css'

class Footer extends Component {
    clear = () => {
        this.props.clear()
    }
    render() {
        return (<div className="footer">Copyright © 2014 todolist.cn <span className="clear-btn" onClick={this.clear}>clear</span></div>)
    }
}

export default Footer