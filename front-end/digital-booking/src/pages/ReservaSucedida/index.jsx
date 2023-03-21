import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function ReservaSucedida()
{
    return(
        <div className={style.container}>
            <FontAwesomeIcon icon={faCheck } style={{color:"green"}} size="4x"/>
            <h1>Muito obrigado!</h1>
            <p>Sua reserva foi feita com sucesso</p>
            <Link to="/"><button>Voltar a página inicial</button></Link>
        </div>
    );
}