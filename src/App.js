import React from "react";
import Header from "./components/Header";
import "./App.css";
//import Body from './components/Body';
import TodoList from "./components/TodoList";
import InputTodoList from "./components/InputTodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [
        {
          description: " lorem ",
          status: true
        },
        {
          description:
            "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur, qui optio, nesciunt harum quis similique, voluptatem perferendis voluptatibus ex adipisci provident fuga delectus blanditiis! Esse minima debitis magni nemo.",
          status: false
        },
        {
          description:
            "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur, qui optio, nesciunt harum quis similique, voluptatem perferendis voluptatibus ex adipisci provident fuga delectus blanditiis! Esse minima debitis magni nemo.",
          status: true
        },
        {
          description:
            "6Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur, qui optio, nesciunt harum quis similique, voluptatem perferendis voluptatibus ex adipisci provident fuga delectus blanditiis! Esse minima debitis magni nemo.",
          status: true
        }
      ]
    };
  }

  handlePropsChild(string) {
    console.log(string);
  }

  componentDidMount() {}

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
    setTimeout(() => {
      console.log("Our data is fetched");
      this.setState({
        task: [
          {
            description:
              " img elements must have an alt prop, either with meaningful text, or an empty string for decorative images ",
            status: true
          },
          {
            description: "sdsdfsdfsdff",
            status: false
          },
          {
            description: "werwersdfsdf",
            status: true
          },
          {
            description:
              "Search for the keywords to learn more about each warning.",
            status: true
          }
        ]
      });
    }, 1000);
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
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

export default App;
