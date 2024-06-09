import { useRef } from 'react';
import './parallax.scss';
import { motion, useScroll, useTransform} from 'framer-motion';

const Parallax = ({ type }) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset : ["start start" , "end start"]
    })
    const YBg = useTransform(scrollYProgress, [0,1],["0%","90%"])
    const yText = useTransform(scrollYProgress, [0,1], ["0%","90%"])
 
 
    return (
    <div ref={ref} className='parallax' style={{ background: type === 'services' ? 'linear-gradient(180deg, #111132, #0c0c1d)' : 
        "linear-gradient(180deg, #111132, #505064)"
     }}>
      <motion.h1 style={{y:yText}}>{type === 'services' ? 'What Do We Do?' : 'What we did'}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"
      style ={{ y:YBg,backgroundImage:`url(${type === "services"? "/planets.png" : "/sun.png"})`}}></motion.div>
      <motion.div style={{x:YBg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
