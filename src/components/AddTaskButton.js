import React from "react";

class AddTaskButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskName: "",
        };
    }
    onChangeHandler = (e) => {
        this.setState({ taskName: e.target.value }, () => {
        });
    };
    addTask2 = (e) => {
        if (e.key === "Enter") {
            this.props.addTask(this.state.taskName);
            this.setState({ taskName: "" });
        }
    };
    addTask = () => {
        this.props.addTask(this.state.taskName);
        this.setState({ taskName: "" });
    };
    render() {
        return (
            <React.Fragment>
                <input
                    value={this.state.taskName}
                    placeholder="Add Todo.."
                    type="text"
                    className="input-delete"
                    onChange={this.onChangeHandler}
                    onKeyPress={this.addTask2}
                />
                <button onClick={this.addTask} className="btn-delete--active">
                    Add
                </button>
            </React.Fragment>
        );
    }
}

export default AddTaskButton;
