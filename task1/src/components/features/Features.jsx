import "./features.css"
import { FeaturesItems } from "./features.constants"
import FeatureItem from "./FeatureItem"

const Features = () => {
   return (
      <section className="features" id="features">
         <h2 className="features__heading">Lorem ipsum dolor sit amet<br />
            <span>Donec odio uisque volutpat mattis erros ullam malesuada ut turpis</span>
         </h2>

         <div className="features__container">
            <div className="features__container_content container">
               {FeaturesItems.map(item => (
                  <FeatureItem key={item.id} image={item.image} text={item.text} title={item.title} />
               ))}
            </div>
         </div>
      </section>
   )
}

export default Features