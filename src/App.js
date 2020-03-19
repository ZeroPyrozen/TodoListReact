import React from "react";
import Header from "./components/Header";
import "./App.css";
import TodoList from "./components/TodoList";
import InputTodoList from "./components/InputTodoList";
import Axios from "axios";
import { connect } from "react-redux";
import { addTask } from "./ReduxAction";

class App extends React.Component {
  state = {
    task: []
  };

  handlePropsChild(string) {
    console.log(string);
  }

  deleteTask = idx => {
    let updatedTask = [...this.state.task];
    updatedTask.splice(idx, 1);

    this.setState({
      task: updatedTask
    });
  };

  addNewTodo = title => {
    const newTask = {
      description: title,
      status: false
    };

    this.setState({
      task: [...this.state.task, newTask]
    });
  };

  changeStatusHandler = idx => {
    let updatedTask = [...this.state.task];

    updatedTask[idx].status = !updatedTask[idx].status;

    this.setState({
      task: updatedTask
    });
  };

  getData = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/todos`).then(res => {
      console.log(res);
      if (res.status === 200) {
        const data = res.data;
        let dataCollection = [];
        dataCollection = data.map(tmp => {
          return {
            description: tmp.title,
            status: tmp.completed
          };
        });

        this.props.addTask(dataCollection);
      }
    });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    console.log(this.props.reduxTask, 1);
    return (
      <div className="App">
        <InputTodoList addNewTodo={this.addNewTodo} />
        <div className="bodyContainer">
          <Header title="To Do List" />
          <TodoList
            task={this.state.task}
            onClickDelete={this.deleteTask}
            onCheckStatus={this.changeStatusHandler}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reduxTask: state.task
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: function(task) {
      return dispatch(addTask(task));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
