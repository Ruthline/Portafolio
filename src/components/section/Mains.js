import Forja from '../section/forja.png';
import {Link} from 'react-router-dom';
import Animalandia from '../section/animalandia.jpg';
import Steam from '../section/steam.png';
import './Mains.css';

function Mains(){
    return(
        <main className='mains'>
            <div className="slider-index">
                <section id="slider">
                    <input type="radio" name="slider" id="slide1"></input>
                    <input type="radio" name="slider" id="slide2"></input>
                    <input type="radio" name="slider" id="slide3"></input>
                    <input type="radio" name="slider" id="slide4"></input>
                    <input type="radio" name="slider" id="slide5"></input>

                    <div id="slides">
                        <h1>PROYECTOS</h1>
                        <div className="inner">
                            <div className="slide_1">
                                <div className="slide-content">
                                    <div className='square-p'>
                                        <div className='square-logo'>
                                            <img src={Forja}></img>
                                        </div>
                                        <div className='square-i'>
                                            <a href='https://github.com/Ruthline/PROYECTO-FORJA'><i class="fa-brands fa-github-square"></i></a>
                                            <a href='https://ruthline.github.io/PROYECTO-FORJA/'><i class="fa-solid fa-square-arrow-up-right"></i></a>
                                        </div> 
                                    </div>
                                </div> 
                            </div>

                            <div className="slide_2">
                                <div className="slide-content">
                                <div className='square-p'>
                                        <div className='square-logo'>
                                            <img src={Animalandia}></img>
                                        </div>
                                        <div className='square-i'>
                                            <a href='https://github.com/Ruthline/Animalandia.github.io'><i class="fa-brands fa-github-square"></i></a>
                                            <a href='https://ruthline.github.io/Animalandia.github.io/'><i class="fa-solid fa-square-arrow-up-right"></i></a>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div className="slide_3">
                                <div className="slide-content">
                                <div className='square-p'>
                                        <div className='square-logo'>
                                            <img src={Steam}></img>
                                        </div>
                                        <div className='square-i'>
                                            <a href='https://github.com/Ruthline/Proyecto-STEAM'><i class="fa-brands fa-github-square"></i></a>
                                            <a href='https://ruthline.github.io/Proyecto-STEAM/'><i class="fa-solid fa-square-arrow-up-right"></i></a>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div className="slide_4">
                                <div className="slide-content">
                                <div className='square-p'>
                                        <div className='square-logo'>
                                            <img src={Forja}></img>
                                        </div>
                                        <div className='square-i'>
                                            <a><i class="fa-brands fa-github-square"></i></a>
                                            <a><i class="fa-solid fa-square-arrow-up-right"></i></a>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div className="slide_5">
                                <div className="slide-content">
                                <div className='square-p'>
                                        <div className='square-logo'>
                                            <img src={Animalandia}></img>
                                        </div>
                                        <div className='square-i'>
                                            <a><i class="fa-brands fa-github-square"></i></a>
                                            <a><i class="fa-solid fa-square-arrow-up-right"></i></a>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="controllers">
                        <label for="slide1">1</label>
                        <label for="slide2">2</label>
                        <label for="slide3">3</label>
                        <label for="slide4">4</label>
                        <label for="slide5">5</label>
                    </div>

                    <div className="bullets">
                        <label for="slide1"></label>
                        <label for="slide2"></label>
                        <label for="slide3"></label>
                        <label for="slide4"></label>
                        <label for="slide5"></label>
                    </div>
                </section>
            </div>
        </main>
    );
}
export default Mains;