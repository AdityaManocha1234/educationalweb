import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <nav className='nav'>
                <div className='navigation'>
                    <Link to='/'>
                        <div className='nav_header'>
                            <div className='logo'>
                                <img src="../../../logo_school.png" alt="" />
                            </div>

                        </div>
                    </Link>
                    <div className='links'>
                        <ul>
                            <li>Home</li>
                            <li>Exam Sol</li>
                            <li>Online Study</li>
                            <li>Tutor Solution</li>
                            <li>Blogs</li>
                            <li>Contact us</li>
                            <div className="nav_button"><button style={{ marginTop: '-18px' }}>School Management</button></div>

                        </ul>
                    </div>
                    <div className="nav_button">
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
