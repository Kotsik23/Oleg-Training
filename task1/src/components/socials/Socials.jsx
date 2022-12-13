import "./socials.css"
import { SocialItems } from "./social.constants"
import SocialItem from "./SocialItem"

const Socials = () => {
   return (
      <div className="socials container">
         {SocialItems.map(item => (
            <SocialItem key={item.id} icon={item.icon} title={item.title} subtitle={item.subtitle} href={item.href} />
         ))}
      </div>
   )
}

export default Socials