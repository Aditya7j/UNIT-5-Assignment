import './App.css';

import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import Product from './components/Product';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path='/products'element={<Product/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
