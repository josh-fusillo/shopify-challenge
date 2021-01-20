import React, { Component } from 'react'

export default class Nominations extends Component {
    state = {
        nominationName: this.props.searchResult,
        nominationID: this.props.id
          
    }

    

    render() {

        
        return (
            <div>
              <h2>Nominations</h2> 
              <p></p> 
            </div>
        )
    }
}
