import { CiFilter } from "react-icons/ci";

// CSS IMPORTS
import './FilterTask.css';

const FilterTask = ({ setSortingHandler, setFilterCompletedHandler }) => {
    const filterTaskHandler = (e) => {
        setFilterCompletedHandler(e.target.value);
    };

    const sortingTaskHandler = (e) => {
        setSortingHandler(e.target.value);
    };

    return (
        <div className="filter__task">
            <div className="btns__wrapper">
            <label style={{ marginRight: '12px' }}className="hide_filter_icon">Filter</label>
            <CiFilter style={{ fontSize: '20px' }} className="hide_filter_icon"/>
            <div className="filter__div">
            <label for="task">Filter</label>
            <select onChange={(e) => filterTaskHandler(e)} name="task">
                <option value="0">All</option>
                <option value="1">Completed</option>
            </select>
            </div>
            <div className="sort__div">
                <label for="sort">Sort</label>
                <select onChange={(e) => sortingTaskHandler(e)} defaultValue="DESC" name="sort">
                    <option value="DESC">most recent</option>
                    <option value="ASC">least recent</option>
                </select>
            </div>
            </div>
        </div>
    )
}

export default FilterTask;