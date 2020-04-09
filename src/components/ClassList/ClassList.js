import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students:[]
    }
  }
  componentDidMount = () => {
   axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(results => {
     console.log(this.props)
    this.setState({
      students: results.data
    })
    console.log(results)
   })
  }
  handleGoBack = () => {
    this.props.history.push('/')
  }
  render() {
    const student = this.state.students.map((student, index) => {
    return (
    <Link to={`/student/${student.id}`} key = {index} >
      <h3>{student.first_name}{student.last_name}</h3>
    </Link>
    )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {student}
        <button onClick={this.handleGoBack} >CLICK ME TO GO BACK</button>
      </div>
    )
  }
}