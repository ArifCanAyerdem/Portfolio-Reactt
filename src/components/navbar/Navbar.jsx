import "./navbar.scss"
import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <div className="navbar"> {/*Sidebar*/}
     <div className="wrapper">
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Arif Can Ayerdem</motion.span>
        <div className="Social"></div>
        <a href=""><img src="/facebook.png" alt="" /></a>
        <a href=""><img src="/instagram.png" alt="" /></a>
        <a href=""><img src="/dribbble.png" alt="" /></a>
        <a href=""><img src="/youtube.png" alt="" /></a>



      </div>
    </div>
  )
}

export default Navbar
