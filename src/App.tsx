import { useEffect, useState } from 'react'
import type { Task } from './types/task'
import { getTasks } from './api/tasks'

export const App = () => {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
  const [tasks, setTasks] = useState<Task[] | null>([])

  useEffect(() => {
    getTasks().then(data => setTasks(data))
  }, [])

  const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

  if (tasks === null) return <h1>Загрузка...</h1>
  if (tasks.length === 0) return <h1>Задачи отсутствуют</h1>

  return (
    <>
      <button onClick={() => setSelectedTaskId(null)}>Сбросить выделение</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              backgroundColor: priorities[task.attributes.priority],
              color: 'black',
              border: `2px solid ${task.id === selectedTaskId ? 'blue' : 'black'}`,
            }}
            onClick={() => setSelectedTaskId(task.id)}
          >
            <p>
              <b>Заголовок: </b>
              <span style={{ textDecorationLine: task.attributes.status ? 'line-through' : 'none' }}>
                {task.attributes.title}
              </span>
            </p>
            <p>
              <b>Статус: </b>
              <input type="checkbox" defaultChecked={task.attributes.status === 2} />
            </p>
            <p>
              <b>Дата создания задачи: </b>
              <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}
