import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import { useEffect } from "react";
import Web3 from "web3";
import MainLayout from "./layouts/main";

function App() {
  /* useEffect(() => {
    if(window.ethereum) {
      const web3 = new Web3(window.ethereum);
      web3.eth.requestAccounts().then(console.log)
    }
  }) */

  return (
    <MainLayout>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
