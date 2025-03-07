import React, { useState } from "react";
import "./CourseList.css";

const CourseList = () => {
    const [activeTab, setActiveTab] = useState("Competitive");

    const tabs = ["School", "Competitive", "Enterance", "Tutors"];
    const courses = {
        Competitive: [
            { name: "SSC CHSL", count: "29+" },
            { name: "SSC CGL", count: "15+" },
            { name: "UPSC IAS", count: "8+" },
            { name: "SBI Clerk", count: "5+" },
            { name: "SSC CPO", count: "5+" },
            { name: "SSC MTS", count: "5+" },
            { name: "SBI PO", count: "3+" },
            { name: "RBI Grade B", count: "3+" },
            { name: "UPSC CAPF", count: "3+" },
            { name: "IBPS Clerk", count: "3+" },
            { name: "SSC JE", count: "2+" },
        ],
        School: [
            { name: "SSC CHSL", count: "29+" },
            { name: "SSC CGL", count: "15+" },
            { name: "UPSC IAS", count: "8+" },
            { name: "SBI Clerk", count: "5+" },
            { name: "SSC CPO", count: "5+" },

        ],
        Enterance: [
            { name: "SSC CHSL", count: "29+" },

        ],
        Tutors: [
            { name: "SSC CHSL", count: "29+" },
            { name: "SSC CGL", count: "15+" },
            { name: "UPSC IAS", count: "8+" },
            { name: "SBI Clerk", count: "5+" },
            { name: "SSC CPO", count: "5+" },
            { name: "SSC MTS", count: "5+" },
            { name: "SBI PO", count: "3+" },
            { name: "RBI Grade B", count: "3+" },

        ],
    };

    return (
        <div className="course-container">
            <div className="header">
                <h1>
                    PROVIDE <span>BEST EDUCATIONAL</span>
                </h1>
            </div>
            <div className="course-layout">
                <div className="tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`tab-button ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="course-list">
                    {courses[activeTab].map((course, index) => (
                        <div key={index} className="course-card">
                            <div className="icon-placeholder">N</div>
                            <h3>{course.name}</h3>
                            <span>{course.count}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseList;
