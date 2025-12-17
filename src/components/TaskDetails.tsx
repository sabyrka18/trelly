import { useEffect, useState } from 'react'
import type { Task } from '../types/task'
import { getTask } from '../api/tasks'

type Props = {
  selectedTaskId: string | null
  boardId: string | null
}

export const TaskDetails = ({ selectedTaskId, boardId }: Props) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  useEffect(() => {
    if (!boardId || !selectedTaskId) {
      setSelectedTask(null)
      return
    }

    setSelectedTask(null)
    getTask(boardId, selectedTaskId).then(setSelectedTask)
  }, [boardId, selectedTaskId])


  return (
    <section>
      <h2>Task details</h2>

      {!selectedTaskId ? (
        <p>Task is not selected</p>
      ) : !selectedTask ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>
            <b>Title:</b>
            {selectedTask.attributes.title}
          </p>
          <p>
            <b>Board title:</b>
            {selectedTask.attributes.boardTitle}
          </p>
          <p>
            <b>Description:</b>
            {selectedTask.attributes.description ?? 'no description'}
          </p>
        </>
      )}
    </section>
  )
}
