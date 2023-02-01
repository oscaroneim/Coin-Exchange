import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TD = styled.td` {
  border: 2px solid white;
  width: 25vh;
}`;

export default class Coin extends Component {
     handleClick = (event) => {
      //Prevents form from submitting
          event.preventDefault();
           

          this.props.handleRefresh(this.props.ticker);
      }
      

    render() {
       return (
      <tr>
        <TD>{this.props.name}</TD>
        <TD>{this.props.ticker}</TD>
        <TD>${this.props.price}</TD>
        {this.props.showBalance ? <TD>{this.props.balance}</TD> : null }

        <TD>
            <form action = "#" method = "POST">
              <button onClick={this.handleClick}>Refresh</button>
            </form>
        </TD>
      </tr>
     
    ) 
  }
}

Coin.propTypes = {
    Name: PropTypes.string,
    Ticker: PropTypes.string,
    Price: PropTypes.number,
    Balance: PropTypes.number
    
}
