import {  NavLink } from "react-router-dom";
import userDefaultPic from '../../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { AiOutlineMenuUnfold} from "react-icons/ai";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then( () => {
          console.log('Log out successful')
        })
        .catch(error =>{
          console.error(error)
        })
      }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
        <li><NavLink to="/addict">Addict</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden text-4xl font-bold">
                        <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div> */}

                <details className="dropdown">
                <summary className="btn text-2xl"><AiOutlineMenuUnfold></AiOutlineMenuUnfold></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                {navLinks}
                </ul>
                </details>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user && <p className="font-semibold bg-gray-800 text-white p-2 px-4 rounded-sm">{user.displayName}</p>
                }
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {
                            user ?
                            <img src={user.photoURL}/>
                             : 
                            <img src={userDefaultPic}/>
                        }
                    </div>
                </label>
                <div>
                    {
                        user ?
                        <div>
                            <a href="#" onClick={handleLogOut} className="bg-gray-800 text-white p-2 px-4 rounded-sm">Logout</a>
                        </div> : 
                        <NavLink to='/login'>
                            <h2 className="bg-gray-800 text-white p-2 px-4 rounded-sm">Login</h2>
                        </NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;