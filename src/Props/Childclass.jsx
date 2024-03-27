import React, { Component } from 'react'

export default class Childclass extends Component {
  render() {
    return (
      <div>My name is {this.props.name}</div>
    )
  }
}
