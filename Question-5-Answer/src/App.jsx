import './App.css'
import {useSelector , useDispatch} from "react-redux";
import { LOGIN } from './Components/UserSlice/UserSlice';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(LOGIN());
  }

 return(
  <>
  <div>
    <h1>Welcom, {user.name}</h1>
    <p>Login Status : {user.isLoggedIn ? 'Logged In' : 'Logged out'}</p>
    <button onClick={handleLogin}>Login</button>
  </div>
  </>
 )
}

export default App;
