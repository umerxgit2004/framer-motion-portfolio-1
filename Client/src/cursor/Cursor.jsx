import { useEffect, useState } from "react"
import {motion} from "framer-motion"
import "./cursor.scss"

const Cursor = () => {
    const [position, setPositon] = useState({x:0, y:0})
    useEffect (() =>{
        const mouseMove = (e) =>{
            setPositon({x:e.clientX, y:e.clientY})
        }
        window.addEventListener("mousemove",mouseMove)
        //clean up when you are listening an event
        return () =>{
            window.removeEventListener("mousemove",mouseMove)
        }
    },[])
  return (
    <motion.div className="cursor"
    animate={{x:position.x+10,y:position.y+10}} >
      
    </motion.div>
  )
}

export default Cursor
