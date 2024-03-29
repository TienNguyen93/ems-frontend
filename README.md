# Employee Management System

## Team members: Tien Nguyen, Celeste Urena, Huynh Thai, Kristina Delia

[View Backend Repository](https://github.com/TienNguyen93/ems-backend)

## Table of Contents
1. [Product Spec](#Product-Spec)
2. [API Endpoints](#API-Endpoints)
3. [Final Demo](#Final-Demo)
4. [Wireframes](#Wireframes) 

## Product Spec

### User Stories 
#### As a user I, 
* [x] will land on a visually pleasing homepage by default, which allows navigation to view all tasks and all employees 

* [x] can navigate to all employees view, and 
  * [x] see a list of all employees in the database
  * [x] see an informative message if no employees exist
  * [x] add a new employee
    * [x] with a validated form displaying real-time error messages

* [x] can navigate to any single employee’s view, and
  * [x] see details about a single employee, including tasks assigned (if any) 
  * [x] see an informative message if no tasks belong to that employee
  * [x] can navigate to single task view (see below)
  * [x] delete the employee 
  * [x] edit employee information (including adding/removing tasks)
    * [x] with a validated form displaying real-time error messages

* [x] can navigate to all tasks view, and
  * [x] see a list of all tasks in the database
  * [x] see an informative message if no tasks exist
  * [x] add a new task
    * [x] with a validated form displaying real-time error messages

* [x] can navigate to any single task’s view, and
  * [x] see details about a single task, including the employee assigned
  * [x] should display “Unassigned” if the task is not assigned to an employee
  * [x] navigate to single employee view of the employee assigned the task
  * [x] delete the task 
  * [x] edit the task’s information (including employee assigned)
    * [x] with a validated form displaying real-time error messages 
    
## API Endpoints
 | HTTP Verb | Endpoint | Description |
 | :----------|:----------|:------------ |
 |`GET` |/employees | query all employees |
 |`GET` |/employees/:id | query employee by id |
 |`POST` |/newemployee | add new employee |
 |`PUT` |/editemployee/:id | update employee information by id |
 |`GET` |/tasks | query all tasks |
 |`GET` |/tasks/:id | query task by id |
 |`POST` |/newtask | add new task |
 |`PUT` |/edittask/:id | update task information by id |

## Final Demo

https://user-images.githubusercontent.com/57969388/209046046-f70d098c-b2fe-4cf9-a15c-e54e0cd1349e.mov

## Wireframes
![Homepage](https://user-images.githubusercontent.com/57969388/205528044-939aa72c-7952-4c1c-a719-f14bedb76b80.png)
![Ems-wireframe](https://user-images.githubusercontent.com/57969388/205528048-6fa6f8e8-5c04-4a60-a95e-5f3e0c805494.png)

## Interactive Prototype

<img src= "https://user-images.githubusercontent.com/57969388/205527118-63abac60-2157-4d2b-834f-52606b7c15ae.gif" width=700>

