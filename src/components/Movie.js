import React from 'react'

export default class Movie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      poster: this.props.movie.Poster,
      title: this.props.movie.Title,
      type: this.props.movie.Type,
      year: this.props.movie.Year
    }
  }

  render() {
    return (
      <div>
        <img src={this.state.poster} />
        <h1>{this.state.title}</h1>
        <label>{this.state.year}</label>
      </div>
    )
  }
}