import "./portfolio.scss"




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

    return(
<section>
    {item.title}
</section>

    )
}


const Portfolio = () => {
  return (
    <div className="portfolio">
      {items.map((item)=>(
<Single item={item} key={item.id}/>
      ))}
    </div>
    
  )
}

export default Portfolio
