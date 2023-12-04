import React from 'react'
import { Link } from 'react-router-dom'

const AdminHomeComponent = () => {
    return (
        <div>
            <div className='admin-home'>
                <div className='admin-home-head'>
                    <div className='admin-home-heading-1'>Welcome Back</div>
                    <div className='admin-home-heading-2'>Admin Home</div>
                </div>

                <div className='admin-home-content'>
                    <div className='admin-home-menu'>
                        <div className='admin-home-menu-1'><Link to="/admin-bike-api">Bike Api</Link></div>
                        <div className='admin-home-menu-2'><Link to="/admin-login">admin login</Link></div>
                        <div className='admin-home-menu-3'><Link to="">home-menu-3</Link></div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AdminHomeComponent