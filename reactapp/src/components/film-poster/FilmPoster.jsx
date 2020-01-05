import React, { Component } from "react";

class FilmPoster extends Component {
    state = {  }
    render() { 
        let baseURL = "https://image.tmdb.org/t/p/w780/";
        let posterUrl = this.props.film.poster_path

        return (
            <img src={baseURL+posterUrl} alt="" />
         );
    }
}
 
export default FilmPoster;