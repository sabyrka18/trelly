import { useState } from 'react'

const tasks = [
  {
    id: 1,
    title: 'Купить продукты на неделю',
    isDone: false,
    addedAt: '1 сентября',
    priority: 2,
  },
  {
    id: 2,
    title: 'Полить цветы',
    isDone: true,
    addedAt: '2 сентября',
    priority: 0,
  },
  {
    id: 3,
    title: 'Сходить на тренировку',
    isDone: false,
    addedAt: '3 сентября',
    priority: 1,
  },
]

export const App = () => {
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null)

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
              backgroundColor: priorities[task.priority],
              color: 'black',
              border: `2px solid ${task.id === selectedTaskId ? 'blue' : 'black'}`,
            }}
            onClick={() => setSelectedTaskId(task.id)}
          >
            <p>
              <b>Заголовок: </b>
              <span style={{ textDecorationLine: task.isDone ? 'line-through' : 'none' }}>{task.title}</span>
            </p>
            <p>
              <b>Статус: </b>
              <input type="checkbox" defaultChecked={task.isDone} />
            </p>
            <p>
              <b>Дата создания задачи: </b>
              <span>{task.addedAt}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}
