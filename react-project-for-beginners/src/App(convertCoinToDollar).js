import Button from './Button'
import styles from "./App.module.css"
import {useState, useEffect} from "react";



function App_CCTD() {
  const [loading,setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [scoin,setsCoin] = useState(0);
  const [converted, setConverted] = useState(false);
  const [dollar, setDollar] = useState(0);
  const [ccoin, setCcoin] = useState(0);

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json.slice(0,100));
      setLoading(false);
    });
  },[])

  const onChange = (event) => setsCoin(event.target.value);
  const onConvert = () =>{
    setDollar(0);
    setCcoin(0);
    setConverted((prev) => !prev);
  }
  const onDollarChange = (event) => setDollar(event.target.value);
  const onCoinChange = (event) => setCcoin(event.target.value);
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : (
      <>
        <div>
          <select onChange={onChange} autoFocus>
          {coins.map((coin,index) => <option key = {coin.id} value={index}>{coin.name} ({coin.symbol}) ({coin.quotes.USD.price})USD </option>)}
          </select>
        </div>
        <div>
          <h3>Select Coin : {coins[scoin].name}</h3>
          <div>
            <label htmlFor = "dollar"> Dollar </label>
            <input type="number" id="dollar" value = {!converted ? dollar : Math.round(ccoin * coins[scoin].quotes.USD.price)} onChange = {onDollarChange} disabled = {converted} />
          </div>
          <div>
            <label htmlFor = "coin"> {coins[scoin].name} </label>
            <input type="number" id="coin" value = {!converted ? Math.round(dollar / coins[scoin].quotes.USD.price) : ccoin } onChange = {onCoinChange} disabled = {!converted} />
          </div>
          <div>
            <button onClick={onConvert}>{converted ? "Revert!" : "Convert!"}</button>
          </div>
        </div>
      </>
    )}
    </div> 
  );
}

export default App_CCTD;
