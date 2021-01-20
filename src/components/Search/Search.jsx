import React, { Component } from 'react'
import './Search.scss'
import axios from 'axios'
import SearchResults from '../SearchResults/SearchResults'
import Nominations from '../Nominations/Nominations'
import FilterResults from 'react-filter-search';

export default class Search extends Component {


    state = {
        searchName: '',
        searchResults: [],
        nominations: []
       
        
    }

    handleSearchName = (event) => {        
        this.setState({
            searchName: event.target.value
        })
    }
    
    handleNomination = (id) => {
        console.log(id)
        const nominations = [this.state.searchResults.find(result => result.imdbID === id), ...this.state.nominations]
        const searchResults = this.state.searchResults.map(result => result.imdbID !== id ? result : {...result, isNominated: true}) 
        this.setState({
            nominations, searchResults
                    })
                    console.log(this.state)
    }   

    handleSubmit = (event) => {
        event.preventDefault();
        this.getResults();
    }

    getResults = () => {
        axios
            .get(`http://www.omdbapi.com/?i=tt3896198&apikey=1543ce47&s=${this.state.searchName}`)
            .then(response => {
                console.log(response)
                this.setState({
                    searchResults: response.data.Search.map(result => ({...result, isNominated: false}))
                })
            })
    }
    




 

    render() {       

        const { searchResults, searchName } = this.state;

        return (
            <>
            <div className="main">
                <div className="main__container">
                <form className="main__form" onSubmit={this.handleSubmit}>                        
                     <input type="text" 
                     className="main__search" 
                     placeholder="Search movie title here"
                     value={this.state.searchName}
                     onChange={this.handleSearchName}                    
                     />              
                </form>
                </div>
            </div>


            <div className='results-nominations'>
            <div className="results__container">
            <h2>Results for "{this.state.searchName}"</h2>
            <FilterResults 
                value={searchName}
                data={searchResults}
                renderResults={results => (
                    <div>
                        {results.map(movie => (
                            
                            <SearchResults                             
                            searchResult={movie.Title}
                            searchName={this.state.searchName}
                            key={1 + Math.random()}
                            id={movie.imdbID}
                            onNomination={this.handleNomination}
                            />
                        ))}

                    </div>
                )} />
            </div>

            <div className="nominations__container">
            <Nominations />
            

            </div>
            </div>
            </>
        )
    }
}
