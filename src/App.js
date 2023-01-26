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
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        price: 9999.99
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        price: 1500,
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        price: 1
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        price: .50
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        price: 289.90
      },
     ]
    }  
    this.handleRefresh = this.handleRefresh.bind(this);
  }

   handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map( function({ticker, name, price}) {
      let newPrice = price;
      if(valueChangeTicker === ticker) {
        const randomPercantage = 0.995 + Math.random() * 0.01
        newPrice = newPrice * randomPercantage;
      }
        return{
          ticker,
          name,
          price: newPrice
        }
      });
      
      this.setState({coinData: newCoinData})
   }
  render () {
     return (
    <Div>
      <Head />
      <AccountBalance amount={this.state.balance} />
      <CoinList coinData={this.state.coinData} handleRefresh = {this.handleRefresh} />
    </Div>
  );
     }
    }

    export default App;

