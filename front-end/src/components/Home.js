import TK from "../graphics/tk-picture.jpg";

export default function Home() {

  return(
    <div className="card card-container">
      <div className="card-inner home-container">
        <div className="cont1 cont">
          <div>
            <h1>Tony Kieling</h1>
            <h1>Web</h1>
            <h1>Developer</h1>
          </div>
          <div>
            <h2>Welcome to my Web site.</h2>
          </div>
        </div>
        <div className="cont2">
          <img 
            src={ TK } 
            alt="TK"
            className="picture"
          />
        </div>
      </div>
    </div>
  );
}