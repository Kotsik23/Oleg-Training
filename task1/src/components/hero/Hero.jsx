import "./hero.css"
import { IMAGES } from "../../utils/image.constants"

const Hero = () => {
   return (
      <section className="hero" id="hero">
         <div className="hero__content">
            <h2>Lorem ipsum laro <br /> dolore sit amet vivamus</h2>
            <p>Lorem ipsum laro sit amet <br /> dolore sit ame</p>
            <a href="#features">
               <img alt="arrow-circle" src={IMAGES.ARROW_CIRCLE} width={60} height={60} />
            </a>
         </div>

         <div className="home" id="home" />
      </section>
   )
}

export default Hero