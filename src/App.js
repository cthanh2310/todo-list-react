import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { render } from "@testing-library/react";
import Item from "./components/Item";
import AddTaskButton from "./components/AddTaskButton";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:
                JSON.parse(localStorage.getItem("tasks")) != null
                    ? JSON.parse(localStorage.getItem("tasks"))
                    : [],
        };
    }

    addTask = (taskName) => {
        if (taskName != "") {
            // this.state.tasks.push(taskName);
            // localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
            this.setState(
                (preState) => ({
                    //xai dang callback dam bao ko bi async
                    tasks: [...preState.tasks, taskName], //spread operator + new item at last
                }),
                () => {
                    localStorage.setItem(
                        "tasks",
                        JSON.stringify(this.state.tasks)
                    );
                }
            );
        }
        // this.setState({ tasks: this.state.tasks });
    };

    deleteTask = (e) => {
        console.log(e.target.id);
        this.state.tasks.splice(e.target.id, 1);
        this.setState(
            (preState) => ({
                tasks: [...preState.tasks],
            }),
            () => {
                localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
                console.log(this.state.tasks);
            }
        );
    };
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
                            <AddTaskButton
                                taskName={this.state.taskName}
                                onChangeHandler={this.onChangeHandler}
                                addTask={this.addTask}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
