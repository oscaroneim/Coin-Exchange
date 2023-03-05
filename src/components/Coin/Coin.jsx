import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TD = styled.td` {
  border: 2px solid white;
  width: 25vh;
}`;

export default function Coin (props) {

    const handleClick = (event) => {
      //Prevents form from submitting
          event.preventDefault();
           

          props.handleRefresh(props.tickerId);
      }
      

    
       return(
      <tr>
        <TD>{props.name}</TD>
        <TD>{props.ticker}</TD>
        <TD>${props.price}</TD>
        {props.showBalance ? <TD>{props.balance}</TD> : null}
        <TD>
            <form action = "#" method = "POST">
              <button onClick={handleClick}>Refresh</button>
            </form>
        </TD>
      </tr>
       );
     
  }


Coin.propTypes = {
    Name: PropTypes.string,
    Ticker: PropTypes.string,
    Price: PropTypes.number,
    Balance: PropTypes.number
}
    
