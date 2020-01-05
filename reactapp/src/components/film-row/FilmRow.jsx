import React, {Component} from 'react';

class FilmRow extends Component{
    render(){
        let baseURL = "https://image.tmdb.org/t/p/w780/";
        let posterUrl = this.props.film.poster_path
        console.log(posterUrl)
        return(
            <div className="film-row">
                <img src={baseURL+posterUrl} alt="" />

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow;