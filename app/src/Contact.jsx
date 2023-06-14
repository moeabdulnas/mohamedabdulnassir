import { useState } from "react";
import React from "react";
import "./Contact.css"

const Contact = (props) => {
    const [sent, setSent] = useState(false);
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2b9c9d14-48bb-4e02-93cb-0bc960af1e89");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            }).then((res) => res.json());

            if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };
    // <span id="asterisk">*</span> 
    return (
        <div className="contact">
            <h1 id="heading">Get in touch</h1>
            { !sent ? (
                <><div className="contactContainer">
                <form onSubmit={onSubmit} className="form">
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
                <button type="submit" form="contactForm" id="send" onClick={(e) => {
                    // //setSent(true);
                    // onSubmit(e);
                }}>Send message</button>
            </div></>
            ):  (<><div className="contactContainer"><h1 id="sentHeading">Sent!</h1></div><div className="contactButtonsContainer">
            <button id="back" onClick={() => {
                props.setContact(false);
            }}>Go back</button></div></>)}
        </div>
    )
}

export default Contact;