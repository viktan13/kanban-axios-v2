import React from 'react';

function DeleteTaskModal(props) {
    const {task} = props;


    function onDelete() {
        props.deleteTask(task._id);
    }

    return (

            <div class="modal fade" id={task._id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Delete task</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete task: <b>{task.name}</b>?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={onDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default DeleteTaskModal;