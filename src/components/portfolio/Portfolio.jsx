import "./portfolio.scss"
import { motion,useScroll,useSpring, useTransform} from "framer-motion";
import { useRef } from "react";



const items=[
{

    id:1,
    title:"React Commerce",
    img:"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur aperiam consequuntur qui fugit cupiditate quisquam, beatae velit in ut nesciunt? Repellat aliquid necessitatibus, possimus eligendi totam officia in facilis!",


},{

    id:2,
    title:"Next.js Admin Dashboard",
    img:"https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur aperiam consequuntur qui fugit cupiditate quisquam, beatae velit in ut nesciunt? Repellat aliquid necessitatibus, possimus eligendi totam officia in facilis!",


},{

    id:3,
    title:"Unity Game",
    img:"https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur aperiam consequuntur qui fugit cupiditate quisquam, beatae velit in ut nesciunt? Repellat aliquid necessitatibus, possimus eligendi totam officia in facilis!",


},{

    id:4,
    title:"First Person Shooter",
    img:"https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur aperiam consequuntur qui fugit cupiditate quisquam, beatae velit in ut nesciunt? Repellat aliquid necessitatibus, possimus eligendi totam officia in facilis!",


},
];

const Single =({item})=>{

    const ref=useRef();

    const {scrollYProgress}=useScroll({target:ref,
       // offset:["start start","end start"],
    });

    const y= useTransform(scrollYProgress, [0,1],[-300,300]);

    return(
<section >
   <div className="container">
    <div className="wrapper">
        <div className="imageContainer" ref={ref}>
    <img src="item.img" alt="" />
    </div>
    <motion.div className="textContainer" style={{y}}>
        <h2 >{item.title}</h2>
        <p>{item.desc}</p>
        <button>See Demo</button>
    </motion.div>
    
    </div>
   </div>
</section>

    );
};


const Portfolio = () => {

    const ref= useRef();


const {scrollYProgress}=useScroll({target:ref, offset:["end end","start start"],});

const scaleX=useSpring(scrollYProgress,{stiffness:100, damping:30

})





  return (
    <div className="portfolio" ref={ref}>
<div className="progress">
    <h1>Featured Works</h1>
    <motion.div style={{scaleX}} className="progressBar">

    </motion.div>
</div>

      {items.map((item)=>(
<Single item={item} key={item.id}/>
      ))}
    </div>
    
  )
}

export default Portfolio
