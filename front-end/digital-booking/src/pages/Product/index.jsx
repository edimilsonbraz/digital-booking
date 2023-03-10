import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faLocationDot, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

//Importes do slide
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css';

export function Product() {
    const { id } = useParams();
    const [data, setData] = useState({
        categoria: "Hotel", titulo: "Hermitage Hotel", localizacao: "Buenos Aires, Argentina - 900m da praia",
        fotos: ["https://picsum.photos/id/12/3000", "https://picsum.photos/id/13/3000", "https://picsum.photos/id/37/3000",
            "https://picsum.photos/id/49/3000", "https://picsum.photos/id/57/3000", "https://picsum.photos/id/58/3000"]
    });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState(false);
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            dragSpeed: 2,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        }
    )

    useEffect(() => {
    }, [id])

    const slide = () => setSlides(!slides);

    return (
        <section className="ContainerProduct">
            <div className={style.headerdetails}>
                <div className={style.title}>
                    <span>{data.categoria}</span>
                    <h1>{data.titulo}</h1>
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
                <FontAwesomeIcon icon={faLocationDot} />
                <p>{data.localizacao}</p>
            </div>

            {/* Grid de 5 primeiras imagens*/}

            <div className={style.containerGridImages}>
                {data.fotos.slice(0, 5).map((urlImg, index) => <div className={`${style.responsiveImages} ${style.gridAreas}`} style={{backgroundImage: `url(${urlImg})`}}></div>)}
                <button onClick={slide} id={style.buttonOpenSlideDesktop}>Ver mais</button>
            </div>

            {/* Slide versão desktop */}
            {slides ? (
                <div className={style.containerSlideDesktop}>
                    <div ref={sliderRef} className={`keen-slider ${style.imagesDesktop}`}>
                        {data.fotos.map(urlImg => <div style={{backgroundImage: `url(${urlImg})`}} className={`keen-slider__slide ${style.responsiveImages}`}></div>)}
                        <button id={style.buttonNextSlide} onClick={e => e.stopPropagation() || instanceRef.current.next()}><FontAwesomeIcon icon={faChevronRight} size="4x" /></button>
                        <button id={style.buttonPrevSlide} onClick={e => e.stopPropagation() || instanceRef.current.prev()}><FontAwesomeIcon icon={faChevronLeft} size="4x" /></button>
                        <button id={style.buttonCloseSlide} onClick={slide}><FontAwesomeIcon icon={faXmark} size="3x" /></button>
                    </div>
                </div>
            ) : ""}

            {/* Slide vesão tablet e mobile */}
            <div className={style.containerSlideMobile}>
                <div ref={sliderRef} className="keen-slider">
                    {data.fotos.map(urlImg => <div style={{backgroundImage: `url(${urlImg})`}} className={`keen-slider__slide ${style.responsiveImages}`}></div>)}
                </div>
            </div>

            {loaded && instanceRef.current && (
                    <div className={style.dots}>
                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={`${style.dot} ${(currentSlide === idx ? style.active : "")}`}
                                ></button>
                            )
                        })}
                    </div>
                )}
        </section>
    )
}