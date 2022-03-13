import React, { useState, useEffect } from 'react'

function Header({todos, setTodos}) {
    const [form, setForm] = useState({ task: "", completed: false });

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.task === "") {
            alert("Write something")
            return false;
        }

        setTodos([...todos, form])
        setForm({ task: "", completed: false })
        console.log(form);
    }

    useEffect(() => {
        console.log("degisiklik", todos);
    }, [todos])

    const checkboxChange = (i) => {
        setTodos(todos.map(
            (item, index) => {
                if (i == "All" && todos.every((x) => x.completed == true)) {

                    return { ...item, completed: false }
                }
                return i == "All" ? { ...item, completed: true } : index === i ? { ...item, completed: !item.completed } : { ...item }
            })
        )
        console.log(todos);
    }

    const deleteTodo = (i) => {
        setTodos(todos.filter((item,index) => index !== i ))
    }

    return (
        <div>  
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={onSubmit}>
                    <input name="task" value={form.task} onChange={onChangeInput} className="new-todo" placeholder="What needs to be done?" autoFocus />
                </form>
            </header>

            {/* <!-- This section should be hidden by default and shown when there are todos --> */}
            <section className="main">
                <input className="toggle-all"
                    type="checkbox"
                    checked={todos.every((x) => x.completed === true)}
                    onChange={() => { }}
                />
                <label htmlFor="toggle-all" onClick={() => checkboxChange("All")}>
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {
                        todos.map((item, i) => (
                            <li key={i} className={(item.completed) ? "completed" : ""}>
                                <div className="view">
                                    <input
                                        className="toggle"
                                        type="checkbox"
                                        checked={(item.completed) ? true : false}
                                        onChange={() => checkboxChange(i)}
                                    />
                                    <label> {item.task} </label>
                                    <button className="destroy" onClick={() => deleteTodo(i)} ></button>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </section>
        </div>
    )
}

export default Header