import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";

const Header = () => {
  return (
    <nav className='header'>
            <img src={logo} alt=""/>
            <div>
                <Link to="/">Home</Link>
                <Link to="/men">Men</Link>
                <Link to="/women">Women</Link>
                <Link to="/kids">Kids</Link>
                <Link to="/leather">Leather</Link>                
                <Link to="/jewelry">Jewelry</Link>                

            </div>
        </nav>
  );
};

export default Header;