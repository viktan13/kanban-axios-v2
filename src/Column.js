import React from 'react';
import Task from "./Task";

const Column = (props) => {

    return (
        <div className="col">
            <h2>{props.status.title}</h2>
            {props.tasks.filter(el=>el.status===props.status.title).map(task=><Task
                key={task._id}
                task={task}
                changePriority={props.changePriority}
                priorities={props.priorities}
                moveTask={props.moveTask}
                statuses={props.statuses}
                deleteTask={props.deleteTask}
                updateTask={props.updateTask}
            />)}
        </div>
    );
};

export default Column;