import Footer from "./Footer";

export default function Contact() {

  return(
    <div>
      <div className="card card-container card-contact">
        <p>Please, feel free to contact me using the form below. </p> 

        {/* <label className="form-label">Name:</label> */}
        <input 
          className         = "form-text" 
          placeholder       = "Your name" 
          data-bs-toggle    = "tooltip" 
          data-bs-placement = "top"
          data-bs-html      = "true"
          title             = "Insert your name"
          // tooltip stylling is not working because the place where it is the element. It it positioned on <body>, it works. Check it in the future
        />

        {/* <label className="form-label">Email:</label> */}
        <input 
          className       = "form-text" 
          placeholder     = "Your email"
          data-bs-toggle  = "tooltip" 
          title           = "Insert your email"
        />

        {/* <label className="form-label">Leave your message:</label> */}
        <textarea 
          className       = "form-textarea" 
          placeholder     = "Please, leave your message" 
          data-bs-toggle  = "tooltip" 
          title           = "Insert your message"
        />

        <button
          type = "button"
          className = "btn btn-primary btn-sm"
        >
          Send message
        </button>

        <p className = "last-line">It is also possible to reach out through the social medias as follow.</p>
      </div>
      <Footer />
    </div>
  );
}