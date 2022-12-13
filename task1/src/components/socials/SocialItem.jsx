import "./social-item.css"

const SocialItem = ({ title, subtitle, icon, href }) => {
   return (
      <div className="socials__item">
         <a href={href} target="_blank">
            <img alt={title} src={icon} />
         </a>
         <div className="socials__item_content">
            <h5>{title}</h5>
            <p>{subtitle}</p>
         </div>
      </div>
   )
}

export default SocialItem