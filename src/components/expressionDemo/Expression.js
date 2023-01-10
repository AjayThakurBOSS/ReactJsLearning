import React, { Component } from 'react'

export default class Expression extends Component {
  render() {
    let a = 10;
    let b = 10;
    return (
      <div>
        <>
        <div> {b} + {b} = {a+b}</div>
        </>
      </div>
    )
  }
}
