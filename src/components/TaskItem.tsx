import type { Task } from '../types/task'

type Props = {
  task: Task
  isSelected: boolean
  onTaskSelected: (task: Task) => void
}

export const TaskItem = ({ task, isSelected, onTaskSelected }: Props) => {
  const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

  return (
    <li
      style={{
        backgroundColor: priorities[task.attributes.priority],
        color: 'black',
        border: `2px solid ${isSelected ? 'blue' : 'black'}`,
      }}
      onClick={() => onTaskSelected(task)}
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
  )
}
