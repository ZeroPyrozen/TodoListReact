import React from "react";
import Header from "./components/Header";
import "./App.css";
//import Body from './components/Body';
import TodoList from "./components/TodoList";
import InputTodoList from "./components/InputTodoList";
import Axios from "axios";
import { Provider, connect } from "react-redux";
import store from "./ReduxStore";
import { addTask } from "./ReduxAction";

class App extends React.Component {
  state = {
    task: []
  };

  constructor(props) {
    super(props);
    // this.state = {
    //   task: [
    //     {
    //       description: " lorem ",
    //       status: true
    //     },
    //     {
    //       description:
    //         "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur, qui optio, nesciunt harum quis similique, voluptatem perferendis voluptatibus ex adipisci provident fuga delectus blanditiis! Esse minima debitis magni nemo.",
    //       status: false
    //     },
    //     {
    //       description:
    //         "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur, qui optio, nesciunt harum quis similique, voluptatem perferendis voluptatibus ex adipisci provident fuga delectus blanditiis! Esse minima debitis magni nemo.",
    //       status: true
    //     },
    //     {
    //       description:
    //         "6Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur, qui optio, nesciunt harum quis similique, voluptatem perferendis voluptatibus ex adipisci provident fuga delectus blanditiis! Esse minima debitis magni nemo.",
    //       status: true
    //     }
    //   ]
    // };
  }

  handlePropsChild(string) {
    console.log(string);
  }

  deleteTask = idx => {
    let updatedTask = [...this.state.task];
    updatedTask.splice(idx, 1);

    this.setState({
      task: updatedTask
    });

    //console.log("ini delete", idx);
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
      if (res.status == 200) {
        const data = res.data;
        let datas = [];
        datas = data.map(tmp => {
          return {
            description: tmp.title,
            status: tmp.completed
          };
        });
        // this.setState({
        //   task: datas
        // });

        this.props.addTask(datas);
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
