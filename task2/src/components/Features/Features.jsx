import FeatureItem from "./FeatureItem/FeatureItem"
import "./features.css"

const FEATURES_IMAGES = {
   COACH_IMAGE: "./assets/coach.png",
   WALLET_IMAGE: "./assets/wallet.png",
}

const Features = () => {
   return (
      <section className="features">
         <FeatureItem icon={FEATURES_IMAGES.COACH_IMAGE} title={"Find Properties"} content={"Sign up to browse the portfolio. Your journey to becoming a real estate baron starts here."} buttonText={"Become A Member"} variant={"blue"} />

         <FeatureItem icon={FEATURES_IMAGES.WALLET_IMAGE} title={"Find Byers"} content={"Sign up to browse the portfolio. Your journey to becoming a real estate baron starts here."} buttonText={"Submit Your Project"} variant={"green"} />

      </section>
   )
}

export default Features