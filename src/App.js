
import './App.css';
import{BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import HomeHeader from './HomeHeader';
import { auth } from './firebase';
function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(false);
      }
    })
  }, [])



  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/login'>
         <Login/>
        </Route>
        <Route path='/register'>
         <Register/>
        </Route>
        <Route path='/ '>
         <HomeHeader user={user} selected  />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
