import "./feature-item.css"

const FeatureItem = ({ icon, title, content, buttonText, variant }) => {
   return (
      <article className="feature__item">
         <img alt={title} src={icon} className="feature__item_icon" />
         <div className="feature__item_content">
            <h4>{title}</h4>
            <p>{content}</p>
            <button data-bg-color={variant}>{buttonText}</button>
         </div>

      </article>
   )
}

export default FeatureItem