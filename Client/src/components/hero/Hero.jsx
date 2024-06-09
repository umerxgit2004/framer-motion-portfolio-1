import { motion } from "framer-motion"
import "./hero.scss"
const textVariants = {
    initial :{
        x:-500,
        opacity : 0
    },
    animate :{
        x : 0,
        opacity : 1,
        transition:{
            duration:1,
            staggerChildrem:0.1
        }
    },

    scrollButton :{
        opacity : 0,
        y:10,
        transition :{
           duration:2,
           repeat : Infinity
        }
    }
}

const sliderVariants = {
    initial :{
        x:0,
    },
    animate:{
        x:"-220%",
        transition :{
            repeat : Infinity,
            repeatType: "mirror",
            duration : 20
        }
    }
}
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate ="animate">
        <motion.h2 variants={textVariants}>Muhammad Umer</motion.h2>
        <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
        <div className="buttons">
            <motion.button variants={textVariants}>See the Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
        </div>
        <motion.img variants={textVariants} src="/scroll.png" alt=""animate = "scrollButton" />
      </motion.div>
      </div>
      <motion.div className="slidingTextContainser" variants = {sliderVariants} initial ="initial" animate ="animate" >
        Full Stack Developer 
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
