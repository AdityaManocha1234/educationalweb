import React from "react";
import "./Spreading.css";

const Spreading = () => {
    return (
        <div className="spreading-container">
            <div className="content-wrapper">

                <div className="text-section">
                    <h1 className="title">
                        WE <span className="highlight">ARE SPREADING</span>
                    </h1>
                    <hr className="divider" />
                    <div className="statistics-section">
                        <div className="stat-card">
                            <img

                            />
                            <h2 className="stat-number">108+</h2>
                            <p className="stat-text">Happy School</p>
                        </div>
                        <div className="stat-card">
                            <img

                            />
                            <h2 className="stat-number">58030+</h2>
                            <p className="stat-text">Students</p>
                        </div>
                        <div className="stat-card">
                            <img

                            />
                            <h2 className="stat-number">5360+</h2>
                            <p className="stat-text">Happy Parents</p>
                        </div>
                        <div className="stat-card">
                            <img

                            />
                            <h2 className="stat-number">10+</h2>
                            <p className="stat-text">Happy Tutors</p>
                        </div>
                    </div>
                </div>


                <div className="image-section">
                    <img
                        src="../../../client.png"

                        className="student-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Spreading;
