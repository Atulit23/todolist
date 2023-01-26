import React, { useState } from 'react'
import { store } from './store'
import cross from './close.png'

export default function Todo() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])
    return (
        <main>
            <div className="todo__main">
                <div className="todos__header">
                    <p className="header">My To-Do List</p>
                    <div className="add__todo">
                        <input type="text" placeholder='Enter the task...' className="todo__input" onChange={(e) => {
                            setTask(e.target.value)
                        }} />
                        <button className="add" onClick={() => {
                            store.dispatch({
                                type: 'ADD_MSG',
                                text: task
                            })
                            setTasks(store.getState().tasks)
                        }}>Add</button>
                    </div>
                </div>
                <div className="todo__tasks">
                    {tasks.length > 0 ? tasks.map((item, index) => (
                        <div className="todo" style={index % 2 == 0 ? { background: 'rgb(152 152 152)' } : { background: '#353535' }}>
                            <div className="sub__todo">
                                <p>{item}</p>
                                <button onClick={() => {
                                    store.dispatch({
                                        type: 'DEL_MSG',
                                        text: item
                                    })
                                    setTasks(store.getState().tasks)
                                }}><img src={cross} /></button>
                            </div>
                        </div>
                    )) : store.getState().tasks.map((item, index) => (
                        <div className="todo" style={index % 2 == 0 ? { background: 'rgb(152 152 152)' } : { background: '#353535' }}>
                            <div className="sub__todo">
                                <p>{item}</p>
                                <button onClick={() => {
                                    store.dispatch({
                                        type: 'DEL_MSG',
                                        text: item
                                    })
                                    setTasks(store.getState().tasks)
                                }}><img src={cross} /></button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main >
    )
}
