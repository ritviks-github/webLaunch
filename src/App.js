import './App.css';
import Feedback from './Feedback';
import Home from './Home';
import About from './About';
// import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
      <Home />
      
      <About />
      <Feedback />
    </div>
  );
}

export default App;
