// import Favoris from "./components/Favoris";
// import { Link } from "react-router-dom";

const Characters = () => {
  
return (
  // List of Marvel characters
  <div className="container-characters"> 
{/* --------------------------------------------- */} 
    <p>Hello !!!</p>
    <div>
      {/* <Link
      to="/Comics"
      state={{Comic: Comic}}
      key={Comic.id}
      style={{ textDecoration:"none", color: "red"}}    
      > */}
        <h2>
          COMICS
        </h2>
      {/* </Link>  */}
{/* --------------------------------------------- */}
        <h2> List of Marvel Characters </h2>
      {/* fiche personnage MARVEL= photo, nom, description */}
        <div className="portrait-marvel">
          {/* picture character Marvel */}
            {/* <img src="" alt="" /> */}
          {/* name character Marvel */}
            <h3>name</h3>
          {/* description of character Marvel */}
            <p>description</p>
        </div>
    </div>
  </div>
);
}



export default Characters;
