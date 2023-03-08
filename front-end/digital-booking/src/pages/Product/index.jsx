import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

import { registerLocale } from  "react-datepicker";
import br from 'date-fns/locale/pt-BR';
registerLocale('br', br)

export function Product() {
  const { id } = useParams()

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

  useEffect(() => {}, [id])

  return (
    <section className="ContainerProduct">
      <div className={style.headerdetails}>
        <div className={style.title}>
          <span>{categoria}</span>
          <h1>{titulo}</h1>
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
          <FontAwesomeIcon icon={faLocationDot} /> {localizacao}
        </p>
      </div>

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
    </section>
  )
}
