import './Pagination.css'
import updateButton from '../../images/updateButton.svg'
import arrowNext from '../../images/arrowNext.svg'

const Pagination = ({ isMobile }) => {
  return (
    <div className='pagination'>
      {isMobile ? (
        <button className='pagination__mobile'>
          <p className='pagination__mobile-text'>Показать еще 6 </p>
          <img className='pagination__mobile-update-item' src={updateButton} alt="Кнопка обновления" />
        </button>
      ) : (
        <div className='pagination__desktop'>
          <a className='pagination__desktop-number' href="#">1</a>
          <a className='pagination__desktop-number' href="#">2</a>
          <a className='pagination__desktop-number' href="#">3</a>
          <a className='pagination__desktop-number' href="#">4</a>
          <span className='pagination__desktop-dots'>...</span>
          <a className='pagination__desktop-number' href="#">10</a>
          <a className='pagination__desktop-button' href="#">
            <p>Следующая</p>
            <img className='pagination__desktop-button-arrow' src={arrowNext} alt="Следующая" />
          </a>
        </div>
      )}
    </div>
  )
}

export default Pagination;