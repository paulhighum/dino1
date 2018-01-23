import React, { Component } from "react"
import "./App.css"
import { Header } from "./header"
import { Section } from "./section"
import { Form } from "./form"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.updateData = this.updateData.bind(this)
  }

  componentDidMount() {
    fetch("./listings.json")
      .then(response => response.json())
      .then(response => this.setState({ data: response }))
  }

  updateData(data) {
    let newData = this.state.data
    newData.unshift(data)
    return this.setState({ data: newData })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Section listings={this.state.data} />
          <aside id="side-bar">
            <h3>Add a Job</h3>
            <Form updateData={this.updateData} />
          </aside>
        </main>
      </div>
    )
  }
}

export default App
