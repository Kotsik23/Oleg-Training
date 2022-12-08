import "./featureItem.css"

const FeatureItem = ({ image, title, text }) => {
   return (
      <div className="feature__item">
         <img alt={title} src={image} />
         <h4>{title}</h4>
         <p>{text}</p>
         <button>More</button>
      </div>
   )
}

export default FeatureItem