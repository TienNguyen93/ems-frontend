import './App.css';
import { Switch, Route } from 'react-router-dom'

import Home from './components/HomePage';
import Tasks from './components/Tasks';
import Employees from './components/Employees';
import Task from './components/Task';
import EditTask from './components/EditTask';
import NewEmployee from './components/NewEmployee';
import Employee from './components/Employee';
import NewTask from './components/NewTask';
import EditEmployee from './components/EditEmployee';
import EmployeeNewTask from './components/EmployeeNewTask';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tasks/:id" component={Task} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/newtask" component={NewTask} />
        <Route exact path="/edittask/:id" component={EditTask} />
        <Route exact path="/employees" component={Employees} />
        <Route exact path="/newemployee" component={NewEmployee} />
        <Route exact path="/employees/:id" component={Employee} />
        <Route exact path="/editemployee/:id" component={EditEmployee} />
        <Route exact path="/employees/:id/newtask" component={EmployeeNewTask} />
      </Switch>
    </div>
  );
}

export default App;
