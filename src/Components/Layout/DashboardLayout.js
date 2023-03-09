import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import Header from '../Shared/Headers/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    // const { isSeller } = useSeller(user?.email);
    const { isBuyer } = useBuyer(user?.email);
    return (
        <div>
            <Header></Header>
            <label tabIndex={0} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard/add' className='text-orange-600 '>Add Products</Link></li>
                        {/* <li><Link to='/dashboard' className='text-orange-600'>My Orders</Link></li> */}
                        {
                            isBuyer &&
                            <li><Link to='/dashboard' className='text-orange-600'>My Orders</Link></li>

                        }
                        {/* {isSeller &&
                            <>
                                <li><Link to='/dashboard/add' className='text-orange-600 '>Add Products</Link></li>
                                <li><Link to='/dashboard/product' className='text-orange-600 '>My Products</Link></li>
                            </>
                        } */}
                        {
                            isAdmin && <>

                                <li><Link to='/dashboard/users' className='text-orange-600 '>All Buyers</Link></li>
                                <li><Link to='' className='text-orange-600 '>All Sellers</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;