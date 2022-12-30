import axios from 'axios'
import {useEffect, useState} from "react";
import Column from "./Column";
import "bootstrap/dist/css/bootstrap.css";
import CreateTaskModal from "./CreateTaskModal";


function App() {
  const [statuses, setStatuses] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [priorities,] = useState(Array.from({length: 10}, (_, i) => i + 1));

  function getStatuses(){
    axios.get(process.env.REACT_APP_API_URL_STATUSES)
        .then(response=>{
          setStatuses(response.data)
        }).catch(error => {
      console.log(error)
    })
  }

  function getTasks(){
    axios.get(process.env.REACT_APP_API_URL_TASK)
        .then(response=>{
          setTasks(response.data)
        }).catch(error => {
      console.log(error)
    })
  }

  function updateTask(id, newTask){
    axios.patch(`${process.env.REACT_APP_API_URL_TASK}/${id}`, newTask)
        .then(response=>{
          getTasks()
        })
        .catch(error => {
          console.log(error)
        })
  }

  function addTask(newTask){
    axios.post(process.env.REACT_APP_API_URL_TASK, newTask)
        .then(response=>{
          getTasks()
        })
        .catch(error => {
          console.log(error)
        })
  }

  function changePriority(id, priority) {
      axios.patch(`${process.env.REACT_APP_API_URL_TASK}/${id}`, {priority})
          .then(response => {
              getTasks();
          })
          .catch(err => {
              console.log(err);
          })
  }

  function moveTask(id, status, direction) {
      const statArray = statuses.map(el => el.title);
      const currentIndex = statArray.indexOf(status);
      const newStatus = statArray[currentIndex + direction]
      axios.patch(`${process.env.REACT_APP_API_URL_TASK}/${id}`, {status: newStatus})
          .then(response => {
              getTasks();
          })
          .catch(err => {
              console.log(err);
          })
  }

  function deleteTask(id) {
      axios.delete(`${process.env.REACT_APP_API_URL_TASK}/${id}`)
          .then(() => {
              getTasks();
          })
          .catch(err => {
              console.log(err);
          })
  }

  useEffect(()=>{
    getStatuses();
    getTasks();
  }, [])


  return (
      <div className="App">
        <h1>Kanban Board + Axios</h1>

        <div className="container text-center">

          <CreateTaskModal
              addTask={addTask}
              statuses={statuses}
              priorities={priorities}
          />

          <div className="row align-items-start">
            {statuses.map(status=> <Column
                status ={status}
                key={status._id}
                tasks={tasks}
                changePriority={changePriority}
                priorities={priorities}
                moveTask={moveTask}
                statuses={statuses.map(el => el.title)}
                deleteTask={deleteTask}
                updateTask={updateTask}
            />)}

          </div>
        </div>

      </div>
  );
}

export default App;