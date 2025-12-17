import { useEffect, useState } from 'react'
import type { Task } from '../types/task'
import { getTasks } from '../api/tasks'
import { TaskItem } from './TaskItem'

type Props = {
  selectedTaskId: string | null
  onTaskSelect: (taskId: string, boardId: string | null) => void
}

export const TaskList = ({ selectedTaskId, onTaskSelect }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    getTasks().then(data => setTasks(data))
  }, [])


  const onSelectTask = (task: Task) => onTaskSelect(task.id, task.attributes.boardId)

  if (tasks === null) return <h2>Загрузка...</h2>
  if (tasks.length === 0) return <h2>Задачи отсутствуют</h2>

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isSelected={task.id === selectedTaskId}
          onTaskSelected={onSelectTask}
        />
      ))}
    </ul>
  )
}
