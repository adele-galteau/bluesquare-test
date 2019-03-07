import React from 'react'

import 'whatwg-fetch'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  enterRequest = (e) => {
    this.props.enterRequest(e)
  }

  submitRequest = (e) => {
    if (e.keyCode === 13) {
      this.props.getMovies()
    }
  }

  render() {
    return (
      <div className="header">

        <div className="title-section">
          <h1>Popcorn Time</h1>
        </div>

        <div className="filter-section">
          <div className="filters">
            <div className="format-section"> 
              <div className="format">
                <h2>Movies</h2>
                <h2>TV Series</h2>
              </div>
            </div>

            <div className="genre-filter">
              <h2>Genre</h2>
              <div className="genre-dropdown">
                <span>All</span>
                <div className="arrow-down"><div></div></div>
              </div>
            </div>
            <div className="sortby-filter">
              <h2>Sort by</h2>
              <div className="sortby-dropdown">
                <span>Popularity</span>
                <div className="arrow-down"><div></div></div>
              </div>
            </div>
          </div>

          <div className="mobile-filter-section">
            <i className="fas fa-bars"></i>
          </div>
          
          <div className="searchbar">
            <input onChange={this.enterRequest} onKeyDown={this.submitRequest} value={this.props.searchbarContent} placeholder="Search"></input>
          </div>
        </div>
          
        </div>
    )
  }
}
