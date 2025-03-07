import React from "react";
import "./Mobile.css";

const Mobile = () => {
    return (
        <div className="mobile-page">
            <div className="mobile-content">

                <div className="mobile-image">
                    <img
                        src="../../../mobileee.png"
                        alt="SchoolAura Mobile App"
                        className="image"
                    />
                </div>


                <div className="mobile-info">
                    <h1>
                        Easy to Access with <span className="highlight">Mobile APP</span>
                    </h1>
                    <p>
                        If you're looking for easily accessible resources for your classroom, then you're in the right place. Online learning with the Android app is very easy to access. That's why we've hand-curated the School Aura free app and website. Easy to use and learn!
                    </p>
                    <p>
                        To learn online, you need to be reasonably comfortable with Smart Mobile Phone, Tab, Laptops, and the internet. The advantage of learning online via an android app is that you can pause the video/audio whenever you need to take notes or simply absorb what has been said. Another fantastic feature of online learning is that you can re-listen to different parts as needed, which is something you can't do in a live lecture!
                    </p>
                    <button className="download-button">Download Now</button>
                </div>
            </div>
        </div>
    );
};

export default Mobile;
