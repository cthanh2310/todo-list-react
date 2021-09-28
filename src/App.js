import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { render } from "@testing-library/react";
import Item from "./components/Item";
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskName: "",
            tasks: [],
        };
    }
    onChangeHandler = (e) => {
        this.setState({ taskName: e.target.value });
    };
    addTask = (e) => {
        if (this.state.taskName != "") {
            this.state.tasks.push(this.state.taskName);
            this.setState({ taskName: "" });
            localStorage.setItem("tasks", this.state.tasks);
        }
    };
    addTask2 = (e) => {
        if (e.key === "Enter" && this.state.taskName != "") {
            this.state.tasks.push(this.state.taskName);
            this.setState({ taskName: "" });
            localStorage.setItem("tasks", this.state.tasks);
        }
    };
    deleteTask = (e) => {
        let newTasks = this.state.tasks;
        newTasks.splice(e.target.id, 1);
        this.setState({ tasks: newTasks });
        localStorage.setItem("tasks", this.state.tasks);
    };
    componentDidUpdate() {
        console.log(localStorage.getItem("tasks"));
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <div className="container">
                        <header className="header">
                            <h2>{this.state.tasks.length} Tasks</h2>
                            {/* <h4>4 Remain</h4> */}
                        </header>
                        <hr />
                        <div className="list-todo">
                            {this.state.tasks.map((task, index) => {
                                return (
                                    <Item
                                        deleteTask={this.deleteTask}
                                        key={index}
                                        task={task}
                                        index={index}
                                    />
                                );
                            })}
                        </div>
                        <div className="add-todo">
                            <input
                                value={this.state.taskName}
                                placeholder="Add Todo.."
                                type="text"
                                className="input-delete"
                                onChange={this.onChangeHandler}
                                onKeyPress={this.addTask2}
                            />
                            <button
                                onClick={this.addTask}
                                className="btn-delete--active"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
