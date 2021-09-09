
import './App.css';
import Roof from './components/Roof'
import Land from './components/land'
import Foundation from './components/Foundation'
import Room from './components/Room'

function App() {
  return (
    <div className="house">
      <div>
        <Roof/>
        <Room/>
        <Foundation/>
        <Land/>
        
      </div>
  
    </div>
  );
}

export default App;
