import React, { Component } from 'react'
import './Wine.css'

 class Wine extends Component {
  render() {
    return (
    <span>{this.props.title} + {this.props.description} + {this.props.rating}</span>
    )
  }
}
export default Wine

