import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align left;
    padding: 1.5rem 0 1.5rem 5rem;
    color: white
    
`;


export default class AccountBalance extends Component {
   render() {
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance'; //button functionality
        let content = null;
        if( this.props.showBalance){
            content = <>Balance: ${this.props.amount}</>
        }
        
        
            
        return (
            <Section>
                {content}    
                 <button onClick={this.props.toggleBalance}>{buttonText}</button> 
            </Section>  //here we are calling the toggleBalance function from the button

        );
    }
}
  
    AccountBalance.propTypes = {
        amount: PropTypes.number.isRequired
    
    };

