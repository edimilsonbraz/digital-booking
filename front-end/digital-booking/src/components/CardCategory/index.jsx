import { useEffect, useState } from 'react'
import api from '../../service/api'

import styles from './styles.module.css'

export function CardCategory() {
  const [category, setCategory] = useState([])

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
  
  return (
    <div className={styles.containerCategory}>
      <div className={styles.containerCard}>
       
        {category.map((current) => {
          return (
            <div className={styles.card} key={current.id}>
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
