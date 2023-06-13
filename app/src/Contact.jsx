import { useState } from "react";
import "./Contact.css"

const Contact = (props) => {
    const [sent, setSent] = useState(false);
    return (
        <div className="contact">
            <h1>Get in touch</h1>
            <div className="contactContainer">
                <form action="" className="form">
                    <div className="nameDiv">
                        <label htmlFor="name">Your name:</label>
                        <input type="text" id="name"/>
                    </div>
                    <div className="emailDiv">
                        <label htmlFor="email">Your email:</label>
                        <input type="email" id="email"/>
                    </div>
                    <div className="messageDiv">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" rows="20"></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;