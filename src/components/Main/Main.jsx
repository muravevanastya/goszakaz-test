import './Main.css'
import CardList from '../CardList/CardList'
import News from '../News/News'
import Subscription from '../Subscription/Subscription'

const Main = ({ isMobile }) => {
  return (
    <main className="main">
      <div className='main__banner'></div>
      <div className='main__content'>
        <CardList/>
        <div className='main__content-items'>
          <News />
          <Subscription/>
        </div>
      </div>
    </main>
  )
}

export default Main;