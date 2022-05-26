import "./App.css";
import { Routes,Route } from "react-router-dom";
import { HomePage } from "./Components/Homepage";
import { ProductsPage } from "./Components/ProductPage";
import { ProductsDetailsPage } from "./Components/ProductDetailsPage";
import { Navbar } from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/"element={<HomePage/>}/>
      <Route path="/products"element={<ProductsPage/>}/>
      <Route path="/products/:id"element={<ProductsDetailsPage/>}/> 
      </Routes>
    </div>
  );
}

export default App;
