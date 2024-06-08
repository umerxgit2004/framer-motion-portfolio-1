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
      <section id="Homepage">Services</section>
      <section id="Homepage">Parralex</section>
      <section id="Homepage">Portfolio1</section>
      <section id="Homepage">Portfolio2</section>
      <section id="Homepage">Portfolio3</section>
      <section id="Homepage">Contact</section> 
      {/* {/* <Test/> */}
    </div>
  )
}

export default App
