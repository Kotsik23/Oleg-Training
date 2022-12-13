import { IMAGES } from "../../utils/image.constants"
import "./twitter.css"

const Twitter = () => {
   return (
      <div className="contacts__twitter">
         <img alt="twitter-icon" src={IMAGES.TWITTER} />
         <p className="contacts__twitter_content">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis  euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat <span>@johndoe</span></p>
      </div>
   )
}

export default Twitter