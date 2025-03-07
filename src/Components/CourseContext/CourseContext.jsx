import React from 'react';
import './CourseContext.css';

const CourseContext = () => {
    return (
        <div className="container">
            <div className="header">
                <h1 className="title">BENEFITS OF SCHOOLAURA</h1>
                <h2 className="subtitle">FOR STUDENT</h2>
            </div>
            <div className="benefits-grid">

                <div className="benefit-card">
                    <div className="icon">✔</div>
                    <h3 className="card-title">Task Activities</h3>
                    <p className="card-description">
                        Daily assignments and tasks can be easily completed through online
                        availability of information. Subject-wise homework can be submitted
                        online, helping students finish their tasks efficiently.
                    </p>
                </div>

                <div className="benefit-card">
                    <div className="icon">📄</div>
                    <h3 className="card-title">Exam Results</h3>
                    <p className="card-description">
                        Exam and assessment results of each individual student can be seen.
                        Report cards will be generated online for each student.
                    </p>
                </div>

                <div className="benefit-card">
                    <div className="icon">ℹ</div>
                    <h3 className="card-title">Notice Updates</h3>
                    <p className="card-description">
                        The necessary announcements and updates will reach students and
                        parents quickly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseContext;
