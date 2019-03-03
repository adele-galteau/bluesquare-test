import React, { Component } from 'react'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}

  }


  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <Sidebar />
          <Main />
        </div>

        <Footer />
      </div>
    )
  }
}
