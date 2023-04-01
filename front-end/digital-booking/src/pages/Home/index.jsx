import axios from 'axios'
import { useEffect, useState } from 'react'
import category from '../../../categories.json'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { CardCategory } from '../../components/CardCategory'
import { CardProduct } from '../../components/CardProduct'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.css'
import api from '../../service/api'

export function Home() {
  const [cities, setCities] = useState([])
  const [products, setProducts] = useState([])
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  useEffect(() => {
    getCidades()
    getProdutos()
  }, [])

  async function getCidades() {
    try {
      const response = await api.get('cidades')
      setCities(response.data)
    } catch (error) {
      console.log('Erro ao buscar cidades' + error)
    }
  }

  async function getProdutos() {
    try {
      const response = await api.get('produtos')
      setProducts(response.data)
    } catch (error) {
      console.log('Erro ao buscar produtos' + error)
    }
  }

  async function buscarProdutoPorCidade(id) {
    try {
      const response = await api
        .get('produtoscidades/' + id)
        .then((response) => response.data)
      console.log(response)
    } catch (error) {
      console.log('Erro ao buscar produto por cidade ' + error)
    }
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log(buscarProdutoPorCidade(1))
  }

  return (
    <>
      <div className={styles.containerBuscador}>
        <h1>Buscar ofertas em hotéis, resorts e muito mais</h1>

        <div className={`containerGlobal ${styles.contentInputs}`}>
          <form action="">
            <div className={styles.inputs}>
              <label htmlFor="destino">
                <FontAwesomeIcon icon={faLocationDot} />
              </label>
              <select type="text" id="destino" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>
                  Onde vamos?
                </option>

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

            <button
              onClick={handlerSubmit}
              type="submit"
              className={styles.buttonBuscar}
            >
              Buscar
            </button>
          </form>
        </div>
      </div>

      <section className={`containerGlobal ${styles.category}`}>
        <h2>Buscar por tipo de acomodação</h2>

        <CardCategory/>
      </section>

      <section className={styles.containerRecomendacao}>
        <div className={styles.contentRecomendacao}>
          <h2>Recomendações</h2>

          <div className={styles.containerCard}>
            {/* {hotels.map((item) => {
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
            })} */}

            {products.map((product) => {
              return (
                <CardProduct
                  key={product.id}
                  id={product.id}
                  categoriaProduto={product.categoria.descricaoCategoria}
                  numberAvaliation={product.categoria.qualificacaoCategoria}
                  title={product.nomeProduto}
                  description={product.descricaoProduto}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
