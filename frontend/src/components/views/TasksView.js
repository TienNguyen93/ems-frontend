import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const TasksView = ({ tasks }) => {
  const navigate = useHistory()

  if (!tasks.length) {
    return (
    <div>
      <h2>There are no tasks.</h2>
      </div>
    );
  }

  const clickEdit = () => {
    navigate.push('/editTask')
  }

  return (
    <div>
      <h1>Manage Task</h1>
      <div className="all-tasks">
      <h4>Click on Task description to edit</h4>
        <table>
          <tbody>
            <tr>
              <th>Tasks</th>
              <th>Description</th>
              <th>Priority Level</th>
              <th>Status</th>
              <th>Delete Task</th>
            </tr>
            {tasks.map(task => {
              return (
                <tr key={task}>
                  <td>{task.id}</td>
                  <td>
                    <Link className="link" to={`/tasks/${task.id}`}>
                      {task.description}
                    </Link>
                  </td>
                  <td>{task.priority_level}</td>
                  {task.completion_status === null
                    ? <td>Incomplete</td>
                    : <td>Complete</td>}
                    <td><button>X</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="buttons-wrap">    
        <Link to = {``}>
          <button>
            Back to main page 
            </button>
            </Link> 
        </div>
    </div>
  )
}

export default TasksView