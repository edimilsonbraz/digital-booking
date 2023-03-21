import { Calender } from '../../components/Calender'
import { Sidebar } from './components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import style from './style.module.css'
import { Policy } from '../../components/Policy'

export function Reserva() {
  return (
    <>
      <form action="" className={style.reservaContainer}>
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

                <Calender />
              </div>

              <div className={style.horarioChegada}>
                <h2>Seu horário de chegada</h2>

                <div className={style.contentChegada}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p>
                    Seu quarto estará pronto para check-in entre 12:00 e 14:00
                  </p>

                  <div className={style.inputTime}>
                    <p>
                      Indique a sua hora prevista de chegada
                    </p>
                    <div className={style.iconSelect}>
                      <select name="horario-chegada">
                        <option value="valor0" selected>
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

        <Sidebar />
      </form>
      
      <section className={style.policyContainer}>
        <Policy />
      </section>

    </>
  )
}
