import "./blog.css"
import { BlogPeople } from "./blog.constants"
import BlogItem from "./BlogItem"

const Blog = () => {
   return (
      <section className="blog container" id="blog">
         {BlogPeople.map(human => (
            <BlogItem key={human.id} picture={human.picture} name={human.name} comment={human.comment} />
         ))}
      </section>
   )
}

export default Blog