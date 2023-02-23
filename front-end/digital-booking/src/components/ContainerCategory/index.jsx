import './style.css'
import '../../styles/global.css'
import categories from '../../../categories.json'
import { Card } from '../Card'

export function ContainerCategory() {
  const category = categories.category

  return (
    <div className="containerGlobal containerCategory">
      
      <div className="container-card">
        {category.map((current) => {
          return (
            <Card
              key={current.title}
              img={current.img}
              title={current.title}
              number={current.found}
              className="card"
            ></Card>
          )
        })}
      </div>
    </div>
  )
}
