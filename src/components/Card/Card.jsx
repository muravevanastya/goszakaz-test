import './Card.css'

const Card = ({ type, category, title, text, date, backgroundImage, isPurple }) => {
  const hasBackgroundImage = Boolean(backgroundImage);

  return (
    <div 
      className={`card card-${type} 
        ${isPurple ? 'card-purple' : ''} 
        ${hasBackgroundImage || isPurple ? 'card-white-text' : ''}
        
      `}
      style={hasBackgroundImage ? { backgroundImage: `url(${backgroundImage})`} : null}
    >
        {
          type === 'vertical' ? (
            <div className='card__content'>
              <div className='card__content-elements'>
                <p className={`card__category ${hasBackgroundImage || isPurple ? 'card__category-transparent' : ''}`}>{category}</p>
                <h2 className="card__title">{title}</h2>
                {text && <p className="card__text">{text}</p>}
              </div>
              <p className={`card__date ${hasBackgroundImage || isPurple ? 'card__date-white' : ''}`}>{date}</p>
            </div>
          ) : (
            <div className='card__content-elements'>
              <div className="card__items">
                <p className="card__category">{category}</p>
                <p className="card__date">{date}</p>
              </div>
              <h2 className="card__title">{title}</h2>
              {text && <p className="card__text">{text}</p>}
            </div>
          )
        }
    </div>
  )
}

export default Card;