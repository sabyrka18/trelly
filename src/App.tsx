const tasks = [
  { id: 1, title: 'Купить продукты на неделю', isDone: false },
  { id: 2, title: 'Полить цветы', isDone: true },
  { id: 3, title: 'Сходить на тренировку', isDone: false },
]

export const App = () => {
  return (
    <>
      <h1>Список дел</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>{task.title}</div>
            <input type="checkbox" defaultChecked={task.isDone} />
          </li>
        ))}
      </ul>
    </>
  )
}
