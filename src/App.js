import React, {useEffect, useState} from 'react';
import Loader from './Loader'
import './App.css';
import House from './components/House'
import Balance from './components/Balance'
import axios from 'axios'

const App = () => {
  const [balance, setBalance] = useState(1000000)
  const [loading, setLoading] = useState(true)
  const [pillar, setPillar] = useState(0)

  useEffect(() => {
   axios.get('http://localhost:5000/pillar')
      .then((response) =>{
        let pillarPrice = response.data.price
        let pillarAmount = balance / pillarPrice
        setPillar(pillarAmount)
      }).
      catch((error) => console.error(error)).
      finally(() => setLoading(false))

  }, [balance])

  return (
    <div className="house">
      <div>
        <Balance setBalance = {setBalance} balance = {balance}/>
        {loading ? <Loader/> : <House pillar = {pillar}/>}
        
      </div>
    </div>
  );
}

export default App;
