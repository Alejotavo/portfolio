import "./timeline.scss"
import { Event } from "../../models/timeline";


const Timeline = ({ timeline }: { timeline: Event[] }) => {

return (
<div className="timeline mt-3rem">
    { timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                    <h3>{item.company}</h3>
                    <span   className={`badge rounded-pill text-dark ${item.mode === "CONTRACTOR" ? "bg-info" : "bg-warning"}`}>{item.mode}</span>
                    <p>{item.description}</p>
                </div>
            </div>
    )
    )}
    
</div>
   );
  }
  
  export default Timeline;