import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export function Product() {
    const { id } = useParams();

    const [categoria, setCategoria] = useState('');
    const [titulo, setTitulo] = useState('');
    const [localizacao, setLocalizacao] = useState('');

    useEffect(() => {
    }, [id])

    return (
        <section className="ContainerProduct">
            <div className={style.headerdetails}>
                <div className={style.title}>
                    <span>{categoria}</span>
                    <h1>{titulo}</h1>
                </div>
                <div className={style.backpage}>
                    <Link to='/'>
                        <section>
                            <FontAwesomeIcon icon={faChevronLeft} size='3x' />
                        </section>
                    </Link>
                </div>
            </div>

            <div className={style.locationdetails}>
                <p><FontAwesomeIcon icon={faLocationDot} /> {localizacao}</p>
            </div>
        </section>
    )
}