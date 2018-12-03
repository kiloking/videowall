import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props)
    console.log('tt')
    this.state = {}

    

    // const movies=[
    //   {id:0, poster_src:'https://placeimg.com/600/370/any'},{id:322, poster_src:'https://placeimg.com/600/370/any'},
    //   {id:21, poster_src:'https://placeimg.com/600/370/any'},{id:452, poster_src:'https://placeimg.com/600/370/any'},
    //   {id:22, poster_src:'https://placeimg.com/600/370/any'},{id:772, poster_src:'https://placeimg.com/600/370/any'},
    //   {id:23, poster_src:'https://placeimg.com/600/370/any'},{id:882, poster_src:'https://placeimg.com/600/370/any'},
    // ]

    // //迴圈資料存到陣列
    // var movieRows=[]
    // movies.forEach(movie => {
    //   // console.log(movie.title)
    //   const movieRow = <MovieRow key={movie.id} movie={movie}/>
    //   movieRows.push(movieRow)
    // });

    // this.state = {rows: movieRows}

    this.performSearch('movie')
  }

  performSearch(searchTerm){

    //Giphy
    var apiKey ='PP4K64L8ylEkkX0RZZEw4s9HdXRZByn7';
    var urlString = "https://api.giphy.com/v1/gifs/search?q="+searchTerm+"&limit=60&api_key="+apiKey;
    // https://api.giphy.com/v1/gifs/search?api_key=&q=movie&limit=60&offset=0&rating=G&lang=en

    // YOUTUBE  AIzaSyCqINohCT_TIXN7j2bC4e1VPWPifNTe_hU 
    // var apiKey ='AIzaSyCqINohCT_TIXN7j2bC4e1VPWPifNTe_hU';
    // var urlString = "https://www.googleapis.com/youtube/v3/search" +
    // "?id=7lCDEYXw3mM" +
    // "&key="+ apiKey +
    // "&part=snippet" +
    // "&q=反骨男孩" +
    // "&type=video" +
    // "&maxResults=10"+
    // "&videoCaption=closedCaption";
    
    
    console.log(urlString)

    // Giphy
    $.ajax({
      url : urlString,
      success: (data) =>{
        console.log(data)
        const results = data.data
        var movieRows=[]

        results.forEach(movie => {
          // console.log(movie.url)
          movie.poster_src = 'https://media2.giphy.com/media/'+movie.id+ '/200_d.gif'
          const movieRow = <MovieRow  key={movie.id} movie={movie}/>
          movieRows.push(movieRow)

        })

        this.setState({rows:movieRows})
      },
      error: (xhr , status, err) =>{
        console.error('error')

      }
    })

    
  }


  render() {
    return (

        <div className="theWall">
          {this.state.rows}
        </div>

    );
  }
}

export default App;
