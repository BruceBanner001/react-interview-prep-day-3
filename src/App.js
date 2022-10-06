import './App.css';
import AxiosAndFetch from './Components/AxiosAndFetch';
import './Components/Style.css';
import UseEffect from './Components/UseEffect';
import UseMemo from './Components/UseMemo';
import UseReducer from './Components/UseReducer';
import UseState from './Components/UseState';

function App() {
  return (
    <div>
      <br /><br />
      <h1>1.Difference between Axios and fetch ?</h1>
      <AxiosAndFetch />
      <UseState />
      <UseEffect />
      <UseReducer />
      <UseMemo /><br /><br /><br /><br />
    </div>
  );
}

export default App;
