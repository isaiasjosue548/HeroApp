import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';


export const Navbar = () => {

    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {

        logout();

        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar animate__animated animate__fadeInLeftBig p-5 text-white h-auto sm:h-20 flex justify-between items-center">
        
            <div>

                <div className="flex flex-col sm:flex-row gap-2">

                    <Link 
                        className="text-xl hidden sm:inline-block" 
                        to="/"
                    >
                        Asociaciones
                    </Link>

                    <NavLink 
                        className={({isActive}) => `bg-red-500 rounded-md p-0.5 hover:-translate-y-1 ${ isActive ? 'hover:bg-red-600  active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300' : '' }`} 
                        to="/marvel"
                    >
                        MARVEL
                    </NavLink>

                    <NavLink
                        className={({isActive}) => `bg-white text-blue-600 p-0.5 hover:-translate-y-1 rounded-md ${isActive ? 'active:bg-white hover:bg-slate-100 focus:outline-none focus:ring focus:ring-blue-500' : '' }`}
                        to="/dc"
                    >
                        DC Universe
                    </NavLink>

                    <NavLink
                        className={({isActive}) => ` ${isActive ? 'rounded-md focus:outline-none focus:ring focus:ring-blue-500' : '' }`}
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>

            </div>

            <div>
                <ul className="flex gap-10">
                    <span className="hidden text-blue-500 sm:inline-block">
                        {user?.name}
                    </span>

                    <button 
                        className="rounded-md focus:ring focus:ring-sky-500"
                        onClick={onLogout}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}