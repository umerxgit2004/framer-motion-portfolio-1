import Test from "./Test"
import "./app.scss"
import Contact from "./components/contact/Contact"
import Cursor from "./components/cursor/Cursor"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"

import Parralax from "./parallax/Parralax"
import Portfolio from "./portfolio/Portfolio"
import Services from "./services/Services"
const App = () => {
  return (
    <div>
      <Cursor/>
      <section id ="Homepage">
        <Navbar/>
        <Hero/>
      </section>
      <section id ="Services"><Parralax type="services"/></section>
      <section ><Services/></section>
      <section id="Portfolio"><Parralax type ="portfolio"/></section>
      <Portfolio/>
      <section>
        <Contact/>
      </section>
   
    </div>
    
  )
}

export default App
