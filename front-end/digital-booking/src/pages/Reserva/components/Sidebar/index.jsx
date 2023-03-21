import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import style from './style.module.css'

export function Sidebar() {
  return (
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
  )
}
