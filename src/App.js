import TopBar from './components/Topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/single';
import Write from './pages/write/write';
import Setting from './pages/settings/Setting';
import Login from './pages/login/login';
import Register from './pages/register/register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Context } from './context/context';
import { useContext } from 'react';
function App() {
  const {user} = useContext(Context);
  return (
    <Router>
    <TopBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home/> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home/> : <Login />}
        </Route>
        <Route path="/setting">
        {user ? <Setting/> : <Login />}
        </Route>
        <Route path="/write">
        {user ? <Write/> : <Login />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
