import './App.css';
import Home from './component/Home';
import {useSelector} from 'react-redux';
function App() {

  const {c} = useSelector(state => state.prashantReducer);  
  return (
    <div className="App">
      <h2>{c}</h2>
      <Home/>
    </div>
  );
}

export default App;
