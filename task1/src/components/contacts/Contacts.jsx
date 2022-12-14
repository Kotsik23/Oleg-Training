import "./contacts.css"
import Email from "./Email"
import Twitter from "./Twitter"

const Contacts = () => {
   return (
      <section className="contacts" id="contacts">
         <div className="container">
            <h2 className="contacts__heading">Cras ornare tristique elit<br />
               <span>Donec odio uisque volutpat mattis eros ullam malesuada ut turpis</span>
            </h2>

            <div className="contacts__container">
               <Email />
               <Twitter />
            </div>
         </div>
      </section>
   )
}

export default Contacts