import { Link } from 'react-router-dom';
import'../navbar/Navbar.css';
import Logo from '../navbar/Logo.png';
function Navbar(){
    return(
        
        <header>
            <div className="header-index">
                    
                <div className="nav-group">
                    
                    <Link to="/home" className="one-nav"><img src={Logo}></img></Link>
                    
                    <label for="clic-menu" className="three-nav" href="meni" ><i className="fa-solid fa-bars"></i></label>
                    <input type="checkbox" id="clic-menu"></input>
                    

                    
                    <div className="items">
                    <Link to="/home" className="four-nav item" >Home</Link>
                    <Link to="/projects"  className="five-nav item">Proyectos</Link>
                    <Link to="/studies" className="six-nav item">Estudios</Link>
                    <Link to="/skills" className="seven-nav item">Habilidades</Link>
                   
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
