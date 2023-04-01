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
console.log(category)
  return (
    <div className={styles.containerCategory}>
      <div className={styles.containerCard}>
       
        {category.map((current) => {
          return (
            <div className={styles.card} key={current.id}>
              <div style={{ backgroundImage: `url(${current.urlImagemCategoria})` }}></div>
              <div>
                <h1>{current.descricaoCategoria}</h1>
                <span>25.485 {current.descricaoCategoria}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
