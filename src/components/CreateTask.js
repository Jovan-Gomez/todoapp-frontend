import React from 'react'
import DashBoard from './DashBoard'
import TaskForm from './TaskForm'
const CreateTask = () => {
    return (
       <DashBoard section="Create new Task">
           <TaskForm section="Create new Task"/>
       </DashBoard>
    )
}

export default CreateTask
