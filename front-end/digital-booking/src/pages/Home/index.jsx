import { useEffect, useState } from 'react'
import api from '../../service/api'

import { CardCategory } from '../../components/CardCategory'
import { CardProduct } from '../../components/CardProduct'
import { SearchForm } from './SearchForm'

import styles from './styles.module.css'
import {ContainerBuscador} from './style'

export function Home() {
  const [products, setProducts] = useState([])
  const [cities, setCities] = useState([])
  
  const [filteredProductQnt, setFilteredProductQnt] = useState({
    apartamento: 0,
    resort: 0,
    hotel: 0,
    beiraMar: 0,
  });


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

  //Filtrando Quant de Produto por Categoria
  async function getProdutos() {
    try {
      const response = await api.get('produtos')
      .then(response => response.data)
      setProducts(response)
      
      setFilteredProductQnt({
        apartamento: response.filter(
          (produto) => produto.categoria.descricaoCategoria === "Apartamento"
        ).length,
        resort: response.filter(
          (produto) => produto.categoria.descricaoCategoria === "Resorts"
        ).length,
        hotel: response.filter(
          (produto) => produto.categoria.descricaoCategoria === "Hoteis"
        ).length,
        beiraMar: response.filter(
          (produto) => produto.categoria.descricaoCategoria === "Beira Mar"
        ).length,
      });

    } catch (error) {
      console.log('Erro ao buscar produtos' + error)
    }
  }

  return (
    <> 
      <ContainerBuscador>
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>       
       
          <SearchForm cities={cities}/>         
       
      </ContainerBuscador>

      <section className={`containerGlobal ${styles.category}`}>
        <h2>Buscar por tipo de acomodação</h2>
        <CardCategory products={products} filteredProductQnt={filteredProductQnt}/>
      </section>

      <section className={styles.containerRecomendacao}>
        <div className={styles.contentRecomendacao}>
          <h2>Recomendações</h2>

          <div className={styles.containerCard}>
            {products.length > 0 ? (
              products.map((product) => (
                <CardProduct product={product} key={product.id} />
              ))
            ) : (
              <p>Não há produtos cadastrados</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
