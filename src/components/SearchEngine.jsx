import { useState } from 'react';

// COMPONENT IMPORTS

// CSS IMPORTS
import './SearchEngine.css';

const SearchEngine = ({ addTaskHandler }) => {
    const [task, setTask] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        addTaskHandler('https://todo-list-api-ec3r.onrender.com/task/new', task);
        setTask('');
    };

    return (
        <div className="search__engine">
            <form onSubmit={(e) => onSubmitHandler(e)}>
                <input type="text" onChange={(e) => setTask(e.target.value)} required value={task} placeholder='what needs to be done ?'/>
                <button type="submit">
                    ADD
                </button>
            </form>
        </div>
    )
}

export default SearchEngine;