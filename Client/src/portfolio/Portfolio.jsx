import { useRef } from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/24863181/pexels-photo-24863181/free-photo-of-a-black-and-white-photo-of-a-clock-on-a-building.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quod placeat incidunt accusantium dolor, inventore repellendus optio, vitae amet, deleniti et. Laboriosam eos totam impedit consequuntur est magnam nisi odio."
    },
    {
        id:2,
        title:"Next.js Commerce",
        img:"https://images.pexels.com/photos/21896910/pexels-photo-21896910/free-photo-of-a-black-and-white-photo-of-a-dock-with-a-ladder.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quod placeat incidunt accusantium dolor, inventore repellendus optio, vitae amet, deleniti et. Laboriosam eos totam impedit consequuntur est magnam nisi odio."
    },
    {
        id:3,
        title:"Python Commerce",
        img:"https://images.pexels.com/photos/9815130/pexels-photo-9815130.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quod placeat incidunt accusantium dolor, inventore repellendus optio, vitae amet, deleniti et. Laboriosam eos totam impedit consequuntur est magnam nisi odio."
    },
    {
        id:4,
        title:"JS Commerce",
        img:"https://images.pexels.com/photos/24863181/pexels-photo-24863181/free-photo-of-a-black-and-white-photo-of-a-clock-on-a-building.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quod placeat incidunt accusantium dolor, inventore repellendus optio, vitae amet, deleniti et. Laboriosam eos totam impedit consequuntur est magnam nisi odio."
    }
]

const Single = ({item}) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref,
        // offset :["start start", "end end"]
         })
    const y =useTransform(scrollYProgress, [0,1], [-200,300])
    return(
        <section >
            <div className="container">
                <div className="wrapper">
                <div ref={ref} className="imageContainer">
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer"  style={{y:y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio = () => {
    const ref =useRef()
    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"],})
    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping :30
    })
    return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX:scaleX}} className="ProgressBar">

            </motion.div>
        </div>
      {items.map(item =>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
