import React, { Component } from 'react'
import Container from './Container'
import Header from './Header'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchbarContent: "",
      movies: []
    }

    this.url = "http://www.omdbapi.com/"
  }

  enterRequest = (e) => {
    this.setState({
      searchbarContent: e.target.value
    })
  }

  getMovies = () => {
    return fetch(
      this.url + "?apikey=acb2afdb&s=" + encodeURIComponent(this.state.searchbarContent.trim()),
      {
        method: 'GET'
      }
    )
      .then(resp => {return resp.json()})
      // .then(resp => {
      //   console.log(resp)
      //   return resp
      // })
      .then(resp => {
        this.setState({
          movies: resp.Search
        })
      })
  }

  componentDidMount() {
    return fetch(
      this.url + "?apikey=acb2afdb&s=star wars",
      {
        method: 'GET'
      }
    )
      .then(resp => {return resp.json()})
      .then(resp => this.setState({
        movies: resp.Search
      }))
  }

  render() {
    return (
      <div className="App">
        <Header enterRequest={this.enterRequest} getMovies={this.getMovies} searchbarContent={this.state.searchbarContent}/>

        <Container movies={this.state.movies}/>
      </div>
    )
  }
}
