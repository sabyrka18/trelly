import { useEffect, useState } from 'react'
import type { Task } from './types/task'
import { getTask, getTasks } from './api/tasks'

export const App = () => {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [boardId, setBoardId] = useState<string | null>(null)
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    getTasks().then(data => setTasks(data))
  }, [])

  useEffect(() => {
    if (!boardId || !selectedTaskId) return

    getTask(boardId, selectedTaskId).then(setSelectedTask)
  }, [boardId, selectedTaskId])

  const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

  const onSelectTask = (task: Task) => {
    setSelectedTaskId(task.id)
    setBoardId(task.attributes.boardId)
    setSelectedTask(null)
  }

  if (tasks === null) return <h1>Загрузка...</h1>
  if (tasks.length === 0) return <h1>Задачи отсутствуют</h1>

  return (
    <main>
      <button onClick={() => setSelectedTaskId(null)}>Сбросить выделение</button>
      <div style={{ display: 'flex', columnGap: '30px' }}>
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
        <section>
          <h2>Task details</h2>

          {!selectedTaskId ? (
            <p>Task is not selected</p>
          ) : !selectedTask ? (
            <p>Loading...</p>
          ) : (
            <>
              <h3>Title: {selectedTask.attributes.title}</h3>
              <p>Board title: {selectedTask.attributes.boardTitle}</p>
              <p>Description: {selectedTask.attributes.description ?? 'no description'}</p>
            </>
          )}
        </section>
      </div>
    </main>
  )
}
