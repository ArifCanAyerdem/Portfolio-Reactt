import "./contact.scss"

const Contact = () => {
  return (
    <div className="contact">
     <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
            <h2>
                Mail
            </h2>
            <span>arifcan_2000@hotmail.com</span>
        </div>
        <div className="item">
            <h2>
                Adress
            </h2>
            <span>Muğla/Türkiye</span>
        </div>
        <div className="item">
            <h2>
                Phone
            </h2>
            <span>+90 5078812350</span>
        </div>
     </div>
     <div className="formContainer">
        <form>
            <input type="text" required placeholder="Name" />
             <input type="email" required placeholder="Email" />
             <textarea  rows={8} placeholder="Message"></textarea>
             <button>Submit</button>
        </form>
     </div>
    </div>
  )
}

export default Contact
