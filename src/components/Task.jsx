import { useState, useRef, useEffect } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";

// CSS IMPORTS
import './Task.css';

const Task = ({ updateTaskStatusHandler, updateCompletedTaskHandler, deleteTaskHandler, isCompleted, task, id, createdAt }) => {
    const [currentValue, setCurrentValue] = useState('');
    const [getNewValue, setNewValue] = useState('');
   
    const taskString = useRef(null);
    const editTaskForm = useRef(null);
    const checkBox = useRef(null);

    const editTaskHandler = () => {
        console.log('working')
        if (editTaskForm.current) {
            taskString.current.classList.toggle('hide');
            editTaskForm.current.classList.toggle('hide');
        }
    }

    const updateTaskHandler = (e) => {
        e.preventDefault();
        updateCompletedTaskHandler(id, getNewValue);
        if (editTaskForm.current) {
            taskString.current.classList.toggle('hide');
            editTaskForm.current.classList.toggle('hide');
        }
    }

    const checkTaskHandler = (e) => {
        if (e.target.getAttribute('checked') === null) {
            e.target.setAttribute('checked', true);
            updateTaskStatusHandler(1, id);
        } else {
            uncheckTaskHandler(e);
        }
    }

    const uncheckTaskHandler = (e) => {
        if (e.target.getAttribute('checked')) {
            e.target.removeAttribute('checked', true);
            updateTaskStatusHandler(0, id);
        }
    }

    useEffect(() => {
        if (isCompleted === 1) {
            checkBox.current.setAttribute('checked', true);
        } else {
            checkBox.current.removeAttribute('checked')
        }
    
        const editTaskBtn = editTaskForm.current;
        const task = taskString.current.getAttribute('value');
        setCurrentValue(task);
    }, []);
    return (
        <div className="task__div">
            <div className="check__box_div">
                <input onClick={(e) => checkTaskHandler(e)} ref={checkBox} type="checkbox" id="check__box"/>
            </div>
            <div className="task__name_div">
                <span ref={taskString} value={task}>{task}</span>
                <form onSubmit={(e) => updateTaskHandler(e)} className="hide" ref={editTaskForm}>
                    <input type="text" onChange={(e) => setNewValue(e.target.value)} defaultValue={currentValue}/>
                    <button type="submit">edit</button>
                </form>
            </div>
            <div className="btn__func_div">
                <div className="btns_div">
                    <MdEdit onClick={() => editTaskHandler()} style={{ fontSize: '25px', margin: '0 8px', color: 'blue', cursor: 'pointer' }} />
                    <MdDelete onClick={() => deleteTaskHandler(id)} style={{ fontSize: '25px', margin: '0 8px', color: 'red', cursor: 'pointer' }}/>
                </div>
                <div className="date__info_div">
                    <span>{new Date(createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    )
}

export default Task;