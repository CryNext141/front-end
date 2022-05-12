import React from 'react';
import "../styles.css";


class Taskinput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            inputArea:  ''
        };
    }

    addTask = () => {
        const { input } = this.state;

        if (input ) {
            this.props.addTask(input);
            this.setState({ input: '' });
        }
        this.inputArea.value = "";
    };

    inputChange = event => {
        this.setState({ input: event.target.value });
    };

    render() {
        const { input } = this.state;

        return (
            <div className="titleInput">
                <div className="title">Title</div>
                    <input type='text' placeholder='title' onChange={this.inputChange} value={input }></input>
                <div className="description">Description</div>
                    <textarea type='text' placeholder="description" className="descInput" rows="8" ref={el => this.inputArea = el}></textarea>
                <div className="add_box">
                    <button className="add" onClick={this.addTask}>Add</button>
                </div>
            </div>    
        );
    }
}

export default Taskinput;