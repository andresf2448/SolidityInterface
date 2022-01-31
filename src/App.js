import { Routes, Route } from 'react-router-dom';
import Home from './views/home'
import { useEffect } from 'react';
import Web3 from 'web3';

function App() {
  useEffect(() => {
    if(window.ethereum) {
      const web3 = new Web3(window.ethereum);
      web3.eth.requestAccounts().then(console.log)
    }
  })

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}

export default App;
