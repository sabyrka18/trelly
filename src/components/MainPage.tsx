import { PageTitle } from './PageTitle'
import { TaskList } from './TaskList'
import { TaskDetails } from './TaskDetails'

export const MainPage = () => {
  return (
    <main>
      <PageTitle />
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <TaskList />
        <TaskDetails />
      </div>
    </main>
  )
}
