import "./blog.css"
import { BlogPeople } from "../../data/blog-people.js"
import BlogItem from "./BlogItem"

const Blog = () => {
   return (
      <div className="blog container">
         {BlogPeople.map(human => (
            <BlogItem key={human.id} picture={human.picture} name={human.name} comment={human.comment} />
         ))}
      </div>
   )
}

export default Blog