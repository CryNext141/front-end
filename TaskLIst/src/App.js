import React from 'react';
import Task from './components/Task';
import Taskinput from './components/Taskinput';
import "./styles.css";

//Glory to StackOverflow


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: [
                { id: 0, title: 'Create Page', done: false },
                { id: 1, title: 'Implement javascript logic', done: false },
                { id: 2, title: 'Set up connection to the DB', done: false }
            ]
        };
    }

    addTask = task => {
        this.setState(state => {
            let { tasks } = state;
            tasks.push({
                id: tasks.length !== 0 ? tasks.length : 0,
                title: task,
                done: false
            });
            return tasks;
        });
    };

    doneTask  =  id =>{
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
        let { tasks } = state;
        tasks[index].done = true;
        return tasks;
        });
    };

    deleteTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let { tasks } = state;
            delete tasks[index];
            return tasks;
        });
    };

    
    render() {
        const { tasks } = this.state;

        return (
            <div className="App">
                <h1 id="up">Task list</h1>
           
                <div className="content">
                    <div className="tasks">
                        {tasks.map(task => (
                            <Task doneTask={() => this.doneTask(task.id)}
                                deleteTask={() => this.deleteTask(task.id) } 
                            task={task} key={task.id} ></Task>
                        )) }
                    </div>
                    <div className="input_area">
                        <Taskinput addTask={this.addTask }></Taskinput>
                    </div>
                </div>
                <h2 id="down"></h2>
            </div>
        );
    }
}


export default App;