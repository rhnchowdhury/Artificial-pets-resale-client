import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err));
    };

    const menuItems = <React.Fragment>
        <li><Link to='/' className='text-white' style={{ background: '#F9575C', borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px' }}>Home</Link></li>
        <li><Link to='/blog' className='text-white' >Blog</Link></li>
        {user?.uid ?
            <>
                <li><Link to='/dashboard' className='text-white'>Dashboard</Link></li>
                <li><Link onClick={handleLogOut} className='text-white'>Sign Out</Link></li>
            </>
            :
            <li><Link to='/login' className='text-white'>Log in</Link></li>}
    </React.Fragment>
    return (
        <div>
            <div className="navbar" style={{ background: '#F9BE4F' }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl text-white">Artificial Pets</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn">Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;