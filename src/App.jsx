import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks/index.jsx"

function App() {
  //tasks array
  const [tasks, setTasks] = useState([]);

  //adding new tasks to array with older tasks saved
  function addTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  return (
    <>
    <Header onAddTask={addTask} />
    <Tasks />
    </>
  )
}

export default App
