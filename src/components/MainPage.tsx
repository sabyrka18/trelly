import { PageTitle } from './PageTitle'
import { TaskList } from './TaskList'
import { TaskDetails } from './TaskDetails'
import { useState } from 'react'

export const MainPage = () => {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
  const [boardId, setBoardId] = useState<string | null>(null)

  const handleTaskSelect = (taskId: string, boardId: string | null) => {
    setSelectedTaskId(taskId)
    setBoardId(boardId)
  }

  return (
    <main>
      <PageTitle />
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <TaskList
          selectedTaskId={selectedTaskId}
          onTaskSelect={handleTaskSelect}
        />
        <TaskDetails
          selectedTaskId={selectedTaskId}
          boardId={boardId}
        />
      </div>
    </main>
  )
}
