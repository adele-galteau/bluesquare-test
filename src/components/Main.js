import React from 'react'
import Movie from './Movie'

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: this.props.searchResult != null ? this.props.searchResult : []
    }
  }

  render() {
    return (
      <div className="main">
        {
          this.props.movies ?
          this.props.movies.map(movie => (
            <Movie movie={movie}/>
          ))
          :
          ""
        }
      </div>
    )
  }
}