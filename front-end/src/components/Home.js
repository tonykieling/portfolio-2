import TK from "../graphics/tk-picture.jpg";

export default function Home() {

  return(
    <div className="card card-container">
      <div className="home-container">
        <div className="cont1 cont">
          <div>
            <h1>Tony Kieling</h1>
            <h1>Web</h1>
            <h1>Developer</h1>
          </div>
          <div>
            <h2>Welcome to my Web Site</h2>
            <h3><a 
                  href = "https://tkwebdev.ca">tkwebdev.ca</a></h3>
          </div>
        </div>
        <div className="cont2">
          <img 
            className = "picture"
            src       = { TK } 
            alt       = "TK"
          />
        </div>
      </div>
    </div>
  );
}