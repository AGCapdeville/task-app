import React from 'react'
import TaskList from './TaskList'
import { useState } from 'react'

export default function TaskListContainer() {

    const [taskData, setTasks] = useState([])
    const [task, setTask] = useState('')

    const addTask = () => { 
        document.getElementById('taskInputField').value = ''
        if (task.length < 1){
            alert("Task is empty!")
        }else{
            setTasks(taskData => [...taskData, String(task)])
            setTask('')
        }
    }

    const updateTask = ({ target }) => {
        setTask(String(target.value.trim()))
    }

    const keyPressed = ({ key }) => {
        if (key === "Enter") {
          addTask()
        }
    }

    const submitHandler = e => {
        e.preventDefault()
    }

    const removeTask = (index) => {
        taskData.splice(index, 1);
        setTasks([...taskData])
    }

    const spaceing = {
        marginTop: '10vh'
    }

    return (
        <div style={spaceing}>
            <form onSubmit={submitHandler}>
                <div>
                    <input
                        id="taskInputField"
                        placeholder="Task..."
                        type="text"
                        onChange={updateTask}
                        onKeyPress={keyPressed}
                    />
                    <button type="button" onClick={addTask}>
                        ADD TASK
                    </button>
                </div>
            </form>            
            <TaskList Tasks={taskData} RemoveTask={removeTask}/>
        </div>
    )
}