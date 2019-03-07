import React from 'react'
import Movie from './Movie'

export default class Container extends React.Component {
  render() {
    return (
      <div className="movies-container">
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