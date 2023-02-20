import logoMarvel from "../assets/logo-marvel.webp";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  
 
  const handleClick = () => {
    return alert("Cliqué !");
  };
return (
  <div className="Header">
    {/* insert logo */}
    <div className="box-for-logo">
      {/* <Link
        to="./Characters"
        // state={{Characters: Characters}}
        // key={Characters.id}
        style={{ textDecoration:"none", color: "red"}}    
      > */}
        
        <img
          src={logoMarvel}
          alt="logo Marvel"
          className="logoMarvel"
        />
      {/* </Link>   */}
    </div>
    {/* menu with characters, comics & favorites */}
    <div className="navbar">
      <p>Hello !!!</p>
      <div className="search-box">
        {/* <FontAwesomeIcon icon={searchIcon} /> */}
        <input
          placeholder="search-for-character"
        />
        <button></button>
      

        <p>holderplace for search !!!</p>
      </div>
      <div className="menu">
        <button
          className="{characters}" 
          type="button"
          onClick={handleClick}
        >
          CHARACTERS
        </button>
        <button
          className="{comics}" 
          type="button"
          onClick={handleClick}
        >
          COMICS
        </button>
        <button
          className="{favorites}" 
          type="button"
          onClick={handleClick}
        >
          FAVORITES
        </button>
      </div>
    </div>
  </div>
);    
};

export default Header;