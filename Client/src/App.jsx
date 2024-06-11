import Test from "./Test"
import "./app.scss"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Parralax from "./parallax/Parralax"
import Services from "./services/Services"
const App = () => {
  return (
    <div>
      <section id ="Homepage">
        <Navbar/>
        <Hero/>
      </section>
      <section id ="Services"><Parralax type="services"/></section>
      <section ><Services/></section>
      <section id="Portfolio"><Parralax type ="portfolio"/></section>
      <section >Portfolio1</section>
      <section >Portfolio2</section>
      <section >Portfolio3</section>
      <section id="Contact">Contact</section> 
      {/* {/* <Test/> */}
    </div>
  )
}

export default App
