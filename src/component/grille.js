import React, { Component } from 'react';
import Cell from './cell.js';

export default class Grille extends Component {

    constructor(props){
        super(props)
        this.state = {
            values : [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            player : "X",

        }
    }

    winnerName(c1,c2,c3){
        if(c1=='X'&&c2=='X'&&c3=='X')
        {
            return 'X';
        }
        else if(c1=='O'&&c2=='O'&&c3=='O')
        {
            return 'O';
        }
        else
        {
            return null;
        }
    }

    getWinner()
    {
        let name = null;
        name = this.winnerName(this.state.values[0],this.state.values[1],this.state.values[2]);
        if (name != null)
        {
            return name;
        }
        name = this.winnerName(this.state.values[3],this.state.values[4],this.state.values[5]);
        if (name != null)
        {
            return name;
        }
        name = this.winnerName(this.state.values[6],this.state.values[7],this.state.values[8]);
        if (name != null)
        {
            return name;
        }
        name = this.winnerName(this.state.values[0],this.state.values[3],this.state.values[6]);
        if (name != null)
        {
            return name;
        }
        name = this.winnerName(this.state.values[1],this.state.values[4],this.state.values[7]);
        if (name != null)
        {
            return name;
        }
        name = this.winnerName(this.state.values[2],this.state.values[5],this.state.values[8]);
        if (name != null)
        {
            return name;
        }
        name = this.winnerName(this.state.values[0],this.state.values[4],this.state.values[8]);
        if (name != null)
        {
            return name;
        }
        name = this.winnerName(this.state.values[6],this.state.values[4],this.state.values[2]);
        return name;
    }

    isBoardFull(){
        return this.state.values.every((value)=>{return value!=null});
    }

    AffP = (index) => {
        this.setState(
            prevState => {
                const values = [...prevState.values];
                let player = '';
                values[index] = prevState.player;
                if (prevState.values[index]!=null){
                    return null;
                }
                if (prevState.player == 'X')
                {
                    player = 'O';
                }
                else
                {
                    player = 'X';
                }
                return {
                    values,
                    player
                }
            }
        );
    }

    render() {
        return (
            <div>
                <div className='boardRow'>
                    <Cell value={this.state.values[0]} Affp={()=>this.AffP(0)}/>
                    <Cell value={this.state.values[1]} Affp={()=>this.AffP(1)}/>
                    <Cell value={this.state.values[2]} Affp={()=>this.AffP(2)}/>
                </div>
                <div className='boardRow'>
                    <Cell value={this.state.values[3]} Affp={()=>this.AffP(3)}/>
                    <Cell value={this.state.values[4]} Affp={()=>this.AffP(4)}/>
                    <Cell value={this.state.values[5]} Affp={()=>this.AffP(5)}/>
                </div>
                <div className='boardRow'>
                    <Cell value={this.state.values[6]} Affp={()=>this.AffP(6)}/>
                    <Cell value={this.state.values[7]} Affp={()=>this.AffP(7)}/>
                    <Cell value={this.state.values[8]} Affp={()=>this.AffP(8)}/>
                </div>
            </div>
        );
    }
}