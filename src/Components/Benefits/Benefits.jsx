import React from "react";
import "./Benefits.css";

const Benefits = () => {
    return (
        <div className="benefits-container">
            <div className="content-wrapper">

                <div className="text-section">
                    <h1>
                        Benefits of <span>Online Education</span>
                    </h1>
                    <p>
                        Online Education increases engagement by adding a human element. Studying in
                        the comfort of your own home is convenient, but there are various other
                        advantages of online study. It's especially beneficial for students who aren't
                        as self-sufficient or who are used to the traditional educational model of
                        "teacher and class."
                    </p>
                    <ul>
                        <li>Time and Location Flexibility</li>
                        <li>Find Unlimited Course Category</li>
                        <li>No Need to Carry Books</li>
                        <li>Get Access in any mobile, Tab, Laptop with your credential</li>
                        <li>Use your time when you are traveling, Outing and free time</li>
                        <li>Exam Practice before exam</li>
                    </ul>
                </div>


                <div className="image-section">
                    <img
                        src="../../../spreading.png"

                        className="thumbs-up-image"
                    />
                </div>
            </div>


            <div className="statistics-section">
                <div className="stat-card">
                    <h2>10000+</h2>
                    <p>Total Exams</p>
                </div>
                <div className="stat-card">
                    <h2>600+</h2>
                    <p>Courses</p>
                </div>
                <div className="stat-card">
                    <h2>3000+</h2>
                    <p>Success Stories</p>
                </div>
                <div className="stat-card">
                    <h2>4.5/5</h2>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
