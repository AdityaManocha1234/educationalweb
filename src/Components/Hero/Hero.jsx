// import React from 'react'
// import './Hero.css'
// const Hero = () => {
//     return (
//         <div className='back'>
//             <div className="hero">
// 
//                 <h1 className="hero_header">
//                     BE A SMART STUDENT
//                 </h1>
//                 <h4>SchoolAura Is A Smart Education Platform</h4>
// 
//             </div>
//         </div>
//     )
// }
// 
// export default Hero
import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='back'>
            <div className="hero">
                <h1 className="hero_header">
                    BE A <b style={{ color: 'black' }}>SMART STUDENT</b>
                </h1>
                <h4 style={{ color: 'white' }}>SchoolAura Is A Smart Education Platform</h4>

                <div className="cards-container">
                    <div className="card">
                        <h3>ENTERANCE
                            Solution</h3>
                        <button>Exam</button>
                        <button>Courses</button>
                        <p style={{ fontSize: '24px' }}>Read more</p>
                    </div>
                    <div className="card">
                        <h3>COMPETITIVE
                            Solution</h3>
                        <button>Exam</button>
                        <button>Courses</button>
                        <p style={{ fontSize: '24px' }}>Read more</p>
                    </div>
                    <div className="card">
                        <h3>KG - 12TH
                            SCHOOL</h3>
                        <button>Exam</button>
                        <button>Courses</button>
                        <p style={{ fontSize: '24px' }}>Read more</p>
                    </div>
                    <div className="card">
                        <h3>TUTOR
                            SOLUTION</h3>
                        <button>Exam</button>
                        <button>Courses</button>
                        <p style={{ fontSize: '24px' }}>Read more</p>
                    </div>
                    <div className="login-form">
                        <h3>Login</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" placeholder="Enter your password" required />
                            </div>
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
