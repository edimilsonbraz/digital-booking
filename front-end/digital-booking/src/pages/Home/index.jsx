import { useState } from 'react'
import category from '../../../categories.json'
// import products from '../../../products.json'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { ContainerCategory } from '../../components/ContainerCategory'
import { CardInline } from '../../components/CardInline'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.css'
const products = [
  {
    id: 1,
    nome: 'Alagoas',
    produtos: [
      {
        nome: 'Maceió'
      },
      {
        nome: 'Arapiraca'
      },
      {
        nome: 'Palmeira dos Índios'
      },
      {
        nome: 'Rio Largo'
      },
      {
        nome: 'Penedo'
      }
    ]
  },
  { id: 2, nome: 'Bahia', produtos: [] },
  { id: 3, nome: 'Sergipe', produtos: [] },
  { id: 4, nome: 'Ceará', produtos: [] }
]
export function Home() {
  const hotels = category.hotels

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  function filterCity() {
    const filterProducts = products.filter((product) =>
      product.nome.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredProducts(filterProducts)
  }
  // console.log(filteredProducts)

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  // function onChange(dates) {
  //   event.preventDefault()
  //   const [start, end] = dates
  //   setStartDate(start)
  //   setEndDate(end)
  //   console.log(startDate + '==>' + endDate)
  // }

  return (
    <>
      <div className={styles.containerBuscador}>
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>

        <div className={`containerGlobal ${styles.contentInputs}`}>
          {/* <form action=""> */}
          <div className={styles.inputs}>
            <label htmlFor="destino">
              <FontAwesomeIcon icon={faLocationDot} />
            </label>
            <input
              type="text"
              id="destino"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Onde vamos?"
              required
            />
          </div>

          <div className={styles.inputs}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className={styles.inputDatePicker}
              dateFormat="dd/MM/yyyy"
              placeholderText="Check-in"
            />

            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className={styles.inputDatePicker}
              dateFormat="dd/MM/yyyy"
              placeholderText="Check-out"
            />
            <label htmlFor="check-out">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </label>
          </div>

          <button
            type="submit"
            className={styles.buttonBuscar}
            onClick={filterCity}
          >
            Buscar
          </button>
          {/* </form> */}
        </div>
      </div>

      {/* <div>
        <h1>Produtos Filtrados</h1>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.nome}</li>
          ))}
        </ul>
      </div> */}

      <section className={`containerGlobal ${styles.category}`}>
        <h2>Buscar por tipo de acomodação</h2>

        <ContainerCategory />
      </section>

      <section className={styles.containerRecomendacao}>
        <div className={styles.contentRecomendacao}>
          <h2>Recomendações</h2>

          <div className={styles.containerCard}>
            {hotels.map((item) => {
              return (
                <CardInline
                  key={item.title}
                  img={item.img}
                  star={item.star}
                  numberAvaliation={item.numberAvaliation}
                  textAvaliation={item.textAvaliation}
                  title={item.title}
                  description={item.description}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
