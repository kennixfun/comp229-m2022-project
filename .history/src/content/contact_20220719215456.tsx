import React, { useEffect } from 'react';

function Contact()
{
    useEffect(()=>{
        document.title = "Contact Us";
    });
    
    return(
        <div className="container">
            <h1>Contact Us</h1>
            <hr />
            <p>Here is detail contact us...</p>
        </div>
    );
}

export default Contact;