import React, { Component } from 'react';


class MovieRow extends Component {
  render(){
    return <div className="poster" key={this.props.movie.id}>

    <a href={this.props.movie.url} >
      <img src={this.props.movie.poster_src}></img>
    </a>
    
    </div>
  }


}

export default MovieRow;


