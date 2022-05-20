import '../footer/Footer.css';
function Footer(){
    return(
        <footer className='footer'>
            <div className='double-f'>
                <div className='contact'>
                    <h3>Contact me</h3><hr></hr>
                    <div className='email'>
                        <i class="fa-solid fa-envelope"></i>
                        <p>rutheveline@hotmail.es</p>
                    </div>
                    <div className='phone'>
                        <i class="fa-solid fa-mobile-retro"></i>
                        <p>3194128993</p>
                    </div>
                </div>
                <div className='social'>
                <h3>Social red</h3><hr></hr>
                    <div className='lind'>
                        <i class="fa-brands fa-linkedin"></i>
                            <p>Ruth Rodriguez</p>
                        </div>
                        <div className='git'>
                            <i class="fa-brands fa-github"></i>
                            <p>Ruthline</p>
                        </div>
                </div>
            </div>
            <div className='copy-r'>
                <h5>© Copy right</h5>
            </div>

        </footer>
    );
}
export default Footer;