import { motion } from "framer-motion";


const variants={
open:{
    transition:{
        staggerChildren:0.1,
        
    }
},
close:{
    transition:{
        staggerChildren:0.05,
        staggerDirection:-1,
        
    }
},
    
};
const itemVariants={
    open:{
        y:0,
        opacity:1,
    },
    close:{
        y:50,
        opacity:0,
    },
        
    };



const Links = () => {

const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About",
    ]; 


return (
    <motion.div className="links" variants={variants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
        {items.map(item=>(
        <motion.a href = {`#${item}`} key={item}
        variants={itemVariants}>
            {item}
            </motion.a>
        ))}
        </motion.div>
  )
  
};

export default Links;
