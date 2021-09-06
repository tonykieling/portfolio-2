import { useState, useRef, useEffect } from "react";
import SocialMediasBox from "./SocialMediasBox";

export default function Contact() {
  useEffect(() => {
    console.log("useffecttt");
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }, []);
  
  const [state, setState] = useState({
    name    : "",
    email   : "",
    message : ""
  });

  const [redBoxClass, setRedBoxClass] = useState({
    name    : null,
    email   : null,
    message : null
  });

  const [buttonMessage, setButtonMessage] = useState("Send Message");
  const [buttonType, setButtonType] = useState("btn-primary");

  const refName     = useRef(null);
  const refEmail    = useRef(null);
  const refMessage  = useRef(null);
  const refButton   = useRef(null);


  const handleChange = event => {
    const { name, value } = event.target;
    const key = event.key;

    if (key === "Enter") {
      event.preventDefault();
      event.stopPropagation();

      switch(name) {
        case "name":
          console.log("blur");
          if (state.name)
            refEmail.current.focus();
          break;
        case "email":
          if (state.email)
            refMessage.current.focus();
          break;
        case "message":
          if(state.message)
            refButton.current.click();
          break;

        default: // console.log("it's default");
      }
    } else {
      setState({...state, [name]: value});
      (name === "name") && setRedBoxClass({...redBoxClass, name: null});
      (name === "email") && setRedBoxClass({...redBoxClass, email: null});
      (name === "message") && setRedBoxClass({...redBoxClass, message: null});
    }
  };


  const sendMessage = async event => {
    console.log("inside send message", !!state.name);
    event.preventDefault();
    let flag = false;
    let tempObj = {};
    if (!state.name) {
      tempObj = {...tempObj, name: "redBox"};
      refName.current.focus();
      flag = true;
    }
    
    if (!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(state.email)) {
      tempObj = {...tempObj, email: "redBox"};
      if (!flag) {
        flag = true;
        refEmail.current.focus();
      }
    }
    
    if (!state.message) {
      tempObj = {...tempObj, message: "redBox"};
      if (!flag) {
        flag = true;
        refMessage.current.focus();
      }
    }

    if (flag) {
      setRedBoxClass(tempObj);
      return;
    } else {
      const url = "/api";
      const body = {
        person  : state.name,
        email   : state.email, 
        message : state.message,
        password: process.env.pass
      };
console.log("body=", body);
      const email = await fetch(
        url,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        },
      );
      console.log("email:::", email);

    }

    // setButtonMessage("sending message...");
    // setButtonType("button-sending");

    // setTimeout(() => {
    //   setButtonMessage("Thank you for your message! :)");
    //   setButtonType("button-thanks");

    //   setTimeout(() => {
    //     setButtonMessage("Send message");
    //     setButtonType("btn-primary");
    //   }, 3000);
    // }, 2000);
  };


  return(
    <div>
      <div className="card card-container card-contact">
        <p>Please, feel free to contact me using the form below. </p> 

        <input 
          className         = {`form-control form-text ${redBoxClass.name}`}
          placeholder       = "Your name" 
          data-bs-toggle    = "tooltip" 
          data-bs-placement = "top"
          data-bs-html      = "true"
          title             = "Insert your name"
          
          autoFocus   = { true }
          type        = "text"
          name        = "name"
          value       = { state.name }
          onChange    = { handleChange }
          onKeyPress  = { handleChange }
          ref         = { refName}
          // tooltip stylling is not working because the place where it is the element. It it positioned on <body>, it works. Check it in the future
        />

        <div className="form-group">
          <input 
            className         = {`form-control form-text ${redBoxClass.email}`}
            placeholder     = "Your email"
            data-bs-toggle  = "tooltip" 
            title           = "I will never share your email with anyone else."
            aria-describedby= "emailHelp"

            type        = "email"
            name        = "email"
            value       = { state.email }
            onChange    = { handleChange }
            onKeyPress  = { handleChange }
            ref         = { refEmail }
          />
          {/* <p className="form-text-muted">We'll never share your email with anyone else.</p> */}
        </div>

        {/* <label className="form-label">Leave your message:</label> */}
        <textarea 
          className       = {`form-textarea ${redBoxClass.message}`}
          placeholder     = "Please, leave your message" 
          data-bs-toggle  = "tooltip" 
          title           = "Insert your message"

          type        = "text"
          name        = "message"
          value       = { state.message }
          onChange    = { handleChange }
          onKeyPress  = { handleChange }
          ref         = { refMessage}
        />

        <button
          type      = "button"
          onClick   = { sendMessage }
          className = {`btn btn-sm ${ buttonType }`}
          ref       = { refButton }
        >
          { buttonMessage }
        </button>

        <p className = "last-line">It is also possible to reach out through the social medias as follow.</p>
      </div>
      <SocialMediasBox />
    </div>
  );
}