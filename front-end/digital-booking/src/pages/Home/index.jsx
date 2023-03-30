import axios from 'axios'
import { useEffect, useState } from 'react'
import category from '../../../categories.json'

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
import api from '../../service/api'

export function Home() {
  const hotels = category.hotels

  const [cities, setCities] = useState([])
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  useEffect(() => {
    getCidades()
  }, [])

  async function getCidades() {
    try {
      const response = await axios.get(
        'http://devdigitalbooking.ctdprojetos.com.br:8080/cidades'
      )
      console.log(response.data)
      setCities(response.data)
    } catch (error) {
      console.log('Erro ao buscar cidades' + error)
    }
  }

  async function buscarProdutoPorCidade(id) {
    try {
      const response = await api.get('produtoscidades/' + id)
        .then(response => response.data)
        console.log(response);

    } catch (error) {
      console.log('Erro ao buscar produto por cidade ' + error)
    }
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(buscarProdutoPorCidade(1));
  }

  return (
    <>
      <div className={styles.containerBuscador}>
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>

        <div className={`containerGlobal ${styles.contentInputs}`}>
          <form action="">
            <div className={styles.inputs}>
              <label htmlFor="destino">
                <FontAwesomeIcon icon={faLocationDot} />
              </label>
              <select
                type="text"
                id="destino"
                defaultValue={'DEFAULT'}
              >
                <option value="DEFAULT" disabled>Onde vamos?</option>

                {cities.map((city) => (
                  <option value={city.nomeCidade} key={city.id}>
                    {city.nomeCidade}  
                  </option>
                ))}
              </select>
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

            <button onClick={handlerSubmit} type="submit" className={styles.buttonBuscar}>
              Buscar
            </button>
          </form>
        </div>
      </div>

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
                  key={item.id}
                  id={item.id}
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
