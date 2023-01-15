import './App.css';
import Coin from './components/Coin/Coin';
import logo from './logo.svg';
import AccountBalance from './components/Coin/AccountBalance/AccountBalance.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo failed to load" className= "App-logo"/>
        <h1 className  = "App-title">
          Coin Exchange 3000
        </h1>
      </header>
      <AccountBalance amount={10000} />
      <table class="coin-table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker= "BTC" price={9999.99} />
          <Coin name="Ethereum" ticker= "ETH" price={4000} />
          <Coin name="Tether" ticker= "USDT" price={1.0}/>
          <Coin name="Ripple" ticker= "XRP" price={0.4}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;

