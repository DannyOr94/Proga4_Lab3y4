import  Login  from './Components/Login'
import './App.css'
import Home from './Components/Home'
import { useLogin } from './Hooks/useLogin'
import { AuthContext, AuthProvidert } from './Context/AuthContext'
import { useContext } from 'react'

function App() {

  const {user} = useContext(AuthContext);
  
  return (
<>
    {user ? <Home userName={user}/> : <Login/> }
    
    </>
      )
  }
 
export default App;
