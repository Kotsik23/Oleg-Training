import "./hero.css"
import ArrowCircle from "../../assets/arrow.png"

const Hero = () => {
   return (
      <div className="hero">
         <div className="hero__content">
            <h2>Lorem ipsum laro <br /> dolore sit amet vivamus</h2>
            <p>Lorem ipsum laro sit amet <br /> dolore sit ame</p>
            <img alt="arrow-circle" src={ArrowCircle} width={60} height={60} />
         </div>
      </div>
   )
}

export default Hero