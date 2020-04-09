import React, { Component } from 'react';

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo:{}
    }
  }
  componentDidMount = () => {
    
  }
  render() {
    return (
      <div className="box">
        <h1>Student</h1>
      </div>
    )
  }
}