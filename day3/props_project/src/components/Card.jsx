import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
      <div className="card">
        <div className="top">
          <img src={props.brandLogo} alt="" />
          <button>save <Bookmark size={20} /> </button>
        </div>
        <div className="center">
          <h3>{props.companyName} <span>{props.datePosted}</span></h3>
          <h4>{props.post}</h4>
          <div className="tag">
            <h3>{props.tag1}</h3>
            <h3>{props.tag2}</h3>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}r</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
