import React, {Component} from 'react';
import FilmPoster from '../film-poster/FilmPoster'

class FilmRow extends Component{
    render(){
    
        let rDate = new Date(this.props.film.release_date);
        rDate = rDate.getFullYear();
        return(
            <div className="film-row">
                {/* {console.log(this.props)} */}
                <FilmPoster film ={this.props} />
                

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{rDate}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow;