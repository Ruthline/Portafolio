import { Link } from 'react-router-dom';
import'../navbar/Navbar.css';
function Navbar(){
    return(
        
        <navbar className='navBar'>
        <Link to="/home" className='item'>
            <i class="fa-solid fa-house-chimney"></i>
            Home
        </Link>
        <Link to="/home" className='item'>
        <i class="fa-solid fa-house-chimney"></i>
        About me
        </Link>
        <Link to="/home" className='item'>
        <i class="fa-solid fa-house-chimney"></i>
        Jobs
        </Link>
        </navbar>
    );
}

export default Navbar;