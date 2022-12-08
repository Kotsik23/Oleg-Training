import "./blog-item.css"

const BlogItem = ({ picture, name, comment }) => {
   return (
      <div className="blog__item">
         <img alt={`${name}-${picture}`} src={picture} className="blog__item_image" />

         <div className="blog__item_content">
            <h4>{name}</h4>
            <p>{comment} <span> +more</span></p>
         </div>
      </div>
   )
}

export default BlogItem