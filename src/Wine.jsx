import React, { Component } from 'react'
import './Wine.css'
import heart from './assets/heart.png'

 class Wine extends Component {
  render() {
    return (
      <>
    <span>{this.props.title},{this.props.description}, {this.props.amount}</span>
    <div>{this.props.rating}</div>
    {this.props.heart ? <div> <img src={heart} alt="" /> </div>: null}
    </>
    )
  }
}
export default Wine

