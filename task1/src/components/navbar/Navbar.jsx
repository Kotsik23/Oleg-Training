import { FiChevronDown } from "react-icons/fi"
import { useScrollPosition } from "../../hooks/useScrollPosition"
import { NavbarItems } from "./navbar.constants"
import "./navbar.css"

const Navbar = () => {
   const scrollPosition = useScrollPosition();

   return (
      <nav className={`navbar ${scrollPosition > 900 ? "active" : ""}`} id="navbar">
         <div className="navbar__container container">
            <h2 className="navbar__heading">Site Name</h2>

            <ul className="navbar__links">
               {NavbarItems.map(item => (
                  <li key={item.id} >
                     <a href={item.href}>{item.name}</a>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   )
}

export default Navbar