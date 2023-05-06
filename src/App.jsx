import React, { useEffect, useState } from "react"
import NewTask from "./Components/NewTask"
import Form from "./Components/Form"
import styled from "styled-components"

const Container = styled.div`
`

function getTasksFromLocalStorage() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  return storedTasks || [];
}

function App() {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage());

  function handleAddTask(newTask) {
    const id = tasks.length + 1;
    const taskWithId = { ...newTask, id };
    setTasks([...tasks, taskWithId]);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleRemoveTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <Container>
      <Form onAddTask={handleAddTask} />
      <div>
        {tasks.map((task) => (
          <NewTask
            key={task.id}
            {...task}
            onRemoveTask={handleRemoveTask}
          />
        ))}
      </div>
    </Container>
  )
}

export default App
