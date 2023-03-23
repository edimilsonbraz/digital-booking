import { useNavigate } from 'react-router-dom'

import styles from './styles.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faWifi,
  faSwimmer
} from '@fortawesome/free-solid-svg-icons'

export function CardInline({
  id,
  img,
  title,
  star,
  numberAvaliation,
  textAvaliation,
  description
}) {

  const navigate = useNavigate()

  function handleNavigate(id) {
    navigate("/produto/" + id)
  }

  return (
    <>
      <div className={styles.containerCardInline}>
        <div className={styles.contentCard}>
          <div className={styles.contentImage}>
            <img src={img} alt="" />
          </div>
          <div className={styles.contentDescription}>
            <div className={styles.contentAvaliation}>
              <div className={styles.stars}>
                <p>Hotel</p>
                <span>{star}</span>
                <h3>{title}</h3>
              </div>
              <div className={styles.avaliation}>
                <div>
                  <span>{numberAvaliation}</span>
                </div>
                <p>{textAvaliation}</p>
              </div>
            </div>

            <div className={styles.contentIcons}>
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>A 900 metros da praia</p>
                <FontAwesomeIcon icon={faSwimmer} />
                <FontAwesomeIcon icon={faWifi} />
              </div>
              <div></div>
            </div>
            <div className={styles.contentText}>
              <p>{description}</p>
            </div>
            <div>
              <button className={styles.button} onClick={() => {handleNavigate(id)}}>
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
