

import { ProgressBar } from 'react-bootstrap';
import {Skill} from '../../models/skill'

interface ChildComponentProps {
    skill: Skill[]
}



const Progress = ({ skill }: ChildComponentProps) => {
    

    return (
        <>
            {skill.map((x, index) => (
                <div key={index} className="col-12 mb-3">
                    <label className="form-label">{x.title}</label>
                    <ProgressBar now={x.value} label={`${x.value}%`} visuallyHidden />
                </div>
            ))}
        </>
    )
}
  export default Progress;
  