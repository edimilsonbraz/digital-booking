import api from '../../service/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './style.module.css'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import { useContext } from 'react'
import { IsLoggedContext } from '../../context/IsLoggedContext'
import { Loading } from '../../components/Loading'

//Importes do slide
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

//imports icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
  faWifi,
  faSwimmer,
  faHome,
  faTelevision,
  faSnowflake,
  faPaw,
  faCar,
  faPeopleRoof
} from '@fortawesome/free-solid-svg-icons'
import { Calender } from '../../components/Calender'
import { Policy } from '../../components/Policy'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { HeaderDetailsProduct } from './HeaderDetailsProduct'
import { ProductContext } from '../../context/ProductContext'

export function Product() {
  const { isLogged, toggleIsLogged } = useContext(IsLoggedContext)
  const { newProduct, setNewProduct } = useContext(ProductContext)
  const [loading, setLoading] = useState(true)


  const navigateTo = useNavigate()
  const reservarProduto = () => {
    if (isLogged) {
      //Se estiver logado
      // Ir para a pagina de reserva do produto
      const url = new URL(window.location.href)

      navigateTo(url.pathname + '/reserva')
    } else {
      // Se usuario nao estiver logado
      //Ir pra pagina de login e exibir uma mensagem especifica
      navigateTo('/login')
      toast.error('Para fazer uma reserva você precisa estar logado!')
    }
  }

  const { id } = useParams()

  const [data, setData] = useState({
    categoria: 'Hotel',
    titulo: 'Hermitage Hotel',
    localizacao: 'Buenos Aires, Argentina - 900m da praia',
    fotos: [
      'https://picsum.photos/id/13/600/338',
      'https://picsum.photos/id/13/600/338',
      'https://picsum.photos/id/37/600/338',
      'https://picsum.photos/id/49/600/338',
      'https://picsum.photos/id/57/600/338',
      'https://picsum.photos/id/58/600/338'
    ]
  })

  //Configuração Keen Slider

  const [slides, setSlides] = useState(false);


  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    loop: true,
    dragSpeed: 2,
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

  useEffect(() => {
    getProduct()
  }, [])

  async function getProduct() {
    try {
      const response = await api.get(`produtos/${id}`)
        .then((response) => response.data)
      setNewProduct(response)
      setLoading(false)
    } catch (error){
      console.log('Erro ao buscar o produto' + error)
    }
  }

  const slide = () => setSlides(!slides)

  return (
    <>
      {loading && <Loading />}
      <section className={style.ContainerProduct}>
        <HeaderDetailsProduct newProduct={newProduct} />

        {/* Grid de 5 primeiras imagens*/}
        <div className={`containerGlobal ${style.containerGridImages}`}>
          {newProduct.length != 0 ? (newProduct.imagens.slice(0, 5).map((element, index) => (
            <div onClick={slide}
              className={`${style.responsiveImages} ${style.gridAreas}`}
              style={{ backgroundImage: `url(${element.urlImagem})` }}
            ></div>
          ))) : ''}
          <button onClick={slide} id={style.buttonOpenSlideDesktop}>
            Abrir galeria
          </button>
        </div>

        {/* Slide versão desktop */}
        {slides ? (
          <div className={style.containerSlideDesktop}>
            <div
              ref={sliderRef}
              className={`keen-slider ${style.imagesDesktop}`}
            >
              {newProduct.length != 0 ? (newProduct.imagens.map((element) => (
                <div
                  style={{ backgroundImage: `url(${element.urlImagem})` }}
                  className={`keen-slider__slide ${style.responsiveImages}`}
                ></div>
              ))) : ''}
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
        {newProduct.length != 0 ? (
          <>
            <div className={style.containerSlideMobile}>
              <div ref={sliderRef} className="keen-slider">
                {newProduct.length != 0 ? (newProduct.imagens.map((element) => (
              <div
                style={{ backgroundImage: `url(${element.urlImagem})` }}
                className={`keen-slider__slide ${style.responsiveImages}`}
              ></div>
            ))) : ''}
              </div>
            </div>
          </>
        ) : ''}
        {loaded && instanceRef.current && instanceRef.current.slides != 0 && (
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
                  className={`${style.dot} ${currentSlide === idx ? style.active : ''
                    }`}
                ></button>
              )
            })}
          </div>
        )}

      </section>

      <section className={`containerGlobal ${style.details}`}>
        <div className={style.descricao}>
          <h2>Descrição</h2>
          <div className={style.separator}></div>
          <p>{newProduct.descricaoProduto}</p>
        </div>
      </section>

      <section className={`containerGlobal ${style.features}`}>
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
          <p>
            <FontAwesomeIcon icon={faPeopleRoof} /> - Quartos para famílias
          </p>
        </div>
      </section>

      <section className={`containerGlobal ${style.policyReserva}`}>
        <Policy />
      </section>

      <section className={style.containerReservation}>
        <div className={`containerGlobal`}>
          <h2>Datas disponíveis</h2>

          <div className={style.contentCalender}>
            <Calender />

            <div className={style.calenderText}>
              <p>Adicione as datas da sua viagem para obter preços exatos</p>
              <button onClick={reservarProduto}>Iniciar reserva</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
