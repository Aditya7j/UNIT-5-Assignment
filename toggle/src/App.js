import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './Context/ThemeContextProvider';
import Footer from './Navbar/Footer';
import Navbar from './Navbar/Navbar';

function App() {
  const [toggle,toggleTheme] = useContext(ThemeContext);
  return (
    <div className="App">Navbar
        <button className='toggle' onClick={toggleTheme}>Toggle</button>
        <br/><br/>
    <Navbar text="Theme"/>
    <br/>
    
    <Footer/>

    

      
    </div>
  );
}

export default App;
