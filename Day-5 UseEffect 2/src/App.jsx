import './App.css';
import { Timer } from './Timer';

function App() {
  return (
    <div className="App">
      <Timer start={10} end={8}/>
    </div>
  );
}

export default App;
