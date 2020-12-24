
import Detail from './pages/detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
      <Link to="/detail/abc">详情</Link>
      <Switch>
        <Route path="/detail/:id" component={Detail}></Route>
      </Switch>
      </Router>
      
    </div>
    );
}

export default App;
