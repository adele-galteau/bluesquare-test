import React from 'react'

export default class Movie extends React.Component {
  render() {
    return (
      <div className="movie-thumbnail">
      <div className="movie-img" style={{backgroundImage: `url(${this.props.movie.Poster})`}}></div>
        <h1>
        {this.props.movie.Title.length < 17 ? this.props.movie.Title : this.props.movie.Title.slice(0, 16).concat("...")}</h1>
        <span>{this.props.movie.Year}</span>
      </div>
    )
  } 
}