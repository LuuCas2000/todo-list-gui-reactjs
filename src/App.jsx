import { useState, useEffect } from 'react';
import axios from 'axios';

// CSS IMPORTS
import './App.css';

// COMPONENT IMPORTS
import HeaderNav from './components/Header';
import SearchEngine from './components/SearchEngine';
import TaskGallery from './components/TaskGallery';
import FilterTask from './components/FilterTask';

const App = () => {
    const [filterCompleted, setFilterCompleted] = useState(false);
    const [getSorting, setSorting] = useState('DESC');
    const [tasks, setTasks] = useState([]);

    const getData = async () => {
        console.log(getSorting)
        const { data } = await axios.get(`https://todo-list-api-ec3r.onrender.com/${getSorting.toLowerCase()}`);
        setTasks(data.data);
    };

    const addTaskHandler = async (url, task) => {
        await axios.post(url, { task: task });
        console.log(task);
        getData();
    };

    const deleteTaskHandler = async (id) => {
        console.log('clicked');
        await axios.delete(`https://todo-list-api-ec3r.onrender.com/task/delete/${id}`);
        getData();
    };

    const updateCompletedTaskHandler = async (id, task) => {
        //const isCompletedCheck = status === 'completed' ? 1 : 0;
        await axios.put(`https://todo-list-api-ec3r.onrender.com/task/update/${id}`, { task: task });
        console.log('update task');
        getData();
    };

    const updateTaskStatusHandler = async (status, id) => {
        await axios.put(`https://todo-list-api-ec3r.onrender.com/task/update/status/${id}`, { status: status });
        getData();
    }

    // FETCH TASK FROM DATABASE
    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        getData();
    }, [getSorting]);
    
    useEffect(() => {
        console.log(filterCompleted);
    }, [filterCompleted]);
    return (
        <>
        <div className="wrapper">
            <HeaderNav />
            <SearchEngine addTaskHandler={addTaskHandler}/>
            <FilterTask setSortingHandler={setSorting} setFilterCompletedHandler={setFilterCompleted}/>
            <TaskGallery getSorting={getSorting} updateTaskStatusHandler={updateTaskStatusHandler} updateCompletedTaskHandler={updateCompletedTaskHandler} deleteTaskHandler={deleteTaskHandler} tasks={tasks} isCompleted={filterCompleted} sortingHandler={getSorting} />
        </div>
        </>
    )
}

export default App;