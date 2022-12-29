import axios from 'axios'
import {useEffect, useState} from "react";
import Column from "./Column";
import "bootstrap/dist/css/bootstrap.css";
import CreateTaskModal from "./CreateTaskModal";

function App() {
  const [statuses, setStatuses] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [priorities, setPriorities] = useState(Array.from({length: 10}, (_, i) => i + 1));

  function getStatuses(){
    axios.get('https://expressjs-server.up.railway.app/statuses')
        .then(response=>{
          setStatuses(response.data)
        }).catch(error => {
      console.log(error)
    })
  }

  function getTasks(){
    axios.get('https://expressjs-server.up.railway.app/tasks')
        .then(response=>{
          setTasks(response.data)
        }).catch(error => {
      console.log(error)
    })
  }

  function updateTask(id){
    axios.patch(`https://expressjs-server.up.railway.app/tasks/${id}`, {name: 'Hello'})
        .then(response=>{
          getTasks()
        })
        .catch(error => {
          console.log(error)
        })
  }

  function addTask(newTask){
    axios.post(`https://expressjs-server.up.railway.app/tasks`, newTask)
        .then(response=>{
          getTasks()
        })
        .catch(error => {
          console.log(error)
        })
  }

  function changePriority(id, priority) {
      axios.patch(`https://expressjs-server.up.railway.app/tasks/${id}`, {priority})
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
      axios.patch(`https://expressjs-server.up.railway.app/tasks/${id}`, {status: newStatus})
          .then(response => {
              getTasks();
          })
          .catch(err => {
              console.log(err);
          })
  }

  function deleteTask(id) {
      axios.delete(`https://expressjs-server.up.railway.app/tasks/${id}`)
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
            />)}

          </div>
        </div>

      </div>
  );
}

export default App;