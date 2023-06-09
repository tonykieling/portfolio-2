import TK from "../graphics/tk888.jpg";

export default function Home() {

  return(
    <div className = "card">
      <div 
        className="home-container d-flex flex-direction-row m-auto"
      >
        <div className="cont1">
          <div className="cont1-1">
            {/* 
            check poppins font 
            at fonts.google.com
            */}
            <div className="my-name">
              <h1>Tony Kieling</h1>
            </div>
            <h2>Web Developer</h2>
          </div>
          <div className="cont1-2">
            <h3>Welcome to my Website</h3>
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