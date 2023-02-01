import AccountBalance from './components/Coin/AccountBalance/AccountBalance.jsx';
import React from 'react';
import CoinList from './components/CoinList/CoinList';
import Head from './components/Head/Head';
import styled from 'styled-components';

const Div = styled.div`
 text-algin: center;
 background-color: #3da4c6
`;


class App extends React.Component {
state = {

      showBalance: true,

      balance: 100000,
      
      coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 9999.99
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 12.5,
        price: 1500,
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 20000,
        price: 1
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 22000,
        price: .50
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 0,
        price: 289.90
      },
     ]
    }  
   handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( function(values) {
      let newValues = {...values}; //here we shallow clone the array
      if(valueChangeTicker === newValues.ticker) {    //here use object orientation to find the value
        const randomPercantage = 0.995 + Math.random() * 0.01
        newValues.price *= randomPercantage;
      }
        return newValues; //here we return the cloned array
        
      });
      
      this.setState({coinData: newCoinData})
      
    }

      toggleBalance = () => {
        this.setState( function(oldState) {
          return {
            ...oldState, //here we make a clone of the oldstate
            showBalance: !oldState.showBalance  //here we are overtiting one of the states, showBalance. This means our showBalance is going to be negated meaning if it is currently true it will now be false
          }
        });
      }
   

  render () {
     return (
    <Div>
      <Head />
      <AccountBalance amount={this.state.balance} 
      showBalance={this.state.showBalance} 
      toggleBalance={this.toggleBalance} />
      <CoinList coinData={this.state.coinData} 
      showBalance={this.state.showBalance}
      handleRefresh = {this.handleRefresh}/>
     </Div>
    )};

  }


     
    
    export default App;

