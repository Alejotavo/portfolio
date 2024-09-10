

import { ProgressBar } from 'react-bootstrap';
import {Skill} from '../../models/skill'

interface ChildComponentProps {
    skill: Skill[]
}



const Progress = ({ skill }: ChildComponentProps) => {
    

    return (
        <div data-aos="zoom-in">
            {skill.map((x, index) => (
                <div key={index} className="col-12 mb-3">
                    <label className="form-label">{x.title}</label>
                    <ProgressBar now={x.value} label={`${x.value}%`} visuallyHidden />
                </div>
            ))}
        </div>
    )
}
  export default Progress;
  