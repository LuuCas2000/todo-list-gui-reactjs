import { useEffect } from 'react';

// CSS IMPORTS
import './TaskGallery.css';

// COMPONENT IMPORTS
import Task from './Task';

const TaskGallery = ({ getSorting, updateTaskStatusHandler, updateCompletedTaskHandler, deleteTaskHandler, tasks, isCompleted, sortingHandler }) => {

    useEffect(() => {
        console.log(new Date().toLocaleDateString());
    }, [sortingHandler]);

    useEffect(() => {
    }, [isCompleted])
    return (
        <div className="task__gallery"> 
            <div className="task">
                {tasks.filter(task => {
                    if (Number(isCompleted) === 1) {
                        return task.isCompleted === 1;
                    } else {
                        return task;
                    }
                }).map(task => { 
                    return <Task updateTaskStatusHandler={updateTaskStatusHandler} updateCompletedTaskHandler={updateCompletedTaskHandler} deleteTaskHandler={deleteTaskHandler} key={task.id} isCompleted={task.isCompleted} task={task.task} id={task.id} createdAt={task.createdAt}/>
                })}
            </div>
        </div>
    )
}

export default TaskGallery;