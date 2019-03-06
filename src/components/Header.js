import React from 'react'

import 'whatwg-fetch'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }

    this.enterRequest = this.enterRequest.bind(this) 
  }

  enterRequest(e) {
    this.props.enterRequest(e)
  }

  submitRequest = () => {
    this.props.getMovies()
  }

  render() {
    return (
      <div className="d-flex header">
          
          <div className="form-group">
            <input onChange={this.enterRequest} className="form-control" value={this.state.searchbarContent}></input>
            <button onClick={this.submitRequest} className="btn btn-light">Search</button>
          </div>
          
        </div>
    )
  }
}
