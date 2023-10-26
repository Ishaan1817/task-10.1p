import React, { useState } from 'react';
import {Button, Header, Input, Search} from "semantic-ui-react";
import './SignUp.css'
import axios from 'axios';


const SignUp = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page.

        if (email) {
            axios
                .post("http://localhost:5000/sendEmail", {
                    email,
                })
                .then((response) => {
                    console.log(response.data); // Log the response data
                    alert("Message sent successfully");
                })
                .catch((error) => alert("Error while sending: " + error.message));

        } else {
            setMessage("Please enter the email");
        }
    };

    return (
        <div>
            <Header as='h2' block size={'huge'} className={'signup'}>
                <Header as={'h1'}>
                    SIGN UP FOR NEWS LETTER
                    </Header>
                <Input placeholder='Search...' onChange={(e) => setEmail(e.target.value)} />
                <Button primary onClick={sendEmail}>
                    Subscribe
                </Button>
            </Header>
        </div>
    );
};

export default SignUp;