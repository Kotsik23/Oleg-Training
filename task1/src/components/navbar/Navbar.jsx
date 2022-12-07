import { FiChevronDown } from "react-icons/fi"
import "./navbar.css"

const Navbar = () => {
   return (
      <nav className="container navbar">
         <h2 className="navbar__heading">Site Name</h2>

         <ul className="navbar__links">
            <li>
               <FiChevronDown />
               <a>Home</a>
            </li>
            <li>
               <a>About</a>
            </li>
            <li>
               <a>Service</a>
            </li>
            <li>
               <a>Project</a>
            </li>
            <li>
               <a>Block</a>
            </li>
            <li>
               <a>Contact</a>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar