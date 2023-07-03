import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import SignInForm from "./Components/routes/Register";
import "./styles.css";

import {Home, About, Contact, Servise} from './Components/routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/routes/Footer";

const App = () => {
    return (
        <div className="App">
            
                <NavbarComponent />
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/servise" element={<Servise/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/register" element={<SignInForm/>}/>
                </Routes>
                <Footer />
        </div>
        
    );
}

export default App;