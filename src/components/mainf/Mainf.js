import '../mainf/Mainf.css';
import Programer from '../mainf/programer.png';

function Mainf(){
    return(
        <main className='containF'>
                
                <div className="textMe">
                    <div className='resquare'>
                        <div className='square-up'>
                            <h1>¿Por qué Desarrolladora?</h1>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
                        </div>
                        <div className='square-middle'>
                        <img src={Programer}></img>
                        </div>
                        <div className='square-down'>
                            <h1>Area Frontend</h1>
                        <p>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                </div>
            
            
        </main>
    );
}
export default Mainf;


