import React from "react";
import "../App.css";

class InputTodoList extends React.Component {
  state = {
    title: ""
  };

  changeHandler = e => {
    this.setState({
      title: e.target.value
    });
  };

  submitNewTodo = e => {
    this.props.addNewTodo(this.state.title);
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <div className="todoListForm">
        <form onSubmit={this.submitNewTodo}>
          <input
            type="text"
            name="title"
            placeholder="Insert your to do"
            onChange={this.changeHandler}
            value={this.state.title}
          ></input>
          <input
            type="submit"
            value="Add New Todo"
            className="btnHidden"
          ></input>
          <label
            className="btnAddNewTodo"
            onClick={() => {
              this.submitNewTodo();
            }}
          >
            Add New Todo
          </label>
        </form>
      </div>
    );
  }
}

export default InputTodoList;
