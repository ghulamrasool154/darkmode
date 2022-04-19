import { useContext } from 'react';
import './App.css';
import Home from './components/Home';
import { contentCreate } from './Context/ContectCreate';
import './Darkmode/darkmode.scss'

function App() {

  const values = useContext(contentCreate);


  return (
    <div className={values.state.darkmode ? 'app darkmode ' : 'app'}>

      <h1>Context Api with Reducer Practice</h1>
      <Home />
    </div>
  );
}

export default App;
