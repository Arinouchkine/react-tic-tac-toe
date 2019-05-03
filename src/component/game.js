import React, { Component } from 'react';
import Grille from './grille.js';

export default class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            status : '',
        }
    }
    winnerStatus = (x) => {
        let status;
        if (x == 'X') {
            status = "Le winner is X";
        } else if (x == 'O') {
            status = "Le winner is O";
        } else {
           status = "";
        }
        this.setState({status});
    }

        render() {
        return (
            <div>
                <h1>Next player: X</h1>
                <Grille winnerStatus={this.winnerStatus}/>
                {this.state.status}
            </div>
        );
    }
}