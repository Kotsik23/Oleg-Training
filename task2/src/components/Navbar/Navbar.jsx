import "./navbar.css"
import { NavbarItems } from "./navbar.constants"

const LOGO = "./assets/logo.png"

const Navbar = () => {
   return (
      <nav className="navbar container">
         <a className="navbar__logo" href={"/"}>
            <img alt="logo" src={LOGO} />
         </a>

         <div className="navbar__content">
            <ul className="navbar__links">
               {NavbarItems.map(item => (
                  <li key={item.id}>
                     <a href={item.href}>{item.name}</a>
                  </li>
               ))}
            </ul>

            <button className="navbar__button">Login</button>
         </div>
      </nav>
   )
}

export default Navbar