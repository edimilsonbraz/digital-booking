import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck,faLocationDot  } from '@fortawesome/free-solid-svg-icons'

import { Calender } from '../../components/Calender'
import { Policy } from '../../components/Policy'
import HeaderDetails from '../../components/HeaderDetails'

import style from './style.module.css'

export function Reserva() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const onChangeDates = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)

  }
  
  

  const [hora, setHora] = useState('')
  function handleSubmit(event) {
    event.preventDefault();
    
    if(hora !== '') {
      console.log("Horário de chegada => " + hora)
    }else {
      alert("Preencha o horario de chegada")
    }

    if(startDate !== null) {
      console.log("Check-in => " + startDate)
      console.log("Check-out => " + endDate)     
    }else {
      alert("Selecione as datas que deseja reservar")
    }
   
  }
  

  return (
    <>
      <HeaderDetails />

      <form action="" className={style.reservaContainer} onSubmit={handleSubmit}>
        <section className={style.mainContainer}>
          <div className={style.formReserva}>
            <h2>Complete seus dados</h2>
            <div className={style.formContent}>
              <div className={style.formBox}>
                <div className={style.groupInput}>
                  <label htmlFor="">Nome</label>
                  <input type="text" value="Marcio" disabled />

                  <label htmlFor="">Sobrenome</label>
                  <input type="text" value="Rodrigues" disabled />
                </div>

                <div className={style.groupInput}>
                  <label htmlFor="">E-mail</label>
                  <input
                    type="email"
                    value="marcio@digitalhouse.com"
                    disabled
                  />

                  <label htmlFor="">Cidade</label>
                  <input type="text" className={style.lastInput} />
                </div>
              </div>

              <div className={style.dataReserva}>
                <h2>Selecione sua data de reserva</h2>

                <Calender  
                  onChangeDates={onChangeDates} 
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>

              <div className={style.horarioChegada}>
                <h2>Seu horário de chegada</h2>

                <div className={style.contentChegada}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="lg"
                    style={{ color: '#4de080' }}
                  />
                  <p>
                    Seu quarto estará pronto para check-in entre 12:00 e 14:00
                  </p>

                  <div className={style.inputTime}>
                    <p>Indique a sua hora prevista de chegada</p>
                    <div className={style.iconSelect}>
                      <select 
                        defaultValue={'DEFAULT'} 
                        onChange={(e) => setHora(e.target.value)}
                      >
                        <option value="DEFAULT" disabled>
                          Selecione sua hora de chegada
                        </option>
                        <option value="00:00 AM">00:00 AM</option>
                        <option value="01:00 AM">01:00 AM</option>
                        <option value="02:00 AM">02:00 AM</option>
                        <option value="03:00 AM">03:00 AM</option>
                        <option value="04:00 AM">04:00 AM</option>
                        <option value="05:00 AM">05:00 AM</option>
                        <option value="06:00 AM">06:00 AM</option>
                        <option value="07:00 AM">07:00 AM</option>
                        <option value="08:00 AM">08:00 AM</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 AM">12:00 AM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                        <option value="08:00 PM">08:00 PM</option>
                        <option value="09:00 PM">09:00 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                        <option value="11:00 PM">11:00 PM</option>
                        <option value="12:00 PM">12:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={style.sidebarContainer}>
          <div className={style.sidebarContent}>
            <h1>Detalhe da reserva</h1>

            <img
              src="https://images.trvl-media.com/lodging/4000000/3860000/3854700/3854700/5012a133.jpg?impolicy=fcrop&w=600&h=400&p=1&q=medium"
              alt=""
            />

            <div className={style.sidebarText}>
              <h3>HOTEL</h3>
              <h2>San Raphael Hotel</h2>
              <span>⭐⭐⭐⭐⭐</span>

              <div className={style.addressHotel}>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Largo do Arouche, 150 - Centro Histórico de São Paulo</p>
              </div>
            </div>

            <div className={style.checkInOut}>
              <div>
                <p>Check-in</p>
                <span>___ /___ /______</span>
              </div>
              <div>
                <p>Check-out</p>
                <span>___ /___ /______</span>
              </div>
            </div>

            <div className={style.buttonSubmit}>
              <button type="submit">Confirmar reserva</button>
            </div>
          </div>
        </section>
      </form>

      <section className={style.policyContainer}>
        <div className={style.policyContent}>
          <Policy />
        </div>
      </section>
    </>
  )
}
