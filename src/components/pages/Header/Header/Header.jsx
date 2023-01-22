import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/images/icons/logo.png'
import { AuthContext } from '../../../../context/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItems = <>
        <li className=' font-semibold'><Link to='/'>Destination</Link></li>
        <li className=' font-semibold'><Link to='/'>Blogs</Link></li>
    </>

    const userLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.log(e))
    }
    return (
        <div className="navbar h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60">
                        {navItems}
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered" />
                        </div>
                    </ul>
                </div>
                <img src={Logo} className="w-16 lg:w-28 ml-2" alt="" srcset="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 space-x-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search your destination" className="input input-bordered" />
                    </div>
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <Link to='/login'><button className='btn btn-xs lg:btn-md btn-warning text-white'>Login</button></Link>
                <Link to='/login' onClick={userLogOut}><button className='btn btn-xs lg:btn-md btn-error text-white'>Logout</button></Link>
                <div className="avatar">
                    <div className="w-10 lg:w-14 rounded-full">
                        {
                            user?.photoURL ?
                                <img src={user?.photoURL} alt='' />
                                :
                                <span><FaUserCircle className='w-full h-full'></FaUserCircle></span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;