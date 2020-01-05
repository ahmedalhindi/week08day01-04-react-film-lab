import React, {Component} from 'react'
import FilmRow from '../film-row/FilmRow'
class FilmListing extends Component{
    render(){
        return(
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {this.props.films.map(film=> {
                    return(
                    <FilmRow film = {film} key = {film.id}/>
                    )
                })}
            </div>
        )
    }
}

export default FilmListing