import { useState } from "react";
import "./Contact.css"

const Contact = (props) => {
    const [sent, setSent] = useState(false);
    return (
        <div className="contact">
            <h1 id="heading">Get in touch</h1>
            { !sent ? (
                <><div className="contactContainer">
                <form action="" className="form" id="contactForm">
                    <div className="nameDiv">
                        <label htmlFor="name">Your name:</label>
                        <input type="text" id="name" required/>
                    </div>
                    <div className="emailDiv">
                        <label htmlFor="email">Your email:</label>
                        <input type="email" id="email" required/>
                    </div>
                    <div className="messageDiv">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" rows="20" required></textarea>
                    </div>
                </form>
            </div>
            <div className="contactButtonsContainer">
                <button id="back" onClick={() => {
                    props.setContact(false);
                }}>Go back</button>
                <button type="submit" form="contactForm" id="send" onClick={() => {
                    setSent(true);
                }}>Send message</button>
            </div></>
            ):  (<><div className="contactContainer"><h1 id="sentHeading">Sent!</h1></div></>)}
        </div>
    )
}

export default Contact;