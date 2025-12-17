import { useEffect, useState } from 'react'
import type { Task } from '../types/task'
import { getTask } from '../api/tasks'

export const TaskDetails = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  const selectedTaskId = '4f310604-82b5-4afd-b9a4-ddf12dfac0a3'
  const boardId = '13923117-72de-4788-a7f0-4c42f162a5ab'

  useEffect(() => {
    if (!boardId || !selectedTaskId) return

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
          <h3>Title: {selectedTask.attributes.title}</h3>
          <p>Board title: {selectedTask.attributes.boardTitle}</p>
          <p>Description: {selectedTask.attributes.description ?? 'no description'}</p>
        </>
      )}
    </section>
  )
}
