import "./services.scss"
import {animate, motion} from "framer-motion"
const variants = {
  initial : {
    x : -500,
    y:100,
    opacity : 0
  },
  animate :{
    x:0,
    opacity :1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1
    }
  }
}
const Services = () => {
  return (
    <motion.div className="services" variants={variants} initial="initial"  whileInView="animate">
      <motion.div className="textContainer">
        <p>I focus on helping your brand grow<br/> and move forward</p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants} >
        <div className="title">
            <img src="/people.png" alt="" />
            <h1>
                <motion.b whileHover={{color:"orange"}}>Unique</motion.b>Ideas
            </h1>
        </div>
        <div className="title">
           
            <h1>
                <motion.b whileHover={{color:"orange"}}>For Your</motion.b>Business 
            </h1>
            <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants} >
        <motion.div className="box"
        whileHover={{background:"Lightgray",color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem, ipsum dolor 
                sit amet consectetur 
                adipisicing elit. Aliquam
                 quaerat ad rem dignissimos 
                 similique. Voluptas eaque 
                 necessitatibus vitae, qui illo aspernatur nostrum quia aperiam laudantium unde 
                 repudiandae consectetur obcaecati
                  consequatur!</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box"
        whileHover={{background:"Lightgray",color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem, ipsum dolor 
                sit amet consectetur 
                adipisicing elit. Aliquam
                 quaerat ad rem dignissimos 
                 similique. Voluptas eaque 
                 necessitatibus vitae, qui illo aspernatur nostrum quia aperiam laudantium unde 
                 repudiandae consectetur obcaecati
                  consequatur!</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box"
        whileHover={{background:"Lightgray",color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem, ipsum dolor 
                sit amet consectetur 
                adipisicing elit. Aliquam
                 quaerat ad rem dignissimos 
                 similique. Voluptas eaque 
                 necessitatibus vitae, qui illo aspernatur nostrum quia aperiam laudantium unde 
                 repudiandae consectetur obcaecati
                  consequatur!</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box"
        whileHover={{background:"Lightgray",color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem, ipsum dolor 
                sit amet consectetur 
                adipisicing elit. Aliquam
                 quaerat ad rem dignissimos 
                 similique. Voluptas eaque 
                 necessitatibus vitae, qui illo aspernatur nostrum quia aperiam laudantium unde 
                 repudiandae consectetur obcaecati
                  consequatur!</p>
            <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
