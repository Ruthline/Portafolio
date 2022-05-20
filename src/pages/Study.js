import {useParams} from 'react-router-dom';
import { getStudy } from '../studies';

function Study(){
    const params=useParams();
    const study= getStudy(parseInt(params.id));
        return(
        <main className='containF'>
            {params.id}
            <h1>Detalle de Job</h1>
            <div>
                <h1>{study.titulo}</h1>
                <p><strong>Institución</strong>{study.institucion}</p>
                <p><strong>Año de Inico</strong>{study.añoInicio}</p>
                <p><strong>Año de Finalización</strong>{study.añoFin}</p>
            </div>
        </main>
    );
}
export default Study;