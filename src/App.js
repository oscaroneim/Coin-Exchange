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
      }
     ]
    }  
  }
  render () {
     return (
    <Div>
      <Head />
      <AccountBalance amount={this.state.balance} />
      <CoinList coinData={this.state.coinData} />
    </Div>
  );
     }
    }

    export default App;

