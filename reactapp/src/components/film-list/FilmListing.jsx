import React, {Component} from 'react'

class FilmListing extends Component{
    render(){
        return(
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {this.props.films.map(film=> {
                    return(
                    <h1>{film.title}</h1>
                    )
                })}
            </div>
        )
    }
}

export default FilmListing