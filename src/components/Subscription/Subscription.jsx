import './Subscription.css'
import arrow from '../../images/arrow.svg'

const Subscription = () => {
  return (
    <div className='subscription'>
      <div className='subscription__content'>
        <h3 className='subscription__title'>Подписка на рассылку</h3>
        <form className='subscription__form'>
          <input className='subscription__form-input' type="email" placeholder='Email@gmail.com' />
          <button className='subscription__form-button' type='submit'>
            <p className='subscription__form-button-text'>Подписаться</p>
            <img className='subscription__form-button-img' src={arrow} alt="Подписаться" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subscription;