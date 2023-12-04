import React from 'react'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div>

<div className='admin-page'>
            <div className='admin-page-main'>
                <div className='admin-page-content'>
                    <div className='admin-p-head'>
                        <div className='admin-p-heading-1'><span> <i class="fa-solid fa-screwdriver-wrench"></i> Garage </span> On Call</div>
                        <div className='admin-p-heading-2'>Admin LogIn Only!</div>


                        {/* <div className='about-us-heading-2'>Welcome to <span> <i class="fa-solid fa-screwdriver-wrench"></i> </span> Garage On Call</div> */}

                    </div>
                    <div className='admin-p-form'>
                        <form>
                            <label>Email</label>
                            <input required placeholder='enter your email' type='email' />
                            <label>Password</label>
                            <input required placeholder='enter password' type='password' />

                            <button>Log in</button>

                        </form>
                        <Link to='/' ><i class="fa-solid fa-share fa-rotate-180"></i> go to home</Link>
                    </div>
                    <div className='admin-p-foot'>
                        <Link to="">Term & Condition</Link>
                        <Link to="">Privacy Policy</Link>
                    </div>

                </div>

            </div>

            {/* <div className='admin-p-fix'></div> */}


        </div>
        
    </div>
  )
}

export default AdminLogin