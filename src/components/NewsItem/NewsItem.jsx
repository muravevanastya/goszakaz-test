import './NewsItem.css'



const NewsItem = ({ title, date }) => {
  return (
    <div className="news-item">
      <p className='news-item__text'>{title}</p>
      <p className='news-item__date'>{date}</p>
    </div>
  )
}

export default NewsItem;