import React, {useState} from 'react';

const CreateTaskModal = (props) => {

    const {addTask, statuses, priorities} = props;

    const [newTask, setNewTask] = useState({
        name: '',
        description: '',
        priority: 1,
        status: 'todo',
    })

    function onCreate() {
        addTask(newTask);
        setNewTask({
            name: '',
            description: '',
            priority: 1,
            status: 'todo',
        })
    }

    return (
        <div>
            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal"
                    data-bs-target="#createModal">
                Add task
            </button>

            <div className="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add task</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Name:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={newTask.name}
                                    onChange={e => setNewTask({...newTask, name: e.target.value})}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Description:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={newTask.description}
                                    onChange={e => setNewTask({...newTask, description: e.target.value})}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Priority:</span>
                                <select
                                    className="form-select"
                                    value={newTask.priority}
                                    onChange={e => setNewTask({...newTask, priority: e.target.value})}
                                >
                                    {priorities.map(el => (
                                        <option value={el} key={el}>{el}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Status:</span>
                                <select
                                    className="form-select"
                                    value={newTask.status}
                                    onChange={e => setNewTask({...newTask, status: e.target.value})}
                                >
                                    {statuses.map(el => (
                                        <option value={el.title} key={el.title}>{el.title}</option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={onCreate}
                            >Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTaskModal;