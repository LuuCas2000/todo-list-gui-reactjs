import { useState } from 'react';
import axios from 'axios';

// COMPONENT IMPORTS

// CSS IMPORTS
import './SearchEngine.css';

const SearchEngine = () => {
    const [task, setTask] = useState('');

    const addTaskHandler = async () => {
        await axios.post('http://localhost:3000/task/new', { task: task });
    };

    return (
        <div className="search__engine">
            <form onSubmit={() => addTaskHandler()}>
                <input type="text" onChange={(e) => setTask(e.target.value)} required placeholder='what needs to be done ?'/>
                <button type="submit">
                    ADD
                </button>
            </form>
        </div>
    )
}

export default SearchEngine;