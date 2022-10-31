import React from 'react'
import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../../AuthContext';

const HomeLayout = () => {
    const data = useContext(AuthContext);
    return (
        <>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? 'aktif' : null} end>Home Page</NavLink>
                <NavLink to="/contact">
                    {({ isActive }) => (
                        <>
                            Contact
                            {isActive && ' (Active)'}
                        </>
                    )}

                </NavLink>
                <NavLink end to="/about"
                    style={({ isActive }) => ({ backgroundColor: isActive ? 'yellow' : '' })} >About Us

                </NavLink>

                <NavLink to="about/mission" >Our Mission</NavLink>
                <NavLink to="about/vision/252-55">Our Vision 252</NavLink>

                {
                    data.login ? <NavLink to="/profile">go profile</NavLink> : null
                }


                <NavLink to="/auth/login">go login</NavLink>
            </nav>

            <Outlet />
        </>
    )
}

export default HomeLayout