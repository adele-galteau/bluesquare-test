import React, { Component } from 'react'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchbarContent: "",
      searchResult: []
    }

    this.url = "http://www.omdbapi.com/"
    this.enterRequest = this.enterRequest.bind(this)
    this.getMovies = this.getMovies.bind(this)
  }

  enterRequest(e) {
    this.setState({
      searchbarContent: e.target.value
    })
  }

  getMovies() {
    return fetch(
      this.url + "?apikey=acb2afdb&s=" + encodeURIComponent(this.state.searchbarContent.trim()),
      {
        method: 'GET'
      }
    )
      .then(resp => {return resp.json()})
      .then(resp => {
        console.log(resp)
        return resp
      })
      .then(resp => {
        this.setState({
          searchResult: resp.Search
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header enterRequest={this.enterRequest} getMovies={this.getMovies}/>

        <div className="container">
        <Sidebar/>
          <Main movies={this.state.searchResult}/>
        </div>
        <Footer />
      </div>
    )
  }
}
