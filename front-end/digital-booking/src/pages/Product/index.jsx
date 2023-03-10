import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './style.module.css'
import { Link } from 'react-router-dom'

//imports do Calendario
import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import br from 'date-fns/locale/pt-BR'
registerLocale('br', br)

//Importes do slide
import './style.css'
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

export function Product() {
  const { id } = useParams()

  const [product, setProduct] = useState({
    categoria: '',
    titulo: '',
    localizacao: '',
    caracteristica: ''
  })

  const [slideOpen, setSlideOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    dragSpeed: 2,
    slideChanged() {}
  })

  const setSlide = () => {
    setSlideOpen((prevSet) => !prevSet)
  }
  const [categoria, setCategoria] = useState('')
  const [titulo, setTitulo] = useState('')
  const [localizacao, setLocalizacao] = useState('')

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <>
      <section className="ContainerProduct">
        <div className={style.headerdetails}>
          <div className={style.title}>
            <span>{product.categoria}</span>
            <h1>{product.titulo}</h1>
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
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            {product.localizacao}
          </p>
        </div>

        {!slideOpen ? (
          <div className="containerSlide">
            <div id="first">
              <img src="https://picsum.photos/id/12/000" />
            </div>
            <div id="second">
              <img src="https://picsum.photos/id/13/0" />
            </div>
            <div id="third">
              <img src="https://picsum.photos/id/37/0" />
            </div>
            <div id="fourth">
              <img src="https://picsum.photos/id/49/0" />
            </div>
            <div id="fifth">
              <img src="https://picsum.photos/id/57/0" />
            </div>
            <button className="buttonSlideOpen" onClick={setSlide}>
              Ver mais
            </button>
          </div>
        ) : (
          <div className="containerSlideOpen">
            <div ref={sliderRef} className="keen-slider sizeSlide">
              <div className="keen-slider__slide number-slide1">
                <img src="https://picsum.photos/id/12/3000/" />
              </div>
              <div className="keen-slider__slide number-slide2">
                <img src="https://picsum.photos/id/13/3000" />
              </div>
              <div className="keen-slider__slide number-slide3">
                <img src="https://picsum.photos/id/37/3000" />
              </div>
              <div className="keen-slider__slide number-slide4">
                <img src="https://picsum.photos/id/49/3000" />
              </div>
              <div className="keen-slider__slide number-slide5">
                <img src="https://picsum.photos/id/57/3000" />
              </div>
              <div className="keen-slider__slide number-slide6">
                <img src="https://picsum.photos/id/58/3000" />
              </div>
              <button
                id="prev"
                onClick={(e) => e.stopPropagation() || slider.current.prev()}
              >
                <FontAwesomeIcon icon={faChevronLeft} size="4x" />
              </button>
              <button
                id="next"
                onClick={(e) => e.stopPropagation() || slider.current.next()}
              >
                <FontAwesomeIcon icon={faChevronRight} size="4x" />
              </button>
              <button className="buttonSlideClose" onClick={setSlide}>
                <FontAwesomeIcon icon={faXmark} size="3x" />
              </button>
            </div>
          </div>
        )}
      </section>

      <section className={style.features}>
                    
        <span>{product.caracteristica}</span>
        <h1>O que esse lugar oferece?</h1>
                    
        <div className={style.featuresIcons}>
                        
          <p><FontAwesomeIcon icon={faWifi} /> Wifi</p>                    
          <p><FontAwesomeIcon icon={faHome} /> Cozinha</p>                        
          <p><FontAwesomeIcon icon={faTelevision} /> Televisão</p>                        
          <p><FontAwesomeIcon icon={faSnowflake} /> Ar Condicionado</p>                        
          <p><FontAwesomeIcon icon={faPaw} /> Aceita Pets</p>                        
          <p><FontAwesomeIcon icon={faCar} /> Estacionamento</p>
          <p><FontAwesomeIcon icon={faSwimmer} /> Piscina</p>
                        
          </div>
      </section>


      <section className={style.containerReservation}>
        <div className={style.contentReservation}>
          <h2>Datas disponíveis</h2>

          <div className={style.contentCalender}>
            <DatePicker
              className={style.reactDatepicker__monthContainer}
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              monthsShown={2}
              inline
              locale="br"
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />

            <div className={style.calenderText}>
              <p>Adicione as datas da sua viagem para obter preços exatos</p>
              <button>Iniciar reserva</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
// useEffect(() => {}, [id])
