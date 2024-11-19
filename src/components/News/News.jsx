import './News.css'
import NewsItem from '../NewsItem/NewsItem';
import { newsTexts } from '../../constants/texts';

const newsData = [
  {id: 1, title: newsTexts.texts.text1, date: newsTexts.dates.date1},
  {id: 2, title: newsTexts.texts.text2, date: newsTexts.dates.date2},
  {id: 3, title: newsTexts.texts.text3, date: newsTexts.dates.date3},
]

const News = () => {

  return (
    <aside className='news'>
      <h2 className='news__title'>Популярные новости</h2>
      <div className='news__items'>
        {newsData.map((news) => (
          <NewsItem key={news.id} {...news}/>
        ))}
      </div>
    </aside>
  )
}

export default News;