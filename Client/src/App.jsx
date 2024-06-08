import Test from "./Test"
import "./app.scss"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <div>
      <section>
        <Navbar/>
      </section>
      <section id="Homepage">Parralex</section>
      <section>Services</section>
      <section id="Portfolio">Parralex</section>
      <section >Portfolio1</section>
      <section >Portfolio2</section>
      <section >Portfolio3</section>
      <section id="Contact">Contact</section> 
      {/* {/* <Test/> */}
    </div>
  )
}

export default App
