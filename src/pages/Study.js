import {useParams} from 'react-router-dom';
import { getStudy } from '../studies';
import '../components/studies/Study.css'
import Navbar from '../components/navbar/Navbar';
function Study(){
    const params=useParams();
    const study= getStudy(parseInt(params.id));
        return(
        <main>
            <Navbar/>
            <div className='detail'>
                <h1>My studies detail</h1>
                <div className='dates-d'>
                    <h1>{study.titulo}</h1><hr></hr>
                    <p><strong>Institución</strong>{study.institucion}</p>
                    <p><strong>Año de Inico</strong>{study.añoInicio}</p>
                    <p><strong>Año de Finalización</strong>{study.añoFin}</p>
                </div>
            </div>
        </main>
    );
}
export default Study;