import React , {Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
  render() { 
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top  ">
      <Link className="navbar-brand" to="/">
      <img src="./images/logo1.png" width="50" height="50" className="d-inline-block align-top  img-responsive logoimage" alt="React Bootstrap logo" />
      <img src="./images/logo.png" className="d-inline-block align-top brandnameimage img-responsive" alt="React bootstrap logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link text-black" to="/whyVyorius">Why Vyorius ?</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to="/solution/dataSync">Solutions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to="/product/intro">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to="/useCases/energy">Use Cases</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to="/team">Team</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to="/OurPartners">Partners</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to="/contact">Contact Us</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn my-2 my-sm-0 menubutton" type="submit">Launch Vyorius</button>
        </form>
      </div>
      
    </nav>
    )}
    } 

 
export default Header;