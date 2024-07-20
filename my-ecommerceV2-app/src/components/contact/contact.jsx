import React from 'react'
import './contact.css'
import {useState, useRef} from 'react'


function Contact(){

const [invalidfirstname, setInvalidFirstname] = useState(false);
const [invalidLastname, setInvalidLastname] = useState(false);
const [invalidEmail, setInvalidEmail] = useState(false);
const [invalidMessage, setInvalidMessage] = useState(false);

const firstname = useRef();
const lastname = useRef();
const email = useRef();
const message = useRef()

function validation (entries){
const firstinput = firstname.current.value;
const lastinput = lastname.current.value;
const emailinput = email.current.value;
const messageinput = message.current.value;

const validFirstName = firstinput.length>0
const validLastName = lastinput.length>0
const validEmail = emailinput.includes('@')
const validMessage = messageinput.length>0

if(!validEmail){
    setInvalidEmail(true)
    } else {
        setInvalidEmail(false)
    }

if(!validFirstName){
    setInvalidFirstname(true)
    } else{
        setInvalidFirstname(false)
    }

    if(!validLastName){
        setInvalidLastname(true)
    } else {
        setInvalidLastname(false)
    }

    if(!validMessage){
        setInvalidMessage(true)
    } else {
        setInvalidMessage(false)
    }

}


    return (
    <>
    <div className="contact-parent">
        <form id="form" action="/">
    <h1 className="contact-header">Contact Us</h1>
   
   
    
        <div className="input-box">
        <input id="firstName" name="firstName" type="text" placeholder="Enter First Name" ref={firstname}/>
                 <div className="error">{invalidfirstname && <p>First name required. </p>}</div>
    </div>
    
       
    <div className="input-box">
                <input id="lastName" name="lastName" type="text" placeholder="Enter Last Name" ref={lastname}/>
                        <div className="error">{invalidLastname && <p>Last name is required.</p>}</div>
    </div>
   
    


    <div className="input-box">
        <input id="email" name="email" type="text" placeholder="Enter Your Email" ref={email}/>
                 <div className="error">{invalidEmail && <p>Enter a valid email.</p>}</div>
</div>
<div className="input-box">
    
<textarea id="Message" name="Message"   rows="4"   placeholder="Type your message here" ref={message}></textarea>
<div className="error">{invalidMessage && <p>Please enter a message.</p>}</div>
</div> 



<div className="submit-parent">
 <button id="Submit" type="button" onClick={validation}>Submit</button>
      </div>
      


</form>
<div className="location">

      </div>

        </div>

       


    
    
    
    
    
    
    
    </>)
}

export default Contact