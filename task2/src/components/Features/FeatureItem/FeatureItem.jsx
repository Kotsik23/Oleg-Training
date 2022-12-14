import "./feature-item.css"

const FeatureItem = ({ icon, title, content, buttonText, variant }) => {
   return (
      <article className="feature__item" data-bg={variant}>
         <img alt={title} src={icon} className="feature__item_icon" />
         <div className="feature__item_content">
            <h4>{title}</h4>
            <p>{content}</p>
            <button>{buttonText}</button>
         </div>

      </article>
   )
}

export default FeatureItem