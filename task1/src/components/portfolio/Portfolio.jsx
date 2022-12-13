import { IMAGES } from "../../utils/image.constants"
import "./portfolio.css"

const Portfolio = () => {
   return (
      <section className="portfolio container" id="portfolio">
         <h2 className="portfolio__heading">Cras ornare tristique elit<br />
            <span>Donec odio uisque volutpat mattis erros ullam malesuada ut turpis</span>
         </h2>

         <div className="portfolio__arrows">
            <img alt="left-arrow" src={IMAGES.LEFT_ARROW} />
            <img alt="right-arrow" src={IMAGES.RIGHT_ARROW} />
         </div>

         <img alt="portfolio-image" src={IMAGES.PORTFOLIO} className="portfolio__image" />

         <button className="portfolio__button">View Portfolio</button>
      </section>
   )
}

export default Portfolio