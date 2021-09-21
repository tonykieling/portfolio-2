import { useState, useRef, useEffect } from "react";
import SocialMediasBox from "./SocialMediasBox";
import { goTop } from "../helpers/goTop.js";
import ReCaptchaV2 from "react-google-recaptcha";

const BadMessage = () => (
  <>
    <p><b>Something bad happened. :/</b></p>
    <p><b>Please try it later or</b></p>
    <p><b>email to <a style={{color: "blue"}} href="mailto:tony.kieling@gmail.com"> tony.kieling@gmail.com </a></b></p>
  </>
);

export default function Contact() {

  useEffect(() => goTop(), []);

  const [state, setState] = useState({
    // name    : "",
    // email   : "",
    // message : ""
    name    : "test",
    email   : "test@email.ca",
    message : "msg test"
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
  const refReCaptcha = useRef(null);


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
    event.preventDefault();

    // it checks if there was an error and the form was set with the BadMessage
    // if so, this if will enable the form again
    if (buttonType === "btn-warning") {
      setButtonType("btn-primary");
      setButtonMessage("Send message");
      refMessage.current.focus();
      return;
    }

    //  it checks if the form is filled okay
    // if not, the flag binder gets on (true) and it will set the form to get attention from the user
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

      const token = await refReCaptcha.current.getValue();
      console.log("token========", token);
      
      if (!token) {
        // set redbox for thecatptcha
        setButtonMessage("captch, please");
        return;
      }
      refReCaptcha.current.reset();

      // if everything is okay, the form will be sent
      try {
        const url = "/api";
        const body = {
          person  : state.name,
          email   : state.email, 
          message : state.message,
          token
        };
  // console.log("body=", body);

        

        setButtonMessage("sending message...");
        setButtonType("button-sending");

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
        const res = await email.json();
        console.log("rRES:::", res);

        if (res.message) {
          setTimeout(() => {
            setButtonMessage("Thank you for your message! :)");
            setButtonType("button-thanks");

            setTimeout(() => {
              setButtonMessage("Send message");
              setButtonType("btn-primary");
              setState({
                ...state,
                name    : "",
                email   : "",
                message : ""
              });

              refName.current.focus();
            }, 3000);
          }, 2000);
        } else
          throw new Error();

      } catch(error) {
        console.log("checking error:::", error);
        setButtonType("btn-warning");
        setButtonMessage(<BadMessage />);
      }
    }
  };


  const reCaptchaChange = value => {
    // console.log("this is value:", value);
    console.log("process.env", process.env.REACT_APP_SITEKEY)
  }


  return(
      // {/* <div className="card card-container card-contact"> */}
      <div className="card card-container card-contact">
        <div>
          <p className="mt-2 mb-5 text-center">Please, feel free to reach out. 🤓 </p> 

          <input 
            className         = {`form-control form-text ${redBoxClass.name}`}
            placeholder       = "Your name" 
            data-bs-toggle    = "tooltip" 
            data-bs-placement = "top"
            data-bs-html      = "true"
            title             = "Insert your name"
            
            autoFocus   = { window.innerWidth > 700 && true }
            type        = "text"
            name        = "name"
            value       = { state.name }
            onChange    = { handleChange }
            onKeyPress  = { handleChange }
            ref         = { refName}
            disabled  = { buttonMessage === "sending message..." ? true : false }
          />

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
            disabled  = { buttonMessage === "sending message..." ? true : false }
          />

          <textarea
            className       = {`form-control form-textarea ${redBoxClass.message}`}
            placeholder     = "Please, leave your message" 
            data-bs-toggle  = "tooltip" 
            title           = "Insert your message"
            rows            = "7"

            type        = "text"
            name        = "message"
            value       = { state.message }
            onChange    = { handleChange }
            onKeyPress  = { handleChange }
            ref         = { refMessage }
            disabled  = { buttonMessage === "sending message..." ? true : false }
          />

          <button
            type      = "button"
            onClick   = { sendMessage }
            className = {`btn btn-sm ${ buttonType }`}
            ref       = { refButton }
            disabled  = { buttonMessage === "sending message..." ? true : false }

            data-bs-toggle  = "tooltip" 
            title           = { buttonType === "btn-warning" ? "Click to renew" : "Send your message" }
          >
            { buttonMessage }
          </button>

          <ReCaptchaV2
            // sitekey="6Lc2eIEcAAAAAF_cCJ5jYnqSIyy2P0d0jPLy5t3s"
            sitekey={process.env.REACT_APP_SITEKEY}
            onChange={reCaptchaChange}
            ref={ refReCaptcha }
          />
        </div>

        <SocialMediasBox />

      </div>
  );
}