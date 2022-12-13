import "./social-item.css"

const SocialItem = ({ title, subtitle, icon }) => {
   return (
      <div className="socials__item">
         <img alt={title} src={icon} />
         <div className="socials__item_content">
            <h5>{title}</h5>
            <p>{subtitle}</p>
         </div>
      </div>
   )
}

export default SocialItem