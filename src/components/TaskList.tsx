import { useEffect, useState } from 'react'
import type { Task } from '../types/task'
import { getTasks } from '../api/tasks'

export const TaskList = () => {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
  const [_, setSelectedTask] = useState<Task | null>(null)
  const [__, setBoardId] = useState<string | null>(null)
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    getTasks().then(data => setTasks(data))
  }, [])

  const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

  const onSelectTask = (task: Task) => {
    setSelectedTaskId(task.id)
    setBoardId(task.attributes.boardId)
    setSelectedTask(null)
  }

  if (tasks === null) return <h2>Загрузка...</h2>
  if (tasks.length === 0) return <h2>Задачи отсутствуют</h2>

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            backgroundColor: priorities[task.attributes.priority],
            color: 'black',
            border: `2px solid ${task.id === selectedTaskId ? 'blue' : 'black'}`,
          }}
          onClick={() => onSelectTask(task)}
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
  )
}
