import "./socials.css"
import { SocialItems } from "./social.constants"
import SocialItem from "./SocialItem"

const Socials = () => {
   return (
      <section className="socials container" id="socials">
         {SocialItems.map(item => (
            <SocialItem key={item.id} icon={item.icon} title={item.title} subtitle={item.subtitle} href={item.href} />
         ))}
      </section>
   )
}

export default Socials