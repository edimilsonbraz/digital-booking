import { useState } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarCheck
} from '@fortawesome/free-solid-svg-icons'

import { Button, Inputs, Label, Options, SearchFormContainer, Select } from './style'

export function SearchForm({cities}) {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  async function buscarProdutoPorCidade(id) {
    try {
      const response = await api.get('produtoscidades/' + id)
        .then(response => response.data)
      console.log(response);
    } catch (error) {
      console.log('Erro ao buscar produto por cidade ' + error)
    }
  }
  
  // State que armazena valor de cidade escolhido no select da pesquisa por cidade
  const [selectValue, setSelectValue] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log(buscarProdutoPorCidade(selectValue));
  }

  return (
    <SearchFormContainer className='containerGlobal'>
      <Inputs>       
        <Select
          type="text"
          id="destino"
          defaultValue={'DEFAULT'}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <Options value="DEFAULT" disabled>
            Onde vamos?
          </Options>

          {cities.map((city) => (
            <Options value={city.id} key={city.id}>
              {city.nomeCidade}
            </Options>
          ))}
        </Select>
        <Label htmlFor="destino">
          <FontAwesomeIcon icon={faLocationDot} />
        </Label>
      </Inputs>

      <Inputs>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="inputDatePicker"
          dateFormat="dd/MM/yyyy"
          placeholderText="Check-in"
        />
        <span></span>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className="inputDatePicker"
          dateFormat="dd/MM/yyyy"
          placeholderText="Check-out"
        />
        <Label htmlFor="check-out">
          <FontAwesomeIcon icon={faCalendarCheck} />
        </Label>
      </Inputs>

      <Button onClick={handlerSubmit} type="submit">
        Buscar
      </Button>
    </SearchFormContainer>
  )
}
