import { Component, useState } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarItems.css";
import { Link } from "react-router-dom";
import SignInForm from "./routes/Register";

export class NavbarComponent extends Component {
    state = { clicked: false};
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
    render() {
        return (
            
            <nav className="NavbarItems">
                <a className="navbar-logo" href="/" style={{textDecoration: 'none'}}>MasterSan.Tex</a>

                <div className="menu-icons" onClick={this.handleClick
                }>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
                    </i>
                </div>

                <div className="menu-icons">
                    <i className={this.clicked ? "fas fa-times": "fas fa-bars"}></i>
                </div>
                

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className= {item.cName} to={item.url}>
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        );
                    })}
                    
       <Link to={"/register"}><button>Заявка</button> </Link> 

       
                </ul>
            </nav>

        )
    }
}
export default NavbarComponent;