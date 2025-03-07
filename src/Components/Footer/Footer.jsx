import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="newsletter-section">
                <h2>SUBSCRIBE OUR <span className="highlight">NEWSLETTER</span></h2>
                <div className="newsletter-input">
                    <input type="email" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
            </div>

            <div className="footer-content">
                <div className="footer-column about-us">
                    <h3>About US</h3>
                    <p>
                        SchoolAura Smart Education Platform is a step towards making
                        learning better and effective for the students and helps in
                        achieving their goals.
                    </p>
                </div>
                <div className="footer-column quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Benefits</li>
                        <li>Blogs</li>
                        <li>Testimonials</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div className="footer-column help-support">
                    <h3>Help & Support</h3>
                    <ul>
                        <li>Services</li>
                        <li>Support</li>
                        <li>Terms & Condition</li>
                        <li>Privacy Policy</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="footer-column follow-us">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-whatsapp"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
