import type { Task } from '../types/task'
import { API_KEY } from '../config/env'

export const getTasks = async (): Promise<Task[]> => {
  const res = await fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
    headers: { 'api-key': API_KEY },
  })
  const json: { data: Task[] } = await res.json()
  return json.data
}
