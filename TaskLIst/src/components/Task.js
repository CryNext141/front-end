import React from 'react';
import "../styles.css";
import done from './done.svg';
import close from './close.svg';

const Task = ({ task, ...props }) => {
    const ActionBtn = () => (
        <div className="action-btn">
            {!task.done ? (
                <span aria-label="done" role="img" onClick={props.doneTask}>
                    <img src={done } alt="done" className="done"/>
                </span>
            ) : (
                    <span aria-label="delete" role="img" onClick={props.deleteTask}>
                        <img src={close} alt="close" class="close"/>
                </span>
            )}
        </div>
    );

  const className = 'task ' + (task.done ? 'task-done' : '');

  return (
      <div className={className}>
          
          <div className="task">
              <div className="task_title">{task.title}</div>
          </div>
          <ActionBtn></ActionBtn>

    </div>
  );
};

export default Task;
