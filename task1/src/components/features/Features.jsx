import "./features.css"
import Screen from "../../assets/screen.png"
import Lab from "../../assets/lab.png"
import Settings from "../../assets/settings.png"
import Voice from "../../assets/voice.png"
import FeatureItem from "./FeatureItem"

const Features = () => {
   return (
      <div className="features">
         <h2 className="features__heading">Lorem ipsum dolor sit amet<br />
            <span>Donec odio uisque volutpat mattis erros ullam malesuada ut turpis</span>
         </h2>

         <div className="features__container">
            <div className="features__container_content container">
               <FeatureItem image={Screen} title={"Nunc dignissim"} text={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"} />

               <FeatureItem image={Lab} title={"Aliquam tinci"} text={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"} />

               <FeatureItem image={Settings} title={"Vestibu auctor"} text={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"} />

               <FeatureItem image={Voice} title={"Civamus vesti"} text={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"} />
            </div>
         </div>
      </div>
   )
}

export default Features