import style from './style.module.css'

export function Policy() {
  return (
    <section className={style.policy}>
      <h2>O que você precisa saber</h2>
      <div className={style.separator}></div>
      <div className={style.politicas}>
        <div className={style.regras}>
          <ul>
            <h3>Regras da casa</h3>
            <li>Check-out 10:00</li>
            <li>Não é permitido festas</li>
            <li>Não fumar</li>
          </ul>
        </div>
        <div className={style.saude}>
          <ul>
            <h3>Saúde e segurança</h3>
            <li>
              Diretrizes de distanciamento social e outras regulamentações
              relacionadas ao coronavírus se aplicam
            </li>
            <li>Detector de fumaça</li>
            <li>Depósito de segurança</li>
          </ul>
        </div>
        <div className={style.cancelamento}>
          <ul>
            <h3>Politica de cancelamento</h3>
            <li>
              Adicione as datas da viagem para obter detalhes de cancelamento
              para esta estadia
            </li>
            <li>Outras</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
