import {getAllStudy} from '../studies';
import '../components/studies/Studies.css'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
function Studies(){
    const studies=getAllStudy();
    return(
        <div>
            <Navbar/>
            <div className='box-studies'>
                <h1>Studies</h1>
                <div className='box-s'>
                    {studies.map(studies=>

                    <div  key={studies.id}className='list-studies'>
                        
                        <div className='list-titulo'>{studies.titulo}</div>

                        <div className='list-institucion'>{studies.institucion}</div>

                        <div className='list-año'>{studies.añoFin}</div>

                        <div className='btn-studies'>
                            <Link to ={`${studies.id}`}>Curosear</Link>
                        </div>
                    </div>
                        )}
                </div>
            </div>
            
        </div>
    );
}
export default Studies;