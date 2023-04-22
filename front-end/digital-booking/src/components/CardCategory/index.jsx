import { useEffect, useState } from 'react'
import api from '../../service/api'

import { useNavigate } from 'react-router-dom'
import { Card, CardImage, CardText, CardsCategory, ContainerCards } from './style'
import bg_apartamento from '../../assets/hotel-banner-01.jpg'
import bg_resort from '../../assets/hotel-banner-02.jpg'
import bg_hotel from '../../assets/hotel-banner-03.jpg'
import bg_beira_Mar from '../../assets/hotel-banner-04.jpg'

export function CardCategory({ filteredProductQnt }) {
  const navigate = useNavigate()

  // const [category, setCategory] = useState([])

  // useEffect(() => {
  //   getCategory()
  // }, [])

  // async function getCategory() {
  //   try {
  //     const response = await api.get('categoria')
  //     setCategory(response.data)
     
  //   } catch (error) {
  //     console.log('Erro ao buscar categorias' + error)
  //   }
  // }

  async function handleNavigate(id) {
    navigate('/produtos-por-categoria/' + id)
  }
  
  return (
    <CardsCategory>
      <ContainerCards>
        <Card onClick={() => {handleNavigate(2)}}>
          <CardImage src={bg_apartamento}/>
          <CardText>
            <h1>Apartamento</h1>
            <span>{filteredProductQnt.apartamento}</span>
            {filteredProductQnt.apartamento > 1 
              ?
                <span>apartamentos</span>         
              :
                <span>apartamento</span> 
            }
          </CardText>
        </Card>

        <Card onClick={() => {handleNavigate(1)}}>
          <CardImage src={bg_resort} />
          <CardText>
            <h1>Resorts</h1>
            <span>{filteredProductQnt.resort}</span>
            {filteredProductQnt.resort > 1 
              ?
                <span>resorts</span>         
              :
                <span>resort</span> 
            }
          </CardText>
        </Card>

        <Card onClick={() => {handleNavigate(3)}}>
          <CardImage src={bg_hotel} />
          <CardText>
            <h1>Hoteis</h1>
            <span>{filteredProductQnt.hotel}</span>
            {filteredProductQnt.hotel > 1 
              ?
                <span>hoteis</span>         
              :
                <span>hotel</span> 
            }
          </CardText>
        </Card>

        <Card onClick={() => {handleNavigate(4)}}>
          <CardImage src={bg_beira_Mar} />
          <CardText>
            <h1>Beira mar</h1>
            <span>{filteredProductQnt.beiraMar}</span>
            <span>beira mar</span>         
          </CardText>
        </Card>

      </ContainerCards>
    </CardsCategory>
  )
}
