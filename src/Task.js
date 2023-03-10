import React from 'react';
import DeleteTaskModal from "./DeleteTaskModal";
import UpdateTaskModal from "./UpdateTaskModal";

const Task = (props) => {

    return (
        <div className="card mb-3">

            <div className="card-body">
                <h5 className="card-title">{props.task.name}</h5>
                <p className="card-text">{props.task.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Priority: {props.task.priority}
                    <button
                        type='button'
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => props.changePriority(props.task._id, +props.task.priority + 1)}
                        disabled={+props.task.priority === props.priorities[props.priorities.length - 1]}
                    >↑</button>
                    <button
                        type='button'
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => props.changePriority(props.task._id, +props.task.priority - 1)}
                        disabled={+props.task.priority === props.priorities[0]}
                    >↓</button>
                </li>
                <li className="list-group-item">Status: {props.task.status}


                </li>
            </ul>
            <div className="card-body">
                <button
                    type='button'
                    className="btn btn-outline-info"
                    onClick={() => props.moveTask(props.task._id, props.task.status, -1)}
                    disabled={props.task.status === props.statuses[0]}
                >←  </button>
                <button
                    type='button'
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target={`#update${props.task._id}`}
                >Update</button>
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target={`#delete${props.task._id}`}
                >
                    Delete
                </button>
                <DeleteTaskModal
                    task={props.task}
                    deleteTask={props.deleteTask}
                />

                <button
                    type='button'
                    className="btn btn-outline-info"
                    onClick={() => props.moveTask(props.task._id, props.task.status, 1)}
                    disabled={props.task.status === props.statuses[props.statuses.length - 1]}
                >→</button>

                <UpdateTaskModal
                    task={props.task}
                    priorities={props.priorities}
                    statuses={props.statuses}
                    updateTask={props.updateTask}
                />
            </div>
        </div>

    );
};

export default Task;