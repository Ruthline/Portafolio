import { Link } from 'react-router-dom';
import'../navbar/Navbar.css';
function Navbar(){
    return(
        
        <navbar className='navBar'>
        <Link to="/home" className='item'>
            <i class="fa-solid fa-house-chimney"></i>
            Home
        </Link>
        <Link to="/projects" className='item'>
        <i class="fa-solid fa-house-chimney"></i>
        Projects
        </Link>
        <Link to="/studies" className='item'>
        <i class="fa-solid fa-house-chimney"></i>
        Studies
        </Link>
        </navbar>
    );
}

export default Navbar;