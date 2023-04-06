import { useEffect, useState } from 'react'
import api from '../../service/api'

import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'

export function CardCategory({products}) {
  const navigate = useNavigate()

  const [category, setCategory] = useState([])
  // const [productByCategory, setProductByCategory] = useState("")

  useEffect(() => {
    getCategory()
  }, [])

  async function getCategory() {
    try {
      const response = await api.get('categoria')
      setCategory(response.data)
    } catch (error) {
      console.log('Erro ao buscar categorias' + error)
    }   

  }

  async function handleNavigate(categoria) {
    navigate('/produtos-por-categoria/' + categoria)

  }
  
  //Filtra os Produtos por Categoria
  // async function handleFilterCategory(categoryClicked) {
  //   const filterCategory = products.filter(product => {
  //     return product.categoria.descricaoCategoria === categoryClicked
  //   })
    
  //   setProductByCategory(filterCategory)
    

  // }

  return (
    <div className={styles.containerCategory}>
      <div className={styles.containerCard}>
       
        {category.map((current) => {
          return (
            <div 
              className={styles.card} 
              key={current.id} 
              value={current.descricaoCategoria}
              // onClick={() => handleFilterCategory(current.descricaoCategoria)}
              onClick={() => {handleNavigate(current.descricaoCategoria)}}
            > 
              <div style={{ backgroundImage: `url(${current.urlImagemCategoria})` }}></div>
              <div className={styles.quantityItens}>
                <h1>{current.descricaoCategoria}</h1>
                <span>{current.qualificacaoCategoria}</span>
                <span>{current.descricaoCategoria}</span>
              </div>
            </div>
          )
        })}       
      </div>
    </div>
  )
}
