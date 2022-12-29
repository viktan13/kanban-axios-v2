import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteTaskModal(props) {
    const {task, toggle, modal} = props;


    function onDelete() {
        props.deleteTask(props.task._id);
        toggle();
    }

    return (
        <>

            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Delete Task</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete task: <b>"{task.name}"</b>?
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={onDelete}
                    >
                        Delete
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default DeleteTaskModal;