import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context';
 

export const LoginPage = () => {

  const {login} = useContext ( AuthContext );
  const navigate = useNavigate();

  

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Isaias');

    navigate(lastPath, {
      replace: true,
    })
  }

  return (
    <div className="p-10">
      <h1>Login</h1>
      <hr />

      <button 
        className="bg-sky-500 mt-3 p-1 rounded-md focus:ring focus:ring-sky-500"
        onClick={ onLogin }
      >
          Login 
      </button>

    </div>
    
  )
}
