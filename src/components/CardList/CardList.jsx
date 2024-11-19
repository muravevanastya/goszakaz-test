import './CardList.css'
import Card from '../Card/Card';
import { cardsTexts } from '../../constants/texts.jsx';
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';

const cardsData = [
  {type: "horizontal", id: 1, category: cardsTexts.categories.category1, title: cardsTexts.titles.title1, text: cardsTexts.text, date: cardsTexts.date},
  {type: "horizontal", id: 2, category: cardsTexts.categories.category1, title: cardsTexts.titles.title1, text: cardsTexts.text, date: cardsTexts.date},
  {type: "vertical", id: 3, category: cardsTexts.categories.category1, title: cardsTexts.titles.title2, date: cardsTexts.date, isPurple: true},
  {type: "vertical", id: 4, category: cardsTexts.categories.category2, title: cardsTexts.titles.title1, date: cardsTexts.date, backgroundImage: card1},
  {type: "horizontal", id: 5, category: cardsTexts.categories.category1, title: cardsTexts.titles.title1, date: cardsTexts.date},
  {type: "horizontal", id: 6, category: cardsTexts.categories.category1, title: cardsTexts.titles.title2, date: cardsTexts.date},
  {type: "horizontal", id: 7, category: cardsTexts.categories.category1, title: cardsTexts.titles.title1, text: cardsTexts.text, date: cardsTexts.date},
  {type: "vertical", id: 8, category: cardsTexts.categories.category2, title: cardsTexts.titles.title2, date: cardsTexts.date, isPurple: true},
  {type: "vertical", id: 9, category: cardsTexts.categories.category1, title: cardsTexts.titles.title1, date: cardsTexts.date, backgroundImage: card2},
  {type: "horizontal", id: 10, category: cardsTexts.categories.category1, title: cardsTexts.titles.title1, date: cardsTexts.date},
  {type: "horizontal", id: 11, category: cardsTexts.categories.category1, title: cardsTexts.titles.title2, date: cardsTexts.date},
]

const CardList = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  const [isNotDesktop, setIsNotDesktop] = useState(window.innerWidth <= 1180);
  const [cardsToShow, setCardsToShow] = useState(window.innerWidth <= 700 || window.innerWidth <= 1024 ? 6 : 11);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 700;
      const isNotDesktopView = window.innerWidth <= 1180;

      setIsMobile(isMobileView);
      setIsNotDesktop(isNotDesktopView);

      setCardsToShow(isMobileView || isNotDesktopView ? 6 : 11);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="card-list">
        {cardsData.slice(0, cardsToShow).map((card) => (
          <Card 
            key={card.id} 
            {...card}
            type={isMobile ? 'vertical' : card.type}
          />
        ))}
      </div>
      <Pagination isMobile={isMobile}/>
    </div>
  )
}

export default CardList;