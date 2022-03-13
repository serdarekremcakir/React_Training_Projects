import React from 'react'

function Footer({ todos, setTodos, setlistStatus, counter }) {

    const clearAllCompleted = () => {
        setTodos(todos.filter((x) => !x.completed))
    }


    const changeStatus = (e) => {
        setlistStatus(e.target.innerHTML);
        document.querySelectorAll("a").forEach((item) => item.classList.remove("selected"));
        e.target.classList.add("selected")
    }


    return (
        <div>
            <footer className="footer">
                {/* <!-- This should be `0 items left` by default --> */}
                <span className="todo-count">
                    <strong>{counter} </strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <a className="selected" onClick={changeStatus}>All</a>
                    </li>
                    <li>
                        <a className="" onClick={changeStatus} >Active</a>
                    </li>
                    <li>
                        <a className="" onClick={changeStatus}>Completed</a>
                    </li>
                </ul>

                {/* <!-- Hidden if no completed items are left ↓ --> */}
                <button className="clear-completed" onClick={clearAllCompleted}>
                    Clear completed
                </button>
            </footer>
            
        </div>
    )
}

export default Footer