import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Home from './pages/Home';
import Product from './pages/Product';
import AboutUS from './pages/AboutUs';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import Affilated from './pages/Affilated';
function App() {
  console.log("<<<<<<>>>>>",window.innerWidth)
  return (
    <div className="App">
{/* <Home/> */}
<Router>
        <Routes>
          {/* >>>>Superadmin panel>>>>> */}
        <Route exact path="/" element={< Home/>}></Route>
        <Route exact path="/product" element={<Product/>}></Route>
        <Route exact path="/aboutUs" element={< AboutUS/>}></Route>
        <Route exact path="/pricing" element={< Pricing/>}></Route>
        <Route exact path="/contactUs" element={< ContactUs/>}></Route>
        <Route exact path="/affilated" element={< Affilated/>}></Route>

        </Routes>
</Router>
    </div>
  );
}

export default App;
