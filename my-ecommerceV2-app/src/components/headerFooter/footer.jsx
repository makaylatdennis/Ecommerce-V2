import React from 'react';
import './footer.css'; 

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="footer-col" id="footer1">
                        <div id="footer-logo">Curl Essentials Co.</div>
                        <h4>Join the #CurlEssentialsFam!</h4>
                        <p>Curl Essentials is more than a beauty supply, we want our customers to feel heard and seen as well as confident in their curls and coils. With this in mind our newsletter includes tips based on your hair type, new products, and style ideas!</p>
                        <input id="newsletter-input" name="newsletter" type="text" placeholder="example@mail.com" />
                        <button id="submit-bttn" onClick={() => console.log('Submit')}>Submit</button>
                        <h3>Connect With Us!</h3>
                    </div>

                    <div className="footer-col" id="footer2">
                        <h4>Customer Service</h4>
                        <ul>
                            <li><p>Contact Us</p></li>
                            <li><p>FAQ</p></li>
                            <li><p>Return Policy</p></li>
                            <li><p>Partners</p></li>
                            <li><p>Join #CurlEssentialsFam</p></li>
                        </ul>
                    </div>

                    <div className="footer-col" id="footer3">
                        <h4>Legal</h4>
                        <ul>
                            <li><p>Privacy Policy</p></li>
                            <li><p>Terms of Use</p></li>
                            <li><p>Accessibility</p></li>
                            <li><p>Do Not Sell or Share</p></li>
                            <li><p>My Personal</p></li>
                            <li><p>Information</p></li>
                            <li><p>Consumer Health Data</p></li>
                            <li><p>Privacy Policy</p></li>
                            <li><p>Limit Use of My</p></li>
                            <li><p>Sensitive Personal</p></li>
                            <li><p>Information</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
