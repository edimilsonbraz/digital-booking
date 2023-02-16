import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons'
import './style.css'

export function Home() {
  return (
    <div className="containerBuscador">
      <h1>Buscar ofertas em hotéis, casas e muito mais</h1>

      <div className="contentInputs">
        <div className="inputs">
          <label htmlFor="destino">
            <FontAwesomeIcon icon={faLocationDot} />
          </label>
          <input type="text" id="destino" placeholder="Onde vamos?" />
        </div>

        <div className="inputs">
          <label htmlFor="check-in">
            <FontAwesomeIcon icon={faCalendarCheck} />
          </label>
          <input
            type="text"
            id="check-in"
            placeholder="Check in - Check out"
          />
        </div>

        <button>Buscar</button>
      </div>
    </div>
  )
}
