import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import DataTable from './components/DataTable.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table" component={DataTable}>
          {/* <h1>Table Libary</h1> */}
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
