import "./portfolio.css"
import RightArrow from "../../assets/right-arrow.png"
import LeftArrow from "../../assets/left-arrow.png"
import PortfolioImage from "../../assets/portfolio-img.png"

const Portfolio = () => {
   return (
      <div className="portfolio container">
         <h2 className="portfolio__heading">Cras ornare tristique elit<br />
            <span>Donec odio uisque volutpat mattis erros ullam malesuada ut turpis</span>
         </h2>

         <div className="portfolio__arrows">
            <img alt="left-arrow" src={LeftArrow} />
            <img alt="right-arrow" src={RightArrow} />
         </div>

         <img alt="portfolio-image" src={PortfolioImage} className="portfolio__image" />

         <button className="portfolio__button">View Portfolio</button>
      </div>
   )
}

export default Portfolio