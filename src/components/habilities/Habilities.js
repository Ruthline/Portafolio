import '../habilities/Habilities.css';
function Habilities(){
    return(
        <section className='all-habilities'>
            <h1>Habilities</h1>
            <div className='bar-content'>
                <p><strong>Javascript</strong></p>
                <div className='bar-j'>
                        <div className='bar-js'></div>
                </div>
            </div>
            <div className='bar-content'>
                <p><strong>HTML</strong></p>
                <div className='bar-H'>
                        <div className='bar-Hs'></div>
                </div>
            </div>
            <div className='bar-content'>
                <p><strong>CSS</strong></p>
                <div className='bar-C'>
                        <div className='bar-Cs'></div>
                </div>
            </div>
            <div className='bar-content'>
                <p><strong>React</strong></p>
                <div className='bar-R'>
                        <div className='bar-Rs'></div>
                </div>
            </div>

        </section>
    );
}
export default Habilities;