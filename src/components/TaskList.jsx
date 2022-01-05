import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";

const taskContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5px',
    marginBot: '5px'
}

const taskSpace = {
    marginLeft: '5px',
    marginRight: '5px'
}

export default function TaskList({Tasks, RemoveTask}) {

    if (Tasks) {
        return (
            <div>                
                {Tasks.map((task, index) => (
                    <div key={index} style={taskContainer}>
                        <div style={taskSpace}>
                            {task}
                        </div> 
                        <AiOutlineCloseCircle onClick={()=>RemoveTask(index)}/>
                    </div>
                ))}
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
}