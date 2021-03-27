import NavBarApp from './NavBar/NavBarApp';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';
import Login from './Login/Login';
import useAuth from './useAuth/useAuth';
import Home from './Home/Home';
import SearchPage from './SearchPage/SearchPage';
import ReviewPage from './ReviewPage/ReviewPage';
import Genre from './Genre/Genre';
import Platform from './Platform/Platform';
import Studio from './Studio/Studio';
import Game from './Game/Game';
import Publish from './Publish/Publish';
import Xbox from './Xbox/Xbox'
import Playstation from './Playstation/Playstation';
import PC from './PC/PC';
import Nintendo from './Nintendo/Nintendo';

function App() {
  const auth = useAuth();
  return (
    <div className='App'>
      <AuthContext.Provider value={auth}>
        <BrowserRouter>
          <NavBarApp />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/xbox'><Xbox/></Route>
            <Route exact path='/playstation'><Playstation/></Route>
            <Route exact path='/pc'><PC/></Route>
            <Route exact path='/nintendo'><Nintendo/></Route>
            <Route exact path='/genre'>
              <Genre />
            </Route>
            <Route exact path='/platform'><Platform/></Route>
            <Route exact path='/studio'><Studio/></Route>
            <Route exact path='/publish'><Publish/></Route>
            <Route exact path='/games'><Game/></Route>
            <Route exact path='/search/:query'>
              <SearchPage />
            </Route>
            <Route exact path='/review/:reviewid'>
              <ReviewPage />
            </Route>
            <Route exact path='/signin'>
              <Login />
            </Route>
            <Redirect from='*' to='/' />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
