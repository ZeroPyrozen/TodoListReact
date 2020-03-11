import React from "react";
import Task from "./TodoList/Task";

class TodoList extends React.Component {
  render() {
    const tasks = this.props.task;
    const temp = tasks.map((x, i) => {
      return (
        <Task
          key={i}
          tasks={x}
          index={i}
          onClickDelete={this.props.onClickDelete}
          onCheckStatus={this.props.onCheckStatus}
        />
      );
    });
    return temp;
  }
}

export default TodoList;
