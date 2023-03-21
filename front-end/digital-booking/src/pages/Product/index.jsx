import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './style.module.css'
import { Link } from 'react-router-dom'

//Importes do slide
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

//imports icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faLocationDot,
  faChevronRight,
  faXmark,
  faWifi,
  faSwimmer,
  faHome,
  faTelevision,
  faSnowflake,
  faPaw,
  faCar
} from '@fortawesome/free-solid-svg-icons'
import { Calender } from '../../components/Calender'
import { Policy } from '../../components/Policy'

export function Product() {
  const { id } = useParams()

  const [data, setData] = useState({
    categoria: 'Hotel',
    titulo: 'Hermitage Hotel',
    localizacao: 'Buenos Aires, Argentina - 900m da praia',
    fotos: [
      'https://picsum.photos/id/12/3000',
      'https://picsum.photos/id/13/3000',
      'https://picsum.photos/id/37/3000',
      'https://picsum.photos/id/49/3000',
      'https://picsum.photos/id/57/3000',
      'https://picsum.photos/id/58/3000'
    ]
  })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slides, setSlides] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    dragSpeed: 2,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  const [product, setProduct] = useState({
    categoria: '',
    titulo: '',
    localizacao: '',
    descricao: '',
    caracteristica: '',
    politicas: ''
  })

  useEffect(() => {}, [id])

  const slide = () => setSlides(!slides)

  const [categoria, setCategoria] = useState('')
  const [titulo, setTitulo] = useState('')
  const [localizacao, setLocalizacao] = useState('')

  return (
    <>
      <section className="ContainerProduct">
        <div className={style.headerdetails}>
          <div className={style.title}>
            <span>{data.categoria}</span>
            <h1>{data.titulo}</h1>
          </div>
          <div className={style.backpage}>
            <Link to="/">
              <section>
                <FontAwesomeIcon icon={faChevronLeft} size="3x" />
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
          {data.fotos.slice(0, 5).map((urlImg, index) => (
            <div
              className={`${style.responsiveImages} ${style.gridAreas}`}
              style={{ backgroundImage: `url(${urlImg})` }}
            ></div>
          ))}
          <button onClick={slide} id={style.buttonOpenSlideDesktop}>
            Ver mais
          </button>
        </div>

        {/* Slide versão desktop */}
        {slides ? (
          <div className={style.containerSlideDesktop}>
            <div
              ref={sliderRef}
              className={`keen-slider ${style.imagesDesktop}`}
            >
              {data.fotos.map((urlImg) => (
                <div
                  style={{ backgroundImage: `url(${urlImg})` }}
                  className={`keen-slider__slide ${style.responsiveImages}`}
                ></div>
              ))}
              <button
                id={style.buttonNextSlide}
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current.next()
                }
              >
                <FontAwesomeIcon icon={faChevronRight} size="4x" />
              </button>
              <button
                id={style.buttonPrevSlide}
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current.prev()
                }
              >
                <FontAwesomeIcon icon={faChevronLeft} size="4x" />
              </button>
              <button id={style.buttonCloseSlide} onClick={slide}>
                <FontAwesomeIcon icon={faXmark} size="3x" />
              </button>
            </div>
          </div>
        ) : (
          ''
        )}

        {/* Slide vesão tablet e mobile */}
        <div className={style.containerSlideMobile}>
          <div ref={sliderRef} className="keen-slider">
            {data.fotos.map((urlImg) => (
              <div
                style={{ backgroundImage: `url(${urlImg})` }}
                className={`keen-slider__slide ${style.responsiveImages}`}
              ></div>
            ))}
          </div>
        </div>

        {loaded && instanceRef.current && (
          <div className={style.dots}>
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys()
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={`${style.dot} ${
                    currentSlide === idx ? style.active : ''
                  }`}
                ></button>
              )
            })}
          </div>
        )}
      </section>

      <section className={style.details}>
        <div className={style.descricao}>
          <h2>Descrição</h2>
          <div className={style.separator}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit,
            rerum sequi, eos pariatur fugiat repudiandae molestiae repellendus,
            dignissimos amet iste voluptates recusandae consequuntur rem alias.
            Eius consequatur officiis ab?
          </p>
        </div>
      </section>

      <section className={style.features}>
        <span>{product.caracteristica}</span>
        <h2>O que esse lugar oferece?</h2>
        <div className={style.separator}></div>
        <div className={style.featuresIcons}>
          <p>
            <FontAwesomeIcon icon={faWifi} /> - Wifi
          </p>
          <p>
            <FontAwesomeIcon icon={faHome} /> - Cozinha
          </p>
          <p>
            <FontAwesomeIcon icon={faTelevision} /> - Televisão
          </p>
          <p>
            <FontAwesomeIcon icon={faSnowflake} /> - Ar Condicionado
          </p>
          <p>
            <FontAwesomeIcon icon={faPaw} /> - Aceita Pets
          </p>
          <p>
            <FontAwesomeIcon icon={faCar} /> - Estacionamento
          </p>
          <p>
            <FontAwesomeIcon icon={faSwimmer} /> - Piscina
          </p>
        </div>
      </section>

      <Policy />

      <section className={style.containerReservation}>
        <h2>Datas disponíveis</h2>

        <div className={style.contentCalender}>
          <Calender />

          <div className={style.calenderText}>
            <p>Adicione as datas da sua viagem para obter preços exatos</p>
            <button>Iniciar reserva</button>
          </div>
        </div>
      </section>
    </>
  )
}
// useEffect(() => {}, [id])
