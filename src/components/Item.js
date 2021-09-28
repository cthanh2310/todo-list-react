import React from "react";

function Item({ task, index, deleteTask }) {
    return (
        <div>
            <div key={index} className="body">
                <label className="label-checkbox">
                    <input type="checkbox" className="checkbox-btn" />
                    {task}
                </label>
                <button
                    onClick={deleteTask}
                    className="btn-delete"
                    key={index}
                    id={index}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Item;
