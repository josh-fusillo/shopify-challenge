import './SearchResults.scss'
import React, { Component } from 'react'

export default class SearchResults extends Component {
    
  
    render() {
        
        return (
             <>
        
        <div className="result">
            <div className="result__container">         
             <p className="result__results-text">{this.props.searchResult}</p>
           </div>
           <div className="result__button-container">
           <button 
            className="result__button" 
            onClick={() => this.props.onNomination(this.props.id)}
            disabled={this.props.searchResult.isNominated}
            >Nominate</button> 
           </div>
           
        </div>
        </>
        )
    }
}

