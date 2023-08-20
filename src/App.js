import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Pages/Create';
import BlogDetail from './Pages/BlogDetail';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetail />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
