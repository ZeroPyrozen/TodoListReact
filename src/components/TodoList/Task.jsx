import React from "react";
import "./Task.css";

class Task extends React.Component {
  componentWillUnmount = () => {
    console.log(this.props);
  };
  render() {
    const task = this.props.tasks;
    const assignedClass = [];
    assignedClass.push(task.status ? "completed" : "");
    assignedClass.push("title-container");
    return (
      <div className="container">
        <label
          className={assignedClass.join(" ")}
          //onClick={() => props.onClickDelete(props.index)}
        >
          <input
            type="checkbox"
            className="regular-checkbox"
            onChange={() => this.props.onCheckStatus(this.props.index)}
            checked={task.status}
          />
          <label
            onClick={() => this.props.onCheckStatus(this.props.index)}
            className="big-checkbox"
          ></label>

          {task.description}
        </label>
        <label
          className="btnDelete"
          onClick={() => this.props.onClickDelete(this.props.index)}
        >
          REMOVE
        </label>
      </div>
    );
  }
}
// const Task = (props, idx) => {
//   const task = props.tasks;
//   const assignedClass = [];

//   assignedClass.push(task.status ? "completed" : "");
//   assignedClass.push("title-container");

//   return (
//     <div className="container">
//       <label
//         className={assignedClass.join(" ")}
//         //onClick={() => props.onClickDelete(props.index)}
//       >
//         <input
//           type="checkbox"
//           className="regular-checkbox"
//           onChange={() => props.onCheckStatus(props.index)}
//           checked={task.status}
//         />
//         <label
//           onClick={() => props.onCheckStatus(props.index)}
//           className="big-checkbox"
//         ></label>

//         {task.description}
//       </label>
//       <label
//         className="btnDelete"
//         onClick={() => props.onClickDelete(props.index)}
//       >
//         REMOVE
//       </label>
//     </div>
//   );
// };

export default Task;
