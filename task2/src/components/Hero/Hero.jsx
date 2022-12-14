import "./hero.css"

const HERO_IMAGES = {
   LEFT_ARROW: "./assets/left-arrow.png",
   RIGHT_ARROW: "./assets/right-arrow.png",
}

const Hero = () => {
   return (
      <section className="hero">
         <div className="hero__content container">
            <h1>Intellectual Property has the Shelf Life  <br /><span>of a Banana.</span> </h1>
            <button className="hero__content_button">Become a Member</button>

            <div className="hero__content_controls">
               <button>
                  <img alt="go-back" src={HERO_IMAGES.LEFT_ARROW} />
               </button>
               <button>
                  <img alt="go-forward" src={HERO_IMAGES.RIGHT_ARROW} />
               </button>
            </div>
         </div>

      </section>
   )
}

export default Hero