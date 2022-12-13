import { IMAGES } from "../../utils/image.constants"
import "./email.css"

const Email = () => {
   return (
      <div className="contacts__email">
         <div className="contacts__email-info">
            <img alt="email-icon" src={IMAGES.EMAIL} />
            <div className="contacts__email-info_content">
               <h4>Subscribe Our Newsletter</h4>
               <p>via email on how to grow your business online</p>
            </div>
         </div>

         <div className="contacts__email-info_input">
            <input />
            <button>Sign Up</button>
         </div>
      </div>
   )
}

export default Email